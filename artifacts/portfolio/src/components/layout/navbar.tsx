import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X, ChevronDown } from 'lucide-react';

const PRIMARY_ITEMS = [
  { id: 'home', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const MORE_ITEMS = [
  { id: 'personal-info', label: 'Personal Info' },
  { id: 'social-profiles', label: 'Social Profiles' },
  { id: 'education', label: 'Education' },
  { id: 'licenses', label: 'Licences' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'cocurricular', label: 'Activities' },
];

const ALL_ITEMS = [...PRIMARY_ITEMS, ...MORE_ITEMS];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
    setMoreOpen(false);
  };

  const isMoreActive = MORE_ITEMS.some((i) => i.id === activeSection);

  const navBtnStyle = (id: string) => ({
    color: activeSection === id ? 'hsl(199 93% 60%)' : 'hsl(215 16% 60%)',
  });

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(15,23,42,0.92)' : 'rgba(15,23,42,0.6)',
          backdropFilter: 'blur(14px)',
          borderBottom: scrolled ? '1px solid hsl(215 33% 17%)' : '1px solid transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">

          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="font-mono text-sm font-medium flex items-center select-none shrink-0"
            style={{ color: 'hsl(199 93% 60%)' }}
          >
            <span style={{ color: 'hsl(199 93% 60%)' }}>farhan</span>
            <span style={{ color: 'hsl(215 16% 47%)' }}>@portfolio</span>
            <span style={{ color: '#F472B6' }}>:~$</span>
            <span
              className="inline-block w-1.5 h-4 ml-1 align-middle rounded-sm"
              style={{ background: 'hsl(199 93% 60%)', animation: 'pulse 1.2s cubic-bezier(0.4,0,0.6,1) infinite' }}
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {PRIMARY_ITEMS.map((item) => (
              <button
                key={item.id}
                data-testid={`nav-${item.id}`}
                onClick={() => scrollTo(item.id)}
                className="font-mono text-xs px-3 py-1.5 rounded transition-colors duration-200"
                style={navBtnStyle(item.id)}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id)
                    (e.currentTarget as HTMLElement).style.color = 'hsl(210 40% 96%)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id)
                    (e.currentTarget as HTMLElement).style.color = 'hsl(215 16% 60%)';
                }}
              >
                <span style={{ color: 'hsl(199 93% 60%)' }}>./</span>{item.label}
              </button>
            ))}

            {/* More dropdown */}
            <div ref={moreRef} className="relative">
              <button
                onClick={() => setMoreOpen((v) => !v)}
                className="font-mono text-xs px-3 py-1.5 rounded flex items-center gap-1 transition-colors duration-200"
                style={{ color: isMoreActive ? 'hsl(199 93% 60%)' : 'hsl(215 16% 60%)' }}
                onMouseEnter={(e) => {
                  if (!isMoreActive)
                    (e.currentTarget as HTMLElement).style.color = 'hsl(210 40% 96%)';
                }}
                onMouseLeave={(e) => {
                  if (!isMoreActive)
                    (e.currentTarget as HTMLElement).style.color = 'hsl(215 16% 60%)';
                }}
              >
                More
                <ChevronDown
                  size={11}
                  style={{ transform: moreOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1.5 py-1 rounded-lg min-w-[140px]"
                    style={{
                      background: 'hsl(221 39% 11%)',
                      border: '1px solid hsl(215 33% 17%)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                    }}
                  >
                    {MORE_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className="w-full text-left font-mono text-xs px-4 py-2 transition-colors duration-150"
                        style={{ color: activeSection === item.id ? 'hsl(199 93% 60%)' : 'hsl(215 16% 60%)' }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = 'hsl(210 40% 96%)';
                          (e.currentTarget as HTMLElement).style.background = 'rgba(56,189,248,0.05)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            activeSection === item.id ? 'hsl(199 93% 60%)' : 'hsl(215 16% 60%)';
                          (e.currentTarget as HTMLElement).style.background = 'transparent';
                        }}
                      >
                        <span style={{ color: 'hsl(199 93% 60%)' }}>./</span>{item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop GitHub + mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/FarhanHossen"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-github"
              className="hidden md:flex font-mono text-xs px-3 py-1.5 rounded items-center gap-1.5 transition-all duration-200"
              style={{ border: '1px solid hsl(215 33% 22%)', color: 'hsl(215 16% 60%)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'hsl(199 93% 60%)';
                (e.currentTarget as HTMLElement).style.borderColor = 'hsl(199 93% 60%)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'hsl(215 16% 60%)';
                (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 22%)';
              }}
            >
              <Github size={13} /> GitHub
            </a>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded transition-colors duration-200"
              style={{ color: 'hsl(215 16% 60%)' }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 py-4"
            style={{
              background: 'rgba(15,23,42,0.97)',
              backdropFilter: 'blur(14px)',
              borderBottom: '1px solid hsl(215 33% 17%)',
            }}
          >
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-1">
              {ALL_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="font-mono text-sm text-left py-2.5 px-3 rounded transition-colors duration-150"
                  style={{ color: activeSection === item.id ? 'hsl(199 93% 60%)' : 'hsl(215 16% 60%)' }}
                >
                  <span style={{ color: 'hsl(199 93% 60%)' }}>./</span>{item.label}
                </button>
              ))}
              <div className="mt-2 pt-2" style={{ borderTop: '1px solid hsl(215 33% 17%)' }}>
                <a
                  href="https://github.com/FarhanHossen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm flex items-center gap-2 py-2.5 px-3 rounded"
                  style={{ color: 'hsl(215 16% 60%)' }}
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
