import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const SKILL_GROUPS: { category: string; symbol: string; skills: string[]; accent: string }[] = [
  {
    category: 'Programming Languages',
    symbol: '{ }',
    skills: ['Java', 'Dart', 'C#', 'Swift', 'C', 'C++', 'TypeScript', 'SQL'],
    accent: '#00E5FF',
  },
  {
    category: 'Scripting & Markup',
    symbol: '</>',
    skills: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'LaTeX'],
    accent: '#9B5CFF',
  },
  {
    category: 'Frameworks & Platforms',
    symbol: '[ ]',
    skills: ['Flutter', '.NET', 'React.js', 'React Native', 'Expo', 'Node.js', 'Express', 'Tailwind CSS'],
    accent: '#00E5FF',
  },
  {
    category: 'Web & Mobile',
    symbol: '◈',
    skills: ['Website Development', 'Android Application Development', 'Responsive UI/UX', 'RESTful APIs', 'Cross-platform Development', 'iOS Mobile Development', 'Third-party Integrations'],
    accent: '#9B5CFF',
  },
  {
    category: 'Databases & Data',
    symbol: '⊞',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firestore', 'Data Modelling', 'Performance Optimisation'],
    accent: '#00E5FF',
  },
  {
    category: 'Cloud & DevOps',
    symbol: '☁',
    skills: ['Firebase', 'AWS', 'Azure', 'Cloudflare', 'Netlify', 'Git'],
    accent: '#9B5CFF',
  },
  {
    category: 'Systems & Networking',
    symbol: '⊟',
    skills: ['Windows', 'Linux (Ubuntu/Kali/Unix)', 'IP Addressing', 'Subnetting', 'Routing & Switching'],
    accent: '#00E5FF',
  },
  {
    category: 'Core Concepts',
    symbol: '∑',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Game Logic Development', 'Real-Time Systems'],
    accent: '#9B5CFF',
  },
  {
    category: 'Tools & Software',
    symbol: '⚙',
    skills: [
      'Visual Studio', 'Android Studio', 'EAS', 'App Store Connect',
      'Overleaf', 'Microsoft Office', 'VMware', 'VirtualBox',
      'Cisco Packet Tracer', 'Agile SDLC', 'OpenAI API', 'PayPal SDK',
    ],
    accent: '#00E5FF',
  },
  {
    category: 'AI',
    symbol: '✦',
    skills: ['GPT', 'Claude', 'Replit'],
    accent: '#9B5CFF',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: 'easeOut' },
  }),
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader icon={<Wrench size={16} />} label="skills" title="Technical Toolkit" />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="p-6 rounded-2xl backdrop-blur-xl transition-all duration-300 group relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border = `1px solid ${group.accent}33`;
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              {/* Subtle top glow on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${group.accent}66, transparent)` }}
              />

              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-sm font-medium" style={{ color: group.accent }}>
                  {group.symbol}
                </span>
                <h3 className="font-mono text-sm font-semibold" style={{ color: 'rgba(148,163,184,0.8)' }}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1.5 rounded-md transition-colors"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      color: 'rgba(203,213,225,0.85)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
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
        <span style={{ color: '#00E5FF' }}>{icon}</span>
        <span className="font-mono text-xs" style={{ color: 'rgba(100,116,139,0.9)' }}>
          // {label}
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'hsl(210 40% 96%)' }}>
        {title}
      </h2>
      <div className="mt-3 h-px w-12" style={{ background: 'linear-gradient(90deg, #9B5CFF, #00E5FF)' }} />
    </motion.div>
  );
}
