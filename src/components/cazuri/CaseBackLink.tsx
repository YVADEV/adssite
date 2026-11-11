"use client";

import Link from "next/link";

export function CaseBackLink() {
  return (
    <Link
      href="/cazuri/"
      className="fixed left-3 top-[calc(env(safe-area-inset-top,0px)+4.5rem)] z-[60] inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-black/75 px-3.5 text-[15px] font-semibold text-white backdrop-blur-md md:left-6 md:top-[calc(env(safe-area-inset-top,0px)+5.5rem)] md:min-h-12 md:px-4 md:text-[16px]"
    >
      <span aria-hidden>←</span>
      Înapoi la cazuri
    </Link>
  );
}
