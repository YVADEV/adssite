import assert from "node:assert/strict";
import { afterEach, test } from "node:test";

import {
  REQUEST_SUCCESS_MESSAGE,
  buildAddAppointmentRequestPayload,
  buildAppointmentRequestNotes,
  createAppointmentRequest,
} from "./booking";
import { BOOKING_PUBLIC } from "./public-messages";

const originalFetch = globalThis.fetch;
const originalEnv = {
  url: process.env.ISTOMA_API_BASE_URL,
  key: process.env.ISTOMA_API_KEY,
  live: process.env.ISTOMA_LIVE_BOOKING_ENABLED,
  source: process.env.ISTOMA_MARKETING_SOURCE_ID,
  branch: process.env.ISTOMA_BRANCH_ID,
};

afterEach(() => {
  globalThis.fetch = originalFetch;
  restore("ISTOMA_API_BASE_URL", originalEnv.url);
  restore("ISTOMA_API_KEY", originalEnv.key);
  restore("ISTOMA_LIVE_BOOKING_ENABLED", originalEnv.live);
  restore("ISTOMA_MARKETING_SOURCE_ID", originalEnv.source);
  restore("ISTOMA_BRANCH_ID", originalEnv.branch);
});

function restore(name: string, value: string | undefined) {
  if (value === undefined) delete process.env[name];
  else process.env[name] = value;
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}

function productionEnv() {
  process.env.ISTOMA_API_BASE_URL = "https://clinic.example.com/api/Patient";
  process.env.ISTOMA_API_KEY = "test-key-not-for-production";
  process.env.ISTOMA_MARKETING_SOURCE_ID = "8";
  process.env.ISTOMA_LIVE_BOOKING_ENABLED = "true";
}

const sampleInput = {
  fullName: "Ioana Mosut",
  email: "ioana@example.com",
  phone: "0748085933",
  preferredDate: "2026-11-25",
  consent: true,
  source: "home-page",
  origin: "https://quiet-daffodil-0aeb6a.netlify.app",
};

test("maps a request to AddAppointmentRequest and preserves the preferred date in Notes", () => {
  productionEnv();
  const payload = buildAddAppointmentRequestPayload(sampleInput);
  assert.equal(payload.FullName, "Ioana Mosut");
  assert.equal(payload.Phone, "0748085933");
  assert.equal(payload.Email, "ioana@example.com");
  assert.equal(payload.MarketingSourceId, 8);
  assert.match(payload.Notes, /25\.11\.2026/);
  assert.match(payload.Notes, /preferință, nu o programare confirmată/);
  assert.equal("AppointmentDate" in payload, false);
});

test("does not invent BranchId or Category", () => {
  productionEnv();
  delete process.env.ISTOMA_BRANCH_ID;
  const payload = buildAddAppointmentRequestPayload(sampleInput);
  assert.equal(payload.BranchId, undefined);
  assert.equal("Category" in payload, false);
});

test("includes BranchId only when the clinic configured it", () => {
  productionEnv();
  process.env.ISTOMA_BRANCH_ID = "3";
  const payload = buildAddAppointmentRequestPayload(sampleInput);
  assert.equal(payload.BranchId, 3);
});

test("does not call iStoma when production credentials are missing; emails the clinic instead", async () => {
  delete process.env.ISTOMA_API_BASE_URL;
  delete process.env.ISTOMA_API_KEY;
  delete process.env.ISTOMA_MARKETING_SOURCE_ID;
  const urls: string[] = [];
  globalThis.fetch = (async (url) => {
    urls.push(String(url));
    return jsonResponse({ success: true });
  }) as typeof fetch;
  const result = await createAppointmentRequest(sampleInput);
  assert.equal(result.ok, true);
  assert.equal(urls.some((url) => url.includes("AddAppointmentRequest")), false);
  assert.ok(urls.length > 0);
});

test("does not invent MarketingSourceId; falls back instead of guessing", async () => {
  process.env.ISTOMA_API_BASE_URL = "https://clinic.example.com/api/Patient";
  process.env.ISTOMA_API_KEY = "test-key-not-for-production";
  delete process.env.ISTOMA_MARKETING_SOURCE_ID;
  process.env.ISTOMA_LIVE_BOOKING_ENABLED = "true";
  globalThis.fetch = (async (url) => {
    assert.equal(String(url).includes("AddAppointmentRequest"), false);
    return jsonResponse({ success: true });
  }) as typeof fetch;
  const result = await createAppointmentRequest(sampleInput);
  assert.equal(result.ok, true);
});

test("keeps live iStoma writes off until explicitly enabled and still delivers the request", async () => {
  productionEnv();
  process.env.ISTOMA_LIVE_BOOKING_ENABLED = "false";
  const urls: string[] = [];
  globalThis.fetch = (async (url) => {
    urls.push(String(url));
    return jsonResponse({ success: true });
  }) as typeof fetch;
  const result = await createAppointmentRequest(sampleInput);
  assert.equal(result.ok, true);
  assert.equal(urls.some((url) => url.includes("AddAppointmentRequest")), false);
});

test("creates a request only via AddAppointmentRequest after Success", async () => {
  productionEnv();
  const calls: string[] = [];
  globalThis.fetch = (async (url, init) => {
    calls.push(`${init?.method ?? "GET"} ${String(url)}`);
    return jsonResponse({ Success: true, Message: "Appointment request created successfully" });
  }) as typeof fetch;
  const result = await createAppointmentRequest(sampleInput);
  assert.equal(result.ok, true);
  if (result.ok) assert.equal(result.message, REQUEST_SUCCESS_MESSAGE);
  assert.ok(calls.some((url) => url.includes("POST") && url.includes("AddAppointmentRequest")));
  assert.equal(calls.some((url) => /AddAppointment\//.test(url) && !url.includes("AddAppointmentRequest")), false);
  assert.equal(calls.some((url) => url.includes("GetActivityIntervals")), false);
  assert.equal(calls.some((url) => url.includes("AddAppointmentRequestWithDate")), false);
});

test("does not claim success when iStoma rejects the request", async () => {
  productionEnv();
  globalThis.fetch = (async () => jsonResponse({ Success: false, Message: "Validation error" })) as typeof fetch;
  const result = await createAppointmentRequest(sampleInput);
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.equal(result.status, 502);
    assert.equal(result.error, BOOKING_PUBLIC.rejected);
    assert.equal(/confirmat/i.test(result.error), false);
  }
});

test("does not retry AddAppointmentRequest after timeout", async () => {
  productionEnv();
  let calls = 0;
  globalThis.fetch = (async () => {
    calls += 1;
    const error = new Error("aborted");
    error.name = "AbortError";
    throw error;
  }) as typeof fetch;
  const result = await createAppointmentRequest(sampleInput);
  assert.equal(calls, 1);
  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.status, 504);
});

test("notes never describe the date as a reserved slot", () => {
  const notes = buildAppointmentRequestNotes("2026-11-25", "contact-page");
  assert.match(notes, /nu o programare confirmată/);
  assert.equal(/rezervat|confirmată în agenda/i.test(notes), false);
});
