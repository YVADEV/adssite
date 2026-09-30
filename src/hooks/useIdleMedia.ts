import { useEffect, useState } from "react";

/** Starts loading below-the-fold media after the window load + idle, so LCP is not starved. */
export function useIdleMedia() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId = 0;
    let timeoutId = 0;

    const arm = () => {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(() => setReady(true), { timeout: 1800 });
      } else {
        timeoutId = window.setTimeout(() => setReady(true), 400);
      }
    };

    if (document.readyState === "complete") {
      arm();
    } else {
      window.addEventListener("load", arm, { once: true });
    }

    return () => {
      window.removeEventListener("load", arm);
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return ready;
}
