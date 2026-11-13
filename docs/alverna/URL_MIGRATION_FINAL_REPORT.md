# URL migration final report — Alverna Dental

Date: 13 November 2026.  
Canonical host: `https://alvernadental.com/` (HTTPS, non-www, trailing slashes).  
Staging: `https://alvernadental.netlify.app/` (`noindex` preserved).  
Production DNS: unchanged. WordPress still serves the apex domain.

## Totals

| Metric | Count |
|---|---|
| Legacy URLs in the matrix | **96** |
| Yoast unique sitemap URLs | **78** (42 post + 34 page + 1 category + 1 author) |
| Extra live / pagination / legal URLs added | **18** |
| KEEP_URL (path unchanged on Next) | **73** |
| Verified 301 redirects in repo | **13** source paths |
| CREATE_EQUIVALENT_PAGE | **4** |
| REVIEW_REQUIRED | **6** |
| 410_GONE | **0** |
| 404_NOT_FOUND (assigned as strategy) | **0** |
| Blog articles matched KEEP_URL | **42** |
| Blog articles missing | **0** |
| Redirect unit tests failed | **0** |
| Unresolved migration risks (SEO365 + clinic) | **11** (see approval doc) |

Ahrefs “111 URLs” was **not** used as a complete inventory. No local Ahrefs or GSC export existed.

## COMPLETED

- Recursed Yoast `sitemap_index.xml` → post, page, category, author sitemaps.
- Inventoried Next static, service, blog, case, legal, doctor, redirect, middleware, sitemap routes.
- `src/config/legacy-redirects.ts` now includes category/blog + pagination 2–5 (bounded; not an unbounded `:page` that could 301 to a 404).
- Cookie policy URL kept as 200 (`/politica-de-cookies/`). Alternate slugs 301 in.
- Internal nav/footer/homepage links already use Next paths (`/cazuri/`, `/servicii/pedodontie/`, etc.).
- Blog HTML hrefs already mapped; no remaining live `stomatologie-copii` links in article HTML.
- Sitemap now includes case-study URLs; excludes Netlify hosts and redirected sources.
- Staging `noindex` not removed.

## PENDING SEO365

See `SEO365_URL_APPROVAL_REQUIRED.md`. Includes missing doctor profiles, oferte, author archive, `/page/2/`.

## PENDING CLINIC

Approved copy for any new doctor profiles or an offers page. Team grid already shows Raul, Valentina, Bogdan without profile URLs.

## BLOCKED

- Production-domain 301 proof until Next is served on `alvernadental.com`.
- Full attachment / `?p=` / Search Console URL list (no export in repo).
- `/category/blog/` 301 on **staging** until the next deploy (config is in repo; deploy was not requested).

## READY FOR PRODUCTION VALIDATION

After DNS cutover, re-run `SEO_QA_ORIGIN=https://alvernadental.com node scripts/seo-http-qa.mjs` **and** a GSC inspection. Until then, treat WordPress 200s on old paths as expected.

## Discovery gaps

- Image/attachment sitemap not published as its own Yoast index (one attachment collision: `/echipa/corina-holici/`).
- Tags: `/tag/` 404 on WP; no tag sitemap in the index.
- No crawl of `wp-content/uploads` as indexable pages.
- Individual Next case URLs have no WP predecessors except the listing `/studii-de-caz/`.

## Files changed (this pass)

- `src/config/legacy-redirects.ts`
- `src/lib/seo.test.ts`
- `src/app/sitemap.ts`
- `scripts/seo-http-qa.mjs`
- `docs/alverna/FULL_URL_MIGRATION_MATRIX.csv`
- `docs/alverna/LEGACY_URL_INVENTORY.csv`
- `docs/alverna/REDIRECT_MAPPING.csv`
- `docs/alverna/BLOG_URL_MAPPING.csv`
- `docs/alverna/REDIRECT_VALIDATION_REPORT.md`
- `docs/alverna/BLOG_URL_MIGRATION_REPORT.md`
- `docs/alverna/MISSING_PAGES_REPORT.md`
- `docs/alverna/SEO365_URL_APPROVAL_REQUIRED.md`
- `docs/alverna/URL_MIGRATION_FINAL_REPORT.md`
- `docs/alverna/REDIRECTS_PENDING_SEO365.md`

No UI, GSAP, Dynamic Island, booking form, or iStoma changes.
