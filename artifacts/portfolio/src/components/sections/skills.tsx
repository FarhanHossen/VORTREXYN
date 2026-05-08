import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const SKILL_GROUPS: { category: string; symbol: string; skills: string[] }[] = [
  {
    category: 'Programming Languages',
    symbol: '{ }',
    skills: ['Java', 'Dart', 'C#', 'Swift', 'C', 'C++', 'TypeScript', 'SQL'],
  },
  {
    category: 'Scripting & Markup',
    symbol: '</>',
    skills: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'LaTeX'],
  },
  {
    category: 'Frameworks & Platforms',
    symbol: '[ ]',
    skills: ['Flutter', '.NET', 'React.js', 'React Native', 'Expo', 'Node.js', 'Express', 'NestJS', 'Angular.js', 'Django', 'Tailwind CSS'],
  },
  {
    category: 'Web & Mobile',
    symbol: '◈',
    skills: ['Responsive UI/UX', 'RESTful APIs', 'Cross-platform Development', 'iOS Mobile Development', 'Third-party Integrations'],
  },
  {
    category: 'Databases & Data',
    symbol: '⊞',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firestore', 'Data Modelling', 'Performance Optimisation'],
  },
  {
    category: 'Cloud & DevOps',
    symbol: '☁',
    skills: ['Firebase', 'GCP App Engine', 'Cloud Functions', 'AWS', 'Azure', 'Docker', 'Cloudflare', 'Git'],
  },
  {
    category: 'Systems & Networking',
    symbol: '⊟',
    skills: ['Windows', 'Linux (Ubuntu/Kali/Unix)', 'IP Addressing', 'Subnetting', 'Routing & Switching'],
  },
  {
    category: 'Testing & Quality',
    symbol: '✓',
    skills: ['Debugging', 'Unit Testing', 'Integration Testing', 'Automated Testing', 'PyTest', 'Code Reviews', 'Documentation'],
  },
  {
    category: 'Core Concepts',
    symbol: '∑',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Game Logic Development', 'Real-Time Systems'],
  },
  {
    category: 'Tools & Software',
    symbol: '⚙',
    skills: [
      'Visual Studio', 'Android Studio', 'EAS', 'App Store Connect',
      'Overleaf', 'Microsoft Office', 'VMware', 'VirtualBox',
      'Cisco Packet Tracer', 'Agile SDLC', 'OpenAI API', 'PayPal SDK',
    ],
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

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader icon={<Wrench size={16} />} label="skills" title="Technical Toolkit" />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="p-6 rounded-lg"
              style={{ background: 'hsl(221 39% 11%)', border: '1px solid hsl(215 33% 17%)' }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-xs font-medium" style={{ color: 'hsl(199 93% 60%)' }}>
                  {group.symbol}
                </span>
                <h3 className="font-mono text-sm font-semibold" style={{ color: 'hsl(215 19% 65%)' }}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1.5 rounded transition-colors"
                    style={{
                      background: 'hsl(222 48% 11%)',
                      color: 'hsl(215 25% 78%)',
                      border: '1px solid hsl(215 33% 17%)',
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
