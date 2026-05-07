import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Github } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export function Contact() {
  return (
    <section id="contact" className="py-24" style={{ borderTop: '1px solid hsl(215 33% 17%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader icon={<Mail size={16} />} label="contact" title="Get In Touch" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 max-w-xl"
        >
          <p className="text-sm leading-relaxed mb-8" style={{ color: 'hsl(215 25% 72%)' }}>
            I'm currently open to new opportunities in software development. Whether you have a role
            in mind, a project idea, or just want to connect — feel free to reach out. I'll get back
            to you as soon as possible.
          </p>

          <div className="space-y-4 mb-10">
            {[
              {
                icon: <Mail size={15} />,
                label: 'farhan141549@gmail.com',
                href: 'mailto:farhan141549@gmail.com',
                testId: 'link-email',
              },
              {
                icon: <Phone size={15} />,
                label: '+61 416 279 264',
                href: 'tel:+61416279264',
                testId: 'link-phone',
              },
              {
                icon: <MapPin size={15} />,
                label: 'Sydney, NSW, Australia · Work Rights: Full Time',
                href: null,
                testId: null,
              },
              {
                icon: <Github size={15} />,
                label: 'github.com/FarhanHossen',
                href: 'https://github.com/FarhanHossen',
                testId: 'link-github',
              },
            ].map(({ icon, label, href, testId }) => (
              <div key={label} className="flex items-center gap-3">
                <span style={{ color: 'hsl(199 93% 60%)' }}>{icon}</span>
                {href ? (
                  <a
                    href={href}
                    data-testid={testId ?? undefined}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-mono text-sm transition-colors"
                    style={{ color: 'hsl(215 25% 72%)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(199 93% 60%)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(215 25% 72%)')}
                  >
                    {label}
                  </a>
                ) : (
                  <span className="font-mono text-sm" style={{ color: 'hsl(215 25% 72%)' }}>
                    {label}
                  </span>
                )}
              </div>
            ))}
          </div>

          <button
            data-testid="button-email"
            onClick={() => (window.location.href = 'mailto:farhan141549@gmail.com')}
            className="font-mono text-sm px-6 py-3 rounded font-medium inline-flex items-center gap-2 transition-opacity hover:opacity-90"
            style={{ background: 'hsl(199 93% 60%)', color: 'hsl(222 48% 11%)' }}
          >
            Say Hello <ArrowUpRight size={15} />
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8" style={{ borderTop: '1px solid hsl(215 33% 17%)' }}>
        <p className="font-mono text-xs text-center" style={{ color: 'hsl(215 16% 45%)' }}>
          <span style={{ color: 'hsl(215 33% 17%)' }}>// </span>
          Built by Farhan Hossen · Sydney, NSW · {new Date().getFullYear()}
        </p>
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
