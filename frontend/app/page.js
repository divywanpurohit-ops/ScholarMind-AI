'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, Upload, FileText, Languages, 
  Presentation, Video, Search, ShieldCheck, 
  Settings, Share2, Plus, FileCode, ImageIcon, 
  ChevronRight, Brain, Zap, Activity, BookOpen,
  HelpCircle, Quote, BarChart3, Database, FileSearch,
  CheckCircle, Globe, Play, MousePointer2, Layout,
  Cpu, Rocket, Lock, Download, Layers, MessageSquare,
  Star, Network, Library, PenTool, Infinity, ChevronDown,
  FolderKanban, UserCheck, PlayCircle, MonitorPlay, ArrowRight
} from 'lucide-react';

export default function UltimateDashboard() {
  const [selectedProject, setSelectedProject] = useState('Quantum Chemistry');
  const [activeCategory, setActiveCategory] = useState('intelligence');

  const categories = [
    { id: 'intelligence', label: 'AI Intelligence', icon: Brain, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { id: 'writing', label: 'Writing & Analysis', icon: PenTool, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'generative', label: 'Generative Studio', icon: MonitorPlay, color: 'text-rose-600', bg: 'bg-rose-50' },
    { id: 'data', label: 'Data & Library', icon: Database, color: 'text-emerald-600', bg: 'bg-emerald-50' }
  ];

  const toolsByCategory = {
    intelligence: [
      { name: 'Research Intel', desc: 'Find gaps & contradictions', icon: ShieldCheck, path: '/tools/intel' },
      { name: 'Discovery Hub', desc: 'Global paper meta-search', icon: Globe, path: '/tools/academic-search' },
      { name: 'Bio-Image Lab', desc: 'Scientific species fetcher', icon: ImageIcon, path: '/tools/bio-image' },
      { name: 'Research Gap', desc: 'Identify unexplored areas', icon: FileSearch, path: '/tools/intel' },
      { name: 'Hypothesis Builder', desc: 'Generate testable theories', icon: Cpu, path: '/tools/thesis' },
      { name: 'Novelty Score', desc: 'Check research uniqueness', icon: Star, path: '/tools/intel' },
    ],
    writing: [
      { name: 'Writing Assistant', desc: 'Bypass AI detectors', icon: UserCheck, path: '/tools/writing' },
      { name: 'Translator Lab', desc: '100+ languages support', icon: Languages, path: '/tools/translator' },
      { name: 'Plagiarism Checker', desc: 'Deep academic scan', icon: FileSearch, path: '/tools/plagiarism' },
      { name: 'Quiz & MCQ Lab', desc: 'Generate Viva & MCQs', icon: HelpCircle, path: '/tools/quiz' },
      { name: 'Citation Gen', desc: 'Auto citation builder', icon: Quote, path: '/tools/writing' },
      { name: 'Notes Maker', desc: 'AI structured notes', icon: PenTool, path: '/tools/writing' },
    ],
    generative: [
      { name: 'Video Studio', desc: 'Animations & explainers', icon: PlayCircle, path: '/tools/video' },
      { name: 'PPT Generator', desc: 'Professional slide decks', icon: MonitorPlay, path: '/tools/ppt' },
      { name: 'Mind Map', desc: 'Visual Concept graphs', icon: Network, path: '/tools/visualization' },
      { name: 'Concept Map', desc: 'Visual relational charts', icon: Layers, path: '/tools/visualization' },
      { name: 'Flashcards', desc: 'Study with AI cards', icon: HelpCircle, path: '/tools/quiz' },
      { name: 'Simple Explain', desc: 'Explain like I am 5', icon: MessageSquare, path: '/tools/chat' },
    ],
    data: [
      { name: 'Data Analysis', desc: 'Hypothesis & SPSS/R', icon: BarChart3, path: '/tools/data' },
      { name: 'Citation Library', desc: 'Manage bibliography', icon: Library, path: '/library' },
      { name: 'Multi-Paper Summary', desc: 'Meta-analysis summary', icon: Library, path: '/tools/multi-summary' },
      { name: 'Table Extractor', desc: 'Extract data from PDF', icon: Database, path: '/tools/data' },
      { name: 'Formula Explain', desc: 'Solve math & physics', icon: Cpu, path: '/tools/chat' },
      { name: 'Journal Audit', desc: 'Check journal readiness', icon: ShieldCheck, path: '/tools/writing' },
    ]
  };

  const actionCards = [
    { label: 'Research', desc: 'New project', icon: Search, bg: 'bg-indigo-50', text: 'text-indigo-600', path: '/tools/academic-search' },
    { label: 'Upload', desc: 'Add docs', icon: Upload, bg: 'bg-blue-50', text: 'text-blue-600', path: '/tools/upload' },
    { label: 'Summarize', desc: 'AI summary', icon: FileText, bg: 'bg-amber-50', text: 'text-amber-600', path: '/tools/multi-summary' },
    { label: 'Translate', desc: 'Global tools', icon: Languages, bg: 'bg-purple-50', text: 'text-purple-600', path: '/tools/translator' },
    { label: 'PPT Gen', desc: 'Slide decks', icon: Presentation, bg: 'bg-emerald-50', text: 'text-emerald-600', path: '/tools/ppt' },
    { label: 'Video Gen', desc: 'Explainers', icon: Video, bg: 'bg-rose-50', text: 'text-rose-600', path: '/tools/video' },
  ];

  return (
    <div className="animate-fade-in p-6 space-y-8 pb-24">
      
      {/* Hero Welcome Card */}
      <div className="glass-card p-10 bg-gradient-to-br from-slate-900 to-black text-white border-none overflow-hidden relative">
         <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]"></div>
         <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]"></div>
         <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
               <div className="px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(79,70,229,0.5)]">PRO ACCESS</div>
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Connected to Global Databases</span>
            </div>
            <h1 className="text-5xl font-black mb-4 tracking-tight leading-tight">Welcome back,<br/>Arham Khan 👋</h1>
            <p className="text-slate-400 font-medium max-w-xl text-lg">Your academic OS is ready. Continue your research on <span className="text-white font-bold">{selectedProject}</span> or start a new discovery.</p>
         </div>
         <div className="hidden xl:block absolute right-10 bottom-10">
            <Link href="/tools/academic-search">
               <button className="btn-premium px-10 py-5 bg-indigo-600 hover:bg-indigo-500 shadow-2xl shadow-indigo-500/20 border-none group">
                  <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" /> START NEW RESEARCH
               </button>
            </Link>
         </div>
      </div>

      {/* 6 Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
         {actionCards.map((card, idx) => {
            const Icon = card.icon;
            return (
               <Link href={card.path} key={idx} className="glass-card p-6 flex flex-col items-center text-center gap-3 hover:scale-[1.05] hover:shadow-xl transition-all cursor-pointer group">
                  <div className={`w-12 h-12 rounded-2xl ${card.bg} ${card.text} flex items-center justify-center transition-all group-hover:rotate-6`}>
                     <Icon className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-xs font-bold text-slate-900 mb-1">{card.label}</h3>
                     <p className="text-[9px] text-slate-500 font-medium leading-tight uppercase tracking-widest">{card.desc}</p>
                  </div>
               </Link>
            );
         })}
      </div>

      {/* Two Column Layout: Categories & Workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         
         {/* Left: Project Workspace (New Feature) */}
         <div className="xl:col-span-2 space-y-8">
            <div className="glass-card p-8">
               <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-50">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                        <FolderKanban className="w-5 h-5" />
                     </div>
                     <div>
                        <h2 className="text-xl font-extrabold text-slate-900">Project Workspace</h2>
                        <div className="flex items-center gap-2 mt-1">
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Project:</span>
                           <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{selectedProject}</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <button className="p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 text-slate-400 transition-all"><Settings className="w-4 h-4" /></button>
                     <button className="p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 text-slate-400 transition-all"><Share2 className="w-4 h-4" /></button>
                     <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-lg shadow-indigo-100">Finalize</button>
                  </div>
               </div>

               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {[
                     { title: 'Intro', sub: 'PDF', icon: FileText, color: 'text-rose-500' },
                     { title: 'Method', sub: 'DOCX', icon: FileCode, color: 'text-blue-500' },
                     { title: 'Graphs', sub: 'JPG', icon: ImageIcon, color: 'text-emerald-500' },
                     { title: 'Results', sub: 'PDF', icon: FileText, color: 'text-rose-500' },
                  ].map((doc, idx) => (
                     <div key={idx} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-100 transition-all cursor-pointer text-center group">
                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                           <doc.icon className={`w-5 h-5 ${doc.color}`} />
                        </div>
                        <span className="text-[11px] font-bold text-slate-900 block truncate">{doc.title}</span>
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{doc.sub}</span>
                     </div>
                  ))}
                  <Link href="/tools/academic-search" className="p-4 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all group">
                     <Plus className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
                     <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Add Page</span>
                  </Link>
               </div>
            </div>

            {/* AI Explorer: Hybrid (Old Category Logic + New Style) */}
            <div className="glass-card p-0 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
               {/* Left: Category Sidebar */}
               <div className="w-full md:w-64 bg-slate-50/50 border-r border-slate-100 p-6 flex flex-col gap-2">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">AI Categories</h3>
                  {categories.map((cat) => (
                     <button 
                       key={cat.id}
                       onClick={() => setActiveCategory(cat.id)}
                       className={`flex items-center gap-4 p-4 rounded-2xl transition-all text-left ${
                         activeCategory === cat.id 
                          ? 'bg-white text-slate-900 shadow-md ring-4 ring-indigo-500/5 border border-slate-100' 
                          : 'text-slate-500 hover:bg-white/50'
                       }`}
                     >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeCategory === cat.id ? `${cat.bg} ${cat.color}` : 'bg-slate-200 text-slate-400'}`}>
                           <cat.icon className="w-4 h-4" />
                        </div>
                        <span className={`text-xs font-bold ${activeCategory === cat.id ? 'text-slate-900' : 'text-slate-500'}`}>{cat.label}</span>
                        {activeCategory === cat.id && <ChevronRight className="w-4 h-4 ml-auto text-indigo-600" />}
                     </button>
                  ))}
               </div>

               {/* Right: Tools Grid */}
               <div className="flex-1 p-8">
                  <div className="flex items-center justify-between mb-8">
                     <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                        {categories.find(c => c.id === activeCategory).label} <span className="text-slate-400 font-medium ml-2">Modules</span>
                     </h3>
                     <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest px-3 py-1 bg-indigo-50 rounded-full">
                        {toolsByCategory[activeCategory].length} Tools Available
                     </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                     {toolsByCategory[activeCategory].map((tool, idx) => {
                        const Icon = tool.icon;
                        return (
                           <Link href={tool.path} key={idx}>
                              <div className="group animate-fade-in flex flex-col h-full">
                                 <div className="flex-1 p-5 rounded-2xl border border-slate-100 bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all flex flex-col gap-4 relative overflow-hidden">
                                    <div className="absolute -right-2 -top-2 w-12 h-12 bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                                       <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                       <h4 className="text-sm font-black text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{tool.name}</h4>
                                       <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{tool.desc}</p>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                                       <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em]">Open Lab</span>
                                       <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                                    </div>
                                 </div>
                              </div>
                           </Link>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>

         {/* Right: Sidebar Content (New & Old) */}
         <div className="space-y-8">
            
            {/* Translator Lab Widget (New & Premium) */}
            <div className="glass-card p-8 bg-indigo-600 text-white border-none shadow-2xl shadow-indigo-900/20">
               <h3 className="text-xl font-black mb-6 flex items-center gap-3"><Languages className="w-6 h-6" /> Translator Lab</h3>
               <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between cursor-pointer group hover:bg-white/20 transition-all">
                     <span className="text-xs font-bold uppercase tracking-widest text-indigo-100">From English</span>
                     <ChevronDown className="w-4 h-4 text-indigo-200" />
                  </div>
                  <div className="p-4 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between cursor-pointer group hover:bg-white/20 transition-all">
                     <span className="text-xs font-bold uppercase tracking-widest text-indigo-100">To Hindi</span>
                     <ChevronDown className="w-4 h-4 text-indigo-200" />
                  </div>
                  <Link href="/tools/translator">
                     <button className="w-full mt-4 py-4 rounded-2xl bg-white text-indigo-600 font-black text-sm shadow-xl shadow-indigo-900/40 active:scale-95 transition-all">
                        TRANSLATE NOW
                     </button>
                  </Link>
               </div>
            </div>

            {/* Storage / System Status (Old logic) */}
            <div className="glass-card p-8 bg-slate-900 border-none text-white overflow-hidden relative">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Cpu className="w-32 h-32" />
               </div>
               <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                     <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Project Maturity</h4>
                     <div className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 text-[8px] font-bold">85% COMPLETE</div>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-indigo-500 w-[85%] shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed italic">"Your project 'Quantum Chemistry' is ready for final peer-review audit."</p>
               </div>
            </div>

            {/* Recent Activity (New) */}
            <div className="glass-card p-6">
               <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">Recent Activity</h4>
               <div className="space-y-4">
                  {[
                     { label: 'PPT Generated', time: '12m ago', icon: Presentation, color: 'text-emerald-500' },
                     { label: 'Writing Audit', time: '45m ago', icon: ShieldCheck, color: 'text-blue-500' },
                     { label: 'Video Rendered', time: '2h ago', icon: Video, color: 'text-rose-500' },
                  ].map((act, i) => (
                     <div key={i} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                              <act.icon className="w-4 h-4" />
                           </div>
                           <span className="text-[11px] font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{act.label}</span>
                        </div>
                        <span className="text-[9px] font-bold text-slate-400">{act.time}</span>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="fixed bottom-0 left-[280px] right-0 h-16 bg-[#0d1117] border-t border-white/5 flex items-center justify-between px-10 z-50 text-white">
         <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
               <Infinity className="w-5 h-5 text-blue-400" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Unlimited Research Storage</span>
            </div>
            <div className="flex items-center gap-3">
               <Brain className="w-5 h-5 text-purple-400" />
               <span className="text-[10px] font-bold uppercase tracking-widest">AI Intelligence v4.2 Live</span>
            </div>
         </div>
         <button className="text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all active:scale-95">
            Upgrade To Scholar Pro
         </button>
      </div>

    </div>
  );
}
