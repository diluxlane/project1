import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollRevealText } from "@/components/motion/ScrollRevealText";

export function Story() {
  return (
    <Section id="story" spacing="lg" containerSize="content">
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
        {/* Aside */}
        <div className="lg:col-span-4">
          <Reveal preset="fade-up">
            <Eyebrow>Chapter II — The Story</Eyebrow>
          </Reveal>
          <Reveal preset="fade-up" delay={0.1}>
            <p className="mt-6 font-serif text-2xl italic text-foreground/80">
              It began with a single question.
            </p>
          </Reveal>
          <Reveal preset="fade" delay={0.2}>
            <div className="mt-8 hairline w-24" />
          </Reveal>
        </div>

        {/* Narrative */}
        <div className="lg:col-span-8">
          <ScrollRevealText
            text="What if we slowed down long enough to watch the light change? Reverie makes films for the quiet in-between — the breath before wonder, the hush of a field at dusk, the moment a dream decides to stay. Every frame is an invitation to look up, to linger, and to remember how extraordinary an ordinary evening can be."
            className="font-serif text-[1.75rem] font-light leading-[1.5] text-foreground sm:text-[2.25rem] sm:leading-[1.45]"
          />
          <Reveal preset="fade-up" delay={0.1}>
            <p className="mt-10 text-sm uppercase tracking-[0.24em] text-gold-light/80">
              — The Reverie Studio
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
