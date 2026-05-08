import React, { useState } from 'react';
import { Play, X, GripVertical, Terminal, FileCode2, Maximize2, Minimize2, Circle, Settings } from 'lucide-react';
import './VariantSplitCode.css';

export function VariantSplitCode() {
  const [leftWidth, setLeftWidth] = useState(55);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newWidth = (e.clientX / window.innerWidth) * 100;
    if (newWidth > 20 && newWidth < 80) {
      setLeftWidth(newWidth);
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col bg-[#111827] text-white font-sans overflow-hidden selection:bg-[#264f78]"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Panel: Code Editor */}
        <div style={{ width: `${leftWidth}%` }} className="flex flex-col bg-[#1e1e1e] border-r border-[#2d2d2d] relative">
          
          {/* Editor Tabs */}
          <div className="flex items-center bg-[#252526] text-sm text-[#969696] overflow-x-auto select-none">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e1e] border-t-2 border-t-[#007acc] text-[#cccccc] cursor-pointer">
              <FileCode2 size={14} className="text-[#519aba]" />
              <span>Portfolio.tsx</span>
              <X size={14} className="hover:bg-[#333333] rounded ml-1 cursor-pointer transition-colors" />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-[#2a2d2e] cursor-pointer transition-colors">
              <FileCode2 size={14} className="text-[#cbcb41]" />
              <span>styles.css</span>
            </div>
            <div className="flex-1"></div>
            <div className="flex items-center gap-3 px-3">
              <div className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
                <Play size={14} className="text-[#89d185]" />
                <span>Run</span>
              </div>
              <span className="bg-[#007acc] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">TSX</span>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 px-4 py-1 text-xs text-[#969696] bg-[#1e1e1e] border-b border-[#2d2d2d]">
            <span>src</span>
            <span>›</span>
            <span>components</span>
            <span>›</span>
            <span className="text-[#cccccc]">Portfolio.tsx</span>
          </div>

          {/* Code Area */}
          <div className="flex-1 overflow-auto bg-[#1e1e1e] pt-2 pb-8 code-font text-[14px] leading-[1.6]">
            <div className="flex">
              {/* Line Numbers */}
              <div className="flex flex-col text-right px-4 text-[#858585] select-none border-r border-[#2d2d2d] mr-4 min-w-[3.5rem]">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              
              {/* Code Content */}
              <div className="flex-1 whitespace-pre pr-4">
                <div><span className="text-[#c586c0]">import</span> <span className="text-[#4fc1ff]">React</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'react'</span><span className="text-[#cccccc]">;</span></div>
                <div><span className="text-[#c586c0]">import</span> <span className="text-[#cccccc]">{'{'}</span> <span className="text-[#4fc1ff]">Button</span> <span className="text-[#cccccc]">{'}'}</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'@/components/ui/button'</span><span className="text-[#cccccc]">;</span></div>
                <div><span className="text-[#c586c0]">import</span> <span className="text-[#ce9178]">'./styles.css'</span><span className="text-[#cccccc]">;</span></div>
                <div className="h-6"></div>
                <div><span className="text-[#569cd6]">export</span> <span className="text-[#569cd6]">default</span> <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">Portfolio</span><span className="text-[#cccccc]">() {'{'}</span></div>
                <div><span className="text-[#cccccc]">  </span><span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">developer</span> <span className="text-[#cccccc]">= {'{'}</span></div>
                <div><span className="text-[#cccccc]">    name: </span><span className="text-[#ce9178]">'Farhan Hossen'</span><span className="text-[#cccccc]">,</span></div>
                <div><span className="text-[#cccccc]">    role: </span><span className="text-[#ce9178]">'Software Developer'</span><span className="text-[#cccccc]">,</span></div>
                <div><span className="text-[#cccccc]">    education: </span><span className="text-[#ce9178]">'MIT graduate from UTS Sydney'</span><span className="text-[#cccccc]">,</span></div>
                <div><span className="text-[#cccccc]">    skills: [</span><span className="text-[#ce9178]">'Java'</span><span className="text-[#cccccc]">, </span><span className="text-[#ce9178]">'Dart'</span><span className="text-[#cccccc]">, </span><span className="text-[#ce9178]">'TypeScript'</span><span className="text-[#cccccc]">, </span><span className="text-[#ce9178]">'React.js'</span><span className="text-[#cccccc]">, </span><span className="text-[#ce9178]">'Node.js'</span><span className="text-[#cccccc]">, </span><span className="text-[#ce9178]">'AWS'</span><span className="text-[#cccccc]">],</span></div>
                <div><span className="text-[#cccccc]">    location: </span><span className="text-[#ce9178]">'Sydney, NSW'</span></div>
                <div><span className="text-[#cccccc]">  {'}'};</span></div>
                <div className="h-6"></div>
                <div><span className="text-[#cccccc]">  </span><span className="text-[#c586c0]">return</span> <span className="text-[#cccccc]">(</span></div>
                <div><span className="text-[#cccccc]">    </span><span className="text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">main</span> <span className="text-[#9cdcfe]">className</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"portfolio-container"</span><span className="text-[#808080]">&gt;</span></div>
                <div><span className="text-[#cccccc]">      </span><span className="text-[#6a9955]">{`{/* Hero Section */}`}</span></div>
                <div><span className="text-[#cccccc]">      </span><span className="text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">header</span> <span className="text-[#9cdcfe]">className</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"hero"</span><span className="text-[#808080]">&gt;</span></div>
                <div><span className="text-[#cccccc]">        </span><span className="text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">h1</span> <span className="text-[#9cdcfe]">className</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"name-title"</span><span className="text-[#808080]">&gt;</span></div>
                <div><span className="text-[#cccccc]">          {`{`}developer.name{`}`}</span></div>
                <div><span className="text-[#cccccc]">        </span><span className="text-[#808080]">&lt;/</span><span className="text-[#4ec9b0]">h1</span><span className="text-[#808080]">&gt;</span></div>
                <div><span className="text-[#cccccc]">        </span><span className="text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">h2</span> <span className="text-[#9cdcfe]">className</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"role-subtitle"</span><span className="text-[#808080]">&gt;</span></div>
                <div><span className="text-[#cccccc]">          {`{`}developer.role{`}`}</span></div>
                <div><span className="text-[#cccccc]">        </span><span className="text-[#808080]">&lt;/</span><span className="text-[#4ec9b0]">h2</span><span className="text-[#808080]">&gt;</span></div>
                <div><span className="text-[#cccccc]">        </span><span className="text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">p</span> <span className="text-[#9cdcfe]">className</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"bio-text"</span><span className="text-[#808080]">&gt;</span></div>
                <div><span className="text-[#cccccc]">          {`{`}developer.education{`}`}. Full-stack developer with</span></div>
                <div><span className="text-[#cccccc]">          expertise in modern web and mobile technologies.</span></div>
                <div><span className="text-[#cccccc]">          Available for full-time opportunities in {`{`}developer.location{`}`}.</span></div>
                <div><span className="text-[#cccccc]">        </span><span className="text-[#808080]">&lt;/</span><span className="text-[#4ec9b0]">p</span><span className="text-[#808080]">&gt;</span></div>
                <div><span className="text-[#cccccc]">        </span><span className="text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">div</span> <span className="text-[#9cdcfe]">className</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"cta-group"</span><span className="text-[#808080]">&gt;</span></div>
                <div><span className="text-[#cccccc]">          </span><span className="text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">Button</span> <span className="text-[#9cdcfe]">variant</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"primary"</span><span className="text-[#808080]">&gt;</span><span className="text-[#cccccc]">View Projects</span><span className="text-[#808080]">&lt;/</span><span className="text-[#4ec9b0]">Button</span><span className="text-[#808080]">&gt;</span></div>
                <div><span className="text-[#cccccc]">          </span><span className="text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">Button</span> <span className="text-[#9cdcfe]">variant</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"outline"</span><span className="text-[#808080]">&gt;</span><span className="text-[#cccccc]">Get in Touch</span><span className="blinking-cursor"></span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Drag Handle */}
        <div 
          className="w-1.5 bg-[#252526] hover:bg-[#007acc] cursor-col-resize flex flex-col items-center justify-center transition-colors group z-10"
          onMouseDown={handleMouseDown}
        >
          <GripVertical size={12} className="text-[#858585] group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Right Panel: Preview */}
        <div style={{ width: `${100 - leftWidth}%` }} className="flex flex-col bg-[#ffffff] text-[#111827]">
          {/* Browser Chrome */}
          <div className="flex items-center px-4 py-2 bg-[#f3f4f6] border-b border-[#e5e7eb]">
            <div className="flex gap-1.5 mr-4">
              <Circle size={12} className="fill-[#ef4444] text-[#ef4444]" />
              <Circle size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
              <Circle size={12} className="fill-[#10b981] text-[#10b981]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white px-6 py-1 rounded-md text-xs text-[#6b7280] flex items-center shadow-sm w-full max-w-sm border border-[#e5e7eb]">
                <span className="truncate">localhost:3000</span>
              </div>
            </div>
            <div className="flex gap-2 text-[#9ca3af]">
              <Minimize2 size={14} className="hover:text-[#4b5563] cursor-pointer" />
              <Maximize2 size={14} className="hover:text-[#4b5563] cursor-pointer" />
            </div>
          </div>

          {/* Actual Preview Content */}
          <div className="flex-1 overflow-auto bg-[#0f172a] text-white p-8 sm:p-12 md:p-16 flex items-center justify-center relative shadow-inner">
            <div className="max-w-2xl w-full">
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-2">
                    Available for Work
                  </div>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
                    Farhan Hossen<span className="text-blue-500">.</span>
                  </h1>
                  <h2 className="text-2xl sm:text-3xl font-medium text-slate-300">
                    Software Developer
                  </h2>
                </div>

                <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                  MIT graduate from UTS Sydney. Full-stack developer with expertise in Java, Dart, TypeScript, Flutter, React.js, Node.js, Firebase, AWS, and Azure. Available for full-time opportunities in Sydney, NSW.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
                    View Projects
                  </button>
                  <button className="px-6 py-3 bg-transparent text-white border border-slate-700 font-medium rounded-lg hover:bg-slate-800 transition-colors">
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 text-[11px] font-medium code-font select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1.5 py-0.5 rounded cursor-pointer transition-colors">
            <Terminal size={12} />
            <span>Terminal</span>
          </div>
          <span className="hidden sm:inline">⚡ Vite 5.0</span>
          <span>TypeScript</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <X size={12} />
            <span>0 errors</span>
          </div>
          <span className="hidden md:inline">Hot Module Replacement Active</span>
          <div className="hover:bg-[#1f8ad2] px-1.5 py-0.5 rounded cursor-pointer transition-colors">
            <Settings size={12} />
          </div>
        </div>
      </div>
    </div>
  );
}
