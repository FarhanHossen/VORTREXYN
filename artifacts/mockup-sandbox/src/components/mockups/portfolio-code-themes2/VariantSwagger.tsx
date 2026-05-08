import React, { useState } from 'react';
import { Lock, ChevronDown, ChevronRight, Server } from 'lucide-react';

export function VariantSwagger() {
  const [profileOpen, setProfileOpen] = useState(true);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const profileData = {
    name: "Farhan Hossen",
    role: "Software Developer",
    location: "Sydney, NSW, Australia",
    availability: "Open to full-time opportunities",
    education: "MIT — Enterprise Software & Cyber Security, UTS Sydney",
    bio: "Full-stack developer with expertise in Java, Dart, TypeScript, Flutter, React.js, Node.js, Firebase, AWS, and Azure.",
    skills: ["Java", "TypeScript", "Dart", "Flutter", "React.js", "Node.js", "Firebase", "AWS", "Azure"]
  };

  const codeString = JSON.stringify(profileData, null, 2);

  return (
    <div className="min-h-screen bg-[#1b1b1b] text-gray-300 font-sans selection:bg-[#49cc90] selection:text-black">
      {/* Top Bar */}
      <div className="bg-[#1f2d3d] px-5 py-3 flex items-center justify-between border-b border-[#3b4151]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-4 border-[#89bf04] flex items-center justify-center relative bg-white">
              <div className="w-4 h-4 bg-transparent border-t-2 border-r-2 border-[#89bf04] rotate-45 transform translate-y-[2px] -translate-x-[1px]"></div>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">swagger</span>
          </div>
          <div className="w-[1px] h-6 bg-[#3b4151] mx-2"></div>
          <span className="text-gray-400 text-sm">Portfolio UI</span>
        </div>
        <div className="flex bg-[#3b4151] rounded text-sm overflow-hidden">
           <div className="px-3 py-1 text-white border-r border-[#1f2d3d]">Explore</div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-5 pb-20">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-white tracking-tight">Farhan Hossen Portfolio API</h1>
              <span className="bg-[#49cc90] text-black text-xs font-bold px-2 py-1 rounded-full uppercase">v1.0.0</span>
              <span className="bg-[#49cc90] text-white text-xs font-bold px-2 py-1 rounded-full uppercase bg-opacity-20">OAS3</span>
            </div>
          </div>
          <div className="text-sm text-gray-400 mb-5">
            <p className="mb-2">A RESTful API describing the skills, projects, and background of Software Developer Farhan Hossen.</p>
            <a href="#" className="text-[#49cc90] hover:underline">Terms of service</a>
          </div>
          
          <div className="flex justify-between items-end">
            <div className="w-80">
              <label className="text-xs font-bold text-gray-400 mb-1 block">Servers</label>
              <div className="relative">
                <select className="w-full bg-transparent border border-[#3b4151] rounded px-3 py-2 text-sm text-white appearance-none cursor-pointer focus:outline-none focus:border-[#49cc90]">
                  <option className="bg-[#1b1b1b]">https://farhan.dev - Main production server</option>
                  <option className="bg-[#1b1b1b]">http://localhost:3000 - Local development</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <button className="flex items-center gap-2 border border-[#49cc90] text-[#49cc90] px-4 py-2 rounded hover:bg-[#49cc90] hover:bg-opacity-10 transition-colors">
              <span className="font-bold text-sm">Authorize</span>
              <Lock className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tags Sections */}
        <div className="space-y-6">
          {/* Default Tag */}
          <div>
            <div className="flex items-center justify-between border-b border-[#3b4151] pb-2 mb-4">
              <h2 className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300">portfolio</h2>
              <p className="text-sm text-gray-400 flex-1 ml-4">Core endpoints for retrieving developer information</p>
              <button className="p-1 hover:bg-[#3b4151] rounded"><ChevronDown className="w-5 h-5 text-gray-400" /></button>
            </div>

            <div className="space-y-3">
              {/* GET /profile */}
              <div className="rounded border border-[#49cc90] bg-[#49cc90] bg-opacity-[0.08] overflow-hidden">
                <div 
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-opacity-20"
                  onClick={() => setProfileOpen(!profileOpen)}
                >
                  <div className="w-20 shrink-0">
                    <span className="bg-[#49cc90] text-white font-bold text-sm px-3 py-1 rounded w-full inline-block text-center shadow-sm">GET</span>
                  </div>
                  <div className="font-bold text-white text-base font-mono ml-4 shrink-0">/profile</div>
                  <div className="text-sm text-gray-300 ml-4 hidden md:block flex-1 truncate">Returns developer profile & bio</div>
                  <button className="ml-auto text-gray-400">
                    {profileOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>
                
                {profileOpen && (
                  <div className="border-t border-[#49cc90] border-opacity-30 p-5 bg-[#1b1b1b]">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-sm font-bold text-white border-b border-[#3b4151] pb-2 flex-1">Parameters</h4>
                      <button className="ml-4 border border-[#3b4151] rounded px-4 py-1 text-sm font-bold bg-[#3b4151] text-white hover:bg-opacity-80">
                        Try it out
                      </button>
                    </div>
                    <div className="text-sm text-gray-400 mb-6 italic">No parameters</div>

                    <div className="mb-2">
                      <h4 className="text-sm font-bold text-white border-b border-[#3b4151] pb-2">Responses</h4>
                    </div>
                    
                    <div className="bg-[#222222] rounded p-4 border border-[#3b4151]">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-white">Code</span>
                          <span className="text-sm font-bold text-white">Description</span>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        <div className="w-20 text-sm font-mono text-white">200</div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-300 mb-3">Successful operation</div>
                          <div className="bg-[#333] rounded overflow-hidden">
                            <div className="bg-[#444] px-3 py-1 text-xs text-gray-300 flex justify-between">
                              <span className="font-mono">application/json</span>
                            </div>
                            <pre className="p-4 text-sm font-mono text-[#a5d6ff] overflow-x-auto whitespace-pre-wrap leading-relaxed">
                              {`{
  "name": "Farhan Hossen",
  "role": "Software Developer",
  "location": "Sydney, NSW, Australia",
  "availability": "Open to full-time opportunities",
  "education": "MIT — Enterprise Software & Cyber Security, UTS Sydney",
  "bio": "Full-stack developer with expertise in Java, Dart, TypeScript, Flutter, React.js, Node.js, Firebase, AWS, and Azure.",
  "skills": [
    "Java",
    "TypeScript",
    "Dart",
    "Flutter",
    "React.js",
    "Node.js",
    "Firebase",
    "AWS",
    "Azure"
  ]
}`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* GET /skills */}
              <div className="rounded border border-[#49cc90] bg-[#49cc90] bg-opacity-[0.08] overflow-hidden">
                <div 
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#49cc90] hover:bg-opacity-[0.12]"
                  onClick={() => setSkillsOpen(!skillsOpen)}
                >
                  <div className="w-20 shrink-0">
                    <span className="bg-[#49cc90] text-white font-bold text-sm px-3 py-1 rounded w-full inline-block text-center shadow-sm">GET</span>
                  </div>
                  <div className="font-bold text-white text-base font-mono ml-4 shrink-0">/skills</div>
                  <div className="text-sm text-gray-300 ml-4 hidden md:block flex-1 truncate">Returns technical skill set</div>
                  <button className="ml-auto text-gray-400">
                    {skillsOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* GET /projects */}
              <div className="rounded border border-[#49cc90] bg-[#49cc90] bg-opacity-[0.08] overflow-hidden">
                <div 
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#49cc90] hover:bg-opacity-[0.12]"
                  onClick={() => setProjectsOpen(!projectsOpen)}
                >
                  <div className="w-20 shrink-0">
                    <span className="bg-[#49cc90] text-white font-bold text-sm px-3 py-1 rounded w-full inline-block text-center shadow-sm">GET</span>
                  </div>
                  <div className="font-bold text-white text-base font-mono ml-4 shrink-0">/projects</div>
                  <div className="text-sm text-gray-300 ml-4 hidden md:block flex-1 truncate">Returns portfolio projects</div>
                  <button className="ml-auto text-gray-400">
                    {projectsOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* POST /contact */}
              <div className="rounded border border-[#61affe] bg-[#61affe] bg-opacity-[0.08] overflow-hidden">
                <div 
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#61affe] hover:bg-opacity-[0.12]"
                  onClick={() => setContactOpen(!contactOpen)}
                >
                  <div className="w-20 shrink-0">
                    <span className="bg-[#61affe] text-white font-bold text-sm px-3 py-1 rounded w-full inline-block text-center shadow-sm">POST</span>
                  </div>
                  <div className="font-bold text-white text-base font-mono ml-4 shrink-0">/contact</div>
                  <div className="text-sm text-gray-300 ml-4 hidden md:block flex-1 truncate">Send a message to Farhan</div>
                  <button className="ml-auto text-gray-400">
                    {contactOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* Models Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between border-b border-[#3b4151] pb-2 mb-4">
            <h2 className="text-xl font-bold text-white cursor-pointer hover:text-gray-300">Models</h2>
            <button className="p-1 hover:bg-[#3b4151] rounded"><ChevronDown className="w-5 h-5 text-gray-400" /></button>
          </div>
          
          <div className="border border-[#3b4151] rounded p-4 bg-[#222]">
            <div className="flex items-center justify-between mb-3 cursor-pointer">
              <span className="font-mono text-base font-bold text-white">Developer</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="pl-4 border-l-2 border-[#3b4151] ml-2 text-sm font-mono">
              <div className="text-[#a5d6ff]">{"{"}</div>
              <div className="pl-4 space-y-1">
                <div><span className="text-white">name</span><span className="text-gray-500">*</span> <span className="text-[#89bf04]">string</span></div>
                <div><span className="text-white">role</span><span className="text-gray-500">*</span> <span className="text-[#89bf04]">string</span></div>
                <div><span className="text-white">location</span> <span className="text-[#89bf04]">string</span></div>
                <div><span className="text-white">availability</span> <span className="text-[#89bf04]">string</span></div>
                <div><span className="text-white">education</span> <span className="text-[#89bf04]">string</span></div>
                <div><span className="text-white">bio</span> <span className="text-[#89bf04]">string</span></div>
                <div><span className="text-white">skills</span> <span className="text-[#89bf04]">Array[string]</span></div>
              </div>
              <div className="text-[#a5d6ff]">{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
