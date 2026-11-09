import assert from "node:assert/strict";
import { test } from "node:test";

import { validateBookingInput } from "./validation";

const tomorrow = (() => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
})();

test("requires name, email, phone, preferred date and consent", () => {
  const errors = validateBookingInput({
    fullName: "A",
    email: "bad",
    phone: "12",
    preferredDate: "",
    consent: false,
  });
  assert.ok(errors.some((error) => error.field === "fullName"));
  assert.ok(errors.some((error) => error.field === "email"));
  assert.ok(errors.some((error) => error.field === "phone"));
  assert.ok(errors.some((error) => error.field === "preferredDate"));
  assert.ok(errors.some((error) => error.field === "consent"));
});

test("accepts a complete appointment request payload", () => {
  const errors = validateBookingInput({
    fullName: "Ioana Mosut",
    email: "ioana@example.com",
    phone: "0748085933",
    preferredDate: tomorrow,
    consent: true,
  });
  assert.equal(errors.length, 0);
});
