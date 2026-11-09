import assert from "node:assert/strict";
import { test } from "node:test";

import {
  EMAIL_THEME,
  buildClinicNotificationHtml,
  buildClinicNotificationText,
  clinicNotificationSubject,
  escapeHtml,
  formatPreferredDateLabel,
  telHref,
} from "./clinic-notification";

test("escapes user-provided HTML in the clinic email", () => {
  const html = buildClinicNotificationHtml({
    fullName: `<script>alert(1)</script>`,
    phone: "+40748085933",
    email: `a@b.com"><img src=x>`,
    preferredDate: "2026-12-20",
  });
  assert.equal(html.includes("<script>"), false);
  assert.ok(html.includes(escapeHtml(`<script>alert(1)</script>`)));
  assert.equal(html.includes(`<img src=x>`), false);
});

test("uses the black and lime tokens and required copy", () => {
  const html = buildClinicNotificationHtml({
    fullName: "Ioana Mosut",
    phone: "0748085933",
    email: "ioana@example.com",
    preferredDate: "2026-11-25",
  });
  assert.ok(html.includes(EMAIL_THEME.outer));
  assert.ok(html.includes(EMAIL_THEME.card));
  assert.ok(html.includes(EMAIL_THEME.inner));
  assert.ok(html.includes(EMAIL_THEME.lime));
  assert.ok(html.includes(EMAIL_THEME.text));
  assert.ok(html.includes(EMAIL_THEME.muted));
  assert.ok(html.includes(EMAIL_THEME.divider));
  assert.equal(html.includes("#1D372F"), false);
  assert.ok(html.includes("Solicitare nouă de programare"));
  assert.ok(html.includes("ÎN AȘTEPTAREA CONFIRMĂRII"));
  assert.ok(html.includes("Contactați pacientul"));
  assert.ok(html.includes('href="tel:+40748085933"'));
  assert.ok(html.includes("25.11.2026"));
  assert.ok(html.includes("role=\"presentation\""));
});

test("omits empty optional fields and does not invent values", () => {
  const html = buildClinicNotificationHtml({
    fullName: "Ioana Mosut",
    phone: "0748085933",
  });
  assert.equal(html.includes("nespecificat@"), false);
  assert.equal(html.includes(">Email</p>"), false);
  assert.equal(html.includes("Data preferată"), false);
  assert.equal(html.includes(">Serviciu</p>"), false);
  assert.equal(html.includes("—"), false);
});

test("plain-text fallback keeps the real patient details", () => {
  const text = buildClinicNotificationText({
    fullName: "Ioana Mosut",
    phone: "0748085933",
    email: "ioana@example.com",
    preferredDate: "2026-11-25",
    service: "Implant dentar",
  });
  assert.match(text, /Ioana Mosut/);
  assert.match(text, /0748085933/);
  assert.match(text, /ioana@example.com/);
  assert.match(text, /25\.11\.2026/);
  assert.match(text, /Implant dentar/);
  assert.match(text, /ÎN AȘTEPTAREA CONFIRMĂRII/);
});

test("formats dates and phone links without inventing a number", () => {
  assert.equal(formatPreferredDateLabel("2026-12-01"), "01.12.2026");
  assert.equal(telHref("0748 085 933"), "tel:+40748085933");
  assert.equal(telHref(""), "");
  assert.equal(clinicNotificationSubject({ fullName: "Ioana Mosut" }), "Solicitare nouă de programare · Ioana Mosut");
});
