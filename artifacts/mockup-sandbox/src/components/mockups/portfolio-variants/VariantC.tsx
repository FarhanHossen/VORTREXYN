import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, MapPin, Phone, Briefcase, GraduationCap, Code, Database, Server, Laptop, ChevronRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function VariantC() {
  return (
    <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden bg-[#FAF7F0] text-black selection:bg-[#F97316] selection:text-white" style={{ fontFamily: "'Space Mono', monospace" }}>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b-4 border-black bg-[#FAF7F0] px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black uppercase tracking-tighter" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          FH.
        </div>
        <div className="hidden md:flex gap-8 font-bold text-sm">
          <a href="#projects" className="hover:text-[#F97316] transition-colors uppercase">Projects</a>
          <a href="#experience" className="hover:text-[#F97316] transition-colors uppercase">Experience</a>
          <a href="#education" className="hover:text-[#F97316] transition-colors uppercase">Education</a>
          <a href="#contact" className="hover:text-[#F97316] transition-colors uppercase">Contact</a>
        </div>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 border-2 border-black bg-[#F97316] text-black px-4 py-2 font-bold uppercase text-sm hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          Hire Me <ArrowUpRight className="w-4 h-4" />
        </a>
      </nav>

      <main className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="py-20 md:py-32 grid md:grid-cols-12 gap-8 items-center border-b-4 border-black pb-24"
        >
          <div className="md:col-span-8">
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-6" 
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Building <br/>
              <span className="bg-[#F97316] px-2 text-white">unignorable</span><br/>
              digital stuff.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl font-medium max-w-2xl mb-8 leading-relaxed">
              I'm <strong className="bg-yellow-300 px-1">Farhan Hossen</strong>, a Software Developer based in Sydney. I write code that works, looks good, and makes sense.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 border-4 border-black bg-white text-black px-8 py-4 font-bold uppercase hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all text-lg">
                View Work <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border-4 border-black bg-black text-white px-8 py-4 font-bold uppercase hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(249,115,22,1)] transition-all text-lg">
                Contact <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
          
          <motion.div variants={fadeIn} className="md:col-span-4 flex flex-col gap-6">
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-bold mb-4 uppercase text-sm border-b-2 border-black pb-2">Vitals</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#F97316]" />
                  <span>Sydney, NSW</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#F97316]" />
                  <a href="mailto:farhan141549@gmail.com" className="hover:underline hover:bg-yellow-300">farhan141549@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#F97316]" />
                  <a href="tel:+61416279264" className="hover:underline">+61 416 279 264</a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-b-4 border-black">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex items-end justify-between mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Selected <br/> <span className="text-[#F97316]">Projects</span>
            </h2>
          </motion.div>

          <div className="grid gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="group border-4 border-black bg-white overflow-hidden flex flex-col md:flex-row hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              <div className="md:w-2/5 border-b-4 md:border-b-0 md:border-r-4 border-black bg-gray-100 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 w-full aspect-video border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] flex items-center justify-center">
                  <span className="text-4xl font-black uppercase" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Vortrexyn</span>
                </div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-between bg-[#FAF7F0]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-black uppercase" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Vortrexyn</h3>
                    <span className="border-2 border-black px-3 py-1 text-xs font-bold bg-yellow-300">Full-Stack</span>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed font-medium">
                    Premium Car Rental System. Car browsing, reservations, PayPal payments, and an admin dashboard powered by <strong className="bg-[#F97316] text-white px-1">DALL-E 3 AI</strong> image generation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['React', 'Tailwind', 'Firebase', 'Node.js', 'Express', 'DALL-E 3', 'PayPal'].map(tech => (
                      <span key={tech} className="border-2 border-black px-3 py-1 text-sm font-bold bg-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/FarhanHossen/vortrexyn-car-rental" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-black bg-black text-white px-6 py-3 font-bold uppercase hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(249,115,22,1)] transition-all">
                    <Github className="w-5 h-5" /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-0 border-b-4 border-black">
          
          {/* Experience Section */}
          <section id="experience" className="py-24 md:border-r-4 border-black md:pr-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 flex items-center gap-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                <Briefcase className="w-10 h-10" /> Experience
              </h2>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-black before:z-0">
                
                {[
                  {
                    role: "Team Member",
                    company: "Woolworths Primary Connect",
                    date: "Nov 2025–Present"
                  },
                  {
                    role: "Junior Chef/Kitchen Hand",
                    company: "Matinee Coffee",
                    date: "Jul 2024–Oct 2025"
                  },
                  {
                    role: "Houseperson/Room Attendant",
                    company: "Crown Towers Sydney",
                    date: "Sep 2023–Jun 2024"
                  }
                ].map((exp, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-[#F97316] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <span className="inline-block px-2 py-1 bg-yellow-300 border-2 border-black text-xs font-bold uppercase mb-2">{exp.date}</span>
                      <h3 className="font-black text-xl uppercase mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{exp.role}</h3>
                      <p className="font-bold text-gray-600">{exp.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-24 md:pl-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 flex items-center gap-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                <GraduationCap className="w-10 h-10" /> Education
              </h2>

              <div className="space-y-8">
                {[
                  {
                    degree: "Master of IT",
                    major: "Enterprise Software Dev + Cyber Security",
                    school: "UTS",
                    date: "Aug 2023–Jul 2025",
                    honors: "Graduated with Distinction"
                  },
                  {
                    degree: "BSc Computer Science & Engineering",
                    major: "",
                    school: "BRAC University",
                    date: "Jan 2019–Jan 2023",
                    honors: "Graduated with High Distinction"
                  }
                ].map((edu, i) => (
                  <div key={i} className="border-4 border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(249,115,22,1)] transition-all">
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-4 mb-4">
                      <div>
                        <h3 className="font-black text-2xl uppercase" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{edu.degree}</h3>
                        {edu.major && <p className="font-bold text-[#F97316] mt-1">{edu.major}</p>}
                      </div>
                      <span className="border-2 border-black bg-black text-white px-3 py-1 font-bold text-sm whitespace-nowrap">{edu.date}</span>
                    </div>
                    <div className="flex items-center justify-between border-t-2 border-black pt-4 mt-4">
                      <span className="font-bold text-lg">{edu.school}</span>
                      <span className="bg-yellow-300 border-2 border-black px-2 py-1 text-xs font-bold uppercase">{edu.honors}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

        </div>

        {/* Skills Section */}
        <section id="skills" className="py-24 border-b-4 border-black">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 text-center" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Arsenal
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Languages",
                  icon: <Code className="w-8 h-8" />,
                  skills: ["TypeScript", "JavaScript", "Python", "HTML/CSS", "SQL"],
                  color: "bg-blue-300"
                },
                {
                  title: "Frontend & Backend",
                  icon: <Laptop className="w-8 h-8" />,
                  skills: ["React", "Tailwind CSS", "Node.js", "Express"],
                  color: "bg-green-300"
                },
                {
                  title: "Data & DevOps",
                  icon: <Database className="w-8 h-8" />,
                  skills: ["Firebase", "PostgreSQL", "REST APIs", "Docker", "Git"],
                  color: "bg-purple-300"
                }
              ].map((category, i) => (
                <motion.div key={i} variants={fadeIn} className="border-4 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className={`w-16 h-16 ${category.color} border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    {category.icon}
                  </div>
                  <h3 className="font-black text-2xl uppercase mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{category.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map(skill => (
                      <span key={skill} className="border-2 border-black px-3 py-2 font-bold bg-gray-50 hover:bg-[#F97316] hover:text-white transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Block */}
        <section id="contact" className="py-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="border-8 border-black bg-[#F97316] text-black p-8 md:p-16 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
          >
            <h2 className="text-5xl md:text-8xl font-black uppercase mb-8" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Let's Talk.
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto">
              Looking for a developer who can ship? I'm available for work.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:farhan141549@gmail.com" className="inline-flex items-center gap-3 border-4 border-black bg-white px-8 py-4 font-black uppercase text-xl hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <Mail className="w-6 h-6" /> Email Me
              </a>
              <a href="tel:+61416279264" className="inline-flex items-center gap-3 border-4 border-black bg-black text-white px-8 py-4 font-black uppercase text-xl hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all">
                <Phone className="w-6 h-6" /> Call Me
              </a>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-black text-white py-8 text-center px-4">
        <p className="font-bold uppercase tracking-widest text-sm">
          © {new Date().getFullYear()} Farhan Hossen. Built with intent.
        </p>
      </footer>
    </div>
  );
}

export default VariantC;
