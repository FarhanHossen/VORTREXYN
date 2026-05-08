import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L.057 23.59a.75.75 0 0 0 .92.92l5.733-1.478A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.651-.502-5.178-1.377l-.372-.217-3.853.993.994-3.742-.235-.386A9.959 9.959 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

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
                icon: <WhatsAppIcon size={15} />,
                label: 'WhatsApp · +61 416 279 264',
                href: 'https://wa.me/61416279264',
                testId: 'link-whatsapp',
              },
              {
                icon: <MapPin size={15} />,
                label: 'Sydney, NSW, Australia',
                href: null,
                testId: null,
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
