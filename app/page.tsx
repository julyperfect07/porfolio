import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Technologies from "@/components/sections/technologies";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}
