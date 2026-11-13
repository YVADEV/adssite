# Doctor and team migration report

Date: 13 November 2026.

Sources: WP REST `/wp-json/wp/v2/pages` (publish), WP HTML, Next `src/app/echipa/page.tsx` and `src/app/echipa/*/page.tsx`.

## Next profile routes (4)

| Person | WP URL | Next URL | Staging | Notes |
|---|---|---|---|---|
| Dr. Radu Nichimiș | `/echipa/radu-nichimis/` 200, H1 `Radu Nichimis`, ~3407 chars | `/echipa/radu-nichimis/` 200, H1 includes chirurgie orală | KEEP_URL | Next body longer (~4605). Credentials not independently verified against diploma. |
| Dr. Andreea Pârvu | `/echipa/parvu-andreea/` 200, H1 `Parvu Andreea` | 301 → `/echipa/andreea-parvu/` 200 | VERIFIED_ON_STAGING 301 | Next body longer. |
| Dr. Laura Grigorean | Not in Yoast page-sitemap; WP URL 404 in prior probe | `/echipa/laura-grigorean/` | New page | Not a WP migration of a known indexable URL. |
| Dr. Corina Holici | WP GET on `/echipa/corina-holici/` previously resolved to an **image attachment** | `/echipa/corina-holici/` profile | KEEP_URL after cutover | Confirm with SEO365. |

## WP profiles without Next profile pages

| WP URL | WP REST title | On Next `/echipa/` grid? | Staging | Action |
|---|---|---|---|---|
| `/echipa/raul-muresan/` | Raul Mureșan (~4670 HTML chars) | Yes, no `href` | 404 | CREATE_EQUIVALENT_PAGE or leave 404 — clinic + SEO365 |
| `/echipa/valentina-nichimis/` | Valentina Nichimis | Yes, no href | 404 | Same |
| `/echipa/bogdan-holici/` | Bogdan Holici | Yes, no href | 404 | Same |
| `/echipa/rares-harmath-3/` | Rares Harmath; WP title historically Manager | Lab technician listing | 404 | Identity/role conflict |
| `/echipa/ruxandra-darabantiu/` | Ruxandra Darabantiu | **No** | 404 | Confirm if left clinic |
| `/echipa/manuela-bolboaca-3/` | Manuela Bolboaca | **No** | 404 | Confirm if left clinic |
| `/echipa/andreea-crisan/` | Andreea Crisan, WP title Specialist Ortodontie | **No** (do not map to Pârvu or Ronea) | 404 | Confirm |

Do not invent biographies or 301 these URLs to `/echipa/` or `/` without SEO365.

## Next-only names on the grid (no WP page in REST)

Rareș Gorun, Andreea Ronea, Paula Bodocan, Petre Mureșanu, Rareș Telcean, Sidonia Stan, Ioana Gheorghiță, Marta Crina, Narcisa Moca, Alina Crim — photos on `/echipa/` only. Not in Yoast page-sitemap. Not treated as missing WP migrations.

## Structured data

Doctor profile pages use `pageMetadata` type `profile` where set. No Person JSON-LD was newly added in this audit. Flag for SEO365 if Person schema is required.
