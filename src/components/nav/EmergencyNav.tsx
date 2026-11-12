"use client";

import { useEffect, useId, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { EMERGENCY_HREF, EMERGENCY_NAV_LABEL } from "@/config/services";
import { bookingHrefForPath, CLINIC, whatsappEmergencyUrl } from "@/lib/contact";

const iconClass = "h-[18px] w-[18px] shrink-0";

function PhoneIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`${iconClass} fill-none stroke-current`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.6 19.6 0 0 1-8.5-3 19.2 19.2 0 0 1-5.9-5.9 19.6 19.6 0 0 1-3-8.6A2 2 0 0 1 4.4 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8.3 10a16 16 0 0 0 5.7 5.7l1.3-1.3a2 2 0 0 1 2.1-.4c.9.4 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`${iconClass} fill-current`}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`${iconClass} fill-none stroke-current`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`${iconClass} fill-none stroke-current`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 11h18" />
    </svg>
  );
}

const actionClass =
  "flex min-h-11 w-full items-center gap-3 rounded-[14px] px-3 text-left text-[14px] font-medium tracking-[-0.02em] text-white transition-colors duration-200 hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ads-accent)]";

type EmergencyNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function EmergencyNav({ open, onOpenChange }: EmergencyNavProps) {
  const pathname = usePathname();
  const reactId = useId();
  const panelId = `emergency-panel-${reactId.replace(/:/g, "")}`;
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) triggerRef.current?.focus({ preventScroll: true });
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    const first = rootRef.current?.querySelector<HTMLElement>("[data-emergency-action]");
    first?.focus({ preventScroll: true });

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) onOpenChange(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange]);

  const bookingHref = bookingHrefForPath(pathname);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        ref={triggerRef}
        type="button"
        aria-label="Acțiuni urgențe stomatologice"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="menu"
        onClick={() => onOpenChange(!open)}
        className="ads-btn-emergency-glow inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-full px-2.5 text-[13px] font-semibold tracking-[-0.02em] transition duration-200 sm:min-h-[44px] sm:px-4 sm:text-[16px]"
      >
        {EMERGENCY_NAV_LABEL}
      </button>
      <div
        id={panelId}
        role="menu"
        aria-label="Acțiuni urgențe"
        aria-hidden={!open}
        inert={!open}
        className={`ads-emergency-panel absolute right-0 top-[calc(100%+8px)] z-[130] w-[min(320px,calc(100vw-24px))] origin-top-right rounded-[20px] border border-white/[0.08] bg-[rgba(12,14,18,0.94)] p-2 shadow-[0_16px_48px_rgba(0,0,0,0.4)] backdrop-blur-2xl ${
          open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <a
          href={`tel:${CLINIC.phoneTel}`}
          role="menuitem"
          data-emergency-action
          className={actionClass}
          onClick={() => onOpenChange(false)}
        >
          <PhoneIcon />
          <span>Sună acum</span>
        </a>
        <a
          href={whatsappEmergencyUrl()}
          role="menuitem"
          data-emergency-action
          target="_blank"
          rel="noopener noreferrer"
          className={actionClass}
          onClick={() => onOpenChange(false)}
        >
          <WhatsAppIcon />
          <span>Scrie pe WhatsApp</span>
        </a>
        <Link
          href={EMERGENCY_HREF}
          prefetch={false}
          role="menuitem"
          data-emergency-action
          className={actionClass}
        >
          <DocumentIcon />
          <span>Vezi pagina de urgențe</span>
        </Link>
        <Link
          href={bookingHref}
          prefetch={false}
          role="menuitem"
          data-emergency-action
          className={actionClass}
        >
          <CalendarIcon />
          <span>Solicită programare</span>
        </Link>
        <p className="px-3 pb-2 pt-1 text-[12px] font-medium leading-snug text-white/55">
          Cererea online nu este o consultație de urgență confirmată. Folosiți telefonul pentru situații acute.
        </p>
      </div>
    </div>
  );
}
