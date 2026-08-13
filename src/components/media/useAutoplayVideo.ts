"use client";

import { useEffect, type RefObject } from "react";

/** Reliable muted autoplay — retries when the browser has enough buffered data. */
export function useAutoplayVideo(
  videoRef: RefObject<HTMLVideoElement | null>,
  enabled = true
) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) return;

    const play = () => {
      video.muted = true;
      void video.play().catch(() => undefined);
    };

    play();
    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);
    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
    };
  }, [enabled]);
}
