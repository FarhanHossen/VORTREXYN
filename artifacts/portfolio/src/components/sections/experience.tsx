import { motion } from 'framer-motion';

const experience = [
  {
    id: 1,
    role: 'Senior Software Engineer',
    company: 'Vanguard Systems',
    period: '2021 — Present',
    description: 'Lead the core infrastructure team building distributed data processing pipelines. Architected a real-time event streaming service that improved throughput by 400%. Mentored a team of 5 engineers and established rigorous CI/CD practices.',
  },
  {
    id: 2,
    role: 'Software Developer',
    company: 'Nova Logic',
    period: '2018 — 2021',
    description: 'Developed full-stack web applications serving enterprise clients. Migrated legacy monolithic architecture to highly decoupled microservices. Implemented comprehensive test suites increasing coverage from 20% to 85%.',
  },
  {
    id: 3,
    role: 'Frontend Engineer',
    company: 'Apex Digital',
    period: '2016 — 2018',
    description: 'Built responsive, high-performance interfaces for complex SaaS platforms using React. Collaborated closely with design teams to translate complex UX requirements into maintainable component libraries.',
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-secondary/20 relative border-y border-border">
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
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          </div>
        </motion.div>

        <div className="max-w-4xl">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 mb-16 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <div className="md:w-1/4 shrink-0">
                  <div className="text-sm font-mono text-muted-foreground sticky top-24">
                    {job.period}
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  {/* Timeline dot - only visible on mobile */}
                  <div className="absolute -left-[39px] top-1.5 w-3 h-3 bg-primary rounded-full md:hidden" />
                  {/* Timeline line - only visible on mobile */}
                  {index !== experience.length - 1 && (
                    <div className="absolute -left-8 top-6 bottom-[-80px] w-[1px] bg-border md:hidden" />
                  )}
                  
                  <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                  <div className="text-primary font-mono text-sm mb-6">{job.company}</div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
