# UI / UX refinement report

Date: 2026-11-12  
Scope: public header/navigation, emergency access, shared header consistency. Not a visual redesign.

## Intent

Keep the approved Alverna design (colors, type, logo, section architecture, booking, iStoma, SEO URLs) and raise execution quality on the chrome that every route shares.

## Files modified

- `src/components/nav/SiteHeader.tsx` (new) — single header + mobile overlay for all routes
- `src/components/nav/EmergencyNav.tsx` (new) — Urgențe trigger + four-action panel
- `src/config/nav.ts` (new) — shared nav items
- `src/lib/contact.ts` — WhatsApp emergency message helper, booking href helper
- `src/lib/contact.test.ts` (new)
- `src/hooks/useStickyHeaderScroll.ts` — hysteresis (enter 56 / exit 16)
- `src/hooks/useMobileMenu.ts` — stable close/toggle callbacks
- `src/components/nav/ServicesDropdown.tsx` — click-to-open, controlled open, panel top token
- `src/components/nav/MobileMenuOverlay.tsx` — `hideChrome` so the island stays the close control
- `src/components/prototype/PrototypeFrame.tsx` — uses `SiteHeader`
- `src/components/home/HomePageClient.tsx` — uses `SiteHeader`
- `src/app/echipa/page.tsx` — uses `SiteHeader` (was a divergent header)
- `src/app/globals.css` — island geometry, z-index, reduced-motion
- `package.json` — include `contact.test.ts` in `npm test`

Unchanged by design: booking card, iStoma logic, SEO metadata, article URLs, service copy, production infra.

## Behavior implemented

- One header implementation instead of three (home / echipa / PrototypeFrame).
- Compact floating island after scroll, full approved bar at the top.
- Header box height stays 72px desktop / 64px mobile so the island inset does not shift page layout.
- Emergency stays in the island on all breakpoints; panel lists four real actions.
- Services and Emergency cannot stay open together.
- Route change closes transient menus.

## Issues discovered

| Issue | Status |
| --- | --- |
| Three headers with different gaps, labels (`Echipă` vs `Echipa`), and active states | Fixed by unifying `SiteHeader` |
| Emergency was a page link only; no call / WhatsApp / booking panel | Fixed |
| Closing the panel in the same click as a Next `Link` cancelled navigation (`inert`) | Fixed — in-app links rely on pathname cleanup |
| Hover-only Services (spec: click must also work) | Fixed |
| Hamburger hidden under `body.menu-open` while overlay had the only close control | Fixed — island hamburger stays usable |
| `backdrop-filter` on island would make `position: fixed` Services panel attach to the island | Avoided (opaque island fill, no filter) |
| Homepage Next hydration overlay (dates / locale) | Pre-existing; not introduced by this pass. Still appears in Cursor browser |
| Partner logo track (`ads-partners-track`) extends past the viewport | Pre-existing marquee; not clipped with global `overflow-x: hidden` |
| Compact island at ~1024–1280px is tight with Blog + All-on-X labels | Acceptable; items remain visible, gap reduced when compact |

## UI polish that was in scope

- Optical consistency of the header across routes
- Predictable sticky height (no CLS from island inset)
- Focusable emergency panel, Escape / outside click
- Reduced-motion: island and panel transitions disabled

## UI polish that was not a full-site redesign

Pinned GSAP services/pricing, imagery crops, and page-level typography were not restyled. Defects found during nav QA that live outside the header are listed as remaining limitations.

## Tests

See `DYNAMIC_ISLAND_NAV_QA.md`, `EMERGENCY_ACTIONS_QA.md`, `RESPONSIVE_NAV_MATRIX.md`.

- `npx tsc --noEmit` — pass
- `npm test` — 41 pass (includes contact helpers)
- `npm run build` — pass (2026-11-12)
- Browser: Cursor Chromium against `http://localhost:3000`

## Remaining limitations

- Safari and Firefox were not launched in this session.
- Not every listed width received a screenshot; several were measured via DevTools viewport override.
- Homepage hydration warning in Next overlay is still present.
- Partners marquee still overflows horizontally by design.
- Footer still says “Urgențe 24/7” (existing copy / SEO). The new panel does not claim 24/7.
- Compact desktop nav is dense; a future content decision (not this task) would be shortening labels.

Production was not deployed.
