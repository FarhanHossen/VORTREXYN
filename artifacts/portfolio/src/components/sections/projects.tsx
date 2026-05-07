import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Terminal, Code2, Layers, Smartphone, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'VORTREXYN Bubble Pop',
    subtitle: 'Cross-Platform Arcade Mobile Game',
    year: '2025',
    type: 'mobile' as const,
    bullets: [
      'Built a cross-platform arcade mobile game published on the Apple App Store with real-time global leaderboard and user authentication.',
      'Managed full iOS deployment pipeline including Apple Distribution Certificates, Provisioning Profiles, App Store Connect submission, and TestFlight testing.',
      'Integrated Firebase Auth and Firestore for live score tracking and player accounts across all devices.',
      'Configured custom domain with Cloudflare DNS, SSL, and App Store Connect domain verification.',
    ],
    screenshots: [
      { src: '/screenshots/bubble-pop-splash.png', alt: 'Splash screen' },
      { src: '/screenshots/bubble-pop-signin.png', alt: 'Sign in' },
      { src: '/screenshots/bubble-pop-signup.png', alt: 'Sign up' },
      { src: '/screenshots/bubble-pop-reset.png', alt: 'Reset password' },
      { src: '/screenshots/bubble-pop-lobby.png', alt: 'Game lobby & settings' },
      { src: '/screenshots/bubble-pop-leaderboard.png', alt: 'Global leaderboard' },
      { src: '/screenshots/bubble-pop-gameplay-easy.png', alt: 'Gameplay — Easy' },
      { src: '/screenshots/bubble-pop-gameplay-medium.png', alt: 'Gameplay — Medium' },
      { src: '/screenshots/bubble-pop-gameplay-hard.png', alt: 'Gameplay — Hard' },
      { src: '/screenshots/bubble-pop-gameplay-extreme.png', alt: 'Gameplay — Extreme' },
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Firestore', 'EAS', 'App Store Connect', 'Cloudflare', 'REST APIs', 'Git'],
    github: 'https://github.com/FarhanHossen/Bubble-Pop',
    demo: 'https://apps.apple.com/us/app/vortrexyn-bubble-pop/id6764064306',
    demoLabel: 'App Store',
  },
  {
    id: 2,
    title: 'VORTREXYN Car Rental',
    subtitle: 'Full-Stack Car Rental Platform',
    year: '2024',
    type: 'web' as const,
    bullets: [
      'Built a full-stack car rental platform with 625+ vehicles, user authentication, real-time Firestore database, and PayPal live payment integration.',
      'Developed an admin dashboard with booking management, fleet stock control, and AI-generated vehicle images using OpenAI DALL-E 3.',
      'Deployed to a custom domain with Node.js/Express backend serving a static HTML/CSS/JS frontend.',
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express.js', 'Firebase', 'Firestore', 'OpenAI API', 'PayPal SDK', 'REST APIs', 'Git'],
    github: 'https://github.com/FarhanHossen/vortrexyn-car-rental',
    demo: 'https://vortrexyn-premium-car-rental-system.com/',
    demoLabel: 'Live Site',
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

function ScreenshotCarousel({ screenshots }: { screenshots: { src: string; alt: string }[] }) {
  const [active, setActive] = useState(0);
  const total = screenshots.length;

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(total - 1, i + 1));

  const indices = [active - 1, active, active + 1].filter((i) => i >= 0 && i < total);

  return (
    <div className="mb-6">
      <div className="relative flex items-center justify-center" style={{ height: 260 }}>
        <button
          onClick={prev}
          disabled={active === 0}
          className="absolute left-0 z-10 flex items-center justify-center w-7 h-7 rounded-full transition-all"
          style={{
            background: 'hsl(221 39% 11%)',
            border: '1px solid hsl(215 33% 22%)',
            color: active === 0 ? 'hsl(215 33% 22%)' : 'hsl(215 20% 68%)',
            cursor: active === 0 ? 'default' : 'pointer',
          }}
        >
          <ChevronLeft size={14} />
        </button>

        <div className="flex items-center justify-center gap-3 w-full px-10">
          <AnimatePresence mode="popLayout">
            {indices.map((i) => {
              const isCenter = i === active;
              return (
                <motion.div
                  key={screenshots[i].src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.45,
                    scale: isCenter ? 1 : 0.82,
                    filter: isCenter ? 'blur(0px)' : 'blur(3px)',
                  }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  onClick={() => !isCenter && setActive(i)}
                  className="shrink-0 rounded-xl overflow-hidden"
                  style={{
                    width: isCenter ? 128 : 90,
                    height: isCenter ? 228 : 160,
                    border: isCenter ? '2px solid rgba(56,189,248,0.5)' : '1px solid hsl(215 33% 22%)',
                    cursor: isCenter ? 'default' : 'pointer',
                    boxShadow: isCenter ? '0 0 24px rgba(56,189,248,0.15)' : 'none',
                  }}
                >
                  <img
                    src={screenshots[i].src}
                    alt={screenshots[i].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          disabled={active === total - 1}
          className="absolute right-0 z-10 flex items-center justify-center w-7 h-7 rounded-full transition-all"
          style={{
            background: 'hsl(221 39% 11%)',
            border: '1px solid hsl(215 33% 22%)',
            color: active === total - 1 ? 'hsl(215 33% 22%)' : 'hsl(215 20% 68%)',
            cursor: active === total - 1 ? 'default' : 'pointer',
          }}
        >
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="flex justify-center gap-1.5 mt-3">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="rounded-full transition-all"
            style={{
              width: i === active ? 16 : 5,
              height: 5,
              background: i === active ? 'hsl(199 93% 60%)' : 'hsl(215 33% 22%)',
            }}
          />
        ))}
      </div>

      <p className="text-center font-mono text-xs mt-2" style={{ color: 'hsl(215 16% 50%)' }}>
        {screenshots[active].alt}
      </p>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader icon={<Layers size={16} />} label="projects" title="Things I've Built" />

        <div className="mt-10 space-y-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={i}
              data-testid={`project-card-${p.id}`}
              className="p-7 rounded-lg transition-colors duration-300 group"
              style={{ background: 'hsl(221 39% 11%)', border: '1px solid hsl(215 33% 17%)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.35)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 17%)';
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Terminal size={13} style={{ color: 'hsl(199 93% 60%)' }} />
                    <span className="font-mono text-xs" style={{ color: 'hsl(199 93% 60%)' }}>
                      featured project
                    </span>
                    {p.type === 'mobile' ? (
                      <span className="font-mono text-xs flex items-center gap-1 px-1.5 py-0.5 rounded" style={{ background: 'rgba(56,189,248,0.08)', color: 'hsl(199 93% 60%)', border: '1px solid rgba(56,189,248,0.18)' }}>
                        <Smartphone size={10} /> mobile
                      </span>
                    ) : (
                      <span className="font-mono text-xs flex items-center gap-1 px-1.5 py-0.5 rounded" style={{ background: 'rgba(56,189,248,0.08)', color: 'hsl(199 93% 60%)', border: '1px solid rgba(56,189,248,0.18)' }}>
                        <Globe size={10} /> web
                      </span>
                    )}
                    {p.year && (
                      <span className="font-mono text-xs" style={{ color: 'hsl(215 16% 50%)' }}>
                        · {p.year}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: 'hsl(210 40% 96%)' }}>
                    {p.title}
                  </h3>
                  <p className="font-mono text-sm mt-0.5" style={{ color: 'hsl(215 16% 58%)' }}>
                    {p.subtitle}
                  </p>
                </div>
                <div className="flex gap-3 ml-4 shrink-0 pt-1">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-github-${p.id}`}
                      title="View on GitHub"
                      className="transition-colors"
                      style={{ color: 'hsl(215 16% 55%)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(199 93% 60%)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(215 16% 55%)')}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-demo-${p.id}`}
                      title={p.demoLabel ?? 'View live site'}
                      className="font-mono text-xs flex items-center gap-1.5 px-2.5 py-1.5 rounded transition-all"
                      style={{ color: 'hsl(215 20% 68%)', border: '1px solid hsl(215 33% 22%)' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = 'hsl(199 93% 60%)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.4)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = 'hsl(215 20% 68%)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 22%)';
                      }}
                    >
                      <ExternalLink size={12} />
                      {p.demoLabel ?? 'Live Site'}
                    </a>
                  )}
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {p.bullets.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'hsl(215 25% 72%)' }}>
                    <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: 'hsl(199 93% 60%)' }} />
                    {point}
                  </li>
                ))}
              </ul>

              {'screenshots' in p && p.screenshots && p.screenshots.length > 0 && (
                <ScreenshotCarousel screenshots={p.screenshots} />
              )}

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded"
                    style={{
                      background: 'hsl(222 48% 11%)',
                      color: 'hsl(199 93% 60%)',
                      border: '1px solid rgba(56,189,248,0.2)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Placeholder card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="p-7 rounded-lg flex items-center justify-between"
            style={{ border: '1px dashed hsl(215 33% 17%)', color: 'hsl(215 16% 50%)' }}
          >
            <div>
              <p className="font-mono text-sm" style={{ color: 'hsl(215 16% 50%)' }}>
                More projects coming soon
              </p>
              <p className="font-mono text-xs mt-1" style={{ color: 'hsl(215 16% 40%)' }}>
                Currently working on new builds
              </p>
            </div>
            <Code2 size={20} style={{ color: 'hsl(215 33% 17%)' }} />
          </motion.div>
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
