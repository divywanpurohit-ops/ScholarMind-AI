'use client';
import { useState } from 'react';
import { 
  Search, Bell, Settings, Globe, 
  ChevronDown, Crown, Sun
} from 'lucide-react';

export default function Navbar() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-10 sticky top-0 z-40">
      
      {/* 1. Global Search Bar */}
      <div className="flex-1 flex justify-center max-w-2xl mx-auto">
         <div className="relative group w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search 200M+ papers, DOI, keywords, authors, topics..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-16 text-xs font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:bg-white focus:border-indigo-500 transition-all"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-400 shadow-sm">
               ⌘K
            </div>
         </div>
      </div>

      {/* 2. Controls & Profile */}
      <div className="flex items-center gap-6">
         
         <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-[11px] font-bold shadow-lg shadow-indigo-900/20 hover:bg-indigo-700 transition-all">
            <Crown className="w-4 h-4 text-amber-400 fill-amber-400" /> UPGRADE TO PRO
         </button>

         <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-400 relative">
               <Bell className="w-4 h-4" />
               <span className="absolute top-2 right-2 w-4 h-4 bg-rose-500 text-white text-[8px] font-black flex items-center justify-center rounded-full border-2 border-white">3</span>
            </button>
            <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-400">
               <Sun className="w-4 h-4" />
            </button>
            <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-400">
               <Globe className="w-4 h-4" />
            </button>
         </div>

         <div className="w-px h-8 bg-slate-200 mx-2"></div>

         {/* Profile Dropdown */}
         <div className="relative">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-50 transition-all"
            >
               <img 
                 src="https://avatar.iran.liara.run/public/boy?username=Kailash" 
                 alt="Kailash Chandra" 
                 className="w-9 h-9 rounded-full border-2 border-indigo-100 p-0.5"
               />
               <div className="text-left hidden lg:block">
                  <p className="text-[11px] font-black text-slate-900 leading-none">Kailash Chandra</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Researcher</p>
               </div>
               <ChevronDown className={`w-3.5 h-3.5 text-slate-400 mr-2 transition-transform ${showProfile ? 'rotate-180' : ''}`} />
            </button>

            {showProfile && (
               <div className="absolute top-[calc(100%+12px)] right-0 w-64 glass-card bg-white p-2 shadow-2xl z-50 animate-fade-in border-slate-100">
                  <div className="p-4 border-b border-slate-50">
                     <p className="text-xs font-bold text-slate-900">Personal Account</p>
                     <p className="text-[10px] text-slate-400">kailash@scholarmind.ai</p>
                  </div>
                  <div className="py-2">
                     <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all rounded-xl">
                        Settings
                     </button>
                     <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs text-rose-500 hover:bg-rose-50 transition-all rounded-xl font-bold">
                        Sign Out
                     </button>
                  </div>
               </div>
            )}
         </div>
      </div>
    </nav>
  );
}
