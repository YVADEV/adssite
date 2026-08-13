"use client";

import { useRef } from "react";

import { useAutoplayVideo } from "@/components/media/useAutoplayVideo";

export function HeroIntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useAutoplayVideo(videoRef);

  return (
    <div data-anim="image" className="absolute inset-0 h-full w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero1-poster.jpg"
        aria-label="Alverna Dental Studio — clinică modernă din Cluj"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/hero1.mp4?v=3" type="video/mp4" />
      </video>
    </div>
  );
}
