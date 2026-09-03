"use client";

import { forwardRef, useEffect, useRef, useState } from "react";

import { useAutoplayVideo } from "@/components/media/useAutoplayVideo";
import { DEFAULT_CASE_STRIP, type CaseStripItem } from "@/config/case-strips";
import { prefersReducedMedia } from "@/lib/media-pref";

export type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  loop?: boolean;
  /** Delay loading until this many ms after entering viewport (stagger grid videos). */
  loadDelayMs?: number;
};

/**
 * Autoplay-muted video that loads near the viewport with metadata preload only.
 */
export const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(function LazyVideo(
  {
    src,
    poster,
    className = "h-full w-full object-cover",
    ariaLabel,
    loop = true,
    loadDelayMs = 0,
  },
  forwardedRef
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  function setVideoRef(el: HTMLVideoElement | null) {
    videoRef.current = el;
    if (typeof forwardedRef === "function") {
      forwardedRef(el);
    } else if (forwardedRef) {
      forwardedRef.current = el;
    }
  }
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [saveDataMode, setSaveDataMode] = useState(
    () => typeof window !== "undefined" && prefersReducedMedia(),
  );

  useAutoplayVideo(videoRef, shouldLoad && !isReducedMotion && !saveDataMode);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setIsReducedMotion(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || isReducedMotion || saveDataMode) return;

    let cancelled = false;
    let delayTimer: ReturnType<typeof setTimeout> | undefined;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !cancelled) {
            if (loadDelayMs > 0) {
              delayTimer = setTimeout(() => {
                if (!cancelled) setShouldLoad(true);
              }, loadDelayMs);
            } else {
              setShouldLoad(true);
            }
          }
        }
      },
      { rootMargin: "120px", threshold: 0.01 }
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
      if (delayTimer) clearTimeout(delayTimer);
    };
  }, [isReducedMotion, loadDelayMs, saveDataMode]);

  useEffect(() => {
    if (!shouldLoad) return;
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className={className} aria-label={ariaLabel}>
      {!shouldLoad || isReducedMotion || saveDataMode ? (
        poster ? (
          <img src={poster} alt={ariaLabel ?? ""} className="h-full w-full object-cover" loading="lazy" decoding="async" />
        ) : (
          <div className="h-full w-full bg-black/40" aria-hidden />
        )
      ) : (
        <video
          ref={setVideoRef}
          autoPlay
          muted
          loop={loop}
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={ariaLabel}
          className="h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
});

/** Shared video strip article height — responsive, desktop unchanged at md+. */
const VIDEO_STRIP_ARTICLE_CLASS =
  "relative h-[min(70vw,400px)] bg-black sm:h-[460px] md:h-[520px]";

/** Shared "Cazuri before/after" 3-video grid — center clip loads last (largest file). */
export function CazuriVideoStrip({ items = DEFAULT_CASE_STRIP }: { items?: CaseStripItem[] }) {
  const strip = items;

  return (
    <div className="mt-8 grid grid-cols-1 gap-[3px] overflow-hidden rounded-[18px] md:grid-cols-[1fr_1fr_2fr] lg:mt-12">
      {strip.map((item, index) => {
        const rounded =
          index === 0
            ? "rounded-l-[18px]"
            : index === strip.length - 1
              ? "rounded-r-[18px]"
              : "";
        return (
          <article key={`${item.src}-${index}`} className={`${VIDEO_STRIP_ARTICLE_CLASS} ${rounded}`}>
            <LazyVideo
              src={item.src}
              poster={item.poster}
              ariaLabel={item.ariaLabel}
              loadDelayMs={item.loadDelayMs}
            />
          </article>
        );
      })}
    </div>
  );
}
