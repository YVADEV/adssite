"use client";

import Link from "next/link";

export function CaseBackLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/cazuri/"
      prefetch={false}
      aria-label="Înapoi la cazuri"
      className={`pointer-events-auto inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 bg-black/55 px-4 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-200 hover:border-white/50 hover:bg-black/70 md:min-h-12 md:px-5 md:text-[16px] ${className}`}
    >
      <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 shrink-0" fill="none">
        <path
          d="M10 3.5 5.5 8 10 12.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Înapoi la cazuri</span>
    </Link>
  );
}
