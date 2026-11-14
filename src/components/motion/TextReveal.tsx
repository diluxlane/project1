"use client";

import { motion, type Variants } from "framer-motion";
import { type ElementType } from "react";
import { ease } from "@/lib/motion";

type TextRevealProps = {
  text: string;
  as?: ElementType;
  /** Split by word (default) or by character for finer control. */
  split?: "word" | "char";
  delay?: number;
  stagger?: number;
  amount?: number;
  repeat?: boolean;
  className?: string;
};

/**
 * Line/word-mask reveal: each token slides up from behind an
 * overflow-hidden mask, giving headings a refined editorial entrance.
 */
export function TextReveal({
  text,
  as = "span",
  split = "word",
  delay = 0,
  stagger = 0.06,
  amount = 0.6,
  repeat = false,
  className,
}: TextRevealProps) {
  const MotionTag = (motion as unknown as Record<string, ElementType>)[
    typeof as === "string" ? as : "div"
  ];
  const tokens = split === "word" ? text.split(" ") : text.split("");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const child: Variants = {
    hidden: { y: "115%" },
    visible: {
      y: "0%",
      transition: { duration: 0.9, ease: ease.expoOut },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount }}
      aria-label={text}
    >
      {tokens.map((token, i) => (
        <span
          key={`${token}-${i}`}
          className="inline-flex overflow-hidden align-bottom"
          aria-hidden="true"
        >
          <motion.span variants={child} className="inline-block will-change-transform">
            {token === " " ? " " : token}
          </motion.span>
          {split === "word" && i < tokens.length - 1 ? " " : null}
        </span>
      ))}
    </MotionTag>
  );
}
