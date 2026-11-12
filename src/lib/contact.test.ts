import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { bookingHrefForPath, CLINIC, WHATSAPP_EMERGENCY_MESSAGE, whatsappEmergencyUrl } from "./contact";

describe("clinic emergency contact", () => {
  it("uses the verified clinic phone and WhatsApp destination", () => {
    assert.equal(CLINIC.phoneTel, "+40748085933");
    assert.equal(CLINIC.whatsappUrl, "https://wa.me/40748085933");
    assert.match(whatsappEmergencyUrl(), /^https:\/\/wa\.me\/40748085933\?text=/);
    assert.ok(decodeURIComponent(whatsappEmergencyUrl()).includes(WHATSAPP_EMERGENCY_MESSAGE));
  });

  it("routes booking to the existing form, not a new booking flow", () => {
    assert.equal(bookingHrefForPath("/"), "#contact");
    assert.equal(bookingHrefForPath("/servicii/implant-dentar/"), "#contact");
    assert.equal(bookingHrefForPath("/urgente-stomatologice-cluj/"), "#contact");
    assert.equal(bookingHrefForPath("/echipa/andreea-parvu/"), "#contact");
    assert.equal(bookingHrefForPath("/blog"), CLINIC.formPageHref);
    assert.equal(bookingHrefForPath("/echipa"), CLINIC.formPageHref);
    assert.equal(bookingHrefForPath("/cazuri"), CLINIC.formPageHref);
  });
});
