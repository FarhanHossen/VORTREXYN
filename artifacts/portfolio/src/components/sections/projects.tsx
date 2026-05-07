import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { Github, ExternalLink, Terminal, Code2, Layers, Smartphone, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const SLOT_SPACING = 158;

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

// Each image sits at a fixed position on the track: virtualPos * SLOT_SPACING.
// trackX is the motion value for the track offset (starts at 0, goes negative as you advance).
// screenX of image at virtualPos = trackX + virtualPos * SLOT_SPACING.
// By never jumping trackX (only animating it), there are zero position discontinuities.
function SlotImage({
  trackX,
  virtualPos,
  screenshot,
  onSlotClick,
}: {
  trackX: MotionValue<number>;
  virtualPos: number;
  screenshot: { src: string; alt: string };
  onSlotClick: () => void;
}) {
  const screenX     = useTransform(trackX, (tx) => tx + virtualPos * SLOT_SPACING);
  const centeredness = useTransform(screenX, [-SLOT_SPACING, 0, SLOT_SPACING], [0, 1, 0], { clamp: true });

  const opacity   = useTransform(centeredness, [0, 1], [0.32, 1]);
  const blurPx    = useTransform(centeredness, [0, 1], [4, 0]);
  const filter    = useTransform(blurPx, (b) => `blur(${b}px)`);
  const imgWidth  = useTransform(centeredness, [0, 1], [106, 164]);
  const imgHeight = useTransform(centeredness, [0, 1], [190, 292]);
  const borderA   = useTransform(centeredness, [0, 1], [0.1, 0.55]);
  const border    = useTransform(borderA, (a) => `2px solid rgba(56,189,248,${a})`);
  const shadow    = useTransform(centeredness, [0, 1], ['0 0 0px rgba(56,189,248,0)', '0 0 30px rgba(56,189,248,0.2)']);
  const halfW     = useTransform(imgWidth,  (w) => -w / 2);
  const halfH     = useTransform(imgHeight, (h) => -h / 2);

  const isCenter = virtualPos === Math.round(-trackX.get() / SLOT_SPACING);

  return (
    <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
      <motion.div
        style={{
          x: useTransform([screenX, halfW] as MotionValue[], ([sx, hw]: number[]) => sx + hw),
          y: halfH,
          opacity,
          filter,
          width: imgWidth,
          height: imgHeight,
          border,
          boxShadow: shadow,
          borderRadius: 16,
          overflow: 'hidden',
          background: 'hsl(222 48% 7%)',
          cursor: isCenter ? 'grab' : 'pointer',
        }}
        onClick={() => !isCenter && onSlotClick()}
      >
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top', display: 'block' }}
          draggable={false}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

function ScreenshotCarousel({ screenshots }: { screenshots: { src: string; alt: string }[] }) {
  // centerVirtual is an unbounded integer; actual image = ((v % total) + total) % total
  const [centerVirtual, setCenterVirtual] = useState(0);
  const trackX      = useMotionValue(0);   // rest position = -centerVirtual * SLOT_SPACING
  const isDragging  = useRef(false);
  const startX      = useRef(0);
  const baseTrackX  = useRef(0);           // trackX value at pointer-down
  const busy        = useRef(false);
  const total       = screenshots.length;

  const imgAt = (v: number) => ((v % total) + total) % total;
  const activeImg   = imgAt(centerVirtual);

  const navigate = (dir: -1 | 1) => {
    if (busy.current) return;
    busy.current = true;
    const target = -centerVirtual * SLOT_SPACING + dir * SLOT_SPACING;
    animate(trackX, target, {
      type: 'tween',
      duration: 0.34,
      ease: [0.25, 0.46, 0.45, 0.94],
      onComplete: () => {
        // trackX is now at -(centerVirtual - dir) * SLOT_SPACING — no jump needed
        setCenterVirtual((v) => v - dir);
        busy.current = false;
      },
    });
  };

  const prev = () => navigate(1);
  const next = () => navigate(-1);

  const onPointerDown = (e: React.PointerEvent) => {
    if (busy.current) return;
    isDragging.current = true;
    startX.current = e.clientX;
    baseTrackX.current = trackX.get();
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - startX.current;
    // Slight resistance at extremes
    trackX.set(baseTrackX.current + delta * 0.92);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 50) {
      navigate(delta > 0 ? 1 : -1);
    } else {
      animate(trackX, baseTrackX.current, { type: 'spring', stiffness: 380, damping: 36 });
    }
  };

  const arrowBtn = (onClick: () => void, side: 'left' | 'right') => (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className="absolute z-20 flex items-center justify-center w-8 h-8 rounded-full transition-all"
      style={{
        [side]: 4,
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'hsl(221 39% 14%)',
        border: '1px solid hsl(215 33% 22%)',
        color: 'hsl(215 20% 68%)',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'hsl(199 93% 60%)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.4)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'hsl(215 20% 68%)'; (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 22%)'; }}
    >
      {side === 'left' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
    </button>
  );

  return (
    <div className="mb-6 select-none">
      <div
        className="relative"
        style={{ height: 330, overflow: 'hidden', touchAction: 'pan-y', cursor: 'grab' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {arrowBtn(prev, 'left')}

        {/* Render left, center, and right virtual slots — positions are stable on the track */}
        <SlotImage trackX={trackX} virtualPos={centerVirtual - 1} screenshot={screenshots[imgAt(centerVirtual - 1)]} onSlotClick={prev} />
        <SlotImage trackX={trackX} virtualPos={centerVirtual}     screenshot={screenshots[imgAt(centerVirtual)]}     onSlotClick={() => {}} />
        <SlotImage trackX={trackX} virtualPos={centerVirtual + 1} screenshot={screenshots[imgAt(centerVirtual + 1)]} onSlotClick={next} />

        {arrowBtn(next, 'right')}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (busy.current) return;
              const diff = ((i - activeImg) + total) % total;
              const shortDiff = diff > total / 2 ? diff - total : diff;
              if (shortDiff === 0) return;
              navigate(shortDiff > 0 ? -1 : 1);
            }}
            className="rounded-full transition-all"
            style={{
              width: i === activeImg ? 18 : 5,
              height: 5,
              background: i === activeImg ? 'hsl(199 93% 60%)' : 'hsl(215 33% 22%)',
            }}
          />
        ))}
      </div>

      {/* Caption */}
      <p className="text-center font-mono text-xs mt-2" style={{ color: 'hsl(215 16% 50%)' }}>
        {screenshots[activeImg].alt}
        <span style={{ color: 'hsl(215 33% 28%)' }}> · {activeImg + 1}/{total}</span>
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
