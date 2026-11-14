"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Deterministic pseudo-random generator so SSR and client agree. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

type Particle = {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

type ParticlesProps = {
  count?: number;
  className?: string;
};

/**
 * Slow-rising golden motes of light — the drifting dust in the hero film.
 * Positions are deterministic (seeded) to stay hydration-safe.
 */
export function Particles({ count = 26, className }: ParticlesProps) {
  const reduceMotion = usePrefersReducedMotion();

  const particles = useMemo<Particle[]>(() => {
    const rand = seeded(20260705);
    return Array.from({ length: count }, () => ({
      left: rand() * 100,
      top: rand() * 100,
      size: 1.5 + rand() * 3.5,
      duration: 9 + rand() * 12,
      delay: rand() * 8,
      drift: (rand() - 0.5) * 40,
      opacity: 0.25 + rand() * 0.55,
    }));
  }, [count]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold-light"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px rgb(var(--gold-light) / 0.8)",
          }}
          initial={{ opacity: 0 }}
          animate={
            reduceMotion
              ? { opacity: p.opacity * 0.6 }
              : {
                  opacity: [0, p.opacity, 0],
                  y: [0, -80, -160],
                  x: [0, p.drift, 0],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}
