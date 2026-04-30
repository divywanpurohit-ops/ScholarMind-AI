'use client';
import { useState } from 'react';
import { 
  Search, Globe, FileText, Filter, Sparkles, 
  Download, Plus, ExternalLink, Bookmark,
  ChevronRight, ArrowRight, Loader2, Database,
  TrendingUp, Activity, MessageSquare, Quote
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function AcademicSearch() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState(null);

  const handleSearch = () => {
    if (!query) return;
    setIsSearching(true);
    setTimeout(() => {
      setResults([
        { 
          title: `Advanced Meta-Analysis of ${query}`, 
          author: "Dr. A. Scholar et al.", 
          journal: "Nature Communications", 
          year: 2024, 
          citations: 124,
          abstract: "This study explores the foundational and emerging concepts in the field, providing a comprehensive overview of recent advancements and future directions."
        },
        { 
          title: `Empirical Evidence in ${query} Research`, 
          author: "Prof. J. Doe", 
          journal: "Journal of Biochemistry", 
          year: 2023, 
          citations: 89,
          abstract: "A deep dive into the experimental methodologies and results that have shaped our understanding of this specific domain over the last decade."
        },
        { 
          title: `Emerging Trends in ${query}`, 
          author: "M. Smith", 
          journal: "IEEE Xplore", 
          year: 2024, 
          citations: 45,
          abstract: "Highlighting the latest technological and theoretical shifts, this paper identifies key gaps for future researchers to explore."
        }
      ]);
      setIsSearching(false);
    }, 2000);
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8">
      
      {/* Search Header Section */}
      <div className="flex flex-col gap-6">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-100">
                 <Globe className="w-5 h-5 text-white" />
              </div>
              Academic Discovery Hub
           </h1>
           <p className="text-sm text-slate-500 mt-1 font-medium">Meta-search across 100M+ papers from Nature, PubMed, IEEE, and more.</p>
        </div>

        {/* Global Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 items-center bg-white p-2 rounded-2xl border border-slate-200 shadow-xl shadow-blue-100/20">
           <div className="flex-1 flex items-center gap-3 px-4 w-full">
              <Search className="w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by topic, keyword, author or DOI..."
                className="w-full py-4 text-sm font-medium text-slate-900 focus:outline-none placeholder-slate-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
           </div>
           <div className="flex items-center gap-2 px-2 w-full lg:w-auto">
              <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest border border-slate-100 hover:bg-slate-100 transition-all">
                 <Filter className="w-3.5 h-3.5" /> All Sources
              </button>
              <button 
                onClick={handleSearch}
                disabled={isSearching}
                className="flex-1 lg:flex-none btn-primary bg-blue-600 px-10 py-4 shadow-xl shadow-blue-100 border-none flex items-center justify-center gap-3 group"
              >
                 {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform" />}
                 DISCOVER
              </button>
           </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-6 min-h-0 overflow-hidden pb-4">
        
        {!results && !isSearching ? (
           <div className="flex-1 flex flex-col items-center justify-center text-center p-20 opacity-20 gap-8">
              <div className="relative">
                 <Database className="w-32 h-32 text-blue-500" />
                 <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full scale-150 animate-ping"></div>
              </div>
              <div className="space-y-2">
                 <p className="text-2xl font-bold text-slate-900 tracking-[0.2em] uppercase">Unified Global Database Ready</p>
                 <p className="text-slate-500 text-sm font-medium max-w-md">Search across major academic ecosystems from a single interface.</p>
              </div>
           </div>
        ) : isSearching ? (
           <div className="flex-1 flex flex-col items-center justify-center gap-8">
              <div className="relative w-24 h-24">
                 <div className="absolute inset-0 border-4 border-blue-50 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                 <Globe className="absolute inset-0 m-auto w-10 h-10 text-blue-600 animate-pulse" />
              </div>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest animate-pulse">Syncing with 40M+ Publications...</p>
           </div>
        ) : (
           <div className="flex-1 grid grid-cols-1 gap-6 overflow-y-auto custom-scrollbar pr-2 animate-fade-in">
              {results.map((paper, i) => (
                 <div key={i} className="solid-card p-8 bg-white border-slate-200 flex flex-col lg:flex-row gap-8 group hover:border-blue-500 transition-all">
                    <div className="flex-1 space-y-4">
                       <div className="flex items-center gap-3">
                          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-widest border border-blue-100">{paper.journal}</span>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{paper.year}</span>
                       </div>
                       <h2 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors cursor-pointer">{paper.title}</h2>
                       <p className="text-sm font-bold text-slate-500">{paper.author}</p>
                       <p className="text-xs text-slate-400 leading-relaxed font-serif line-clamp-3 italic">"{paper.abstract}"</p>
                       
                       <div className="flex items-center gap-6 pt-4 border-t border-slate-50">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                             <TrendingUp className="w-3.5 h-3.5 text-emerald-500" /> {paper.citations} Citations
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                             <Quote className="w-3.5 h-3.5 text-blue-500" /> High Impact
                          </div>
                       </div>
                    </div>
                    
                    <div className="w-full lg:w-48 shrink-0 flex flex-col gap-3 justify-center">
                       <button className="w-full btn-primary bg-blue-600 py-3 text-[10px] font-bold border-none shadow-md shadow-blue-100 flex items-center justify-center gap-2">
                          <Plus className="w-4 h-4" /> Add to Workspace
                       </button>
                       <button className="w-full btn-secondary py-3 text-[10px] font-bold flex items-center justify-center gap-2 border-slate-200 hover:bg-slate-50">
                          <ExternalLink className="w-4 h-4" /> View Full Text
                       </button>
                    </div>
                 </div>
              ))}
              
              <div className="solid-card p-6 bg-slate-50 border-dashed border-2 border-slate-200 text-center">
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing Top 3 Results • <span className="text-blue-600 cursor-pointer hover:underline">Load More Findings</span></p>
              </div>
           </div>
        )}

      </div>

    </div>
  );
}
