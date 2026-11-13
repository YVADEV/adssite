# Redirects pending SEO365

Last updated: 13 November 2026.

Blog posts keep WordPress paths (`/{slug}/`). See `BLOG_URL_MAPPING.csv`. No invented blog redirects. Category archive `/category/blog/` **is** implemented as 301 → `/blog/` (verified equivalent).

## Blocked — no equivalent page in the repo

| Old URL | Why blocked | Do not do |
|---|---|---|
| `/echipa/raul-muresan/` | On `/echipa/` grid, no profile route | Do not 301 to `/echipa/` or homepage |
| `/echipa/valentina-nichimis/` | Same | Same |
| `/echipa/bogdan-holici/` | Same | Same |
| `/echipa/rares-harmath-3/` | WP Manager vs Next lab listing | Do not guess a slug |
| `/echipa/ruxandra-darabantiu/` | Not on new team grid | Do not invent a profile |
| `/echipa/manuela-bolboaca-3/` | Not on new team grid | Do not invent a profile |
| `/echipa/andreea-crisan/` | Different person from Pârvu / Ronea | Do not 301 to another Andreea |
| `/oferte-speciale/` | No offers page | Do not 301 to `/` or assume `/tarife/` |
| `/author/dr-vigh-nicoara-petra/` | No author archives | Do not 301 to `/blog/` |
| `/page/2/` | WP homepage pagination | Do not 301 to `/` |

## Implemented in repo (developer)

- `/servicii/stomatologie-copii/` → `/servicii/pedodontie/`
- `/servicii/urgente-stomatologice/` → `/urgente-stomatologice-cluj/`
- `/studii-de-caz/` → `/cazuri/`
- `/echipa/parvu-andreea/` → `/echipa/andreea-parvu/`
- `/gdpr/` → `/politica-de-confidentialitate/`
- `/politica-cookies/` and `/cookie-policy/` → `/politica-de-cookies/`
- `/category/blog/` and `/category/blog/page/1/` → `/blog/`
- `/category/blog/page/2/`–`/5/` → `/blog/page/2/`–`/5/`
- `www.alvernadental.com` → `alvernadental.com` (middleware)

HTTP 301 on the production hostname cannot be proven until the Next app is served there. Config: `src/config/legacy-redirects.ts`, `src/middleware.ts`.
