"use client";

import { useEffect, useState } from "react";

/**
 * Compact island after scroll, with hysteresis so the bar does not flicker
 * around a single threshold.
 */
export function useStickyHeaderScroll(enter = 56, exit = 16) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled((prev) => {
          if (y > enter) return true;
          if (y < exit) return false;
          return prev;
        });
        ticking = false;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enter, exit]);

  return scrolled;
}
