"use client";

import { useEffect, useRef, useState } from "react";

const INSTAGRAM_REELS = [
  "DMUaw_SN-Jb",
  "DZoq3GpgqNM",
  "DZRrmy4Ae7r",
  "DZVBUW0gl0j",
  "DZMXWthgN7-",
  "DWiXYFugDv0",
] as const;

function ReelEmbed({ reelId }: { reelId: string }) {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !cancelled) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "200px", threshold: 0.01 },
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  return (
    <li ref={ref} className="min-w-0 list-none">
      <div className="instagram-reel-frame shadow-[0_24px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition duration-300 hover:ring-white/22">
        {visible ? (
          <iframe
            title={`Instagram reel ${reelId}`}
            src={`https://www.instagram.com/reel/${reelId}/embed`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex aspect-[9/16] w-full items-center justify-center bg-[#111] text-[18px] text-white/50">
            Instagram
          </div>
        )}
      </div>
    </li>
  );
}

export default function InstagramReelsSection() {
  return (
    <section aria-labelledby="instagram-reels-heading" className="bg-[#0A0A0A] px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-[1720px]">
        <h2
          id="instagram-reels-heading"
          className="text-center text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-[26px] md:text-[34px] lg:text-[40px]"
        >
          Urmărește activitatea noastră
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:mt-10 md:grid-cols-3 md:gap-5 lg:grid-cols-6 lg:gap-6">
          {INSTAGRAM_REELS.map((reelId) => (
            <ReelEmbed key={reelId} reelId={reelId} />
          ))}
        </ul>
      </div>
    </section>
  );
}
