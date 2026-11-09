import { parseYmd } from "./dates";

function formatPreferredDate(ymd: string) {
  const date = parseYmd(ymd);
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
}

export function buildAppointmentRequestNotes(preferredDate: string, source?: string) {
  const dateLabel = formatPreferredDate(preferredDate);
  const origin = source ? ` Sursă website: ${source}.` : "";
  return `Data preferată: ${dateLabel}. Aceasta este o preferință, nu o programare confirmată.${origin}`.slice(0, 500);
}
