import { NextResponse } from "next/server";

import { createAppointmentRequest } from "@/lib/istoma/booking";
import { IstomaAuthError, IstomaConfigError } from "@/lib/istoma/client";
import { BOOKING_PUBLIC } from "@/lib/istoma/public-messages";
import { bookingFingerprint, consumeIdempotency, rateLimit } from "@/lib/istoma/rate-limit";
import { safeLog } from "@/lib/istoma/redact";
import type { BookingInput } from "@/lib/istoma/types";

export const runtime = "nodejs";

function clientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  const limited = rateLimit(`book:${clientKey(request)}`, 8, 10 * 60_000);
  if (!limited.ok) {
    return NextResponse.json({ ok: false, error: BOOKING_PUBLIC.rateLimited }, { status: 429 });
  }

  let body: BookingInput;
  try {
    body = (await request.json()) as BookingInput;
  } catch {
    return NextResponse.json({ ok: false, error: "Date invalide." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const fingerprint = bookingFingerprint(body.phone ?? "", body.preferredDate ?? "");
  const idempotency = body.idempotencyKey || fingerprint;
  if (consumeIdempotency(`inflight:${idempotency}`, 20_000) === "duplicate") {
    return NextResponse.json({ ok: false, error: BOOKING_PUBLIC.duplicate }, { status: 409 });
  }

  const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || "alvernadental.netlify.app";
  const proto = host.includes("localhost") || host.startsWith("127.") ? "http" : "https";
  body.origin = `${proto}://${host}`;

  try {
    const result = await createAppointmentRequest(body);
    if (result.ok) consumeIdempotency(`done:${idempotency}`, 120_000);
    if (!result.ok) {
      return NextResponse.json({ ok: false, error: result.error }, { status: result.status });
    }
    return NextResponse.json({ ok: true, message: result.message });
  } catch (error) {
    if (error instanceof IstomaConfigError) {
      safeLog("request-not-configured", { missingCount: error.missing.length });
      return NextResponse.json({ ok: false, error: BOOKING_PUBLIC.unavailable }, { status: 503 });
    }
    if (error instanceof IstomaAuthError) {
      safeLog("request-auth", { method: error.method });
      return NextResponse.json({ ok: false, error: BOOKING_PUBLIC.unavailable }, { status: 502 });
    }
    return NextResponse.json({ ok: false, error: BOOKING_PUBLIC.generic }, { status: 502 });
  }
}
