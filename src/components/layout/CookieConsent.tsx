"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ads-cookie-consent";

type Choice = "accepted" | "rejected";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const t = window.setTimeout(() => setVisible(true), 2800);
        return () => window.clearTimeout(t);
      }
    } catch {
      // localStorage might be blocked — show banner anyway
      setVisible(true);
    }
  }, []);

  function persist(choice: Choice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore — banner will re-appear on next visit
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Notificare cookie-uri"
      data-ads-cookie-consent
      className="pointer-events-auto z-[9999] mx-3 mb-2 rounded-[14px] border border-white/10 bg-[#0f1115]/95 p-2.5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.5)] backdrop-blur-md max-md:relative max-md:inset-auto md:fixed md:bottom-5 md:left-5 md:right-auto md:mx-0 md:mb-0 md:max-w-[640px] md:rounded-[16px] md:p-4"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-3">
        <p className="text-[13px] leading-[1.4] text-white md:text-[21px] md:leading-[1.5]">
          Folosim cookie-uri pentru a îmbunătăți experiența pe site și pentru analize anonime. Detalii în{" "}
          <Link href="/politica-de-confidentialitate/" prefetch={false} className="underline decoration-[color:var(--ads-accent)]/60 underline-offset-4 hover:text-white">
            Politica de confidențialitate
          </Link>
          .
        </p>
        <div className="flex w-full shrink-0 flex-row gap-2 md:w-auto">
          <button
            type="button"
            onClick={() => persist("rejected")}
            className="min-h-11 flex-1 rounded-full border border-white/25 px-3 py-2 text-[14px] font-semibold text-white transition hover:bg-white/5 md:min-h-[44px] md:flex-none md:px-4 md:text-[21px]"
          >
            Doar esențiale
          </button>
          <button
            type="button"
            onClick={() => persist("accepted")}
            className="ads-btn-lit min-h-11 flex-1 rounded-full px-3 py-2 text-[14px] font-semibold transition md:min-h-[44px] md:flex-none md:px-4 md:text-[21px] md:hover:scale-[1.03]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
