import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import vortrexynImg from '@/assets/project-vortrexyn.png';
import apiGatewayImg from '@/assets/project-api-gateway.png';
import analyticsImg from '@/assets/project-analytics.png';

const projects = [
  {
    id: 1,
    title: 'Vortrexyn — Premium Car Rental System',
    description: 'A full-stack multi-page web application for a premium car rental service. Users can browse vehicles, make reservations, and pay online via PayPal. An admin dashboard allows staff to manage bookings, fleet stock, and custom vehicles with AI-generated images powered by OpenAI DALL-E 3. Integrates Firebase Firestore for real-time data, EmailJS for automated booking confirmations, and a Node.js/Express backend for image generation proxying.',
    tags: ['HTML5', 'JavaScript', 'Tailwind CSS', 'Firebase', 'Node.js', 'Express', 'OpenAI DALL-E 3', 'PayPal SDK'],
    github: 'https://github.com/FarhanHossen/vortrexyn-car-rental',
    demo: null,
    type: 'Full-stack Web App',
    image: vortrexynImg,
  },
  {
    id: 2,
    title: 'Nexus API Gateway',
    description: 'A high-performance, distributed API gateway built in Node.js. Handles rate limiting, authentication, and intelligent routing for microservices architecture.',
    tags: ['TypeScript', 'Node.js', 'Redis', 'Docker'],
    github: '#',
    demo: null,
    type: 'Backend Infrastructure',
    image: apiGatewayImg,
  },
  {
    id: 3,
    title: 'Aether Analytics',
    description: 'Real-time telemetry dashboard processing live event streams with an optimized React frontend and complex data visualizations.',
    tags: ['React', 'PostgreSQL', 'Node.js', 'Chart.js'],
    github: '#',
    demo: null,
    type: 'Full-stack App',
    image: analyticsImg,
  },
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
            A showcase of applications and systems I've built, applying skills from my IT and Computer Science background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group rounded-none">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-2/5 shrink-0 overflow-hidden bg-secondary/30">
                      <img
                        src={project.image}
                        alt={project.title}
                        data-testid={`img-project-${project.id}`}
                        className="w-full h-56 lg:h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4">
                        <Terminal size={14} />
                        <span>{project.type}</span>
                      </div>

                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="font-mono text-xs bg-secondary/50 rounded-none border border-border"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`link-github-${project.id}`}
                          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-mono"
                        >
                          <Github size={18} />
                          Source
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`link-demo-${project.id}`}
                            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-mono"
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </a>
                        )}
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
