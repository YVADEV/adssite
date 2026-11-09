import { NextResponse } from "next/server";

import { CLINIC } from "@/lib/contact";
import { clinicNotificationSubject } from "@/lib/email/clinic-notification";
import { clinicNotificationRecipients, sendClinicNotificationEmail } from "@/lib/email/send-clinic-notification";

export const runtime = "nodejs";

type ContactPayload = {
  nume?: string;
  prenume?: string;
  numeComplet?: string;
  telefon?: string;
  email?: string;
  serviciu?: string;
  mesaj?: string;
  source?: string;
  pagePath?: string;
  pageUrl?: string;
  pageTitle?: string;
  website?: string;
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;

function isValid(body: ContactPayload) {
  if (!body.nume || body.nume.trim().length < 2) return false;
  if (!body.prenume || body.prenume.trim().length < 2) return false;
  if (!body.telefon || body.telefon.trim().length < 6) return false;
  if (body.email && body.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) return false;
  return true;
}

function notificationFields(body: ContactPayload) {
  const fullName = (body.numeComplet ?? `${body.prenume ?? ""} ${body.nume ?? ""}`).trim();
  return {
    fullName,
    phone: body.telefon?.trim(),
    email: body.email?.trim(),
    service: body.serviciu?.trim(),
    message: body.mesaj?.trim(),
    source: body.source?.trim(),
    pageUrl: body.pageUrl?.trim() || body.pagePath?.trim(),
  };
}

async function sendWithFormSubmit(
  fields: ReturnType<typeof notificationFields>,
  origin: string,
) {
  const toEmail = clinicNotificationRecipients()[0];
  if (!toEmail) return false;
  const resp = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: origin,
      Referer: `${origin}/contact`,
    },
    body: JSON.stringify({
      _subject: clinicNotificationSubject(fields),
      _template: "table",
      _captcha: "false",
      name: fields.fullName,
      telefon: fields.phone,
      email: fields.email || CLINIC.email,
      serviciu: fields.service ?? "",
      mesaj: fields.message ?? "",
      pagina: fields.pageUrl ?? "",
      sursa: fields.source ?? "",
    }),
  });
  const raw = await resp.text();
  let json: { success?: boolean | string; message?: string } = {};
  try {
    json = JSON.parse(raw) as { success?: boolean | string; message?: string };
  } catch {
    console.error("[contact] FormSubmit non-JSON", resp.status, raw.slice(0, 300));
    return false;
  }
  const ok = json.success === true || json.success === "true";
  if (!resp.ok || !ok) {
    console.error("[contact] FormSubmit error", resp.status, json);
    return false;
  }
  return true;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!isValid(body)) {
    return NextResponse.json(
      { ok: false, error: "Te rugăm să completezi numele, prenumele și un număr de telefon valid." },
      { status: 422 },
    );
  }

  const fields = notificationFields(body);
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || "quiet-daffodil-0aeb6a.netlify.app";
  const proto = host.includes("localhost") || host.startsWith("127.") ? "http" : "https";
  const origin = `${proto}://${host}`;

  try {
    const sent = RESEND_API_KEY
      ? await sendClinicNotificationEmail(fields)
      : await sendWithFormSubmit(fields, origin);

    if (!sent) {
      return NextResponse.json(
        { ok: false, error: "Nu am putut trimite mesajul. Te rugăm să încerci din nou sau să ne suni." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send error", err);
    return NextResponse.json(
      { ok: false, error: "Nu am putut trimite mesajul. Te rugăm să încerci din nou sau să ne suni." },
      { status: 502 },
    );
  }
}
