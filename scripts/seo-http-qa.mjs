#!/usr/bin/env node
/**
 * Optional live HTTP checks. Usage:
 *   SEO_QA_ORIGIN=http://127.0.0.1:3000 node scripts/seo-http-qa.mjs
 * Does not hit production WordPress. Does not submit to Search Console.
 */

const origin = (process.env.SEO_QA_ORIGIN || "").replace(/\/$/, "");
if (!origin) {
  console.log("seo-http-qa skipped (set SEO_QA_ORIGIN to a Next server)");
  process.exit(0);
}

const checks = [];

async function probe(path, init) {
  const url = `${origin}${path}`;
  const res = await fetch(url, { redirect: "manual", ...init });
  return { url, status: res.status, location: res.headers.get("location"), robots: res.headers.get("x-robots-tag"), type: res.headers.get("content-type") };
}

async function main() {
  checks.push(await probe("/robots.txt"));
  checks.push(await probe("/sitemap.xml"));
  checks.push(await probe("/"));
  checks.push(await probe("/servicii/stomatologie-copii/"));
  checks.push(await probe("/gdpr/"));
  checks.push(await probe("/politica-de-cookies/"));
  checks.push(await probe("/echipa/raul-muresan/"));
  const failed = [];
  for (const row of checks) {
    console.log(row.status, row.robots || "-", row.url, row.location || "");
  }
  const home = checks.find((row) => row.url.endsWith(origin + "/") || row.url === origin + "/");
  if (origin.includes("netlify.app") && home && !String(home.robots || "").includes("noindex")) {
    failed.push("staging home missing X-Robots-Tag noindex");
  }
  if (failed.length) {
    console.error(failed.join("\n"));
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
