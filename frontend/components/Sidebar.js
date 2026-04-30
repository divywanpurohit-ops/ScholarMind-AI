'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Search, FileText, Languages, 
  Presentation, Video, BarChart3, Database, 
  Settings, HelpCircle, LogOut, Plus, 
  FolderKanban, Sparkles, Brain, ShieldCheck,
  ChevronRight, Infinity, PenTool, BookOpen
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuGroups = [
    {
      title: 'Main Hub',
      items: [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
        { name: 'Academic Search', icon: Search, path: '/tools/academic-search' },
        { name: 'Writing Lab', icon: PenTool, path: '/tools/writing' },
      ]
    },
    {
      title: 'AI Studios',
      items: [
        { name: 'Translator Pro', icon: Languages, path: '/tools/translator' },
        { name: 'PPT Studio', icon: Presentation, path: '/tools/ppt' },
        { name: 'Video Studio', icon: Video, path: '/tools/video' },
        { name: 'Visualizer', icon: BarChart3, path: '/tools/visualization' },
      ]
    },
    {
      title: 'Intel & Audit',
      items: [
        { name: 'Literature Review', icon: BookOpen, path: '/tools/intel' },
        { name: 'RAG Copilot', icon: Brain, path: '/tools/chat' },
        { name: 'Research Audit', icon: ShieldCheck, path: '/tools/intel' },
      ]
    }
  ];

  return (
    <aside className="w-[280px] bg-[#0d1117] text-white flex flex-col fixed top-0 bottom-0 left-0 z-50">
      
      {/* Brand Logo */}
      <div className="p-8 border-b border-white/5 flex items-center gap-3">
         <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/50">
            <Sparkles className="w-6 h-6 text-white" />
         </div>
         <span className="text-xl font-black tracking-tighter uppercase italic">ScholarMind <span className="text-indigo-500">AI</span></span>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-10">
         
         {menuGroups.map((group) => (
            <div key={group.title} className="space-y-4">
               <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] px-4">{group.title}</h3>
               <div className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                      <Link key={item.name} href={item.path}>
                        <div className={`flex items-center justify-between p-3.5 rounded-2xl transition-all group cursor-pointer ${
                          isActive 
                           ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-900/20' 
                           : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`}>
                           <div className="flex items-center gap-4">
                              <item.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-indigo-400'}`} />
                              <span className="text-sm font-bold tracking-tight">{item.name}</span>
                           </div>
                           {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>}
                        </div>
                      </Link>
                    );
                  })}
               </div>
            </div>
         ))}

         {/* Project Folder Section */}
         <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between px-4">
               <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">My Projects</h3>
               <button className="p-1 hover:bg-white/10 rounded-lg text-slate-500"><Plus className="w-3.5 h-3.5" /></button>
            </div>
            <div className="space-y-1">
               {['Quantum Chemistry', 'Thesis - Chapter 1', 'Literature Review'].map((project) => (
                  <Link href="/" key={project}>
                    <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-all cursor-pointer group">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                             <FolderKanban className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-bold text-slate-400 group-hover:text-white transition-all">{project}</span>
                       </div>
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-all"></div>
                    </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>

      {/* Footer / Storage Info */}
      <div className="p-8 border-t border-white/5 space-y-6 bg-black/20">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white">
               <Infinity className="w-6 h-6" />
            </div>
            <div>
               <p className="text-xs font-bold text-white uppercase tracking-widest">Unlimited</p>
               <p className="text-[9px] text-slate-500 font-medium mt-0.5 uppercase tracking-widest">Storage Access</p>
            </div>
         </div>
         <button className="w-full bg-white/5 border border-white/10 text-white text-[10px] font-bold py-3.5 rounded-2xl uppercase tracking-widest hover:bg-indigo-600 hover:border-indigo-600 transition-all shadow-lg active:scale-95">
            Upgrade to Pro
         </button>
      </div>

    </aside>
  );
}
