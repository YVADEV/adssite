"use client";

import Link from "next/link";

export function CaseBackLink() {
  return (
    <Link
      href="/cazuri/"
      className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-[13px] font-semibold text-white md:text-[15px]"
    >
      <span aria-hidden>←</span>
      <span className="sm:hidden">Cazuri</span>
      <span className="hidden sm:inline">Înapoi la cazuri</span>
    </Link>
  );
}
