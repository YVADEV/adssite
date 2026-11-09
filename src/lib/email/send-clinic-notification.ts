import { CLINIC } from "@/lib/contact";
import {
  buildClinicNotificationHtml,
  buildClinicNotificationText,
  clinicNotificationSubject,
  type ClinicNotificationFields,
} from "./clinic-notification";

const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Alverna Dental Studio <beth.t@example.com>";

export function clinicNotificationRecipients() {
  const primary = (process.env.CONTACT_TO_EMAIL ?? CLINIC.email).trim();
  const extra = (process.env.CONTACT_CC_EMAIL ?? "info.hds33@gmail.com").trim();
  return Array.from(new Set([primary, extra].filter(Boolean)));
}

export async function sendClinicNotificationEmail(fields: ClinicNotificationFields) {
  const key = process.env.RESEND_API_KEY;
  const to = clinicNotificationRecipients();
  if (!key || to.length === 0) return false;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to,
      subject: clinicNotificationSubject(fields),
      html: buildClinicNotificationHtml(fields),
      text: buildClinicNotificationText(fields),
      reply_to: fields.email?.trim() || undefined,
    }),
  });
  if (!response.ok) {
    console.error("[clinic-email] Resend error", response.status);
    return false;
  }
  return true;
}
