/** True when we should avoid heavy media (4G save-data, slow effectiveType, reduced motion). */
export function prefersReducedMedia(): boolean {
  if (typeof window === "undefined") return false;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;

  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  };

  if (nav.connection?.saveData) return true;

  const type = nav.connection?.effectiveType;
  if (type === "slow-2g" || type === "2g" || type === "3g") return true;

  return false;
}

export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
}

/** Pick hero asset — mobile uses same file until a lighter `hero1-mobile.mp4` is added. */
export function heroVideoSrc(): string {
  if (typeof window === "undefined") return "/hero1.mp4?v=5";
  if (isMobileViewport() || prefersReducedMedia()) {
    return "/hero1-mobile.mp4?v=5";
  }
  return "/hero1.mp4?v=5";
}

/** Fallback when mobile-optimized file is unavailable. */
export const HERO_VIDEO_FALLBACK = "/hero1.mp4?v=5";
