"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Magnetic } from "@/components/motion/Magnetic";
import { Particles } from "@/components/effects/Particles";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { assets } from "@/lib/constants";
import { ease } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};
const lineMask: Variants = {
  hidden: { y: "115%" },
  visible: { y: "0%", transition: { duration: 1.1, ease: ease.expoOut } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: ease.luxury } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const { scrollTo } = useLenis();

  // Pointer-driven values (updated via a single listener → no re-renders).
  const px = useMotionValue(-1000);
  const py = useMotionValue(-1000);
  const nmx = useMotionValue(0);
  const nmy = useMotionValue(0);

  const glowX = useSpring(px, { stiffness: 120, damping: 30, mass: 0.6 });
  const glowY = useSpring(py, { stiffness: 120, damping: 30, mass: 0.6 });

  const videoX = useSpring(useTransform(nmx, [-1, 1], [14, -14]), {
    stiffness: 90,
    damping: 26,
  });
  const videoY = useSpring(useTransform(nmy, [-1, 1], [14, -14]), {
    stiffness: 90,
    damping: 26,
  });
  const textX = useSpring(useTransform(nmx, [-1, 1], [-9, 9]), {
    stiffness: 110,
    damping: 24,
  });
  const textY = useSpring(useTransform(nmy, [-1, 1], [-9, 9]), {
    stiffness: 110,
    damping: 24,
  });

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: MouseEvent) => {
      px.set(e.clientX);
      py.set(e.clientY);
      nmx.set((e.clientX / window.innerWidth) * 2 - 1);
      nmy.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [px, py, nmx, nmy, reduceMotion]);

  // Scroll-linked cinematic exit.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const videoScrollY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);

  return (
    <section
      ref={ref}
      className="relative min-h-dvh w-full overflow-hidden bg-background"
    >
      {/* Video layer (scroll parallax) */}
      <motion.div
        style={{ y: reduceMotion ? 0 : videoScrollY, scale: reduceMotion ? 1 : videoScale }}
        className="absolute inset-0"
      >
        {/* inner wrapper carries the mouse parallax, scaled up to hide edges */}
        <motion.div
          style={{ x: reduceMotion ? 0 : videoX, y: reduceMotion ? 0 : videoY }}
          className="absolute inset-0 scale-110"
        >
          <video
            className="h-full w-full object-cover brightness-110 saturate-[1.05] contrast-[1.02]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={assets.gallery.swirl}
          >
            <source src={assets.heroVideo} type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>

      {/* Cinematic overlays — lightened for a brighter hero. A left scrim
          keeps the headline legible; a soft bottom anchor holds the scroll cue. */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background/80" />
      <div className="absolute inset-0 bg-hero-vignette opacity-50" />

      {/* Mouse-follow golden light */}
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          style={{ x: glowX, y: glowY }}
          className="pointer-events-none absolute left-0 top-0 z-[1]"
        >
          <div className="h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[130px]" />
        </motion.div>
      )}

      {/* Floating motes */}
      <Particles count={28} className="z-[2]" />

      {/* Content */}
      <motion.div
        style={{ y: reduceMotion ? 0 : contentY, opacity: reduceMotion ? 1 : contentOpacity }}
        className="relative z-10 flex min-h-dvh items-center"
      >
        <Container size="content" className="pt-28">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ x: reduceMotion ? 0 : textX, y: reduceMotion ? 0 : textY }}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>RÊVERIE — A Waking Dream</Eyebrow>
            </motion.div>

            <h1 className="mt-7 font-serif text-display-xl font-light leading-[0.98] text-foreground">
              <span className="block overflow-hidden">
                <motion.span variants={lineMask} className="block">
                  Where the ordinary
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={lineMask} className="block">
                  turns{" "}
                  <span className="italic text-gradient-gold glow-text">
                    golden
                  </span>
                  .
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg"
            >
              A cinematic reverie through light, stillness and wonder — where an
              ordinary evening in a field of flowers becomes a dream you can
              step inside.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Magnetic strength={0.35}>
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => scrollTo("#reverie", -80)}
                  rightIcon={<ArrowIcon />}
                >
                  Begin the Reverie
                </Button>
              </Magnetic>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollTo("#gallery", -80)}
                leftIcon={<PlayIcon />}
              >
                Watch the Film
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
