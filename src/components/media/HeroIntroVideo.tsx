"use client";

import { useEffect, useRef, useState } from "react";

import { useAutoplayVideo } from "@/components/media/useAutoplayVideo";
import { heroVideoSrc, HERO_VIDEO_FALLBACK, prefersReducedMedia } from "@/lib/media-pref";

export function HeroIntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState(HERO_VIDEO_FALLBACK);

  useEffect(() => {
    let cancelled = false;

    if (prefersReducedMedia()) return;

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
      <img
        src="/hero1-poster.jpg"
        alt="Alverna Dental Studio — clinică modernă din Cluj"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {shouldLoadVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/hero1-poster.jpg"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
