"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { assets } from "@/lib/constants";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PlateProps = {
  src: string;
  alt: string;
  index: string;
  title: string;
  caption: string;
  aspect: string;
  priority?: boolean;
};

/** A single framed artwork with a curtain reveal + glass hover caption. */
function Plate({
  src,
  alt,
  index,
  title,
  caption,
  aspect,
  priority,
}: PlateProps) {
  return (
    <figure className="group relative">
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-elevated",
          aspect,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 92vw, 45vw"
          priority={priority}
          className="object-cover transition-transform duration-[1200ms] ease-luxury group-hover:scale-[1.06]"
        />

        {/* Curtain that lifts to unveil the artwork */}
        <motion.div
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: ease.expoOut }}
          className="absolute inset-0 origin-top bg-background"
        />

        {/* Legibility gradient + hover caption */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 ease-luxury group-hover:translate-y-0 group-hover:opacity-100 sm:p-8">
          <div className="glass inline-flex flex-col rounded-2xl px-5 py-4">
            <span className="text-eyebrow uppercase text-gold-light/90">
              {title}
            </span>
            <span className="mt-1 text-sm text-foreground/75">{caption}</span>
          </div>
        </figcaption>

        {/* Index marker */}
        <span className="absolute left-6 top-6 font-serif text-lg italic text-foreground/70 sm:left-8 sm:top-8">
          {index}
        </span>
      </div>
    </figure>
  );
}

export function Editorial() {
  return (
    <Section id="reverie" spacing="lg" containerSize="wide" grain>
      {/* Intro */}
      <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-24">
        <Reveal preset="fade-up">
          <Eyebrow align="center" className="justify-center">
            Chapter I — The Reaching
          </Eyebrow>
        </Reveal>
        <Reveal preset="fade-up" delay={0.08}>
          <h2 className="mt-6 font-serif text-display-md font-light leading-tight text-balance">
            To touch a dream is to reach
            <br className="hidden sm:block" /> for the{" "}
            <span className="italic text-gradient-gold">light</span> — and feel
            it reach back.
          </h2>
        </Reveal>
        <Reveal preset="fade-up" delay={0.16}>
          <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-foreground/65 sm:text-lg">
            Two frames from the reverie. One hand, raised to a sky of stardust.
            One meadow, exhaling clouds into an endless blue. Both belong to the
            same waking dream.
          </p>
        </Reveal>
      </div>

      {/* Two artworks, staggered */}
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
        <Parallax speed={60} className="md:mt-8">
          <Plate
            src={assets.imageHand}
            alt="A hand covered in glittering stardust reaches toward a deep blue sky above a field of wildflowers"
            index="01"
            title="The Reaching"
            caption="Hands full of starlight."
            aspect="aspect-[4/5]"
            priority
          />
        </Parallax>

        <Parallax speed={-40} className="md:mt-24 lg:mt-40">
          <Plate
            src={assets.imageMeadow}
            alt="A green hilltop meadow scattered with daisies beneath a bright blue sky and soft clouds"
            index="02"
            title="The Meadow"
            caption="Where the sky comes to rest."
            aspect="aspect-[4/5]"
          />
        </Parallax>
      </div>
    </Section>
  );
}
