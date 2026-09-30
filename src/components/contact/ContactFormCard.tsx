"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import { CLINIC } from "@/lib/contact";

type ContactStatus = "idle" | "loading" | "ok" | "error";

export function ContactFormCard({ source }: { source: string }) {
  const pathname = usePathname();
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [viaEmailApp, setViaEmailApp] = useState(false);
  const submittingRef = useRef(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current || status === "loading" || status === "ok") return;
    submittingRef.current = true;
    setError(null);
    setViaEmailApp(false);
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
      event.currentTarget.reset();
      return;
    }

    const markOk = () => {
      setStatus("ok");
      event.currentTarget.reset();
    };

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await resp.json().catch(() => ({ ok: false }))) as { ok: boolean };
      if (resp.ok && json.ok) {
        markOk();
        return;
      }
    } catch {
      /* continuă cu următoarele canale */
    }

    try {
      const formsubmitResp = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CLINIC.email)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Programare nouă · ${payload.numeComplet}`,
          _template: "table",
          _captcha: "false",
          name: payload.numeComplet,
          nume: payload.nume,
          prenume: payload.prenume,
          telefon: payload.telefon,
          email: payload.email || "nespecificat@alvernadental.com",
          serviciu: payload.serviciu || "—",
          mesaj: payload.mesaj || "—",
          pagina: payload.pageUrl,
          sursa: payload.source,
        }),
      });
      const formsubmitJson = (await formsubmitResp.json().catch(() => ({ success: false }))) as {
        success?: boolean | string;
      };
      if (formsubmitResp.ok && (formsubmitJson.success === true || formsubmitJson.success === "true")) {
        markOk();
        return;
      }
    } catch {
      /* FormSubmit e adesea indisponibil pentru acest inbox */
    }

    try {
      const netlifyBody = new URLSearchParams();
      netlifyBody.set("form-name", "contact");
      Object.entries(payload).forEach(([key, value]) => {
        if (value) netlifyBody.set(key, value);
      });
      const netlifyResp = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyBody.toString(),
      });
      if (netlifyResp.ok) {
        markOk();
        return;
      }
    } catch {
      /* pe localhost Next.js nu procesează Netlify Forms */
    }

    const mailtoBody = [
      `Nume: ${payload.nume}`,
      `Prenume: ${payload.prenume}`,
      `Telefon: ${payload.telefon}`,
      `Email: ${payload.email || "—"}`,
      `Serviciu: ${payload.serviciu || "—"}`,
      `Mesaj: ${payload.mesaj || "—"}`,
      `Pagină: ${payload.pageUrl}`,
    ].join("\n");
    const mailto = `mailto:${CLINIC.email}?subject=${encodeURIComponent(`Programare nouă · ${payload.numeComplet}`)}&body=${encodeURIComponent(mailtoBody)}`;
    const trigger = document.createElement("a");
    trigger.href = mailto;
    trigger.style.display = "none";
    document.body.appendChild(trigger);
    trigger.click();
    trigger.remove();
    setViaEmailApp(true);
    markOk();
  }

  return (
    <div
      className="ads-card-lit rounded-[24px] p-8"
    >
      <p className="text-[21px] opacity-70">{CLINIC.instagramHandle}</p>
      <h3 className="mt-2 text-[32px] font-semibold leading-[0.95] tracking-[-0.04em] md:text-[44px]">Solicită o programare</h3>
      <p className="mt-3 text-[21px] leading-[1.45] opacity-80">
        Lasă-ne datele tale și te contactăm pentru confirmarea programării.
      </p>
      {process.env.NODE_ENV === "development" ? (
        <p className="mt-3 text-[18px] leading-[1.45] opacity-70">
          Ești pe localhost: formularul merge, dar emailul nu pleacă către clinică.
        </p>
      ) : null}
      {status === "ok" ? (
        <div role="status" className="ads-form-success-box mt-7 rounded-[18px] border border-[#B6B94C]/30 bg-[#F4F5E4] p-6">
          <p className="text-[21px] font-semibold">
            {process.env.NODE_ENV === "development" ? "Solicitarea a fost înregistrată pe localhost." : "Solicitarea a fost trimisă."}
          </p>
          <p className="mt-2 text-[21px] leading-[1.5]">
            {process.env.NODE_ENV === "development"
              ? "În development emailul nu se trimite către clinică. Pe site-ul live, după configurarea trimiterii, echipa va putea primi programările."
              : "Echipa Alverna te va contacta pentru confirmarea programării."}
          </p>
          {viaEmailApp ? (
            <p className="mt-2 text-[18px] leading-[1.5] opacity-80">
              Am pregătit un email către {CLINIC.email}. Dacă nu s-a deschis aplicația de mail, scrie-ne acolo sau sună la {CLINIC.phoneDisplay}.
            </p>
          ) : null}
        </div>
      ) : (
        <form className="relative mt-7 grid gap-4" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="form-name" value="contact" />
          <div aria-hidden="true" className="hidden">
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <label className="grid gap-1.5">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] opacity-60">Nume</span>
              <input
                id="contact-nume"
                name="nume"
                className="ads-field h-[56px] rounded-[14px] px-4 text-[21px] outline-none transition focus:ring-2 focus:ring-[#B6B94C]/45"
                placeholder="Nume"
                required
                autoComplete="family-name"
                aria-invalid={status === "error"}
                aria-describedby={status === "error" ? "contact-form-error" : undefined}
              />
            </label>
            <label className="grid gap-1.5">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] opacity-60">Prenume</span>
              <input
                id="contact-prenume"
                name="prenume"
                className="ads-field h-[56px] rounded-[14px] px-4 text-[21px] outline-none transition focus:ring-2 focus:ring-[#B6B94C]/45"
                placeholder="Prenume"
                required
                autoComplete="given-name"
                aria-invalid={status === "error"}
                aria-describedby={status === "error" ? "contact-form-error" : undefined}
              />
            </label>
          </div>
          <label className="grid gap-1.5">
            <span className="text-[13px] font-semibold uppercase tracking-[0.08em] opacity-60">Telefon</span>
            <input
              id="contact-telefon"
              name="telefon"
              type="tel"
              inputMode="tel"
              className="ads-field h-[56px] rounded-[14px] px-4 text-[21px] outline-none transition focus:ring-2 focus:ring-[#B6B94C]/45"
              placeholder="Telefon"
              required
              autoComplete="tel"
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "contact-form-error" : undefined}
            />
          </label>
          <label className="grid gap-1.5">
            <span className="text-[13px] font-semibold uppercase tracking-[0.08em] opacity-60">Email</span>
            <input
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              className="ads-field h-[56px] rounded-[14px] px-4 text-[21px] outline-none transition focus:ring-2 focus:ring-[#B6B94C]/45"
              placeholder="Email (opțional)"
              autoComplete="email"
            />
          </label>
          <label className="grid gap-1.5">
            <span className="text-[13px] font-semibold uppercase tracking-[0.08em] opacity-60">Serviciu</span>
            <input
              id="contact-serviciu"
              name="serviciu"
              className="ads-field h-[56px] rounded-[14px] px-4 text-[21px] outline-none transition focus:ring-2 focus:ring-[#B6B94C]/45"
              placeholder="Serviciu dorit"
              autoComplete="off"
            />
          </label>
          <label className="grid gap-1.5">
            <span className="text-[13px] font-semibold uppercase tracking-[0.08em] opacity-60">Mesaj</span>
            <textarea
              id="contact-mesaj"
              name="mesaj"
              rows={4}
              className="ads-field min-h-[110px] rounded-[14px] px-4 py-3 text-[21px] outline-none transition focus:ring-2 focus:ring-[#B6B94C]/45"
              placeholder="Mesaj opțional"
            />
          </label>
          {status === "error" ? (
            <p id="contact-form-error" role="alert" className="ads-form-error rounded-[10px] border border-[#a4392b]/40 bg-[#fdecea] px-4 py-2 text-[21px]">
              {error}
            </p>
          ) : null}
          <label className="mt-1 flex items-start gap-3 text-left text-[18px] leading-[1.45] opacity-90 md:text-[19px]">
            <input
              type="checkbox"
              name="gdpr"
              required
              className="mt-1 h-[18px] w-[18px] shrink-0 accent-[#B6B94C]"
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
            className="mt-2 inline-flex h-[54px] w-full items-center justify-center rounded-full bg-black text-[21px] font-semibold text-white transition duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Se trimite…" : "Programează o consultație"}
          </button>
        </form>
      )}
    </div>
  );
}

