import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Nexus API Gateway',
    description: 'A high-performance, distributed API gateway built in Node.js and Rust. Handles rate limiting, authentication, and intelligent routing for microservices architecture.',
    tags: ['TypeScript', 'Rust', 'Redis', 'Docker'],
    github: '#',
    demo: '#',
    type: 'Backend Infrastructure'
  },
  {
    id: 2,
    title: 'Orbit CLI',
    description: 'A lightning-fast terminal workflow tool for developers. Automates environment setups, manages local databases, and orchestrates complex build pipelines with zero config.',
    tags: ['Go', 'CLI', 'Shell', 'Systems'],
    github: '#',
    demo: '#',
    type: 'Developer Tooling'
  },
  {
    id: 3,
    title: 'Aether Analytics',
    description: 'Real-time telemetry dashboard for edge computing nodes. Processes millions of events per second with an optimized React frontend rendering complex WebGL charts without frame drops.',
    tags: ['React', 'PostgreSQL', 'Kafka', 'WebGL'],
    github: '#',
    demo: '#',
    type: 'Full-stack App'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
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
            <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            A showcase of systems and applications I've engineered. Focused on solving complex technical challenges with elegant architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border overflow-hidden hover:border-primary/50 transition-colors group rounded-none">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4">
                        <Terminal size={14} />
                        <span>{project.type}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="font-mono text-xs bg-secondary/50 rounded-none border border-border">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-6 mt-auto">
                        <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-mono">
                          <Github size={18} />
                          Source
                        </a>
                        <a href={project.demo} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-mono">
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
