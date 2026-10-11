"use client";

import { useCallback, useId, useRef, useState, type ReactNode } from "react";

import { CLINIC } from "@/lib/contact";
import { GoogleMark } from "@/components/ui/GoogleMark";

export type GoogleReviewItem = {
  name: string;
  meta: string;
  text: string;
  time?: string;
};

type GoogleReviewsMobileProps = {
  reviews: GoogleReviewItem[];
  logo?: ReactNode;
};

export function GoogleReviewsMobile({ reviews, logo }: GoogleReviewsMobileProps) {
  const labelId = useId();
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const review = reviews[index];
  const total = reviews.length;
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
      setExpanded(false);
    },
    [total],
  );

  if (!review) return null;

  return (
    <div className="md:hidden">
      <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-4">
        <div className="flex items-end gap-2">
          <strong className="text-[32px] font-semibold leading-none tracking-[-0.04em]">4,8</strong>
          <span className="mb-0.5 text-[14px] text-white/55">/5</span>
          <span className="mb-1 text-[15px] text-[color:var(--ads-accent)]">★★★★★</span>
          <GoogleMark />
        </div>
        <a
          href={CLINIC.mapsPlaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex min-h-10 items-center text-[14px] font-medium text-[color:var(--ads-accent)] underline decoration-[color:var(--ads-accent)]/40 underline-offset-4"
        >
          Recenzii Google
        </a>
        <details className="mt-3 border-t border-white/10 pt-3">
          <summary className="cursor-pointer text-[13px] font-medium uppercase tracking-[0.14em] text-white/50">
            Date clinică
          </summary>
          <div className="mt-2 space-y-1 text-left text-[14px] leading-[1.5] text-white/80">
            <p>
              Adresă:{" "}
              <a href={CLINIC.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-[color:var(--ads-accent)]/50 underline-offset-4">
                {CLINIC.addressLine}
              </a>
            </p>
            <p>
              Număr de telefon:{" "}
              <a href={`tel:${CLINIC.phoneTel}`} className="underline decoration-[color:var(--ads-accent)]/50 underline-offset-4">
                {CLINIC.phoneDisplay}
              </a>
            </p>
            <p>Program: {CLINIC.hoursDisplay}</p>
            {logo}
          </div>
        </details>
      </div>

      <div
        className="mt-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-4"
        role="region"
        aria-labelledby={labelId}
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            go(index - 1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            go(index + 1);
          }
        }}
        onTouchStart={(event) => {
          touchX.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchX.current;
          const end = event.changedTouches[0]?.clientX;
          touchX.current = null;
          if (start == null || end == null) return;
          const delta = end - start;
          if (Math.abs(delta) < 40) return;
          go(delta < 0 ? index + 1 : index - 1);
        }}
      >
        <p id={labelId} className="sr-only">
          Recenzii pacienți
        </p>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[18px] font-semibold leading-[1.15]">{review.name}</h3>
            <p className="mt-1 text-[13px] text-white/55">
              {review.meta}
              {review.time ? ` · ${review.time}` : ""}
            </p>
          </div>
          <span className="shrink-0 text-[13px] text-[color:var(--ads-accent)]">★★★★★</span>
        </div>
        <p className={`mt-3 text-[15px] leading-[1.55] text-white/90 ${expanded ? "" : "line-clamp-5"}`}>{review.text}</p>
        <button
          type="button"
          className="mt-2 min-h-10 text-left text-[14px] font-medium text-[color:var(--ads-accent)]"
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Arată mai puțin" : "Citește integral"}
        </button>
        <div className="mt-3 flex items-center justify-between gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
            aria-label="Recenzia anterioară"
            onClick={() => go(index - 1)}
          >
            ←
          </button>
          <p className="text-[12px] tabular-nums text-white/45">
            {index + 1} / {total}
          </p>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
            aria-label="Recenzia următoare"
            onClick={() => go(index + 1)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
