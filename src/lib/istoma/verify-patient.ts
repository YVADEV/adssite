import type { IstomaPatientMatch } from "./types";
import { emailsMatch, namesCompatible, phonesMatch } from "./redact";

export type PatientLinkDecision =
  | { status: "none" }
  | { status: "unique"; patientId: number }
  | { status: "ambiguous" };

export function decidePatientLink(
  matches: IstomaPatientMatch[] | undefined,
  phone: string,
  email: string,
  fullName: string,
): PatientLinkDecision {
  const list = (matches ?? []).filter((item) => Number.isInteger(item.Id) && item.Id > 0);
  const compatible = list.filter(
    (item) => phonesMatch(item.Phone, phone) && emailsMatch(item.Email, email) && namesCompatible(fullName, item.LastName, item.FirstName),
  );

  if (compatible.length === 0) return { status: "none" };
  if (compatible.length > 1) return { status: "ambiguous" };
  return { status: "unique", patientId: compatible[0].Id };
}
