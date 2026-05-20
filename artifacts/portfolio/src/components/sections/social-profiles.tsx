/**
 * social-profiles.tsx — "Social Profiles" section.
 *
 * Renders a 4-column grid of clickable social media cards (GitHub,
 * LinkedIn, Facebook, Instagram). Each card links out to the corresponding
 * profile in a new tab.
 *
 * Hover effect: the card border and background shift to the platform's
 * brand colour (e.g. LinkedIn blue, Instagram pink). This is driven by
 * inline onMouseEnter/Leave handlers because Tailwind can't express
 * dynamic per-card colours as static class names.
 *
 * An `ExternalLink` icon fades in on hover (opacity-0 → opacity-100 via
 * Tailwind's `group-hover` utility) to hint that the card opens a new tab.
 *
 * Data shape (profiles array):
 *   icon   — Lucide icon element at 22px
 *   label  — Platform name (e.g. "GitHub")
 *   handle — Username or display handle shown below the label
 *   href   — Full profile URL
 *   color  — Brand hex colour used for hover border + icon background
 *   bg     — Semi-transparent version of `color` used for hover card bg
 *            and icon container bg at rest
 */

import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Instagram, ExternalLink } from 'lucide-react';

/**
 * fadeUp — Staggered scroll-entrance animation.
 * Each card animates in with a delay of (index × 0.08s) so they reveal
 * left to right as the section enters the viewport.
 */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

/**
 * profiles — All social platform entries.
 * Add a new platform by pushing a new object here; no JSX changes needed.
 */
const profiles = [
  {
    icon:   <Github size={22} />,
    label:  'GitHub',
    handle: '@FarhanHossen',
    href:   'https://github.com/FarhanHossen',
    color:  'hsl(210 40% 92%)',         // near-white for GitHub (no brand colour)
    bg:     'rgba(255,255,255,0.04)',
  },
  {
    icon:   <Linkedin size={22} />,
    label:  'LinkedIn',
    handle: 'farhan-hossen',
    href:   'https://www.linkedin.com/in/farhan-hossen',
    color:  '#0A66C2',                  // LinkedIn brand blue
    bg:     'rgba(10,102,194,0.08)',
  },
  {
    icon:   <Facebook size={22} />,
    label:  'Facebook',
    handle: 'farhan.hossen.maria.afroz',
    href:   'https://www.facebook.com/farhan.hossen.maria.afroz',
    color:  '#1877F2',                  // Facebook brand blue
    bg:     'rgba(24,119,242,0.08)',
  },
  {
    icon:   <Instagram size={22} />,
    label:  'Instagram',
    handle: '@farhanmadmax',
    href:   'https://www.instagram.com/farhanmadmax',
    color:  '#E1306C',                  // Instagram brand pink
    bg:     'rgba(225,48,108,0.08)',
  },
];

export function SocialProfiles() {
  return (
    <section id="social-profiles" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Single parent motion.div so the whileInView fires once for all cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >

          {/* ── Section label ─────────────────────────────────────────── */}
          <motion.p variants={fadeUp} custom={0} className="font-mono text-sm mb-2" style={{ color: 'hsl(215 20% 50%)' }}>
            <span style={{ color: 'hsl(215 16% 40%)' }}># </span>
            <span style={{ color: 'hsl(199 93% 60%)' }}>social-profiles</span>
          </motion.p>

          {/* ── Section heading ───────────────────────────────────────── */}
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold mb-10" style={{ color: 'hsl(210 40% 96%)' }}>
            Social Profiles
          </motion.h2>

          {/* ── Profile cards grid — 1 col → 2 col → 4 col ──────────────
              Each card is a `motion.a` so the whole card is a link.
              `group` class enables the child ExternalLink to use group-hover. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {profiles.map(({ icon, label, handle, href, color, bg }, i) => (
              <motion.a
                key={label}
                variants={fadeUp}
                custom={i + 2}          // offset stagger past the heading
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 rounded-lg p-5 transition-all duration-200"
                style={{
                  background: 'hsl(222 35% 8%)',
                  border: '1px solid hsl(215 33% 15%)',
                }}
                // Hover: border shifts to platform brand colour; bg lightens
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = color;
                  (e.currentTarget as HTMLElement).style.background = bg;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 15%)';
                  (e.currentTarget as HTMLElement).style.background = 'hsl(222 35% 8%)';
                }}
              >
                {/* Card top row: brand icon + external link icon (appears on hover) */}
                <div className="flex items-center justify-between">
                  {/* Icon container — brand-coloured background + icon */}
                  <div
                    className="p-2.5 rounded-lg"
                    style={{ background: bg, color }}
                  >
                    {icon}
                  </div>

                  {/* ExternalLink icon — invisible at rest, visible on hover.
                      Uses Tailwind group-hover because opacity doesn't need
                      a dynamic value, unlike the border/bg colours above.  */}
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color }}
                  />
                </div>

                {/* Platform name + handle */}
                <div>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: 'hsl(210 40% 92%)' }}>
                    {label}
                  </p>
                  <p className="font-mono text-xs" style={{ color: 'hsl(215 20% 50%)' }}>
                    {handle}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
