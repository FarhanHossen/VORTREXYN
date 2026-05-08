import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Instagram, ExternalLink } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const profiles = [
  {
    icon: <Github size={22} />,
    label: 'GitHub',
    handle: '@FarhanHossen',
    href: 'https://github.com/FarhanHossen',
    color: 'hsl(210 40% 92%)',
    bg: 'rgba(255,255,255,0.04)',
  },
  {
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    handle: 'farhan-hossen',
    href: 'https://www.linkedin.com/in/farhan-hossen',
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.08)',
  },
  {
    icon: <Facebook size={22} />,
    label: 'Facebook',
    handle: 'farhan.hossen.maria.afroz',
    href: 'https://www.facebook.com/farhan.hossen.maria.afroz',
    color: '#1877F2',
    bg: 'rgba(24,119,242,0.08)',
  },
  {
    icon: <Instagram size={22} />,
    label: 'Instagram',
    handle: '@farhanmadmax',
    href: 'https://www.instagram.com/farhanmadmax',
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.08)',
  },
];

export function SocialProfiles() {
  return (
    <section id="social-profiles" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp} custom={0} className="font-mono text-sm mb-2" style={{ color: 'hsl(215 20% 50%)' }}>
            <span style={{ color: 'hsl(215 16% 40%)' }}># </span>
            <span style={{ color: 'hsl(199 93% 60%)' }}>social-profiles</span>
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold mb-10" style={{ color: 'hsl(210 40% 96%)' }}>
            Social Profiles
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {profiles.map(({ icon, label, handle, href, color, bg }, i) => (
              <motion.a
                key={label}
                variants={fadeUp}
                custom={i + 2}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 rounded-lg p-5 transition-all duration-200"
                style={{
                  background: 'hsl(222 35% 8%)',
                  border: '1px solid hsl(215 33% 15%)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = color;
                  (e.currentTarget as HTMLElement).style.background = bg;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 15%)';
                  (e.currentTarget as HTMLElement).style.background = 'hsl(222 35% 8%)';
                }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="p-2.5 rounded-lg"
                    style={{ background: bg, color }}
                  >
                    {icon}
                  </div>
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color }}
                  />
                </div>
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
