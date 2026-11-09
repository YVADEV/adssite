import { getIstomaEnv, getIstomaConfigStatus } from "./config";
import type { IstomaEnvelope } from "./types";
import { safeLog } from "./redact";

const TIMEOUT_MS = 12_000;

export class IstomaConfigError extends Error {
  missing: string[];
  blockers: string[];
  constructor(message: string, missing: string[], blockers: string[]) {
    super(message);
    this.name = "IstomaConfigError";
    this.missing = missing;
    this.blockers = blockers;
  }
}

export class IstomaTimeoutError extends Error {
  method: string;
  constructor(method: string) {
    super(`iStoma timeout: ${method}`);
    this.name = "IstomaTimeoutError";
    this.method = method;
  }
}

export class IstomaAuthError extends Error {
  method: string;
  constructor(method: string) {
    super(`iStoma authentication failed: ${method}`);
    this.name = "IstomaAuthError";
    this.method = method;
  }
}

function isAuthFailure(response: Response, envelope: IstomaEnvelope<unknown>): boolean {
  if (response.status === 401 || response.status === 403) return true;
  const message = (envelope.Message ?? "").toLowerCase();
  return /unauthor|api.?key|invalid key|access denied|forbidden/.test(message);
}

function assertReady() {
  const status = getIstomaConfigStatus();
  if (!status.ready) {
    throw new IstomaConfigError("iStoma production is not configured", status.missing, status.blockers);
  }
}

function methodUrl(method: string, extraPath = ""): URL {
  const { baseUrl, apiKey } = getIstomaEnv();
  const path = extraPath ? `${method}/${apiKey}/${extraPath}` : `${method}/${apiKey}`;
  return new URL(`${baseUrl}/${path}`);
}

async function parseEnvelope<T>(response: Response): Promise<IstomaEnvelope<T>> {
  const text = await response.text();
  try {
    return JSON.parse(text) as IstomaEnvelope<T>;
  } catch {
    return { Success: false, Message: "Invalid JSON from iStoma", StatusCode: response.status };
  }
}

export async function istomaGet<T>(
  method: string,
  params: Record<string, string | number | undefined> = {},
  extraPath = "",
): Promise<IstomaEnvelope<T>> {
  assertReady();
  const url = methodUrl(method, extraPath);
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === "") continue;
    url.searchParams.set(key, String(value));
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, { method: "GET", signal: controller.signal, cache: "no-store" });
    const envelope = await parseEnvelope<T>(response);
    safeLog("GET", { method, status: response.status, success: envelope.Success === true });
    if (isAuthFailure(response, envelope)) throw new IstomaAuthError(method);
    return envelope;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") throw new IstomaTimeoutError(method);
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

export async function istomaPost<T>(method: string, body: Record<string, unknown>): Promise<IstomaEnvelope<T>> {
  assertReady();
  const url = methodUrl(method);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
      cache: "no-store",
    });
    const envelope = await parseEnvelope<T>(response);
    safeLog("POST", { method, status: response.status, success: envelope.Success === true });
    if (isAuthFailure(response, envelope)) throw new IstomaAuthError(method);
    return envelope;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") throw new IstomaTimeoutError(method);
    throw error;
  } finally {
    clearTimeout(timer);
  }
}
