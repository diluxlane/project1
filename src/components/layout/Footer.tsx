"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/layout/Wordmark";
import { Reveal } from "@/components/motion/Reveal";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { siteConfig, footerLinks, socials } from "@/lib/constants";
import { assets } from "@/lib/constants";

export function Footer() {
  const { scrollTo } = useLenis();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Only play the footer film while it is on screen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <footer className="relative isolate overflow-hidden">
      {/* Footer film */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        muted
        loop
        playsInline
        preload="none"
        poster={assets.gallery.bloom}
        aria-hidden="true"
      >
        <source src={assets.footerVideo} type="video/mp4" />
      </video>

      {/* Light-touch gradient: blends in from the section above and keeps the
          footer links legible at the bottom, while leaving the film clearly
          visible through the middle. */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/25 to-background/80" />

      <Container
        size="wide"
        className="relative z-10 pb-10 pt-24 [text-shadow:0_1px_16px_rgb(6_16_20/0.55)] sm:pt-32"
      >
        {/* Closing statement */}
        <div className="max-w-3xl">
          <Reveal preset="fade-up">
            <p className="text-eyebrow uppercase text-gold-light/80">
              The End — For Now
            </p>
          </Reveal>
          <Reveal preset="fade-up" delay={0.1}>
            <h2 className="mt-6 font-serif text-display-md font-light leading-tight glow-text">
              Until the next{" "}
              <span className="italic text-gradient-gold">reverie</span>.
            </h2>
          </Reveal>
          <Reveal preset="fade-up" delay={0.2}>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-foreground/70">
              Thank you for staying a while in the light. Wherever you are,
              we hope the sky looks a little softer tonight.
            </p>
          </Reveal>
        </div>

        {/* Link columns */}
        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-white/10 pt-14 sm:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground/55">
              A film studio for the quiet sublime — chasing the last hour of
              light, one waking dream at a time.
            </p>
          </div>

          <FooterColumn title="Explore">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href, -90)}
                  className="group inline-flex items-center gap-2 text-foreground/65 transition-colors duration-300 hover:text-gold-light"
                >
                  <span className="h-px w-0 bg-gold transition-all duration-400 ease-luxury group-hover:w-4" />
                  {link.label}
                </button>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Connect">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="group inline-flex items-center gap-2 text-foreground/65 transition-colors duration-300 hover:text-gold-light"
                >
                  <span className="h-px w-0 bg-gold transition-all duration-400 ease-luxury group-hover:w-4" />
                  {s.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Studio">
            <li className="text-foreground/65">Zyberlane-managed concept project</li>
            <li className="text-foreground/65">Made between dusk and dawn</li>
            <li>
              <button
                onClick={() => scrollTo(0)}
                className="group mt-2 inline-flex items-center gap-2 text-gold-light/90 transition-colors hover:text-gold-light"
              >
                Back to top
                <span className="transition-transform duration-400 ease-luxury group-hover:-translate-y-1">
                  ↑
                </span>
              </button>
            </li>
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-foreground/45 sm:flex-row sm:items-center">
          <p>
            © {2026} {siteConfig.name} — {siteConfig.tagline}
          </p>
          <p className="uppercase tracking-[0.2em]">Crafted with light</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-5 text-overline uppercase text-muted">{title}</p>
      <ul className="flex flex-col gap-3 text-sm">{children}</ul>
    </div>
  );
}
