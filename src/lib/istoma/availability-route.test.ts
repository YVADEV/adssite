import assert from "node:assert/strict";
import { afterEach, test } from "node:test";

import { GET } from "../../app/api/booking/availability/route";
import { BOOKING_PUBLIC, isInternalLeak } from "./public-messages";

const originalUrl = process.env.ISTOMA_API_BASE_URL;
const originalKey = process.env.ISTOMA_API_KEY;

afterEach(() => {
  if (originalUrl === undefined) delete process.env.ISTOMA_API_BASE_URL;
  else process.env.ISTOMA_API_BASE_URL = originalUrl;
  if (originalKey === undefined) delete process.env.ISTOMA_API_KEY;
  else process.env.ISTOMA_API_KEY = originalKey;
});

test("availability API hides missing credential names from the browser", async () => {
  delete process.env.ISTOMA_API_BASE_URL;
  delete process.env.ISTOMA_API_KEY;
  const response = await GET(new Request("http://localhost/api/booking/availability?date=2026-11-20"));
  const json = (await response.json()) as { ok?: boolean; error?: string; missing?: string[]; code?: string };
  assert.equal(response.status, 503);
  assert.equal(json.ok, false);
  assert.equal(json.code, "NOT_CONFIGURED");
  assert.equal(json.error, BOOKING_PUBLIC.unavailable);
  assert.equal(json.missing, undefined);
  assert.equal(isInternalLeak(json.error ?? ""), false);
});
