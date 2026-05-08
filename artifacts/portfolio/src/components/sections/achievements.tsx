import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Director of Finance',
    body: 'BRAC University Chess Club',
    period: 'Jan 2022 — Dec 2022',
  },
  {
    id: 2,
    title: 'Assistant Secretary',
    body: 'BRAC University Cultural Club',
    period: 'Sep 2020 — Jan 2022',
  },
  {
    id: 3,
    title: '3rd Place — Physics Olympiad',
    body: '5th Laboratorians National Science Festival',
    period: '2017',
  },
  {
    id: 4,
    title: 'Junior Co-founding Member',
    body: 'BNMPC Science Club',
    period: '2015',
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

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
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
          <div className="mt-3 h-px w-12" style={{ background: 'hsl(199 93% 60%)' }} />
        </motion.div>

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
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.25)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 17%)';
              }}
            >
              <Trophy
                size={15}
                className="shrink-0 mt-0.5"
                style={{ color: 'hsl(199 93% 60%)' }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold" style={{ color: 'hsl(210 40% 96%)' }}>
                  {item.title}
                </p>
                <p className="font-mono text-xs mt-0.5" style={{ color: 'hsl(215 25% 65%)' }}>
                  {item.body}
                </p>
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
