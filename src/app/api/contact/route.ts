import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  nume?: string;
  telefon?: string;
  email?: string;
  serviciu?: string;
  mesaj?: string;
  source?: string;
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "contact@alvernadental.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "no-reply@alvernadental.com";

function isValid(body: ContactPayload) {
  if (!body.nume || body.nume.trim().length < 2) return false;
  if (!body.telefon || body.telefon.trim().length < 6) return false;
  return true;
}

function escape(value: string | undefined) {
  if (!value) return "—";
  return value.replace(/[<>]/g, (c) => (c === "<" ? "&lt;" : "&gt;"));
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!isValid(body)) {
    return NextResponse.json(
      { ok: false, error: "Te rugăm să completezi cel puțin numele și un număr de telefon." },
      { status: 422 }
    );
  }

  const subject = `Programare nouă · ${body.nume ?? "(fără nume)"}`;
  const html = `
    <h2>Solicitare programare</h2>
    <p><strong>Nume:</strong> ${escape(body.nume)}</p>
    <p><strong>Telefon:</strong> ${escape(body.telefon)}</p>
    <p><strong>Email:</strong> ${escape(body.email)}</p>
    <p><strong>Serviciu dorit:</strong> ${escape(body.serviciu)}</p>
    <p><strong>Mesaj:</strong><br/>${escape(body.mesaj)}</p>
    <hr/>
    <p style="font-size:12px;color:#888;">Origine: ${escape(body.source)} · trimis la ${new Date().toISOString()}</p>
  `;

  if (!RESEND_API_KEY) {
    // Without a configured provider, just acknowledge and log on the server
    // so leads can be wired up later by setting RESEND_API_KEY.
    console.log("[contact] new lead (no provider configured):", { ...body, subject });
    return NextResponse.json({ ok: true, queued: true });
  }

  try {
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
        reply_to: body.email || undefined,
      }),
    });
    if (!resp.ok) {
      const txt = await resp.text();
      console.error("[contact] provider error", resp.status, txt);
      return NextResponse.json({ ok: false, error: "Provider error" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] fetch error", err);
    return NextResponse.json({ ok: false, error: "Network error" }, { status: 502 });
  }
}
