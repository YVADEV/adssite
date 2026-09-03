"use client";

import { CLINIC } from "@/lib/contact";

const stickyIconClass = "h-[24px] w-[24px] shrink-0";

export default function StickyContactButtons() {
  return (
    <aside className="animate-[sticky-contact-in_0.55s_ease-out_both] fixed bottom-3 right-3 z-[9990] flex flex-col gap-2.5 max-md:bottom-[max(0.75rem,env(safe-area-inset-bottom))] max-md:right-[max(0.75rem,env(safe-area-inset-right))] md:bottom-5 md:right-5 md:gap-3">
      <a
        href={CLINIC.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="ads-btn-glow-lg inline-flex h-[56px] w-[56px] items-center justify-center rounded-[18px] border border-white/45 bg-transparent text-white transition duration-200 hover:bg-white/10"
      >
        <svg aria-hidden viewBox="0 0 24 24" className={`${stickyIconClass} fill-current`}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
      <a
        href={`tel:${CLINIC.phoneTel}`}
        aria-label="Sună"
        className="ads-btn-glow-lg inline-flex h-[56px] w-[56px] items-center justify-center rounded-[18px] border border-white/45 bg-transparent text-white transition duration-200 hover:bg-white/10"
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={`${stickyIconClass} fill-none stroke-current`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.6 19.6 0 0 1-8.5-3 19.2 19.2 0 0 1-5.9-5.9 19.6 19.6 0 0 1-3-8.6A2 2 0 0 1 4.4 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8.3 10a16 16 0 0 0 5.7 5.7l1.3-1.3a2 2 0 0 1 2.1-.4c.9.4 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z" />
        </svg>
      </a>
      <a
        href={`mailto:${CLINIC.email}?subject=Solicita%20o%20programare`}
        aria-label="Mail"
        className="ads-btn-glow-lg inline-flex h-[56px] w-[56px] items-center justify-center rounded-[18px] border border-white/45 bg-transparent text-white transition duration-200 hover:bg-white/10"
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={`${stickyIconClass} fill-none stroke-current`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </a>
    </aside>
  );
}
