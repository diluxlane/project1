"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A hairline gold progress bar pinned to the top of the viewport that
 * fills as the reader descends the page.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-gold-deep via-gold to-gold-light"
    />
  );
}
