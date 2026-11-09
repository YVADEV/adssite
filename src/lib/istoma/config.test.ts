import assert from "node:assert/strict";
import { test } from "node:test";

import { getIstomaConfigStatus, getIstomaRequestConfigStatus, isDemoEndpoint } from "./config";

test("rejects the documented demo host", () => {
  assert.equal(isDemoEndpoint("https://istomademo2.idava.ro/api/Patient"), true);
  assert.equal(isDemoEndpoint("https://clinic.example.com/api/Patient"), false);
});

test("reports missing production credentials", () => {
  const previousUrl = process.env.ISTOMA_API_BASE_URL;
  const previousKey = process.env.ISTOMA_API_KEY;
  const previousSource = process.env.ISTOMA_MARKETING_SOURCE_ID;
  delete process.env.ISTOMA_API_BASE_URL;
  delete process.env.ISTOMA_API_KEY;
  delete process.env.ISTOMA_MARKETING_SOURCE_ID;
  const status = getIstomaConfigStatus();
  const requestStatus = getIstomaRequestConfigStatus();
  assert.equal(status.ready, false);
  assert.ok(status.missing.includes("ISTOMA_API_BASE_URL"));
  assert.ok(status.missing.includes("ISTOMA_API_KEY"));
  assert.ok(requestStatus.missing.includes("ISTOMA_MARKETING_SOURCE_ID"));
  if (previousUrl === undefined) delete process.env.ISTOMA_API_BASE_URL;
  else process.env.ISTOMA_API_BASE_URL = previousUrl;
  if (previousKey === undefined) delete process.env.ISTOMA_API_KEY;
  else process.env.ISTOMA_API_KEY = previousKey;
  if (previousSource === undefined) delete process.env.ISTOMA_MARKETING_SOURCE_ID;
  else process.env.ISTOMA_MARKETING_SOURCE_ID = previousSource;
});

test("blocks demo URL even if a key is present", () => {
  process.env.ISTOMA_API_BASE_URL = "https://istomademo2.idava.ro/api/Patient";
  process.env.ISTOMA_API_KEY = "not-a-real-key";
  const status = getIstomaConfigStatus();
  assert.equal(status.ready, false);
  assert.ok(status.blockers.length > 0);
  delete process.env.ISTOMA_API_BASE_URL;
  delete process.env.ISTOMA_API_KEY;
});
