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
  reviews: readonly GoogleReviewItem[];
  logo?: ReactNode;
};

export const CLINIC_REVIEWS: GoogleReviewItem[] = [
  {
    name: "Andreea Nisipeanu",
    meta: "3 recenzii",
    time: "acum o lună",
    text: "Recomand cu mare încredere Clinica Alverna Dental! De la prima vizită am fost întâmpinată cu multă căldură și profesionalism. Clinica este impecabil de curată și dotată cu aparatură foarte modernă. Profesionalismul, atenția la detalii și dedicarea echipei sunt la nivel înalt. Vă mulțumesc!",
  },
  {
    name: "Carmen Ilea",
    meta: "4 recenzii",
    time: "acum 2 luni",
    text: "Am fost impresionată de profesionalismul d-nei dr Andreea Pârvu. Este o persoană foarte atentă la detalii, execută cu mare finețe toate tipurile de lucrări: obturații, igienizare. Studioul este foarte curat și dotat cu tehnologie de ultimă generație. Am să revin cu plăcere.",
  },
  {
    name: "Denisa Tănase",
    meta: "2 recenzii · O fotografie",
    time: "acum 3 luni",
    text: "Am avut parte de o experiență bună și ușoară. Am fost tratată cu respect și prietenie, mi s-a explicat în detaliu fiecare pas și mi s-a răspuns la fiecare întrebare. Îi mulțumesc doamnei doctor Pârvu pentru atenție și profesionalism, la fel și doamnei asistente.",
  },
];

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
          <span className="mb-1 text-[14px] text-white/70">scor Google</span>
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

function GoogleReviewsDesktop({ reviews, logo }: GoogleReviewsMobileProps) {
  const labelId = useId();
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const total = reviews.length;
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
      setExpanded(null);
    },
    [total],
  );

  if (total === 0) return null;
  const visible = [reviews[index], reviews[(index + 1) % total]].filter((item, itemIndex, list) => {
    if (itemIndex === 1 && total < 2) return false;
    return list.indexOf(item) === itemIndex;
  });

  return (
    <div className="hidden md:grid md:grid-cols-[minmax(240px,300px)_minmax(0,1fr)] md:items-stretch md:gap-4">
      <div className="flex flex-col rounded-[16px] border border-white/10 bg-white/[0.04] p-5">
        <div className="flex items-end gap-2">
          <strong className="text-[44px] font-semibold leading-none tracking-[-0.04em]">4,8</strong>
          <span className="mb-1 text-[16px] text-white/55">/5</span>
          <span className="mb-1.5 text-[15px] text-white/70">scor Google</span>
          <GoogleMark className="mb-1.5 h-6 w-6" />
        </div>
        <a
          href={CLINIC.mapsPlaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-10 items-center text-[16px] font-medium text-[color:var(--ads-accent)] underline decoration-[color:var(--ads-accent)]/40 underline-offset-4"
        >
          Recenzii Google
        </a>
        <div className="mt-4 space-y-1 border-t border-white/10 pt-4 text-[15px] leading-[1.5] text-white/80">
          <p>
            Adresă:{" "}
            <a href={CLINIC.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-[color:var(--ads-accent)]/50 underline-offset-4">
              {CLINIC.addressLine}
            </a>
          </p>
          <p>
            Telefon:{" "}
            <a href={`tel:${CLINIC.phoneTel}`} className="underline decoration-[color:var(--ads-accent)]/50 underline-offset-4">
              {CLINIC.phoneDisplay}
            </a>
          </p>
          <p>Program: {CLINIC.hoursDisplay}</p>
          {logo}
        </div>
      </div>

      <div
        className="flex min-w-0 flex-col rounded-[16px] border border-white/10 bg-white/[0.04] p-5"
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
        <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-2">
          {visible.map((review, cardIndex) => {
            const reviewIndex = (index + cardIndex) % total;
            const isOpen = expanded === reviewIndex;
            return (
              <article key={`${review.name}-${reviewIndex}`} className={cardIndex === 1 ? "hidden min-w-0 lg:block" : "min-w-0"}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[22px] font-semibold leading-[1.15]">{review.name}</h3>
                    <p className="mt-1 text-[14px] text-white/55">
                      {review.meta}
                      {review.time ? ` · ${review.time}` : ""}
                    </p>
                  </div>
                  <span className="shrink-0 text-[14px] text-[color:var(--ads-accent)]">★★★★★</span>
                </div>
                <p className={`mt-3 text-[16px] leading-[1.55] text-white/90 ${isOpen ? "" : "line-clamp-5"}`}>{review.text}</p>
                <button
                  type="button"
                  className="mt-2 min-h-10 text-left text-[15px] font-medium text-[color:var(--ads-accent)]"
                  onClick={() => setExpanded(isOpen ? null : reviewIndex)}
                >
                  {isOpen ? "Arată mai puțin" : "Citește integral"}
                </button>
              </article>
            );
          })}
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
            aria-label="Recenzia anterioară"
            onClick={() => go(index - 1)}
          >
            ←
          </button>
          <p className="text-[13px] tabular-nums text-white/45">
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

export function GoogleReviews(props: GoogleReviewsMobileProps) {
  return (
    <>
      <GoogleReviewsMobile {...props} />
      <GoogleReviewsDesktop {...props} />
    </>
  );
}

export function DoctorReviews() {
  return (
    <section className="mx-auto mt-14 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
      <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[36px]">Recenzii</h2>
      <div className="mt-5">
        <GoogleReviews reviews={CLINIC_REVIEWS} />
      </div>
    </section>
  );
}
