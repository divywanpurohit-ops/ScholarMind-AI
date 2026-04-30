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
  FolderKanban
} from 'lucide-react';

export default function PremiumDashboard() {
  const [selectedProject, setSelectedProject] = useState('Quantum Chemistry');

  const actionCards = [
    { label: 'Start Research', desc: 'Create new research project', icon: Search, bg: 'bg-indigo-50', text: 'text-indigo-600', path: '/tools/academic-search' },
    { label: 'Upload Documents', desc: 'Upload unlimited files', icon: Upload, bg: 'bg-blue-50', text: 'text-blue-600', path: '/tools/upload' },
    { label: 'Summarize', desc: 'AI summary in seconds', icon: FileText, bg: 'bg-amber-50', text: 'text-amber-600', path: '/tools/multi-summary' },
    { label: 'Translate', desc: 'Translate full document', icon: Languages, bg: 'bg-purple-50', text: 'text-purple-600', path: '/tools/translator' },
    { label: 'Generate PPT', desc: 'Auto presentation', icon: Presentation, bg: 'bg-emerald-50', text: 'text-emerald-600', path: '/tools/ppt' },
    { label: 'Generate Video', desc: 'Animated explainers', icon: Video, bg: 'bg-rose-50', text: 'text-rose-600', path: '/tools/video' },
  ];

  const aiTools = [
    { name: 'AI Summary', icon: FileText, path: '/tools/multi-summary' },
    { name: 'Detailed Summary', icon: Brain, path: '/tools/multi-summary' },
    { name: 'Bullet Summary', icon: Zap, path: '/tools/multi-summary' },
    { name: 'Simple Explain', icon: MessageSquare, path: '/tools/chat' },
    { name: 'Key Findings', icon: ShieldCheck, path: '/tools/intel' },
    { name: 'Methodology', icon: Layout, path: '/tools/thesis' },
    { name: 'Literature Review', icon: BookOpen, path: '/tools/intel' },
    { name: 'Research Gap', icon: FileSearch, path: '/tools/intel' },
    { name: 'Hypothesis Builder', icon: Cpu, path: '/tools/thesis' },
    { name: 'Future Scope', icon: Rocket, path: '/tools/thesis' },
    { name: 'Weakness Finder', icon: Activity, path: '/tools/intel' },
    { name: 'Novelty Score', icon: Star, path: '/tools/intel' },
    { name: 'Mind Map', icon: Network, path: '/tools/visualization' },
    { name: 'Concept Map', icon: Layers, path: '/tools/visualization' },
    { name: 'Flashcards', icon: HelpCircle, path: '/tools/quiz' },
    { name: 'MCQ Generator', icon: MousePointer2, path: '/tools/quiz' },
    { name: 'Viva Questions', icon: MessageSquare, path: '/tools/chat' },
    { name: 'Notes Maker', icon: PenTool, path: '/tools/writing' },
    { name: 'Citation Generator', icon: Quote, path: '/tools/writing' },
    { name: 'Reference Manager', icon: Library, path: '/tools/academic-search' },
    { name: 'Similarity Checker', icon: ShieldCheck, path: '/tools/intel' },
    { name: 'Plagiarism Checker', icon: FileSearch, path: '/tools/plagiarism' },
    { name: 'Table Extractor', icon: Database, path: '/tools/data' },
    { name: 'Formula Explain', icon: Cpu, path: '/tools/chat' },
  ];

  return (
    <div className="animate-fade-in p-6 space-y-8 pb-20">
      
      {/* Hero Welcome Card */}
      <div className="glass-card p-10 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100 flex items-center justify-between overflow-hidden relative">
         <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl"></div>
         <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
               <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Dashboard Overview</span>
               <div className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 text-[9px] font-bold">LIVE SYNC</div>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Welcome back, Arham Khan 👋</h1>
            <p className="text-slate-500 font-medium">What would you like to do today?</p>
         </div>
         <div className="hidden lg:block relative z-10">
            <Link href="/tools/academic-search">
               <button className="btn-premium px-8 py-4">
                  <Sparkles className="w-5 h-5" /> Start New Research
               </button>
            </Link>
         </div>
      </div>

      {/* 6 Action Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
         {actionCards.map((card, idx) => {
            const Icon = card.icon;
            return (
               <Link href={card.path || '#'} key={idx} className="glass-card p-6 flex flex-col items-center text-center gap-4 hover:scale-[1.03] hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer group">
                  <div className={`w-14 h-14 rounded-2xl ${card.bg} ${card.text} flex items-center justify-center transition-all group-hover:rotate-12`}>
                     <Icon className="w-7 h-7" />
                  </div>
                  <div>
                     <h3 className="text-sm font-bold text-slate-900 mb-1">{card.label}</h3>
                     <p className="text-[10px] text-slate-500 font-medium leading-tight">{card.desc}</p>
                  </div>
               </Link>
            );
         })}
      </div>

      {/* Main Workspace & Sidebar Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         
         {/* Left Column: Project Workspace */}
         <div className="xl:col-span-2 space-y-8">
            <div className="glass-card p-8">
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                     <h2 className="text-xl font-extrabold text-slate-900">My Project Workspace</h2>
                     <select 
                       value={selectedProject} 
                       onChange={(e) => setSelectedProject(e.target.value)}
                       className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 transition-all"
                     >
                        <option>Quantum Chemistry</option>
                        <option>Thesis - Chapter 1</option>
                     </select>
                     <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest border border-emerald-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        Active
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <button className="p-2 rounded-xl border border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-all"><Settings className="w-4 h-4" /></button>
                     <button className="p-2 rounded-xl border border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-all"><Share2 className="w-4 h-4" /></button>
                     <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 shadow-lg shadow-indigo-100">Finalize Project</button>
                  </div>
               </div>

               <div className="space-y-4">
                  <div className="flex items-center justify-between">
                     <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Added Pages / Documents <span className="text-indigo-500">(You can add unlimited)</span></h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                     {[
                        { title: 'Page 1', sub: 'Introduction.pdf', pages: '15 Pages', type: 'PDF', color: 'text-red-500', bg: 'bg-red-50' },
                        { title: 'Page 2', sub: 'Research Paper.pdf', pages: '22 Pages', type: 'PDF', color: 'text-red-500', bg: 'bg-red-50' },
                        { title: 'Page 3', sub: 'Thesis Chapter.docx', pages: '18 Pages', type: 'DOCX', color: 'text-blue-500', bg: 'bg-blue-50' },
                        { title: 'Page 4', sub: 'Chemical Reaction.jpg', pages: 'Image', type: 'JPG', color: 'text-green-500', bg: 'bg-green-50' },
                        { title: 'Page 5', sub: 'Experiment Data.csv', pages: '2.4 MB', type: '2.4 MB', color: 'text-indigo-500', bg: 'bg-indigo-50' },
                     ].map((doc, idx) => (
                        <div key={idx} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-100 hover:shadow-md transition-all group cursor-pointer">
                           <div className="flex flex-col items-center text-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                                 {doc.type === 'PDF' && <FileText className={`w-5 h-5 ${doc.color}`} />}
                                 {doc.type === 'DOCX' && <FileCode className={`w-5 h-5 ${doc.color}`} />}
                                 {doc.type === 'JPG' && <ImageIcon className={`w-5 h-5 ${doc.color}`} />}
                                 {doc.type.includes('MB') && <Database className={`w-5 h-5 ${doc.color}`} />}
                              </div>
                              <div className="w-full">
                                 <span className="text-[11px] font-bold text-slate-900 block truncate">{doc.title}</span>
                                 <span className="text-[9px] text-slate-500 block truncate">{doc.sub}</span>
                              </div>
                              <div className="w-full flex items-center justify-between mt-2">
                                 <span className="text-[8px] font-bold text-slate-400">{doc.pages}</span>
                                 <div className={`px-1.5 py-0.5 rounded ${doc.bg} ${doc.color} text-[7px] font-extrabold`}>{doc.type}</div>
                              </div>
                           </div>
                        </div>
                     ))}
                     <Link href="/tools/academic-search" className="p-4 rounded-2xl border-2 border-dashed border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all flex flex-col items-center justify-center gap-2 cursor-pointer group">
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                           <Plus className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 group-hover:text-indigo-600 uppercase tracking-widest text-center">Add Next Page</span>
                     </Link>
                  </div>
               </div>
            </div>

            {/* AI Tools Grid Section */}
            <div className="glass-card p-8">
               <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-extrabold text-slate-900">AI Tools <span className="text-slate-400 font-medium">(After Finalize)</span></h2>
               </div>
               <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
                  {aiTools.map((tool, idx) => {
                     const Icon = tool.icon;
                     return (
                        <Link href={tool.path || '#'} key={idx} className="flex flex-col items-center gap-3 group cursor-pointer">
                           <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center transition-all group-hover:bg-indigo-600 group-hover:text-white group-hover:-translate-y-1">
                              <Icon className="w-5 h-5" />
                           </div>
                           <span className="text-[10px] font-bold text-slate-500 text-center uppercase tracking-widest group-hover:text-indigo-600">{tool.name}</span>
                        </Link>
                     );
                  })}
               </div>
               <div className="mt-10 pt-6 border-t border-slate-50 flex justify-center">
                  <button className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] hover:text-indigo-600 transition-colors">View All AI Tools</button>
               </div>
            </div>
         </div>

         {/* Right Column: Translator Lab & Previews */}
         <div className="space-y-8">
            
            {/* Translator Lab */}
            <div className="glass-card p-8 bg-indigo-600 text-white border-none premium-shadow">
               <h2 className="text-xl font-extrabold mb-6">Translator Lab</h2>
               <div className="space-y-4">
                  <div className="space-y-2">
                     <span className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest">From Language</span>
                     <div className="w-full bg-white/10 rounded-xl px-4 py-3 border border-white/20 flex items-center justify-between cursor-pointer">
                        <span className="text-sm font-bold">English (Auto Detect)</span>
                        <ChevronDown className="w-4 h-4" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <span className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest">To Language</span>
                     <div className="w-full bg-white/10 rounded-xl px-4 py-3 border border-white/20 flex items-center justify-between cursor-pointer">
                        <span className="text-sm font-bold">Hindi</span>
                        <ChevronDown className="w-4 h-4" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <span className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest">Translation Mode</span>
                     <div className="w-full bg-white/10 rounded-xl px-4 py-3 border border-white/20 flex items-center justify-between cursor-pointer">
                        <span className="text-sm font-bold">Academic Translation</span>
                        <ChevronDown className="w-4 h-4" />
                     </div>
                  </div>
                  <div className="space-y-2 pb-2">
                     <span className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest">What to Translate?</span>
                     <div className="w-full bg-white/10 rounded-xl px-4 py-3 border border-white/20 flex items-center justify-between cursor-pointer">
                        <span className="text-sm font-bold">Whole Project</span>
                        <ChevronDown className="w-4 h-4" />
                     </div>
                  </div>
                  <Link href="/tools/translator">
                     <button className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-extrabold shadow-xl shadow-indigo-900/20 active:scale-95 transition-all">
                        Translate Now
                     </button>
                  </Link>
               </div>

               <div className="mt-10 space-y-4 pt-6 border-t border-white/10">
                  <span className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest">Recent Translations</span>
                  {[
                     { title: 'Quantum Chemistry.pdf', to: 'Hindi', time: '2 min ago' },
                     { title: 'Thesis Chapter.docx', to: 'German', time: '10 min ago' },
                     { title: 'Research Paper.pdf', to: 'Urdu', time: '25 min ago' },
                  ].map((item, idx) => (
                     <div key={idx} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-all cursor-pointer group">
                        <div className="flex items-center gap-3">
                           <FileText className="w-3.5 h-3.5 text-indigo-200" />
                           <div className="text-[11px] font-bold">
                              {item.title} <span className="mx-1 text-white/50">→</span> {item.to}
                           </div>
                        </div>
                        <span className="text-[9px] text-white/50 font-bold">{item.time}</span>
                     </div>
                  ))}
                  <button className="w-full text-center py-2 text-[9px] font-bold text-indigo-100 uppercase tracking-[0.2em] hover:text-white transition-all">View All</button>
               </div>
            </div>

            {/* Storage Progress Alternative */}
            <div className="glass-card p-6 border-none bg-gradient-to-br from-slate-900 to-black text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Cpu className="w-20 h-20" />
               </div>
               <div className="relative z-10 space-y-4">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Project Maturity</h3>
                  <div className="flex items-end gap-2">
                     <span className="text-4xl font-extrabold text-indigo-400">85%</span>
                     <span className="text-[10px] font-bold text-slate-500 mb-1">FINALIZED</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-indigo-500 w-[85%] shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Your project is almost ready for final publication. 3 more modules recommended.</p>
               </div>
            </div>

         </div>
      </div>

      {/* Feature Preview Grid (3 Bottom Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="glass-card p-8 flex flex-col gap-6">
            <div>
               <h3 className="text-xl font-extrabold text-slate-900">Video Studio</h3>
               <p className="text-xs text-slate-500 font-medium">Turn your content into animated videos</p>
            </div>
            <div className="aspect-video rounded-2xl bg-slate-100 overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1532187875605-1ef6ca237bba?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover transition-all group-hover:scale-110" alt="Video Preview" />
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <Play className="w-12 h-12 text-white fill-current" />
               </div>
            </div>
            <div className="space-y-3">
               {['Scientific Animation', 'Lab Experiment Simulation', 'Voice Narration', 'Subtitles'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                     <div className="w-1 h-1 rounded-full bg-indigo-500"></div> {item}
                  </div>
               ))}
            </div>
            <Link href="/tools/video">
               <button className="btn-premium w-full bg-slate-50 border border-slate-200 text-slate-900 hover:bg-slate-100 shadow-none">Create Video</button>
            </Link>
         </div>

         <div className="glass-card p-8 flex flex-col gap-6">
            <div>
               <h3 className="text-xl font-extrabold text-slate-900">PPT Studio</h3>
               <p className="text-xs text-slate-500 font-medium">Convert content into presentation</p>
            </div>
            <div className="aspect-video rounded-2xl bg-slate-100 overflow-hidden relative group border border-slate-200">
               <div className="w-full h-full p-4 flex flex-col items-center justify-center text-center gap-4 bg-white">
                  <h4 className="text-lg font-bold text-slate-900">Quantum Chemistry</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Research Presentation</p>
                  <div className="w-10 h-10 rounded-full border-2 border-slate-100 border-t-indigo-600 animate-spin"></div>
               </div>
            </div>
            <div className="space-y-3">
               {['Auto PPT Generation', 'Charts & Diagrams', 'Professional Templates', 'Speaker Notes'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                     <div className="w-1 h-1 rounded-full bg-purple-500"></div> {item}
                  </div>
               ))}
            </div>
            <Link href="/tools/ppt">
               <button className="btn-premium w-full bg-slate-50 border border-slate-200 text-slate-900 hover:bg-slate-100 shadow-none">Generate PPT</button>
            </Link>
         </div>

         <div className="glass-card p-8 flex flex-col gap-6">
            <div>
               <h3 className="text-xl font-extrabold text-slate-900">Visualization Lab</h3>
               <p className="text-xs text-slate-500 font-medium">Create scientific visualizations</p>
            </div>
            <div className="aspect-video rounded-2xl bg-slate-100 overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Viz Preview" />
            </div>
            <div className="space-y-3">
               {['Mind Maps', 'Concept Maps', 'Diagrams', 'Infographics'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                     <div className="w-1 h-1 rounded-full bg-blue-500"></div> {item}
                  </div>
               ))}
            </div>
            <Link href="/tools/visualization">
               <button className="btn-premium w-full bg-slate-50 border border-slate-200 text-slate-900 hover:bg-slate-100 shadow-none">Create Visualization</button>
            </Link>
         </div>
      </div>

      {/* How It Works Section */}
      <div className="py-12 border-t border-slate-200">
         <h2 className="text-center text-xl font-extrabold text-slate-900 mb-12">How ScholarMind AI Works (Step by Step)</h2>
         <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-12 lg:gap-0 lg:flex-nowrap items-start">
            {[
               { id: 1, label: 'Create Project', desc: 'Define your research topic and create project', icon: FolderKanban, color: 'bg-amber-500' },
               { id: 2, label: 'Add Unlimited Pages', desc: 'Add documents, links, notes, images, data etc.', icon: Plus, color: 'bg-blue-500' },
               { id: 3, label: 'Finalize Project', desc: 'AI will process all content into knowledge base', icon: CheckCircle, color: 'bg-emerald-500' },
               { id: 4, label: 'Use AI Tools', desc: 'Summarize, analyze, research, extract, generate', icon: Cpu, color: 'bg-indigo-500' },
               { id: 5, label: 'Translate (Optional)', desc: 'Translate full project in 100+ languages', icon: Globe, color: 'bg-purple-500' },
               { id: 6, label: 'Generate Outputs', desc: 'PPT, Video, Notes, Report, Thesis, etc.', icon: Rocket, color: 'bg-rose-500' },
            ].map((step, i) => (
               <div key={i} className="flex-1 min-w-[150px] flex flex-col items-center text-center relative">
                  {i < 5 && (
                     <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-slate-200">
                        <div className="absolute right-0 -top-1 w-2 h-2 border-t border-r border-slate-200 rotate-45"></div>
                     </div>
                  )}
                  <div className={`w-14 h-14 rounded-full ${step.color} text-white flex items-center justify-center shadow-lg relative z-10 mb-4`}>
                     <step.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xs font-extrabold text-slate-900 mb-2">{step.id} {step.label}</h4>
                  <p className="text-[10px] text-slate-500 font-medium px-4 leading-relaxed">{step.desc}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Bottom Footer Strip */}
      <div className="fixed bottom-0 left-[280px] right-0 bg-[#0d1117] text-white py-4 px-10 flex items-center justify-between z-40 border-t border-white/5">
         <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Infinity className="w-4 h-4 text-blue-400" />
               </div>
               <div>
                  <span className="text-[10px] font-extrabold block">Unlimited Everything</span>
                  <span className="text-[8px] text-slate-500 block uppercase tracking-widest">No page limit, no upload limit</span>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-purple-400" />
               </div>
               <div>
                  <span className="text-[10px] font-extrabold block">AI Powered</span>
                  <span className="text-[8px] text-slate-500 block uppercase tracking-widest">Latest AI models for accuracy</span>
               </div>
            </div>
         </div>
         <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
               </div>
               <div>
                  <span className="text-[10px] font-extrabold block">Secure & Private</span>
                  <span className="text-[8px] text-slate-500 block uppercase tracking-widest">Your data is encrypted & safe</span>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Download className="w-4 h-4 text-rose-400" />
               </div>
               <div>
                  <span className="text-[10px] font-extrabold block">Export Anything</span>
                  <span className="text-[8px] text-slate-500 block uppercase tracking-widest">PDF, DOCX, PPTX, MP4, etc.</span>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
}
