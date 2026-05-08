import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';

const EXPERIENCE = [
  {
    id: 1,
    role: 'Team Member',
    company: 'Primary Connect (Woolworths RDC)',
    companyUrl: 'https://maps.google.com/?q=Woolworths+NDC+Moorebank+NSW',
    location: 'Moorebank, NSW',
    period: 'Nov 2025 — Present',
    points: [
      'Operating in a fully automated warehouse environment using WMS and barcode scanning systems, monitoring inventory flow of up to 1.5 million products daily.',
      'Performing product verification with system data (900 units/hour) while identifying and reporting automation or software-related discrepancies.',
      'Contributing to efficiency improvement from 40% to 70% through optimized automation and issue resolution.',
    ],
  },
  {
    id: 2,
    role: 'Junior Chef',
    company: 'Matinee Coffee',
    companyUrl: 'https://maps.google.com/?q=Matinee+Coffee+Marrickville+NSW',
    location: 'Marrickville, NSW',
    period: 'Apr 2025 — Oct 2025',
    points: [
      'Prepared and presented high-quality dishes while assisting in kitchen operations, including ingredient preparation, stock monitoring, and collaboration with senior chefs to maintain efficient service flow, ensure consistency and portion control, and meet food safety, hygiene, and performance metrics.',
    ],
  },
  {
    id: 3,
    role: 'Kitchen Hand',
    company: 'Matinee Coffee',
    companyUrl: 'https://maps.google.com/?q=Matinee+Coffee+Marrickville+NSW',
    location: 'Marrickville, NSW',
    period: 'Jul 2024 — Mar 2025',
    points: [
      'Maintained efficient back-of-house workflow by handling dishwashing, stock replenishment, and waste management, contributing to smooth service operations and consistent quality metrics.',
    ],
  },
  {
    id: 4,
    role: 'Team Member',
    company: 'Woolworths Warehouse',
    companyUrl: 'https://maps.google.com/?q=Woolworths+Warehouse+Lidcombe+NSW',
    location: 'Lidcombe, NSW',
    period: 'Apr 2024 — Sep 2024',
    points: [
      'Prepared and organized 200+ totes and trolleys per shift, improving workflow efficiency, reducing delays, and supporting smooth day-to-day warehouse operations.',
      'Coordinated manual warehouse operations by receiving inbound trucks, checking delivery lists, unloading goods, and loading outbound shipments as per dispatch requirements, ensuring accurate and efficient stock movement.',
    ],
  },
  {
    id: 5,
    role: 'Houseperson',
    company: 'Crown Towers Sydney',
    companyUrl: 'https://maps.google.com/?q=Crown+Towers+Sydney,+Barangaroo+NSW',
    location: 'Barangaroo, NSW',
    period: 'Feb 2024 — Jun 2024',
    points: [
      'Supported housekeeping operations by transporting linens, amenities, and equipment across floors, ensuring timely room readiness while meeting productivity and turnaround time metrics in line with Crown Towers Sydney standards.',
    ],
  },
  {
    id: 6,
    role: 'Front Team Member',
    company: 'Villaggio',
    companyUrl: 'https://maps.google.com/?q=Villaggio+Restaurant+NSW',
    location: 'Blacktown, Merrylands & Ashfield, NSW',
    period: 'Jan 2024 — Oct 2025',
    points: [
      'Delivered high-quality customer service by taking orders, handling POS transactions, managing telephone orders, processing bookings and advance deposit payments, coordinating with kitchen staff, managing order flow, and maintaining cleanliness of dining areas, ensuring a welcoming dining experience while consistently meeting service speed, efficiency, and customer satisfaction metrics.',
    ],
  },
  {
    id: 7,
    role: 'Room Attendant',
    company: 'Crown Towers Sydney',
    companyUrl: 'https://maps.google.com/?q=Crown+Towers+Sydney,+Barangaroo+NSW',
    location: 'Barangaroo, NSW',
    period: 'Sep 2023 — Jan 2024',
    points: [
      'Maintained high standards of cleanliness and presentation by servicing guest rooms, including bed-making, bathroom sanitation, and replenishment of amenities in line with luxury hotel standards.',
    ],
  },
  {
    id: 8,
    role: 'Front Team Member',
    company: "McDonald's",
    companyUrl: "https://maps.google.com/?q=McDonald's+Punchbowl+NSW",
    location: 'Punchbowl, NSW',
    period: 'Aug 2023 — Dec 2023',
    points: [
      'Delivered fast and friendly customer service in a high-volume environment, accurately taking orders, handling cash and POS transactions, and resolving customer inquiries to ensure a positive dining experience.',
      'Maintained front counter operations by coordinating with kitchen staff, managing order flow, and ensuring cleanliness, food safety, and compliance with company standards during peak hours.',
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

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader icon={<Briefcase size={16} />} label="experience" title="Work Experience" />

        <div className="mt-10 space-y-4">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i}
              className="p-6 rounded-lg transition-colors duration-300"
              style={{ background: 'hsl(221 39% 11%)', border: '1px solid hsl(215 33% 17%)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.25)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'hsl(215 33% 17%)';
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-base font-semibold" style={{ color: 'hsl(210 40% 96%)' }}>
                    {job.role}
                  </h3>
                  {'companyUrl' in job && job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm transition-opacity hover:opacity-75"
                      style={{ color: 'hsl(199 93% 60%)' }}
                    >
                      {job.company}
                    </a>
                  ) : (
                    <p className="font-mono text-sm" style={{ color: 'hsl(199 93% 60%)' }}>
                      {job.company}
                    </p>
                  )}
                  <p className="font-mono text-xs mt-0.5" style={{ color: 'hsl(215 16% 55%)' }}>
                    {job.location}
                  </p>
                </div>
                <span className="font-mono text-xs shrink-0" style={{ color: 'hsl(215 16% 55%)' }}>
                  {job.period}
                </span>
              </div>

              <ul className="space-y-1.5">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm" style={{ color: 'hsl(215 25% 72%)' }}>
                    <ChevronRight
                      size={14}
                      className="shrink-0 mt-0.5"
                      style={{ color: 'hsl(199 93% 60%)' }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
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
