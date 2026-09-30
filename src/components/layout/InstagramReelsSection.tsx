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

function ReelFallback({ reelId }: { reelId: string }) {
  return (
    <a
      href={`https://www.instagram.com/reel/${reelId}/`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex aspect-[9/16] w-full flex-col items-center justify-center gap-3 bg-[#111] px-4 text-center text-white transition hover:bg-[#161616]"
    >
      <span className="text-[15px] font-medium text-white/80">Reel Instagram</span>
      <span className="text-[17px] font-semibold text-[#B6B94C]">Vezi pe Instagram</span>
      <span className="text-[14px] text-white/50">{CLINIC.instagramHandle}</span>
    </a>
  );
}

function ReelEmbed({ reelId }: { reelId: string }) {
  const [visible, setVisible] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!visible || embedFailed || loadedRef.current) return;
    const timer = window.setTimeout(() => {
      if (!loadedRef.current) setEmbedFailed(true);
    }, 12000);
    return () => window.clearTimeout(timer);
  }, [visible, embedFailed]);

  return (
    <li className="min-w-0 list-none">
      <div className="instagram-reel-frame ring-1 ring-white/8 transition duration-300 hover:ring-white/16">
        {visible && !embedFailed ? (
          <iframe
            title={`Instagram reel ${reelId}`}
            src={`https://www.instagram.com/reel/${reelId}/embed`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => {
              loadedRef.current = true;
              setEmbedFailed(false);
            }}
            onError={() => setEmbedFailed(true)}
          />
        ) : visible && embedFailed ? (
          <ReelFallback reelId={reelId} />
        ) : (
          <button
            type="button"
            className="h-full w-full"
            onClick={() => setVisible(true)}
            aria-label="Încarcă reel Instagram"
          >
            <ReelFallback reelId={reelId} />
          </button>
        )}
      </div>
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
            className="text-[18px] font-medium text-[#B6B94C] underline decoration-[#B6B94C]/40 underline-offset-4 hover:decoration-[#B6B94C]"
          >
            {CLINIC.instagramHandle}
          </a>
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:mt-10 md:grid-cols-3 md:gap-5 lg:grid-cols-6 lg:gap-6">
          {INSTAGRAM_REELS.map((reelId) => (
            <ReelEmbed key={reelId} reelId={reelId} />
          ))}
        </ul>
      </div>
    </section>
  );
}
