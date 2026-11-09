import assert from "node:assert/strict";
import { test } from "node:test";

import { BOOKING_PUBLIC, isInternalLeak } from "./public-messages";

test("patient copy never leaks env names, demo host, or confirmed-booking language", () => {
  for (const value of Object.values(BOOKING_PUBLIC)) {
    assert.equal(isInternalLeak(value), false);
    assert.equal(/programare confirmată/i.test(value), false);
  }
});
