import React, { useState, useEffect } from "react";
import { AlertCircle, Terminal, MapPin, ShieldCheck, Activity, Cpu, Code, Database, Globe, Smartphone, Lock } from "lucide-react";
import "./VariantOps.css";

export function VariantOps() {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center cyber-theme-ops p-4 sm:p-8">
      <div className="cyber-scanline"></div>
      <div className="cyber-crt"></div>
      
      <div className="w-full max-w-6xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        
        {/* Header Strip */}
        <div className="lg:col-span-12 flex justify-between items-center border-b border-[#FF3131]/30 pb-2 mb-4">
          <div className="flex items-center gap-4 text-xs tracking-widest text-[#FF3131]">
            <span className="flex items-center gap-2"><ShieldCheck size={14} /> SECURITY CLEARANCE: LEVEL 5</span>
            <span className="hidden sm:inline-block border-l border-[#FF3131]/30 pl-4">SYS_ID: FH-992.8</span>
          </div>
          <div className="text-xs text-[#FF6B35] tracking-wider animate-pulse">
            {time || 'SYS_INIT_SEQUENCE...'}
          </div>
        </div>

        {/* Left Column: Profile Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="cyber-border p-6 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="inline-flex items-center px-2 py-1 bg-green-900/30 border border-green-500/50 text-green-500 text-xs tracking-wider">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                SYS_ONLINE
              </div>
              <Terminal size={20} className="text-[#FF3131]" />
            </div>
            
            <div className="flex-grow flex flex-col justify-center relative">
              <div className="absolute -left-2 top-0 bottom-0 w-1 bg-[#FF3131]/20"></div>
              
              <h3 className="text-xs uppercase text-[#FF6B35] tracking-widest mb-1">Subject_ID</h3>
              <h1 className="text-4xl font-bold text-white mb-2 uppercase cyber-text-glow tracking-tighter">Farhan<br/>Hossen</h1>
              
              <div className="h-px w-16 bg-[#FF3131]/50 my-4"></div>
              
              <h3 className="text-xs uppercase text-[#FF6B35] tracking-widest mb-1">Designation</h3>
              <h2 className="text-lg text-[#c9d1d9] mb-6 tracking-wide uppercase">Software Developer</h2>
              
              <div className="flex items-center gap-2 text-sm text-[#8b949e]">
                <MapPin size={16} className="text-[#FF3131]" />
                <span className="uppercase tracking-wider">Sydney, NSW</span>
              </div>
            </div>
          </div>

          <div className="cyber-border p-4 flex flex-col gap-3">
             <div className="text-[10px] uppercase text-[#FF6B35] tracking-widest border-b border-[#FF3131]/20 pb-1">Current Status</div>
             <div className="flex items-center gap-3 text-sm">
               <Activity size={16} className="text-green-500" />
               <span className="uppercase text-green-500 tracking-wider">Available for Full-Time Operations</span>
             </div>
          </div>
        </div>

        {/* Right Column: Data Readout */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="cyber-border p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-6 border-b border-[#FF3131]/20 pb-2">
              <AlertCircle size={18} className="text-[#FF3131]" />
              <h2 className="text-sm uppercase tracking-widest text-[#FF3131]">Dossier_Contents</h2>
            </div>
            
            <div className="text-sm leading-relaxed text-[#c9d1d9] mb-8 space-y-4">
              <p>
                <span className="text-[#FF6B35]">&gt;</span> Master of Information Technology graduate (Enterprise Software Development & Cyber Security) from University of Technology Sydney.
              </p>
              <p>
                <span className="text-[#FF6B35]">&gt;</span> Software Developer with hands-on experience in full-stack web development, cross-platform mobile applications (iOS & Android), and cloud-based backend systems.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="border border-[#c9d1d9]/10 p-3 bg-black/40 flex flex-col items-center justify-center text-center gap-2 hover:border-[#FF3131]/50 transition-colors cursor-default">
                <Code size={20} className="text-[#FF6B35]" />
                <span className="text-xs uppercase tracking-wider">Frontend</span>
                <span className="text-[10px] text-gray-500">React.js, Flutter</span>
              </div>
              <div className="border border-[#c9d1d9]/10 p-3 bg-black/40 flex flex-col items-center justify-center text-center gap-2 hover:border-[#FF3131]/50 transition-colors cursor-default">
                <Database size={20} className="text-[#FF6B35]" />
                <span className="text-xs uppercase tracking-wider">Backend</span>
                <span className="text-[10px] text-gray-500">Node.js, Java</span>
              </div>
              <div className="border border-[#c9d1d9]/10 p-3 bg-black/40 flex flex-col items-center justify-center text-center gap-2 hover:border-[#FF3131]/50 transition-colors cursor-default">
                <Globe size={20} className="text-[#FF6B35]" />
                <span className="text-xs uppercase tracking-wider">Cloud</span>
                <span className="text-[10px] text-gray-500">AWS, Azure, Firebase</span>
              </div>
              <div className="border border-[#c9d1d9]/10 p-3 bg-black/40 flex flex-col items-center justify-center text-center gap-2 hover:border-[#FF3131]/50 transition-colors cursor-default">
                <Lock size={20} className="text-[#FF6B35]" />
                <span className="text-xs uppercase tracking-wider">Security</span>
                <span className="text-[10px] text-gray-500">Cyber Sec Ops</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="cyber-button px-6 py-3 text-sm font-bold flex items-center gap-2">
                <Terminal size={16} />
                Execute [View Projects]
              </button>
              <button className="cyber-button-alt px-6 py-3 text-sm font-bold flex items-center gap-2">
                <Activity size={16} />
                Initiate [Get in Touch]
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="cyber-border p-4 flex flex-col justify-center">
              <div className="text-[10px] uppercase text-[#FF6B35] tracking-widest mb-2">System Load</div>
              <div className="w-full h-2 bg-black/50 overflow-hidden border border-[#FF3131]/30">
                <div className="h-full bg-[#FF3131] w-[87%]"></div>
              </div>
              <div className="text-right text-[10px] mt-1 text-[#FF3131]">87% CAP</div>
            </div>
            <div className="cyber-border p-4 flex flex-col justify-center text-center">
               <div className="text-[10px] uppercase text-[#FF6B35] tracking-widest mb-1">Threat Level</div>
               <div className="text-lg font-bold text-green-500 tracking-widest">SECURE</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
