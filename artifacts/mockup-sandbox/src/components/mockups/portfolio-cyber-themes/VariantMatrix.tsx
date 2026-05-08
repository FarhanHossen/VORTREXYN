import React, { useEffect, useState } from "react";
import "./VariantMatrix.css";

export function VariantMatrix() {
  const [rain, setRain] = useState<string[]>([]);

  useEffect(() => {
    // Generate random binary/hex strings for the rain
    const columns = [];
    for (let i = 0; i < 50; i++) {
      let text = "";
      for (let j = 0; j < 40; j++) {
        text += Math.random() > 0.5 ? "1\n" : "0\n";
      }
      columns.push(text);
    }
    setRain(columns);
  }, []);

  return (
    <div className="matrix-theme matrix-crt min-h-screen flex items-center justify-center p-4 sm:p-8">
      {/* Matrix Rain Background */}
      <div className="matrix-rain">
        {rain.map((text, i) => (
          <div
            key={i}
            className="rain-column"
            style={{
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `-${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          >
            {text}
          </div>
        ))}
      </div>

      <div className="relative z-20 max-w-4xl w-full matrix-border bg-[#030303]/90 p-6 sm:p-10 backdrop-blur-sm">
        
        {/* Terminal Header */}
        <div className="flex justify-between items-center border-b border-[#00FF41]/30 pb-2 mb-6 text-sm opacity-80">
          <span>root@system:~</span>
          <span>TTY1</span>
        </div>

        {/* Content */}
        <div className="space-y-6">
          
          <div>
            <span className="text-[#008F11]">guest@portfolio:~$</span>
            <span className="ml-2 typing-text inline-block matrix-glow">whoami</span>
          </div>

          <div className="pl-4 border-l-2 border-[#00FF41]/30 py-2 mt-2 space-y-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight matrix-glow">
              Farhan Hossen
            </h1>
            <p className="text-xl sm:text-2xl text-[#00FF41]/80">
              [ Software Developer ]
            </p>
          </div>

          <div className="mt-8">
            <span className="text-[#008F11]">guest@portfolio:~$</span>
            <span className="ml-2 matrix-glow">cat bio.txt</span>
          </div>

          <div className="pl-4 border-l-2 border-[#00FF41]/30 py-2 mt-2 text-sm sm:text-base leading-relaxed opacity-90 max-w-2xl">
            <p>
              Master of Information Technology graduate (Enterprise Software Development & Cyber Security) 
              from University of Technology Sydney. Software Developer with hands-on experience in 
              full-stack web development, cross-platform mobile applications (iOS & Android), and 
              cloud-based backend systems.
            </p>
            <p className="mt-4">
              &gt; Proficient in: Java, Dart, TypeScript, Flutter, React.js, Node.js, Firebase, AWS, and Azure.
            </p>
            <p className="mt-4 text-[#00FF41]/70">
              Location: Sydney, NSW | Status: Available for full-time opportunities
            </p>
          </div>

          <div className="mt-8 pt-4">
            <span className="text-[#008F11]">guest@portfolio:~$</span>
            <span className="ml-2 blink-cursor matrix-glow">./execute_action.sh</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 pl-4">
            <button className="matrix-border bg-transparent text-[#00FF41] px-6 py-3 hover:bg-[#00FF41] hover:text-black transition-colors duration-200 font-bold focus:outline-none focus:ring-2 focus:ring-[#00FF41] focus:ring-offset-2 focus:ring-offset-black uppercase tracking-wider text-sm">
              [ View Projects ]
            </button>
            <button className="matrix-border bg-transparent text-[#00FF41] px-6 py-3 hover:bg-[#00FF41] hover:text-black transition-colors duration-200 font-bold focus:outline-none focus:ring-2 focus:ring-[#00FF41] focus:ring-offset-2 focus:ring-offset-black uppercase tracking-wider text-sm">
              [ Get in Touch ]
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
