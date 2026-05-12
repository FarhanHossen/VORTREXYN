/**
 * home.tsx — Root page of the portfolio.
 *
 * This is the single-page layout that assembles every section in order.
 * It also renders the persistent deep-space background (animated glowing
 * orbs + star-dot texture) that sits fixed behind all content.
 *
 * Section render order (top → bottom):
 *   Navbar → Hero → PersonalInfo → SocialProfiles → Projects → Skills
 *   → Experience → Education → Licenses → Achievements → Cocurricular → Contact
 *
 * A thin purple/cyan gradient `divider` line is inserted between most
 * sections to visually separate them without a hard border.
 *
 * Design theme: "Deep Space Glass" (Variant B)
 *   - Background: #050A18 (near-black navy)
 *   - Accent cyan: #00E5FF  |  Accent purple: #9B5CFF
 *   - Cards: glass-morphism (backdrop-blur + rgba borders)
 */

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

/**
 * SpaceOrb — Animated blurred radial glow used to create the deep-space
 * ambient atmosphere behind all page content.
 *
 * Each orb is an absolutely-positioned div with a heavy blur filter that
 * animates between two x/y positions in an infinite mirror loop, giving
 * the impression of slowly drifting nebula clouds.
 *
 * Props:
 *   color    — CSS color string (hex)
 *   size     — CSS width/height (e.g. "40vw")
 *   top/left — absolute positioning anchors
 *   animX/Y  — keyframe array [start, mid, end] for x and y movement in px
 *   duration — seconds for one full animation cycle
 *   blur     — CSS blur radius (e.g. "120px")
 *
 * Uses `mix-blend-screen` so overlapping orbs add color additively rather
 * than occluding each other, mimicking light bloom.
 */
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
      // Keyframe animation: moves between the provided x/y positions in a
      // mirror loop so the motion reverses smoothly instead of jumping back.
      animate={{ x: animX, y: animY }}
      transition={{ duration, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
    />
  );
}

/**
 * divider — A single-pixel horizontal rule rendered between sections.
 * Uses a left-to-right gradient (transparent → purple → cyan → transparent)
 * so it fades in/out at both edges, keeping the layout airy.
 * Defined once and reused as JSX to avoid repetition.
 */
const divider = (
  <div style={{
    height: 1,
    background: 'linear-gradient(to right, transparent, rgba(155,92,255,0.2), rgba(0,229,255,0.15), transparent)',
    margin: '0 1.5rem',
  }} />
);

/**
 * Home — The main page component.
 *
 * Structure:
 *  ┌─────────────────────────────────────┐
 *  │  Fixed background layer (z-0)       │  ← SpaceOrbs + star texture
 *  │  ┌───────────────────────────────┐  │
 *  │  │  Content layer (z-10)         │  │  ← Navbar + all sections
 *  │  └───────────────────────────────┘  │
 *  └─────────────────────────────────────┘
 *
 * The background layer is `position: fixed` so it stays visible while
 * the user scrolls through the content layer above it.
 */
export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary relative overflow-x-clip">

      {/* ── Deep space ambient background ─────────────────────────────────
          Fixed behind all content. Contains:
            1. Four animated SpaceOrbs (2 purple, 1 cyan, 1 dark blue)
            2. A dark vignette overlay to focus the eye toward center
            3. A repeating dot grid to simulate distant stars             */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

        {/* Vignette: darkens edges so the star/orb effect doesn't bleed
            into the text areas at full intensity */}
        <div className="absolute inset-0 z-10" style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(5,10,24,0.85) 80%)'
        }} />

        {/* Orb 1 — large purple, top-left, slow drift */}
        <SpaceOrb
          color="#9B5CFF" size="40vw" top="-10%" left="-10%"
          animX={[0, 80, 0]} animY={[0, 40, 0]} duration={25} blur="120px"
        />
        {/* Orb 2 — medium cyan, right-center, medium drift */}
        <SpaceOrb
          color="#00E5FF" size="28vw" top="30%" left="68%"
          animX={[0, -50, 0]} animY={[0, 80, 0]} duration={30} blur="100px"
        />
        {/* Orb 3 — large dark blue, bottom-left, slow drift
            Creates the deep cosmic background color shift */}
        <SpaceOrb
          color="#1E3A8A" size="50vw" top="60%" left="15%"
          animX={[0, -80, 0]} animY={[0, -50, 0]} duration={35} blur="150px"
        />
        {/* Orb 4 — small purple, bottom-right, fast drift */}
        <SpaceOrb
          color="#9B5CFF" size="20vw" top="70%" left="75%"
          animX={[0, 30, 0]} animY={[0, -60, 0]} duration={28} blur="90px"
        />

        {/* Star texture: a repeating 40×40px dot grid at low opacity.
            Each dot is a 1px white radial gradient circle.
            opacity-[0.08] keeps it subtle — just visible enough to add depth. */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ── Content layer ─────────────────────────────────────────────────
          z-10 puts all page content above the fixed background.
          Sections are laid out in a single <main> column with dividers
          between them. Contact includes the footer at the very bottom.  */}
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
          {/* Contact has no divider above it — it has its own top border
              defined inside the Contact component */}
          <Contact />
        </main>
      </div>
    </div>
  );
}
