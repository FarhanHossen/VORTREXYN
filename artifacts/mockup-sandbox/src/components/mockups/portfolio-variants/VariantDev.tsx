import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Code2,
  Layers,
  Wrench,
  GraduationCap,
  Briefcase,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

const NAV_LINKS = ["About", "Projects", "Skills", "Experience", "Education", "Contact"];

const PROJECTS = [
  {
    title: "Vortrexyn",
    subtitle: "Premium Car Rental System",
    description:
      "Full-stack web application for a premium car rental service. Users browse vehicles, make reservations, and pay via PayPal. Admin dashboard lets staff manage bookings and generate AI vehicle images via OpenAI DALL-E 3.",
    tags: ["HTML5", "JavaScript", "Tailwind CSS", "Firebase", "Node.js", "Express", "DALL-E 3", "PayPal SDK"],
    github: "https://github.com/FarhanHossen/vortrexyn-car-rental",
    demo: null,
    featured: true,
  },
];

const SKILLS = {
  Languages: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3", "SQL"],
  Frameworks: ["React", "Node.js", "Express", "Tailwind CSS", "Framer Motion"],
  Tools: ["Firebase", "PostgreSQL", "Docker", "Git", "REST APIs", "OpenAI API", "PayPal SDK"],
};

const EXPERIENCE = [
  {
    role: "Team Member",
    company: "Woolworths Primary Connect",
    period: "Nov 2025 — Present",
    points: [
      "Supported warehouse and distribution operations in a high-throughput logistics environment",
      "Collaborated across teams to ensure accurate and timely order fulfilment",
    ],
  },
  {
    role: "Junior Chef / Kitchen Hand",
    company: "Matinee Coffee",
    period: "Jul 2024 — Oct 2025",
    points: [
      "Prepared and plated food orders in a fast-paced café kitchen",
      "Maintained food safety standards and kitchen cleanliness",
    ],
  },
  {
    role: "Houseperson / Room Attendant",
    company: "Crown Towers Sydney",
    period: "Sep 2023 — Jun 2024",
    points: [
      "Delivered five-star housekeeping services across luxury hotel rooms and suites",
      "Maintained exceptional attention to detail in a high-standards hospitality environment",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Master of Information Technology",
    major: "Enterprise Software Development",
    sub: "Sub-major: Cyber Security",
    institution: "University of Technology Sydney",
    period: "Aug 2023 — Jul 2025",
    result: "Graduated with Distinction",
  },
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    major: "",
    sub: "",
    institution: "BRAC University",
    period: "Jan 2019 — Jan 2023",
    result: "Graduated with High Distinction",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const ACCENT = "#38BDF8"; // sky-400

export function VariantDev() {
  return (
    <div
      className="min-h-screen w-full overflow-y-auto overflow-x-hidden"
      style={{ background: "#0F172A", color: "#CBD5E1", fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Import Inter font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0F172A; }
        ::-webkit-scrollbar-thumb { background: #1E3A5F; border-radius: 2px; }
        .mono { font-family: 'Fira Code', monospace; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        style={{ background: "rgba(15,23,42,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1E293B" }}
        className="sticky top-0 z-50 w-full"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <span className="mono text-sm font-medium" style={{ color: ACCENT }}>
            farhan<span style={{ color: "#64748B" }}>@portfolio</span>
            <span style={{ color: "#F472B6" }}>:~$</span>
            <span className="inline-block w-2 h-4 ml-1 align-middle" style={{ background: ACCENT, animation: "pulse 1.2s infinite" }} />
          </span>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="mono text-xs transition-colors duration-200"
                style={{ color: "#64748B" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
              >
                <span style={{ color: ACCENT }}>./</span>{n}
              </a>
            ))}
          </div>
          <a
            href="https://github.com/FarhanHossen"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#64748B", border: `1px solid #1E293B`, borderRadius: 6 }}
            className="mono text-xs px-3 py-1.5 flex items-center gap-1.5 transition-colors"
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = ACCENT; (e.currentTarget as HTMLElement).style.borderColor = ACCENT; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748B"; (e.currentTarget as HTMLElement).style.borderColor = "#1E293B"; }}
          >
            <Github size={13} /> GitHub
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="about" className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="mono text-sm mb-4" style={{ color: ACCENT }}>
            <span style={{ color: "#64748B" }}># </span>Hey, I'm
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            style={{ fontFamily: "'Inter', system-ui", fontWeight: 800, color: "#F1F5F9", lineHeight: 1.1 }}
            className="text-5xl md:text-6xl mb-4"
          >
            Farhan Hossen.
          </motion.h1>
          <motion.h2
            variants={fadeUp}
            custom={2}
            style={{ fontFamily: "'Inter', system-ui", fontWeight: 600, color: "#64748B" }}
            className="text-3xl md:text-4xl mb-6"
          >
            Software Developer
          </motion.h2>
          <motion.p variants={fadeUp} custom={3} className="text-base leading-relaxed mb-8" style={{ color: "#94A3B8", maxWidth: 560 }}>
            MIT graduate (Enterprise Software Development + Cyber Security) from UTS, Sydney. I build clean, practical
            software — from full-stack web apps to backend systems. Currently based in Sydney, NSW.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="mono text-sm px-5 py-2.5 rounded font-medium transition-all duration-200 flex items-center gap-2"
              style={{ background: ACCENT, color: "#0F172A" }}
            >
              View Projects <ChevronRight size={15} />
            </a>
            <a
              href="mailto:farhan141549@gmail.com"
              className="mono text-sm px-5 py-2.5 rounded font-medium transition-all duration-200 flex items-center gap-2"
              style={{ border: `1px solid #1E293B`, color: "#94A3B8" }}
            >
              <Mail size={14} /> Get in Touch
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div variants={fadeUp} custom={5} className="flex items-center gap-4 mt-8">
            {[
              { icon: <Github size={17} />, href: "https://github.com/FarhanHossen", label: "GitHub" },
              { icon: <Mail size={17} />, href: "mailto:farhan141549@gmail.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-1.5 mono text-xs transition-colors"
                style={{ color: "#475569" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
              >
                {icon} {label}
              </a>
            ))}
            <span className="mono text-xs" style={{ color: "#334155" }}>
              <MapPin size={13} className="inline mb-0.5 mr-1" />Sydney, NSW
            </span>
          </motion.div>
        </motion.div>

        {/* Code snippet decoration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="hidden lg:block absolute right-16 top-28 mono text-xs leading-relaxed select-none pointer-events-none"
          style={{ color: "#1E3A5F", maxWidth: 320 }}
        >
          <div style={{ color: "#334155" }}>{"{"}</div>
          <div>&nbsp;&nbsp;<span style={{ color: "#38BDF8" }}>"name"</span>: <span style={{ color: "#4ADE80" }}>"Farhan Hossen"</span>,</div>
          <div>&nbsp;&nbsp;<span style={{ color: "#38BDF8" }}>"role"</span>: <span style={{ color: "#4ADE80" }}>"Software Developer"</span>,</div>
          <div>&nbsp;&nbsp;<span style={{ color: "#38BDF8" }}>"location"</span>: <span style={{ color: "#4ADE80" }}>"Sydney, NSW"</span>,</div>
          <div>&nbsp;&nbsp;<span style={{ color: "#38BDF8" }}>"available"</span>: <span style={{ color: "#FB923C" }}>true</span></div>
          <div style={{ color: "#334155" }}>{"}"}</div>
        </motion.div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: 1, background: "linear-gradient(to right, transparent, #1E293B, transparent)", margin: "0 1.5rem" }} />

      {/* ── PROJECTS ── */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader icon={<Layers size={16} />} label="projects" title="Things I've Built" />

        <div className="mt-10 space-y-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              style={{ background: "#111827", border: "1px solid #1E293B", borderRadius: 10 }}
              className="p-7 group hover:border-sky-500/40 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Terminal size={14} style={{ color: ACCENT }} />
                    <span className="mono text-xs" style={{ color: ACCENT }}>featured project</span>
                  </div>
                  <h3 style={{ color: "#F1F5F9", fontWeight: 700 }} className="text-xl">
                    {p.title}
                    <span style={{ color: "#475569", fontWeight: 400 }} className="text-base ml-2">— {p.subtitle}</span>
                  </h3>
                </div>
                <div className="flex gap-3 ml-4 shrink-0">
                  {p.github && p.github !== "#" && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#475569" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}>
                      <Github size={18} />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#475569" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}>
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748B" }}>{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="mono text-xs px-2 py-1 rounded" style={{ background: "#0F172A", color: "#38BDF8", border: "1px solid #1E3A5F" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Placeholder cards */}
          {[
            { title: "More projects coming soon", note: "Currently working on new builds" },
          ].map((p) => (
            <div
              key={p.title}
              style={{ border: "1px dashed #1E293B", borderRadius: 10, color: "#334155" }}
              className="p-7 flex items-center justify-between"
            >
              <div>
                <p className="mono text-sm" style={{ color: "#1E3A5F" }}>{p.title}</p>
                <p className="mono text-xs mt-1" style={{ color: "#1E293B" }}>{p.note}</p>
              </div>
              <Code2 size={22} style={{ color: "#1E293B" }} />
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(to right, transparent, #1E293B, transparent)", margin: "0 1.5rem" }} />

      {/* ── SKILLS ── */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader icon={<Wrench size={16} />} label="skills" title="Technical Toolkit" />

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([cat, items], i) => (
            <motion.div
              key={cat}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              style={{ background: "#111827", border: "1px solid #1E293B", borderRadius: 10 }}
              className="p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="mono text-xs font-medium" style={{ color: ACCENT }}>
                  {cat === "Languages" ? "{ }" : cat === "Frameworks" ? "[ ]" : "⚙"}
                </span>
                <h3 className="mono text-sm font-semibold" style={{ color: "#94A3B8" }}>{cat}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="mono text-xs px-2.5 py-1.5 rounded"
                    style={{ background: "#0F172A", color: "#CBD5E1", border: "1px solid #1E293B" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(to right, transparent, #1E293B, transparent)", margin: "0 1.5rem" }} />

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader icon={<Briefcase size={16} />} label="experience" title="Work Experience" />

        <div className="mt-10 space-y-4">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              style={{ background: "#111827", border: "1px solid #1E293B", borderRadius: 10 }}
              className="p-6 group hover:border-sky-500/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <h3 style={{ color: "#F1F5F9", fontWeight: 600 }} className="text-base">{e.role}</h3>
                  <p className="mono text-sm" style={{ color: ACCENT }}>{e.company}</p>
                </div>
                <span className="mono text-xs shrink-0" style={{ color: "#475569" }}>{e.period}</span>
              </div>
              <ul className="space-y-1.5">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm" style={{ color: "#64748B" }}>
                    <ChevronRight size={14} className="shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(to right, transparent, #1E293B, transparent)", margin: "0 1.5rem" }} />

      {/* ── EDUCATION ── */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader icon={<GraduationCap size={16} />} label="education" title="Education" />

        <div className="mt-10 space-y-4">
          {EDUCATION.map((e, i) => (
            <motion.div
              key={e.degree}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              style={{ background: "#111827", border: "1px solid #1E293B", borderRadius: 10 }}
              className="p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 style={{ color: "#F1F5F9", fontWeight: 600 }} className="text-base mb-0.5">{e.degree}</h3>
                  {e.major && <p className="text-sm" style={{ color: "#94A3B8" }}>{e.major}</p>}
                  {e.sub && <p className="mono text-xs mt-1" style={{ color: "#475569" }}>{e.sub}</p>}
                  <p className="mono text-sm mt-2" style={{ color: ACCENT }}>{e.institution}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="mono text-xs" style={{ color: "#475569" }}>{e.period}</p>
                  <span
                    className="mono text-xs px-2 py-0.5 rounded mt-2 inline-block"
                    style={{ background: "rgba(56,189,248,0.08)", color: ACCENT, border: "1px solid rgba(56,189,248,0.2)" }}
                  >
                    {e.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(to right, transparent, #1E293B, transparent)", margin: "0 1.5rem" }} />

      {/* ── CONTACT ── */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader icon={<Mail size={16} />} label="contact" title="Get In Touch" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 max-w-xl"
        >
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#64748B" }}>
            I'm currently open to new opportunities. Whether you have a question, a project idea, or just
            want to connect — feel free to reach out. I'll get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            {[
              { icon: <Mail size={15} />, label: "farhan141549@gmail.com", href: "mailto:farhan141549@gmail.com" },
              { icon: <Phone size={15} />, label: "+61 416 279 264", href: "tel:+61416279264" },
              { icon: <MapPin size={15} />, label: "Sydney, NSW, Australia", href: null },
            ].map(({ icon, label, href }) => (
              <div key={label} className="flex items-center gap-3">
                <span style={{ color: ACCENT }}>{icon}</span>
                {href ? (
                  <a href={href} className="mono text-sm transition-colors" style={{ color: "#94A3B8" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                    {label}
                  </a>
                ) : (
                  <span className="mono text-sm" style={{ color: "#94A3B8" }}>{label}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="mailto:farhan141549@gmail.com"
              className="mono text-sm px-6 py-3 rounded font-medium inline-flex items-center gap-2 transition-opacity"
              style={{ background: ACCENT, color: "#0F172A" }}
            >
              Say Hello <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid #1E293B" }} className="py-8 text-center">
        <p className="mono text-xs" style={{ color: "#334155" }}>
          <span style={{ color: "#1E293B" }}>// </span>
          Built by Farhan Hossen &nbsp;·&nbsp; Sydney, NSW &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
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
        <span style={{ color: "#38BDF8" }}>{icon}</span>
        <span className="mono text-xs" style={{ color: "#334155" }}>// {label}</span>
      </div>
      <h2 style={{ color: "#F1F5F9", fontWeight: 700 }} className="text-2xl md:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-12" style={{ background: "#38BDF8" }} />
    </motion.div>
  );
}

export default VariantDev;
