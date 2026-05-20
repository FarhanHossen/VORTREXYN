/**
 * skills.tsx — "Technical Toolkit" section.
 *
 * Displays all skills grouped into categories, rendered as a responsive
 * grid of glass-morphism cards. Each card represents one skill category
 * and lists the individual skills as small pill badges inside it.
 *
 * Data shape (SKILL_GROUPS):
 *   category — display name shown in the card header (e.g. "Frameworks & Platforms")
 *   symbol   — short decorative glyph shown beside the category name
 *   skills   — array of skill name strings rendered as badge pills
 *   accent   — hex colour (#00E5FF cyan or #9B5CFF purple) used for:
 *                · the symbol and category label text
 *                · the hover border glow on the card
 *                · the thin top-edge gradient line that appears on hover
 *
 * Categories alternate between cyan and purple accents to create visual
 * rhythm without manually assigning colours to each skill.
 *
 * Layout: 1 column (mobile) → 2 columns (sm) → 3 columns (lg)
 * Each card animates in with `fadeUp` as it enters the viewport.
 */

import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

/**
 * SKILL_GROUPS — All skill data.
 * To add a new category: push a new object at the end of this array.
 * To add a skill to an existing category: push its name into `skills`.
 * Accent colours alternate automatically if you follow the existing pattern.
 */
const SKILL_GROUPS: { category: string; symbol: string; skills: string[]; accent: string }[] = [
  {
    category: 'Programming Languages',
    symbol: '{ }',
    skills: ['Java', 'Dart', 'C#', 'Swift', 'C', 'C++', 'TypeScript', 'SQL'],
    accent: '#00E5FF',
  },
  {
    category: 'Scripting & Markup',
    symbol: '</>',
    skills: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'LaTeX'],
    accent: '#9B5CFF',
  },
  {
    category: 'Frameworks & Platforms',
    symbol: '[ ]',
    skills: ['Flutter', '.NET', 'React.js', 'React Native', 'Expo', 'Expo Router', 'Node.js', 'Express', 'Tailwind CSS', 'Vite', 'Framer Motion', 'EJS', 'TensorFlow', 'Keras', 'React Native SVG', 'React Native Reanimated'],
    accent: '#00E5FF',
  },
  {
    category: 'Web & Mobile',
    symbol: '◈',
    skills: ['Website Development', 'Android Application Development', 'Responsive UI/UX', 'RESTful APIs', 'Cross-platform Development', 'iOS Mobile Development', 'Third-party Integrations'],
    accent: '#9B5CFF',
  },
  {
    category: 'Databases & Data',
    symbol: '⊞',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firestore', 'Data Modelling', 'Performance Optimisation'],
    accent: '#00E5FF',
  },
  {
    category: 'Cloud & DevOps',
    symbol: '☁',
    skills: ['Firebase', 'Firebase Auth', 'Firebase Storage', 'AWS', 'Azure', 'Cloudflare', 'Netlify', 'Netlify Functions', 'Serverless-HTTP', 'Git', 'GitHub'],
    accent: '#9B5CFF',
  },
  {
    category: 'Systems & Networking',
    symbol: '⊟',
    skills: ['Windows', 'Linux (Ubuntu/Kali/Unix)', 'IP Addressing', 'Subnetting', 'Routing & Switching'],
    accent: '#00E5FF',
  },
  {
    category: 'Core Concepts',
    symbol: '∑',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Game Logic Development', 'Real-Time Systems'],
    accent: '#9B5CFF',
  },
  {
    category: 'Tools & Software',
    symbol: '⚙',
    skills: [
      'Visual Studio', 'Android Studio', 'EAS', 'App Store Connect',
      'Overleaf', 'Microsoft Office', 'VMware', 'VirtualBox',
      'Cisco Packet Tracer', 'Agile SDLC', 'OpenAI API', 'PayPal SDK', 'pnpm', 'EmailJS', 'Nodemailer', 'NumPy', 'scikit-learn', 'XGBoost',
    ],
    accent: '#00E5FF',
  },
  {
    category: 'AI',
    symbol: '✦',
    skills: ['GPT', 'Claude', 'GitHub Copilot', 'GradCAM', 'XAI', 'Transfer Learning'],
    accent: '#9B5CFF',
  },
];

/**
 * fadeUp — Scroll-triggered entrance animation shared across all skill cards.
 * Each card has a staggered delay via the `custom` prop (index × 0.06s),
 * so cards reveal in sequence left-to-right as they enter the viewport.
 */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: 'easeOut' },
  }),
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading with Wrench icon and "// skills" monospace label */}
        <SectionHeader icon={<Wrench size={16} />} label="skills" title="Technical Toolkit" />

        {/* ── Skill card grid ───────────────────────────────────────────
            Responsive: 1 col → 2 col → 3 col.
            Each card uses glass-morphism base + accent-coloured hover state. */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"   // triggers when card scrolls into view
              viewport={{ once: true }} // only animates once, not on re-scroll
              custom={i}              // stagger index for delay calculation
              className="p-6 rounded-2xl backdrop-blur-xl transition-all duration-300 group relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              // Hover: border glows in the card's accent colour (33 = 20% opacity hex)
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border = `1px solid ${group.accent}33`;
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              {/* Top-edge glow line — a 1px gradient bar that fades in on
                  hover using the group's accent colour at 40% opacity (66 hex).
                  `opacity-0 group-hover:opacity-100` uses Tailwind group hover.
                  `absolute top-0` pins it to the very top of the card.      */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${group.accent}66, transparent)` }}
              />

              {/* Card header: decorative symbol + category name */}
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-sm font-medium" style={{ color: group.accent }}>
                  {group.symbol}
                </span>
                <h3 className="font-mono text-sm font-semibold" style={{ color: 'rgba(148,163,184,0.8)' }}>
                  {group.category}
                </h3>
              </div>

              {/* Skill badges — each skill rendered as a small pill.
                  Consistent neutral styling (no accent per-pill) so the
                  card accent colour is the only variable between categories. */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1.5 rounded-md transition-colors"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      color: 'rgba(203,213,225,0.85)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * SectionHeader — Reusable heading block used at the top of this section.
 * Renders:
 *   [icon]  // label         ← small monospace comment line
 *   Title Text               ← large bold heading
 *   ▬▬▬▬▬▬▬▬▬▬▬▬           ← short purple→cyan gradient underline
 *
 * Defined locally (not shared) because each section file has its own
 * slightly different colour scheme for the underline/icon.
 *
 * Props:
 *   icon  — Lucide icon element
 *   label — monospace comment text (e.g. "skills")
 *   title — large heading text (e.g. "Technical Toolkit")
 */
function SectionHeader({
  icon,
  label,
  title,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: '#00E5FF' }}>{icon}</span>
        <span className="font-mono text-xs" style={{ color: 'rgba(100,116,139,0.9)' }}>
          // {label}
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'hsl(210 40% 96%)' }}>
        {title}
      </h2>
      {/* Short gradient underline — purple to cyan, 12px tall × 48px wide */}
      <div className="mt-3 h-px w-12" style={{ background: 'linear-gradient(90deg, #9B5CFF, #00E5FF)' }} />
    </motion.div>
  );
}
