import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import Reveal from "@/components/reveal";
import { contactLinks } from "@/data/portfolio";

const channels = {
  email: { icon: Mail, color: "#FF875B", background: "#FF875B14", description: "Send me a message" },
  github: { icon: FaGithub, color: "#F0F6FC", background: "#F0F6FC0D", description: "Explore my code" },
  linkedin: { icon: FaLinkedinIn, color: "#0A66C2", background: "#0A66C218", description: "Connect with me" },
};

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative isolate scroll-mt-8 border-t border-border">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_65%,var(--accent),transparent_65%)] opacity-40" />
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <p className="font-mono text-xs tracking-widest text-primary">04 / CONTACT</p>
        <div className="mt-8 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 id="contact-heading" className="text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
              Have something<br />in mind<span className="text-primary">?</span>
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-8 text-muted-foreground">
              A project, a question, or just a hello. Let’s talk.
            </p>
            <div aria-hidden="true" className="mt-8 h-px w-16 bg-primary/60" />
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="space-y-3">
              {contactLinks.map(({ label, kind, href }) => {
                const { icon: Icon, color, background, description } = channels[kind];
                const content = (
                  <>
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: background }}>
                      {kind === "email" ? (
                        <Image src="/icons/gmail.svg" alt="" width={28} height={24} className="h-6 w-7" />
                      ) : (
                        <Icon aria-hidden="true" className="size-6" style={{ color }} />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-semibold">{label}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{description}</span>
                    </span>
                    {href ? <ArrowUpRight aria-hidden="true" className="size-5 text-muted-foreground transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" /> : <span className="text-xs text-muted-foreground">Soon</span>}
                  </>
                );
                const cardClass = "group flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-5";
                return (
                  <li key={kind}>
                    {href ? (
                      <a
                        href={href}
                        target={kind === "email" ? undefined : "_blank"}
                        rel={kind === "email" ? undefined : "noreferrer"}
                        className={`${cardClass} transition-[border-color,background-color,transform] duration-300 hover:border-primary/40 hover:bg-accent motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring motion-reduce:transition-none`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={cardClass}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
