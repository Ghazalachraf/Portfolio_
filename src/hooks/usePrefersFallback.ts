"use client";

import { useState, useEffect } from "react";

/**
 * Returns true when we should skip the heavy 3D canvas:
 * - the user prefers reduced motion, or
 * - the screen is small (mobile), where the WebGL canvas hurts perf/battery.
 *
 * Defaults to `true` until mounted so SSR/first paint never ships the canvas.
 */
export function usePrefersFallback() {
  const [fallback, setFallback] = useState(true);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sizeMq = window.matchMedia("(max-width: 767px)");
    const update = () => setFallback(motionMq.matches || sizeMq.matches);

    update();
    motionMq.addEventListener("change", update);
    sizeMq.addEventListener("change", update);
    return () => {
      motionMq.removeEventListener("change", update);
      sizeMq.removeEventListener("change", update);
    };
  }, []);

  return fallback;
}
