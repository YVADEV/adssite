const DEMO_HOST_MARKERS = ["istomademo", "idava.ro/demo"];

export type IstomaConfigStatus = {
  ready: boolean;
  liveBookingEnabled: boolean;
  missing: string[];
  blockers: string[];
};

function read(name: string): string {
  return (process.env[name] ?? "").trim();
}

function readInt(name: string): number | undefined {
  const raw = read(name);
  if (!raw) return undefined;
  const value = Number(raw);
  return Number.isInteger(value) ? value : undefined;
}

export function getIstomaEnv() {
  return {
    baseUrl: read("ISTOMA_API_BASE_URL").replace(/\/+$/, ""),
    apiKey: read("ISTOMA_API_KEY"),
    branchId: readInt("ISTOMA_BRANCH_ID"),
    doctorIds: read("ISTOMA_DOCTOR_IDS"),
    cabinetId: read("ISTOMA_CABINET_ID"),
    interventionId: readInt("ISTOMA_INTERVENTION_ID"),
    durationMinutes: readInt("ISTOMA_DEFAULT_DURATION_MINUTES") ?? 60,
    startHour: readInt("ISTOMA_START_HOUR") ?? 9,
    endHour: readInt("ISTOMA_END_HOUR") ?? 21,
    marketingSourceId: readInt("ISTOMA_MARKETING_SOURCE_ID"),
    liveBookingEnabled: read("ISTOMA_LIVE_BOOKING_ENABLED").toLowerCase() === "true",
    webhookUser: read("ISTOMA_WEBHOOK_USER"),
    webhookPassword: read("ISTOMA_WEBHOOK_PASSWORD"),
  };
}

export function isDemoEndpoint(baseUrl: string): boolean {
  const lower = baseUrl.toLowerCase();
  return DEMO_HOST_MARKERS.some((marker) => lower.includes(marker));
}

export function getIstomaConfigStatus(): IstomaConfigStatus {
  const env = getIstomaEnv();
  const missing: string[] = [];
  const blockers: string[] = [];

  if (!env.baseUrl) missing.push("ISTOMA_API_BASE_URL");
  if (!env.apiKey) missing.push("ISTOMA_API_KEY");
  if (env.baseUrl && isDemoEndpoint(env.baseUrl)) {
    blockers.push("ISTOMA_API_BASE_URL pointează către mediul demo iStoma. Folosește URL-ul de producție al clinicii.");
  }

  return {
    ready: missing.length === 0 && blockers.length === 0,
    liveBookingEnabled: env.liveBookingEnabled,
    missing,
    blockers,
  };
}

export function getIstomaRequestConfigStatus(): IstomaConfigStatus {
  const status = getIstomaConfigStatus();
  const env = getIstomaEnv();
  const missing = [...status.missing];
  if (env.marketingSourceId === undefined) missing.push("ISTOMA_MARKETING_SOURCE_ID");
  return {
    ready: missing.length === 0 && status.blockers.length === 0,
    liveBookingEnabled: status.liveBookingEnabled,
    missing,
    blockers: status.blockers,
  };
}

export function requireIstomaConfig() {
  const status = getIstomaConfigStatus();
  const env = getIstomaEnv();
  return { status, env };
}
