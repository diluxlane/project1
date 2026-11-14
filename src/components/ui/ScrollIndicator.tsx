"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * The hero's scroll cue — a slender track with a gold mote descending on a
 * loop, beneath a wide-tracked label. Subtly invites the first scroll.
 */
export function ScrollIndicator({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col items-center gap-4", className)}
      aria-hidden="true"
    >
      <span className="text-[0.65rem] uppercase tracking-[0.4em] text-foreground/50">
        Scroll
      </span>
      <div className="relative h-14 w-px overflow-hidden bg-white/15">
        <motion.span
          className="absolute left-0 top-0 h-4 w-px bg-gradient-to-b from-gold-light to-transparent"
          animate={{ y: [-16, 56] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>
    </div>
  );
}
