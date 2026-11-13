# SEO365 URL approval required

Date: 13 November 2026.

Developer implemented only mappings with a verified equivalent Next route. Everything below needs an explicit SEO365 (and where noted, clinic) decision.

## People URLs

1. `/echipa/raul-muresan/` — create profile **or** leave 404 **or** (not recommended) 301 to `/echipa/`.
2. `/echipa/valentina-nichimis/` — same options.
3. `/echipa/bogdan-holici/` — same options.
4. `/echipa/rares-harmath-3/` — WP “Manager” vs Next lab technician listing. Confirm identity and destination.
5. `/echipa/ruxandra-darabantiu/` — not on the new team grid.
6. `/echipa/manuela-bolboaca-3/` — not on the new team grid.
7. `/echipa/andreea-crisan/` — do not map to another Andreea.
8. `/echipa/corina-holici/` — confirm KEEP_URL is intended (WP currently serves an attachment file).

## Commercial / taxonomy

9. `/oferte-speciale/` — create an offers page **or** approved 301 (not homepage). `/tarife/` is not assumed equivalent.
10. `/author/dr-vigh-nicoara-petra/` — keep 404, 410, or create author archive.
11. `/page/2/` — WP homepage pagination; Next has no equivalent.

## Data gaps (cannot invent)

- No local Google Search Console export.
- No local Ahrefs export. The previously cited “111 URLs” is **not** treated as the full indexable set.
- Yoast sitemaps discovered **78** unique URLs (42 posts, 34 pages, 1 category, 1 author). Extra live probes added blog pagination and legal URLs not in those sitemaps.
- No Yoast image / attachment sitemap was present as a separate index entry beyond page HTML. Attachment collision observed only for Corina Holici.
- `?p=` and other shortlinks were not inventoried (WordPress still serves production).

Please return approved `old → new` pairs only. Do not approve homepage dumps.
