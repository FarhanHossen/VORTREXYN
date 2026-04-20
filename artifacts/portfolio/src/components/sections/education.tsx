import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'Master of Information Technology',
    specialization: 'Enterprise Software Development',
    institution: 'University of Technology Sydney',
    location: 'Sydney, NSW',
    period: 'Aug 2023 — Jul 2025',
    result: 'Graduated with Distinction',
  },
  {
    id: 2,
    degree: 'Bachelor of Science',
    specialization: 'Computer Science and Engineering',
    institution: 'BRAC University',
    location: 'Bangladesh',
    period: 'Jan 2019 — Jan 2023',
    result: 'Graduated with High Distinction',
  },
];

export function Education() {
  return (
    <section id="education" className="py-32 relative">
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
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          </div>
        </motion.div>

        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-border bg-card/20 rounded-none hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 border border-border/60 group-hover:border-primary/40 transition-colors">
                  <GraduationCap className="text-primary w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground/60 mb-1">{edu.period}</div>
                  <div className="text-xs font-mono text-primary">{edu.location}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
              <div className="text-muted-foreground text-sm mb-4">{edu.specialization}</div>
              <div className="text-primary font-mono text-sm mb-4">{edu.institution}</div>

              <div className="inline-block border border-primary/30 px-3 py-1 text-xs font-mono text-primary/80 bg-primary/5">
                {edu.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
