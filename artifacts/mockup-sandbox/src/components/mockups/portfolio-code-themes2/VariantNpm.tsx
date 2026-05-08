export function VariantNpm() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans flex flex-col">
      {/* Top Nav */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#212121] border-b border-gray-800">
        <div className="flex items-center gap-4 flex-1">
          <div className="flex items-center justify-center w-12 h-12 bg-[#CB3837] text-white font-bold text-xl rounded-sm">
            npm
          </div>
          <div className="flex-1 max-w-3xl relative">
            <input
              type="text"
              placeholder="Search packages"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded text-sm px-4 py-2 focus:outline-none focus:border-gray-500 text-white placeholder-gray-400"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-[#212121] border border-gray-700 px-4 text-sm font-medium hover:bg-gray-800 transition-colors">
              Search
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm ml-4">
          <button className="hover:text-gray-300">Sign Up</button>
          <button className="bg-transparent text-white border border-gray-600 hover:border-gray-400 px-4 py-1.5 rounded transition-colors">
            Sign In
          </button>
        </div>
      </header>

      {/* Package Header */}
      <section className="px-6 md:px-12 py-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold">farhan-hossen</h1>
          <span className="text-gray-400 text-sm">v1.0.0</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            published 2 hours ago
          </span>
          <span className="bg-gray-800 px-2 py-0.5 rounded text-xs">MIT</span>
          <span className="text-[#CB3837] font-medium border border-[#CB3837] px-2 py-0.5 rounded text-xs">Full Stack</span>
        </div>

        <div className="bg-[#212121] border border-gray-700 p-4 rounded flex items-center justify-between mb-8 font-mono text-sm">
          <span>
            <span className="text-[#CB3837]">npm</span> i farhan-hossen
          </span>
          <button className="text-gray-400 hover:text-white" title="Copy to clipboard">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-800">
          <button className="px-6 py-3 border-b-2 border-[#CB3837] text-white font-medium">Readme</button>
          <button className="px-6 py-3 text-gray-400 hover:text-gray-200 font-medium">Code</button>
          <button className="px-6 py-3 text-gray-400 hover:text-gray-200 font-medium">Dependencies</button>
          <button className="px-6 py-3 text-gray-400 hover:text-gray-200 font-medium">Versions</button>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-6 md:px-12 py-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 flex-1">
        {/* Left Column - Readme */}
        <div className="flex-1 prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-gray-800">👋 Farhan Hossen</h1>
          
          <div className="text-gray-300 space-y-4 mb-10 text-lg leading-relaxed">
            <p>
              Master of Information Technology graduate from University of Technology Sydney.
            </p>
            <p>
              Full-stack developer with expertise in Java, Dart, TypeScript, Flutter, React.js,
              Node.js, Firebase, AWS, and Azure. Based in Sydney, NSW.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-800">## Skills</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-10">
            <li><strong>Frontend:</strong> React.js, TypeScript, HTML/CSS, Tailwind</li>
            <li><strong>Mobile:</strong> Flutter, Dart</li>
            <li><strong>Backend:</strong> Node.js, Java</li>
            <li><strong>Cloud & DevOps:</strong> AWS, Azure, Firebase</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-800">## Experience</h2>
          <div className="space-y-6 text-gray-300 mb-10">
            <div>
              <h3 className="font-semibold text-white">Software Developer</h3>
              <p className="text-sm text-gray-400 mb-2">Building modern web and mobile applications.</p>
              <p>Specializing in full-stack architecture, performance optimization, and intuitive user experiences.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-800">## Contact</h2>
          <div className="flex gap-4">
            <a href="#" className="text-[#CB3837] hover:underline font-medium">Email Me</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-[#CB3837] hover:underline font-medium">LinkedIn</a>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <aside className="w-full md:w-80 space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Install</h3>
            <div className="bg-[#212121] border border-gray-700 p-3 rounded font-mono text-sm text-gray-300">
              npm i farhan-hossen
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Repository</h3>
            <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
              github.com/farhan-hossen
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Homepage</h3>
            <a href="#" className="text-[#CB3837] hover:underline">farhan-hossen.dev</a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {['full-stack', 'typescript', 'flutter', 'mobile-dev', 'react', 'node'].map(kw => (
                <span key={kw} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs hover:bg-gray-700 cursor-pointer">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Weekly Downloads</h3>
            <div className="text-2xl font-bold mb-2">4,821</div>
            <div className="flex items-end gap-1 h-12">
              {[40, 60, 45, 80, 50, 90, 75, 40, 60, 100, 85, 95].map((h, i) => (
                <div key={i} className="flex-1 bg-[#CB3837]" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Collaborators</h3>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-red-500 flex items-center justify-center font-bold text-lg">
                F
              </div>
              <span className="font-medium text-gray-300 hover:text-white cursor-pointer">FarhanHossen</span>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-800 py-12 px-6 bg-[#212121]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 780 250" className="w-12 h-4 text-gray-500 fill-current"><path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path></svg>
            <span>Inc.</span>
          </div>
          <div className="flex gap-12">
            <div className="space-y-2">
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <p><a href="#" className="hover:text-white">Help</a></p>
              <p><a href="#" className="hover:text-white">Advisories</a></p>
              <p><a href="#" className="hover:text-white">Status</a></p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <p><a href="#" className="hover:text-white">About</a></p>
              <p><a href="#" className="hover:text-white">Blog</a></p>
              <p><a href="#" className="hover:text-white">Press</a></p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white mb-4">Terms & Policies</h4>
              <p><a href="#" className="hover:text-white">Policies</a></p>
              <p><a href="#" className="hover:text-white">Terms of Use</a></p>
              <p><a href="#" className="hover:text-white">Privacy</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
