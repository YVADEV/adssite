const PAD = (value: number) => String(value).padStart(2, "0");

export function toDdMmYyyy(date: Date): string {
  return `${PAD(date.getDate())}${PAD(date.getMonth() + 1)}${date.getFullYear()}`;
}

export function toDdMmYyyyHHmm(date: Date): string {
  return `${toDdMmYyyy(date)}${PAD(date.getHours())}${PAD(date.getMinutes())}`;
}

export function parseIsoLocal(iso: string): Date {
  const trimmed = iso.trim();
  if (/[zZ]$/.test(trimmed) || /[+-]\d{2}:\d{2}$/.test(trimmed)) {
    const instant = new Date(trimmed);
    if (Number.isNaN(instant.getTime())) throw new Error("Invalid datetime");
    return instant;
  }
  const match = trimmed.match(
    /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?)?/,
  );
  if (!match) {
    const fallback = new Date(trimmed);
    if (Number.isNaN(fallback.getTime())) throw new Error("Invalid datetime");
    return fallback;
  }
  const [, y, m, d, hh = "0", mm = "0", ss = "0"] = match;
  return new Date(Number(y), Number(m) - 1, Number(d), Number(hh), Number(mm), Number(ss));
}

export function ymdFromDate(date: Date): string {
  return `${date.getFullYear()}-${PAD(date.getMonth() + 1)}-${PAD(date.getDate())}`;
}

export function parseYmd(ymd: string): Date {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd.trim());
  if (!match) throw new Error("Invalid date");
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  if (ymdFromDate(date) !== ymd.trim()) throw new Error("Invalid date");
  return date;
}

export function sameCalendarDay(a: Date, b: Date): boolean {
  return ymdFromDate(a) === ymdFromDate(b);
}

export function durationMinutes(start: Date, end: Date): number {
  return Math.max(1, Math.round((end.getTime() - start.getTime()) / 60000));
}

export function formatSlotLabel(iso: string): string {
  const date = parseIsoLocal(iso);
  return `${PAD(date.getHours())}:${PAD(date.getMinutes())}`;
}
