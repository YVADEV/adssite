# Redirects pending SEO365

Last updated: 13 November 2026.

Blog posts already keep their WordPress paths (`/{slug}/`). See `BLOG_URL_MAPPING.csv`. No invented blog redirects.

## Blocked — no equivalent page in the repo

| Old URL | Why blocked | Do not do |
|---|---|---|
| `/echipa/raul-muresan/` | Dr. Raul Mureșan appears on `/echipa/` without a profile route | Do not 301 to `/echipa/` or homepage unless SEO365 confirms |
| Other WP doctor URLs not in `src/app/echipa/*/page.tsx` | Only Andreea Pârvu, Radu Nichimiș, Laura Grigorean, Corina Holici have profiles | Do not invent profile URLs |

## Incomplete inventory

The November 12 audit list is not the full WordPress sitemap.

SEO365 still needs to supply:

1. Remaining doctor/author URLs from the old sitemap.
2. Any service URLs that are not in `src/config/services.ts`.
3. Tag/category/archive URLs (`/category/`, `/author/`, `/tag/`) if they have inbound links.
4. Attachment and `?p=` permalinks.
5. `www` vs non-www Search Console property ownership after cutover.

## Implemented now (developer)

- `/servicii/stomatologie-copii/` → `/servicii/pedodontie/`
- `/servicii/urgente-stomatologice/` → `/urgente-stomatologice-cluj/`
- `/studii-de-caz/` → `/cazuri/`
- `/echipa/parvu-andreea/` → `/echipa/andreea-parvu/`
- `/gdpr/` → `/politica-de-confidentialitate/`
- `/politica-cookies/` → `/politica-de-cookies/`
- `www.alvernadental.com` → `alvernadental.com`

HTTP 301 on production cannot be proven until the domain is connected. Config lives in `src/config/legacy-redirects.ts` and `src/middleware.ts`.
