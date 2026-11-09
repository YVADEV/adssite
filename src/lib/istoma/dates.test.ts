import assert from "node:assert/strict";
import { test } from "node:test";

import { durationMinutes, parseIsoLocal, parseYmd, toDdMmYyyy, toDdMmYyyyHHmm, ymdFromDate } from "./dates";

test("formats appointment dates as DDMMYYYYHHmm", () => {
  const date = new Date(2026, 0, 25, 14, 30);
  assert.equal(toDdMmYyyy(date), "25012026");
  assert.equal(toDdMmYyyyHHmm(date), "250120261430");
});

test("parses iStoma local datetimes without inventing hours", () => {
  const date = parseIsoLocal("2026-01-25T09:00:00");
  assert.equal(date.getHours(), 9);
  assert.equal(ymdFromDate(date), "2026-01-25");
});

test("keeps UTC instants comparable for timeout reconciliation", () => {
  const local = new Date(2026, 0, 25, 10, 0, 0);
  const parsed = parseIsoLocal(local.toISOString());
  assert.equal(parsed.getTime(), local.getTime());
});

test("rejects invalid calendar dates", () => {
  assert.throws(() => parseYmd("2026-02-31"));
});

test("computes duration from slot bounds", () => {
  assert.equal(durationMinutes(new Date(2026, 0, 25, 9, 0), new Date(2026, 0, 25, 10, 0)), 60);
});
