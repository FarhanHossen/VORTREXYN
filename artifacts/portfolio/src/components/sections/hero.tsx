/**
 * hero.tsx — Full-viewport landing section.
 *
 * This is the first thing visitors see. It contains:
 *  - A "SOFTWARE DEVELOPER" pill badge (cyan glass border)
 *  - Farhan's name as a large gradient heading (white → cyan → purple)
 *  - A bio paragraph summarising background, skills, and availability
 *  - Two CTA buttons: "View Projects" (gradient) and "Get in Touch" (ghost)
 *  - A decorative JSON code snippet card (desktop only, right side)
 *
 * Animation: all elements use the `fadeUp` variant with staggered `custom`
 * delay values (0, 1, 3, 4) so they reveal sequentially on page load.
 * The code card fades in from the right with a separate delayed animation.
 *
 * The section is `min-h-[100dvh]` so it always fills the full viewport
 * height, including on mobile where the address bar changes the height.
 * `overflow-hidden` prevents the animated code card from causing scroll.
 */

import { motion } from 'framer-motion';
import { ChevronRight, Mail } from 'lucide-react';

/**
 * fadeUp — Framer Motion variant used by all child elements.
 * Each element starts invisible and 24px below its final position,
 * then animates up with a staggered delay based on the `custom` prop.
 * `custom` is the slot index (0, 1, 2 …) multiplied by 0.1s per slot.
 */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 py-24">

        {/* All hero text animates as a group from "hidden" → "visible".
            The parent motion.div triggers the variant cascade downward. */}
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">

          {/* ── Status pill ─────────────────────────────────────────────
              Small badge above the name. Glass-morphism style: cyan
              border at 35% opacity, cyan tinted background at 8% opacity,
              and a backdrop blur to let the orbs show through behind it. */}
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center mb-8">
            <span
              className="px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
              style={{
                border: '1px solid rgba(0,229,255,0.35)',
                background: 'rgba(0,229,255,0.08)',
                color: '#00E5FF',
                backdropFilter: 'blur(8px)',
              }}
            >
              SOFTWARE DEVELOPER
            </span>
          </motion.div>

          {/* ── Name heading ────────────────────────────────────────────
              Uses a CSS gradient clip on the text:
                white (0%) → cyan #00E5FF (50%) → purple #9B5CFF (100%)
              WebkitBackgroundClip + WebkitTextFillColor are the cross-
              browser way to apply a gradient to text.                  */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
            style={{ lineHeight: 1.05 }}
          >
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #00E5FF 50%, #9B5CFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Farhan Hossen.
            </span>
          </motion.h1>

          {/* ── Bio paragraph ───────────────────────────────────────────
              Summarises degree, experience, tech stack, location, and
              availability. Rendered in muted slate colour for contrast
              hierarchy (name is brightest, bio is secondary).
              custom={3} skips slot 2 (previously used for a subtitle
              that was removed) to keep the delay gap intentional.     */}
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-base leading-relaxed mb-10"
            style={{ color: 'rgba(148,163,184,0.9)', maxWidth: 560 }}
          >
            Master of Information Technology graduate (Enterprise Software Development &amp; Cyber Security)
            from University of Technology Sydney. Software Developer with hands-on experience in
            full-stack web development, cross-platform mobile applications (iOS &amp; Android), and
            cloud-based backend systems. Proficient in Java, Dart, TypeScript, Flutter, React.js,
            Node.js, Firebase, AWS, and Azure. Based in Sydney, NSW — available for full-time
            opportunities.
          </motion.p>

          {/* ── CTA buttons ─────────────────────────────────────────────
              Two buttons side-by-side (wrapping on small screens):
                1. "View Projects" — solid gradient (purple → cyan), dark text
                   Smooth-scrolls to the #projects section on click.
                2. "Get in Touch"  — ghost glass button with hover glow
                   Smooth-scrolls to the #contact section on click.   */}
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4 mb-10">
            <button
              data-testid="button-view-work"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-sm px-6 py-3 rounded-lg font-medium transition-opacity hover:opacity-90 flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #9B5CFF, #00E5FF)',
                color: '#050A18', // dark navy text on bright gradient bg
              }}
            >
              View Projects <ChevronRight size={15} />
            </button>

            <button
              data-testid="button-get-in-touch"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-sm px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(8px)',
              }}
              // On hover: border turns cyan, text turns cyan
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.4)';
                (e.currentTarget as HTMLElement).style.color = '#00E5FF';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)';
              }}
            >
              <Mail size={14} /> Get in Touch
            </button>
          </motion.div>
        </motion.div>

        {/* ── Decorative code card (desktop only) ──────────────────────
            A fake JSON object that shows key personal details in a
            monospace code style. Pure decoration — no interactivity.
            Hidden on mobile (`hidden lg:block`) to avoid layout issues.
            `pointer-events-none` + `select-none` ensure it doesn't
            interfere with text selection or clicks.
            Positioned absolutely to float on the right side of the
            hero without affecting the text flow on the left.
            Animates in from x=40 with a 0.7s delay (after text loads). */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 font-mono text-xs leading-relaxed select-none pointer-events-none"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            backdropFilter: 'blur(12px)',
            borderRadius: 12,
            padding: '1.25rem 1.5rem',
          }}
        >
          {/* JSON-style key/value pairs. Keys in cyan, values in green,
              booleans in orange — mimicking VS Code syntax highlighting. */}
          <div style={{ color: 'rgba(155,92,255,0.6)' }}>{'{'}</div>
          <div>
            &nbsp;&nbsp;<span style={{ color: '#00E5FF' }}>"name"</span>:{' '}
            <span style={{ color: '#4ADE80' }}>"Farhan Hossen"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span style={{ color: '#00E5FF' }}>"role"</span>:{' '}
            <span style={{ color: '#4ADE80' }}>"Software Developer"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span style={{ color: '#00E5FF' }}>"education"</span>:{' '}
            <span style={{ color: '#4ADE80' }}>"MIT @ UTS"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span style={{ color: '#00E5FF' }}>"location"</span>:{' '}
            <span style={{ color: '#4ADE80' }}>"Sydney, NSW"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span style={{ color: '#00E5FF' }}>"available"</span>:{' '}
            <span style={{ color: '#FB923C' }}>true</span>
          </div>
          <div style={{ color: 'rgba(155,92,255,0.6)' }}>{'}'}</div>
        </motion.div>

      </div>
    </section>
  );
}
