/**
 * personal-info.tsx — "Personal Information" section.
 *
 * Displays a small grid of personal detail cards (name, blood group,
 * date of birth, nationality, etc.). Each card shows a labelled icon
 * on the left and the value on the right.
 *
 * Data is stored in the `items` array. To add or update a detail, simply
 * modify that array — no JSX changes are needed.
 *
 * Layout: 1 column (mobile) → 2 columns (sm) → 3 columns (lg).
 * Each card animates up with a staggered delay when it enters the viewport.
 *
 * Design note:
 *   Cards use a slightly lighter navy background (hsl 222 35% 8%) so they
 *   stand out from the page's near-black (#050A18) without using borders
 *   that would feel too heavy for personal data.
 */

import { motion } from 'framer-motion';
import { User, Heart, Droplets, Calendar, Globe, Users } from 'lucide-react';

/**
 * fadeUp — Used for the section label and heading (subtle upward entrance).
 */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

/**
 * slideFromRight — Staggered slide-in from the right for each detail card.
 * Cards enter one by one (slideshow effect) with a larger delay gap so the
 * sequential motion is clearly perceptible as the section comes into view.
 *   hidden  → 90px off-screen to the right, invisible
 *   visible → natural position, fully opaque
 */
const slideFromRight = {
  hidden: { opacity: 0, x: 90 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.12,
      ease: 'easeOut' as const,
    },
  }),
};

/**
 * items — Personal detail cards.
 * Each object defines:
 *   icon  — Lucide icon element (rendered in a cyan-tinted pill)
 *   label — muted monospace label above the value (e.g. "Date of Birth")
 *   value — the actual data displayed in a larger weight
 *
 * The `User` icon is reused for both parents because Lucide doesn't have
 * distinct parent icons — `Users` (group) is used for family members.
 */
const items = [
  { icon: <Users size={15} />, label: "Father's Name", value: 'H. M. Delowar Hossain' },
  { icon: <Users size={15} />, label: "Mother's Name", value: 'Fatema Hossain' },
  { icon: <Heart size={15} />, label: 'Spouse Name',   value: 'Maria Afroz' },
  { icon: <Droplets size={15} />, label: 'Blood Group', value: 'AB+' },
  { icon: <Calendar size={15} />, label: 'Date of Birth', value: '27 September 2000' },
  { icon: <Globe size={15} />, label: 'Nationality',   value: 'Bangladeshi' },
];

export function PersonalInfo() {
  return (
    <section id="personal-info" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Wrap all animated children in one parent motion.div so the
            `whileInView` trigger fires once for the whole group.      */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >

          {/* ── Section label (monospace comment style) ──────────────── */}
          <motion.p variants={fadeUp} custom={0} className="font-mono text-sm mb-2" style={{ color: 'hsl(215 20% 50%)' }}>
            <span style={{ color: 'hsl(215 16% 40%)' }}># </span>
            <span style={{ color: 'hsl(199 93% 60%)' }}>personal-info</span>
          </motion.p>

          {/* ── Section heading ───────────────────────────────────────── */}
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold mb-10" style={{ color: 'hsl(210 40% 96%)' }}>
            Personal Information
          </motion.h2>

          {/* ── Detail cards grid ────────────────────────────────────────
              Each card uses slideFromRight so they sweep in from the right
              one by one (slideshow style) as the section enters the viewport.
              custom={i} drives the stagger delay: card 0 first, card 5 last. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(({ icon, label, value }, i) => (
              <motion.div
                key={label}
                variants={slideFromRight}
                custom={i}
                className="flex items-start gap-4 rounded-lg p-5"
                style={{ background: 'hsl(222 35% 8%)', border: '1px solid hsl(215 33% 15%)' }}
              >
                {/* Icon pill — cyan tinted background, icon in cyan */}
                <div
                  className="mt-0.5 flex-shrink-0 p-2 rounded"
                  style={{ background: 'hsl(199 93% 60% / 0.1)', color: 'hsl(199 93% 60%)' }}
                >
                  {icon}
                </div>

                {/* Label + value stack */}
                <div>
                  {/* Muted monospace label */}
                  <p className="font-mono text-xs mb-1" style={{ color: 'hsl(215 20% 50%)' }}>
                    {label}
                  </p>
                  {/* Bright value text */}
                  <p className="font-medium text-sm" style={{ color: 'hsl(210 40% 92%)' }}>
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
