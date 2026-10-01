"use client";

import { useEffect, useRef, useState } from "react";

import { CLINIC } from "@/lib/contact";

const INSTAGRAM_REELS = [
  "DMUaw_SN-Jb",
  "DZoq3GpgqNM",
  "DZRrmy4Ae7r",
  "DZVBUW0gl0j",
  "DZMXWthgN7-",
  "DWiXYFugDv0",
] as const;

function ReelCard({ reelId }: { reelId: string }) {
  const rootRef = useRef<HTMLLIElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [frameReady, setFrameReady] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "160px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const embedSrc = `https://www.instagram.com/reel/${reelId}/embed/?cr=1&v=14`;
  const reelUrl = `https://www.instagram.com/reel/${reelId}/`;

  return (
    <li ref={rootRef} className="min-w-0 list-none">
      <div className="instagram-reel-frame ring-1 ring-white/8">
        {shouldLoad ? (
          <iframe
            title={`Reel Instagram ${reelId}`}
            src={embedSrc}
            loading="eager"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={() => setFrameReady(true)}
          />
        ) : null}

        {!frameReady ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#111] px-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#0f1115]" aria-hidden>
              <span className="ml-[3px] inline-block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-current" />
            </span>
            <span className="text-[15px] font-medium text-white/80">Se încarcă clipul…</span>
          </div>
        ) : null}
      </div>
      <a
        href={reelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center text-center text-[14px] font-medium text-white/70 underline decoration-white/25 underline-offset-4 hover:text-white"
      >
        Deschide pe Instagram
      </a>
    </li>
  );
}

export default function InstagramReelsSection() {
  return (
    <section aria-labelledby="instagram-reels-heading" className="bg-[#0A0A0A] px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1720px]">
        <h2
          id="instagram-reels-heading"
          className="text-center text-[18px] font-medium leading-[1.2] tracking-[-0.02em] text-white opacity-80 sm:text-[20px] md:text-[22px]"
        >
          Urmărește activitatea noastră
        </h2>
        <p className="mt-3 text-center">
          <a
            href={CLINIC.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center text-[18px] font-medium text-[#B6B94C] underline decoration-[#B6B94C]/40 underline-offset-4 hover:decoration-[#B6B94C]"
          >
            {CLINIC.instagramHandle}
          </a>
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:mt-10 md:grid-cols-3 md:gap-5 lg:grid-cols-6 lg:gap-6">
          {INSTAGRAM_REELS.map((reelId) => (
            <ReelCard key={reelId} reelId={reelId} />
          ))}
        </ul>
      </div>
    </section>
  );
}
