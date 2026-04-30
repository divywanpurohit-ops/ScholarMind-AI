'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Plus, PlayCircle, BarChart3, Languages, FileSearch, 
  UserCheck, Quote, Network, Library, GraduationCap, 
  Brain, Mic, ShieldCheck, Zap, Activity, BookOpen, 
  Search, Star, PenTool, Database, MonitorPlay,
  ChevronRight, ArrowRight, HelpCircle, Globe, ImageIcon
} from 'lucide-react';

export default function SideBySideDashboard() {
  const [activeCategory, setActiveCategory] = useState('intelligence');

  const categories = [
    { id: 'intelligence', label: 'AI Intelligence', icon: Brain, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'writing', label: 'Writing & Analysis', icon: PenTool, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'generative', label: 'Generative Studio', icon: MonitorPlay, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'data', label: 'Data & Library', icon: Database, color: 'text-blue-600', bg: 'bg-blue-50' }
  ];

  const tools = {
    intelligence: [
      { title: 'Research Intel', desc: 'Find gaps & contradictions', icon: ShieldCheck, path: '/tools/intel' },
      { title: 'Discovery Hub', desc: 'Global paper meta-search', icon: Globe, path: '/tools/academic-search' },
      { title: 'Bio-Image Lab', desc: 'Scientific species fetcher', icon: ImageIcon, path: '/tools/bio-image' },
    ],
    writing: [
      { title: 'Writing Assistant', desc: 'Bypass AI detectors', icon: UserCheck, path: '/tools/writing' },
      { title: 'Translator Lab', desc: '100+ languages support', icon: Languages, path: '/tools/translator' },
      { title: 'Plagiarism Checker', desc: 'Deep academic scan', icon: FileSearch, path: '/tools/plagiarism' },
      { title: 'Quiz & MCQ Lab', desc: 'Generate Viva & MCQs', icon: HelpCircle, path: '/tools/quiz' },
    ],
    generative: [
      { title: 'Video Studio', desc: 'Animations & explainers', icon: PlayCircle, path: '/tools/video' },
      { title: 'PPT Generator', icon: MonitorPlay, desc: 'Professional slide decks', path: '/tools/ppt' },
      { title: 'Mind Map', desc: 'Visual Concept graphs', icon: Network, path: '/tools/visualization' },
    ],
    data: [
      { title: 'Data Analysis', desc: 'Hypothesis & SPSS/R', icon: BarChart3, path: '/tools/data' },
      { title: 'Citation Library', desc: 'Manage bibliography', icon: Quote, path: '/library' },
      { title: 'Multi-Paper Summary', desc: 'Meta-analysis summary', icon: Library, path: '/tools/multi-summary' },
    ]
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8">
      
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
           <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Research Command Center</h1>
           <p className="text-xs font-medium text-slate-500">Select a category to reveal specialized academic modules.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
              <Star className="w-3 h-3 fill-current" /> Premium Access
           </div>
           <Link href="/projects/new">
             <button className="btn-primary bg-blue-600 hover:bg-blue-500 px-6 py-2.5 text-xs font-bold border-none shadow-md">
                <Plus className="w-4 h-4" /> NEW PROJECT
             </button>
           </Link>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="flex-1 flex gap-6 min-h-0 overflow-hidden pb-8">
        
        {/* Left Panel: Category Selection */}
        <div className="w-64 flex flex-col gap-2 shrink-0">
           {categories.map((cat) => (
             <button 
               key={cat.id}
               onClick={() => setActiveCategory(cat.id)}
               className={`flex items-center gap-3 p-4 rounded-xl border transition-all text-left group ${
                 activeCategory === cat.id 
                  ? 'bg-white border-blue-200 shadow-sm ring-4 ring-blue-500/5' 
                  : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'
               }`}
             >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${activeCategory === cat.id ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-200 text-slate-500'}`}>
                   <cat.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                   <h3 className={`text-xs font-bold ${activeCategory === cat.id ? 'text-slate-900' : 'text-slate-500'}`}>
                      {cat.label}
                   </h3>
                </div>
                {activeCategory === cat.id && <ArrowRight className="w-3.5 h-3.5 text-blue-500" />}
             </button>
           ))}
           
           <div className="mt-auto p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">System Status</span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">All academic modules are live and synced with Global Databases.</p>
           </div>
        </div>

        {/* Right Panel: Tools Grid */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools[activeCategory].map((tool, idx) => (
                <Link href={tool.path} key={idx}>
                  <div className="solid-card bg-white p-5 h-full flex flex-col items-start gap-4 hover:border-blue-500 group animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                     <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-md border border-blue-100">
                        <tool.icon className="w-5 h-5" />
                     </div>
                     <div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">{tool.title}</h3>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{tool.desc}</p>
                     </div>
                     <div className="mt-auto pt-4 w-full border-t border-slate-50 flex items-center justify-between">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Open Module</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-all" />
                     </div>
                  </div>
                </Link>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
