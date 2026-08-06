"use client";

export function HeroIntroVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/services/dental-chair.png"
      aria-label="Alverna Dental Studio — clinică modernă din Cluj"
      data-anim="image"
      className="absolute inset-0 h-full w-full object-cover object-center"
    >
      <source src="/hero1.mp4" type="video/mp4" />
    </video>
  );
}
