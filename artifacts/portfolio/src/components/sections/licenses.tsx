/**
 * licenses.tsx — "Licences & Rights" section.
 *
 * Displays a flex-wrapped row of licence/credential pills, each showing
 * a BadgeCheck icon, a title, and a short body description.
 *
 * Data is stored in the LICENSES array. To add a new licence, push a new
 * object with `title` and `body` — no JSX changes required.
 *
 * Cards are flex-wrapped (not a fixed grid) so they fill the row naturally
 * without leaving awkward empty columns when there's an odd count.
 *
 * Each card fades up on scroll with a staggered delay via the `custom` prop.
 * Cards don't have hover effects (licences are static facts, not interactive).
 */

import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

/**
 * LICENSES — All licence and right entries.
 *
 * Fields:
 *   title — short licence name (e.g. "White Card")
 *   body  — issuing authority or description (e.g. "WorkSafe NSW")
 *
 * Add new entries here; they render automatically in the card row below.
 */
const LICENSES = [
  { title: 'White Card',                  body: 'Construction Induction Training (Australia)' },
  { title: 'Forklift Operator Licence (LF)', body: 'WorkSafe NSW' },
  { title: 'Australian Driving Licence',  body: 'NSW' },
  { title: 'Full Time Work Rights',       body: 'Australia' },
];

/**
 * fadeUp — Staggered entrance animation for each licence card.
 * Delays by (index × 0.08s) so cards reveal left to right as the
 * section scrolls into view.
 */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

export function Licenses() {
  return (
    <section id="licenses" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Section heading (inline, not using SectionHeader component) ──
            Defined inline here because this section's heading is simple
            and doesn't need the shared SectionHeader abstraction.       */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          {/* // licenses label */}
          <div className="flex items-center gap-2 mb-2">
            <span style={{ color: 'hsl(199 93% 60%)' }}><BadgeCheck size={16} /></span>
            <span className="font-mono text-xs" style={{ color: 'hsl(215 16% 50%)' }}>
              // licenses
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'hsl(210 40% 96%)' }}>
            Licences &amp; Rights
          </h2>
          {/* Solid cyan underline */}
          <div className="mt-3 h-px w-12" style={{ background: 'hsl(199 93% 60%)' }} />
        </motion.div>

        {/* ── Licence cards — flex-wrapped row ─────────────────────────
            flex-wrap lets cards flow to a new line if they don't all fit.
            Each card is a small horizontal pill with icon + text.       */}
        <div className="mt-10 flex flex-wrap gap-4">
          {LICENSES.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i}
              className="flex items-start gap-3 px-5 py-4 rounded-lg"
              style={{ background: 'hsl(221 39% 11%)', border: '1px solid hsl(215 33% 17%)' }}
            >
              {/* Cyan BadgeCheck icon — `shrink-0` prevents it from
                  squishing when the text wraps on narrow viewports.  */}
              <BadgeCheck
                size={16}
                className="shrink-0 mt-0.5"
                style={{ color: 'hsl(199 93% 60%)' }}
              />

              {/* Licence name + issuing body */}
              <div>
                <p className="text-sm font-semibold" style={{ color: 'hsl(210 40% 96%)' }}>
                  {item.title}
                </p>
                <p className="font-mono text-xs mt-0.5" style={{ color: 'hsl(215 16% 55%)' }}>
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
