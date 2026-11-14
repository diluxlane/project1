import { type ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

type Feature = {
  index: string;
  title: string;
  label: string;
  body: string;
  glow: "gold" | "sky";
  icon: ReactNode;
};

const features: Feature[] = [
  {
    index: "01",
    label: "Light",
    title: "Golden Hour, Held",
    body: "We chase the last hour of light until the whole world turns to amber and the air itself seems to glow.",
    glow: "gold",
    icon: <SunIcon />,
  },
  {
    index: "02",
    label: "Stillness",
    title: "The Slow Frame",
    body: "No rush, no noise. Long, unhurried takes that let a single moment breathe, settle and quietly bloom.",
    glow: "sky",
    icon: <HorizonIcon />,
  },
  {
    index: "03",
    label: "Wonder",
    title: "The Quiet Sublime",
    body: "The feeling of looking up and forgetting the time — awe, rendered gently, on a tender human scale.",
    glow: "gold",
    icon: <SparkIcon />,
  },
];

export function Experience() {
  return (
    <Section id="experience" spacing="lg" tone="surface" containerSize="content">
      <div className="max-w-3xl">
        <Reveal preset="fade-up">
          <Eyebrow>Chapter III — The Experience</Eyebrow>
        </Reveal>
        <Reveal preset="fade-up" delay={0.08}>
          <h2 className="mt-6 font-serif text-display-md font-light leading-tight text-balance">
            An experience composed in
            <span className="italic text-gradient-gold"> three movements</span>.
          </h2>
        </Reveal>
      </div>

      <Stagger stagger={0.12} className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f) => (
          <StaggerItem key={f.index}>
            <GlassCard glow={f.glow} className="h-full p-8 sm:p-9">
              <div className="flex h-full flex-col">
                {/* Icon */}
                <div className="relative mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-gold-light transition-all duration-500 ease-luxury group-hover/card:border-gold/30 group-hover/card:text-gold">
                  {f.icon}
                  <span className="absolute inset-0 rounded-2xl bg-gold/0 blur-xl transition-colors duration-500 group-hover/card:bg-gold/20" />
                </div>

                <div className="mb-3 flex items-center gap-3">
                  <span className="font-serif text-sm italic text-gold/70">
                    {f.index}
                  </span>
                  <span className="text-overline uppercase text-muted">
                    {f.label}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-foreground sm:text-[1.7rem]">
                  {f.title}
                </h3>
                <p className="mt-4 text-pretty text-[0.95rem] leading-relaxed text-foreground/65">
                  {f.body}
                </p>

                {/* Bottom hairline that draws in on hover */}
                <div className="mt-auto pt-8">
                  <div className="h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold/60 to-transparent transition-transform duration-700 ease-luxury group-hover/card:scale-x-100" />
                </div>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ---- Inline icons ---- */
function SunIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
function HorizonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M3 15.5h18M5.5 19h13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3c.4 4.4 4.1 8.1 8.5 8.5-4.4.4-8.1 4.1-8.5 8.5-.4-4.4-4.1-8.1-8.5-8.5C7.9 11.1 11.6 7.4 12 3Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
