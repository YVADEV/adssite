"use client";

import { motion, useReducedMotion } from "motion/react";

type CaseClickOverlayProps = {
  label?: string;
  compact?: boolean;
};

export function CaseClickOverlay({ label = "Vezi cazul", compact = false }: CaseClickOverlayProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {!reduceMotion && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          animate={{
            boxShadow: [
              "inset 0 0 0 1px rgba(255,255,255,0.08)",
              "inset 0 0 0 1px rgba(255,255,255,0.28)",
              "inset 0 0 0 1px rgba(255,255,255,0.08)",
            ],
          }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-black/0 transition-all duration-500 ease-out group-hover:bg-black/45 group-focus-visible:bg-black/45"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(to_top,rgba(0,0,0,0.72),transparent_50%)] opacity-50 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
      />

      <span className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
        <span
          className={`inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-4 scale-95 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 ${
            compact ? "px-3.5 py-1.5 text-[11px]" : "px-5 py-2.5 text-[13px]"
          }`}
        >
          {label}
          <motion.span
            aria-hidden
            className="inline-block"
            animate={reduceMotion ? {} : { x: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </span>
      </span>

      <motion.span
        aria-hidden
        className={`pointer-events-none absolute inline-flex items-center justify-center rounded-full border border-white/40 bg-black/40 font-light text-white backdrop-blur-sm transition-all duration-400 group-hover:rotate-90 group-hover:scale-110 group-hover:border-white/70 group-hover:bg-white group-hover:text-black group-focus-visible:rotate-90 group-focus-visible:scale-110 ${
          compact ? "left-2 top-2 h-[18px] w-[18px] text-[11px]" : "left-4 top-4 h-8 w-8 text-[18px]"
        }`}
        animate={reduceMotion ? {} : { scale: [1, 1.08, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        +
      </motion.span>
    </>
  );
}
