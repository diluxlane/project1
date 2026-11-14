"use client";

import { useMediaQuery } from "./useMediaQuery";

/**
 * True when the user has requested reduced motion at the OS level.
 * Gate parallax, infinite loops and large transforms behind this.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
