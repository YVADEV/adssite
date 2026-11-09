type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, limit: number, windowMs: number): { ok: boolean; retryAfterSec: number } {
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfterSec: Math.ceil(windowMs / 1000) };
  }
  if (current.count >= limit) {
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) };
  }
  current.count += 1;
  return { ok: true, retryAfterSec: Math.ceil((current.resetAt - now) / 1000) };
}

const recentKeys = new Map<string, number>();

export function consumeIdempotency(key: string, ttlMs = 120_000): "fresh" | "duplicate" {
  const now = Date.now();
  for (const [stored, expires] of recentKeys) {
    if (expires <= now) recentKeys.delete(stored);
  }
  const existing = recentKeys.get(key);
  if (existing && existing > now) return "duplicate";
  recentKeys.set(key, now + ttlMs);
  return "fresh";
}

export function bookingFingerprint(phone: string, slotStart: string): string {
  return `${phone.replace(/\D/g, "")}|${slotStart}`;
}
