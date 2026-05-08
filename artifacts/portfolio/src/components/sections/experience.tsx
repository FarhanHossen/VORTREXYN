import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';

const EXPERIENCE = [
  {
    id: 1,
    role: 'Team Member',
    company: 'Woolworths Regional Distribution Centre (Primary Connect)',
    location: 'Moorebank, NSW',
    period: 'Nov 2025 — Present',
    points: [
      'Operating in a fully automated warehouse environment using WMS and barcode scanning systems',
      'Monitoring inventory flow of up to 1.5 million products daily and troubleshooting sensor and system issues',
      'Performed product verification at 900 units/hour while identifying software-related discrepancies',
      'Contributed to efficiency improvement from 40% to 70% through optimized automation and issue resolution',
    ],
  },
  {
    id: 2,
    role: 'Junior Chef / Kitchen Hand',
    company: 'Matinee Coffee',
    location: 'Marrickville, NSW',
    period: 'Jul 2024 — Oct 2025',
    points: [
      'Prepared and presented high-quality dishes while supporting kitchen operations',
      'Monitored ingredient stock and collaborated with senior chefs to maintain service quality',
      'Maintained efficient back-of-house workflow contributing to consistent quality metrics',
    ],
  },
  {
    id: 3,
    role: 'Houseperson / Room Attendant',
    company: 'Crown Towers Sydney',
    location: 'Barangaroo, NSW',
    period: 'Sep 2023 — Jun 2024',
    points: [
      'Supported luxury hotel housekeeping operations across floors for timely room readiness',
      'Maintained high standards of cleanliness and presentation in line with Crown Towers luxury standards',
      'Consistently met turnaround time metrics in a high-volume, guest-facing environment',
    ],
  },
  {
    id: 4,
    role: 'Front Team Member',
    company: "McDonald's",
    location: 'Punchbowl, NSW',
    period: 'Aug 2023 — Dec 2023',
    points: [
      'Delivered fast and friendly customer service in a high-volume environment, accurately taking orders, handling cash and POS transactions, and resolving customer inquiries to ensure a positive dining experience.',
      'Maintained front counter operations by coordinating with kitchen staff, managing order flow, and ensuring cleanliness, food safety, and compliance with company standards during peak hours.',
    ],
  },
];

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
        <SectionHeader icon={<Briefcase size={16} />} label="experience" title="Work Experience" />

        <div className="mt-10 space-y-4">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i}
              className="p-6 rounded-lg transition-colors duration-300"
              style={{ background: 'hsl(221 39% 11%)', border: '1px solid hsl(215 33% 17%)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.25)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 17%)';
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-base font-semibold" style={{ color: 'hsl(210 40% 96%)' }}>
                    {job.role}
                  </h3>
                  <p className="font-mono text-sm" style={{ color: 'hsl(199 93% 60%)' }}>
                    {job.company}
                  </p>
                  <p className="font-mono text-xs mt-0.5" style={{ color: 'hsl(215 16% 55%)' }}>
                    {job.location}
                  </p>
                </div>
                <span className="font-mono text-xs shrink-0" style={{ color: 'hsl(215 16% 55%)' }}>
                  {job.period}
                </span>
              </div>

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <div className="mt-3 h-px w-12" style={{ background: 'hsl(199 93% 60%)' }} />
    </motion.div>
  );
}
