import { useState } from "react";
import { ChevronRight, ChevronDown, FileText, FileCode, Folder, FolderOpen, Bell, Settings, User } from "lucide-react";
import "./VariantVSCode.css";

const CodeLine = ({ number, children }: { number: number; children: React.ReactNode }) => (
  <div className="flex font-mono text-[13px] sm:text-sm leading-6 hover:bg-[#2a2d2e] group px-4">
    <div className="w-10 text-right pr-4 select-none text-[#858585] border-r border-[#404040] group-hover:text-[#c6c6c6]">
      {number}
    </div>
    <div className="pl-4 whitespace-pre wrap-text w-full">{children}</div>
  </div>
);

export function VariantVSCode() {
  const [activeTab, setActiveTab] = useState("profile.ts");
  const [folders, setFolders] = useState({
    src: true,
    projects: false,
    experience: false,
    skills: false,
  });

  const toggleFolder = (folder: keyof typeof folders) => {
    setFolders(prev => ({ ...prev, [folder]: !prev[folder] }));
  };

  const tabs = [
    { name: "profile.ts", icon: <FileCode className="w-4 h-4 text-[#519aba]" />, active: activeTab === "profile.ts" },
    { name: "skills.json", icon: <FileCode className="w-4 h-4 text-[#cbcb41]" />, active: activeTab === "skills.json" },
    { name: "contact.md", icon: <FileText className="w-4 h-4 text-[#42aaeb]" />, active: activeTab === "contact.md" }
  ];

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#cccccc] font-mono flex flex-col overflow-hidden selection:bg-[#264f78]">
      
      {/* Activity Bar */}
      <div className="flex flex-1 overflow-hidden">
        <div className="w-12 bg-[#333333] flex flex-col items-center py-4 space-y-6 border-r border-[#252526] z-10 shrink-0">
          <FileCode className="w-6 h-6 text-[#ffffff] opacity-100 cursor-pointer" />
          <User className="w-6 h-6 text-[#858585] hover:text-white cursor-pointer transition-colors" />
          <div className="flex-1"></div>
          <Bell className="w-6 h-6 text-[#858585] hover:text-white cursor-pointer transition-colors" />
          <Settings className="w-6 h-6 text-[#858585] hover:text-white cursor-pointer transition-colors" />
        </div>

        {/* Sidebar */}
        <div className="w-48 sm:w-64 bg-[#252526] flex flex-col border-r border-[#1e1e1e] shrink-0">
          <div className="text-[11px] uppercase tracking-wider text-[#cccccc] px-4 py-2 font-semibold select-none flex items-center">
            <ChevronDown className="w-3 h-3 mr-1" /> EXPLORER
          </div>
          
          <div className="flex-1 overflow-y-auto overflow-x-hidden pt-1">
            <div className="px-2">
              <div 
                className="flex items-center text-sm py-1 px-2 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc] font-semibold"
                onClick={() => toggleFolder('src')}
              >
                {folders.src ? <ChevronDown className="w-4 h-4 mr-1" /> : <ChevronRight className="w-4 h-4 mr-1" />}
                {folders.src ? <FolderOpen className="w-4 h-4 mr-2 text-[#dcb67a]" /> : <Folder className="w-4 h-4 mr-2 text-[#dcb67a]" />}
                PORTFOLIO
              </div>
              
              {folders.src && (
                <div className="ml-4 border-l border-[#404040] pl-2">
                  <div 
                    className="flex items-center text-sm py-1 px-2 cursor-pointer bg-[#37373d] text-white rounded-sm"
                  >
                    <FileCode className="w-4 h-4 mr-2 text-[#519aba]" />
                    profile.ts
                  </div>
                  <div 
                    className="flex items-center text-sm py-1 px-2 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]"
                    onClick={() => setActiveTab('skills.json')}
                  >
                    <FileCode className="w-4 h-4 mr-2 text-[#cbcb41]" />
                    skills.json
                  </div>
                  <div 
                    className="flex items-center text-sm py-1 px-2 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]"
                    onClick={() => setActiveTab('contact.md')}
                  >
                    <FileText className="w-4 h-4 mr-2 text-[#42aaeb]" />
                    contact.md
                  </div>
                </div>
              )}

              <div 
                className="flex items-center text-sm py-1 px-2 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc] font-semibold mt-1"
                onClick={() => toggleFolder('projects')}
              >
                {folders.projects ? <ChevronDown className="w-4 h-4 mr-1" /> : <ChevronRight className="w-4 h-4 mr-1" />}
                {folders.projects ? <FolderOpen className="w-4 h-4 mr-2 text-[#dcb67a]" /> : <Folder className="w-4 h-4 mr-2 text-[#dcb67a]" />}
                projects
              </div>
              <div 
                className="flex items-center text-sm py-1 px-2 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc] font-semibold mt-1"
                onClick={() => toggleFolder('experience')}
              >
                {folders.experience ? <ChevronDown className="w-4 h-4 mr-1" /> : <ChevronRight className="w-4 h-4 mr-1" />}
                {folders.experience ? <FolderOpen className="w-4 h-4 mr-2 text-[#dcb67a]" /> : <Folder className="w-4 h-4 mr-2 text-[#dcb67a]" />}
                experience
              </div>
            </div>
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
          {/* Tabs */}
          <div className="flex bg-[#252526] overflow-x-auto no-scrollbar border-b border-[#1e1e1e]">
            {tabs.map((tab) => (
              <div 
                key={tab.name}
                className={`flex items-center px-4 py-2 text-[13px] cursor-pointer min-w-max border-t-2 ${tab.active ? 'bg-[#1e1e1e] text-white border-t-[#007acc]' : 'bg-[#2d2d2d] text-[#858585] border-t-transparent hover:bg-[#2b2b2b]'}`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.icon}
                <span className="ml-2">{tab.name}</span>
                {tab.active && <div className="ml-3 w-2 h-2 rounded-full bg-white opacity-20 hover:opacity-100 flex items-center justify-center text-[10px]">x</div>}
              </div>
            ))}
            <div className="flex-1 bg-[#252526]"></div>
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center px-4 py-1.5 text-xs text-[#858585] border-b border-[#252526] min-h-[28px] overflow-hidden">
            <span className="cursor-pointer hover:text-[#cccccc]">PORTFOLIO</span>
            <ChevronRight className="w-3 h-3 mx-1" />
            <span className="cursor-pointer hover:text-[#cccccc]">{activeTab}</span>
          </div>

          {/* Code Area */}
          <div className="flex-1 overflow-y-auto py-4 w-full">
            <div className="vscode-font">
              <CodeLine number={1}>
                <span className="text-[#569cd6]">import</span> {'{'} <span className="text-[#4ec9b0]">Developer</span>, <span className="text-[#4ec9b0]">Portfolio</span> {'}'} <span className="text-[#569cd6]">from</span> <span className="text-[#ce9178]">'@types/tech'</span>;
              </CodeLine>
              <CodeLine number={2}>{""}</CodeLine>
              <CodeLine number={3}>
                <span className="text-[#6a9955]">/**</span>
              </CodeLine>
              <CodeLine number={4}>
                <span className="text-[#6a9955]"> * Master of Information Technology graduate</span>
              </CodeLine>
              <CodeLine number={5}>
                <span className="text-[#6a9955]"> * Enterprise Software Development & Cyber Security</span>
              </CodeLine>
              <CodeLine number={6}>
                <span className="text-[#6a9955]"> */</span>
              </CodeLine>
              <CodeLine number={7}>
                <span className="text-[#569cd6]">export const</span> <span className="text-[#4fc1ff]">farhanHossen</span>: <span className="text-[#4ec9b0]">Portfolio</span> = {'{'}
              </CodeLine>
              <CodeLine number={8}>
                <span className="text-[#9cdcfe] ml-4">name</span>: <span className="text-[#ce9178]">'Farhan Hossen'</span>,
              </CodeLine>
              <CodeLine number={9}>
                <span className="text-[#9cdcfe] ml-4">role</span>: <span className="text-[#ce9178]">'Software Developer'</span>,
              </CodeLine>
              <CodeLine number={10}>
                <span className="text-[#9cdcfe] ml-4">location</span>: <span className="text-[#ce9178]">'Sydney, NSW'</span>,
              </CodeLine>
              <CodeLine number={11}>
                <span className="text-[#9cdcfe] ml-4">availability</span>: <span className="text-[#569cd6]">true</span>,
              </CodeLine>
              <CodeLine number={12}>{""}</CodeLine>
              <CodeLine number={13}>
                <span className="text-[#9cdcfe] ml-4">bio</span>: <span className="text-[#ce9178]">`</span>
              </CodeLine>
              <CodeLine number={14}>
                <span className="text-[#ce9178] ml-8">Software Developer with hands-on experience in</span>
              </CodeLine>
              <CodeLine number={15}>
                <span className="text-[#ce9178] ml-8">full-stack web development, cross-platform mobile</span>
              </CodeLine>
              <CodeLine number={16}>
                <span className="text-[#ce9178] ml-8">applications (iOS & Android), and cloud-based</span>
              </CodeLine>
              <CodeLine number={17}>
                <span className="text-[#ce9178] ml-8">backend systems.</span>
              </CodeLine>
              <CodeLine number={18}>
                <span className="text-[#ce9178] ml-4">`</span>,
              </CodeLine>
              <CodeLine number={19}>{""}</CodeLine>
              <CodeLine number={20}>
                <span className="text-[#9cdcfe] ml-4">skills</span>: [
              </CodeLine>
              <CodeLine number={21}>
                <span className="text-[#ce9178] ml-8">'Java'</span>, <span className="text-[#ce9178]">'Dart'</span>, <span className="text-[#ce9178]">'TypeScript'</span>, <span className="text-[#ce9178]">'Flutter'</span>,
              </CodeLine>
              <CodeLine number={22}>
                <span className="text-[#ce9178] ml-8">'React.js'</span>, <span className="text-[#ce9178]">'Node.js'</span>, <span className="text-[#ce9178]">'Firebase'</span>, <span className="text-[#ce9178]">'AWS'</span>, <span className="text-[#ce9178]">'Azure'</span>
              </CodeLine>
              <CodeLine number={23}>
                <span className="ml-4">]</span>,
              </CodeLine>
              <CodeLine number={24}>{""}</CodeLine>
              <CodeLine number={25}>
                <span className="text-[#9cdcfe] ml-4">actions</span>: {'{'}
              </CodeLine>
              <CodeLine number={26}>
                <div className="ml-8 flex flex-wrap gap-4 mt-2 mb-2">
                  <button className="bg-[#007acc] hover:bg-[#005999] text-white px-4 py-1.5 rounded-sm text-sm font-semibold transition-colors flex items-center shadow-md">
                    <FolderOpen className="w-4 h-4 mr-2" /> View Projects
                  </button>
                  <button className="bg-[#333333] hover:bg-[#404040] border border-[#555555] text-white px-4 py-1.5 rounded-sm text-sm transition-colors flex items-center">
                    <User className="w-4 h-4 mr-2" /> Get in Touch
                  </button>
                </div>
              </CodeLine>
              <CodeLine number={27}>
                <span className="ml-4">{'}'}</span>
              </CodeLine>
              <CodeLine number={28}>
                {'};'}
              </CodeLine>
              <CodeLine number={29}>{""}</CodeLine>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 text-xs shrink-0 select-none">
        <div className="flex items-center space-x-4">
          <div className="flex items-center hover:bg-white/10 px-1 rounded cursor-pointer h-5 transition-colors">
            <span className="font-bold mr-1">{"<>"}</span> main*
          </div>
          <div className="flex items-center hover:bg-white/10 px-1 rounded cursor-pointer h-5 transition-colors">
            0 ⚠ 0 ⓘ
          </div>
          <span className="hidden sm:inline">Farhan Hossen — Portfolio</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hover:bg-white/10 px-1 rounded cursor-pointer h-5 flex items-center transition-colors">Ln 1, Col 1</span>
          <span className="hidden sm:flex hover:bg-white/10 px-1 rounded cursor-pointer h-5 items-center transition-colors">Spaces: 2</span>
          <span className="hidden md:flex hover:bg-white/10 px-1 rounded cursor-pointer h-5 items-center transition-colors">UTF-8</span>
          <span className="hidden md:flex hover:bg-white/10 px-1 rounded cursor-pointer h-5 items-center transition-colors">CRLF</span>
          <span className="hover:bg-white/10 px-1 rounded cursor-pointer h-5 flex items-center transition-colors font-semibold">TypeScript React</span>
          <span className="hover:bg-white/10 px-1 rounded cursor-pointer h-5 flex items-center transition-colors">
            <Bell className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
