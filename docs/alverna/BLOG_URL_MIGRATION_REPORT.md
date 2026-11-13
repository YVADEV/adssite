# Blog URL migration report

Date: 13 November 2026.

## Totals

| Item | Count |
|---|---|
| WordPress post-sitemap articles | 42 |
| Next.js migrated articles (`content/blog/posts.json`) | 42 |
| Articles with KEEP_URL (same `/{slug}/` path) | 42 |
| Articles redirected | 0 |
| Articles missing on Next | 0 |
| Fabricated articles | 0 |

All 42 Yoast post-sitemap URLs keep their original production paths. The Next blog index is `/blog/`, not `/blog/{slug}/`.

## Listing / archive URLs

| Old URL | Action | Destination |
|---|---|---|
| `/blog/` | KEEP_URL | `/blog/` |
| `/blog/page/2/` … `/blog/page/5/` | KEEP_URL | same paths (Next `blogPageCount()` = 5) |
| `/category/blog/` | 301_REDIRECT | `/blog/` |
| `/category/blog/page/1/` | 301_REDIRECT | `/blog/` |
| `/category/blog/page/2/` … `/page/5/` | 301_REDIRECT | `/blog/page/{n}/` |
| `/author/dr-vigh-nicoara-petra/` | REVIEW_REQUIRED | no `/author/` route; do not 301 to `/blog/` |

## Identity checks (repository)

- Title, excerpt, HTML body, author name, dates, featured image path and canonical are stored per post in `content/blog/posts.json`.
- Canonicals use `https://alvernadental.com/{slug}/`.
- One post has no featured image on the source: `anunt-important-despre-locatiile-alverna-dental-studio`.
- Internal HTML links were remapped during blog import. The only remaining `stomatologie-copii` string in `posts.json` is the `original` field of an already mapped `/servicii/pedodontie/` href.

## What was not claimed

Production-domain HTTP 200 for these articles still comes from WordPress until cutover. Staging (`alvernadental.netlify.app`) is expected to return the same paths with `noindex`.
