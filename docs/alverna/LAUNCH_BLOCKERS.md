# Launch blockers

Date: 13 November 2026. Evidence from live WordPress (`alvernadental.com`) and staging (`alvernadental.netlify.app`).

## P0 — technical launch blockers

None verified.

- Booking / iStoma were not modified in this audit and were not re-submitted (no live appointment authorization).
- Canonicals on staging pages sampled point at `https://alvernadental.com/…`.
- Staging `X-Robots-Tag: noindex, follow` is present on sampled routes.
- Verified 301s on staging land on existing Next routes (not homepage dumps).

## P1 — high SEO / content risk (do not ignore before cutover)

| Item | Evidence | Owner |
|---|---|---|
| Homepage H1 / title / missing FAQ | WP H1 `Cabinet Stomatologic Cluj Avem grijă de zâmbetul dvs.`; Next H1 `Implantologie și reabilitare orală complexă`. WP title `Cabinet stomatologic - Stomatologie Alverna Dental Cluj`. Next has no homepage FAQ; WP H2 set includes team, testimonials, contact. | SEO365 |
| `/oferte-speciale/` | WP HTTP 200, H1 `Oferte Speciale`, ~5133 visible chars. Staging 404. Not redirected (correct: no equivalent). | SEO365 + clinic |
| Seven WP doctor URLs without Next profiles | e.g. staging `/echipa/raul-muresan/` 404 vs WP 200. See doctor report. | SEO365 + clinic |
| Service copy volume / MegaGen vs current brands | WP implant H2 includes `implant MegaGen`; Next implant FAQ states price from 400 EUR (`src/app/servicii/implant-dentar/page.tsx`). Do not silently merge. | Clinic |
| Dual WP phone / Saturday hours | WP homepage visible: `+40 748 085 933` and `+40 376 448 810`, both `Luni - Vineri 09:00 - 21:00`. Next: only 748, plus Saturday 09:00–15:00 (`src/lib/contact.ts`). | Clinic |
| `/servicii/aparat-dentar/` FAQ | WP FAQ true; Next visible FAQ false (sampled HTML 13 Nov 2026). | SEO365 |
| `/turism-dentar/` FAQ | WP FAQ true; Next visible FAQ false. | SEO365 |
| Legal pages shortened | Cookies WP ~8461 vs Next ~2213 chars; privacy WP ~15281 vs ~5202. Cookie page was excerpted by design. | Legal / SEO365 |
| Ahrefs 111 vs 96 | No export in repo. Reconciliation **BLOCKED BY MISSING EXPORT**. | SEO365 |

## P2

- 15/42 blog articles copy Trustindex widgets and/or map Presto Player `<video>` sources to `.jpg` files.
- One blog post has no featured image (same as WP): `anunt-important-despre-locatiile-alverna-dental-studio`.
- Historical dead hrefs in articles: `/albire-dentara-cu-laser/`, `/multumim/`, `/shop/*` (`BLOG_LINK_AUDIT.csv`).
- WP REST orphans (`/footer/`, `/shop/`, `/prv-element-home/`) 404 on Next — do not homepage-redirect.

## Not blockers

- Staging noindex.
- Production still on WordPress (expected).
- Redesigned layout / Dynamic Island.
