import { getIstomaEnv } from "./config";
import { istomaGet } from "./client";
import { durationMinutes, formatSlotLabel, parseIsoLocal, parseYmd, toDdMmYyyy } from "./dates";
import type { IstomaSlot, PublicSlot } from "./types";

export function toPublicSlot(slot: IstomaSlot): PublicSlot | null {
  if (!slot?.StartDate || !slot.EndDate || !slot.DoctorId) return null;
  const start = parseIsoLocal(slot.StartDate);
  const end = parseIsoLocal(slot.EndDate);
  if (end.getTime() <= start.getTime()) return null;
  if (start.getTime() <= Date.now() + 2 * 60 * 60 * 1000) return null;
  return {
    start: start.toISOString(),
    end: end.toISOString(),
    doctorId: slot.DoctorId,
    cabinetId: slot.LocationId,
    branchId: slot.BranchId,
    durationMinutes: durationMinutes(start, end),
    label: formatSlotLabel(slot.StartDate),
  };
}

export async function getActivityIntervalsForDay(ymd: string): Promise<PublicSlot[]> {
  const day = parseYmd(ymd);
  const env = getIstomaEnv();
  const dateToken = toDdMmYyyy(day);
  const envelope = await istomaGet<IstomaSlot[]>("GetActivityIntervals", {
    startDateDDMMYYYY: dateToken,
    endDateDDMMYYYY: dateToken,
    startHour: env.startHour,
    endHour: env.endHour,
    doctorIds: env.doctorIds || undefined,
    branchId: env.branchId,
    interventionId: env.interventionId,
  });

  if (envelope.Success === false) {
    throw new Error("iStoma GetActivityIntervals returned Success=false");
  }

  return (envelope.Data ?? [])
    .map(toPublicSlot)
    .filter((slot): slot is PublicSlot => Boolean(slot))
    .sort((a, b) => a.start.localeCompare(b.start));
}

export function findMatchingSlot(slots: PublicSlot[], slotStart: string): PublicSlot | undefined {
  const wanted = new Date(slotStart).getTime();
  return slots.find((slot) => Math.abs(new Date(slot.start).getTime() - wanted) < 60_000);
}
