export const BOOKING_PUBLIC = {
  unavailable:
    "Programările online sunt momentan indisponibile. Te rugăm să ne contactezi telefonic.",
  timeout: "Nu am primit confirmarea din iStoma. Nu am retrimis solicitarea. Te rugăm să ne contactezi telefonic.",
  duplicate: "Cererea este deja în curs. Nu am trimis o solicitare dublă.",
  rejected: "Solicitarea nu a putut fi înregistrată în iStoma. Te rugăm să ne contactezi telefonic.",
  generic: "Nu am putut trimite solicitarea. Te rugăm să ne contactezi telefonic.",
  rateLimited: "Prea multe cereri. Încearcă din nou imediat.",
} as const;

export function isInternalLeak(text: string): boolean {
  return /ISTOMA_|api key|istomademo|idava\.ro|missing|stack|StatusCode|AddAppointment/i.test(text);
}
