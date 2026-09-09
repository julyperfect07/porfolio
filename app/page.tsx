import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Technologies from "@/components/sections/technologies";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="w-full max-w-[100vw] min-w-0 overflow-x-clip">
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}
