import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type Tile = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  aspect: string;
};

const tiles: Tile[] = [
  {
    src: "/images/g-blooms.jpg",
    alt: "Vivid wildflowers — red, pink, yellow and blue — reaching up into a bright blue sky scattered with clouds",
    title: "Looking Up",
    caption: "The sky, through a thousand petals.",
    aspect: "aspect-[736/1064]",
  },
  {
    src: "/images/g-drift.jpg",
    alt: "A dreamy, motion-blurred wildflower meadow of pink, red and yellow blooms beneath a soft grey sky",
    title: "In Passing",
    caption: "A field, half-remembered.",
    aspect: "aspect-[1200/1499]",
  },
  {
    src: "/images/g-branch.jpg",
    alt: "A single leafy branch reaching across a bright blue sky toward one soft white cloud",
    title: "Room to Breathe",
    caption: "A branch, a cloud, and nothing else.",
    aspect: "aspect-[1125/2000]",
  },
  {
    src: "/images/g-haze.jpg",
    alt: "A vintage film-toned wildflower meadow of orange, pink and purple blooms under a soft overcast sky",
    title: "Kodachrome Summer",
    caption: "A memory, warm at the edges.",
    aspect: "aspect-[768/1020]",
  },
  {
    src: "/images/g-wind.jpg",
    alt: "An impressionistic motion-blur of a wildflower field, pink and orange blooms streaked across deep green",
    title: "The Wind's Hand",
    caption: "Painted by a passing breeze.",
    aspect: "aspect-[1080/1350]",
  },
];

export function Gallery() {
  return (
    <Section id="gallery" spacing="lg" containerSize="wide">
      <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <Reveal preset="fade-up">
            <Eyebrow>Chapter IV — The Gallery</Eyebrow>
          </Reveal>
          <Reveal preset="fade-up" delay={0.08}>
            <h2 className="mt-6 font-serif text-display-md font-light leading-tight text-balance">
              Stills from the{" "}
              <span className="italic text-gradient-gold">reverie</span>.
            </h2>
          </Reveal>
        </div>
        <Reveal preset="fade-up" delay={0.16}>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-foreground/60">
            A quiet archive of frames — each one a held breath between the light
            and the dark.
          </p>
        </Reveal>
      </div>

      {/* Masonry */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {tiles.map((tile, i) => (
          <Reveal
            key={tile.title}
            preset="fade-up"
            delay={(i % 3) * 0.06}
            className="mb-5 break-inside-avoid"
          >
            <figure className="group relative block overflow-hidden rounded-2xl border border-white/10 shadow-glass">
              <div className={cn("relative w-full", tile.aspect)}>
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                  className="object-cover transition-transform duration-[1200ms] ease-luxury group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-5 opacity-0 transition-all duration-500 ease-luxury group-hover:translate-y-0 group-hover:opacity-100">
                  <div>
                    <p className="font-serif text-xl text-foreground">
                      {tile.title}
                    </p>
                    <p className="mt-0.5 text-xs text-foreground/70">
                      {tile.caption}
                    </p>
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gold-light/80">
                    0{i + 1}
                  </span>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
