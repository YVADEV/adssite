# SEO365 final approval checklist

Date: 13 November 2026.

## Blocked without SEO365 export

Ahrefs “111 URLs” **cannot** be reconciled. No CSV/xlsx export exists in the workspace (search: `Desktop/Alverna Dental Studio/**`). Status: **BLOCKED BY MISSING EXPORT**. Do not treat the 15-URL gap as found.

## Copy / metadata (do not implement without approved wording)

- [ ] Homepage `<title>` (WP: `Cabinet stomatologic - Stomatologie Alverna Dental Cluj` vs Next: `Alverna Dental Studio | Clinică stomatologică premium în Cluj`)
- [ ] Homepage H1 (WP local “Cabinet Stomatologic Cluj…” vs Next “Implantologie și reabilitare orală complexă”)
- [ ] Homepage meta description
- [ ] Whether homepage FAQ must return, and in which existing layout slot
- [ ] Service titles/descriptions that differ from Yoast (all sampled service titles are DIFF vs WP; H1 often MATCH)
- [ ] `/servicii/aparat-dentar/spark/` H1 WP `Aparat dentar SPARK` vs Next `Alignere transparente`
- [ ] Implant MegaGen legacy copy vs current INNO/Straumann positioning
- [ ] Legal shortening (cookies, privacy, GDPR 301)
- [ ] Whether Person schema is required on doctor pages

## URL decisions

- [ ] `/oferte-speciale/`
- [ ] Seven doctor URLs without profiles (see doctor report)
- [ ] `/echipa/corina-holici/` attachment vs profile
- [ ] `/author/dr-vigh-nicoara-petra/`
- [ ] `/page/2/`
- [ ] WP REST orphans: footer/shop/multumim/prv-element-home — 410 vs ignore
- [ ] Dead blog href `/albire-dentara-cu-laser/`

## After cutover (production)

- [ ] Re-verify 301s on `alvernadental.com` (today they are **not** live; WordPress still serves apex)
- [ ] Submit `https://alvernadental.com/sitemap.xml`
- [ ] Confirm Search Console property is non-www HTTPS
- [ ] Remove or keep staging noindex (keep until production cutover)

## Already implemented (no extra approval for the mapping itself)

- Category `/category/blog/` → `/blog/` (staging 301 verified 13 Nov 2026)
- Pedodontie, urgențe, cazuri, parvu-andreea, gdpr, cookie alternate slugs
