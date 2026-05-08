"use client";

import { motion } from "motion/react";

export default function StickyContactButtons() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed bottom-3 right-3 z-[70] flex flex-col gap-3 md:bottom-5 md:right-5"
    >
      <a
        href="https://wa.me/40748085933"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-[18px] border border-white/45 bg-transparent text-white shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition duration-200 hover:bg-white/10"
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-[24px] w-[24px] fill-none stroke-current"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.5 11.8c0 4.7-3.8 8.5-8.5 8.5a8.4 8.4 0 0 1-4.1-1.1L3.5 20.5l1.3-4.2a8.4 8.4 0 0 1-1.3-4.5c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5Z" />
          <path d="M9.1 8.7c.2-.5.4-.5.7-.5h.6c.2 0 .5.1.6.4l1 2.3c.1.2 0 .5-.1.7l-.5.6c-.1.1-.2.3-.1.5.2.4.7 1.1 1.4 1.7.8.7 1.5 1.2 2 1.4.2.1.4 0 .5-.1l.6-.6c.2-.2.4-.2.7-.1l2.1 1c.3.1.4.3.4.6v.6c0 .3 0 .5-.4.7-.4.2-1.2.4-2 .2-.8-.2-1.8-.6-3.2-1.8-1.6-1.4-2.5-2.6-3-3.6-.4-.9-.4-1.8-.3-2.3Z" />
        </svg>
      </a>
      <a
        href="tel:+40748085933"
        aria-label="Sună"
        className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-[18px] border border-white/45 bg-transparent text-white shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition duration-200 hover:bg-white/10"
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-[22px] w-[22px] fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.6 19.6 0 0 1-8.5-3 19.2 19.2 0 0 1-5.9-5.9 19.6 19.6 0 0 1-3-8.6A2 2 0 0 1 4.4 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8.3 10a16 16 0 0 0 5.7 5.7l1.3-1.3a2 2 0 0 1 2.1-.4c.9.4 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z" />
        </svg>
      </a>
      <a
        href="mailto:contact@alvernadental.com?subject=Solicita%20o%20programare"
        aria-label="Mail"
        className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-[18px] border border-white/45 bg-transparent text-white shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition duration-200 hover:bg-white/10"
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-[22px] w-[22px] fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </a>
    </motion.aside>
  );
}
