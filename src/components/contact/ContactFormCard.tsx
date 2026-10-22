"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { CLINIC } from "@/lib/contact";

type ContactStatus = "idle" | "loading" | "ok" | "error";

export function ContactFormCard({ source }: { source: string }) {
  const pathname = usePathname();
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [showExtraFields, setShowExtraFields] = useState(false);
  const submittingRef = useRef(false);
  const formStartedRef = useRef(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  function markFormStart() {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackEvent(ANALYTICS_EVENTS.formStart, { form_id: "contact", form_source: source });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current || status === "loading" || status === "ok") return;
    submittingRef.current = true;
    setError(null);
    const formData = new FormData(event.currentTarget);
    const nume = String(formData.get("nume") ?? "").trim();
    const prenume = String(formData.get("prenume") ?? "").trim();
    const telefon = String(formData.get("telefon") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phoneDigits = telefon.replace(/\D/g, "");
    if (!nume || nume.length < 2) {
      submittingRef.current = false;
      setStatus("error");
      setError("Te rugăm să completezi numele.");
      return;
    }
    if (!prenume || prenume.length < 2) {
      submittingRef.current = false;
      setStatus("error");
      setError("Te rugăm să completezi prenumele.");
      return;
    }
    if (!telefon || phoneDigits.length < 9 || phoneDigits.length > 15) {
      submittingRef.current = false;
      setStatus("error");
      setError("Te rugăm să introduci un număr de telefon valid.");
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      submittingRef.current = false;
      setStatus("error");
      setError("Te rugăm să introduci un email valid.");
      return;
    }
    if (formData.get("gdpr") !== "on") {
      submittingRef.current = false;
      setStatus("error");
      setError("Te rugăm să accepți Politica de confidențialitate.");
      return;
    }
    setStatus("loading");
    const form = event.currentTarget;
    const pagePath = pathname || "/";
    const pageUrl = typeof window !== "undefined" ? window.location.href : pagePath;
    const numeComplet = `${prenume} ${nume}`.trim();
    const payload = {
      nume,
      prenume,
      numeComplet,
      telefon,
      email,
      serviciu: String(formData.get("serviciu") ?? "").trim(),
      mesaj: String(formData.get("mesaj") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
      source,
      pagePath,
      pageUrl,
      pageTitle: typeof document !== "undefined" ? document.title : undefined,
    };
    if (payload.website) {
      setStatus("ok");
      form.reset();
      return;
    }

    const markOk = () => {
      trackEvent(ANALYTICS_EVENTS.formSubmit, { form_id: "contact", form_source: source });
      setStatus("ok");
      form.reset();
      formStartedRef.current = false;
    };

    try {
      formData.set("form-name", "contact");
      formData.set("nume", nume);
      formData.set("prenume", prenume);
      formData.set("numeComplet", numeComplet);
      formData.set("telefon", telefon);
      formData.set("email", email);
      formData.set("source", source);
      formData.set("pagePath", pagePath);
      formData.set("pageUrl", pageUrl);
      formData.set("pageTitle", typeof document !== "undefined" ? document.title : "");
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        if (key === "website") return;
        if (typeof value === "string") params.append(key, value);
      });
      const formsResp = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (formsResp.ok) {
        submittingRef.current = false;
        markOk();
        return;
      }

      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await resp.json().catch(() => ({ ok: false, error: "" }))) as { ok?: boolean; error?: string };
      if (resp.ok && json.ok) {
        submittingRef.current = false;
        markOk();
        return;
      }
      submittingRef.current = false;
      setStatus("error");
      setError(json.error || "Nu am putut trimite mesajul. Te rugăm să încerci din nou sau să ne suni.");
    } catch {
      submittingRef.current = false;
      setStatus("error");
      setError("Nu am putut trimite mesajul. Verifică conexiunea sau sună-ne.");
    }
  }

  return (
    <div
      className="ads-card-lit min-w-0 overflow-hidden rounded-[20px] p-5"
    >
      <p className="text-[14px] opacity-70">{CLINIC.instagramHandle}</p>
      <h3 className="mt-2 text-[26px] font-semibold leading-[0.95] tracking-[-0.04em]">Solicită o programare</h3>
      <p className="mt-2 text-[15px] leading-[1.45] opacity-80">
        Lasă-ne datele tale și te contactăm pentru confirmarea programării.
      </p>
      {status === "ok" ? (
        <div role="status" className="ads-form-success-box mt-7 rounded-[18px] border border-[#B6B94C]/30 bg-[#F4F5E4] p-6">
          <p className="text-[21px] font-semibold">Solicitarea a fost trimisă.</p>
          <p className="mt-2 text-[21px] leading-[1.5]">
            Echipa Alverna te va contacta pentru confirmarea programării.
          </p>
        </div>
      ) : (
        <form
          className="relative mt-5 grid min-w-0 gap-3"
          onSubmit={handleSubmit}
          onFocusCapture={markFormStart}
          noValidate
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="ads-honeypot" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              ref={honeypotRef}
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              readOnly
              defaultValue=""
            />
          </div>
          <div className="grid min-w-0 grid-cols-2 gap-2">
            <label className="grid min-w-0 gap-1">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] opacity-60">Nume</span>
              <input
                id="contact-nume"
                name="nume"
                className="ads-field h-12 w-full min-w-0 max-w-full rounded-[12px] px-3 text-[16px] outline-none transition focus:ring-2 focus:ring-[color:var(--ads-accent)]/45"
                placeholder="Nume"
                required
                autoComplete="family-name"
                aria-invalid={status === "error"}
                aria-describedby={status === "error" ? "contact-form-error" : undefined}
              />
            </label>
            <label className="grid min-w-0 gap-1">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] opacity-60">Prenume</span>
              <input
                id="contact-prenume"
                name="prenume"
                className="ads-field h-12 w-full min-w-0 max-w-full rounded-[12px] px-3 text-[16px] outline-none transition focus:ring-2 focus:ring-[color:var(--ads-accent)]/45"
                placeholder="Prenume"
                required
                autoComplete="given-name"
                aria-invalid={status === "error"}
                aria-describedby={status === "error" ? "contact-form-error" : undefined}
              />
            </label>
          </div>
          <label className="grid gap-1">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] opacity-60">Telefon</span>
            <input
              id="contact-telefon"
              name="telefon"
              type="tel"
              inputMode="tel"
              className="ads-field h-12 w-full min-w-0 max-w-full rounded-[12px] px-3 text-[16px] outline-none transition focus:ring-2 focus:ring-[color:var(--ads-accent)]/45"
              placeholder="Telefon"
              required
              autoComplete="tel"
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "contact-form-error" : undefined}
            />
          </label>
          {!showExtraFields ? (
            <button
              type="button"
              className="min-h-11 text-left text-[14px] font-medium underline decoration-[color:var(--ads-accent)]/60 underline-offset-4"
              onClick={() => setShowExtraFields(true)}
            >
              Detalii suplimentare
            </button>
          ) : null}
          <div className={showExtraFields ? "grid gap-3" : "hidden"}>
          <label className="grid gap-1">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] opacity-60">Email</span>
            <input
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              className="ads-field h-12 rounded-[12px] px-3 text-[16px] outline-none transition focus:ring-2 focus:ring-[color:var(--ads-accent)]/45"
              placeholder="Email (opțional)"
              autoComplete="email"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] opacity-60">Serviciu</span>
            <input
              id="contact-serviciu"
              name="serviciu"
              className="ads-field h-12 rounded-[12px] px-3 text-[16px] outline-none transition focus:ring-2 focus:ring-[color:var(--ads-accent)]/45"
              placeholder="Serviciu dorit"
              autoComplete="off"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] opacity-60">Mesaj</span>
            <textarea
              id="contact-mesaj"
              name="mesaj"
              rows={4}
              className="ads-field min-h-[88px] rounded-[12px] px-3 py-3 text-[16px] outline-none transition focus:ring-2 focus:ring-[color:var(--ads-accent)]/45"
              placeholder="Mesaj opțional"
            />
          </label>
          </div>
          {status === "error" ? (
            <p id="contact-form-error" role="alert" className="ads-form-error rounded-[10px] border border-[#a4392b]/40 bg-[#fdecea] px-4 py-2 text-[16px] md:text-[21px]">
              {error}
            </p>
          ) : null}
          <label className="mt-1 flex min-h-[44px] items-start gap-3 text-left text-[14px] leading-[1.45] opacity-90">
            <input
              type="checkbox"
              name="gdpr"
              required
              className="mt-1 h-5 w-5 shrink-0 accent-[color:var(--ads-accent)] md:h-6 md:w-6"
            />
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

