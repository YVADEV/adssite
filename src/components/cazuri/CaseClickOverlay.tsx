"use client";

import { useReducedMotion } from "motion/react";

import { useMotionReady } from "@/hooks/useMotionReady";

type CaseClickOverlayProps = {
  label?: string;
  compact?: boolean;
};

export function CaseClickOverlay({ label = "Vezi cazul", compact = false }: CaseClickOverlayProps) {
  const reduceMotion = useReducedMotion();
  const motionReady = useMotionReady();
  const animate = motionReady && !reduceMotion;

  return (
    <>
      {animate ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-[case-ring-pulse_2.6s_ease-in-out_infinite] rounded-[inherit]"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        />
      ) : null}

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
          className={`ads-btn-glow-sm inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 font-semibold text-white backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-4 scale-95 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 ${
            compact ? "px-3.5 py-1.5 text-[21px]" : "px-5 py-2.5 text-[21px]"
          }`}
        >
          {label}
          <span
            aria-hidden
            className={`inline-block ${animate ? "animate-[case-arrow-nudge_1.4s_ease-in-out_infinite]" : ""}`}
          >
            →
          </span>
        </span>
      </span>
    </>
  );
}
