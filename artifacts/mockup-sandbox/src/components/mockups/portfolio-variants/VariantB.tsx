import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Phone, 
  Terminal, 
  Database, 
  Code2, 
  Cpu,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Sparkles
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Orb = ({ color, size, className, blur = "blur-3xl", animateX, animateY, duration = 20 }: any) => {
  return (
    <motion.div
      className={`absolute rounded-full mix-blend-screen pointer-events-none ${blur} ${className}`}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        opacity: 0.4
      }}
      animate={{
        x: animateX,
        y: animateY,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear"
      }}
    />
  );
};

export function VariantB() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden bg-[#050A18] text-slate-200 font-sans selection:bg-[#9B5CFF]/30 relative">
      
      {/* Deep Space Background / Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(5,10,24,1)_80%)] z-10" />
        <Orb 
          color="#9B5CFF" 
          size="40vw" 
          className="-top-[10%] -left-[10%]" 
          animateX={[0, 100, 0]}
          animateY={[0, 50, 0]}
          duration={25}
          blur="blur-[120px]"
        />
        <Orb 
          color="#00E5FF" 
          size="30vw" 
          className="top-[30%] -right-[5%]" 
          animateX={[0, -50, 0]}
          animateY={[0, 100, 0]}
          duration={30}
          blur="blur-[100px]"
        />
        <Orb 
          color="#1E3A8A" 
          size="50vw" 
          className="-bottom-[10%] left-[20%]" 
          animateX={[0, -100, 0]}
          animateY={[0, -50, 0]}
          duration={35}
          blur="blur-[150px]"
        />
        
        {/* Subtle Star Texture */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 backdrop-blur-md bg-[#050A18]/50 border-b border-white/5">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-light tracking-widest text-white flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-[#00E5FF]" />
              FARHAN<span className="font-semibold text-[#9B5CFF]">.</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-slate-400"
            >
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="hover:text-[#00E5FF] transition-colors">Contact</a>
            </motion.div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-40">
          
          {/* HERO SECTION */}
          <section className="min-h-[70vh] flex flex-col justify-center relative">
            <motion.div 
              style={{ y: y1 }}
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.div variants={fadeIn} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 backdrop-blur-sm">
                <span className="text-[#00E5FF] text-sm font-medium tracking-wide">SYSTEM ONLINE // SOFTWARE DEVELOPER</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-tight">
                Architecting <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#9B5CFF]">
                  Digital Futures
                </span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed mb-10">
                I build robust enterprise software and secure systems, focusing on full-stack architecture and AI integrations. Based in Sydney, NSW.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#9B5CFF] to-[#00E5FF] text-white font-medium tracking-wide hover:opacity-90 transition-opacity flex items-center gap-2">
                  View Projects <ChevronRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium tracking-wide hover:bg-white/10 transition-colors">
                  Contact Me
                </button>
              </motion.div>
            </motion.div>
          </section>

          {/* SKILLS SECTION (Glass Cards) */}
          <section>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="space-y-12"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-4">
                <Terminal className="w-8 h-8 text-[#9B5CFF]" />
                <h2 className="text-3xl font-light tracking-wide text-white uppercase">Technical Arsenal</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Code2, title: "Languages", skills: ["TypeScript", "JavaScript", "Python", "HTML/CSS", "SQL"], color: "from-[#00E5FF]/20 to-transparent", border: "border-[#00E5FF]/30" },
                  { icon: Terminal, title: "Frontend & Backend", skills: ["React", "Tailwind CSS", "Node.js", "Express"], color: "from-[#9B5CFF]/20 to-transparent", border: "border-[#9B5CFF]/30" },
                  { icon: Database, title: "Infrastructure", skills: ["Firebase", "PostgreSQL", "REST APIs", "Docker", "Git"], color: "from-[#3B82F6]/20 to-transparent", border: "border-[#3B82F6]/30" }
                ].map((category, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeIn}
                    className="p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.2] transition-colors relative overflow-hidden group"
                  >
                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <category.icon className={`w-10 h-10 mb-6 text-white/70`} />
                    <h3 className="text-xl font-medium text-white mb-6 tracking-wide">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span key={i} className={`px-3 py-1.5 rounded-md bg-white/[0.05] border border-white/[0.05] text-sm text-slate-300 backdrop-blur-md`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="space-y-12"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-4">
                <Cpu className="w-8 h-8 text-[#00E5FF]" />
                <h2 className="text-3xl font-light tracking-wide text-white uppercase">Featured Mission</h2>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="relative p-1 rounded-3xl bg-gradient-to-br from-[#9B5CFF]/30 via-white/5 to-[#00E5FF]/30"
              >
                <div className="p-8 md:p-12 rounded-[22px] bg-[#0A1024]/90 backdrop-blur-2xl border border-white/5 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-semibold tracking-wider border border-[#00E5FF]/20">FULL-STACK</span>
                      <span className="px-3 py-1 rounded-full bg-[#9B5CFF]/10 text-[#9B5CFF] text-xs font-semibold tracking-wider border border-[#9B5CFF]/20">AI INTEGRATED</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white tracking-tight">Vortrexyn</h3>
                    <p className="text-xl text-[#00E5FF] font-light">Premium Car Rental System</p>
                    <p className="text-slate-400 leading-relaxed font-light">
                      A comprehensive web app featuring seamless car browsing, intuitive reservations, and secure PayPal payments. Powered by an admin dashboard integrated with OpenAI's DALL-E 3 for dynamic vehicle image generation.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {["HTML5", "JavaScript", "Tailwind CSS", "Firebase", "Node.js", "Express", "DALL-E 3", "PayPal SDK"].map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded text-xs text-slate-300 bg-white/5 border border-white/10">{tech}</span>
                      ))}
                    </div>

                    <div className="pt-8 flex gap-4">
                      <a href="https://github.com/FarhanHossen/vortrexyn-car-rental" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#050A18] font-medium hover:bg-slate-200 transition-colors">
                        <Github className="w-5 h-5" /> View Source
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex-1 relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 group">
                    <div className="absolute inset-0 bg-[#00E5FF]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                    {/* Mockup visual representation */}
                    <div className="absolute inset-0 bg-[#0F172A] flex items-center justify-center">
                      <div className="w-3/4 h-3/4 rounded-lg bg-[#1E293B] shadow-2xl overflow-hidden border border-white/5 relative">
                        <div className="h-6 w-full bg-[#0F172A] flex items-center px-3 gap-1.5 border-b border-white/5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-4 h-full">
                          <div className="space-y-3">
                            <div className="h-4 w-1/2 bg-white/10 rounded" />
                            <div className="h-2 w-3/4 bg-white/5 rounded" />
                            <div className="h-24 w-full bg-white/5 rounded mt-4" />
                          </div>
                          <div className="h-full w-full bg-gradient-to-br from-[#00E5FF]/20 to-[#9B5CFF]/20 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* EXPERIENCE & EDUCATION SECTION */}
          <section id="experience" className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
            <motion.div
              style={{ y: y2 }}
              className="absolute hidden lg:block w-px h-[120%] bg-gradient-to-b from-transparent via-white/10 to-transparent left-1/2 top-[-10%] -translate-x-1/2"
            />
            
            {/* Education */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="space-y-10"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-4">
                <GraduationCap className="w-8 h-8 text-[#9B5CFF]" />
                <h2 className="text-3xl font-light tracking-wide text-white uppercase">Education</h2>
              </motion.div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {[
                  { deg: "Master of IT", sub: "Enterprise Software Dev + Cyber Security", uni: "UTS", grad: "Graduated with Distinction", period: "Aug 2023 – Jul 2025" },
                  { deg: "BSc Computer Science & Engineering", sub: "", uni: "BRAC University", grad: "Graduated with High Distinction", period: "Jan 2019 – Jan 2023" }
                ].map((edu, i) => (
                  <motion.div key={i} variants={fadeIn} className="relative pl-12 md:pl-0">
                    <div className="md:w-1/2 md:pr-12 md:text-right relative">
                      <div className="absolute left-[-39px] md:right-[-39px] md:left-auto top-2 w-3 h-3 rounded-full bg-[#9B5CFF] shadow-[0_0_15px_rgba(155,92,255,0.8)]" />
                      <span className="text-sm font-mono text-[#00E5FF]">{edu.period}</span>
                      <h4 className="text-xl font-medium text-white mt-2">{edu.deg}</h4>
                      {edu.sub && <p className="text-sm text-[#9B5CFF] mt-1">{edu.sub}</p>}
                      <p className="text-slate-400 font-light mt-2">{edu.uni}</p>
                      <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{edu.grad}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="space-y-10"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-4">
                <Briefcase className="w-8 h-8 text-[#00E5FF]" />
                <h2 className="text-3xl font-light tracking-wide text-white uppercase">Experience</h2>
              </motion.div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {[
                  { role: "Team Member", company: "Woolworths Primary Connect", period: "Nov 2025 – Present" },
                  { role: "Junior Chef/Kitchen Hand", company: "Matinee Coffee", period: "Jul 2024 – Oct 2025" },
                  { role: "Houseperson/Room Attendant", company: "Crown Towers Sydney", period: "Sep 2023 – Jun 2024" }
                ].map((exp, i) => (
                  <motion.div key={i} variants={fadeIn} className="relative pl-12 md:pl-0 flex justify-end">
                    <div className="md:w-1/2 md:pl-12 relative text-left">
                      <div className="absolute left-[-39px] top-2 w-3 h-3 rounded-full bg-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.8)]" />
                      <span className="text-sm font-mono text-[#9B5CFF]">{exp.period}</span>
                      <h4 className="text-xl font-medium text-white mt-2">{exp.role}</h4>
                      <p className="text-slate-400 font-light mt-1">{exp.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="pb-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="p-12 md:p-20 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] relative overflow-hidden text-center"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.1)_0%,transparent_70%)] pointer-events-none" />
              
              <motion.div variants={fadeIn} className="max-w-2xl mx-auto space-y-8 relative z-10">
                <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide">Initiate Protocol</h2>
                <p className="text-xl text-slate-400 font-light">
                  Ready to deploy high-performance solutions. Secure a transmission channel below.
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
                  <a href="mailto:farhan141549@gmail.com" className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white">
                    <Mail className="w-5 h-5 text-[#00E5FF]" />
                    farhan141549@gmail.com
                  </a>
                  <a href="tel:+61416279264" className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white">
                    <Phone className="w-5 h-5 text-[#9B5CFF]" />
                    +61 416 279 264
                  </a>
                </div>
                
                <div className="flex justify-center gap-2 pt-8 text-slate-500 font-light">
                  <MapPin className="w-5 h-5" /> Sydney, NSW
                </div>
              </motion.div>
            </motion.div>
          </section>
        </main>
        
        <footer className="py-8 border-t border-white/5 text-center text-slate-500 text-sm font-light">
          <p>© {new Date().getFullYear()} Farhan Hossen. All systems nominal.</p>
        </footer>
      </div>
    </div>
  );
}

export default VariantB;
