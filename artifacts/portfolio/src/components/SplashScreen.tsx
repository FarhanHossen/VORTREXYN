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

            {/* ── Logo emblem — sits behind the text as a large backdrop ──
                Animates in before the letters so it's fully visible by the
                time VORTREXYN starts dropping in. A slow breathing pulse
                keeps it feeling alive throughout the splash hold.        */}
            <motion.div
              initial={{ opacity: 0, scale: 0.72, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.05, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="absolute pointer-events-none flex items-center justify-center"
              style={{ width: 560, height: 560 }}
            >
              {/* Gentle breathing pulse after the initial entrance */}
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ delay: 1.2, duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: '100%', height: '100%', opacity: 0.35 }}
              >
                <LogoEmblem />
              </motion.div>
            </motion.div>

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

/** ── LogoEmblem ───────────────────────────────────────────────────────────
 * SVG logo mark for VORTREXYN — gamer / developer / hacker aesthetic.
 *
 * Shape: a rotated-45° square (diamond) used as a tactical targeting
 * reticle — like an FPS scope overlay combined with a PCB schematic.
 * No V, no circle.
 *
 * Layers (back → front):
 *   1. Four corner bracket chevrons at each diamond vertex
 *   2. Four edge segments (broken lines between brackets)
 *   3. Edge midpoint slash ticks (perpendicular to each edge)
 *   4. Circuit branch traces at midpoints (IC pads)
 *   5. Full crosshairs (horizontal + vertical, gapped at centre)
 *   6. Crosshair tick marks (range-finder style)
 *   7. Inner rotated-square ring (45° smaller)
 *   8. Centre targeting rings + core dot
 *   9. Vertex accent dots
 */
function LogoEmblem() {
  /** Diamond vertices (rotated square, side length ~190px). */
  const V = { top: [150, 12], right: [288, 150], bottom: [150, 288], left: [12, 150] };

  /**
   * Crosshair tick positions along each arm.
   * Each number is the distance from the centre (150,150).
   */
  const hTicks = [38, 60, 82, 104];   // horizontal axis ticks
  const vTicks = [38, 60, 82, 104];   // vertical axis ticks

  return (
    <svg
      viewBox="0 0 300 300"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Primary diagonal gradient: cyan top-left → purple bottom-right */}
        <linearGradient id="dg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#9B5CFF" />
        </linearGradient>
        {/* Reversed for bottom-left → top-right elements */}
        <linearGradient id="dg-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#9B5CFF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>

      {/* ── 1. Corner bracket chevrons ─────────────────────────────────── */}
      {/* Top vertex — opens downward */}
      <path d="M 128 34 L 150 12 L 172 34"
        fill="none" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="square" />
      {/* Right vertex — opens leftward */}
      <path d="M 266 128 L 288 150 L 266 172"
        fill="none" stroke="#9B5CFF" strokeWidth="2.5" strokeLinecap="square" />
      {/* Bottom vertex — opens upward */}
      <path d="M 172 266 L 150 288 L 128 266"
        fill="none" stroke="#9B5CFF" strokeWidth="2.5" strokeLinecap="square" />
      {/* Left vertex — opens rightward */}
      <path d="M 34 172 L 12 150 L 34 128"
        fill="none" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="square" />

      {/* ── 2. Edge segments (connecting brackets, broken in middle) ─────── */}
      {/* Top-right edge (two halves with gap at midpoint) */}
      <line x1="177" y1="27"  x2="210" y2="60"  stroke="url(#dg)"   strokeWidth="1.4" opacity="0.75" />
      <line x1="240" y1="90"  x2="273" y2="123" stroke="url(#dg)"   strokeWidth="1.4" opacity="0.75" />
      {/* Bottom-right edge */}
      <line x1="273" y1="177" x2="240" y2="210" stroke="url(#dg-r)" strokeWidth="1.4" opacity="0.75" />
      <line x1="210" y1="240" x2="177" y2="273" stroke="url(#dg-r)" strokeWidth="1.4" opacity="0.75" />
      {/* Bottom-left edge */}
      <line x1="123" y1="273" x2="90"  y2="240" stroke="url(#dg-r)" strokeWidth="1.4" opacity="0.75" />
      <line x1="60"  y1="210" x2="27"  y2="177" stroke="url(#dg-r)" strokeWidth="1.4" opacity="0.75" />
      {/* Top-left edge */}
      <line x1="27"  y1="123" x2="60"  y2="90"  stroke="url(#dg)"   strokeWidth="1.4" opacity="0.75" />
      <line x1="90"  y1="60"  x2="123" y2="27"  stroke="url(#dg)"   strokeWidth="1.4" opacity="0.75" />

      {/* ── 3. Midpoint slash ticks (perpendicular to each edge) ─────────── */}
      {/* Each edge midpoint is at 45° angle; perpendicular tick is 90° to it */}
      {/* Top-right midpoint (219, 81): perpendicular direction (1,-1)/√2 */}
      <line x1="211" y1="73"  x2="227" y2="89"  stroke="#00E5FF" strokeWidth="2" opacity="0.7" />
      {/* Bottom-right midpoint (219, 219): perpendicular (1,1)/√2 */}
      <line x1="227" y1="211" x2="211" y2="227" stroke="#9B5CFF" strokeWidth="2" opacity="0.7" />
      {/* Bottom-left midpoint (81, 219) */}
      <line x1="73"  y1="227" x2="89"  y2="211" stroke="#9B5CFF" strokeWidth="2" opacity="0.7" />
      {/* Top-left midpoint (81, 81) */}
      <line x1="89"  y1="73"  x2="73"  y2="89"  stroke="#00E5FF" strokeWidth="2" opacity="0.7" />

      {/* ── 4. Circuit branch traces at midpoints (IC pad style) ──────────── */}
      {/* Top-right: branch going up-right */}
      <line x1="219" y1="81"  x2="234" y2="66"  stroke="#00E5FF" strokeWidth="0.9" opacity="0.55" />
      <rect  x="233" y="62"   width="5" height="5" fill="#00E5FF" opacity="0.5" transform="rotate(45,235.5,64.5)" />
      {/* Bottom-right: branch going down-right */}
      <line x1="219" y1="219" x2="234" y2="234" stroke="#9B5CFF" strokeWidth="0.9" opacity="0.55" />
      <rect  x="233" y="233"  width="5" height="5" fill="#9B5CFF" opacity="0.5" transform="rotate(45,235.5,235.5)" />
      {/* Bottom-left: branch going down-left */}
      <line x1="81"  y1="219" x2="66"  y2="234" stroke="#9B5CFF" strokeWidth="0.9" opacity="0.55" />
      <rect  x="62"  y="233"  width="5" height="5" fill="#9B5CFF" opacity="0.5" transform="rotate(45,64.5,235.5)" />
      {/* Top-left: branch going up-left */}
      <line x1="81"  y1="81"  x2="66"  y2="66"  stroke="#00E5FF" strokeWidth="0.9" opacity="0.55" />
      <rect  x="62"  y="62"   width="5" height="5" fill="#00E5FF" opacity="0.5" transform="rotate(45,64.5,64.5)" />

      {/* ── 5. Crosshairs (gapped at centre so the rings show) ─────────── */}
      {/* Left arm */}
      <line x1="12"  y1="150" x2="118" y2="150" stroke="#00E5FF" strokeWidth="1"   opacity="0.55" />
      {/* Right arm */}
      <line x1="182" y1="150" x2="288" y2="150" stroke="#9B5CFF" strokeWidth="1"   opacity="0.55" />
      {/* Top arm */}
      <line x1="150" y1="12"  x2="150" y2="118" stroke="#00E5FF" strokeWidth="1"   opacity="0.55" />
      {/* Bottom arm */}
      <line x1="150" y1="182" x2="150" y2="288" stroke="#9B5CFF" strokeWidth="1"   opacity="0.55" />

      {/* ── 6. Crosshair tick marks (range-finder / mil-dots) ─────────── */}
      {hTicks.map((d, i) => {
        const big = i % 2 === 0;
        const h   = big ? 7 : 4;
        return (
          <g key={i}>
            {/* Left side */}
            <line x1={150 - d} y1={150 - h} x2={150 - d} y2={150 + h}
              stroke="#00E5FF" strokeWidth={big ? 1.4 : 0.8} opacity="0.75" />
            {/* Right side */}
            <line x1={150 + d} y1={150 - h} x2={150 + d} y2={150 + h}
              stroke="#9B5CFF" strokeWidth={big ? 1.4 : 0.8} opacity="0.75" />
          </g>
        );
      })}
      {vTicks.map((d, i) => {
        const big = i % 2 === 0;
        const w   = big ? 7 : 4;
        return (
          <g key={i}>
            {/* Top side */}
            <line x1={150 - w} y1={150 - d} x2={150 + w} y2={150 - d}
              stroke="#00E5FF" strokeWidth={big ? 1.4 : 0.8} opacity="0.75" />
            {/* Bottom side */}
            <line x1={150 - w} y1={150 + d} x2={150 + w} y2={150 + d}
              stroke="#9B5CFF" strokeWidth={big ? 1.4 : 0.8} opacity="0.75" />
          </g>
        );
      })}

      {/* ── 7. Inner rotated-square ring ──────────────────────────────── */}
      <path
        d="M 150 100 L 200 150 L 150 200 L 100 150 Z"
        fill="none" stroke="url(#dg)" strokeWidth="1" opacity="0.4"
        strokeDasharray="6 4"
      />

      {/* ── 8. Centre targeting rings + core dot ──────────────────────── */}
      <circle cx="150" cy="150" r="28"
        fill="none" stroke="url(#dg)" strokeWidth="1.6" />
      <circle cx="150" cy="150" r="14"
        fill="none" stroke="rgba(0,229,255,0.5)" strokeWidth="0.8" />
      <circle cx="150" cy="150" r="4"
        fill="#00E5FF" />
      {/* Tiny glitch offset dot */}
      <circle cx="153" cy="147" r="3"
        fill="#ff00cc" opacity="0.25" />

      {/* ── 9. Vertex accent dots ──────────────────────────────────────── */}
      <circle cx={V.top[0]}    cy={V.top[1]}    r="3.5" fill="#00E5FF" opacity="0.9" />
      <circle cx={V.right[0]}  cy={V.right[1]}  r="3.5" fill="#9B5CFF" opacity="0.9" />
      <circle cx={V.bottom[0]} cy={V.bottom[1]} r="3.5" fill="#9B5CFF" opacity="0.9" />
      <circle cx={V.left[0]}   cy={V.left[1]}   r="3.5" fill="#00E5FF" opacity="0.9" />
    </svg>
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
