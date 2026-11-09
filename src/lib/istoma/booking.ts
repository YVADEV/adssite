import { getIstomaEnv, getIstomaRequestConfigStatus } from "./config";
import { IstomaTimeoutError, istomaPost } from "./client";
import { BOOKING_PUBLIC } from "./public-messages";
import { deliverAppointmentRequestByEmail } from "./request-fallback";
import { buildAppointmentRequestNotes } from "./request-notes";
import { normalizePhone, safeLog } from "./redact";
import type { AddAppointmentRequestPayload, BookingInput } from "./types";
import { validateBookingInput } from "./validation";

export { buildAppointmentRequestNotes };

export const REQUEST_SUCCESS_MESSAGE =
  "Solicitarea ta a fost trimisă cu succes! Echipa Alverna Dental te va contacta pentru stabilirea și confirmarea programării.";

export type BookingResult =
  | { ok: true; message: string }
  | { ok: false; status: number; error: string };

export function buildAddAppointmentRequestPayload(input: BookingInput): AddAppointmentRequestPayload {
  const env = getIstomaEnv();
  if (env.marketingSourceId === undefined) {
    throw new Error("ISTOMA_MARKETING_SOURCE_ID is required");
  }
  const payload: AddAppointmentRequestPayload = {
    FullName: input.fullName.trim().replace(/\s+/g, " "),
    Phone: normalizePhone(input.phone),
    Email: input.email.trim(),
    Notes: buildAppointmentRequestNotes(input.preferredDate, input.source),
    MarketingSourceId: env.marketingSourceId,
  };
  if (env.branchId !== undefined) payload.BranchId = env.branchId;
  return payload;
}

async function submitToIstoma(input: BookingInput): Promise<BookingResult> {
  const payload = buildAddAppointmentRequestPayload(input);
  try {
    const created = await istomaPost<unknown>("AddAppointmentRequest", payload as unknown as Record<string, unknown>);
    if (created.Success === true) {
      safeLog("request-success", { destination: "istoma" });
      return { ok: true, message: REQUEST_SUCCESS_MESSAGE };
    }
    safeLog("request-rejected", { success: false });
    return { ok: false, status: 502, error: BOOKING_PUBLIC.rejected };
  } catch (error) {
    if (error instanceof IstomaTimeoutError) {
      return { ok: false, status: 504, error: BOOKING_PUBLIC.timeout };
    }
    throw error;
  }
}

export async function createAppointmentRequest(input: BookingInput): Promise<BookingResult> {
  const errors = validateBookingInput(input);
  if (errors.length) return { ok: false, status: 422, error: errors[0].message };

  const status = getIstomaRequestConfigStatus();
  if (status.ready && getIstomaEnv().liveBookingEnabled) {
    return submitToIstoma(input);
  }

  const emailed = await deliverAppointmentRequestByEmail(input);
  if (emailed) {
    safeLog("request-success", { destination: "clinic-email" });
    return { ok: true, message: REQUEST_SUCCESS_MESSAGE };
  }
  return { ok: false, status: 503, error: BOOKING_PUBLIC.unavailable };
}
