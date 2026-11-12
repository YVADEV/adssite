# Responsive nav matrix

Browser: Cursor embedded Chromium only (2026-11-12). Safari and Firefox not run.

Method: live `localhost:3000` plus `Emulation.setDeviceMetricsOverride` for smaller widths. Screenshot evidence for desktop top, compact island, emergency panel. Geometry (`getBoundingClientRect`, `scrollWidth`) for 320 / 390 / 768 / 1024.

| Width | Top bar | Compact island | Urgențe visible | Panel | Overflow (html) | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 320 | pass | hysteresis same | pass, no overlap with logo/hamburger | a11y open | none (`320`) | Label still “Urgențe” |
| 360 | not screenshot | — | inferred from 320/390 | — | — | Not separately captured |
| 375 | not screenshot | — | inferred | — | — | |
| 390 | pass (DOM) | — | pass, no overlap | a11y four actions | none (`390`) | |
| 393 | not screenshot | — | inferred | — | — | |
| 414 | not screenshot | — | inferred | — | — | |
| 430 | not screenshot | — | inferred | — | — | |
| 768 | hamburger + Urgențe | — | pass | — | none | Desktop `nav` hidden |
| 1024 | desktop nav + Urgențe | island not overflowing | pass | — | page `scrollWidth` 1103 from partners marquee, **not** the island | Tight link row |
| 1280 | visual desktop screenshot | visual compact on scroll | pass | visual pass | not measured | |
| 1440 | visual desktop | visual compact | pass | visual pass | not measured | |
| 1600 | not run | — | — | — | — | |
| 1920 | not run | — | — | — | — | |
| 2560 | not run | — | — | — | — | |

## Interaction matrix (Chromium)

| Action | Result |
| --- | --- |
| Top of page | Approved full header |
| Mid-scroll | Compact island, header box height unchanged (72px) |
| Bottom of page | Not separately recorded; same scroll listener |
| Scroll up past 16px | Expands (hysteresis) |
| Open Emergency | Four actions + disclaimer |
| Open Services | Click and hover; closes Emergency |
| Open mobile menu | Overlay under island; hamburger remains the closer |
| Resize with panel | Not fully exercised (emulation jumps, not live drag-resize) |
| Route change | Panels close |
| Browser Back | Not scripted this session |
| Keyboard | Trigger is a button; Escape closes panel (handler present). Full Tab loop not recorded |
| Touch | Not a physical device; click/tap via browser tools |
| Reduced motion | CSS rules present; OS flag not toggled |

## Production

`npm run build` succeeded. No deploy.
