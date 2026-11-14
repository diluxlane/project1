"use client";

import { motion, type Variants } from "framer-motion";
import { type ElementType, type ReactNode } from "react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type StaggerProps = {
  children: ReactNode;
  as?: ElementType;
  /** Seconds between each child's entrance. */
  stagger?: number;
  /** Delay before the first child animates. */
  delayChildren?: number;
  amount?: number;
  repeat?: boolean;
  className?: string;
};

/**
 * Orchestrates a group of `StaggerItem`s so they cascade into view
 * one after another (Phase 16 scroll experience relies on this).
 */
export function Stagger({
  children,
  as = "div",
  stagger = 0.09,
  delayChildren = 0,
  amount = 0.25,
  repeat = false,
  className,
}: StaggerProps) {
  const MotionTag = (motion as unknown as Record<string, ElementType>)[
    typeof as === "string" ? as : "div"
  ];
  return (
    <MotionTag
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  as?: ElementType;
  variants?: Variants;
  className?: string;
};

export function StaggerItem({
  children,
  as = "div",
  variants = fadeInUp,
  className,
}: StaggerItemProps) {
  const MotionTag = (motion as unknown as Record<string, ElementType>)[
    typeof as === "string" ? as : "div"
  ];
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
