/**
 * SplashScreen.tsx — Animated VORTREXYN splash screen.
 *
 * Shown once on first load before the main portfolio is revealed.
 * Calls `onDone()` after the exit animation completes so the parent
 * can unmount this component and show the real content.
 *
 * Animation timeline (approximate):
 *   0.00s  Background grid + glowing orb fade in
 *   0.10s  Corner HUD brackets slide in
 *   0.20s  Horizontal scan line sweeps left → right
 *   0.40s  VORTREXYN letters drop in one-by-one (staggered ~80ms each)
 *   1.50s  Subtitle "ONLINE GROCERY STORE" types/fades in
 *   1.90s  Bottom status line appears
 *   2.60s  ── hold ──
 *   3.00s  Everything scales up + fades to black (exit)
 *   3.60s  onDone() fires → parent unmounts this component
 */

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = 'VORTREXYN'.split('');

/** Total time (ms) before onDone is called. Matches exit animation length. */
const SPLASH_DURATION = 3600;

/** Time (ms) at which the exit animation begins. */
const EXIT_START = 3000;

interface SplashScreenProps {
  onDone: () => void;
}

export function SplashScreen({ onDone }: SplashScreenProps) {
  /** Controls AnimatePresence — flipping to false triggers the exit anim. */
  const [visible, setVisible] = useState(true);
  const doneRef = useRef(false);

  useEffect(() => {
    // Start the exit animation slightly before calling onDone so the
    // fade-out plays fully before the component is unmounted.
    const exitTimer = setTimeout(() => setVisible(false), EXIT_START);
    const doneTimer = setTimeout(() => {
      if (!doneRef.current) {
        doneRef.current = true;
        onDone();
      }
    }, SPLASH_DURATION);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    // Fixed overlay — sits on top of everything, z-[9999] ensures it's
    // above any portal/modal content from the app below.
    <div className="fixed inset-0 z-[9999] overflow-hidden" style={{ background: '#050A18' }}>

      {/* ── Starfield background ────────────────────────────────────────
          A handful of tiny static dots scattered across the viewport to
          suggest deep space without the cost of canvas-based particles. */}
      <Stars />

      {/* ── Radial glow orb behind the main logo ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 40% at 50% 48%, rgba(0,229,255,0.10) 0%, rgba(155,92,255,0.07) 40%, transparent 70%)',
        }}
      />

      {/* ── Subtle grid overlay ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <AnimatePresence>
        {visible && (
          <motion.div
            key="splash-content"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.06, filter: 'blur(8px)' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 1, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            {/* ── Corner HUD brackets ──────────────────────────────────── */}
            <CornerBracket position="top-left" delay={0.1} />
            <CornerBracket position="top-right" delay={0.15} />
            <CornerBracket position="bottom-left" delay={0.2} />
            <CornerBracket position="bottom-right" delay={0.25} />

            {/* ── Horizontal scan line ─────────────────────────────────── */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0.9 }}
              animate={{ scaleX: 1, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: 'easeInOut' }}
              className="absolute top-1/2 left-0 right-0 h-px origin-left"
              style={{
                background:
                  'linear-gradient(90deg, transparent, #00E5FF, #9B5CFF, transparent)',
                boxShadow: '0 0 12px rgba(0,229,255,0.6)',
              }}
            />

            {/* ── VORTREXYN letter-by-letter reveal ────────────────────── */}
            <div
              className="flex items-end select-none"
              style={{ perspective: '800px' }}
            >
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial={{
                    opacity: 0,
                    y: -80,
                    rotateX: 90,
                    filter: 'blur(10px)',
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    delay: 0.38 + i * 0.075,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-mono font-black leading-none"
                  style={{
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    // Gradient text: cyan → white → purple across the word
                    background: `linear-gradient(
                      180deg,
                      hsl(${190 + i * 6}, 100%, 80%) 0%,
                      hsl(${195 + i * 7}, 93%, 60%) 40%,
                      hsl(${260 + i * 5}, 80%, 70%) 100%
                    )`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    // Subtle text shadow for glow (doesn't apply to gradient
                    // text in all browsers but adds atmosphere via the wrapper)
                    filter: i === 0 || i === 8
                      ? 'drop-shadow(0 0 20px rgba(0,229,255,0.5))'
                      : 'drop-shadow(0 0 12px rgba(155,92,255,0.3))',
                    display: 'inline-block',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* ── Glowing underline beneath the logo ───────────────────── */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 h-px w-full max-w-lg origin-left"
              style={{
                background:
                  'linear-gradient(90deg, transparent, #00E5FF 30%, #9B5CFF 70%, transparent)',
                boxShadow: '0 0 16px rgba(0,229,255,0.4)',
              }}
            />

            {/* ── Pulsing accent dots ───────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="flex items-center gap-3 mt-6"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    delay: 2.0 + i * 0.25,
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 0.4,
                  }}
                  className="block rounded-full"
                  style={{
                    width: 5,
                    height: 5,
                    background: i === 1 ? '#9B5CFF' : '#00E5FF',
                    boxShadow: `0 0 8px ${i === 1 ? '#9B5CFF' : '#00E5FF'}`,
                  }}
                />
              ))}
            </motion.div>

            {/* ── Bottom status line ────────────────────────────────────── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="absolute bottom-8 font-mono text-xs select-none"
              style={{ color: 'rgba(0,229,255,0.25)' }}
            >
              © VORTREXYN · ALL RIGHTS RESERVED
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** ── Stars ────────────────────────────────────────────────────────────────
 * Renders a fixed set of random-position star dots as a lightweight
 * starfield background. Uses a seeded pseudo-random sequence so the
 * pattern is always the same (no hydration mismatch).
 */
function Stars() {
  // Simple deterministic pseudo-random to avoid Math.random() producing
  // different layouts between renders.
  const stars = Array.from({ length: 80 }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const x = (seed / 233280) * 100;
    const seed2 = (seed * 9301 + 49297) % 233280;
    const y = (seed2 / 233280) * 100;
    const seed3 = (seed2 * 9301 + 49297) % 233280;
    const size = 1 + (seed3 / 233280) * 1.5;
    const opacity = 0.15 + (seed3 / 233280) * 0.45;
    return { x, y, size, opacity };
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: s.opacity }}
          transition={{ delay: Math.random() * 0.5, duration: 1 }}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: i % 5 === 0 ? '#9B5CFF' : '#ffffff',
          }}
        />
      ))}
    </div>
  );
}

/** ── CornerBracket ────────────────────────────────────────────────────────
 * HUD-style L-shaped bracket rendered in each corner of the screen.
 * Slides in from outside the corner with a slight delay.
 */
function CornerBracket({
  position,
  delay,
}: {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}) {
  const isTop    = position.startsWith('top');
  const isLeft   = position.endsWith('left');

  const initial = {
    opacity: 0,
    x: isLeft ? -20 : 20,
    y: isTop  ? -20 : 20,
  };

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="absolute"
      style={{
        top:    isTop    ? 24 : undefined,
        bottom: !isTop   ? 24 : undefined,
        left:   isLeft   ? 24 : undefined,
        right:  !isLeft  ? 24 : undefined,
        width:  32,
        height: 32,
        // Two borders drawn as box shadows on pseudo-like divs via outline trick:
        borderTop:    isTop  ? '2px solid rgba(0,229,255,0.4)' : 'none',
        borderBottom: !isTop ? '2px solid rgba(0,229,255,0.4)' : 'none',
        borderLeft:   isLeft  ? '2px solid rgba(0,229,255,0.4)' : 'none',
        borderRight:  !isLeft ? '2px solid rgba(0,229,255,0.4)' : 'none',
      }}
    />
  );
}
