"use client";

import { ExternalLink, ImageIcon, MoveHorizontal } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Reveal from "@/components/reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-8 border-t border-border">
      <div className="responsive-copy mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-24">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-primary">03 / PROJECTS</p>
          <h2 id="projects-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I’ve built.
          </h2>
          <p className="mt-4 text-muted-foreground">Project details are on the way.</p>
        </Reveal>

        <Reveal className="mt-10">
        <Carousel aria-label="Project showcase" opts={{ align: "start", duration: 40 }}>
          <div className="mb-6 flex items-center justify-between gap-3">
            <p className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm"><MoveHorizontal aria-hidden="true" className="size-4" /> <span className="sm:hidden">Swipe</span><span className="hidden sm:inline">Swipe or use the arrows</span></p>
            <div className="flex gap-2">
              <CarouselPrevious className="static size-11" />
              <CarouselNext className="static size-11" />
            </div>
          </div>
          <CarouselContent className="-ml-6">
          {projects.map((project, index) => (
            <CarouselItem key={project.id} aria-label={`${index + 1} of ${projects.length}: ${project.title}`} className="basis-[90%] pl-6 md:basis-[70%] lg:basis-[60%]">
              <article className="group h-full overflow-hidden rounded-xl border border-border bg-card transition-[border-color,box-shadow] duration-500 hover:border-primary/40 hover:shadow-xl motion-reduce:transition-none">
                <div className="border-b border-border bg-background p-5 sm:p-8">
                <div className="overflow-hidden rounded-lg border border-border bg-card shadow-xl">
                  <div aria-hidden="true" className="flex h-8 items-center gap-1.5 border-b border-border px-3">
                    <span className="size-2 rounded-full bg-muted-foreground/40" /><span className="size-2 rounded-full bg-muted-foreground/30" /><span className="size-2 rounded-full bg-muted-foreground/20" />
                    <span className="ml-auto font-mono text-[10px] text-muted-foreground">PREVIEW / {project.id}</span>
                  </div>
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-background">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} application interface`}
                      fill
                      sizes="(min-width: 1024px) 576px, (min-width: 768px) 70vw, 90vw"
                      className="object-cover object-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.025] motion-reduce:transition-none"
                    />
                  ) : (
                    <>
                      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent),transparent_75%)] opacity-60 transition-opacity duration-700 group-hover:opacity-100 motion-reduce:transition-none" />
                      <div className="relative flex flex-col items-center gap-3 text-muted-foreground">
                        <ImageIcon aria-hidden="true" className="size-7 stroke-1" />
                        <span className="text-sm">Screenshot coming soon</span>
                      </div>
                    </>
                  )}
                </div>
                </div>
                </div>
                <div className="responsive-copy p-6 sm:p-7">
                  <p className="mb-3 font-mono text-xs tracking-wide text-primary">
                    {project.category}
                  </p>
                  <div className="responsive-project-title relative flex items-start gap-4">
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} live site`}
                        className="absolute right-0 flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-[color,border-color,transform] duration-300 hover:border-primary/50 hover:text-primary motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:static"
                      >
                        <ExternalLink aria-hidden="true" className="size-4" />
                      </a>
                    )}
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <ul aria-label="Technologies used" className="responsive-list mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <li key={technology} className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] text-muted-foreground">
                          {technology}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </CarouselItem>
          ))}
          </CarouselContent>
        </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
