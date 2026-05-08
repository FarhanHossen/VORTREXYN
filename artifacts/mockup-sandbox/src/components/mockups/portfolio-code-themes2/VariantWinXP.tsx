import React, { useState, useEffect } from 'react';
import './VariantWinXP.css';

export function VariantWinXP() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="win-desktop w-full min-h-screen relative text-sm select-none">
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-6">
        <div className="win-icon">
          <div className="win-icon-img bg-blue-300 border-2 border-white rounded-sm relative">
            <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500"></div>
          </div>
          <span className="win-icon-text">My Computer</span>
        </div>
        <div className="win-icon">
          <div className="win-icon-img bg-yellow-200 border-2 border-yellow-500 rounded-sm relative flex items-center justify-center">
            <div className="w-4 h-3 border border-yellow-600"></div>
          </div>
          <span className="win-icon-text">Projects</span>
        </div>
        <div className="win-icon">
          <div className="win-icon-img bg-transparent border-2 border-dashed border-gray-400 rounded-sm relative flex items-center justify-center">
             <div className="w-3 h-4 bg-white border border-gray-400"></div>
          </div>
          <span className="win-icon-text">Recycle Bin</span>
        </div>
      </div>

      {/* Windows */}
      
      {/* 1. About Me */}
      <div className="absolute top-12 left-32 w-[400px] win-window shadow-xl z-20">
        <div className="win-titlebar">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-200 border border-white"></div>
            <span>About Me.exe</span>
          </div>
          <div className="flex gap-1">
            <button className="win-btn">_</button>
            <button className="win-btn">□</button>
            <button className="win-btn win-btn-close">X</button>
          </div>
        </div>
        <div className="bg-[#ECE9D8] p-1 flex items-center border-b border-[#D4D0C8]">
           <div className="win-menu-bar w-full !border-none !p-0">
             <span className="win-menu-item px-2 py-1">File</span>
             <span className="win-menu-item px-2 py-1">Edit</span>
             <span className="win-menu-item px-2 py-1">View</span>
             <span className="win-menu-item px-2 py-1">Help</span>
           </div>
        </div>
        <div className="win-content flex gap-4 h-[250px]">
           <div className="w-32 flex flex-col gap-2 items-center border-r pr-4 border-gray-300">
             <div className="w-24 h-24 bg-gray-300 border-2 border-gray-400 flex items-center justify-center shadow-inner relative overflow-hidden">
                <div className="w-12 h-12 bg-gray-400 rounded-full mb-4"></div>
                <div className="absolute bottom-[-10px] w-20 h-16 bg-gray-400 rounded-t-full"></div>
             </div>
             <div className="font-bold text-center leading-tight mt-2">Farhan Hossen</div>
             <div className="text-xs text-center text-gray-600">Software Developer</div>
           </div>
           <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="mb-2"><strong>Bio:</strong> MIT graduate (Enterprise Software & Cyber Security) from UTS Sydney.</p>
                <p className="mb-2">Full-stack developer skilled in modern technologies.</p>
                <p><strong>Location:</strong> Sydney, NSW.</p>
              </div>
              <div className="flex gap-2 justify-end mt-4">
                <button className="win-dialog-btn">Open Projects Folder</button>
              </div>
           </div>
        </div>
      </div>

      {/* 2. Skills.txt */}
      <div className="absolute top-48 left-[500px] w-[350px] win-window shadow-xl z-30">
        <div className="win-titlebar active">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-cyan-200 border border-white flex items-center justify-center text-[8px] text-blue-800">txt</div>
            <span>Skills.txt - Notepad</span>
          </div>
          <div className="flex gap-1">
            <button className="win-btn">_</button>
            <button className="win-btn">□</button>
            <button className="win-btn win-btn-close">X</button>
          </div>
        </div>
        <div className="win-menu-bar">
          <span className="win-menu-item">File</span>
          <span className="win-menu-item">Edit</span>
          <span className="win-menu-item">Format</span>
          <span className="win-menu-item">View</span>
          <span className="win-menu-item">Help</span>
        </div>
        <div className="win-content !m-0 !border-none h-[200px] overflow-auto">
           <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap font-['Courier_New']">
Java
TypeScript
Dart
Flutter
React.js
Node.js
Firebase
AWS
Azure
PostgreSQL
           </pre>
        </div>
      </div>

      {/* 3. Contact.url */}
      <div className="absolute top-8 left-[650px] w-[350px] win-window shadow-xl z-10">
        <div className="win-titlebar inactive">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-500 rounded-full border border-white text-[10px] text-center text-white italic font-serif">e</div>
            <span>Contact - Microsoft Internet Explorer</span>
          </div>
          <div className="flex gap-1">
            <button className="win-btn">_</button>
            <button className="win-btn">□</button>
            <button className="win-btn win-btn-close">X</button>
          </div>
        </div>
        <div className="bg-[#ECE9D8] p-1 border-b border-[#D4D0C8] flex flex-col gap-1">
           <div className="win-menu-bar !p-0 !border-none">
             <span className="win-menu-item px-2 py-1">File</span>
             <span className="win-menu-item px-2 py-1">Edit</span>
             <span className="win-menu-item px-2 py-1">View</span>
             <span className="win-menu-item px-2 py-1">Favorites</span>
             <span className="win-menu-item px-2 py-1">Tools</span>
             <span className="win-menu-item px-2 py-1">Help</span>
           </div>
           <div className="flex gap-2 items-center px-1">
              <span className="text-gray-500">Address</span>
              <div className="bg-white border border-gray-400 px-2 py-1 flex-1 flex items-center text-xs">
                <span>http://farhan.dev/contact</span>
              </div>
           </div>
        </div>
        <div className="win-content h-[180px] bg-white flex flex-col items-center justify-center p-6 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-lg font-bold text-blue-800 mb-2">Let's Connect</h2>
            <p className="text-sm mb-4">I'm currently available for new opportunities.</p>
            <button className="win-dialog-btn !bg-blue-100 !border-blue-400">Send Message</button>
        </div>
      </div>


      {/* Taskbar */}
      <div className="win-taskbar">
        <div className="flex items-center h-full">
          <button className="win-start-btn">
            <div className="flex flex-wrap w-4 h-4 mr-1">
              <div className="w-2 h-2 bg-red-500"></div>
              <div className="w-2 h-2 bg-green-500"></div>
              <div className="w-2 h-2 bg-blue-500"></div>
              <div className="w-2 h-2 bg-yellow-500"></div>
            </div>
            Start
          </button>
          
          <div className="win-taskbar-item ml-4">
             <div className="w-3 h-3 bg-blue-200 border border-white"></div>
             About Me.exe
          </div>
          <div className="win-taskbar-item active">
             <div className="w-3 h-3 bg-cyan-200 border border-white text-[6px] text-blue-800 flex items-center justify-center">txt</div>
             Skills.txt
          </div>
          <div className="win-taskbar-item">
             <div className="w-3 h-3 bg-blue-500 rounded-full border border-white text-[7px] text-center text-white italic font-serif">e</div>
             Contact
          </div>
        </div>

        <div className="win-tray">
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-blue-200 border border-blue-400"></div>
             <div className="w-3 h-3 bg-yellow-400 border border-yellow-600 rounded-sm"></div>
             <span>{time}</span>
           </div>
        </div>
      </div>
    </div>
  );
}
