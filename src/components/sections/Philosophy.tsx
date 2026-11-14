import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

const principles = ["Slow", "Luminous", "Present"];

export function Philosophy() {
  return (
    <Section
      id="philosophy"
      spacing="lg"
      containerSize="content"
      className="overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[150px]"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal preset="fade-up">
          <Eyebrow align="center" className="justify-center">
            Chapter V — The Philosophy
          </Eyebrow>
        </Reveal>

        <Reveal preset="fade-up" delay={0.1}>
          <p className="mt-10 font-serif text-display-lg font-light leading-[1.08] text-balance">
            We don&apos;t capture moments —
            <br className="hidden sm:block" /> we give them{" "}
            <span className="italic text-gradient-gold">somewhere to stay</span>.
          </p>
        </Reveal>

        <Reveal preset="fade-up" delay={0.2}>
          <p className="mx-auto mt-9 max-w-xl text-pretty text-base leading-relaxed text-foreground/60 sm:text-lg">
            A reverie is not a place you visit once. It is a way of seeing you
            carry home — the patience to let the light arrive, and the grace to
            let it linger.
          </p>
        </Reveal>

        <Reveal preset="fade" delay={0.3}>
          <div className="mt-14 flex items-center justify-center gap-5 text-sm uppercase tracking-[0.28em] text-gold-light/75">
            {principles.map((p, i) => (
              <span key={p} className="inline-flex items-center gap-5">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-gold/50" />}
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
