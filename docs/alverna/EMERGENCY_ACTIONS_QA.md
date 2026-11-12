# Emergency actions QA

## Contact source of truth

From `src/lib/contact.ts` (already used site-wide):

- Phone: `+40748085933` / display `+40 748 085 933`
- WhatsApp: `https://wa.me/40748085933` (same number, not invented)
- Hours: `Luni–Vineri 09:00–21:00 · Sâmbătă 09:00–15:00` — panel does **not** claim 24/7
- Emergency page: existing `EMERGENCY_HREF` = `/urgente-stomatologice-cluj/`

## Panel actions (verified in Chromium)

| Action | Implementation | Measured href |
| --- | --- | --- |
| Sună acum | `tel:+40748085933` | `tel:+40748085933` |
| Scrie pe WhatsApp | `wa.me` + encoded Romanian message | `https://wa.me/40748085933?text=Bun%C4%83%20ziua%2C%20am%20o%20urgen%C8%9B%C4%83...` |
| Vezi pagina de urgențe | Next `Link` to `EMERGENCY_HREF` | `/urgente-stomatologice-cluj` |
| Solicită programare | `#contact` when the page embeds `BookingSection`, else `/contact#contact` | `#contact` on homepage |

Disclaimer in the panel: *Cererea online nu este o consultație de urgență confirmată.*

## Interaction

- Trigger is a `button` with `aria-expanded`, `aria-controls`, `aria-haspopup="menu"`
- Visible label **Urgențe** (existing `EMERGENCY_NAV_LABEL`)
- Escape and outside mousedown close the panel; focus returns to the trigger
- Opening Emergency closes Services and the mobile menu
- In-app links are **not** closed in the same click (that previously set `inert` and cancelled navigation). Route change closes the panel.

Direct navigation check: `http://localhost:3000/urgente-stomatologice-cluj` loads the existing SEO page (title *Urgențe Stomatologice 24/7 Cluj-Napoca*). The 24/7 language on that page is existing approved copy, not new panel copy.

Booking reuses `BookingSection` `#contact` / `/contact#contact`. No new time-slot UI. iStoma untouched.

Unit tests in `src/lib/contact.test.ts` cover phone, WhatsApp URL, and booking href routing.

## Visibility

Urgențe remains in the island on desktop and mobile (not hamburger-only). Mobile menu still includes a page link to urgențe as before.

## Not claimed

- No flashing animation
- No invented WhatsApp or phone
- Panel does not say 24/7 or invent hours
