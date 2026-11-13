# Missing equivalent pages

Date: 13 November 2026.

These WordPress URLs have **no equivalent Next.js route**. They must not be redirected to the homepage.

## CREATE_EQUIVALENT_PAGE (pending content)

| Old URL | Why | Risk if 301 elsewhere |
|---|---|---|
| `/oferte-speciale/` | Live WP page (offers / instalments). Next has `/tarife/` but that is a different commercial URL. | Ranking and ads pointing at offers would land on an unrelated page. |
| `/echipa/raul-muresan/` | Doctor is on the `/echipa/` grid; there is no `src/app/echipa/raul-muresan/page.tsx`. | `/echipa/` is a listing, not a profile. Homepage dump is worse. |
| `/echipa/valentina-nichimis/` | Same: listed on the grid, no profile route. | Same. |
| `/echipa/bogdan-holici/` | Same: listed on the grid, no profile route. | Same. |

Do not implement these pages until the clinic supplies approved profile/offer copy. Do not invent medical biographies.

## REVIEW_REQUIRED (no safe equivalent)

| Old URL | Evidence | Blocked action |
|---|---|---|
| `/echipa/rares-harmath-3/` | WP title “Manager”; Next lists Rareș Harmath under laboratory technicians, no profile. | Do not 301 to `/echipa/` or a guessed slug. |
| `/echipa/ruxandra-darabantiu/` | Not on the new echipa grid; no profile. | Do not invent a profile URL. |
| `/echipa/manuela-bolboaca-3/` | Not on the new echipa grid; no profile. | Do not invent a profile URL. |
| `/echipa/andreea-crisan/` | WP orthodontist profile. Next has Andreea Pârvu and Andreea Ronea — different people. | Do not 301 to another Andreea. |
| `/author/dr-vigh-nicoara-petra/` | Yoast author sitemap. Next has no author archives. | Do not 301 to `/blog/`. |
| `/page/2/` | WP homepage pagination. Next homepage is not a blog index. | Do not 301 to `/`. |

## New routes that are not legacy WP HTML pages

| URL | Note |
|---|---|
| `/echipa/laura-grigorean/` | Next profile. WP returns 404 (not in page-sitemap). |
| `/echipa/andreea-parvu/` | Next profile. WP uses `/echipa/parvu-andreea/` (301 implemented). |
| `/echipa/corina-holici/` | Next profile. WP currently serves an image attachment at this path. After cutover the path becomes the profile (KEEP_URL). |
| `/urgente-stomatologice-cluj/` | Next emergency page. WP URL is `/servicii/urgente-stomatologice/` (301 implemented). |
| `/servicii/implant-dentar/all-on-4-all-on-6/` | Next-only service URL. WP 404. |
| Individual `/cazuri/{slug}/` | Next case studies. WP listed only `/studii-de-caz/` (301 → `/cazuri/`). |

## 404 / 410

None assigned. Valuable or people URLs stay REVIEW_REQUIRED / CREATE_EQUIVALENT_PAGE until SEO365 decides 410 vs new page vs listing redirect.
