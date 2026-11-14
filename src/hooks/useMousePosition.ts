"use client";

import { useEffect, useState } from "react";

export type MousePosition = {
  /** Raw viewport coordinates in pixels. */
  x: number;
  y: number;
  /** Normalised -1 → 1 relative to the viewport centre (for parallax). */
  nx: number;
  ny: number;
};

/**
 * Tracks the pointer position. `nx`/`ny` are normalised around the centre
 * of the viewport, which is exactly what mouse-parallax layers need
 * (Phase 04 hero interactions).
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    nx: 0,
    ny: 0,
  });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setPosition({
        x: e.clientX,
        y: e.clientY,
        nx: (e.clientX / innerWidth) * 2 - 1,
        ny: (e.clientY / innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return position;
}
