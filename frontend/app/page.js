'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, Search, FileText, Languages, 
  Presentation, Video, BarChart3, Database, 
  Settings, HelpCircle, User, ArrowRight,
  ShieldCheck, Globe, Zap, Activity, 
  Plus, ChevronRight, Brain, PenTool,
  MonitorPlay, Library, FileSearch, Cpu,
  Rocket, FolderKanban
} from 'lucide-react';

export default function SimplifiedPremiumDashboard() {
  const [activeCategory, setActiveCategory] = useState('academic');

  const categories = [
    { id: 'academic', label: 'Academic Research', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'video', label: 'Video Studio', icon: Video, color: 'text-rose-600', bg: 'bg-rose-50' },
    { id: 'ppt', label: 'PPT Studio', icon: Presentation, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 'writing', label: 'Writing Lab', icon: PenTool, color: 'text-indigo-600', bg: 'bg-indigo-50' }
  ];

  const toolsByCategory = {
    academic: [
      { name: 'Discovery Hub', desc: 'Search global databases & download papers', icon: Globe, path: '/tools/academic-search' },
      { name: 'Research Intel', desc: 'Identify gaps, contradictions & novelty', icon: ShieldCheck, path: '/tools/intel' },
      { name: 'Library', desc: 'Manage your bibliography & citations', icon: Library, path: '/library' },
      { name: 'Data Analysis', desc: 'Hypothesis testing & statistical reports', icon: BarChart3, path: '/tools/data' },
      { name: 'AI Summary', desc: 'Multi-paper meta-analysis summaries', icon: FileText, path: '/tools/multi-summary' },
    ],
    video: [
      { name: 'Video Scripting', desc: 'Generate high-quality video scripts', icon: FileText, path: '/tools/video' },
      { name: 'Scene Creator', desc: 'Visualize scenes with AI descriptions', icon: MonitorPlay, path: '/tools/video' },
      { name: 'Voice Narration', desc: 'Add professional academic voiceovers', icon: Activity, path: '/tools/video' },
      { name: 'Final Rendering', desc: 'Merge and download your final video', icon: Play, path: '/tools/video' },
    ],
    ppt: [
      { name: 'Topic to Deck', desc: 'Convert research into full slide decks', icon: Presentation, path: '/tools/ppt' },
      { name: 'Visual Themes', desc: 'Professional academic slide templates', icon: Layout, path: '/tools/ppt' },
      { name: 'Content Merge', desc: 'Combine multiple topics into one PPT', icon: Layers, path: '/tools/ppt' },
      { name: 'Export PPTX', desc: 'Download ready-to-present files', icon: Download, path: '/tools/ppt' },
    ],
    writing: [
      { name: 'Writing Assistant', desc: 'Academic paraphrasing & flow fix', icon: PenTool, path: '/tools/writing' },
      { name: 'AI Detector', desc: 'Ensure your work passes all checks', icon: ShieldCheck, path: '/tools/writing' },
      { name: 'Humanizer', desc: 'Make AI text sound natural & formal', icon: UserCheck, path: '/tools/writing' },
      { name: 'Journal Audit', desc: 'Check for journal submission readiness', icon: CheckCircle, path: '/tools/writing' },
    ]
  };

  return (
    <div className="animate-fade-in space-y-10 pb-24">
      
      {/* Top Welcome Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
         <div className="space-y-1">
            <div className="flex items-center gap-3 mb-2">
               <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-[9px] font-bold tracking-widest uppercase">Research OS v4.2</span>
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Active</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none flex items-center gap-4">
               Kailash Chandra <span className="text-indigo-500">Dashboard</span>
            </h1>
            <p className="text-sm font-medium text-slate-500">Professional Academic AI Command Center</p>
         </div>
         <div className="flex items-center gap-4">
            <Link href="/profile">
               <div className="flex items-center gap-3 p-1 pr-4 rounded-full border border-slate-200 hover:border-indigo-300 transition-all bg-white shadow-sm cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-black group-hover:scale-105 transition-transform">KC</div>
                  <div>
                     <p className="text-[10px] font-bold text-slate-900 leading-none">Kailash Chandra</p>
                     <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-1">Senior Researcher</p>
                  </div>
               </div>
            </Link>
            <Link href="/tools/academic-search">
               <button className="btn-premium px-8 py-3.5 bg-slate-900 border-none shadow-xl shadow-indigo-900/10 hover:bg-black">
                  <Plus className="w-4 h-4" /> NEW RESEARCH
               </button>
            </Link>
         </div>
      </div>

      {/* Horizontal Category Ribbon */}
      <div className="bg-white border-y border-slate-100 p-2 overflow-x-auto custom-scrollbar flex items-center justify-center gap-4 sticky top-0 z-40 backdrop-blur-xl bg-white/80">
         {categories.map((cat) => {
            const Icon = cat.icon;
            return (
               <button 
                 key={cat.id}
                 onClick={() => setActiveCategory(cat.id)}
                 className={`flex items-center gap-3 px-8 py-3.5 rounded-2xl transition-all border whitespace-nowrap ${
                   activeCategory === cat.id 
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-900/20' 
                    : 'bg-white border-slate-100 text-slate-500 hover:bg-slate-50 hover:border-slate-200'
                 }`}
               >
                  <Icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-white' : ''}`} />
                  <span className="text-xs font-bold uppercase tracking-widest">{cat.label}</span>
               </button>
            );
         })}
      </div>

      {/* Tools Grid Section */}
      <div className="max-w-7xl mx-auto px-6">
         <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">
               {categories.find(c => c.id === activeCategory).label} <span className="text-slate-300 font-medium ml-2">Modules</span>
            </h2>
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">View Mode: Grid</span>
               <div className="w-px h-4 bg-slate-200"></div>
               <button className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest hover:underline">Customize Workspace</button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsByCategory[activeCategory].map((tool, idx) => {
               const Icon = tool.icon;
               return (
                  <Link href={tool.path} key={idx} className="group h-full">
                     <div className="glass-card bg-white p-6 h-full flex flex-col gap-6 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                           <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 space-y-2">
                           <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight group-hover:text-indigo-600 transition-colors">{tool.name}</h3>
                           <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{tool.desc}</p>
                        </div>
                        <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">Open Laboratory</span>
                           <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                        </div>
                     </div>
                  </Link>
               );
            })}
         </div>
      </div>

      {/* Main Feature Strip (Restored "Command" section) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
         
         {/* Translator Widget */}
         <div className="glass-card p-10 bg-[#0d1117] text-white border-none shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
               <Languages className="w-32 h-32" />
            </div>
            <div className="relative z-10 space-y-6">
               <h3 className="text-xl font-black uppercase tracking-tight">Translator Lab</h3>
               <p className="text-xs text-slate-400 leading-relaxed font-medium">Professional academic translation with citation & formatting preservation.</p>
               <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all">
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select Target: Hindi</span>
                     <ChevronRight className="w-4 h-4 text-slate-600" />
                  </div>
               </div>
               <Link href="/tools/translator">
                  <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-indigo-900/40 active:scale-95 transition-all">
                     ACTIVATE TRANSLATOR
                  </button>
               </Link>
            </div>
         </div>

         {/* Project Maturity (Old logic restored) */}
         <div className="glass-card p-10 bg-gradient-to-br from-slate-50 to-white border-slate-200">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Active Project: Quantum Chemistry</h3>
            <div className="space-y-8">
               <div className="flex items-end gap-3">
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">85%</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Complete</span>
               </div>
               <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 w-[85%] shadow-[0_0_15px_rgba(79,70,229,0.3)]"></div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-slate-100 bg-white">
                     <p className="text-xs font-bold text-slate-900">12</p>
                     <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Pages Added</p>
                  </div>
                  <div className="p-4 rounded-2xl border border-slate-100 bg-white">
                     <p className="text-xs font-bold text-slate-900">2.4k</p>
                     <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">AI Queries</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Support & Community */}
         <div className="glass-card p-10 space-y-8 border-slate-100">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Research Support</h3>
            <div className="space-y-4">
               {[
                  { label: 'Documentation', icon: Library },
                  { label: 'API Reference', icon: FileCode },
                  { label: 'Community Lab', icon: Globe },
                  { label: 'System Help', icon: HelpCircle }
               ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all cursor-pointer group">
                     <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
                        <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900">{item.label}</span>
                     </div>
                     <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                  </div>
               ))}
            </div>
         </div>

      </div>

      {/* Footer Bottom Strip */}
      <div className="fixed bottom-0 left-[280px] right-0 h-16 bg-[#0d1117] border-t border-white/5 flex items-center justify-between px-10 z-50 text-white">
         <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
               <Infinity className="w-5 h-5 text-blue-400" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Unlimited Everything</span>
            </div>
            <div className="flex items-center gap-3">
               <Brain className="w-5 h-5 text-purple-400" />
               <span className="text-[10px] font-bold uppercase tracking-widest">AI Powered Intelligence</span>
            </div>
         </div>
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Servers Ready</span>
            </div>
            <button className="text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all active:scale-95">
               Download Pro Report
            </button>
         </div>
      </div>

    </div>
  );
}

function GraduationCap(props) {
  return <GraduationCapIcon {...props} />;
}

import { GraduationCap as GraduationCapIcon, Layers, Download, CheckCircle, UserCheck } from 'lucide-react';
