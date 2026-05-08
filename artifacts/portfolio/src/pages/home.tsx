import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { PersonalInfo } from "@/components/sections/personal-info";
import { SocialProfiles } from "@/components/sections/social-profiles";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Licenses } from "@/components/sections/licenses";
import { Achievements } from "@/components/sections/achievements";
import { Cocurricular } from "@/components/sections/cocurricular";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <PersonalInfo />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <SocialProfiles />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <Projects />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <Skills />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <Experience />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <Education />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <Licenses />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <Achievements />
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, hsl(215 33% 17%), transparent)', margin: '0 1.5rem' }} />
        <Cocurricular />
        <Contact />
      </main>
    </div>
  );
}
