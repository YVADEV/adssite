# Launch readiness checklist

Do not execute domain cutover without authorization.

## Before launch

- [x] Staging indexing rules in code (`*.netlify.app` → `noindex, follow`)
- [ ] Staging headers verified on live Netlify (blocked: no deploy this pass)
- [x] Canonical origin locked to `https://alvernadental.com`
- [x] Trailing slash convention enabled
- [x] Verified 301s in Next config
- [x] Raul Mureșan redirect blocked and documented
- [x] Cookie page route from existing privacy wording
- [x] `/gdpr/` → privacy
- [x] Sitemap generation uses production origin
- [x] Internal links for turism dentar + testimoniale
- [x] `appointment_request_success` after successful booking only
- [ ] SEO365 homepage H1/title/FAQ copy
- [ ] Clinic hours / 24/7 / prices / stats
- [ ] Password protection decision (not enabled)

## Launch day (prepare only)

1. Point `alvernadental.com` and `www` DNS to the **alvernadental** Netlify site (not quiet-daffodil).
2. SSL for the apex and www.
3. Confirm www → non-www 301.
4. Confirm production responses are indexable.
5. Confirm canonicals on `/`, a service page, a doctor page, a blog post.
6. Hit every row in `REDIRECT_MAPPING.csv` with `curl -I`.
7. Fetch `/sitemap.xml` and spot-check 200s.
8. Fetch `/robots.txt` sitemap line.
9. Smoke `/`, `/contact/`, `/blog/`, `/urgente-stomatologice-cluj/`.
10. Authorized booking test only.
11. GA4 DebugView for `appointment_request_success`.
12. SEO365 submits Search Console sitemap.

## After launch (monitoring)

Developer: 404s, redirect failures, canonical mismatches, sitemap errors.

SEO365: coverage, organic traffic, keyword positions.
