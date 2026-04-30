'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Home, FolderKanban, Library, Plus, 
  Upload, Globe, FileText, Languages, 
  MessageSquare, Presentation, Video, 
  Network, Search, ShieldCheck, GraduationCap, 
  HelpCircle, Quote, BarChart3, Database,
  FileSearch, Zap, Star, PenTool, BookOpen
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuGroups = [
    {
      title: 'MY PROJECTS',
      items: [
        { name: 'Quantum Chemistry', date: '12 May 2025', icon: Database },
        { name: 'Thesis - Chapter 1', date: '11 May 2025', icon: FileText },
        { name: 'Research Paper AI', date: '10 May 2025', icon: FileSearch },
      ]
    },
    {
      title: 'QUICK TOOLS',
      items: [
        { name: 'Upload Document', icon: Upload, path: '/tools/upload' },
        { name: 'Add Website / DOI', icon: Globe, path: '/tools/academic-search' },
        { name: 'AI Summarizer', icon: FileText, path: '/tools/multi-summary' },
        { name: 'Translator (Full)', icon: Languages, path: '/tools/translator' },
        { name: 'Ask Document (Chat)', icon: MessageSquare, path: '/tools/chat' },
        { name: 'Generate PPT', icon: Presentation, path: '/tools/ppt' },
        { name: 'Generate Video', icon: Video, path: '/tools/video' },
        { name: 'Mind Map', icon: Network, path: '/tools/visualization' },
        { name: 'Notes Maker', icon: PenTool, path: '/tools/notes' },
        { name: 'Citation Generator', icon: Quote, path: '/tools/citation' },
        { name: 'Research Gap Finder', icon: ShieldCheck, path: '/tools/intel' },
        { name: 'Literature Review', icon: BookOpen, path: '/tools/lit-review' },
        { name: 'Thesis Writer', icon: GraduationCap, path: '/tools/thesis' },
        { name: 'Flashcards / MCQ', icon: HelpCircle, path: '/tools/quiz' },
      ]
    }
  ];

  return (
    <div className="w-[280px] bg-[#0d1117] rounded-[32px] h-full flex flex-col shrink-0 z-20 overflow-hidden shadow-2xl border border-white/5 relative">
      
      {/* Sidebar Header */}
      <div className="p-6 space-y-6">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-sm font-extrabold text-white tracking-tight block">ScholarMind AI</span>
            <span className="text-[10px] text-slate-500 font-medium block">Your Academic AI Partner</span>
          </div>
        </Link>

        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/20">
          <Plus className="w-4 h-4" /> Create New Project
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-4 pb-8">
        {menuGroups.map((group, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 px-2">
              {group.title}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item, i) => {
                const isActive = item.path && pathname === item.path;
                const Icon = item.icon;
                return (
                  <li key={i}>
                    {item.path ? (
                      <Link href={item.path}>
                        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer text-xs font-bold ${
                          isActive 
                            ? 'bg-indigo-600/10 text-indigo-500 border border-indigo-500/20' 
                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`}>
                          <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-500' : 'text-slate-500'}`} />
                          <span className="truncate">{item.name}</span>
                        </div>
                      </Link>
                    ) : (
                      <div className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group">
                        <div className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">
                              <Icon className="w-3.5 h-3.5 text-slate-400" />
                           </div>
                           <div>
                              <span className="text-[11px] font-bold text-slate-300 block">{item.name}</span>
                              <span className="text-[9px] text-slate-500 block">{item.date}</span>
                           </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        
        {/* View All Projects Button */}
        <button className="w-full text-center py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors">
          View All Projects
        </button>
      </div>
      
      {/* Storage Footer */}
      <div className="p-6 bg-white/5 border-t border-white/5 shrink-0 mx-4 mb-6 rounded-2xl">
         <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-slate-400">STORAGE</span>
            <span className="text-[10px] font-bold text-white">35.6 GB / Unlimited</span>
         </div>
         <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-indigo-500 w-[65%]"></div>
         </div>
         
         <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
               <Star className="w-3 h-3 text-yellow-400 fill-current" />
               <span className="text-[10px] font-bold text-white uppercase tracking-widest">Upgrade to Pro</span>
            </div>
            <button className="w-full bg-white text-slate-900 py-2 rounded-lg text-[10px] font-extrabold hover:bg-slate-100 transition-colors">
               Upgrade Now
            </button>
         </div>
      </div>

    </div>
  );
}

// Placeholder for missing icons
function PenTool(props) { return <span {...props}>✎</span> }
function BookOpen(props) { return <span {...props}>📖</span> }
