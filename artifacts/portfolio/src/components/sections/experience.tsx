import { motion } from 'framer-motion';

const experience = [
  {
    id: 1,
    role: 'Team Member',
    company: 'Woolworths Regional Distribution Centre (Primary Connect)',
    location: 'Moorebank, NSW',
    period: 'Nov 2025 — Present',
    description: 'Operating in a fully automated warehouse environment using WMS and barcode scanning systems. Monitoring inventory flow of up to 1.5 million products daily and troubleshooting sensor and system issues. Performed product verification at 900 units/hour while identifying software-related discrepancies. Contributed to efficiency improvement from 40% to 70% through optimized automation and issue resolution.',
  },
  {
    id: 2,
    role: 'Junior Chef / Kitchen Hand',
    company: 'Matinee Coffee',
    location: 'Marrickville, NSW',
    period: 'Jul 2024 — Oct 2025',
    description: 'Prepared and presented high-quality dishes while supporting kitchen operations, including ingredient preparation, stock monitoring, and collaboration with senior chefs. Maintained efficient back-of-house workflow, contributing to consistent quality metrics and smooth service operations.',
  },
  {
    id: 3,
    role: 'Houseperson / Room Attendant',
    company: 'Crown Towers Sydney',
    location: 'Barangaroo, NSW',
    period: 'Sep 2023 — Jun 2024',
    description: 'Supported luxury hotel housekeeping operations by transporting linens, amenities, and equipment across floors to ensure timely room readiness. Maintained high standards of cleanliness and presentation in line with Crown Towers Sydney luxury standards, consistently meeting turnaround time metrics.',
  },
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
                  <div className="absolute -left-[39px] top-1.5 w-3 h-3 bg-primary rounded-full md:hidden" />
                  {index !== experience.length - 1 && (
                    <div className="absolute -left-8 top-6 bottom-[-80px] w-[1px] bg-border md:hidden" />
                  )}
                  
                  <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                  <div className="text-primary font-mono text-sm mb-1">{job.company}</div>
                  <div className="text-muted-foreground/60 font-mono text-xs mb-5">{job.location}</div>
                  
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
