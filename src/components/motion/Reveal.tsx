"use client";

import { motion, type Variants } from "framer-motion";
import { type ElementType, type ReactNode } from "react";
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  scaleIn,
  blurIn,
  slideIn,
  ease,
  duration as dur,
} from "@/lib/motion";

type Preset =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "scale"
  | "blur"
  | "slide-left"
  | "slide-right";

const presets: Record<Preset, Variants> = {
  fade: fadeIn,
  "fade-up": fadeInUp,
  "fade-down": fadeInDown,
  scale: scaleIn,
  blur: blurIn,
  "slide-left": slideIn("left"),
  "slide-right": slideIn("right"),
};

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  preset?: Preset;
  /** Delay in seconds before the reveal begins. */
  delay?: number;
  /** Override the default 0.7s duration. */
  duration?: number;
  /** Fraction of the element that must be visible to trigger (0–1). */
  amount?: number;
  /** Re-run the animation every time it enters the viewport. */
  repeat?: boolean;
  className?: string;
};

/**
 * The default scroll-reveal wrapper used across the site. Wrap any block
 * and it fades/slides in as it enters the viewport, respecting the shared
 * easing + timing tokens.
 */
export function Reveal({
  children,
  as = "div",
  preset = "fade-up",
  delay = 0,
  duration,
  amount = 0.3,
  repeat = false,
  className,
}: RevealProps) {
  const MotionTag = (motion as unknown as Record<string, ElementType>)[
    typeof as === "string" ? as : "div"
  ];
  const base = presets[preset];

  // Clone the visible transition so per-instance delay/duration can override.
  const variants: Variants = {
    hidden: base.hidden,
    visible: {
      ...(base.visible as object),
      transition: {
        duration: duration ?? dur.base,
        ease: ease.luxury,
        delay,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount }}
    >
      {children}
    </MotionTag>
  );
}
