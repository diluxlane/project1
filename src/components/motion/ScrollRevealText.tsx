"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Illuminate-on-scroll text: each word brightens from dim to full as the
 * paragraph passes through the viewport — a signature editorial reveal.
 */
export function ScrollRevealText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={cn("relative flex flex-wrap", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: string;
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <span className="relative mr-[0.28em] mt-[0.1em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
