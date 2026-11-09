import { NextResponse } from "next/server";

import { getIstomaEnv } from "@/lib/istoma/config";
import { rateLimit } from "@/lib/istoma/rate-limit";
import { safeLog } from "@/lib/istoma/redact";

export const runtime = "nodejs";

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="istoma-webhook"' },
  });
}

function validBasicAuth(header: string | null, user: string, password: string) {
  if (!header?.startsWith("Basic ")) return false;
  try {
    const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
    const sep = decoded.indexOf(":");
    if (sep < 0) return false;
    return decoded.slice(0, sep) === user && decoded.slice(sep + 1) === password;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const limited = rateLimit(`hook:${request.headers.get("x-forwarded-for") ?? "ip"}`, 60, 60_000);
  if (!limited.ok) return NextResponse.json({ ok: false }, { status: 429 });

  const env = getIstomaEnv();
  if (!env.webhookUser || !env.webhookPassword) {
    return NextResponse.json({ ok: false, error: "Webhook-ul iStoma nu este configurat." }, { status: 503 });
  }
  if (!validBasicAuth(request.headers.get("authorization"), env.webhookUser, env.webhookPassword)) {
    return unauthorized();
  }

  let payload: { IdNotificare?: number } = {};
  try {
    payload = (await request.json()) as { IdNotificare?: number };
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  safeLog("webhook", { notificationId: payload.IdNotificare ?? "unknown" });
  return NextResponse.json({ ok: true });
}
