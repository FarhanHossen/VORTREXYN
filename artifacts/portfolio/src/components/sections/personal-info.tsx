import { motion } from 'framer-motion';
import { User, Heart, Droplets, Calendar, Globe, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const items = [
  { icon: <Users size={15} />, label: "Father's Name", value: 'H. M. Delowar Hossain' },
  { icon: <Users size={15} />, label: "Mother's Name", value: 'Fatema Hossain' },
  { icon: <Heart size={15} />, label: 'Spouse Name', value: 'Maria Afroz' },
  { icon: <Droplets size={15} />, label: 'Blood Group', value: 'AB+' },
  { icon: <Calendar size={15} />, label: 'Date of Birth', value: '27 September 2000' },
  { icon: <Globe size={15} />, label: 'Nationality', value: 'Bangladeshi' },
];

export function PersonalInfo() {
  return (
    <section id="personal-info" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp} custom={0} className="font-mono text-sm mb-2" style={{ color: 'hsl(215 20% 50%)' }}>
            <span style={{ color: 'hsl(215 16% 40%)' }}># </span>
            <span style={{ color: 'hsl(199 93% 60%)' }}>personal-info</span>
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold mb-10" style={{ color: 'hsl(210 40% 96%)' }}>
            Personal Information
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(({ icon, label, value }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i + 2}
                className="flex items-start gap-4 rounded-lg p-5"
                style={{ background: 'hsl(222 35% 8%)', border: '1px solid hsl(215 33% 15%)' }}
              >
                <div
                  className="mt-0.5 flex-shrink-0 p-2 rounded"
                  style={{ background: 'hsl(199 93% 60% / 0.1)', color: 'hsl(199 93% 60%)' }}
                >
                  {icon}
                </div>
                <div>
                  <p className="font-mono text-xs mb-1" style={{ color: 'hsl(215 20% 50%)' }}>
                    {label}
                  </p>
                  <p className="font-medium text-sm" style={{ color: 'hsl(210 40% 92%)' }}>
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
