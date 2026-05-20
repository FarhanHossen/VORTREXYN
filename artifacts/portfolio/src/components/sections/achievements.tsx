/**
 * achievements.tsx — "Achievements" section.
 *
 * Displays a 2-column grid of achievement cards, each showing:
 *   - A Trophy icon (cyan)
 *   - Achievement title (bold)
 *   - Organisation / context body
 *   - Period / year
 *
 * Data is stored in the ACHIEVEMENTS array. To add a new achievement,
 * push a new object with the next sequential `id`.
 *
 * Card hover effect: border turns a soft cyan.
 * Driven by inline onMouseEnter/Leave because the rgba value can't be
 * expressed as a static Tailwind class.
 *
 * Layout: 1 column (mobile) → 2 columns (sm+).
 * Each card animates up with a staggered delay on scroll entry.
 */

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

/**
 * ACHIEVEMENTS — All achievement entries, roughly newest → oldest.
 *
 * Fields:
 *   id     — unique numeric key (React key)
 *   title  — achievement or role title
 *   body   — organisation, club, or event name
 *   period — year or date range string
 */
const ACHIEVEMENTS = [
  {
    id: 1,
    title:  'Director of Finance',
    body:   'BRAC University Chess Club',
    period: 'Jan 2022 — Dec 2022',
  },
  {
    id: 2,
    title:  'Assistant Secretary',
    body:   'BRAC University Cultural Club',
    period: 'Sep 2020 — Jan 2022',
  },
  {
    id: 3,
    title:  '3rd Place (Physics Olympiad)',
    body:   '5th Laboratorians National Science Festival',
    period: '2017',
  },
];

/**
 * fadeUp — Staggered scroll-entrance animation for each card.
 * Delays by (index × 0.08s) so cards appear sequentially.
 */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Section heading ───────────────────────────────────────────
            Inline heading (no shared SectionHeader) — matches the
            pattern used in Licenses and Cocurricular for simple sections. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span style={{ color: 'hsl(199 93% 60%)' }}><Trophy size={16} /></span>
            <span className="font-mono text-xs" style={{ color: 'hsl(215 16% 50%)' }}>
              // achievements
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'hsl(210 40% 96%)' }}>
            Achievements
          </h2>
          {/* Solid cyan underline */}
          <div className="mt-3 h-px w-12" style={{ background: 'hsl(199 93% 60%)' }} />
        </motion.div>

        {/* ── Achievement cards grid — 1 col → 2 col ───────────────────
            margin: '-40px' in viewport config so the animation triggers
            slightly before the card fully enters view (prevents pop-in). */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i}
              className="flex items-start gap-3 px-5 py-4 rounded-lg transition-colors duration-300"
              style={{ background: 'hsl(221 39% 11%)', border: '1px solid hsl(215 33% 17%)' }}
              // Hover: cyan border glow
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.25)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 17%)';
              }}
            >
              {/* Trophy icon — shrink-0 keeps it from squishing on narrow screens */}
              <Trophy
                size={15}
                className="shrink-0 mt-0.5"
                style={{ color: 'hsl(199 93% 60%)' }}
              />

              {/* Achievement details */}
              <div className="flex-1 min-w-0">
                {/* Title — bold, brightest colour */}
                <p className="text-sm font-semibold" style={{ color: 'hsl(210 40% 96%)' }}>
                  {item.title}
                </p>
                {/* Organisation / event — secondary muted text */}
                <p className="font-mono text-xs mt-0.5" style={{ color: 'hsl(215 25% 65%)' }}>
                  {item.body}
                </p>
                {/* Period / year — most muted */}
                <p className="font-mono text-xs mt-1" style={{ color: 'hsl(215 16% 50%)' }}>
                  {item.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
