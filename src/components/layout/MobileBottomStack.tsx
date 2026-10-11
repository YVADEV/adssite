"use client";

import { useEffect, useRef, type ReactNode } from "react";

type MobileBottomStackProps = {
  children: ReactNode;
};

export default function MobileBottomStack({ children }: MobileBottomStackProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const apply = () => {
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      document.documentElement.style.setProperty(
        "--ads-mobile-bottom-h",
        mobile ? `${el.offsetHeight}px` : "0px",
      );
    };

    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    window.addEventListener("resize", apply);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", apply);
      document.documentElement.style.removeProperty("--ads-mobile-bottom-h");
    };
  }, []);

  return (
    <div
      ref={ref}
      data-ads-mobile-bottom
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[9990] flex flex-col md:contents"
    >
      {children}
    </div>
  );
}
