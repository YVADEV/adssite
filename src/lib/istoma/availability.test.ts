import assert from "node:assert/strict";
import { afterEach, test } from "node:test";

import { findMatchingSlot, getActivityIntervalsForDay, toPublicSlot } from "./availability";
import { IstomaAuthError } from "./client";

test("does not invent slots from incomplete iStoma rows", () => {
  assert.equal(toPublicSlot({ DoctorId: 0, LocationId: 1, StartDate: "", EndDate: "" }), null);
});

test("keeps only real future slots with a doctor", () => {
  const start = new Date(Date.now() + 24 * 60 * 60 * 1000);
  start.setHours(10, 0, 0, 0);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const slot = toPublicSlot({
    DoctorId: 5,
    LocationId: 12,
    StartDate: start.toISOString(),
    EndDate: end.toISOString(),
    BranchId: 3,
  });
  assert.ok(slot);
  assert.equal(slot?.doctorId, 5);
  assert.equal(slot?.durationMinutes, 60);
});

const originalFetch = globalThis.fetch;
const originalUrl = process.env.ISTOMA_API_BASE_URL;
const originalKey = process.env.ISTOMA_API_KEY;

afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalUrl === undefined) delete process.env.ISTOMA_API_BASE_URL;
  else process.env.ISTOMA_API_BASE_URL = originalUrl;
  if (originalKey === undefined) delete process.env.ISTOMA_API_KEY;
  else process.env.ISTOMA_API_KEY = originalKey;
});

test("maps an empty iStoma day to zero public slots", async () => {
  process.env.ISTOMA_API_BASE_URL = "https://clinic.example.com/api/Patient";
  process.env.ISTOMA_API_KEY = "test-key-not-for-production";
  globalThis.fetch = (async () =>
    new Response(JSON.stringify({ Success: true, Data: [] }), { status: 200 })) as typeof fetch;
  const slots = await getActivityIntervalsForDay("2026-11-20");
  assert.deepEqual(slots, []);
});

test("surfaces authentication failure instead of an empty day", async () => {
  process.env.ISTOMA_API_BASE_URL = "https://clinic.example.com/api/Patient";
  process.env.ISTOMA_API_KEY = "test-key-not-for-production";
  globalThis.fetch = (async () =>
    new Response(JSON.stringify({ Success: false, Message: "Invalid API key" }), { status: 401 })) as typeof fetch;
  await assert.rejects(() => getActivityIntervalsForDay("2026-11-20"), IstomaAuthError);
});

test("keeps real slots from GetActivityIntervals", async () => {
  process.env.ISTOMA_API_BASE_URL = "https://clinic.example.com/api/Patient";
  process.env.ISTOMA_API_KEY = "test-key-not-for-production";
  const start = new Date(Date.now() + 24 * 60 * 60 * 1000);
  start.setHours(11, 0, 0, 0);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  globalThis.fetch = (async (url) => {
    assert.match(String(url), /GetActivityIntervals/);
    assert.doesNotMatch(String(url), /istomademo/);
    return new Response(
      JSON.stringify({
        Success: true,
        Data: [{ DoctorId: 7, LocationId: 2, StartDate: start.toISOString(), EndDate: end.toISOString() }],
      }),
      { status: 200 },
    );
  }) as typeof fetch;
  const slots = await getActivityIntervalsForDay("2026-11-20");
  assert.equal(slots.length, 1);
  assert.equal(slots[0]?.doctorId, 7);
});

test("matches a selected slot without creating a new hour", () => {
  const slots = [
    {
      start: "2026-11-10T08:00:00.000Z",
      end: "2026-11-10T09:00:00.000Z",
      doctorId: 5,
      cabinetId: 12,
      durationMinutes: 60,
      label: "10:00",
    },
  ];
  assert.ok(findMatchingSlot(slots, "2026-11-10T08:00:00.000Z"));
  assert.equal(findMatchingSlot(slots, "2026-11-10T11:00:00.000Z"), undefined);
});
