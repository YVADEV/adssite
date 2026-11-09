"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { BookingCalendar, toYmd } from "@/components/booking/BookingCalendar";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { CLINIC } from "@/lib/contact";

type Status = "idle" | "loading" | "ok" | "error";

export function BookingForm({ source }: { source: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState(
    "Solicitarea ta a fost trimisă cu succes! Echipa Alverna Dental te va contacta pentru stabilirea și confirmarea programării.",
  );
  const [date, setDate] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const submittingRef = useRef(false);
  const formStartedRef = useRef(false);
  const dateFieldRef = useRef<HTMLDivElement>(null);
  const dateButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!calendarOpen) return;
    function onPointerDown(event: MouseEvent) {
      const target = event.target as Node;
      const inField = dateFieldRef.current?.contains(target);
      const inBubble = target instanceof Element && target.closest(".ads-booking-calendar");
      if (!inField && !inBubble) setCalendarOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setCalendarOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [calendarOpen]);

  function markFormStart() {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackEvent(ANALYTICS_EVENTS.formStart, { form_id: "booking", form_source: source });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current || status === "loading" || status === "ok") return;
    submittingRef.current = true;
    setError(null);
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") ?? "").trim()) {
      setStatus("ok");
      return;
    }
    if (!date) {
      submittingRef.current = false;
      setStatus("error");
      setError("Te rugăm să alegi data preferată.");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: String(data.get("fullName") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          phone: String(data.get("phone") ?? "").trim(),
          preferredDate: date,
          consent: data.get("gdpr") === "on",
          source,
          website: String(data.get("website") ?? "").trim(),
        }),
      });
      const json = (await response.json()) as { ok?: boolean; error?: string; message?: string; ignored?: boolean };
      if (!response.ok || !json.ok) {
        const fallback = await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "contact",
            numeComplet: String(data.get("fullName") ?? "").trim(),
            nume: String(data.get("fullName") ?? "").trim().split(" ")[0] ?? "",
            prenume: String(data.get("fullName") ?? "").trim().split(" ").slice(1).join(" "),
            telefon: String(data.get("phone") ?? "").trim(),
            email: String(data.get("email") ?? "").trim(),
            mesaj: `Data preferată: ${date}. Aceasta este o preferință, nu o programare confirmată. Sursă website: ${source}.`,
            source,
            gdpr: "da",
            dataPreferata: date,
          }),
        });
        if (!fallback.ok) {
          submittingRef.current = false;
          setStatus("error");
          setError(json.error || "Nu am putut trimite solicitarea. Te rugăm să ne contactezi telefonic.");
          return;
        }
      }
      if (json.ignored) {
        submittingRef.current = false;
        setStatus("idle");
        return;
      }
      trackEvent(ANALYTICS_EVENTS.formSubmit, { form_id: "booking", form_source: source });
      if (json.message) setSuccessMessage(json.message);
      setStatus("ok");
      form.reset();
      setDate("");
      formStartedRef.current = false;
    } catch {
      submittingRef.current = false;
      setStatus("error");
      setError("Nu am putut trimite solicitarea. Verifică conexiunea sau sună-ne.");
    }
  }

  return (
    <div className="ads-card-lit min-w-0 overflow-visible rounded-[20px] p-5">
      <p className="text-[14px] opacity-70">{CLINIC.instagramHandle}</p>
      <h3 className="mt-2 text-[26px] font-semibold leading-[0.95] tracking-[-0.04em]">Doriți o programare?</h3>
      <p className="mt-2 text-[15px] leading-[1.45] opacity-80">
        Completează datele și data preferată. Echipa Alverna te va contacta pentru confirmare.
      </p>
      {status === "ok" ? (
        <div role="status" className="ads-form-success-box mt-7 rounded-[18px] border border-[#B6B94C]/30 bg-[#F4F5E4] p-6">
          <p className="text-[21px] font-semibold leading-[1.35]">{successMessage}</p>
        </div>
      ) : (
        <form className="relative mt-5 grid min-w-0 gap-3" onSubmit={handleSubmit} onFocusCapture={markFormStart} noValidate>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" defaultValue="" aria-hidden />
          <label className="grid min-w-0 gap-1">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] opacity-60">Nume și prenume</span>
            <input name="fullName" className="ads-field h-12 w-full min-w-0 max-w-full rounded-[12px] px-3 text-[16px] outline-none" placeholder="Nume și prenume" autoComplete="name" required />
          </label>
          <label className="grid min-w-0 gap-1">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] opacity-60">Email</span>
            <input name="email" type="email" className="ads-field h-12 w-full min-w-0 max-w-full rounded-[12px] px-3 text-[16px] outline-none" placeholder="Adresă de e-mail" autoComplete="email" required />
          </label>
          <label className="grid min-w-0 gap-1">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] opacity-60">Telefon</span>
            <input name="phone" type="tel" className="ads-field h-12 w-full min-w-0 max-w-full rounded-[12px] px-3 text-[16px] outline-none" placeholder="Număr de telefon" autoComplete="tel" required />
          </label>
          <div ref={dateFieldRef} className="relative z-20">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] opacity-60">Data dorită</span>
            <button
              ref={dateButtonRef}
              type="button"
              className="ads-field mt-1 flex h-12 w-full items-center rounded-[12px] px-3 text-left text-[16px]"
              aria-expanded={calendarOpen}
              aria-haspopup="dialog"
              onClick={() => setCalendarOpen((open) => !open)}
            >
              {date ? date.split("-").reverse().join(".") : "Alege data"}
            </button>
            {calendarOpen ? (
              <BookingCalendar
                anchorRef={dateButtonRef}
                value={date}
                onChange={(next) => {
                  setDate(next);
                  setCalendarOpen(false);
                }}
              />
            ) : null}
          </div>
          {status === "error" ? (
            <p id="booking-form-error" role="alert" className="ads-form-error rounded-[10px] border border-[#a4392b]/40 bg-[#fdecea] px-4 py-2 text-[16px]">
              {error}
            </p>
          ) : null}
          <label className="mt-1 flex min-h-[44px] items-start gap-3 text-left text-[14px] leading-[1.45] opacity-90">
            <input type="checkbox" name="gdpr" required className="mt-1 h-5 w-5 shrink-0 accent-[color:var(--ads-accent)] md:h-6 md:w-6" />
            <span>
              Am citit și accept{" "}
              <Link href="/politica-de-confidentialitate" className="ads-link-accent underline decoration-[#B6B94C]/60 underline-offset-4">
                Politica de confidențialitate
              </Link>{" "}
              și sunt de acord cu prelucrarea datelor mele personale.
            </span>
          </label>
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-1 inline-flex h-12 w-full items-center justify-center rounded-full bg-black text-[16px] font-semibold text-white transition duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Se trimite…" : "Programează o consultație"}
          </button>
        </form>
      )}
    </div>
  );
}

export { toYmd };
