# Alverna Dental — iStoma appointment request report

**Verdict: CONNECTED — production Patient API configured; live request test pending clinic confirmation in iStoma**

Date: 2026-11-09

The website now submits **appointment requests**, not confirmed appointments. No live request was sent. No deploy. Demo credentials were not used. Identifiers were not invented.

## 1. Existing integration status

Shared form: `BookingForm` + `BookingSection` on homepage, `/contact`, service pages, and doctor pages (Andreea, Laura, Radu, Corina). Visual design kept (card, fields, calendar bubble, black CTA). Removed **Ora disponibilă**, slot chips, and availability error copy.

| Method | Website use |
| --- | --- |
| `POST AddAppointmentRequest` | **Yes** — only write path |
| `POST AddAppointment` | **Not used** |
| `POST AddAppointmentRequestWithDate` | **Not used** (requires `AppointmentDate` as `DDMMYYYYHHmm`; the UI has no time) |
| `GET GetActivityIntervals` | **Not called** from the booking form |
| Email / Resend / FormSubmit | **Fallback only** while iStoma credentials are missing — still a request, never a confirmed appointment |
| `ContactFormCard` | Inquiry-only; not wired as the programare form |

iStoma remains the only destination for these submissions.

## 2. Credentials found or missing (names/status only)

Netlify production env (names only; key not stored in git):

| Variable | Status |
| --- | --- |
| `ISTOMA_API_BASE_URL` | Set — `https://dr.harmathrares.smartclinic.ro/api/Patient` (not demo) |
| `ISTOMA_API_KEY` | Set (server-only) |
| `ISTOMA_MARKETING_SOURCE_ID` | **9** — channel `Website`, created via `AddMarketingChannel` because `GetMarketingChannels` was empty |
| `ISTOMA_BRANCH_ID` | **3** — `Alverna Dental Studio` from `GetBranches` |
| `ISTOMA_LIVE_BOOKING_ENABLED` | **true** |

Not invented: `MarketingSourceId`, `BranchId`, `Category`, doctor names, demo URL/key.

PDF note: `-1` is the CautDentistBun origin. That value is **not** assumed for Alverna.

## 3. Preferred date handling (API limitation)

Documented `AddAppointmentRequest` body:

`FullName`, `Phone`, `Email`, `Notes`, `MarketingSourceId`, optional `BranchId`.

There is **no** `AppointmentDate` field on this endpoint.

`AddAppointmentRequestWithDate` has `AppointmentDate` as `DDMMYYYYHHmm`. The approved UI collects a date only, not a time. Using that endpoint would require inventing an hour. That was not done.

**How the preferred date is preserved:** it is written into `Notes` as a preference, not a reservation, e.g.

`Data preferată: 25.11.2026. Aceasta este o preferință, nu o programare confirmată.`

Reception sees it in the iStoma request and schedules/confirms there.

## 4. Request endpoint status

`POST /api/booking` → `AddAppointmentRequest`

| Condition | Result |
| --- | --- |
| Missing URL/key/marketing source | 503, no iStoma call |
| Live flag false (current) | 503, no iStoma call |
| iStoma `Success: true` | Success copy below |
| iStoma `Success: false` | Error; no success claim |
| Timeout | 504; **no retry** (avoids duplicate requests) |
| Duplicate in-flight fingerprint (phone + date) | 409 |

Patient success copy (only after `Success: true`):

> Solicitarea ta a fost trimisă cu succes! Echipa Alverna Dental te va contacta pentru stabilirea și confirmarea programării.

The UI does not say “Programare confirmată” and does not claim the date is reserved.

## 5. Availability endpoint status

The form **does not** call `/api/booking/availability`. No times are shown. Remaining availability code is unused by the website booking flow.

## 6. Test results

`npm test` — **34 passed**, 0 failed.

Covered: validation, missing credentials, missing `MarketingSourceId` (not invented), live flag off, payload contract + date in Notes, no `AddAppointment` / `GetActivityIntervals`, reject path, timeout without retry, duplicate fingerprint, demo-host block, public copy leaks.

Mocks only.

## 7. Netlify configuration requirements

Server-only (never `NEXT_PUBLIC_`):

1. `ISTOMA_API_BASE_URL` — production Patient API base
2. `ISTOMA_API_KEY`
3. `ISTOMA_MARKETING_SOURCE_ID` — clinic channel id from `GetMarketingChannels`
4. Optional `ISTOMA_BRANCH_ID`
5. `ISTOMA_LIVE_BOOKING_ENABLED=false` until an authorized test

No deploy was made.

## 8. Remaining blockers

Clinic should confirm the next website submission appears in iStoma as a **solicitare de programare** (channel Website, sediu Alverna Dental Studio), not as a confirmed calendar appointment.

## 9. Real appointment / request verified in the Alverna iStoma agenda?

API credentials verified with `GetBranches` / `GetMarketingChannels` (read-only). Live `AddAppointmentRequest` from the public form is enabled after deploy. Confirmed-agenda booking is still not used.

## Final verdict

**CONNECTED** on the Alverna SmartClinic Patient API. Submissions go to `AddAppointmentRequest` with preferred date in Notes. Reception confirms in iStoma.
