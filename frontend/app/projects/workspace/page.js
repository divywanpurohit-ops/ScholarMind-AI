'use client';
import { useState } from 'react';
import { 
  Plus, FileText, Globe, Link2, Table, Layout, 
  MessageSquare, ChevronRight, ChevronLeft, 
  X, CheckCircle2, CloudUpload, Sparkles, 
  Database, Image as ImageIcon, Video, Music,
  Sigma, Layers, Trash2, Save, FileOutput, Activity
} from 'lucide-react';

export default function Workspace() {
  const [pages, setPages] = useState([
    { id: 1, type: 'note', title: 'Initial Project Brainstorming', content: 'Outline your core hypothesis here...' }
  ]);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isFinalizing, setIsFinalizing] = useState(false);

  const addPage = (type) => {
    const newPage = {
      id: Date.now(),
      type: type,
      title: `Untitled ${type.toUpperCase()}`,
      content: '',
      data: null
    };
    setPages([...pages, newPage]);
    setActivePageIndex(pages.length);
  };

  const deletePage = (id) => {
    if (pages.length === 1) return;
    const newPages = pages.filter(p => p.id !== id);
    setPages(newPages);
    setActivePageIndex(0);
  };

  const pageTypes = [
    { id: 'pdf', label: 'PDF', icon: FileText },
    { id: 'website', label: 'Website', icon: Globe },
    { id: 'doi', label: 'DOI Link', icon: Link2 },
    { id: 'note', label: 'Note', icon: MessageSquare },
    { id: 'table', label: 'Table', icon: Table },
    { id: 'formula', label: 'Formula', icon: Sigma },
    { id: 'dataset', label: 'Dataset', icon: Database },
    { id: 'image', label: 'Image', icon: ImageIcon },
    { id: 'video', label: 'Video Transcript', icon: Video },
  ];

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-6">
      
      {/* Workspace Header */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-100">
              <Layers className="w-5 h-5 text-white" />
           </div>
           <div>
              <h1 className="text-xl font-bold text-slate-900">Intelligent Workspace</h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Unlimited Page Engine v2.0</p>
           </div>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="btn-secondary py-2 px-6 text-xs font-bold border-slate-200">
              <Save className="w-4 h-4" /> Save Draft
           </button>
           <button 
             onClick={() => setIsFinalizing(true)}
             className="btn-primary bg-slate-900 hover:bg-black py-2 px-8 text-xs font-bold border-none shadow-xl shadow-slate-200"
           >
              <FileOutput className="w-4 h-4" /> FINALIZE PROJECT
           </button>
        </div>
      </div>

      {/* Main Workspace: 2-Column Side-by-Side */}
      <div className="flex-1 flex gap-6 min-h-0 overflow-hidden pb-4">
        
        {/* Left Side: Page Navigator & Add Buttons */}
        <div className="w-72 flex flex-col gap-6 shrink-0 overflow-y-auto custom-scrollbar pr-2">
           
           {/* Add New Page Ribbon */}
           <div className="solid-card p-4 bg-white border-blue-100 shadow-sm">
              <h3 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                 <Plus className="w-3 h-3" /> Add Workspace Pocket
              </h3>
              <div className="grid grid-cols-3 gap-2">
                 {pageTypes.slice(0, 9).map((type) => (
                   <button 
                     key={type.id} 
                     onClick={() => addPage(type.id)}
                     className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-500 hover:bg-white transition-all group"
                   >
                      <type.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 mb-1" />
                      <span className="text-[8px] font-bold text-slate-500 group-hover:text-slate-900 uppercase">{type.label}</span>
                   </button>
                 ))}
              </div>
           </div>

           {/* Current Pages List */}
           <div className="flex-1 flex flex-col gap-2">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Project Pages ({pages.length})</h3>
              {pages.map((page, idx) => (
                <div 
                  key={page.id}
                  onClick={() => setActivePageIndex(idx)}
                  className={`flex items-center gap-3 p-4 rounded-2xl border transition-all cursor-pointer group ${
                    activePageIndex === idx 
                     ? 'bg-white border-blue-500 shadow-md ring-4 ring-blue-500/5' 
                     : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'
                  }`}
                >
                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activePageIndex === idx ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-400'}`}>
                      {pageTypes.find(t => t.id === page.type)?.icon && 
                        (() => {
                           const Icon = pageTypes.find(t => t.id === page.type).icon;
                           return <Icon className="w-4 h-4" />;
                        })()
                      }
                   </div>
                   <div className="flex-1 min-w-0">
                      <p className={`text-xs font-bold truncate ${activePageIndex === idx ? 'text-slate-900' : 'text-slate-500'}`}>{page.title}</p>
                      <p className="text-[10px] font-medium text-slate-400 uppercase">{page.type}</p>
                   </div>
                   <button onClick={(e) => { e.stopPropagation(); deletePage(page.id); }} className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-all">
                      <Trash2 className="w-3.5 h-3.5" />
                   </button>
                </div>
              ))}

              <button 
                onClick={() => addPage('note')}
                className="w-full py-4 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 text-xs font-bold flex items-center justify-center gap-2 hover:border-blue-500 hover:text-blue-600 transition-all mt-4"
              >
                 <Plus className="w-4 h-4" /> ADD NEXT PAGE
              </button>
           </div>
        </div>

        {/* Right Side: Page Editor Area */}
        <div className="flex-1 flex flex-col gap-4 min-h-0">
           <div className="flex-1 solid-card bg-white flex flex-col overflow-hidden relative border-slate-200">
              {/* Page Toolbar */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type:</span>
                       <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-[9px] font-bold uppercase">{pages[activePageIndex].type}</span>
                    </div>
                    <input 
                      className="bg-transparent text-sm font-bold text-slate-900 focus:outline-none border-b border-transparent focus:border-blue-500 pb-0.5"
                      value={pages[activePageIndex].title}
                      onChange={(e) => {
                         const newPages = [...pages];
                         newPages[activePageIndex].title = e.target.value;
                         setPages(newPages);
                      }}
                    />
                 </div>
                 <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600"><CheckCircle2 className="w-4 h-4" /></button>
                 </div>
              </div>

              {/* Page Content Area */}
              <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
                 {pages[activePageIndex].type === 'note' ? (
                    <textarea 
                      className="w-full h-full bg-transparent text-slate-800 text-lg leading-relaxed focus:outline-none placeholder-slate-300 font-serif"
                      placeholder="Start typing your research notes or observations..."
                    ></textarea>
                 ) : pages[activePageIndex].type === 'doi' ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-10 gap-8 animate-fade-in">
                       <div className="w-20 h-20 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-lg shadow-blue-100">
                          <Link2 className="w-10 h-10" />
                       </div>
                       <div className="max-w-md w-full space-y-4">
                          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest">DOI Paper Fetcher</h3>
                          <div className="flex gap-2">
                             <input 
                               type="text" 
                               placeholder="Enter DOI (e.g. 10.1038/s41586-024...)"
                               className="input-field py-4 text-xs"
                               id="doi-input"
                             />
                             <button 
                               onClick={() => {
                                  const input = document.getElementById('doi-input');
                                  if (input.value) {
                                     const newPages = [...pages];
                                     newPages[activePageIndex].content = "Fetching paper metadata...";
                                     setPages(newPages);
                                     setTimeout(() => {
                                        newPages[activePageIndex].content = `Paper Found: "Quantum Advancements in Biochemistry"\nJournal: Nature [2024]\nDOI: ${input.value}`;
                                        setPages(newPages);
                                     }, 1500);
                                  }
                               }}
                               className="btn-primary bg-blue-600 px-6 border-none"
                             >Fetch</button>
                          </div>
                       </div>
                       
                       {pages[activePageIndex].content && (
                          <div className="w-full max-w-2xl p-8 rounded-3xl bg-slate-50 border border-slate-200 text-left animate-fade-in space-y-6">
                             <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                   <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Metadata Found</p>
                                   <p className="text-sm font-bold text-slate-900 leading-relaxed font-serif italic">{pages[activePageIndex].content}</p>
                                </div>
                                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                             </div>
                             <div className="flex gap-4">
                                <button className="flex-1 btn-primary bg-blue-600 py-3 text-[11px] font-bold border-none shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
                                   <Download className="w-4 h-4" /> Download PDF
                                </button>
                                <button className="flex-1 btn-secondary py-3 text-[11px] font-bold flex items-center justify-center gap-2 border-slate-200">
                                   <FileSearch className="w-4 h-4" /> View Abstract
                                </button>
                             </div>
                          </div>
                       )}
                    </div>
                 ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-20 gap-6 border-2 border-dashed border-slate-100 rounded-3xl">
                       <CloudUpload className="w-16 h-16 text-slate-200" />
                       <div className="space-y-2">
                          <h3 className="text-xl font-bold text-slate-900">Upload {pages[activePageIndex].type.toUpperCase()}</h3>
                          <p className="text-sm text-slate-500 max-w-sm">ScholarMind AI will analyze this document and integrate it into your project knowledge base.</p>
                       </div>
                       <div className="flex gap-4">
                          <button className="btn-primary py-3 px-8 text-xs border-none bg-blue-600">Browse Files</button>
                          <button className="btn-secondary py-3 px-8 text-xs">From URL</button>
                       </div>
                    </div>
                 )}
              </div>
           </div>
           
           {/* Bottom Actions */}
           <div className="flex items-center justify-between px-2 shrink-0">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                 <Activity className="w-3.5 h-3.5" /> Workspace active • Autosaved 2s ago
              </div>
              <div className="flex gap-3">
                 <button className="btn-secondary py-2 px-6 text-xs font-bold">Preview Merge</button>
                 <button onClick={() => addPage('note')} className="btn-primary bg-emerald-600 py-2 px-6 text-xs font-bold border-none shadow-md shadow-emerald-100">
                    <Plus className="w-4 h-4" /> Next Page
                 </button>
              </div>
           </div>
        </div>

      </div>

      {/* Finalization Overlay */}
      {isFinalizing && (
         <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-10 animate-fade-in">
            <div className="w-full max-w-2xl text-center space-y-10">
               <div className="relative w-24 h-24 mx-auto mb-10">
                  <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                  <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-blue-600 animate-pulse" />
               </div>
               <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Finalizing Project Knowledge Base</h2>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed">
                     Merging {pages.length} sources into a unified academic context. This will enable advanced research intelligence and tool-specific insights.
                  </p>
               </div>
               <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-2/3 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
               </div>
               <div className="flex items-center justify-center gap-4 text-xs font-bold text-blue-600 uppercase tracking-widest">
                  <Database className="w-4 h-4" /> Vectorizing PDF Data...
               </div>
               <button onClick={() => window.location.href = '/'} className="btn-primary bg-slate-900 py-4 px-12 border-none">
                  COMPLETE & OPEN DASHBOARD
               </button>
            </div>
         </div>
      )}

    </div>
  );
}
