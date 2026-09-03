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
    if (preferred.includes("hero1-mobile")) {
      fetch(preferred, { method: "HEAD" })
        .then((res) => {
          if (!cancelled) setVideoSrc(res.ok ? preferred : HERO_VIDEO_FALLBACK);
        })
        .catch(() => {
          if (!cancelled) setVideoSrc(HERO_VIDEO_FALLBACK);
        });
    } else {
      requestAnimationFrame(() => {
        if (!cancelled) setVideoSrc(preferred);
      });
    }

    const start = () => {
      if (!cancelled) setShouldLoadVideo(true);
    };

    let idleId: number | undefined;
    let timerId: number | undefined;

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(start, { timeout: 1200 });
    } else {
      timerId = window.setTimeout(start, 600);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
    };
  }, []);

  useAutoplayVideo(videoRef, shouldLoadVideo);

  return (
    <div data-anim="image" className="absolute inset-0 h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
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
