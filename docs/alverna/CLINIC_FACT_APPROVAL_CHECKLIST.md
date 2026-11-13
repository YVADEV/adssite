# Clinic fact approval checklist

Date: 13 November 2026.

Do **not** assume WordPress is correct. Do **not** assume Next is correct. Developer did not pick a winner.

| Fact | WordPress evidence | Next evidence | Decision needed |
|---|---|---|---|
| Primary phone | Homepage HTML contains `+40 748 085 933` | `CLINIC.phoneDisplay` = `+40 748 085 933` (`src/lib/contact.ts`) | Confirm still valid |
| Second phone | Homepage HTML contains `+40 376 448 810` next to `Luni - Vineri 09:00 - 21:00` (second location / Petra split; also in blog post `anunt-important-despre-locatiile-alverna-dental-studio`) | Not shown as clinic phone | Keep, remove, or label as Petra Smiles only |
| WhatsApp | Not separately verified on WP homepage sample | `https://wa.me/40748085933` | Confirm |
| Address | Homepage contains `Alverna 33` | `Strada Alverna 33, 400469 Cluj-Napoca` | Confirm Viilor 52B is **not** Alverna |
| Email | Not extracted from homepage sample | `contact@alvernadental.com` | Confirm |
| Weekday hours | Homepage: `Luni - Vineri 09:00 - 21:00` | Same 09:00–21:00 | Likely aligned |
| Saturday | **Not** in the WP homepage hours snippet sampled (only Mon–Fri repeated twice) | `Sâmbătă 09:00–15:00` in `hoursDisplay` and JSON-LD (`src/lib/seo.ts`) | Confirm Saturday opening |
| Sunday / weekend closed | WP homepage sample has no “weekend” string | No Sunday hours in schema | Confirm |
| Emergency 24/7 | WP `/servicii/urgente-stomatologice/` H1 `Urgențe stomatologice` | Next `/urgente-stomatologice-cluj/` H1 `Urgențe stomatologice 24/7…`; copy says doctor is **not** permanently in clinic (`Urgente24PageClient.tsx`) | Confirm 24/7 meaning |
| Consultație price | WP `/tarife/` exists (large page, ~21743 visible chars) — line-level prices **not** fully extracted in this pass | Homepage/tarife cards: 150 RON consultație (`docs/alverna/CLINIC_APPROVAL_REQUIRED.md`, `src/config/pricing.ts`) | Confirm every published price |
| Implant INNO 400 EUR / Straumann 700 EUR | WP implant page mentions **MegaGen** in H2 (`implant MegaGen`) | Next FAQ: “Prețul pornește de la 400 EUR” (`src/app/servicii/implant-dentar/page.tsx`); tarife list INNO/Straumann | Confirm brands and prices |
| All-on-4 packages | WP oferte page exists separately | Next tarife: All-on-4 INNO 2000 EUR / Straumann 5000 EUR (prior clinic doc) | Confirm |
| 15 years / 9.000 patients / 4,8 | WP homepage sample: **no** `15 ani`, `9000`, `4,8` | Next homepage `Peste 9.000`; testimoniale `4,8 / 5` | Confirm stats and rating |
| Team membership | WP profiles include Raul, Valentina, Bogdan, Ruxandra, Manuela, Andreea Crișan, Rareș Harmath (Manager) | Next grid includes Raul, Valentina, Bogdan, Rareș Harmath (lab); **not** Ruxandra, Manuela, Andreea Crișan | Confirm who still works here |

No values were changed in code during this audit.
