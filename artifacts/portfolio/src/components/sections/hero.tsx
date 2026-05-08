import { motion } from 'framer-motion';
import { ChevronRight, Mail } from 'lucide-react';

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
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">

          {/* Status pill — Variant B style */}
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

          {/* Name with gradient */}
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

          {/* Role */}
          <motion.h2
            variants={fadeUp}
            custom={2}
            className="text-2xl md:text-3xl font-light tracking-wide mb-7"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Architecting Digital Futures
          </motion.h2>

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

          {/* CTAs */}
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4 mb-10">
            <button
              data-testid="button-view-work"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-sm px-6 py-3 rounded-lg font-medium transition-opacity hover:opacity-90 flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #9B5CFF, #00E5FF)',
                color: '#050A18',
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

        {/* Decorative code snippet — desktop only */}
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
