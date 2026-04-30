'use client';
import { useState } from 'react';
import { 
  Quote, Download, Search, Filter, BookOpen, 
  Trash2, Share2, Plus, Copy, CheckCircle2,
  Bookmark, Library, FileText, Globe, GraduationCap
} from 'lucide-react';
import ExportShareBar from '@/components/ExportShareBar';

export default function CitationLibrary() {
  const [activeStyle, setActiveStyle] = useState('apa');
  const [citations, setCitations] = useState([
    { id: 1, title: "Quantum Biochemistry: A New Era", author: "Scholar, A.", journal: "Nature", year: 2024, doi: "10.1038/s41586-024" },
    { id: 2, title: "Molecular Dynamics of Plant Cells", author: "Botanist, B.", journal: "Plant Science", year: 2023, doi: "10.1016/j.plantsci.2023" },
  ]);

  const getCitationText = (cite) => {
    if (activeStyle === 'apa') return `${cite.author} (${cite.year}). ${cite.title}. ${cite.journal}. doi:${cite.doi}`;
    if (activeStyle === 'mla') return `${cite.author}. "${cite.title}." ${cite.journal}, ${cite.year}.`;
    return `${cite.author}, ${cite.year}, '${cite.title}', ${cite.journal}.`;
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-100">
                 <Quote className="w-5 h-5 text-white" />
              </div>
              Citation & Bibliography Library
           </h1>
           <p className="text-sm text-slate-500 mt-1 font-medium">Manage and export all your research references in multiple academic styles.</p>
        </div>
        <div className="flex gap-3">
           <button className="btn-secondary py-2 px-6 text-xs font-bold"><Plus className="w-4 h-4" /> Import BibTex</button>
           <button className="btn-primary py-2 px-6 bg-indigo-600 text-xs font-bold border-none shadow-md shadow-indigo-100">
             <Download className="w-4 h-4" /> Export Bibliography
           </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden pb-4">
        
        {/* Left Side: Controls & Styles */}
        <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0 overflow-y-auto custom-scrollbar pr-2">
           <div className="solid-card p-6 bg-white space-y-6">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                 <Library className="w-4 h-4 text-indigo-600" /> Citation Styles
              </h3>
              <div className="flex flex-col gap-2">
                 {['APA (7th Ed)', 'MLA (9th Ed)', 'Harvard', 'Chicago'].map((style) => (
                    <button 
                      key={style}
                      onClick={() => setActiveStyle(style.split(' ')[0].toLowerCase())}
                      className={`flex items-center gap-3 p-4 rounded-xl border transition-all text-left ${
                        activeStyle === style.split(' ')[0].toLowerCase() 
                         ? 'bg-white border-indigo-500 shadow-md ring-4 ring-indigo-500/5' 
                         : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'
                      }`}
                    >
                       <div className={`w-3 h-3 rounded-full ${activeStyle === style.split(' ')[0].toLowerCase() ? 'bg-indigo-600' : 'bg-slate-300'}`}></div>
                       <span className={`text-[11px] font-bold ${activeStyle === style.split(' ')[0].toLowerCase() ? 'text-slate-900' : 'text-slate-500'}`}>{style}</span>
                    </button>
                 ))}
              </div>
           </div>

           <div className="solid-card p-6 bg-indigo-50 border-indigo-100 space-y-2">
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Library Stats</p>
              <div className="flex items-center justify-between">
                 <span className="text-sm text-indigo-900 font-bold">Total References</span>
                 <span className="text-xl font-bold text-indigo-600">{citations.length}</span>
              </div>
           </div>
        </div>

        {/* Right Side: Citations List */}
        <div className="flex-1 flex flex-col gap-6 min-h-0 overflow-hidden">
           <div className="flex-1 solid-card bg-white flex flex-col overflow-hidden border-slate-200">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                 <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Search references..."
                      className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-xs font-medium focus:outline-none focus:border-indigo-500"
                    />
                 </div>
                 <button className="text-[10px] font-bold text-indigo-600 hover:underline uppercase tracking-widest">Clean Duplicates</button>
              </div>

              <div className="flex-1 p-8 overflow-y-auto custom-scrollbar space-y-6">
                 {citations.map((cite) => (
                    <div key={cite.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-indigo-500 hover:bg-white transition-all space-y-4 shadow-sm">
                       <div className="flex items-start justify-between">
                          <div className="flex-1 space-y-1">
                             <div className="flex items-center gap-2">
                                <FileText className="w-3.5 h-3.5 text-indigo-600" />
                                <h3 className="text-sm font-bold text-slate-900">{cite.title}</h3>
                             </div>
                             <p className="text-[11px] text-slate-500 font-medium">{cite.author} | {cite.journal} ({cite.year})</p>
                          </div>
                          <div className="flex gap-2">
                             <button className="p-2 text-slate-300 hover:text-indigo-600 transition-all"><Copy className="w-4 h-4" /></button>
                             <button className="p-2 text-slate-300 hover:text-rose-600 transition-all"><Trash2 className="w-4 h-4" /></button>
                          </div>
                       </div>
                       
                       <div className="p-4 rounded-xl bg-white border border-slate-100 border-l-4 border-l-indigo-600 relative">
                          <p className="text-xs font-serif text-slate-700 italic leading-relaxed pr-10">
                             {getCitationText(cite)}
                          </p>
                          <button className="absolute top-4 right-4 text-[9px] font-bold text-indigo-600 uppercase tracking-widest hover:underline">Copy Cite</button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="solid-card p-6 bg-white shrink-0">
              <ExportShareBar title="Academic Bibliography" fileType="RIS" />
           </div>
        </div>

      </div>

    </div>
  );
}
