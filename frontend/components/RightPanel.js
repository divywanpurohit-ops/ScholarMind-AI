'use client';
import { 
  Send, Brain, FileText, Search, 
  ChevronRight, Activity, Zap, 
  ExternalLink, Layers, ShieldCheck,
  FileCode, Cpu, Table, FileSearch, HelpCircle
} from 'lucide-react';

export default function RightPanel() {
  const recentProjects = [
    { name: 'Quantum Chemistry Research', stats: '12 Papers • Updated 2h ago', progress: 85, color: 'bg-blue-500' },
    { name: 'Thesis - Chapter 1', stats: '8 Papers • Updated 1d ago', progress: 60, color: 'bg-purple-500' },
    { name: 'Machine Learning Review', stats: '15 Papers • Updated 3d ago', progress: 40, color: 'bg-emerald-500' },
    { name: 'Drug Discovery Project', stats: '10 Papers • Updated 5d ago', progress: 30, color: 'bg-orange-500' },
  ];

  const quickTools = [
    { name: 'DOI Resolver', icon: ExternalLink, color: 'text-blue-500' },
    { name: 'Reference Manager', icon: Layers, color: 'text-indigo-500' },
    { name: 'Plagiarism Checker', icon: ShieldCheck, color: 'text-emerald-500' },
    { name: 'Chat with PDF', icon: FileSearch, color: 'text-purple-500' },
    { name: 'Mind Map', icon: Cpu, color: 'text-orange-500' },
    { name: 'Table Extractor', icon: Table, color: 'text-blue-600' },
    { name: 'Formula Solver', icon: Zap, color: 'text-amber-500' },
    { name: 'AI Notes', icon: FileCode, color: 'text-rose-500' },
  ];

  return (
    <aside className="w-[340px] border-l border-slate-100 bg-white overflow-y-auto custom-scrollbar p-6 space-y-8 hidden xl:block animate-fade-in">
      
      {/* 1. AI Assistant (Copilot) */}
      <div className="glass-card p-6 border-indigo-100 bg-indigo-50/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
             <Brain className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">AI Assistant <span className="text-indigo-500">(Copilot)</span></h3>
        </div>
        
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Ask anything about your research...</p>
        
        <div className="grid grid-cols-2 gap-2 mb-6">
           {['Summarize this paper', 'Explain this concept', 'Find related papers', 'Create a research gap'].map((s) => (
             <button key={s} className="px-3 py-2 rounded-lg bg-white border border-slate-100 text-[9px] font-bold text-slate-600 hover:border-indigo-400 hover:text-indigo-600 transition-all text-left leading-tight">
               {s}
             </button>
           ))}
        </div>

        <div className="relative group">
           <input 
             type="text" 
             placeholder="Ask your question..." 
             className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-4 pr-12 text-xs font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all"
           />
           <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all">
              <Send className="w-3.5 h-3.5" />
           </button>
        </div>
      </div>

      {/* 2. Recent Projects */}
      <div className="space-y-4">
         <div className="flex items-center justify-between">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Recent Projects</h3>
            <button className="text-[10px] font-bold text-indigo-600 hover:underline">View All</button>
         </div>
         <div className="space-y-3">
            {recentProjects.map((proj) => (
              <div key={proj.name} className="p-3 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all group cursor-pointer">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:shadow-sm">
                       <Layers className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <p className="text-[11px] font-bold text-slate-900 truncate">{proj.name}</p>
                       <p className="text-[9px] text-slate-400 font-medium">{proj.stats}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                       <div className={`h-full ${proj.color}`} style={{ width: `${proj.progress}%` }}></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">{proj.progress}%</span>
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* 3. Quick Tools Grid */}
      <div className="space-y-4">
         <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Quick Tools</h3>
         <div className="grid grid-cols-4 gap-4">
            {quickTools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                 <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all group-hover:bg-white group-hover:shadow-lg group-hover:border-indigo-100">
                    <tool.icon className={`w-5 h-5 ${tool.color}`} />
                 </div>
                 <span className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter text-center leading-tight group-hover:text-slate-900 transition-colors">{tool.name}</span>
              </div>
            ))}
         </div>
      </div>

    </aside>
  );
}
