# Final WordPress → Next.js content and SEO migration audit

Date: 13 November 2026.  
Legacy: https://alvernadental.com/ (WordPress still live).  
Staging: https://alvernadental.netlify.app/ (`noindex, follow`).  
Canonical origin in Next: `https://alvernadental.com`.

**Verdict: MIGRATION INCOMPLETE**

URL keep/301 work is largely done. Informational migration is not: homepage SEO, long WP service essays, oferte, and most doctor bios are not 1:1. Ahrefs 111 remains unreconciled.

This is an audit. **No public copy, prices, hours, or design were changed.** No production deploy.

---

## 1. URL inventory reconciliation

| Source | Count | Evidence |
|---|---|---|
| Yoast `sitemap_index.xml` unique locs | **78** | 42 post + 34 page + 1 category + 1 author |
| WP REST published posts | **42** | `/wp-json/wp/v2/posts` 13 Nov 2026 |
| WP REST published pages | **47** | `/wp-json/wp/v2/pages` |
| REST pages **not** in Yoast page-sitemap | **13** | blog, gdpr, cookies, privacy, terms, dentist-cluj, footer, shop×3, multumim×2, prv-element-home |
| Prior migration matrix | **96** | `FULL_URL_MIGRATION_MATRIX.csv` |
| SEO365 Ahrefs claim | **111** | **No file in repo** |

**96 vs 111:** BLOCKED BY MISSING EXPORT. The 13 REST-only URLs plus pagination/slash/www variants could explain part of Ahrefs’ 111, but that is **not** proof. Those 13 were not “found as the missing 15.”

Classification of extra REST pages:

- Indexable HTML already in matrix: `/blog/`, legal, `/servicii/dentist-cluj/`, `/gdpr/`
- Likely non-indexable / orphan HTML: `/footer/`, `/shop/`, `/shop/cart/`, `/shop/checkout/`, `/multumim/`, `/multumim-2/`, `/prv-element-home/`

---

## 2. Page-by-page (sampled 33 WP↔staging HTML pairs)

Full table: `PAGE_BY_PAGE_CONTENT_COMPARISON.csv`.

| overall (sample + orphans) | n |
|---|---|
| PARTIALLY_MIGRATED | 24 |
| EQUIVALENT | 7 |
| MISSING | 2 (`/oferte-speciale/`, `/echipa/raul-muresan/` in the paired sample) |
| INTENTIONALLY_REMOVED (REST orphans) | 7 |

HTTP 200 on Next **does not** mean content parity. Example: homepage WP ~25960 extracted chars vs Next ~5819; H1 and title differ; WP FAQ true / Next FAQ false.

---

## 3. Homepage

| Signal | WordPress | Next staging |
|---|---|---|
| Title | Cabinet stomatologic - Stomatologie Alverna Dental Cluj | Alverna Dental Studio \| Clinică stomatologică premium în Cluj |
| H1 | Cabinet Stomatologic Cluj Avem grijă de zâmbetul dvs. | Implantologie și reabilitare orală complexă |
| Canonical | https://alvernadental.com/ | https://alvernadental.com/ |
| Robots | index, follow | noindex, follow (staging) |
| FAQ | yes | no |
| Local Cluj | yes (title/H1) | yes (eyebrow + description, different H1 intent) |
| Booking CTA | yes | `#contact` present |
| Layout | WP builder | Approved Next homepage — **not redesigned in this audit** |

SEO365 must approve final H1/title. Do not keyword-stuff into the Dynamic Island layout.

---

## 4. Service pages

Paired live: implant, ortodonție, Spark, pedodonție (via 301 from stomatologie-copii), urgențe, protetică, endodonție, chirurgie, estetică, profilaxie, odontologie, augmentare, fațete, coroană, aparat dentar, dentist-cluj.

- **H1** usually MATCH or close (Spark H1 DIFF: SPARK vs Alignere transparente).
- **Titles** DIFF vs Yoast (Next pattern `{Service} Cluj | … | Alverna Dental Studio`).
- **Canonical** production host on staging HTML.
- **FAQ** present on most Next service templates; **missing** on sampled `/servicii/aparat-dentar/` and `/turism-dentar/`.
- **Body** redesigned and much shorter; WP includes builder chrome so counts are not 1:1 medical-word counts.
- **No periodontology service URL** on WP sitemap; Next covers parodontologie via team (Laura) and blog `boala-parodontala-…`.
- **All-on-X** Next URL `/servicii/implant-dentar/all-on-4-all-on-6/` is **not** a WP page (WP 404 earlier). New content, not a missing WP page.
- Implant WP H2 names **MegaGen**; Next FAQ quotes **400 EUR** — clinic approval.

Pediatrics/emergency redirects: staging **301** `/servicii/stomatologie-copii/` → `/servicii/pedodontie/`; `/servicii/urgente-stomatologice/` → `/urgente-stomatologice-cluj/`.

---

## 5. Blog (42/42)

Revalidated against **WP REST**, not just slugs.

| Result | n |
|---|---|
| PASS (title/date/author/body vs REST) | 27 |
| PASS_WITH_MEDIA_ISSUES (body present; Trustindex and/or video→jpg) | 15 |
| Missing articles | **0** |

CSV: `BLOG_42_ARTICLES_INTEGRITY.csv`.

Canonicals `https://alvernadental.com/{slug}/`. `BlogPosting` + breadcrumbs in `src/app/[slug]/page.tsx`. Dates matched sampled REST `date` vs `datePublished`. Featured files on disk OK except one post that never had a featured image.

Not a PASS-on-URL-only claim.

---

## 6. Doctors — see `DOCTOR_TEAM_MIGRATION_REPORT.md`

Unresolved WP profiles: Raul, Valentina, Bogdan, Rareș Harmath, Ruxandra, Manuela, Andreea Crișan.

---

## 7. Images — see `IMAGE_MEDIA_MIGRATION_REPORT.md`

Blog files on disk complete; 15 articles have widget/video issues; redesigned marketing imagery not required to match WP.

---

## 8. Facts — see `CLINIC_FACT_APPROVAL_CHECKLIST.md`

WP homepage shows **two phones** and **Mon–Fri only**. Next shows **one phone** and **Saturday 09–15**. Emergency 24/7 wording differs. Prices/brands/stats flagged.

---

## 9. Metadata / schema

`SEO_METADATA_COMPARISON.csv`. Staging robots + `X-Robots-Tag: noindex, follow`. OG/canonical stay on `alvernadental.com`. JSON-LD counts on Next services often **higher** (breadcrumb + service + FAQ). Homepage JSON-LD 2 vs 2. Schema facts (hours, 24/7, prices) inherit clinic-approval risk.

Sitemap (`sitemap.xml` build): production host, includes cases and posts, excludes Netlify and redirect sources.

---

## 10. Redirects

| Pair | Repository | Staging 13 Nov 2026 | Production |
|---|---|---|---|
| stomatologie-copii → pedodontie | yes | 301 Location `/servicii/pedodontie/` | **not verified** (WP 200) |
| urgente service → urgente-cluj | yes | 301 | not verified |
| studii-de-caz → cazuri | yes | 301 | not verified |
| parvu-andreea → andreea-parvu | yes | 301 | not verified |
| gdpr → privacy | yes | 301 | not verified |
| politica-cookies / cookie-policy → cookies | yes | 301 | WP 404 for those alternates |
| category/blog → /blog/ | yes | 301 | WP 200 |
| category/blog/page/2 → /blog/page/2/ | yes | 301 | WP 200 |
| politica-de-cookies KEEP | yes | 200 | WP 200 |
| raul / oferte | no 301 | 404 | WP 200 |

13 source paths in `VERIFIED_REDIRECT_PAIRS`. Production 301s = **0 verified**.

---

## 11. Functional (non-destructive)

- Staging homepage and service pages include booking `#contact` (not submitted).
- WhatsApp uses `wa.me/40748085933`.
- Blog pagination routes exist (`blogPageCount` 5); WP category pages 2–5 301 on staging.
- Cookie consent component remains; not re-tested in a browser this pass.
- iStoma: no code changes this audit.

---

## 12. Safe technical fixes implemented in this audit

**None.** No broken canonical origin, duplicate redirect, or sitemap host bug was found that was safe to patch without copy approval.

---

## Final summary numbers

1. Legacy URLs documented: **96** in matrix; **89** WP REST HTML objects (42+47); **78** Yoast.
2. Unique legacy HTML pages (REST publish): **89** (not all indexable).
3. Pages fully migrated (content 1:1): **not claimed** for WP pages. Blog **27** clean PASS + **15** PASS with media notes.
4. Pages partially migrated (sampled): **24**.
5. Pages missing (important): **oferte + 7 doctor URLs** (plus author/page-2).
6. Pages requiring approval: homepage, services long-copy, legal, facts, oferte, doctors.
7. Blog fully verified vs REST body: **42** present; **27** without media flags.
8. Blog with missing/wrong media: **15**.
9. Missing images on disk (blog): **0** files; **1** post never had featured; videos mapped to jpg.
10. Missing SEO elements: homepage FAQ; aparat-dentar FAQ; turism FAQ; WP local homepage H1/title.
11. Unresolved doctor profiles: **7** WP URLs.
12. Redirects in repository: **13** paths.
13. Redirects verified on staging: **9** probed 301s (including category/blog and page/2) + cookies 200.
14. Redirects verified on production: **0**.
15. P0 blockers: **0** technical.
16. P1 issues: see `LAUNCH_BLOCKERS.md` (~9 clusters).
17. Pending SEO365: H1/title, oferte, doctors, Ahrefs export, FAQs, orphans, Spark H1.
18. Pending clinic: hours, second phone, 24/7, prices, brands, team roster.
19. Tests: previous suite **50 passed**; **no code change** this audit so tests were not re-run as a fix gate.

### Gaps

- No browser click-through of booking (unauthorized).
- No full visual QA of before/after crops.
- WP H1 empty in some earlier matrix rows; this audit filled H1 from live HTML for the 33-page sample only.
- Remaining ~50 matrix URLs (mostly blog KEEP) were verified via REST for posts, not all via HTML fetch.

**Do not claim 100% migration.**
