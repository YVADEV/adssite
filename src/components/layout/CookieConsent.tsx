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
        const t = window.setTimeout(() => setVisible(true), 600);
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
      className="fixed bottom-3 left-3 right-3 z-[9999] max-w-[640px] rounded-[16px] border border-white/10 bg-[#0f1115]/95 p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.5)] backdrop-blur-md sm:bottom-5 sm:left-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[18px] leading-[1.5] text-white sm:text-[21px]">
          Folosim cookie-uri pentru a îmbunătăți experiența pe site și pentru analize anonime. Detalii în{" "}
          <Link href="/politica-de-confidentialitate" className="underline decoration-[#9fc48f]/60 underline-offset-4 hover:text-white">
            Politica de confidențialitate
          </Link>
          .
        </p>
        <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={() => persist("rejected")}
            className="min-h-[44px] rounded-full border border-white/25 px-4 py-2 text-[18px] font-semibold text-white transition hover:bg-white/5 sm:text-[21px]"
          >
            Doar esențiale
          </button>
          <button
            type="button"
            onClick={() => persist("accepted")}
            className="ads-btn-lit min-h-[44px] rounded-full px-4 py-2 text-[18px] font-semibold transition hover:scale-[1.03] sm:text-[21px]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
