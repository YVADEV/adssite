"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function GlobalIntro() {
  const [hidden, setHidden] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = window.sessionStorage.getItem("alverna_intro_seen") === "1";
    if (prefersReducedMotion || seen) {
      setHidden(true);
      return;
    }

    const title = root.querySelector<HTMLElement>("[data-intro='title']");
    const subtitle = root.querySelector<HTMLElement>("[data-intro='subtitle']");
    const glow = root.querySelector<HTMLElement>("[data-intro='glow']");

    gsap.set([title, subtitle], { opacity: 0, y: 30, scale: 0.97, filter: "blur(12px)" });
    gsap.set(glow, { opacity: 0.38, scale: 0.9 });

    const tl = gsap.timeline({ defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" } });
    tl.to(title, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.2 })
      .to(subtitle, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.9 }, "-=0.7")
      .to(glow, { opacity: 0.62, scale: 1.06, duration: 1.1 }, 0.1)
      .to("[data-intro='content']", { scale: 1.02, duration: 0.42, yoyo: true, repeat: 1, ease: "power1.inOut" }, "-=0.18")
      .to({}, { duration: 0.9 })
      .to("[data-intro='content']", { opacity: 0, scale: 1.08, duration: 0.72 })
      .to(root, { opacity: 0, duration: 0.6 }, "-=0.2")
      .add(() => {
        window.sessionStorage.setItem("alverna_intro_seen", "1");
        setHidden(true);
      });

    return () => {
      tl.kill();
    };
  }, []);

  if (hidden) return null;

  return (
    <div ref={rootRef} className="fixed inset-0 z-[9999] overflow-hidden bg-black">
      <div data-intro="glow" className="pointer-events-none absolute left-1/2 top-1/2 h-[46vw] w-[46vw] min-h-[260px] min-w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4E7044] blur-[140px]" />
      <div data-intro="content" className="relative flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <p data-intro="title" className="text-[42px] font-bold leading-[0.9] tracking-[-0.045em] text-white sm:text-[68px] md:text-[96px] lg:text-[124px]">
          ALVERNA DENTAL
        </p>
        <p data-intro="subtitle" className="mt-3 text-[11px] font-medium uppercase tracking-[0.25em] text-white/75 sm:text-[13px]">
          STUDIO
        </p>
      </div>
    </div>
  );
}
