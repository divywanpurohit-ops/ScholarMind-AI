'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, Bell, User, ChevronDown, 
  Settings, HelpCircle, LogOut, Sparkles,
  Command, Globe, Zap, Video, FileText,
  SearchIcon, Library
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [showProfile, setShowProfile] = useState(false);
  
  const tabs = [
    { name: 'Research', path: '/tools/academic-search' },
    { name: 'Summary', path: '/tools/multi-summary' },
    { name: 'Translate', path: '/tools/translator' },
    { name: 'PPT', path: '/tools/ppt' },
    { name: 'Video', path: '/tools/video' },
    { name: 'Audit', path: '/tools/intel' },
  ];

  return (
    <nav className="h-20 bg-white/70 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-10 sticky top-0 z-50">
      
      {/* Search & Shortcuts */}
      <div className="flex items-center gap-8 flex-1">
         <div className="relative group max-w-md w-full">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
               <Search className="w-4 h-4" />
            </div>
            <input 
              type="text" 
              placeholder="Search research papers, notes, or AI tools... (Cmd+K)" 
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-xs font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:bg-white focus:border-indigo-500 transition-all"
            />
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
               <span className="text-[10px] font-bold text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-sm">⌘K</span>
            </div>
         </div>

         {/* Tool Navigation Tabs */}
         <div className="hidden lg:flex items-center gap-1">
            {tabs.map((tab) => {
              const isActive = pathname === tab.path;
              return (
                <Link key={tab.name} href={tab.path}>
                  <button 
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-all relative ${
                      isActive ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-900'
                    }`}
                  >
                     {tab.name}
                     {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>}
                  </button>
                </Link>
              );
            })}
         </div>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-6">
         
         <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-xl bg-slate-50 text-slate-500 hover:bg-slate-100 transition-all relative">
               <Globe className="w-4 h-4" />
               <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            </button>
            <button className="p-2.5 rounded-xl bg-slate-50 text-slate-500 hover:bg-slate-100 transition-all">
               <Zap className="w-4 h-4 text-amber-500" />
            </button>
            <button className="p-2.5 rounded-xl bg-slate-50 text-slate-500 hover:bg-slate-100 transition-all relative">
               <Bell className="w-4 h-4" />
               <span className="absolute top-2 right-2 px-1 rounded-full bg-rose-500 text-white text-[8px] font-bold">3</span>
            </button>
         </div>

         <div className="w-px h-8 bg-slate-200"></div>

         {/* Profile Dropdown */}
         <div className="relative">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 p-1 rounded-full border border-slate-200 hover:border-indigo-200 transition-all bg-white shadow-sm"
            >
               <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  KC
               </div>
               <div className="text-left pr-2 hidden md:block">
                  <p className="text-[10px] font-bold text-slate-900 leading-none">Kailash Chandra</p>
                  <p className="text-[8px] text-slate-400 font-medium tracking-widest mt-1">RESEARCHER</p>
               </div>
               <ChevronDown className={`w-3.5 h-3.5 text-slate-400 mr-2 transition-transform ${showProfile ? 'rotate-180' : ''}`} />
            </button>

            {showProfile && (
               <div className="absolute top-[calc(100%+12px)] right-0 w-64 glass-card bg-white p-2 shadow-2xl shadow-indigo-500/10 border-slate-100 animate-fade-in z-[60]">
                  <div className="p-4 border-b border-slate-50">
                     <p className="text-xs font-bold text-slate-900">Personal Account</p>
                     <p className="text-[10px] text-slate-400">kailash@scholarmind.ai</p>
                  </div>
                  <div className="py-2">
                     <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all rounded-xl">
                        <User className="w-4 h-4" /> My Profile
                     </button>
                     <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all rounded-xl">
                        <Settings className="w-4 h-4" /> Account Settings
                     </button>
                     <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all rounded-xl">
                        <Library className="w-4 h-4" /> Subscription
                     </button>
                  </div>
                  <div className="p-2 pt-2 border-t border-slate-50">
                     <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs text-rose-500 hover:bg-rose-50 transition-all rounded-xl font-bold">
                        <LogOut className="w-4 h-4" /> Sign Out
                     </button>
                  </div>
               </div>
            )}
         </div>
      </div>
    </nav>
  );
}
