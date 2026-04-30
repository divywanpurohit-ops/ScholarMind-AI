'use client';
import { useState } from 'react';
import { 
  Plus, FileText, Globe, Link as LinkIcon, 
  Upload, Sparkles, Trash2, CheckCircle2, 
  ChevronRight, Brain, ShieldCheck, AlertCircle,
  FileSearch, Database, Zap, BookOpen, Quote,
  MoreVertical, Download, Send, Mic, Volume2
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function UnlimitedWorkspace() {
  const router = useRouter();
  const [pages, setPages] = useState([
    { id: 1, type: 'text', title: 'Research Notes', content: 'Initial hypothesis regarding climate impact on biodiversity...', status: 'analyzed' }
  ]);
  const [isFinalizing, setIsFinalizing] = useState(false);

  const addPage = (type) => {
    const newPage = {
      id: pages.length + 1,
      type: type || 'text',
      title: `Untitled ${type || 'Page'} ${pages.length + 1}`,
      content: '',
      status: 'pending'
    };
    setPages([...pages, newPage]);
  };

  const removePage = (id) => {
    setPages(pages.filter(p => p.id !== id));
  };

  const handleFinalize = () => {
    setIsFinalizing(true);
    setTimeout(() => {
      setIsFinalizing(false);
      router.push('/projects/synthesis');
    }, 2500);
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20">Active Project</span>
            <h1 className="text-3xl font-bold text-white font-heading">Climate Resilience Strategy 2026</h1>
          </div>
          <p className="text-[#9CA3AF] font-medium flex items-center gap-2">
            Multi-source analysis workspace. Add unlimited documents and data points.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <Download className="w-4 h-4" /> Save Draft
          </button>
          <button 
            onClick={handleFinalize}
            className="btn-primary bg-gradient-to-r from-blue-600 to-indigo-600 px-8 flex items-center gap-2 shadow-xl shadow-blue-600/20 border-none"
          >
            {isFinalizing ? <Zap className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Finalize & Synthesize
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-0">
        
        {/* Main Workspace (Pages List) */}
        <div className="lg:col-span-3 flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-2">
           
           {pages.map((page, index) => (
             <div key={page.id} className="solid-card bg-[#0B0F19]/50 border-[#1F2937] hover:border-blue-500/30 transition-all group animate-fade-in">
                <div className="p-4 border-b border-[#1F2937] flex items-center justify-between bg-[#030712]/50">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#111827] flex items-center justify-center text-blue-400 border border-[#1F2937]">
                         {page.type === 'pdf' ? <FileText className="w-4 h-4" /> : 
                          page.type === 'url' ? <Globe className="w-4 h-4" /> : 
                          page.type === 'doi' ? <BookOpen className="w-4 h-4" /> : <Quote className="w-4 h-4" />}
                      </div>
                      <input 
                        className="bg-transparent text-sm font-bold text-white focus:outline-none focus:border-blue-500 border-b border-transparent"
                        defaultValue={page.title}
                      />
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest px-2 py-1 rounded bg-[#111827]">Page {index + 1}</span>
                      <button onClick={() => removePage(page.id)} className="p-2 text-[#4B5563] hover:text-rose-400 transition-colors">
                         <Trash2 className="w-4 h-4" />
                      </button>
                   </div>
                </div>

                <div className="p-6">
                   {page.type === 'text' ? (
                      <textarea 
                        className="w-full bg-transparent resize-none text-[#D1D5DB] focus:outline-none leading-relaxed font-serif text-lg min-h-[150px]"
                        placeholder="Type or paste your research content here..."
                        defaultValue={page.content}
                      ></textarea>
                   ) : (
                      <div className="flex flex-col items-center justify-center py-10 border-2 border-dashed border-[#1F2937] rounded-2xl bg-[#030712]/30 group-hover:bg-blue-500/5 transition-all">
                         <Upload className="w-10 h-10 text-[#4B5563] mb-4" />
                         <p className="text-sm text-[#9CA3AF] mb-4">Click to upload or paste {page.type.toUpperCase()}</p>
                         <button className="btn-secondary text-xs px-4 py-2">Select Source</button>
                      </div>
                   )}
                </div>

                {/* Smart Page Tools Bar */}
                <div className="p-3 bg-[#030712] border-t border-[#1F2937] flex items-center justify-center gap-4">
                   <button className="flex items-center gap-1.5 text-[10px] font-bold text-[#6B7280] hover:text-white transition-colors uppercase tracking-widest">
                      <FileSearch className="w-3.5 h-3.5" /> Extract Data
                   </button>
                   <div className="w-px h-4 bg-[#1F2937]"></div>
                   <button className="flex items-center gap-1.5 text-[10px] font-bold text-[#6B7280] hover:text-white transition-colors uppercase tracking-widest">
                      <Quote className="w-3.5 h-3.5" /> Citations
                   </button>
                   <div className="w-px h-4 bg-[#1F2937]"></div>
                   <button className="flex items-center gap-1.5 text-[10px] font-bold text-[#6B7280] hover:text-white transition-colors uppercase tracking-widest">
                      <Mic className="w-3.5 h-3.5" /> Dictate
                   </button>
                </div>
             </div>
           ))}

           {/* Add Next Page CTA */}
           <div className="flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#1F2937] rounded-3xl group hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
              <div className="flex flex-wrap justify-center gap-3 px-6">
                 {[
                   { label: 'Add Text', icon: Quote, type: 'text' },
                   { label: 'Upload PDF', icon: FileText, type: 'pdf' },
                   { label: 'DOI Link', icon: BookOpen, type: 'doi' },
                   { label: 'Website URL', icon: Globe, type: 'url' },
                   { label: 'Data Table', icon: Database, type: 'table' }
                 ].map((opt) => (
                   <button 
                     key={opt.type}
                     onClick={() => addPage(opt.type)}
                     className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111827] border border-[#1F2937] text-xs font-bold text-[#9CA3AF] hover:text-white hover:border-blue-500 transition-all"
                   >
                     <opt.icon className="w-4 h-4 text-blue-400" /> {opt.label}
                   </button>
                 ))}
              </div>
              
              <div className="flex items-center gap-4 w-full px-10">
                 <div className="h-px bg-[#1F2937] flex-1"></div>
                 <button 
                    onClick={() => addPage('text')}
                    className="flex items-center gap-3 px-8 py-4 bg-blue-600 rounded-2xl text-white font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-500 transition-all scale-110"
                 >
                    <Plus className="w-6 h-6" /> ADD NEXT PAGE
                 </button>
                 <div className="h-px bg-[#1F2937] flex-1"></div>
              </div>
           </div>
        </div>

        {/* Intelligence Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-6">
           <div className="solid-card p-6 border-blue-500/20 bg-blue-500/5">
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                 <Brain className="w-4 h-4" /> Research Intelligence
              </h3>
              <div className="space-y-4">
                 <div className="p-3 rounded-xl bg-[#030712] border border-[#1F2937] flex gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                       <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mb-1">Weak Argument</p>
                       <p className="text-xs text-[#D1D5DB]">Page 1 lacks recent (2024+) empirical citations for the biodiversity claim.</p>
                    </div>
                 </div>
                 <div className="p-3 rounded-xl bg-[#030712] border border-[#1F2937] flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                       <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mb-1">Novelty Detected</p>
                       <p className="text-xs text-[#D1D5DB]">Cross-referencing Page 1 with DOI link suggests a new conceptual framework.</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="solid-card p-6 bg-[#0B0F19]/50 border-[#1F2937] flex-1">
              <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-6">Voice Lab</h3>
              <div className="flex flex-col items-center justify-center text-center gap-6">
                 <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
                    <Mic className="w-10 h-10 text-blue-400" />
                 </div>
                 <div>
                    <h4 className="text-sm font-bold text-white mb-2">Read Project Aloud</h4>
                    <p className="text-xs text-[#9CA3AF]">Synthesize entire project into multi-language speech.</p>
                 </div>
                 <button className="w-full py-3 bg-[#111827] border border-[#1F2937] rounded-xl text-white font-bold flex items-center justify-center gap-3 hover:border-blue-500 transition-all">
                    <Volume2 className="w-4 h-4" /> Start Reading
                 </button>
              </div>
           </div>

           <div className="solid-card p-6 border-[#1F2937]">
              <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-4">Export Hub</h3>
              <div className="space-y-2">
                 <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#111827] transition-all text-xs text-[#D1D5DB]">
                    <span>Zotero Library</span>
                    <ChevronRight className="w-4 h-4 text-[#4B5563]" />
                 </button>
                 <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#111827] transition-all text-xs text-[#D1D5DB]">
                    <span>Mendeley Export</span>
                    <ChevronRight className="w-4 h-4 text-[#4B5563]" />
                 </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
