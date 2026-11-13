# Missing content report

Date: 13 November 2026. Visible-text comparison ignores nav/footer/cookie chrome as much as HTML extraction allows; WP still includes large builder chrome, so **raw character counts overstate WP unique copy**.

## Missing pages (no Next equivalent)

| Old URL | New URL | Original heading | Missing content | SEO importance | Recommended action | Approval |
|---|---|---|---|---|---|---|
| https://alvernadental.com/oferte-speciale/ | *(404 on staging)* | Oferte Speciale | Entire offers / instalments page (~5133 visible chars) | P1 | Create approved page **or** SEO365 301 (not homepage, not assumed `/tarife/`) | Yes |
| https://alvernadental.com/echipa/raul-muresan/ | 404 | Raul Mureșan | Full WP biography | P1 | Profile page if still employed | Yes |
| https://alvernadental.com/echipa/valentina-nichimis/ | 404 | Valentina Nichimis | Biography | P1 | Same | Yes |
| https://alvernadental.com/echipa/bogdan-holici/ | 404 | Bogdan Holici | Biography | P1 | Same | Yes |
| https://alvernadental.com/echipa/rares-harmath-3/ | 404 | Rares Harmath | WP Manager bio vs Next lab listing | P1 | Confirm identity | Yes |
| https://alvernadental.com/echipa/ruxandra-darabantiu/ | 404 | Ruxandra Darabantiu | Not on new grid | P1 | Confirm employment | Yes |
| https://alvernadental.com/echipa/manuela-bolboaca-3/ | 404 | Manuela Bolboaca | Not on new grid | P1 | Confirm employment | Yes |
| https://alvernadental.com/echipa/andreea-crisan/ | 404 | Andreea Crisan | WP orthodontist bio | P1 | Do not map to another Andreea | Yes |
| https://alvernadental.com/author/dr-vigh-nicoara-petra/ | 404 | Author archive | Author listing | P2 | 404/410/archive | SEO365 |
| https://alvernadental.com/page/2/ | none | Homepage pagination | Blog-on-home page 2 | P2 | Do not 301 to `/` | SEO365 |

## Missing or reduced sections on pages that exist

| Old URL | New URL | Original section | Missing / reduced | Importance | Action | Approval |
|---|---|---|---|---|---|---|
| `/` | `/` | H1 Cabinet Stomatologic Cluj; FAQ; long local copy | H1 replaced; no homepage FAQ in sampled Next HTML | P1 | Fit extra SEO copy only in approved homepage slots (eyebrow/H1/subhead/mission) | SEO365 — **do not implement without copy** |
| `/servicii/implant-dentar/` | same | H2 MegaGen; long WP essay (~49k extracted chars incl. chrome) | Next ~7.3k chars; redesigned; FAQ present | P1 | SEO365 which WP sections must return | Yes — no invented medical text |
| `/servicii/aparat-dentar/` | same | Întrebări frecvente | Next sampled HTML `faq=false` | P1 | Add approved FAQs into existing service template | Yes |
| `/turism-dentar/` | same | WP FAQ | Next `faq=false` | P1 | Same | Yes |
| `/politica-de-cookies/` | same | Full WP cookie policy | Next excerpts privacy §8 (~2213 vs ~8461 chars) | P1 | Legal review | Yes |
| `/politica-de-confidentialitate/` and `/gdpr/` | `/politica-de-confidentialitate/` | Full WP GDPR/privacy | Shorter Next legal text | P1 | Legal review | Yes |
| `/tarife/` | `/tarife/` | Large WP price table | Next uses `src/config/pricing.ts` (redesigned table) | P1 | Line-by-line clinic check | Yes |
| Blog articles with Presto video | `/{slug}/` | Self-hosted video | Poster `.jpg` used as `<video src>` | P2 | Re-import video if clinic still wants it | Yes |

## Intentionally not migrated (WP REST, not Yoast index)

`/footer/`, `/shop/`, `/shop/cart/`, `/shop/checkout/`, `/multumim/`, `/multumim-2/`, `/prv-element-home/`. Staging 404. Do not redirect to homepage.

## Do not fabricate

No replacement paragraphs were written or published.
