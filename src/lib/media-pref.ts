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

/** Fallback when a lighter mobile file is unavailable. */
export const HERO_VIDEO_FALLBACK = "/hero1.mp4?v=5";

/** Hero file currently used on all viewports (no `hero1-mobile.mp4` in public yet). */
export function heroVideoSrc(): string {
  return HERO_VIDEO_FALLBACK;
}
