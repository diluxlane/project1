import { Hero } from "@/components/sections/Hero";
import { Editorial } from "@/components/sections/Editorial";
import { Story } from "@/components/sections/Story";
import { Experience } from "@/components/sections/Experience";
import { Gallery } from "@/components/sections/Gallery";
import { Philosophy } from "@/components/sections/Philosophy";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Editorial />
        <Story />
        <Experience />
        <Gallery />
        <Philosophy />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
