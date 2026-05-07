import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Mail, MapPin, Phone, ExternalLink, Terminal } from 'lucide-react';

const brutalTransition = { type: 'spring', stiffness: 300, damping: 25, bounce: 0 };

const revealVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: brutalTransition }
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: brutalTransition }
};

export function VariantA() {
  return (
    <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden bg-black text-white selection:bg-[#AAFF00] selection:text-black font-grotesk relative">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,900&family=Space+Grotesk:wght@400;700;900&display=swap');
        .font-serif-heavy { font-family: 'Fraunces', serif; font-weight: 900; }
        .font-grotesk { font-family: 'Space Grotesk', sans-serif; }
        .grid-bg {
          background-size: 100px 100px;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        }
      `}} />

      <div className="absolute inset-0 grid-bg pointer-events-none z-0 opacity-50 mix-blend-difference" />

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-4 flex justify-between items-start font-grotesk text-xs tracking-widest uppercase font-bold border-b-2 border-white/20">
        <div>FARHAN HOSSEN</div>
        <div className="text-right">
          <div>SYDNEY, NSW</div>
          <div className="text-[#AAFF00]">AVAILABLE FOR HIRE</div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="min-h-screen pt-32 px-6 pb-20 flex flex-col justify-end border-b-4 border-white relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={revealVariants}
          className="max-w-[1200px]"
        >
          <h1 className="font-serif-heavy text-[12vw] leading-[0.85] tracking-tighter uppercase mb-8 text-white">
            SOFTWARE<br/>
            <span className="text-[#AAFF00]">DEVELOPER</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 border-t-2 border-white pt-8">
            <div className="col-span-1 md:col-span-2 text-2xl md:text-4xl font-grotesk font-bold leading-none max-w-2xl uppercase">
              BUILDING ZERO COMPROMISE ENTERPRISE SOFTWARE & RAW DIGITAL EXPERIENCES.
            </div>
            <div className="col-span-1 flex flex-col gap-4 text-sm font-grotesk uppercase tracking-wider">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#AAFF00] w-5 h-5" /> SYDNEY, NSW
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#AAFF00] w-5 h-5" /> FARHAN141549@GMAIL.COM
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#AAFF00] w-5 h-5" /> +61 416 279 264
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-32 px-6 border-b-4 border-white relative z-10">
        <motion.h2 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="font-serif-heavy text-7xl md:text-9xl mb-24 uppercase tracking-tighter"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-white">
          {/* Project 1 */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-white bg-black hover:bg-[#AAFF00] hover:text-black transition-colors duration-0 group relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-16">
              <h3 className="font-serif-heavy text-4xl md:text-6xl uppercase">Vortrexyn</h3>
              <ArrowUpRight className="w-12 h-12" />
            </div>
            <p className="font-grotesk text-xl md:text-2xl font-bold mb-8 uppercase">Premium Car Rental System</p>
            <p className="font-grotesk text-sm mb-12 opacity-80 group-hover:opacity-100 max-w-md uppercase leading-relaxed">
              Full-stack web app. Car browsing, reservations, PayPal payments, admin dashboard with DALL-E 3 AI image generation.
            </p>
            <div className="flex flex-wrap gap-2 mb-12">
              {['HTML5', 'JavaScript', 'Tailwind', 'Firebase', 'Node.js', 'Express', 'DALL-E 3', 'PayPal'].map(tech => (
                <span key={tech} className="border border-current px-3 py-1 text-xs font-bold uppercase">{tech}</span>
              ))}
            </div>
            <a href="https://github.com/FarhanHossen/vortrexyn-car-rental" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b-2 border-current pb-1 font-bold uppercase hover:opacity-50">
              <Github className="w-5 h-5" /> View Source
            </a>
          </motion.div>
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="p-10 bg-zinc-900 flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
             <div className="absolute inset-0 opacity-10 font-serif-heavy text-[20vw] leading-none flex items-center justify-center pointer-events-none select-none">01</div>
             <Terminal className="w-24 h-24 text-[#AAFF00] mb-8 relative z-10" />
             <div className="text-xl font-bold uppercase tracking-widest relative z-10">Production Ready</div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-32 px-6 border-b-4 border-white relative z-10 bg-[#AAFF00] text-black">
        <motion.h2 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="font-serif-heavy text-7xl md:text-9xl mb-24 uppercase tracking-tighter text-black"
        >
          Experience
        </motion.h2>

        <div className="max-w-5xl border-t-4 border-black">
          {[
            { role: "Team Member", company: "Woolworths Primary Connect", date: "Nov 2025–Present" },
            { role: "Junior Chef / Kitchen Hand", company: "Matinee Coffee", date: "Jul 2024–Oct 2025" },
            { role: "Houseperson / Room Attendant", company: "Crown Towers Sydney", date: "Sep 2023–Jun 2024" }
          ].map((job, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }}
              variants={revealVariants}
              className="py-12 border-b-4 border-black grid grid-cols-1 md:grid-cols-4 gap-8 group"
            >
              <div className="col-span-1 font-grotesk font-bold text-xl uppercase tracking-tighter">
                {job.date}
              </div>
              <div className="col-span-1 md:col-span-3">
                <h3 className="font-serif-heavy text-4xl md:text-5xl uppercase mb-2">{job.company}</h3>
                <div className="font-grotesk text-xl font-bold uppercase border-l-4 border-black pl-4 mt-6">{job.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="py-32 px-6 border-b-4 border-white relative z-10">
        <motion.h2 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="font-serif-heavy text-7xl md:text-9xl mb-24 uppercase tracking-tighter"
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            { degree: "Master of IT", spec: "Enterprise Software Dev + Cyber Security", school: "UTS", date: "Aug 2023–Jul 2025", honors: "Graduated with Distinction" },
            { degree: "BSc Computer Science", spec: "Software Engineering", school: "BRAC University", date: "Jan 2019–Jan 2023", honors: "Graduated with High Distinction" }
          ].map((edu, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }}
              variants={revealVariants}
              className="border-2 border-white p-10 hover:border-[#AAFF00] transition-colors duration-0"
            >
              <div className="font-grotesk text-[#AAFF00] font-bold text-sm uppercase mb-8 pb-4 border-b-2 border-white/20">
                {edu.date}
              </div>
              <h3 className="font-serif-heavy text-4xl md:text-5xl uppercase mb-6">{edu.school}</h3>
              <div className="font-grotesk text-2xl font-bold uppercase mb-4">{edu.degree}</div>
              <p className="font-grotesk text-sm uppercase opacity-70 mb-8">{edu.spec}</p>
              <div className="inline-block bg-white text-black font-bold uppercase text-xs px-3 py-1">
                {edu.honors}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-32 px-6 border-b-4 border-white relative z-10">
        <motion.h2 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="font-serif-heavy text-7xl md:text-9xl mb-24 uppercase tracking-tighter text-[#AAFF00]"
        >
          Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {[
            { title: "Languages", items: ['TypeScript', 'JavaScript', 'Python', 'HTML/CSS', 'SQL'] },
            { title: "Frontend & Backend", items: ['React', 'Tailwind CSS', 'Node.js', 'Express'] },
            { title: "Infrastructure", items: ['Firebase', 'PostgreSQL', 'REST APIs', 'Docker', 'Git'] }
          ].map((category, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }}
              variants={revealVariants}
            >
              <h3 className="font-grotesk text-2xl font-bold uppercase mb-8 border-b-4 border-white pb-4">{category.title}</h3>
              <ul className="flex flex-col gap-4">
                {category.items.map((skill, j) => (
                  <li key={j} className="font-serif-heavy text-3xl md:text-4xl uppercase flex items-center gap-4 hover:translate-x-4 transition-transform duration-75">
                    <span className="text-[#AAFF00] text-lg opacity-50">{(j + 1).toString().padStart(2, '0')}</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-32 px-6 relative z-10 bg-white text-black">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <h2 className="font-serif-heavy text-[12vw] leading-none mb-12 uppercase tracking-tighter">
            INITIATE
          </h2>
          <a href="mailto:farhan141549@gmail.com" className="group font-grotesk text-3xl md:text-5xl font-bold uppercase border-4 border-black px-12 py-8 hover:bg-black hover:text-[#AAFF00] transition-colors duration-0 w-full md:w-auto">
            Contact Me
            <ArrowUpRight className="inline-block ml-4 w-12 h-12 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-0" />
          </a>
          <div className="flex flex-wrap justify-center gap-8 mt-16 font-grotesk font-bold uppercase text-sm">
            <a href="mailto:farhan141549@gmail.com" className="hover:underline underline-offset-4">FARHAN141549@GMAIL.COM</a>
            <a href="tel:+61416279264" className="hover:underline underline-offset-4">+61 416 279 264</a>
            <a href="https://github.com/FarhanHossen" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">GITHUB</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default VariantA;
