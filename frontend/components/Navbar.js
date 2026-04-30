'use client';
import { 
  Bell, Search, User, Settings, HelpCircle, 
  Menu, BookOpen, Clock, Activity, ShieldCheck,
  MessageSquare, Globe, ChevronDown, MonitorPlay,
  Presentation, Network, Library, Home, FolderKanban,
  Languages, Zap, Video, FileText
} from 'lucide-react';

export default function Navbar() {
  const tabs = [
    { name: 'Home', icon: Home, active: true },
    { name: 'Projects', icon: FolderKanban },
    { name: 'Research Lab', icon: ShieldCheck },
    { name: 'Translator Lab', icon: Languages },
    { name: 'Prompt Studio', icon: Zap },
    { name: 'Video Studio', icon: Video },
    { name: 'PPT Studio', icon: Presentation },
    { name: 'Visualization Lab', icon: Network },
    { name: 'Notes', icon: FileText },
    { name: 'Citation Library', icon: Library },
  ];

  return (
    <header className="sticky top-0 z-30 w-full">
      {/* Top Header */}
      <div className="h-20 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 flex items-center justify-between px-8">
        
        {/* Left Section (Search) */}
        <div className="flex-1 max-w-xl">
           <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search anything in your projects..."
                className="w-full bg-slate-100 border-none rounded-xl pl-12 pr-12 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:bg-white transition-all placeholder:text-slate-500 shadow-inner"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-1 rounded bg-white border border-slate-200 text-[10px] font-bold text-slate-400 shadow-sm">
                Ctrl + K
              </div>
           </div>
        </div>

        {/* Right Section (Profile & Actions) */}
        <div className="flex items-center gap-6">
           <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 font-bold text-[11px] uppercase tracking-widest hover:bg-indigo-100 transition-all">
              <MessageSquare className="w-4 h-4" /> AI Chat
           </button>
           
           <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all">
                 <Globe className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-50 relative">
                 <Bell className="w-4 h-4" />
                 <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-slate-50 cursor-pointer transition-all">
                 <div className="w-6 h-6 rounded-md overflow-hidden bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">EN</div>
                 <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
           </div>

           <div className="h-8 w-px bg-slate-200 mx-2"></div>

           <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                 <span className="text-xs font-extrabold text-slate-900 block">Arham Khan 👋</span>
                 <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block">Premium Plan</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden group-hover:border-indigo-500 transition-all shadow-sm">
                 <img src="https://ui-avatars.com/api/?name=Arham+Khan&background=6366f1&color=fff" alt="Avatar" />
              </div>
           </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="h-16 bg-white/50 backdrop-blur-md border-b border-slate-200/50 flex items-center px-8 overflow-x-auto custom-scrollbar no-scrollbar">
         <div className="flex items-center gap-2">
            {tabs.map((tab, idx) => {
               const Icon = tab.icon;
               return (
                  <button 
                    key={idx}
                    className={`nav-pill whitespace-nowrap ${tab.active ? 'nav-pill-active' : 'nav-pill-inactive'}`}
                  >
                     <Icon className="w-4 h-4" />
                     {tab.name}
                  </button>
               );
            })}
         </div>
      </div>
    </header>
  );
}


