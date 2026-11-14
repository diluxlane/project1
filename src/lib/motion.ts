import type { Variants, Transition } from "framer-motion";

/* ============================================================
   EASING CURVES
   A single source of truth so every animation shares one rhythm.
   ============================================================ */
type Bezier = [number, number, number, number];

export const ease = {
  luxury: [0.16, 1, 0.3, 1] as Bezier, // signature ease-out-expo
  expoOut: [0.19, 1, 0.22, 1] as Bezier,
  expoInOut: [0.87, 0, 0.13, 1] as Bezier,
  smooth: [0.4, 0, 0.2, 1] as Bezier,
  gentle: [0.25, 0.1, 0.25, 1] as Bezier,
};

export const duration = {
  fast: 0.4,
  base: 0.7,
  slow: 1,
  slower: 1.4,
} as const;

/** Shared spring for physical, tactile motion. */
export const spring: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 30,
  mass: 0.8,
};

export const softSpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 24,
  mass: 1,
};

/* ============================================================
   REVEAL VARIANTS — scroll-triggered entrances
   ============================================================ */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.base, ease: ease.luxury },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.luxury },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.luxury },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.base, ease: ease.luxury },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: duration.slow, ease: ease.luxury },
  },
};

/** A word/line that slides up from behind an overflow-hidden mask. */
export const maskUp: Variants = {
  hidden: { y: "120%" },
  visible: {
    y: "0%",
    transition: { duration: duration.slow, ease: ease.expoOut },
  },
};

/* ============================================================
   STAGGER ORCHESTRATION
   ============================================================ */
export const staggerContainer = (
  stagger = 0.08,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Directional slide-in factory. */
export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  distance = 48,
): Variants => {
  const isX = direction === "left" || direction === "right";
  const sign = direction === "left" || direction === "up" ? -distance : distance;
  const from = isX ? { x: sign } : { y: sign };
  const to = isX ? { x: 0 } : { y: 0 };
  return {
    hidden: { opacity: 0, ...from },
    visible: {
      opacity: 1,
      ...to,
      transition: { duration: duration.base, ease: ease.luxury },
    },
  };
};

/* ============================================================
   VIEWPORT CONFIG — consistent scroll trigger behaviour
   ============================================================ */
export const viewportOnce = { once: true, amount: 0.3 } as const;
export const viewportRepeat = { once: false, amount: 0.35 } as const;
