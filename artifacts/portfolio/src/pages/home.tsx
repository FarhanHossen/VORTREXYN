import { motion } from 'framer-motion';
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

function SpaceOrb({
  color, size, top, left, animX, animY, duration, blur,
}: {
  color: string; size: string; top: string; left: string;
  animX: number[]; animY: number[]; duration: number; blur: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none mix-blend-screen"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        top,
        left,
        opacity: 0.35,
        filter: `blur(${blur})`,
      }}
      animate={{ x: animX, y: animY }}
      transition={{ duration, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
    />
  );
}

const divider = (
  <div style={{
    height: 1,
    background: 'linear-gradient(to right, transparent, rgba(155,92,255,0.2), rgba(0,229,255,0.15), transparent)',
    margin: '0 1.5rem',
  }} />
);

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary relative overflow-x-hidden">

      {/* Deep space ambient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 z-10" style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(5,10,24,0.85) 80%)'
        }} />
        <SpaceOrb
          color="#9B5CFF" size="40vw" top="-10%" left="-10%"
          animX={[0, 80, 0]} animY={[0, 40, 0]} duration={25} blur="120px"
        />
        <SpaceOrb
          color="#00E5FF" size="28vw" top="30%" left="68%"
          animX={[0, -50, 0]} animY={[0, 80, 0]} duration={30} blur="100px"
        />
        <SpaceOrb
          color="#1E3A8A" size="50vw" top="60%" left="15%"
          animX={[0, -80, 0]} animY={[0, -50, 0]} duration={35} blur="150px"
        />
        <SpaceOrb
          color="#9B5CFF" size="20vw" top="70%" left="75%"
          animX={[0, 30, 0]} animY={[0, -60, 0]} duration={28} blur="90px"
        />
        {/* Star texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          {divider}
          <PersonalInfo />
          {divider}
          <SocialProfiles />
          {divider}
          <Projects />
          {divider}
          <Skills />
          {divider}
          <Experience />
          {divider}
          <Education />
          {divider}
          <Licenses />
          {divider}
          <Achievements />
          {divider}
          <Cocurricular />
          <Contact />
        </main>
      </div>
    </div>
  );
}
