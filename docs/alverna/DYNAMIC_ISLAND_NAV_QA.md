# Dynamic Island navigation QA

## What was implemented

At `scrollY === 0` the header matches the approved full-width bar (`#0f1115`, 72px / 64px mobile, existing logo, links, Urgențe, hamburger).

After scroll past 56px (hysteresis: returns to expanded below 16px), the inner `.ads-island` becomes a centered pill:

- width `calc(100% - 24px)` desktop / `16px` inset mobile
- height 56px (52px on small screens) inside an unchanged 72/64px sticky shell
- radius pill, fill `rgba(15,17,21,0.96)`, existing lime/red glows on All-on-X and Urgențe
- no new gradients

The sticky shell height does not change, so island inset is visual only (no document CLS from the header box).

State:

- `is-compact` from scroll hysteresis (`useStickyHeaderScroll`)
- `is-island-expanded` when Emergency or Services is open (slightly taller radius on the pill)
- mobile menu overlay `z-index: 10050`, header `10060` so logo / Urgențe / hamburger stay reachable
- overlay `hideChrome` — closing is the island hamburger (X via existing `.ads-menu-line` transforms)

Animation: CSS transitions on width/radius/background/shadow. No GSAP ScrollTriggers (avoids duplicate triggers and leaks). `prefers-reduced-motion: reduce` disables those transitions.

## Tests performed (Chromium / Cursor browser)

| Scenario | Result |
| --- | --- |
| Top of homepage | Full bar, same order of links as before + Blog |
| Scroll to 400px on `/urgente-stomatologice-cluj` | `is-compact`, header height still 72px, island ~viewport−24px |
| Emergency open | Panel under Urgențe, not clipped by the bar |
| Services click | `aria-expanded` toggles; hover still opens |
| Opening Emergency while Services would be open | Services closes |
| Route change | Panels close (`pathname` effect) |
| 320px | No overlap logo / Urgențe / hamburger; `scrollWidth === 320` |
| 390px | Same, `scrollWidth === 390` |
| 768px | Hamburger visible, desktop `nav` `display: none`, no html overflow |
| 1024px | Desktop `nav` flex, hamburger hidden, island does not overflow. Page `scrollWidth` > viewport because of `.ads-partners-track` marquee (pre-existing) |
| Reduced motion | CSS present; not toggled in OS during this session |
| Safari / Firefox | Not run |

Screenshots captured in session:

- Baseline desktop homepage navbar
- After: top-of-page header
- After: compact island on emergency article scroll
- After: emergency panel open (desktop)

## Remaining island limitations

- Dense link row on compact laptop widths.
- Island does not use `backdrop-filter` (would trap `fixed` Services dropdown).
- Mobile menu + island stacking was verified in DOM/z-index; a dedicated screenshot of the open overlay at 320px was not stored.
