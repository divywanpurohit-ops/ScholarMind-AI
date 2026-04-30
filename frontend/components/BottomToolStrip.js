'use client';
import { 
  Languages, Presentation, Video, PenTool,
  Fingerprint, Brain, ShieldCheck, Search,
  Activity, Zap, Cpu, Table, FileSearch, StickyNote
} from 'lucide-react';

export default function BottomToolStrip() {
  const tools = [
    { name: 'Translator Pro', icon: Languages, color: 'text-blue-500' },
    { name: 'PPT Studio', icon: Presentation, color: 'text-orange-500' },
    { name: 'Video Studio', icon: Video, color: 'text-rose-500' },
    { name: 'AI Writer', icon: PenTool, color: 'text-indigo-500' },
    { name: 'Citation Generator', icon: Fingerprint, color: 'text-emerald-500' },
    { name: 'RAG Copilot', icon: Brain, color: 'text-purple-500' },
    { name: 'Research Audit', icon: ShieldCheck, color: 'text-blue-600' },
    { name: 'Plagiarism Checker', icon: Activity, color: 'text-rose-600' },
    { name: 'Data Analyzer', icon: Zap, color: 'text-amber-500' },
    { name: 'Mind Mapper', icon: Cpu, color: 'text-orange-500' },
    { name: 'Table Extractor', icon: Table, color: 'text-blue-500' },
    { name: 'Formula Solver', icon: Zap, color: 'text-indigo-600' },
    { name: 'Chat with PDF', icon: FileSearch, color: 'text-purple-600' },
    { name: 'Notes Maker', icon: StickyNote, color: 'text-amber-600' },
  ];

  return (
    <div className="h-20 bg-white/80 backdrop-blur-xl border-t border-slate-100 px-10 flex items-center justify-between sticky bottom-0 z-40 overflow-hidden">
       <div className="flex items-center gap-4 border-r border-slate-100 pr-8 mr-8">
          <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] whitespace-nowrap">Powerful AI Tools</p>
       </div>
       <div className="flex-1 overflow-x-auto custom-scrollbar flex items-center gap-10 scroll-smooth">
          {tools.map((tool) => (
             <div key={tool.name} className="flex items-center gap-3 cursor-pointer group whitespace-nowrap">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center transition-all group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110">
                   <tool.icon className={`w-4 h-4 ${tool.color} group-hover:text-white`} />
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-900 transition-colors">{tool.name}</span>
             </div>
          ))}
       </div>
    </div>
  );
}
