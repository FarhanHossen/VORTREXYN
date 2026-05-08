import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'licenses', label: 'Licences' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'cocurricular', label: 'Activities' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((n) => n.id);
      const current = sections.find((section) => {
        const el = document.getElementById(section);
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(15,23,42,0.9)' : 'rgba(15,23,42,0.6)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid hsl(215 33% 17%)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Terminal prompt logo */}
        <button
          onClick={() => scrollTo('home')}
          className="font-mono text-sm font-medium flex items-center gap-0 select-none"
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

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className="font-mono text-xs transition-colors duration-200"
              style={{
                color: activeSection === item.id ? 'hsl(199 93% 60%)' : 'hsl(215 16% 60%)',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id)
                  (e.currentTarget as HTMLElement).style.color = 'hsl(210 40% 96%)';
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id)
                  (e.currentTarget as HTMLElement).style.color = 'hsl(215 16% 60%)';
              }}
            >
              <span style={{ color: 'hsl(199 93% 60%)' }}>./</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* GitHub button */}
        <a
          href="https://github.com/FarhanHossen"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nav-github"
          className="font-mono text-xs px-3 py-1.5 rounded flex items-center gap-1.5 transition-all duration-200"
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
      </div>
    </motion.header>
  );
}
