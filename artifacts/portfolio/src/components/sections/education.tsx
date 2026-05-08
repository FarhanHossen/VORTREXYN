import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EDUCATION = [
  {
    id: 1,
    degree: 'Master of Information Technology',
    major: 'Enterprise Software Development',
    subMajor: 'Sub-major: Cyber Security',
    institution: 'University of Technology Sydney',
    location: 'Sydney, NSW',
    period: 'Aug 2023 — Jul 2025',
    result: 'Graduated with Distinction · GPA 6.17 / 7.00',
  },
  {
    id: 2,
    degree: 'Bachelor of Science',
    major: 'Computer Science & Engineering',
    subMajor: '',
    institution: 'BRAC University',
    location: 'Bangladesh',
    period: 'Jan 2019 — Jan 2023',
    result: 'Graduated with High Distinction · GPA 3.71 / 4.00',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader icon={<GraduationCap size={16} />} label="education" title="Education" />

        <div className="mt-10 space-y-4">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold mb-0.5" style={{ color: 'hsl(210 40% 96%)' }}>
                    {edu.degree}
                  </h3>
                  {edu.major && (
                    <p className="text-sm mb-0.5" style={{ color: 'hsl(215 25% 75%)' }}>
                      {edu.major}
                    </p>
                  )}
                  {edu.subMajor && (
                    <p className="font-mono text-xs mt-1 mb-2" style={{ color: 'hsl(215 16% 58%)' }}>
                      {edu.subMajor}
                    </p>
                  )}
                  <p className="font-mono text-sm mt-2" style={{ color: 'hsl(199 93% 60%)' }}>
                    {edu.institution}
                  </p>
                  <p className="font-mono text-xs mt-0.5" style={{ color: 'hsl(215 16% 55%)' }}>
                    {edu.location}
                  </p>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                  <span className="font-mono text-xs" style={{ color: 'hsl(215 16% 55%)' }}>
                    {edu.period}
                  </span>
                  <span
                    className="font-mono text-xs px-2.5 py-1 rounded"
                    style={{
                      background: 'rgba(56,189,248,0.08)',
                      color: 'hsl(199 93% 60%)',
                      border: '1px solid rgba(56,189,248,0.2)',
                    }}
                  >
                    {edu.result}
                  </span>
                </div>
              </div>
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
