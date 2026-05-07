import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <Projects />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <Skills />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <Experience />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
