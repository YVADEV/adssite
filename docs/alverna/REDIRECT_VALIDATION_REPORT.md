# Redirect validation report

Date: 13 November 2026.

## Scope

- Config: `src/config/legacy-redirects.ts` via `next.config.ts` `redirects()`.
- Host canonical: `src/middleware.ts` (`www` → apex 301).
- Trailing slash: Next `trailingSlash: true`.
- Status: HTTP **301** (`statusCode: 301`), not 308.

Production domain `https://alvernadental.com/` still serves WordPress. **Production 301s are not live.** Staging `https://alvernadental.netlify.app/` reflects the last deploy, not uncommitted rules.

## Verified pairs in the repository

| Source | Destination | Unit test | Staging (last deploy) | Production |
|---|---|---|---|---|
| `/servicii/stomatologie-copii/` | `/servicii/pedodontie/` | pass (config) | 301 (previously verified) | WP 200 (old URL still canonical on WP) |
| `/servicii/urgente-stomatologice/` | `/urgente-stomatologice-cluj/` | pass | 301 (previously verified) | WP 200 |
| `/studii-de-caz/` | `/cazuri/` | pass | 301 (previously verified) | WP 200 |
| `/echipa/parvu-andreea/` | `/echipa/andreea-parvu/` | pass | 301 (previously verified) | WP 200 |
| `/gdpr/` | `/politica-de-confidentialitate/` | pass | 301 (previously verified) | WP 200 |
| `/politica-cookies/` | `/politica-de-cookies/` | pass | implemented previously | WP 404 |
| `/cookie-policy/` | `/politica-de-cookies/` | pass | implemented previously | WP 404 |
| `/category/blog/` | `/blog/` | pass | **pending next deploy** | WP 200 |
| `/category/blog/page/1/` | `/blog/` | pass | pending next deploy | typically WP canonicalizes to category index |
| `/category/blog/page/2/`–`/5/` | `/blog/page/2/`–`/5/` | pass | pending next deploy | WP 200 |

`/politica-de-cookies/` is **KEEP_URL** (HTTP 200 on Next). No self-redirect.

## Explicitly not redirected

| Path | Staging last deploy | Reason |
|---|---|---|
| `/echipa/raul-muresan/` | 404 | No profile page |
| `/oferte-speciale/` | 404 | No equivalent |
| `/echipa/radu-nichimis/` | 200 | KEEP_URL |

## Automated tests

- `src/lib/seo.test.ts`: 301 only, trailing slash destinations, no loops, no Netlify destinations, destinations must exist as Next routes, no homepage dumps, no Raul mapping, `/category/blog` present.
- `scripts/seo-http-qa.mjs`: live 301/200/404 probes when `SEO_QA_ORIGIN` is set.

## Redirect tests (config)

| Result | Count |
|---|---|
| Passed (pairs present, destinations real, no loops) | 13 pairs × slash variants in unit tests |
| Failed | 0 (repository tests) |
| Staging live for new `/category/blog/` rules | not yet (deploy not requested) |
| Production live | **blocked** — DNS still on WordPress |

## Chains / loops

None in config: no destination is also a source. WP currently 301s `/servicii/pedodontie/` → `/servicii/stomatologie-copii/` (reverse of the Next mapping). After cutover that WP reverse hop disappears.

Query parameters: Next redirects preserve the query string by default. Tracking params are not treated as separate pages.
