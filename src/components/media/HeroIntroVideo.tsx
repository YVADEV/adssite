"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { heroVideoSrc, HERO_VIDEO_FALLBACK, prefersReducedMedia } from "@/lib/media-pref";

export function HeroIntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState(HERO_VIDEO_FALLBACK);
  const [needsManualPlay, setNeedsManualPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const autoplayAllowedRef = useRef(true);

  const tryPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !autoplayAllowedRef.current) return;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("muted", "");
    const attempt = video.play();
    if (attempt) {
      void attempt
        .then(() => {
          setIsPlaying(true);
          setNeedsManualPlay(false);
        })
        .catch(() => {
          setIsPlaying(false);
          setNeedsManualPlay(true);
        });
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    autoplayAllowedRef.current = !reducedMotion && !prefersReducedMedia();

    const preferred = heroVideoSrc();
    requestAnimationFrame(() => {
      if (!cancelled) setVideoSrc(preferred);
    });

    if (!autoplayAllowedRef.current) {
      setNeedsManualPlay(true);
      return () => {
        cancelled = true;
      };
    }

    const start = () => {
      if (!cancelled) setShouldLoadVideo(true);
    };

    let idleId: number | undefined;
    let timerId: number | undefined;
    const afterLoad = () => {
      if (cancelled) return;
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(start, { timeout: 2200 });
      } else {
        timerId = window.setTimeout(start, 900);
      }
    };

    if (document.readyState === "complete") {
      afterLoad();
    } else {
      window.addEventListener("load", afterLoad, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", afterLoad);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoadVideo) return;

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("playing", () => setIsPlaying(true));
    video.addEventListener("pause", () => {
      if (video.ended) return;
      setIsPlaying(false);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }
        if (autoplayAllowedRef.current && !needsManualPlay) {
          tryPlay();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      observer.disconnect();
    };
  }, [needsManualPlay, shouldLoadVideo, tryPlay]);

  const onManualPlay = () => {
    autoplayAllowedRef.current = true;
    setNeedsManualPlay(false);
    if (!shouldLoadVideo) {
      setShouldLoadVideo(true);
      return;
    }
    tryPlay();
  };

  return (
    <div data-anim="image" className="absolute inset-0 h-full w-full overflow-hidden">
      <picture>
        <source media="(max-width: 767px)" srcSet="/hero1-poster-640.jpg" type="image/jpeg" />
        <source media="(max-width: 1280px)" srcSet="/hero1-poster-1280.jpg" type="image/jpeg" />
        <img
          src="/hero1-poster-1920.jpg"
          width={1920}
          height={1080}
          alt="Alverna Dental Studio — clinică modernă din Cluj"
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>
      {shouldLoadVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
      {needsManualPlay && !isPlaying ? (
        <button
          type="button"
          onClick={onManualPlay}
          className="absolute right-4 top-4 z-[20] flex h-11 min-w-11 items-center justify-center rounded-full border border-white/40 bg-black/55 px-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white"
          aria-label="Redă videoclipul de prezentare"
        >
          Redă
        </button>
      ) : null}
    </div>
  );
}
