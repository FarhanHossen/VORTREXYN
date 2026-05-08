import React from 'react';
import './VariantGitHub.css';
import { Book, Star, GitBranch, Eye, GitCommit, Users, MapPin, Briefcase } from 'lucide-react';

export function VariantGitHub() {
  const renderContributionGraph = () => {
    const cols = 20;
    const rows = 5;
    const grid = [];
    
    const colors = [
      '#161b22', // empty
      '#0e4429', // light
      '#006d32', // mid
      '#26a641', // high
      '#39d353'  // highest
    ];

    for (let i = 0; i < cols; i++) {
      const col = [];
      for (let j = 0; j < rows; j++) {
        // Randomly assign colors to make a fake heatmap
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        col.push(
          <div 
            key={`cell-${i}-${j}`} 
            className="w-[10px] h-[10px] rounded-[2px]"
            style={{ backgroundColor: randomColor }}
          />
        );
      }
      grid.push(
        <div key={`col-${i}`} className="flex flex-col gap-[3px]">
          {col}
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-2 p-4 border border-[#30363d] rounded-md bg-[#0d1117]">
        <div className="flex gap-[3px] overflow-hidden">
          {grid}
        </div>
        <div className="flex justify-between text-xs text-[#8b949e]">
          <span>Learn how we count contributions</span>
          <div className="flex items-center gap-1">
            <span>Less</span>
            {colors.map((c, i) => (
              <div key={i} className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: c }} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    );
  };

  const techs = ["Java", "TypeScript", "Dart", "Flutter", "React", "Node.js", "Firebase", "AWS"];

  return (
    <div className="github-theme min-h-screen text-[#e6edf3] bg-[#0d1117] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#010409] border-b border-[#30363d] text-sm">
        <div className="flex items-center gap-4">
          {/* GitHub Logo SVG equivalent */}
          <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true" fill="currentColor" className="text-white">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
          <div className="flex items-center font-semibold text-[#8b949e]">
            <span className="text-[#2f81f7] hover:underline cursor-pointer">FarhanHossen</span>
            <span className="mx-1">/</span>
            <span className="text-[#e6edf3] font-bold">FarhanHossen</span>
            <span className="ml-2 px-2 py-0.5 border border-[#30363d] rounded-full text-xs font-medium bg-[#161b22]">Public</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex rounded-md border border-[#30363d] bg-[#21262d] overflow-hidden text-xs font-medium">
            <button className="px-3 py-1 flex items-center gap-1 hover:bg-[#30363d] transition-colors border-r border-[#30363d]">
              <Eye size={14} className="text-[#8b949e]" /> Watch
            </button>
            <span className="px-3 py-1 bg-[#161b22] text-[#e6edf3]">42</span>
          </div>
          <div className="flex rounded-md border border-[#30363d] bg-[#21262d] overflow-hidden text-xs font-medium">
            <button className="px-3 py-1 flex items-center gap-1 hover:bg-[#30363d] transition-colors border-r border-[#30363d]">
              <GitBranch size={14} className="text-[#8b949e]" /> Fork
            </button>
            <span className="px-3 py-1 bg-[#161b22] text-[#e6edf3]">11</span>
          </div>
          <div className="flex rounded-md border border-[#30363d] bg-[#21262d] overflow-hidden text-xs font-medium">
            <button className="px-3 py-1 flex items-center gap-1 hover:bg-[#30363d] transition-colors border-r border-[#30363d]">
              <Star size={14} className="text-[#8b949e]" /> Star
            </button>
            <span className="px-3 py-1 bg-[#161b22] text-[#e6edf3]">256</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1012px] mx-auto w-full p-6 flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar (Profile) */}
        <aside className="w-full md:w-1/4 flex flex-col gap-4">
          <div className="relative">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Farhan&backgroundColor=1f6feb" 
              alt="Avatar" 
              className="w-full h-auto rounded-full border-2 border-[#30363d] shadow-sm z-10 relative bg-[#0d1117]"
            />
            <div className="absolute bottom-6 right-0 bg-[#0d1117] border border-[#30363d] rounded-full p-2 text-sm z-20">
              💻
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#e6edf3]">Farhan Hossen</h2>
            <p className="text-xl text-[#8b949e] font-light">FarhanHossen</p>
          </div>
          <button className="w-full py-1 px-3 bg-[#21262d] border border-[#30363d] rounded-md text-sm font-medium text-[#c9d1d9] hover:bg-[#30363d] transition-colors">
            Follow
          </button>
          <div className="text-sm text-[#e6edf3]">
            Software Developer
          </div>
          <div className="flex items-center gap-1 text-sm text-[#8b949e] hover:text-[#2f81f7] cursor-pointer">
            <Users size={16} />
            <span className="font-bold text-[#e6edf3]">48</span> followers
            <span>·</span>
            <span className="font-bold text-[#e6edf3]">62</span> following
          </div>
          <ul className="text-sm flex flex-col gap-2 mt-2 pt-4 border-t border-[#30363d]">
            <li className="flex items-center gap-2 text-[#e6edf3]">
              <Briefcase size={16} className="text-[#8b949e]" /> Software Developer
            </li>
            <li className="flex items-center gap-2 text-[#e6edf3]">
              <MapPin size={16} className="text-[#8b949e]" /> Sydney, NSW, Australia
            </li>
          </ul>
        </aside>

        {/* Right Area (README) */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden">
            <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-2 flex items-center justify-between text-sm">
              <span className="font-semibold flex items-center gap-2">
                <Book size={16} className="text-[#8b949e]" /> 
                <a className="text-[#e6edf3] font-semibold hover:underline hover:text-[#2f81f7]" href="#">FarhanHossen</a>
                <span className="text-[#8b949e]">/</span>
                <span className="text-[#8b949e]">README.md</span>
              </span>
            </div>
            
            <div className="p-8 markdown-body">
              <h1 className="flex items-center gap-3">
                Hi there, I'm Farhan <span className="animate-bounce inline-block origin-bottom-right">👋</span>
              </h1>
              
              <p className="text-lg mb-6">
                Master of Information Technology graduate (Enterprise Software Development & Cyber Security) from University of Technology Sydney. Full-stack developer skilled in building scalable applications.
              </p>
              
              <hr />
              
              <h2>🚀 About Me</h2>
              <ul>
                <li>👨‍💻 I’m currently working on full-stack web and mobile apps.</li>
                <li>🌱 I’m deeply focused on <strong>Enterprise Software Development</strong> & <strong>Cyber Security</strong>.</li>
                <li>🛠️ Core languages: <code>Java</code>, <code>TypeScript</code>, <code>Dart</code></li>
                <li>📫 How to reach me: <a href="#" className="text-[#2f81f7] hover:underline">Contact Me</a></li>
                <li>⚡ Fun fact: I love discovering new tech frameworks and sipping good coffee.</li>
              </ul>
              
              <h2>🛠 Tech Stack</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {techs.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-[#1f6feb] bg-opacity-10 text-[#2f81f7] border border-[rgba(56,139,253,0.4)] rounded-full text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>

              <h2>📊 GitHub Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-md flex items-center gap-4">
                  <Star className="text-[#e3b341]" size={32} />
                  <div>
                    <div className="text-2xl font-bold">256</div>
                    <div className="text-xs text-[#8b949e]">Total Stars Earned</div>
                  </div>
                </div>
                <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-md flex items-center gap-4">
                  <GitCommit className="text-[#2f81f7]" size={32} />
                  <div>
                    <div className="text-2xl font-bold">1,402</div>
                    <div className="text-xs text-[#8b949e]">Total Commits</div>
                  </div>
                </div>
                <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-md flex items-center gap-4">
                  <GitBranch className="text-[#3fb950]" size={32} />
                  <div>
                    <div className="text-2xl font-bold">84</div>
                    <div className="text-xs text-[#8b949e]">Total PRs</div>
                  </div>
                </div>
              </div>
              
              <hr />
              
              <div className="mt-8 flex gap-4">
                <button className="px-4 py-2 bg-[#238636] text-white font-medium rounded-md hover:bg-[#2ea043] transition-colors border border-[rgba(240,246,252,0.1)]">
                  View Repositories
                </button>
                <button className="px-4 py-2 bg-[#21262d] text-[#c9d1d9] font-medium rounded-md hover:bg-[#30363d] transition-colors border border-[#30363d]">
                  Contact Me
                </button>
              </div>

            </div>
          </div>
          
          <div>
            <h3 className="text-base font-normal mb-2 text-[#e6edf3]">
              847 contributions in the last year
            </h3>
            {renderContributionGraph()}
          </div>
          
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-[#30363d] flex items-center justify-center gap-2 text-xs text-[#8b949e]">
        <GitCommit size={14} className="text-[#3fb950]" />
        <span>Last updated · about 2 hours ago</span>
      </footer>
    </div>
  );
}
