'use client';
import { useState } from 'react';
import { 
  Search, Globe, FileText, Download, 
  ExternalLink, Loader2, Sparkles, Filter,
  Layers, Database, Library, ArrowRight,
  ShieldCheck, CheckCircle2, Star, Zap
} from 'lucide-react';
import Link from 'next/link';

export default function GlobalDiscoveryHub() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setIsLoading(true);
    try {
      const res = await fetch(`/api/ai/academic-search?query=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.status === 'success') {
        setResults(data.papers);
      }
    } catch (error) {
      console.error('Search failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8 pb-24 px-4">
      
      {/* Search Header */}
      <div className="glass-card p-12 bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-none shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-10 opacity-10">
            <Globe className="w-64 h-64" />
         </div>
         <div className="relative z-10 max-w-4xl mx-auto space-y-8 text-center">
            <div className="space-y-4">
               <h1 className="text-4xl font-black tracking-tight uppercase italic">Global Discovery <span className="text-blue-300">Hub</span></h1>
               <p className="text-blue-100 text-lg font-medium opacity-80">Search across Nature, Science, Elsevier, and 50M+ research papers.</p>
            </div>
            
            <form onSubmit={handleSearch} className="relative group max-w-2xl mx-auto">
               <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <Search className="w-6 h-6" />
               </div>
               <input 
                 type="text" 
                 placeholder="Search by topic, keyword, or DOI..."
                 value={query}
                 onChange={(e) => setQuery(e.target.value)}
                 className="w-full bg-white text-slate-900 rounded-3xl py-6 pl-16 pr-32 text-lg font-medium focus:outline-none focus:ring-8 focus:ring-white/10 transition-all shadow-2xl"
               />
               <button 
                 type="submit"
                 disabled={isLoading}
                 className="absolute inset-y-2 right-2 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2"
               >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  {isLoading ? 'Searching...' : 'Explore'}
               </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-blue-100/60">
               <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Nature</div>
               <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Science Direct</div>
               <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> PubMed</div>
               <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> IEEE Xplore</div>
            </div>
         </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 min-h-0">
         
         {/* Filters Sidebar */}
         <div className="hidden lg:flex flex-col gap-6 w-72 shrink-0">
            <div className="glass-card p-6 space-y-6">
               <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                  <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                     <Filter className="w-3.5 h-3.5" /> Filters
                  </h3>
                  <button className="text-[9px] font-bold text-blue-600 uppercase">Clear</button>
               </div>
               
               <div className="space-y-4">
                  <div>
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Publication Year</p>
                     <div className="space-y-2">
                        {['Last 12 Months', 'Last 5 Years', 'Custom Range'].map(opt => (
                           <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                              <div className="w-4 h-4 rounded border border-slate-200 group-hover:border-blue-500 transition-colors"></div>
                              <span className="text-[10px] font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{opt}</span>
                           </label>
                        ))}
                     </div>
                  </div>
                  
                  <div>
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Article Type</p>
                     <div className="space-y-2">
                        {['Journal Article', 'Review Paper', 'Case Study'].map(opt => (
                           <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                              <div className="w-4 h-4 rounded border border-slate-200 group-hover:border-blue-500 transition-colors"></div>
                              <span className="text-[10px] font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{opt}</span>
                           </label>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            <div className="glass-card p-6 bg-slate-50 border-slate-100 flex flex-col items-center text-center gap-4">
               <Zap className="w-10 h-10 text-amber-500 opacity-20" />
               <p className="text-[10px] text-slate-400 font-medium leading-relaxed">Upgrade to **Pro** to unlock AI-assisted citation export & bulk downloads.</p>
               <button className="w-full py-3 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">Go Pro</button>
            </div>
         </div>

         {/* Results List */}
         <div className="flex-1 space-y-6 overflow-y-auto custom-scrollbar pr-2 pb-10">
            {!results.length && !isLoading ? (
               <div className="h-full flex flex-col items-center justify-center text-center p-20 opacity-20 gap-8">
                  <Database className="w-24 h-24 text-slate-400" />
                  <div className="space-y-2">
                     <p className="text-xl font-black text-slate-400 uppercase tracking-[0.2em]">Matrix Initialized</p>
                     <p className="text-xs font-medium text-slate-500">Your search results will populate here in real-time.</p>
                  </div>
               </div>
            ) : isLoading ? (
               <div className="space-y-6">
                  {[1,2,3].map(i => (
                     <div key={i} className="glass-card p-8 space-y-4 animate-pulse">
                        <div className="h-6 bg-slate-100 rounded-lg w-3/4"></div>
                        <div className="h-4 bg-slate-50 rounded-lg w-1/2"></div>
                        <div className="h-20 bg-slate-50 rounded-xl w-full"></div>
                     </div>
                  ))}
               </div>
            ) : (
               <div className="space-y-6">
                  <div className="flex items-center justify-between px-2">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Found {results.length} relevant publications</p>
                     <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Sort by: Relevance</button>
                  </div>
                  {results.map((paper, idx) => (
                     <div key={idx} className="glass-card p-8 bg-white border-slate-100 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group relative overflow-hidden animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <div className="absolute top-0 right-0 p-8 flex flex-col gap-2">
                           <div className="px-3 py-1 rounded bg-blue-50 text-blue-600 text-[8px] font-black uppercase border border-blue-100">{paper.year}</div>
                           <div className="px-3 py-1 rounded bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase border border-emerald-100">Verified Citation</div>
                        </div>
                        <div className="space-y-4 pr-32">
                           <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{paper.title}</h3>
                           <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                              <span className="text-slate-900">{paper.authors}</span>
                              <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                              <span>{paper.journal}</span>
                           </div>
                           <p className="text-sm text-slate-500 leading-relaxed font-serif italic">"{paper.snippet}"</p>
                           <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                              <div className="flex items-center gap-6">
                                 <button className="text-[10px] font-black text-slate-400 hover:text-blue-600 flex items-center gap-2 uppercase tracking-widest transition-colors">
                                    <Star className="w-3.5 h-3.5" /> Save to Library
                                 </button>
                                 <button className="text-[10px] font-black text-slate-400 hover:text-blue-600 flex items-center gap-2 uppercase tracking-widest transition-colors">
                                    <ShieldCheck className="w-3.5 h-3.5" /> Verify Access
                                 </button>
                              </div>
                              <div className="flex gap-3">
                                 <button onClick={() => window.open(paper.url, '_blank')} className="btn-secondary py-2 px-6 text-[9px] font-black uppercase tracking-widest"><ExternalLink className="w-3 h-3" /> View Source</button>
                                 <button className="btn-primary py-2 px-8 bg-blue-600 border-none shadow-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                                    <Download className="w-3.5 h-3.5" /> Download Paper
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>

      </div>

    </div>
  );
}
