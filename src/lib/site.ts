/** Final production origin. Never derived from the request Host header. */
export const PRODUCTION_ORIGIN = "https://alvernadental.com";

export const STAGING_HOSTS = [
  "alvernadental.netlify.app",
  "quiet-daffodil-0aeb6a.netlify.app",
] as const;

export function hostnameOf(hostHeader: string) {
  return hostHeader.split(",")[0]?.trim().split(":")[0]?.toLowerCase() ?? "";
}

export function isStagingHost(hostHeader: string) {
  const host = hostnameOf(hostHeader);
  if (!host) return false;
  if (host === "localhost" || host.endsWith(".localhost")) return true;
  if (host.endsWith(".netlify.app")) return true;
  return (STAGING_HOSTS as readonly string[]).includes(host);
}

export function isProductionHost(hostHeader: string) {
  const host = hostnameOf(hostHeader);
  return host === "alvernadental.com" || host === "www.alvernadental.com";
}

export function withTrailingSlash(path: string) {
  if (!path || path === "/") return "/";
  const [pathname, hash] = path.split("#");
  const [base, query] = pathname.split("?");
  const slashed = base.endsWith("/") ? base : `${base}/`;
  return `${slashed}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
}
