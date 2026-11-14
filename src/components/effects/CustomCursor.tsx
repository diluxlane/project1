"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A premium two-part cursor: a precise gold dot plus a trailing ring that
 * springs behind it and swells over interactive elements. Only active on
 * fine pointers (desktop); touch devices keep the native cursor.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.5 });

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setHovering(
        !!target?.closest?.(
          'a, button, [role="button"], [data-cursor="hover"], input, textarea, select',
        ),
      );
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50"
          animate={{
            width: hovering ? 56 : 34,
            height: hovering ? 56 : 34,
            opacity: hovering ? 1 : 0.6,
            backgroundColor: hovering
              ? "rgba(242, 180, 78, 0.09)"
              : "rgba(242, 180, 78, 0)",
            scale: pressed ? 0.82 : 1,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
      </motion.div>

      {/* Precise dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x, y }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-light"
          animate={{
            width: hovering ? 6 : 7,
            height: hovering ? 6 : 7,
            opacity: hovering ? 0.5 : 1,
          }}
          style={{ boxShadow: "0 0 12px rgb(var(--gold-light) / 0.9)" }}
        />
      </motion.div>
    </>
  );
}
