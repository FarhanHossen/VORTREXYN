/**
 * experience.tsx — "Work Experience" section.
 *
 * Renders a vertically-stacked list of job cards, each containing:
 *   - Role title + company name (linkable) + location + period
 *   - Bullet points describing responsibilities and achievements
 *   - Optional "courses tutored" sub-table (for the BRAC tutoring role only)
 *
 * Jobs are stored in the EXPERIENCE array sorted newest → oldest.
 * To add a new role: push a new object to the top of the array and give
 * it the next `id`. The `courses` field is optional — only include it
 * for tutoring/teaching roles.
 *
 * Card hover effect: border turns cyan, background lightens slightly.
 * This is done with inline onMouseEnter/Leave handlers (not Tailwind hover)
 * because the glassmorphism values can't be expressed as Tailwind classes.
 *
 * The `companyUrl` field is optional. When present the company name renders
 * as a clickable link that opens the location in Google Maps (or the
 * company website). When absent it renders as plain text.
 */

import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';

/**
 * EXPERIENCE — All work experience entries, newest first.
 *
 * Fields:
 *   id          — unique numeric identifier (used as React key)
 *   role        — job title
 *   company     — employer name
 *   companyUrl  — (optional) URL for the company/location link
 *   location    — suburb/city, state
 *   period      — date range string (e.g. "Nov 2025 — Present")
 *   points      — array of bullet-point achievement strings
 *   courses     — (optional) array of tutored course objects, only for
 *                 teaching roles. Each course has: code, name, faculty.
 */
const EXPERIENCE = [
  {
    id: 1,
    role: 'Team Member',
    company: 'Primary Connect (Woolworths RDC)',
    companyUrl: 'https://maps.app.goo.gl/wnFMezAT1z5WRPe29',
    location: 'Moorebank, NSW',
    period: 'Nov 2025 — Present',
    points: [
      'Operating in a fully automated warehouse environment using WMS and barcode scanning systems, monitoring inventory flow of up to 1.5 million products daily.',
      'Performing product verification with system data (900 units/hour) while identifying and reporting automation or software-related discrepancies.',
      'Contributing to efficiency improvement from 40% to 70% through optimized automation and issue resolution.',
    ],
  },
  {
    id: 2,
    role: 'Junior Chef',
    company: 'Matinee Coffee',
    companyUrl: 'https://maps.google.com/?q=Matinee+Coffee+Marrickville+NSW',
    location: 'Marrickville, NSW',
    period: 'Apr 2025 — Oct 2025',
    points: [
      'Prepared and presented high-quality dishes while assisting in kitchen operations, including ingredient preparation, stock monitoring, and collaboration with senior chefs to maintain efficient service flow, ensure consistency and portion control, and meet food safety, hygiene, and performance metrics.',
    ],
  },
  {
    id: 3,
    role: 'Kitchen Hand',
    company: 'Matinee Coffee',
    companyUrl: 'https://maps.google.com/?q=Matinee+Coffee+Marrickville+NSW',
    location: 'Marrickville, NSW',
    period: 'Jul 2024 — Mar 2025',
    points: [
      'Maintained efficient back-of-house workflow by handling dishwashing, stock replenishment, and waste management, contributing to smooth service operations and consistent quality metrics.',
    ],
  },
  {
    id: 4,
    role: 'Team Member',
    company: 'Woolworths Warehouse',
    companyUrl: 'https://maps.google.com/?q=Woolworths+Warehouse+Lidcombe+NSW',
    location: 'Lidcombe, NSW',
    period: 'Apr 2024 — Sep 2024',
    points: [
      'Prepared and organized 200+ totes and trolleys per shift, improving workflow efficiency, reducing delays, and supporting smooth day-to-day warehouse operations.',
      'Coordinated manual warehouse operations by receiving inbound trucks, checking delivery lists, unloading goods, and loading outbound shipments as per dispatch requirements, ensuring accurate and efficient stock movement.',
    ],
  },
  {
    id: 5,
    role: 'Houseperson',
    company: 'Crown Towers Sydney',
    companyUrl: 'https://maps.google.com/?q=Crown+Towers+Sydney,+Barangaroo+NSW',
    location: 'Barangaroo, NSW',
    period: 'Feb 2024 — Jun 2024',
    points: [
      'Supported housekeeping operations by transporting linens, amenities, and equipment across floors, ensuring timely room readiness while meeting productivity and turnaround time metrics in line with Crown Towers Sydney standards.',
    ],
  },
  {
    id: 6,
    role: 'Front Team Member',
    company: 'Villaggio',
    companyUrl: 'https://maps.google.com/?q=Villaggio+Restaurant+NSW',
    location: 'Blacktown, Merrylands & Ashfield, NSW',
    period: 'Jan 2024 — Oct 2025',
    points: [
      'Delivered high-quality customer service by taking orders, handling POS transactions, managing telephone orders, processing bookings and advance deposit payments, coordinating with kitchen staff, managing order flow, and maintaining cleanliness of dining areas, ensuring a welcoming dining experience while consistently meeting service speed, efficiency, and customer satisfaction metrics.',
    ],
  },
  {
    id: 7,
    role: 'Room Attendant',
    company: 'Crown Towers Sydney',
    companyUrl: 'https://maps.google.com/?q=Crown+Towers+Sydney,+Barangaroo+NSW',
    location: 'Barangaroo, NSW',
    period: 'Sep 2023 — Jan 2024',
    points: [
      'Maintained high standards of cleanliness and presentation by servicing guest rooms, including bed-making, bathroom sanitation, and replenishment of amenities in line with luxury hotel standards.',
    ],
  },
  {
    id: 8,
    role: 'Front Team Member',
    company: "McDonald's",
    companyUrl: "https://maps.google.com/?q=McDonald's+Punchbowl+NSW",
    location: 'Punchbowl, NSW',
    period: 'Aug 2023 — Dec 2023',
    points: [
      'Delivered fast and friendly customer service in a high-volume environment, accurately taking orders, handling cash and POS transactions, and resolving customer inquiries to ensure a positive dining experience.',
      'Maintained front counter operations by coordinating with kitchen staff, managing order flow, and ensuring cleanliness, food safety, and compliance with company standards during peak hours.',
    ],
  },
  {
    id: 9,
    role: 'Student Tutor',
    company: 'BRAC University',
    companyUrl: 'https://www.bracu.ac.bd',
    location: 'Dhaka, Bangladesh',
    period: 'Jun 2022 — Dec 2022',
    points: [
      'Provided academic support to 300+ undergraduate students using problem-solving simulations and maintained structured grading data sheets, and supported faculty with exam invigilation, course administration, research assistance, and technical guidance for analytical and computational problem-solving.',
    ],
    // Courses tutored — rendered as a sub-table inside this card only.
    // Each entry: code = course code, name = full name, faculty = lecturer(s).
    courses: [
      { code: 'MAT092', name: 'Remedial Course in Mathematics',               faculty: 'Mr. Md. Maruf Ahmed' },
      { code: 'MAT215', name: 'Complex Variables and Laplace Transformations', faculty: 'Anika Ferdous' },
      { code: 'MAT216', name: 'Linear Algebra and Fourier Analysis',           faculty: 'Shuchi Chaki · Sujon Chandra Sutradhar' },
    ],
  },
];

/**
 * fadeUp — Staggered scroll-trigger animation for job cards.
 * Each card delays by (index × 0.08s) via the `custom` prop so they
 * reveal sequentially as they enter the viewport.
 */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading with Briefcase icon */}
        <SectionHeader icon={<Briefcase size={16} />} label="experience" title="Work Experience" />

        {/* ── Job cards list ────────────────────────────────────────────
            Each job renders as a glass-morphism card with:
              - Hover: cyan border + slightly brighter background
              - `margin: '-40px'` in viewport config so the animation
                triggers slightly before the card fully enters view,
                preventing a visible "pop in" at the bottom of the screen. */}
        <div className="mt-10 space-y-4">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i}
              className="p-6 rounded-2xl backdrop-blur-xl transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.2)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              {/* Card header: role/company/location on left, period on right.
                  Stacks to column on mobile, row on sm+.                   */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                <div>
                  {/* Role title */}
                  <h3 className="text-base font-semibold" style={{ color: 'hsl(210 40% 96%)' }}>
                    {job.role}
                  </h3>

                  {/* Company name — link if companyUrl exists, plain text if not */}
                  {'companyUrl' in job && job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm transition-opacity hover:opacity-75"
                      style={{ color: 'hsl(199 93% 60%)' }}
                    >
                      {job.company}
                    </a>
                  ) : (
                    <p className="font-mono text-sm" style={{ color: 'hsl(199 93% 60%)' }}>
                      {job.company}
                    </p>
                  )}

                  {/* Location in muted monospace */}
                  <p className="font-mono text-xs mt-0.5" style={{ color: 'hsl(215 16% 55%)' }}>
                    {job.location}
                  </p>
                </div>

                {/* Date range — right-aligned on desktop, left-aligned on mobile */}
                <span className="font-mono text-xs shrink-0" style={{ color: 'hsl(215 16% 55%)' }}>
                  {job.period}
                </span>
              </div>

              {/* Bullet points — each prefixed with a cyan ChevronRight icon */}
              <ul className="space-y-1.5">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm" style={{ color: 'hsl(215 25% 72%)' }}>
                    <ChevronRight
                      size={14}
                      className="shrink-0 mt-0.5"
                      style={{ color: 'hsl(199 93% 60%)' }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Courses tutored sub-section — only rendered when `courses`
                  exists on the job object (BRAC University tutoring role).
                  Uses TypeScript's `'courses' in job` narrowing check.
                  Separated from the bullets by a faint horizontal rule.   */}
              {'courses' in job && job.courses && (
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="font-mono text-xs mb-2" style={{ color: 'hsl(215 16% 50%)' }}>
                    // courses tutored
                  </p>
                  <div className="space-y-2">
                    {job.courses.map((c) => (
                      <div key={c.code} className="flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-0.5">
                        {/* Course code badge — purple pill */}
                        <span
                          className="font-mono text-xs shrink-0 px-1.5 py-0.5 rounded"
                          style={{ background: 'rgba(155,92,255,0.1)', color: '#9B5CFF', border: '1px solid rgba(155,92,255,0.2)' }}
                        >
                          {c.code}
                        </span>
                        {/* Course full name */}
                        <span className="text-sm" style={{ color: 'hsl(215 25% 72%)' }}>{c.name}</span>
                        {/* Faculty member(s) in muted monospace */}
                        <span className="font-mono text-xs" style={{ color: 'hsl(215 16% 45%)' }}>— {c.faculty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * SectionHeader — Local reusable heading block (not shared across files).
 * Renders: [icon] // label  →  Title  →  cyan underline bar.
 *
 * Props:
 *   icon  — Lucide icon element
 *   label — short monospace comment label (e.g. "experience")
 *   title — large bold section title (e.g. "Work Experience")
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
        <span style={{ color: 'hsl(199 93% 60%)' }}>{icon}</span>
        <span className="font-mono text-xs" style={{ color: 'hsl(215 16% 50%)' }}>
          // {label}
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'hsl(210 40% 96%)' }}>
        {title}
      </h2>
      {/* Solid cyan underline — 48px wide, 1px tall */}
      <div className="mt-3 h-px w-12" style={{ background: 'hsl(199 93% 60%)' }} />
    </motion.div>
  );
}
