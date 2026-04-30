'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sparkles, Search, FileText, Languages, 
  Presentation, Video, BarChart3, CloudUpload,
  ArrowRight, ShieldCheck, Globe, Zap, 
  Plus, ChevronRight, Brain, PenTool,
  Upload, Database, Layers, CheckCircle,
  FileCode, Cpu, Table, FileSearch, Quote,
  GraduationCap
} from 'lucide-react';

export default function ScholarMindDashboard() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeSearchTab, setActiveSearchTab] = useState('All Publishers');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const stats = [
    { label: 'Projects', value: '12' },
    { label: 'Papers', value: '248' },
    { label: 'Citations', value: '1.2K' },
    { label: 'h-index', value: '18' },
  ];

  const actionCards = [
    { name: 'Academic Search', desc: 'Search 200M+ papers from all publishers', icon: Search, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
    { name: 'Upload Document', desc: 'Upload papers, books, notes, or slides', icon: CloudUpload, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
    { name: 'AI Summarizer', desc: 'Summarize any paper in seconds', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
    { name: 'Translator Pro', desc: 'Translate full papers in 100+ languages', icon: Languages, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
    { name: 'PPT Generator', desc: 'Generate academic presentations', icon: Presentation, color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
    { name: 'Video Generator', desc: 'Create AI videos from text or papers', icon: Video, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100' },
  ];

  const searchTabs = [
    'All Publishers', 'Google Scholar', 'PubMed', 'Springer', 'Elsevier', 
    'IEEE Xplore', 'Nature', 'ScienceDirect', 'Wiley', 'ACS', 'MDPI', 'arXiv', 'More'
  ];

  const toolsGeneration = [
    { name: 'AI Writer', desc: 'Write research papers, essays, and more', icon: PenTool, color: 'text-blue-500' },
    { name: 'PPT Studio', desc: 'Generate academic presentations', icon: Presentation, color: 'text-orange-500' },
    { name: 'Video Studio', icon: Video, desc: 'Create videos from text or papers', color: 'text-rose-500' },
    { name: 'Visualizer', icon: BarChart3, desc: 'Create mind maps, diagrams & charts', color: 'text-emerald-500' },
  ];

  const researchIntel = [
    { name: 'Literature Review', desc: 'AI-powered literature review', icon: BookOpen, color: 'text-blue-600' },
    { name: 'Research Audit', desc: 'Check novelty, gaps & credibility', icon: ShieldCheck, color: 'text-emerald-600' },
    { name: 'RAG Copilot', desc: 'Chat with your documents', icon: Brain, color: 'text-purple-600' },
    { name: 'Data Analyzer', desc: 'Analyze data, graphs & results', icon: Zap, color: 'text-amber-600' },
  ];

  return (
    <div className="animate-fade-in space-y-10 pb-24">
      
      {/* 1. Hero Section (Welcome & Stats) */}
      <div className="glass-card p-10 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
         <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <GraduationCap className="w-64 h-64 text-indigo-600" />
         </div>
         
         <div className="relative z-10 flex-shrink-0">
            <img 
              src="https://avatar.iran.liara.run/public/boy?username=Kailash" 
              alt="Profile" 
              className="w-32 h-32 rounded-full border-4 border-white shadow-2xl p-1 bg-white"
            />
         </div>

         <div className="relative z-10 flex-1 space-y-6">
            <div className="space-y-1">
               <p className="text-sm font-bold text-slate-400">Welcome back,</p>
               <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-4">
                  Kailash Chandra <span className="px-4 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest">Pro Researcher</span>
               </h1>
               <p className="text-sm font-medium text-slate-500">Senior Researcher | Quantum Chemistry</p>
            </div>

            <div className="flex items-center gap-12">
               {stats.map((s) => (
                 <div key={s.label}>
                    <p className="text-2xl font-black text-slate-900 leading-none">{s.value}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{s.label}</p>
                 </div>
               ))}
            </div>
         </div>

         <div className="relative z-10 w-full md:w-80 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4">
            <Quote className="w-8 h-8 text-indigo-100" />
            <p className="text-xs font-bold text-slate-600 leading-relaxed italic">
               "Research is to see what everybody else has seen, and to think what nobody else has thought."
            </p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">— Albert Szent-Györgyi</p>
         </div>
      </div>

      {/* 2. Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
         {actionCards.map((card, idx) => (
           <div key={card.name} className={`glass-card p-6 flex flex-col gap-6 cursor-pointer group hover:scale-[1.02] ${card.border}`} style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className={`w-12 h-12 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center transition-all group-hover:scale-110`}>
                 <card.icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                 <h3 className="text-xs font-black text-slate-900 uppercase tracking-tight">{card.name}</h3>
                 <p className="text-[9px] text-slate-500 font-medium leading-relaxed">{card.desc}</p>
              </div>
              <div className="pt-2">
                 <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Search className="w-3.5 h-3.5" />
                 </div>
              </div>
           </div>
         ))}
      </div>

      {/* 3. Multi-Publisher Discovery Hub */}
      <div className="glass-card p-10 space-y-8">
         <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Academic Search - <span className="text-indigo-600">Multi-Publisher Discovery</span></h2>
            <button className="text-[10px] font-bold text-indigo-600 hover:underline flex items-center gap-2">
               ADVANCED SEARCH <ArrowRight className="w-3.5 h-3.5" />
            </button>
         </div>

         <div className="relative max-w-4xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Enter keywords, DOI, Title, Author, Topic..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-16 pr-32 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-indigo-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-indigo-900/20 hover:bg-indigo-700">
               SEARCH
            </button>
         </div>

         <div className="flex flex-wrap gap-2">
            {searchTabs.map((tab) => (
               <button 
                 key={tab}
                 onClick={() => setActiveSearchTab(tab)}
                 className={`publisher-tab ${activeSearchTab === tab ? 'publisher-tab-active' : ''}`}
               >
                  {tab}
               </button>
            ))}
         </div>

         <div className="grid grid-cols-5 gap-6 pt-6">
            {[
               { label: 'Total Papers', val: '200M+' },
               { label: 'Publishers', val: '50,000+' },
               { label: 'Databases', val: '100+' },
               { label: 'Full-Text Access', val: '10M+' },
               { label: 'Searches', val: 'Unlimited' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-3xl border border-slate-50 bg-slate-50/30">
                 <p className="text-xl font-black text-slate-900">{stat.val}</p>
                 <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
         </div>
      </div>

      {/* 4. Lower Grid (Generation | Intelligence | Workspace) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
         {/* Column 1: AI Content Generation */}
         <div className="glass-card p-8 space-y-8">
            <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] pb-4 border-b border-slate-50">AI Content Generation</h3>
            <div className="space-y-6">
               {toolsGeneration.map((tool) => (
                 <div key={tool.name} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center transition-all group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6">
                       <tool.icon className={`w-5 h-5 ${tool.color} group-hover:text-white`} />
                    </div>
                    <div>
                       <p className="text-xs font-black text-slate-900 uppercase tracking-tight">{tool.name}</p>
                       <p className="text-[9px] text-slate-400 font-medium">{tool.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Column 2: Research Intelligence */}
         <div className="glass-card p-8 space-y-8">
            <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] pb-4 border-b border-slate-50">Research Intelligence</h3>
            <div className="space-y-6">
               {researchIntel.map((tool) => (
                 <div key={tool.name} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center transition-all group-hover:bg-indigo-600 group-hover:text-white group-hover:-rotate-6">
                       <tool.icon className={`w-5 h-5 ${tool.color} group-hover:text-white`} />
                    </div>
                    <div>
                       <p className="text-xs font-black text-slate-900 uppercase tracking-tight">{tool.name}</p>
                       <p className="text-[9px] text-slate-400 font-medium">{tool.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Column 3: My Workspace (Upload Zone) */}
         <div className="glass-card p-8 flex flex-col justify-between">
            <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] pb-4 border-b border-slate-50">My Workspace</h3>
            <div className="flex-1 flex flex-col items-center justify-center py-10 space-y-6">
               <div className="w-20 h-20 rounded-full bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center group-hover:border-indigo-400 transition-all">
                  <Upload className="w-8 h-8 text-slate-300" />
               </div>
               <div className="text-center">
                  <p className="text-xs font-black text-slate-900">Drag & Drop your files here</p>
                  <p className="text-[10px] text-slate-400 font-medium mt-1">PDF, DOCX, PPTX, TXT, CSV, Images</p>
               </div>
               <button className="px-10 py-3 rounded-xl bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-indigo-900/20">
                  UPLOAD FILES
               </button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-6 border-t border-slate-50">
               {['Google Drive', 'Dropbox', 'OneDrive', 'Web URL'].map((src) => (
                 <div key={src} className="flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center"><Globe className="w-4 h-4" /></div>
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">{src}</span>
                 </div>
               ))}
            </div>
         </div>

      </div>

    </div>
  );
}

function BookOpen(props) {
  return <FileText {...props} />;
}
