import { motion } from 'framer-motion';
import { ChevronRight, Mail, MapPin, Github } from 'lucide-react';

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
      {/* Subtle background glow */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 py-24">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="font-mono text-sm mb-4" style={{ color: 'hsl(215 16% 47%)' }}>
            <span style={{ color: 'hsl(215 25% 27%)' }}># </span>
            <span style={{ color: 'hsl(199 93% 60%)' }}>Hey, I'm</span>
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-3"
            style={{ color: 'hsl(210 40% 96%)', lineHeight: 1.05 }}
          >
            Farhan Hossen.
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            custom={2}
            className="text-3xl md:text-4xl font-semibold mb-7"
            style={{ color: 'hsl(215 16% 47%)' }}
          >
            Software Developer
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-base leading-relaxed mb-10"
            style={{ color: 'hsl(215 19% 65%)', maxWidth: 560 }}
          >
            MIT graduate (Enterprise Software Development + Cyber Security) from UTS, Sydney. I build
            clean, practical software — from full-stack web apps to backend systems. Currently based in
            Sydney, NSW.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-3 mb-10">
            <button
              data-testid="button-view-work"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-sm px-5 py-2.5 rounded font-medium transition-opacity flex items-center gap-2"
              style={{ background: 'hsl(199 93% 60%)', color: 'hsl(222 48% 11%)' }}
            >
              View Projects <ChevronRight size={15} />
            </button>
            <button
              data-testid="button-get-in-touch"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-sm px-5 py-2.5 rounded font-medium transition-all flex items-center gap-2"
              style={{ border: '1px solid hsl(215 33% 17%)', color: 'hsl(215 19% 65%)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'hsl(199 93% 60%)';
                (e.currentTarget as HTMLElement).style.color = 'hsl(199 93% 60%)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 17%)';
                (e.currentTarget as HTMLElement).style.color = 'hsl(215 19% 65%)';
              }}
            >
              <Mail size={14} /> Get in Touch
            </button>
          </motion.div>

          {/* Social / meta row */}
          <motion.div variants={fadeUp} custom={5} className="flex flex-wrap items-center gap-5">
            {[
              { icon: <Github size={16} />, label: 'GitHub', href: 'https://github.com/FarhanHossen' },
              { icon: <Mail size={16} />, label: 'Email', href: 'mailto:farhan141549@gmail.com' },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-1.5 font-mono text-xs transition-colors"
                style={{ color: 'hsl(215 25% 27%)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(199 93% 60%)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(215 25% 27%)')}
              >
                {icon} {label}
              </a>
            ))}
            <span className="font-mono text-xs flex items-center gap-1" style={{ color: 'hsl(215 25% 27%)' }}>
              <MapPin size={13} /> Sydney, NSW
            </span>
          </motion.div>
        </motion.div>

        {/* Decorative code snippet — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 font-mono text-xs leading-relaxed select-none pointer-events-none"
          style={{ color: 'hsl(215 33% 17%)' }}
        >
          <div style={{ color: 'hsl(215 25% 27%)' }}>{'{'}</div>
          <div>
            &nbsp;&nbsp;<span style={{ color: 'hsl(199 93% 60%)' }}>"name"</span>:{' '}
            <span style={{ color: '#4ADE80' }}>"Farhan Hossen"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span style={{ color: 'hsl(199 93% 60%)' }}>"role"</span>:{' '}
            <span style={{ color: '#4ADE80' }}>"Software Developer"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span style={{ color: 'hsl(199 93% 60%)' }}>"education"</span>:{' '}
            <span style={{ color: '#4ADE80' }}>"MIT @ UTS"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span style={{ color: 'hsl(199 93% 60%)' }}>"location"</span>:{' '}
            <span style={{ color: '#4ADE80' }}>"Sydney, NSW"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span style={{ color: 'hsl(199 93% 60%)' }}>"available"</span>:{' '}
            <span style={{ color: '#FB923C' }}>true</span>
          </div>
          <div style={{ color: 'hsl(215 25% 27%)' }}>{'}'}</div>
        </motion.div>
      </div>
    </section>
  );
}
