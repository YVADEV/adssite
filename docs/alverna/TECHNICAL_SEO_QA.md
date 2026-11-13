# Technical SEO QA

## Automated (developer)

```bash
npm test
npm run build
```

`src/lib/seo.test.ts` covers:

1. Canonical host `alvernadental.com`
2. `og:url` on the same origin
3. No `netlify.app` in `pageMetadata` JSON
4. Self-referencing path for `/servicii/implant-dentar/`
5. Staging host detection without `NODE_ENV`
6. Trailing slash on static routes
7. Redirect config: permanent, no loops, no staging destinations

Optional HTTP (needs a running Next server, not WordPress):

```bash
npm run start
SEO_QA_ORIGIN=http://127.0.0.1:3000 node scripts/seo-http-qa.mjs
```

## Manual after authorized Netlify deploy (not done in this pass)

| Check | Staging `*.netlify.app` | Production `alvernadental.com` |
|---|---|---|
| `X-Robots-Tag` | `noindex, follow` | absent / indexable |
| `<meta name="robots">` | `noindex, follow` | `index, follow` |
| `robots.txt` | Allow `/`, no production sitemap required | Allow `/` + sitemap `https://alvernadental.com/sitemap.xml` |
| Canonical / og:url / og:image | `https://alvernadental.com/...` | same |
| `/gdpr/` | 301 → privacy | 301 → privacy |
| `/echipa/raul-muresan/` | 404 until SEO365 | 404 until SEO365 |
| Duplicate H1 | one per template | one per template |
| GTM `appointment_request_success` | only after booking 200, with consent, no PII | same |

## Booking / GA4 DebugView

1. Accept cookies on staging.
2. Open GA4 DebugView or GTM preview with `NEXT_PUBLIC_GTM_ID`.
3. Submit the booking form with **authorized test data only** (`ISTOMA_LIVE_BOOKING_ENABLED` remains clinic-controlled).
4. Confirm `appointment_request_success` fires once, after success UI, not on button click.
5. Confirm parameters are only `form_id` and `form_source`.

## Structured data

- Organization/Dentist/LocalBusiness + WebSite on every page (layout).
- BreadcrumbList on inner templates that already emit it.
- BlogPosting on article routes.
- FAQPage only on `/urgente-stomatologice-cluj/` matching visible FAQ.
- No `AggregateRating` / `Review` schema (Google eligibility for self-serving clinic reviews is not assumed).

## Duplicate HTML

Homepage reviews render a mobile tree (`md:hidden`) and a desktop tree (`hidden md:grid`). Visible design is unchanged. Crawlers still see both copies. Treating a visual merge as out of scope for this pass.

## Image alt / 404

Not exhaustively crawled in this pass. `not-found.tsx` exists. Blog images keep migration alts from `posts.json`.
