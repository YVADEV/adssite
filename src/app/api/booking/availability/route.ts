import { NextResponse } from "next/server";

import { getActivityIntervalsForDay } from "@/lib/istoma/availability";
import { IstomaAuthError, IstomaConfigError, IstomaTimeoutError } from "@/lib/istoma/client";
import { getIstomaConfigStatus } from "@/lib/istoma/config";
import { parseYmd } from "@/lib/istoma/dates";
import { BOOKING_PUBLIC } from "@/lib/istoma/public-messages";
import { rateLimit } from "@/lib/istoma/rate-limit";
import { safeLog } from "@/lib/istoma/redact";

export const runtime = "nodejs";

function clientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

export async function GET(request: Request) {
  const limited = rateLimit(`avail:${clientKey(request)}`, 30, 60_000);
  if (!limited.ok) {
    return NextResponse.json({ ok: false, code: "RATE_LIMITED", error: BOOKING_PUBLIC.rateLimited, slots: [] }, { status: 429 });
  }

  const date = new URL(request.url).searchParams.get("date") ?? "";
  try {
    parseYmd(date);
  } catch {
    return NextResponse.json({ ok: false, error: "Dată invalidă.", slots: [] }, { status: 400 });
  }

  const status = getIstomaConfigStatus();
  if (!status.ready) {
    safeLog("availability-not-configured", { missingCount: status.missing.length, blocked: status.blockers.length > 0 });
    return NextResponse.json(
      { ok: false, code: "NOT_CONFIGURED", error: BOOKING_PUBLIC.unavailable, slots: [] },
      { status: 503 },
    );
  }

  try {
    const slots = await getActivityIntervalsForDay(date);
    return NextResponse.json({
      ok: true,
      slots: slots.map(({ start, end, durationMinutes, label }) => ({ start, end, durationMinutes, label })),
    });
  } catch (error) {
    if (error instanceof IstomaConfigError) {
      safeLog("availability-not-configured", { missingCount: error.missing.length });
      return NextResponse.json(
        { ok: false, code: "NOT_CONFIGURED", error: BOOKING_PUBLIC.unavailable, slots: [] },
        { status: 503 },
      );
    }
    if (error instanceof IstomaAuthError) {
      safeLog("availability-auth", { method: error.method });
      return NextResponse.json(
        { ok: false, code: "AUTH", error: BOOKING_PUBLIC.unavailable, slots: [] },
        { status: 502 },
      );
    }
    if (error instanceof IstomaTimeoutError) {
      safeLog("availability-timeout", { method: error.method });
      return NextResponse.json(
        { ok: false, code: "TIMEOUT", error: BOOKING_PUBLIC.unavailable, slots: [] },
        { status: 504 },
      );
    }
    safeLog("availability-upstream", { failed: true });
    return NextResponse.json(
      { ok: false, code: "UPSTREAM", error: BOOKING_PUBLIC.unavailable, slots: [] },
      { status: 502 },
    );
  }
}
