"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const contacts = [
  {
    href: "https://wa.me/40748085933",
    label: "WhatsApp",
    icon: "/contact/whatsapp.png",
    external: true,
  },
  {
    href: "tel:+40748085933",
    label: "Sună",
    icon: "/contact/phone.png",
    external: false,
  },
  {
    href: "mailto:contact@alvernadental.com?subject=Solicita%20o%20programare",
    label: "Mail",
    icon: "/contact/mail.png",
    external: false,
  },
] as const;

function ContactIconLink({
  href,
  label,
  icon,
  external,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      aria-label={label}
      onClick={onNavigate}
      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition duration-200 hover:scale-105 active:scale-95 md:h-[52px] md:w-[52px]"
    >
      <img src={icon} alt="" className="h-full w-full object-contain" />
    </a>
  );
}

function ContactBar({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-white/20 bg-[#0f1115]/92 px-2 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md md:gap-2 md:px-3 md:py-2 ${className ?? ""}`}
      role="group"
      aria-label="Contact rapid"
    >
      {contacts.map((item) => (
        <ContactIconLink key={item.label} {...item} onNavigate={onNavigate} />
      ))}
    </div>
  );
}

export default function StickyContactButtons() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (rootRef.current && !rootRef.current.contains(target)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [mobileOpen]);

  return (
    <motion.div
      ref={rootRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed bottom-3 right-3 z-[70] md:bottom-5 md:right-5"
    >
      <div className="hidden md:block">
        <ContactBar />
      </div>

      <div className="md:hidden">
        <AnimatePresence mode="wait">
          {mobileOpen ? (
            <motion.div
              key="bar"
              initial={{ opacity: 0, scale: 0.92, x: 8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.92, x: 8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              <ContactBar onNavigate={() => setMobileOpen(false)} />
              <button
                type="button"
                aria-label="Închide contacte"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#0f1115]/90 text-lg text-white backdrop-blur-md"
              >
                ×
              </button>
            </motion.div>
          ) : (
            <motion.button
              key="trigger"
              type="button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              aria-label="Deschide contacte rapide"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#0f1115]/92 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md"
            >
              <img src="/contact/whatsapp.png" alt="" className="h-11 w-11 object-contain" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
