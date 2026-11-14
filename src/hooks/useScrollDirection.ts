"use client";

import { useEffect, useState } from "react";

type ScrollState = {
  direction: "up" | "down";
  scrolled: boolean; // true once past the threshold
  y: number;
};

/**
 * Reports scroll direction and whether the page has moved past a threshold.
 * Powers the floating navbar's hide/show + condense behaviour (Phase 02).
 */
export function useScrollDirection(threshold = 80): ScrollState {
  const [state, setState] = useState<ScrollState>({
    direction: "up",
    scrolled: false,
    y: 0,
  });

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const direction = y > lastY && y > threshold ? "down" : "up";
      setState({
        direction,
        scrolled: y > threshold,
        y,
      });
      lastY = y > 0 ? y : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}
