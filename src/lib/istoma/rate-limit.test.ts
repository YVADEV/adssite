import assert from "node:assert/strict";
import { test } from "node:test";

import { bookingFingerprint, consumeIdempotency, rateLimit } from "./rate-limit";

test("rate-limits after the configured number of attempts", () => {
  const key = `test-${Date.now()}`;
  assert.equal(rateLimit(key, 2, 60_000).ok, true);
  assert.equal(rateLimit(key, 2, 60_000).ok, true);
  assert.equal(rateLimit(key, 2, 60_000).ok, false);
});

test("blocks duplicate in-flight fingerprints", () => {
  const fingerprint = bookingFingerprint("0748 085 933", "2026-11-10");
  assert.equal(consumeIdempotency(fingerprint, 5_000), "fresh");
  assert.equal(consumeIdempotency(fingerprint, 5_000), "duplicate");
});
