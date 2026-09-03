"use client";

import { useRef, type TouchEventHandler } from "react";

/** Horizontal swipe to advance a carousel index (mobile). */
export function useSwipeIndex(onSwipeLeft: () => void, onSwipeRight: () => void, thresholdPx = 48) {
  const startX = useRef<number | null>(null);

  const onTouchStart: TouchEventHandler = (event) => {
    startX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd: TouchEventHandler = (event) => {
    if (startX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? startX.current;
    const delta = endX - startX.current;
    if (delta <= -thresholdPx) onSwipeLeft();
    else if (delta >= thresholdPx) onSwipeRight();
    startX.current = null;
  };

  return { onTouchStart, onTouchEnd };
}
