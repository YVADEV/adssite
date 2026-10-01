"use client";

import { useEffect, useRef, useState } from "react";

import { useAutoplayVideo } from "@/components/media/useAutoplayVideo";
import { heroVideoSrc, HERO_VIDEO_FALLBACK, isMobileViewport, prefersReducedMedia } from "@/lib/media-pref";

export function HeroIntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState(HERO_VIDEO_FALLBACK);

  useEffect(() => {
    let cancelled = false;

    if (prefersReducedMedia() || isMobileViewport()) return;

    const preferred = heroVideoSrc();
    requestAnimationFrame(() => {
      if (!cancelled) setVideoSrc(preferred);
    });

    const start = () => {
      if (!cancelled) setShouldLoadVideo(true);
    };

    let idleId: number | undefined;
    let timerId: number | undefined;
    const afterLoad = () => {
      if (cancelled) return;
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(start, { timeout: 2000 });
      } else {
        timerId = window.setTimeout(start, 800);
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

  useAutoplayVideo(videoRef, shouldLoadVideo);

  return (
    <div data-anim="image" className="absolute inset-0 h-full w-full overflow-hidden">
      <picture>
        <source media="(max-width: 768px)" srcSet="/hero1-poster-640.jpg" type="image/jpeg" />
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
          poster="/hero1-poster-1280.jpg"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
