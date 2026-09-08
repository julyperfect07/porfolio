import { about } from "@/data/portfolio";
import Reveal from "@/components/reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-8 border-t border-border">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-20 sm:px-10 sm:py-24 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-primary">01 / ABOUT</p>
          <h2 id="about-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {about.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.18} className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </Reveal>
      </div>
    </section>
  );
}
