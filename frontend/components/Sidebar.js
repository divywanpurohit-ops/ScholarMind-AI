'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Search, Library, BookOpen, 
  Languages, Presentation, Video, PenTool,
  ShieldCheck, Fingerprint, Brain, BarChart3,
  FolderKanban, StickyNote, Bookmark, Settings,
  Sparkles, ChevronRight, Infinity, Zap
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Academic Search', icon: Search, path: '/tools/academic-search' },
    { name: 'My Library', icon: Library, path: '/library' },
    { name: 'Literature Review', icon: BookOpen, path: '/tools/intel' },
    { name: 'Translator Pro', icon: Languages, path: '/tools/translator' },
    { name: 'PPT Studio', icon: Presentation, path: '/tools/ppt' },
    { name: 'Video Studio', icon: Video, path: '/tools/video' },
    { name: 'AI Writer', icon: PenTool, path: '/tools/writing' },
    { name: 'Research Audit', icon: ShieldCheck, path: '/tools/intel' },
    { name: 'Citation Generator', icon: Fingerprint, path: '/tools/citations' },
    { name: 'RAG Copilot', icon: Brain, path: '/tools/chat' },
    { name: 'Visualizer', icon: BarChart3, path: '/tools/visualization' },
    { name: 'Data Analyzer', icon: Zap, path: '/tools/data' },
    { name: 'Projects', icon: FolderKanban, path: '/projects' },
    { name: 'Notes', icon: StickyNote, path: '/notes' },
    { name: 'Bookmarks', icon: Bookmark, path: '/bookmarks' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="w-[280px] dark-side-panel flex flex-col h-full z-50">
      
      {/* Brand Header */}
      <div className="p-8 mb-4">
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/40">
               <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
               <h1 className="text-xl font-black text-white tracking-tighter uppercase italic leading-none">ScholarMind <span className="text-indigo-500">AI</span></h1>
               <p className="text-[9px] text-slate-500 font-bold tracking-[0.1em] mt-1">RESEARCH BEYOND LIMITS</p>
            </div>
         </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-4 space-y-1 pb-10">
         {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
               <Link key={item.name} href={item.path}>
                  <div className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all group cursor-pointer ${
                    isActive 
                      ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-900/20' 
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}>
                     <div className="flex items-center gap-4">
                        <item.icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-indigo-400'}`} />
                        <span className="text-[11px] font-bold tracking-tight">{item.name}</span>
                     </div>
                     {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>}
                  </div>
               </Link>
            );
         })}
      </div>

      {/* Storage & Upgrade */}
      <div className="p-6 border-t border-white/5 space-y-6">
         <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Storage Usage</span>
               <span className="text-[10px] font-bold text-white">78%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
               <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 w-[78%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
            </div>
            <p className="text-[9px] text-slate-500 font-medium">7.8 GB / Unlimited</p>
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold py-3 rounded-xl uppercase tracking-widest transition-all shadow-lg shadow-indigo-900/40">
               Upgrade Storage
            </button>
         </div>
      </div>

    </aside>
  );
}
