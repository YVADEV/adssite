# Pre-launch technical audit

Verified against the repository on 13 November 2026. Next.js 16.2.4 App Router, Netlify `@netlify/plugin-nextjs` 5.15.12. Do not treat this as an SEO365 ranking audit.

| Finding | Current behavior (before this pass) | Expected | Files | Severity | Proposed correction | Status | Verification |
|---|---|---|---|---|---|---|---|
| Indexable staging | `robots.txt` Allow:/ on Netlify; no `X-Robots-Tag`; layout `index: true`; `NEXT_PUBLIC_SITE_URL` pointed at Netlify | Staging `noindex, follow`; production indexable on `alvernadental.com` | `src/middleware.ts`, `src/app/layout.tsx`, `src/app/robots.ts`, `src/lib/site.ts` | P0 | Host-aware staging (`*.netlify.app`), not `NODE_ENV` | Implemented in repo. Live Netlify not updated (no deploy) | Curl `X-Robots-Tag` and meta robots on Netlify after authorized deploy |
| Canonical domains | `SITE_URL` followed `NEXT_PUBLIC_SITE_URL` (`alvernadental.netlify.app`) | Always `https://alvernadental.com` | `src/lib/seo.ts`, `netlify.toml` | P0 | Hard-lock production origin | Implemented | `src/lib/seo.test.ts`; view-source canonical after deploy |
| Trailing slashes | Canonicals/sitemap used `/path/`; nav/footer often `/path` | One convention: trailing slash, matching WordPress | `next.config.ts` `trailingSlash: true`, `src/config/nav.ts`, `src/components/layout/SiteFooter.tsx` | P0 | Enable Next trailingSlash; update internal links | Implemented | Build redirects `/cazuri` → `/cazuri/`; sitemap slash-only |
| Redirect map incomplete | Only urgențe service → emergency page | Verified 301s for audit rows that have real targets | `src/config/legacy-redirects.ts`, `next.config.ts` | P0 | Implement verified pairs; document blockers | Partial — Raul blocked | Config tests; HTTP 301 after domain connect |
| Homepage H1 / local keyword | H1: “Implantologie și reabilitare orală complexă”. Title: “Clinică stomatologică premium în Cluj” | SEO365-approved H1/title with exact local phrase | `HomePageClient.tsx`, `layout.tsx` | P0 | Do not rewrite without copy | Waiting for SEO365 | Visual QA after copy supply |
| Homepage SEO content vs WP | Shorter homepage; no FAQ block | Approved FAQ/team/tourism copy if supplied | `HomePageClient.tsx` | P0 | Document slots; added crawlable turism/testimoniale links only | Waiting for SEO365 copy | Crawl HTML |
| Duplicate reviews HTML | Mobile + desktop review trees both in DOM | One crawlable copy if possible without redesign | `GoogleReviewsMobile.tsx` | P1 | Responsive duplicate kept (design). Not cloaking. | Open — design constraint | Diff HTML `md:hidden` vs `hidden md:grid` |
| Internal links | Turism/testimoniale footer-only | Extra in-content links | `HomePageClient.tsx`, footer | P1 | Links under Servicii + footer | Implemented | Homepage HTML |
| Cookie/GDPR URLs | Privacy + terms existed; no `/politica-de-cookies/`; no `/gdpr/` | WP URLs or 301 | `src/app/politica-de-cookies/page.tsx`, redirects | P1 | Cookie page from existing privacy wording; `/gdpr/` 301 | Implemented; legal review pending | Routes 200/301 |
| Sitemap origin | Used `SITE_URL` env (Netlify) | Production URLs only | `src/app/sitemap.ts` | P1 | Lock origin; dedupe | Implemented | `sitemap.xml` after deploy |
| Booking/iStoma | Live request flow already built | Do not rewrite | `BookingForm.tsx`, `src/lib/istoma/` | P0 functional | Added `appointment_request_success` after verified success only | Implemented; no live patient test | Unit tests; DebugView after consent |
| Schema | Dentist/LocalBusiness/WebSite/Breadcrumb/BlogPosting/FAQ on emergency | Production URLs; no invented reviews | `JsonLd.tsx` | P1 | URLs follow `SITE_URL`; no Review schema added | Implemented | Rich Results test after launch |
| Password on staging | Netlify Free, no site password | Optional | Netlify dashboard | P2 | Not enabled (would block Claude/QA fetch) | Documented | Dashboard |

## Architecture snapshot

- Routes: App Router under `src/app`, blog posts at `/{slug}/`.
- Booking: `POST /api/booking` appointment **request**, not confirmation.
- Analytics: GTM via `NEXT_PUBLIC_GTM_ID` after cookie accept (`ads-cookie-consent`).
- Tests: `npm test` (tsx).
