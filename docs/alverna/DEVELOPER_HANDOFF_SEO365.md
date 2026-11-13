# Developer handoff — SEO365

Date: 13 November 2026. No production deploy was made in this pass.

## COMPLETED BY DEVELOPER

- Staging vs production indexing is hostname-aware (`src/lib/site.ts`, middleware, layout robots, `robots.ts`).
- Canonical / Open Graph / sitemap / JSON-LD origin is `https://alvernadental.com` even on Netlify builds.
- Trailing slashes match WordPress (`trailingSlash: true`).
- Verified 301s: stomatologie-copii, urgente service path, studii-de-caz, parvu-andreea, gdpr, politica-cookies, cookie-policy, category/blog (+ pages 1–5). Full matrix: `docs/alverna/FULL_URL_MIGRATION_MATRIX.csv`.
- Cookie URL restored with text copied from the existing privacy policy (not a new legal opinion).
- Footer + cookie-consent still use the existing consent banner.
- Homepage in-content links to `/turism-dentar/` and `/testimoniale/`.
- GA event `appointment_request_success` after a successful booking request; no patient fields.
- Automated SEO origin/redirect tests.
- Docs: audit, redirects, clinic approvals, QA, launch checklist.

## WAITING FOR SEO365

- Approved homepage H1 and title (exact local keyword).
- Approved homepage FAQ / extra SEO body if the WP homepage content must return.
- Decisions in `SEO365_URL_APPROVAL_REQUIRED.md` (doctors without profiles, oferte, author archive, `/page/2/`).
- Decision on `/echipa/raul-muresan/` (no profile page).
- Legal review of cookie page (wording is excerpted, not newly drafted).
- Search Console cutover and sitemap submission.
- Ranking monitoring after launch.

## WAITING FOR CLINIC

- Saturday hours vs old “closed weekends”.
- “Urgențe 24/7” vs displayed schedule.
- Tarife and statistics (15 years, 9.000 patients, 4.8).
- Phone, WhatsApp, address confirmation.
- Authorized live booking test (`ISTOMA_LIVE_BOOKING_ENABLED`).

## BLOCKED BEFORE LAUNCH

1. SEO365 homepage copy (H1/title/body).
2. Clinic fact conflicts (hours, 24/7, prices, stats).
3. Remaining redirect inventory (especially Raul and other WP doctors).
4. Production domain not connected; live staging still indexable until this commit is deployed.
5. Live HTTP proof of 301s on `alvernadental.com` (WordPress still serves the apex).

## READY FOR LAUNCH

No. Technical scaffolding is in the repo. Launch is not ready until SEO365 and clinic items above are closed and an authorized production deploy + DNS cutover happens.

## Claude / staging note

`quiet-daffodil-0aeb6a.netlify.app` remains a secondary Netlify site. GitHub production for this repo is `https://alvernadental.netlify.app`. After this commit, that host must send `noindex, follow` so Google does not index staging. Claude fetch stays allowed (`robots.txt` Allow).
