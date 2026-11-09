const SECRET_KEYS = /api[_-]?key|authorization|password|secret|token/i;
const PII_KEYS = /phone|email|name|nume|prenume|cnp|personalid|patient/i;

export function redactValue(key: string, value: unknown): unknown {
  if (SECRET_KEYS.test(key)) return "[redacted]";
  if (PII_KEYS.test(key) && typeof value === "string") return "[redacted]";
  return value;
}

export function safeLog(event: string, details: Record<string, unknown> = {}) {
  const cleaned: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(details)) {
    cleaned[key] = redactValue(key, value);
  }
  console.info(`[istoma] ${event}`, cleaned);
}

export function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function phonesMatch(a?: string, b?: string): boolean {
  const left = normalizePhone(a ?? "");
  const right = normalizePhone(b ?? "");
  if (left.length < 9 || right.length < 9) return false;
  return left === right || left.endsWith(right) || right.endsWith(left);
}

export function emailsMatch(a?: string, b?: string): boolean {
  const left = (a ?? "").trim().toLowerCase();
  const right = (b ?? "").trim().toLowerCase();
  if (!left || !right) return true;
  return left === right;
}

export function namesCompatible(fullName: string, lastName?: string, firstName?: string): boolean {
  const incoming = fullName.toLowerCase().replace(/\s+/g, " ").trim();
  const parts = [lastName, firstName].filter(Boolean).join(" ").toLowerCase().replace(/\s+/g, " ").trim();
  if (!parts) return true;
  return incoming.includes((lastName ?? "").toLowerCase().trim()) || parts.split(" ").every((part) => incoming.includes(part));
}
