"use client";

import { useEffect, useState } from "react";

/**
 * True after first paint — avoids Motion `whileInView` / `animate` updating state
 * before React has finished mounting (React 19 strict warning).
 */
export function useMotionReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setReady(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return ready;
}
