import assert from "node:assert/strict";
import { test } from "node:test";

import { decidePatientLink } from "./verify-patient";

test("does not link when there is no match", () => {
  assert.deepEqual(decidePatientLink([], "0722123456", "a@b.ro", "Ion Popescu"), { status: "none" });
});

test("links only a unique verified phone and compatible name", () => {
  const decision = decidePatientLink(
    [{ Id: 12, LastName: "Popescu", FirstName: "Ion", Phone: "0722123456", Email: "a@b.ro" }],
    "0722 123 456",
    "a@b.ro",
    "Ion Popescu",
  );
  assert.deepEqual(decision, { status: "unique", patientId: 12 });
});

test("treats multiple compatible matches as ambiguous", () => {
  const decision = decidePatientLink(
    [
      { Id: 1, LastName: "Popescu", FirstName: "Ion", Phone: "0722123456", Email: "a@b.ro" },
      { Id: 2, LastName: "Popescu", FirstName: "Ionut", Phone: "0722123456", Email: "a@b.ro" },
    ],
    "0722123456",
    "a@b.ro",
    "Ion Popescu",
  );
  assert.equal(decision.status, "ambiguous");
});

test("does not link when emails conflict", () => {
  const decision = decidePatientLink(
    [{ Id: 12, LastName: "Popescu", FirstName: "Ion", Phone: "0722123456", Email: "other@b.ro" }],
    "0722123456",
    "a@b.ro",
    "Ion Popescu",
  );
  assert.equal(decision.status, "none");
});
