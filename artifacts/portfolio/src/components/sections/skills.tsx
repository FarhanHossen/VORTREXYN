import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Database, Layout, Server, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Settings className="text-primary w-5 h-5" />,
    skills: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'SQL', 'HTML/CSS']
  },
  {
    title: 'Frontend',
    icon: <Layout className="text-primary w-5 h-5" />,
    skills: ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Zustand']
  },
  {
    title: 'Backend',
    icon: <Server className="text-primary w-5 h-5" />,
    skills: ['Node.js', 'Express', 'NestJS', 'Django', 'FastAPI', 'GraphQL', 'REST APIs']
  },
  {
    title: 'Infrastructure & Data',
    icon: <Database className="text-primary w-5 h-5" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'CI/CD']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Technical Arsenal</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive overview of the tools, languages, and frameworks I use to build robust software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-border bg-card/20 rounded-none hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="font-mono text-sm py-1 px-3 border-border/60 hover:border-primary/60 transition-colors rounded-none"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
