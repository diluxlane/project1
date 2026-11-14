"use client";

import Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type ScrollTarget = string | number | HTMLElement;

type LenisContextValue = {
  lenis: Lenis | null;
  /** Smoothly scroll to an element/selector/offset (header-offset aware). */
  scrollTo: (target: ScrollTarget, offset?: number) => void;
};

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => {},
});

export const useLenis = () => useContext(LenisContext);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reduceMotion = usePrefersReducedMotion();
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Respect reduced-motion: fall back to the browser's native scroll.
    if (reduceMotion) {
      setLenis(null);
      return;
    }

    const instance = new Lenis({
      lerp: 0.09,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      syncTouch: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    setLenis(instance);
    // Expose for anchor utilities and debugging.
    (window as unknown as { lenis?: Lenis }).lenis = instance;

    const raf = (time: number) => {
      instance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      instance.destroy();
      setLenis(null);
    };
  }, [reduceMotion]);

  const value = useMemo<LenisContextValue>(
    () => ({
      lenis,
      scrollTo: (target, offset = 0) => {
        if (lenis) {
          lenis.scrollTo(target, { offset, duration: 1.4 });
        } else if (typeof window !== "undefined") {
          // Reduced-motion / SSR fallback
          const el =
            typeof target === "string"
              ? document.querySelector(target)
              : target instanceof HTMLElement
                ? target
                : null;
          if (el instanceof HTMLElement) {
            const top =
              el.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top, behavior: "smooth" });
          } else if (typeof target === "number") {
            window.scrollTo({ top: target + offset, behavior: "smooth" });
          }
        }
      },
    }),
    [lenis],
  );

  return (
    <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
  );
}
