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
  const expected301 = [
    ["/servicii/stomatologie-copii/", "/servicii/pedodontie/"],
    ["/servicii/urgente-stomatologice/", "/urgente-stomatologice-cluj/"],
    ["/studii-de-caz/", "/cazuri/"],
    ["/echipa/parvu-andreea/", "/echipa/andreea-parvu/"],
    ["/gdpr/", "/politica-de-confidentialitate/"],
    ["/politica-cookies/", "/politica-de-cookies/"],
    ["/cookie-policy/", "/politica-de-cookies/"],
    ["/category/blog/", "/blog/"],
    ["/category/blog/page/2/", "/blog/page/2/"],
  ];
  const expected200 = ["/", "/politica-de-cookies/", "/servicii/pedodontie/", "/echipa/radu-nichimis/", "/blog/", "/cazuri/"];
  const expected404 = ["/echipa/raul-muresan/", "/oferte-speciale/"];

  checks.push(await probe("/robots.txt"));
  checks.push(await probe("/sitemap.xml"));
  for (const path of expected200) checks.push(await probe(path));
  for (const [path] of expected301) checks.push(await probe(path));
  for (const path of expected404) checks.push(await probe(path));

  const failed = [];
  for (const row of checks) {
    console.log(row.status, row.robots || "-", row.url, row.location || "");
  }
  for (const [path, dest] of expected301) {
    const row = checks.find((item) => item.url.endsWith(path) || item.url.endsWith(path.replace(/\/$/, "")));
    if (!row || row.status !== 301) failed.push(`${path} expected 301, got ${row?.status}`);
    else if (!String(row.location || "").endsWith(dest) && !String(row.location || "").includes(dest)) {
      failed.push(`${path} Location ${row.location} != ${dest}`);
    }
  }
  for (const path of expected200) {
    const row = checks.find((item) => item.url === `${origin}${path}` || item.url === `${origin}${path}`.replace(/\/$/, ""));
    if (row && row.status !== 200 && row.status !== 308 && row.status !== 307) {
      failed.push(`${path} expected 200, got ${row.status}`);
    }
  }
  for (const path of expected404) {
    const row = checks.find((item) => item.url.endsWith(path));
    if (row && row.status === 301) failed.push(`${path} must not 301 (no verified destination)`);
  }
  const home = checks.find((row) => row.url === `${origin}/`);
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
