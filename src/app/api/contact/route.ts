import { NextResponse } from "next/server";

import { CLINIC } from "@/lib/contact";

export const runtime = "nodejs";

type ContactPayload = {
  nume?: string;
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
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? CLINIC.email;
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Alverna Dental Studio <beth.t@example.com>";

function isValid(body: ContactPayload) {
  if (!body.nume || body.nume.trim().length < 2) return false;
  if (!body.telefon || body.telefon.trim().length < 6) return false;
  if (body.email && body.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) return false;
  return true;
}

function escape(value: string | undefined) {
  if (!value) return "—";
  return value.replace(/[<>]/g, (c) => (c === "<" ? "&lt;" : "&gt;"));
}

function buildMessage(body: ContactPayload, subject: string) {
  return {
    subject,
    html: `
    <h2>Solicitare programare</h2>
    <p><strong>Nume:</strong> ${escape(body.nume)}</p>
    <p><strong>Telefon:</strong> ${escape(body.telefon)}</p>
    <p><strong>Email:</strong> ${escape(body.email)}</p>
    <p><strong>Serviciu dorit:</strong> ${escape(body.serviciu)}</p>
    <p><strong>Mesaj:</strong><br/>${escape(body.mesaj)}</p>
    <hr/>
    <p><strong>Pagină origine:</strong> ${escape(body.pagePath)}</p>
    <p><strong>URL complet:</strong> ${escape(body.pageUrl)}</p>
    <p><strong>Etichetă formular:</strong> ${escape(body.source)}</p>
    <p style="font-size:12px;color:#888;">Titlu pagină: ${escape(body.pageTitle)} · trimis la ${new Date().toISOString()}</p>
  `,
    fields: {
      name: body.nume?.trim() ?? "",
      telefon: body.telefon?.trim() ?? "",
      email: body.email?.trim() || "nespecificat@alvernadental.com",
      serviciu: body.serviciu?.trim() || "—",
      mesaj: body.mesaj?.trim() || "—",
      pagina: body.pageUrl?.trim() || body.pagePath?.trim() || "—",
      sursa: body.source?.trim() || "—",
    },
  };
}

async function sendWithResend(subject: string, html: string, replyTo: string | undefined) {
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject,
      html,
      reply_to: replyTo,
    }),
  });
  if (!resp.ok) {
    const txt = await resp.text();
    console.error("[contact] Resend error", resp.status, txt);
    return false;
  }
  return true;
}

async function sendWithFormSubmit(
  subject: string,
  fields: ReturnType<typeof buildMessage>["fields"],
) {
  const resp = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(TO_EMAIL)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: subject,
      _template: "table",
      _captcha: "false",
      name: fields.name,
      telefon: fields.telefon,
      email: fields.email,
      serviciu: fields.serviciu,
      mesaj: fields.mesaj,
      pagina: fields.pagina,
      sursa: fields.sursa,
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
      { ok: false, error: "Te rugăm să completezi cel puțin numele și un număr de telefon valid." },
      { status: 422 },
    );
  }

  const subject = `Programare nouă · ${body.nume?.trim() ?? "(fără nume)"}`;
  const { html, fields } = buildMessage(body, subject);
  const replyTo = body.email?.trim() || undefined;

  try {
    const sent = RESEND_API_KEY
      ? await sendWithResend(subject, html, replyTo)
      : await sendWithFormSubmit(subject, fields);

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
