'use client';
import { useState } from 'react';
import { 
  Image as ImageIcon, Search, Microscope, Sparkles, 
  Download, Plus, Share2, Info, ArrowRight,
  Loader2, Globe, Database, Filter
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function BioImageLab() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState(null);

  const handleSearch = () => {
    if (!query) return;
    setIsSearching(true);
    setTimeout(() => {
      setResults({
        name: query,
        scientificName: `${query.split(' ')[0]} academicus`,
        images: [
           "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=2070&auto=format&fit=crop",
           "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e17?q=80&w=2070&auto=format&fit=crop",
           "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2070&auto=format&fit=crop"
        ],
        details: {
           family: "Bio-Academicus",
           order: "Scholaris",
           habitat: "Laboratory Environment"
        }
      });
      setIsSearching(false);
    }, 2000);
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-100">
                 <ImageIcon className="w-5 h-5 text-white" />
              </div>
              Bio-Image Intelligence Lab
           </h1>
           <p className="text-sm text-slate-500 mt-1 font-medium">Automatic scientific image fetching and biological classification engine.</p>
        </div>
        <div className="flex gap-3">
           <button className="btn-secondary py-2 px-6 text-xs font-bold"><Database className="w-4 h-4" /> Species DB</button>
           <button className="btn-primary py-2 px-6 bg-emerald-600 text-xs font-bold border-none shadow-md shadow-emerald-100">
             <Download className="w-4 h-4" /> Download Collection
           </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden pb-4">
        
        {/* Left Side: Search & Filter */}
        <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0 overflow-y-auto custom-scrollbar pr-2">
           <div className="solid-card p-6 bg-white space-y-6">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                 <Microscope className="w-4 h-4 text-emerald-600" /> Scientific Inquiry
              </h3>
              <div className="space-y-4">
                 <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. Arabidopsis thaliana"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 transition-all font-medium"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                 </div>
                 <button 
                   onClick={handleSearch}
                   disabled={isSearching}
                   className="w-full btn-primary bg-emerald-600 py-4 shadow-xl shadow-emerald-100 border-none flex items-center justify-center gap-3 group"
                 >
                    {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform" />}
                    FETCH SCIENTIFIC DATA
                 </button>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-4">
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Search Scope</h4>
                 <div className="space-y-2">
                    {['Google Scientific', 'OpenAlex Images', 'WikiSpecies', 'Unsplash Bio'].map(src => (
                       <div key={src} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-600">
                          <input type="checkbox" defaultChecked className="accent-emerald-600" />
                          <span>{src}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Right Side: Results Gallery */}
        <div className="flex-1 flex flex-col gap-6 min-h-0 overflow-hidden">
           <div className="flex-1 solid-card bg-white flex flex-col overflow-hidden border-slate-200">
              {!results ? (
                 <div className="h-full flex flex-col items-center justify-center text-center p-10 opacity-30 gap-6">
                    {isSearching ? (
                       <div className="flex flex-col items-center gap-6">
                          <div className="relative w-24 h-24">
                             <div className="absolute inset-0 border-4 border-emerald-50 rounded-full"></div>
                             <div className="absolute inset-0 border-4 border-emerald-600 rounded-full border-t-transparent animate-spin"></div>
                             <Globe className="absolute inset-0 m-auto w-10 h-10 text-emerald-600 animate-pulse" />
                          </div>
                          <p className="text-xl font-bold text-slate-900 tracking-widest uppercase">Fetching Biological Data...</p>
                       </div>
                    ) : (
                       <>
                          <ImageIcon className="w-24 h-24 text-slate-200" />
                          <p className="text-2xl font-bold text-slate-300 tracking-widest uppercase">Search Scientific Species</p>
                       </>
                    )}
                 </div>
              ) : (
                 <div className="flex-1 p-10 overflow-y-auto custom-scrollbar animate-fade-in space-y-10">
                    
                    {/* Species Metadata Header */}
                    <div className="flex items-center justify-between p-8 rounded-3xl bg-emerald-50 border border-emerald-100 relative overflow-hidden">
                       <div className="relative z-10 space-y-2">
                          <h2 className="text-4xl font-bold text-emerald-900 tracking-tight">{results.name}</h2>
                          <p className="text-lg font-serif italic text-emerald-700">{results.scientificName}</p>
                       </div>
                       <div className="relative z-10 flex gap-10">
                          <div className="text-center">
                             <p className="text-[10px] font-bold uppercase text-emerald-600 mb-1">Family</p>
                             <p className="text-sm font-bold text-slate-900">{results.details.family}</p>
                          </div>
                          <div className="text-center">
                             <p className="text-[10px] font-bold uppercase text-emerald-600 mb-1">Order</p>
                             <p className="text-sm font-bold text-slate-900">{results.details.order}</p>
                          </div>
                       </div>
                    </div>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       {results.images.map((img, i) => (
                          <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                             <img src={img} alt="Scientific Result" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 justify-between">
                                <button className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all"><Download className="w-4 h-4" /></button>
                                <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Plus className="w-3 h-3" /> Add to Workspace</button>
                             </div>
                          </div>
                       ))}
                    </div>

                    {/* Additional Bio Info */}
                    <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 border-none">
                       <h3 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-emerald-500">
                          <Info className="w-4 h-4" /> Academic Description
                       </h3>
                       <p className="text-slate-400 text-sm leading-relaxed font-serif italic">
                          "The {results.name} is a highly significant model organism in {results.details.order} research. Its genome has been widely studied for advancements in molecular biology and biochemistry. This species typically thrives in {results.details.habitat}."
                       </p>
                    </div>

                 </div>
              )}
           </div>

           {results && (
              <div className="solid-card p-6 bg-white shrink-0">
                 <ExportShareBar title="Bio-Image Collection" fileType="PDF" />
              </div>
           )}
        </div>

      </div>

    </div>
  );
}
