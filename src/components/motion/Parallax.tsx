"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: ReactNode;
  /**
   * Travel distance in pixels across the scroll range. Positive moves the
   * element up as you scroll down (classic parallax); negative reverses it.
   */
  speed?: number;
  className?: string;
};

/**
 * Wraps content in a scroll-linked vertical parallax. Motion is smoothed
 * with a spring and fully disabled under prefers-reduced-motion.
 */
export function Parallax({ children, speed = 80, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const y = useSpring(rawY, { stiffness: 120, damping: 30, mass: 0.6 });

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={{ y: reduceMotion ? 0 : y }}>{children}</motion.div>
    </div>
  );
}
