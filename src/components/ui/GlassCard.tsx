"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  /** Accent colour of the hover glow. */
  glow?: "gold" | "sky" | "none";
  /** Lift + glow on hover. */
  interactive?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">;

/**
 * A frosted glass surface with an accent glow on hover — the base for the
 * Experience feature cards. The glow is a soft radial that fades in behind
 * a thin animated border highlight.
 */
export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, glow = "gold", interactive = true, ...props }, ref) => {
    const glowClass =
      glow === "gold"
        ? "hover:shadow-glow-gold"
        : glow === "sky"
          ? "hover:shadow-glow-sky"
          : "";

    return (
      <motion.div
        ref={ref}
        className={cn(
          "group/card relative overflow-hidden rounded-4xl glass",
          "transition-[box-shadow,border-color,transform] duration-600 ease-luxury",
          interactive && "hover:border-white/20",
          interactive && glowClass,
          className,
        )}
        whileHover={interactive ? { y: -8 } : undefined}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        {...props}
      >
        {/* Radial glow that blooms from the top on hover */}
        {glow !== "none" && (
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-x-0 -top-1/2 h-full opacity-0 blur-3xl transition-opacity duration-700 ease-luxury group-hover/card:opacity-100",
              glow === "gold" ? "bg-gold/20" : "bg-sky/20",
            )}
          />
        )}
        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    );
  },
);

GlassCard.displayName = "GlassCard";
