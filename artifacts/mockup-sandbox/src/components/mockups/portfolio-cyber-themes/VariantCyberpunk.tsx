import React from 'react';
import './VariantCyberpunk.css';

export function VariantCyberpunk() {
  return (
    <div className="min-h-screen bg-cyber-dark text-white relative overflow-hidden font-cyber flex items-center justify-center p-6">
      <div className="scanline"></div>
      
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF007F] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#BF00FF] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl w-full cyber-border bg-[#0a0010]/80 backdrop-blur-sm p-8 md:p-12 z-10 relative">
        <div className="absolute top-0 right-8 px-4 py-1 bg-[#FF007F] text-[#0a0010] font-bold text-xs tracking-widest font-mono-cyber transform -translate-y-1/2">
          SYS.STATUS: ONLINE
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-[#FF007F] font-mono-cyber font-bold tracking-widest text-sm border border-[#FF007F] px-2 py-1 bg-[#FF007F]/10">
                  ID: 8993-FH
                </span>
                <span className="text-[#BF00FF] font-mono-cyber font-bold tracking-widest text-sm border border-[#BF00FF] px-2 py-1 bg-[#BF00FF]/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#BF00FF] animate-ping"></span>
                  SYDNEY_NSW
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold uppercase cyber-glitch-text text-white tracking-tight" data-text="Farhan Hossen">
                Farhan Hossen
              </h1>
              <h2 className="text-2xl md:text-3xl text-[#BF00FF] font-medium tracking-wide">
                SOFTWARE DEVELOPER
              </h2>
            </div>

            <div className="font-mono-cyber text-gray-300 text-sm leading-relaxed space-y-4 max-w-2xl border-l-2 border-[#FF007F] pl-4">
              <p>
                &gt; Master of Information Technology graduate (Enterprise Software Development & Cyber Security) from University of Technology Sydney.
              </p>
              <p>
                &gt; Software Developer with hands-on experience in full-stack web development, cross-platform mobile applications (iOS & Android), and cloud-based backend systems.
              </p>
              <p>
                &gt; Proficient in <span className="text-[#FF007F]">Java, Dart, TypeScript, Flutter, React.js, Node.js, Firebase, AWS, and Azure</span>.
              </p>
              <p className="text-[#BF00FF] animate-pulse">
                &gt; Status: Available for full-time opportunities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="cyber-btn px-8 py-3 font-bold text-sm">
                [ View Projects ]
              </button>
              <button className="cyber-btn cyber-btn-alt px-8 py-3 font-bold text-sm">
                [ Get in Touch ]
              </button>
            </div>
          </div>
          
          <div className="hidden md:block w-64 h-64 relative cyber-border p-2">
             {/* Decorative element resembling an avatar placeholder */}
             <div className="w-full h-full bg-[#1a0024] relative overflow-hidden flex items-center justify-center border border-[#BF00FF]/30">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF007F]/20 to-[#BF00FF]/20"></div>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #FF007F 2px, #FF007F 4px)', backgroundSize: '100% 4px' }}></div>
                <div className="font-mono-cyber text-[#FF007F] text-5xl font-bold opacity-50 z-10 glitch-avatar">FH</div>
                
                {/* Decorative lines */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#FF007F]"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#BF00FF]"></div>
             </div>
          </div>
        </div>
        
        {/* Bottom decorative bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF007F] to-[#BF00FF]"></div>
      </div>
    </div>
  );
}
