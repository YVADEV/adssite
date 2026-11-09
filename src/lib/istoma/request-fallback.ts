import { CLINIC } from "@/lib/contact";
import { clinicNotificationSubject } from "@/lib/email/clinic-notification";
import { clinicNotificationRecipients, sendClinicNotificationEmail } from "@/lib/email/send-clinic-notification";
import { buildAppointmentRequestNotes } from "./request-notes";
import type { BookingInput } from "./types";
import { normalizePhone, safeLog } from "./redact";

function splitName(fullName: string) {
  const parts = fullName.trim().replace(/\s+/g, " ").split(" ");
  if (parts.length === 1) return { nume: parts[0], prenume: parts[0] };
  return { nume: parts[0], prenume: parts.slice(1).join(" ") };
}

async function sendWithNetlifyForms(input: BookingInput, notes: string, fullName: string, phone: string) {
  const origin = input.origin;
  if (!origin || origin.includes("localhost") || origin.includes("127.0.0.1")) return false;
  const { nume, prenume } = splitName(fullName);
  const body = new URLSearchParams({
    "form-name": "contact",
    nume,
    prenume,
    numeComplet: fullName,
    telefon: phone,
    email: input.email.trim(),
    mesaj: notes,
    source: input.source ?? "booking-form",
    gdpr: "da",
    dataPreferata: input.preferredDate,
  });
  const response = await fetch(`${origin}/__forms.html`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  return response.ok;
}

async function sendWithFormSubmit(input: BookingInput, notes: string, fullName: string, phone: string) {
  const origin = input.origin || CLINIC.website;
  const toEmail = clinicNotificationRecipients()[0];
  if (!toEmail) return false;
  const { nume, prenume } = splitName(fullName);
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: origin,
      Referer: `${origin}/contact`,
    },
    body: JSON.stringify({
      _subject: clinicNotificationSubject({ fullName, phone, email: input.email, preferredDate: input.preferredDate }),
      _template: "table",
      _captcha: "false",
      name: fullName,
      nume,
      prenume,
      telefon: phone,
      email: input.email.trim(),
      mesaj: notes,
      sursa: input.source ?? "booking-form",
      dataPreferata: input.preferredDate,
    }),
  });
  const raw = await response.text();
  let json: { success?: boolean | string } = {};
  try {
    json = JSON.parse(raw) as { success?: boolean | string };
  } catch {
    return false;
  }
  return json.success === true || json.success === "true";
}

export async function deliverAppointmentRequestByEmail(input: BookingInput): Promise<boolean> {
  try {
    const notes = buildAppointmentRequestNotes(input.preferredDate, input.source);
    const fullName = input.fullName.trim().replace(/\s+/g, " ");
    const phone = normalizePhone(input.phone);
    const fields = {
      fullName,
      phone,
      email: input.email.trim(),
      preferredDate: input.preferredDate,
      source: input.source,
    };

    if (process.env.RESEND_API_KEY) {
      const viaResend = await sendClinicNotificationEmail(fields);
      if (viaResend) {
        safeLog("request-email-fallback", { ok: true, via: "resend" });
        return true;
      }
    }

    const viaNetlify = await sendWithNetlifyForms(input, notes, fullName, phone);
    if (viaNetlify) {
      safeLog("request-email-fallback", { ok: true, via: "netlify-forms" });
      return true;
    }

    const viaFormSubmit = await sendWithFormSubmit(input, notes, fullName, phone);
    safeLog("request-email-fallback", { ok: viaFormSubmit, via: "formsubmit" });
    return viaFormSubmit;
  } catch {
    safeLog("request-email-fallback", { ok: false });
    return false;
  }
}
