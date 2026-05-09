/**
 * navbar.tsx — Fixed top navigation bar.
 *
 * Features:
 *  - Logo ("FARHAN." with pulsing purple cursor) that scrolls to Hero
 *  - Desktop nav: primary links + a "More" dropdown for secondary sections
 *  - Active section highlighting driven by scroll position tracking
 *  - Glass-morphism background that solidifies (higher opacity) on scroll
 *  - Mobile hamburger drawer that lists all sections including More items
 *  - GitHub external link button
 *
 * Navigation items are split into two groups:
 *   PRIMARY_ITEMS — always visible in the desktop nav bar
 *   MORE_ITEMS    — hidden behind the "More" dropdown (less-visited sections)
 *
 * Active section detection:
 *   A passive scroll listener checks which section's bounding rect
 *   straddles the y=120px threshold. Whichever section ID matches is
 *   set as `activeSection`, which highlights the corresponding nav button.
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X, ChevronDown } from 'lucide-react';

/** Primary navigation items shown in the desktop navbar at all times. */
const PRIMARY_ITEMS = [
  { id: 'home',       label: 'About'      },
  { id: 'projects',   label: 'Projects'   },
  { id: 'skills',     label: 'Skills'     },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact'    },
];

/**
 * Secondary navigation items shown only in the "More" dropdown (desktop)
 * and the full list (mobile). These are less critical sections that don't
 * need prime navbar real estate.
 */
const MORE_ITEMS = [
  { id: 'personal-info',    label: 'Personal Info'   },
  { id: 'social-profiles',  label: 'Social Profiles' },
  { id: 'education',        label: 'Education'       },
  { id: 'licenses',         label: 'Licences'        },
  { id: 'achievements',     label: 'Achievements'    },
  { id: 'cocurricular',     label: 'Activities'      },
];

/** Combined list used for scroll-tracking and the mobile drawer. */
const ALL_ITEMS = [...PRIMARY_ITEMS, ...MORE_ITEMS];

export function Navbar() {
  /** True when the user has scrolled more than 50px — triggers glass solidification. */
  const [scrolled, setScrolled] = useState(false);

  /** The section ID currently in the viewport viewport (used to highlight nav). */
  const [activeSection, setActiveSection] = useState('home');

  /** Whether the mobile full-screen drawer is open. */
  const [mobileOpen, setMobileOpen] = useState(false);

  /** Whether the desktop "More" dropdown is open. */
  const [moreOpen, setMoreOpen] = useState(false);

  /** Ref attached to the "More" button + dropdown container so clicks
      outside it can close the dropdown (see click-outside handler below). */
  const moreRef = useRef<HTMLDivElement>(null);

  /**
   * Scroll listener — two responsibilities:
   *  1. Toggle `scrolled` state (for navbar glass opacity change)
   *  2. Find which section is currently at y=120px and update activeSection
   *
   * Uses `{ passive: true }` so the browser can still optimize scrolling
   * performance without waiting for this handler.
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find the first section whose element straddles the 120px threshold.
      const current = ALL_ITEMS.map((n) => n.id).find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Click-outside handler — closes the "More" dropdown when the user
   * clicks anywhere outside the moreRef container.
   * Uses `mousedown` (not `click`) so it fires before focus shifts.
   */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /**
   * scrollTo — Smooth-scrolls to a section by its ID, then closes both
   * the mobile drawer and the More dropdown so they don't linger.
   */
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
    setMoreOpen(false);
  };

  /**
   * isMoreActive — True when the currently active section is one of the
   * MORE_ITEMS. Used to highlight the "More" button when the user is in
   * a secondary section (e.g. Education, Achievements).
   */
  const isMoreActive = MORE_ITEMS.some((i) => i.id === activeSection);

  /**
   * navBtnStyle — Returns inline color styles for a primary nav button.
   * Active section = cyan (#00E5FF), others = muted grey.
   */
  const navBtnStyle = (id: string): React.CSSProperties => ({
    color: activeSection === id ? '#00E5FF' : 'rgba(148,163,184,0.7)',
  });

  return (
    <>
      {/* ── Fixed header bar ────────────────────────────────────────────
          Slides down from y=-60 on mount (framer-motion initial animation).
          Background opacity increases when `scrolled` is true.
          A subtle purple bottom border appears after scrolling to separate
          the navbar from the content below.                             */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(5,10,24,0.88)' : 'rgba(5,10,24,0.55)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(155,92,255,0.15)' : '1px solid transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">

          {/* Logo — clicking scrolls back to the top (Hero section).
              "FARHAN" in light-weight white + purple dot + blinking
              cursor block to give it a terminal/code aesthetic.        */}
          <button
            onClick={() => scrollTo('home')}
            className="font-mono text-sm font-medium flex items-center select-none shrink-0 tracking-widest"
          >
            <span style={{ color: '#ffffff', fontWeight: 300 }}>FARHAN</span>
            <span style={{ color: '#9B5CFF', fontWeight: 700 }}>.</span>
            {/* Blinking cursor block — uses CSS `pulse` animation */}
            <span
              className="inline-block w-1.5 h-4 ml-1.5 align-middle rounded-sm"
              style={{ background: '#9B5CFF', animation: 'pulse 1.2s cubic-bezier(0.4,0,0.6,1) infinite', opacity: 0.8 }}
            />
          </button>

          {/* ── Desktop navigation (hidden on mobile) ─────────────────
              Primary items rendered as buttons with hover/active colors.
              Each label is prefixed with a purple "./" to hint at the
              filesystem/terminal theme.                                */}
          <nav className="hidden md:flex items-center gap-1">
            {PRIMARY_ITEMS.map((item) => (
              <button
                key={item.id}
                data-testid={`nav-${item.id}`}
                onClick={() => scrollTo(item.id)}
                className="font-mono text-xs px-3 py-1.5 rounded transition-colors duration-200"
                style={navBtnStyle(item.id)}
                onMouseEnter={(e) => {
                  // Brighten to white on hover only if not the active section
                  if (activeSection !== item.id)
                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id)
                    (e.currentTarget as HTMLElement).style.color = 'rgba(148,163,184,0.7)';
                }}
              >
                <span style={{ color: '#9B5CFF' }}>./</span>{item.label}
              </button>
            ))}

            {/* More dropdown — wraps MORE_ITEMS in a popover.
                The dropdown animates in with a subtle scale + fade.
                Click-outside is handled by the useEffect above.      */}
            <div ref={moreRef} className="relative">
              <button
                onClick={() => setMoreOpen((v) => !v)}
                className="font-mono text-xs px-3 py-1.5 rounded flex items-center gap-1 transition-colors duration-200"
                style={{ color: isMoreActive ? '#00E5FF' : 'rgba(148,163,184,0.7)' }}
                onMouseEnter={(e) => {
                  if (!isMoreActive)
                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  if (!isMoreActive)
                    (e.currentTarget as HTMLElement).style.color = 'rgba(148,163,184,0.7)';
                }}
              >
                More
                {/* Chevron rotates 180° when dropdown is open */}
                <ChevronDown
                  size={11}
                  style={{ transform: moreOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                />
              </button>

              {/* AnimatePresence allows the dropdown to animate out on close */}
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1.5 py-1 rounded-xl min-w-[150px]"
                    style={{
                      background: 'rgba(5,10,24,0.95)',
                      border: '1px solid rgba(155,92,255,0.2)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,255,0.05)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {MORE_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className="w-full text-left font-mono text-xs px-4 py-2 transition-colors duration-150"
                        style={{ color: activeSection === item.id ? '#00E5FF' : 'rgba(148,163,184,0.7)' }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = '#ffffff';
                          (e.currentTarget as HTMLElement).style.background = 'rgba(155,92,255,0.08)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            activeSection === item.id ? '#00E5FF' : 'rgba(148,163,184,0.7)';
                          (e.currentTarget as HTMLElement).style.background = 'transparent';
                        }}
                      >
                        <span style={{ color: '#9B5CFF' }}>./</span>{item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* GitHub link (desktop) + mobile hamburger button */}
          <div className="flex items-center gap-3">

            {/* GitHub — external link, opens in new tab.
                Styled as a ghost pill button; turns cyan on hover. */}
            <a
              href="https://github.com/FarhanHossen"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-github"
              className="hidden md:flex font-mono text-xs px-3 py-1.5 rounded-lg items-center gap-1.5 transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(148,163,184,0.7)', background: 'rgba(255,255,255,0.03)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#00E5FF';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.35)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'rgba(148,163,184,0.7)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <Github size={13} /> GitHub
            </a>

            {/* Hamburger / close toggle — visible only on mobile (md:hidden).
                Toggles between Menu (☰) and X icons depending on state. */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded transition-colors duration-200"
              style={{ color: 'rgba(148,163,184,0.7)' }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer ───────────────────────────────────────────────
          Full-width panel that drops below the navbar when the hamburger
          is pressed. Lists ALL_ITEMS (primary + more) plus the GitHub link.
          Animated with framer-motion (fade + slide from y=-8).
          Closes automatically after scrollTo() is called.             */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 py-4"
            style={{
              background: 'rgba(5,10,24,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(155,92,255,0.15)',
            }}
          >
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-1">
              {ALL_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="font-mono text-sm text-left py-2.5 px-3 rounded transition-colors duration-150"
                  style={{ color: activeSection === item.id ? '#00E5FF' : 'rgba(148,163,184,0.7)' }}
                >
                  <span style={{ color: '#9B5CFF' }}>./</span>{item.label}
                </button>
              ))}

              {/* GitHub link inside mobile drawer — below a purple divider */}
              <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(155,92,255,0.12)' }}>
                <a
                  href="https://github.com/FarhanHossen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm flex items-center gap-2 py-2.5 px-3 rounded"
                  style={{ color: 'rgba(148,163,184,0.7)' }}
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
