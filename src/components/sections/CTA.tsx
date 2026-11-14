"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { assets } from "@/lib/constants";

export function CTA() {
  const { scrollTo } = useLenis();

  return (
    <section
      id="begin"
      className="relative isolate flex min-h-[86vh] items-center overflow-hidden py-section"
    >
      {/* Background image — shown bright and clear in its original form.
          No colour wash: only thin top/bottom edge-blends so the section
          joins cleanly to its neighbours. */}
      <Image
        src={assets.invitation}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center brightness-110 saturate-[1.06]"
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

      {/* Animated drifting light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-gold/15 blur-[150px] animate-aurora"
      />

      <Container
        size="content"
        className="relative z-10 text-center [text-shadow:0_2px_22px_rgb(6_16_20/0.6)]"
      >
        <Reveal preset="fade-up">
          <Eyebrow align="center" className="justify-center">
            The Invitation
          </Eyebrow>
        </Reveal>

        <Reveal preset="fade-up" delay={0.1}>
          <h2 className="mx-auto mt-8 max-w-4xl font-serif text-display-lg font-light leading-[1.05] text-balance glow-text">
            Some dreams are meant
            <br className="hidden sm:block" /> to be{" "}
            <span className="italic text-gradient-gold">walked through</span>.
          </h2>
        </Reveal>

        <Reveal preset="fade-up" delay={0.2}>
          <p className="mx-auto mt-7 max-w-lg text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
            Press play, look up, and let the light do the rest. Your reverie is
            already waiting.
          </p>
        </Reveal>

        <Reveal preset="fade-up" delay={0.3}>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic strength={0.35}>
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollTo(0)}
                rightIcon={<ArrowIcon />}
              >
                Begin the Reverie
              </Button>
            </Magnetic>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollTo("#gallery", -80)}
            >
              Watch the Film
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5v14M6 13l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
