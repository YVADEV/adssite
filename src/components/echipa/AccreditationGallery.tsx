"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

import type { AccreditationImage } from "@/config/accreditations";

type AccreditationGalleryProps = {
  images: AccreditationImage[];
  name: string;
  pdfHref: string;
};

export function AccreditationGallery({ images, name, pdfHref }: AccreditationGalleryProps) {
  const titleId = useId();
  const [active, setActive] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const total = images.length;

  const close = useCallback(() => setActive(null), []);
  const go = useCallback(
    (next: number) => {
      if (total === 0) return;
      setActive(((next % total) + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (active == null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") go(active - 1);
      if (event.key === "ArrowRight") go(active + 1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [active, close, go]);

  if (total === 0) return null;
  const current = active == null ? null : images[active];

  return (
    <section className="mx-auto mt-14 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[36px]">Acreditări</h2>
          <p className="mt-2 max-w-[640px] text-[16px] leading-[1.5] text-white/70 md:text-[18px]">
            Apasă pe o diplomă ca să o vezi mare. Poți trece de la una la alta cu săgețile.
          </p>
        </div>
        <a
          href={pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="ads-btn-outline-lit inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-5 text-[16px] font-semibold text-white md:text-[18px]"
        >
          Deschide PDF
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            className="ads-photo-frame group flex h-[190px] items-center justify-center overflow-hidden rounded-[16px] p-2 outline-none md:h-[250px]"
            aria-label={`Deschide diploma ${index + 1} din ${total}, ${name}`}
          >
            <img
              src={image.src}
              alt={`Diplomă ${index + 1}, ${name}`}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {current && active != null ? (
        <div
          className="fixed inset-0 z-[12000] flex items-center justify-center bg-black/90 p-3 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={close}
        >
          <div
            className="flex max-h-full w-full max-w-[1180px] flex-col"
            onClick={(event) => event.stopPropagation()}
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
              go(delta < 0 ? active + 1 : active - 1);
            }}
          >
            <div className="mb-3 flex items-center justify-between gap-3 text-white">
              <p id={titleId} className="text-[16px] font-medium md:text-[18px]">
                {name} · {active + 1} / {total}
              </p>
              <button
                type="button"
                onClick={close}
                className="inline-flex h-11 items-center rounded-full border border-white/25 px-4 text-[16px] font-semibold"
              >
                Închide
              </button>
            </div>
            <img
              src={current.src}
              alt={`Diplomă ${active + 1}, ${name}`}
              width={current.width}
              height={current.height}
              className="ads-photo-frame max-h-[78vh] w-full rounded-[12px] object-contain"
            />
            <div className="mt-3 flex items-center justify-between">
              <button
                type="button"
                onClick={() => go(active - 1)}
                className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/25 px-4 text-[18px] text-white"
                aria-label="Diploma anterioară"
              >
                ←
              </button>
              <p className="text-[14px] tabular-nums text-white/70">
                {active + 1} / {total}
              </p>
              <button
                type="button"
                onClick={() => go(active + 1)}
                className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/25 px-4 text-[18px] text-white"
                aria-label="Diploma următoare"
              >
                →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
