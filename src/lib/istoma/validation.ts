import type { BookingInput, BookingValidationError } from "./types";
import { parseYmd, ymdFromDate } from "./dates";
import { normalizePhone } from "./redact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateBookingInput(input: BookingInput): BookingValidationError[] {
  const errors: BookingValidationError[] = [];
  const fullName = input.fullName.trim().replace(/\s+/g, " ");
  const email = input.email.trim();
  const phone = normalizePhone(input.phone);

  if (fullName.length < 4 || !fullName.includes(" ")) {
    errors.push({ field: "fullName", message: "Te rugăm să completezi numele și prenumele." });
  }
  if (!EMAIL_RE.test(email)) {
    errors.push({ field: "email", message: "Te rugăm să introduci o adresă de e-mail validă." });
  }
  if (phone.length < 9 || phone.length > 15) {
    errors.push({ field: "phone", message: "Te rugăm să introduci un număr de telefon valid." });
  }
  try {
    const preferred = parseYmd(input.preferredDate);
    if (ymdFromDate(preferred) < ymdFromDate(new Date())) {
      errors.push({ field: "preferredDate", message: "Alege o dată viitoare." });
    }
  } catch {
    errors.push({ field: "preferredDate", message: "Te rugăm să alegi data preferată." });
  }
  if (!input.consent) {
    errors.push({ field: "consent", message: "Te rugăm să accepți Politica de confidențialitate." });
  }
  return errors;
}
