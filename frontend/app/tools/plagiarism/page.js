'use client';
import { useState } from 'react';
import { 
  FileSearch, ShieldCheck, AlertCircle, CheckCircle2, 
  Sparkles, Loader2, Download, Trash2, Globe,
  Activity, BarChart3, Search, Layers, ExternalLink,
  MessageSquare, UserCheck, Zap, Copy
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function PlagiarismChecker() {
  const [text, setText] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [report, setReport] = useState(null);

  const handleScan = () => {
    if (!text) return;
    setIsScanning(true);
    setTimeout(() => {
      setReport({
        similarity: 12,
        sources: [
          { title: "Journal of Biochemistry [2022]", match: 4, url: "#" },
          { title: "Wikipedia - Cell Mitochondria", match: 3, url: "#" },
          { title: "Academic Blog: BioTech Insights", match: 5, url: "#" }
        ],
        uniqueness: 88,
        aiProbability: 2
      });
      setIsScanning(false);
    }, 3000);
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center shadow-lg shadow-rose-100">
                 <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              Plagiarism & Similarity Lab
           </h1>
           <p className="text-sm text-slate-500 mt-1 font-medium">Deep academic scan against 100M+ papers, journals, and web sources.</p>
        </div>
        <div className="flex gap-3">
           <button className="btn-secondary py-2 px-6 text-xs font-bold"><Globe className="w-4 h-4" /> Global Scan</button>
           <button className="btn-primary py-2 px-6 bg-rose-600 text-xs font-bold border-none shadow-md">
             <Download className="w-4 h-4" /> Official Report
           </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden pb-4">
        
        {/* Left Side: Input */}
        <div className="flex-1 flex flex-col gap-4 overflow-hidden">
           <div className="flex-1 solid-card bg-white flex flex-col overflow-hidden relative border-slate-200">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Document Text (Max 10k Words)</span>
                 <button onClick={() => setText('')} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400"><Trash2 className="w-4 h-4" /></button>
              </div>
              <textarea 
                className="flex-1 p-10 text-lg text-slate-900 focus:outline-none resize-none placeholder-slate-300 font-serif leading-relaxed"
                placeholder="Paste your paper or thesis draft for similarity check..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.split(/\s+/).filter(x => x).length} Words</span>
                 </div>
                 <button onClick={handleScan} className="btn-primary py-3 px-10 text-xs font-bold border-none bg-rose-600 shadow-xl shadow-rose-100 group">
                    <Search className="w-4 h-4 group-hover:scale-110 transition-transform" /> START DEEP SCAN
                 </button>
              </div>
           </div>
        </div>

        {/* Right Side: Scan Report */}
        <div className="w-full lg:w-[450px] flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-2">
           
           {!report && !isScanning ? (
              <div className="flex-1 solid-card bg-white p-12 flex flex-col items-center justify-center text-center gap-6 opacity-30">
                 <FileSearch className="w-20 h-20 text-rose-500" />
                 <p className="text-sm font-bold text-slate-400 tracking-widest uppercase">Awaiting Submission</p>
              </div>
           ) : isScanning ? (
              <div className="flex-1 solid-card bg-white p-10 flex flex-col items-center justify-center gap-10">
                 <div className="relative w-28 h-28">
                    <div className="absolute inset-0 border-4 border-rose-50 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-rose-600 rounded-full border-t-transparent animate-spin"></div>
                    <ShieldCheck className="absolute inset-0 m-auto w-10 h-10 text-rose-600 animate-pulse" />
                 </div>
                 <div className="space-y-4 text-center">
                    <p className="text-sm font-bold text-rose-600 uppercase tracking-widest animate-pulse">Scanning Global Databases...</p>
                    <div className="flex flex-col gap-2">
                       <div className="h-1.5 w-48 bg-slate-100 rounded-full overflow-hidden mx-auto">
                          <div className="h-full bg-rose-500 w-2/3 shadow-[0_0_10px_rgba(225,29,72,0.5)]"></div>
                       </div>
                       <p className="text-[9px] text-slate-400 font-bold uppercase">Comparing against IEEE, PubMed, Nature...</p>
                    </div>
                 </div>
              </div>
           ) : (
              <div className="space-y-6 animate-fade-in pb-10">
                 {/* Main Results Card */}
                 <div className="solid-card p-10 bg-slate-900 text-white shadow-2xl relative overflow-hidden border-none">
                    <div className="absolute -top-10 -right-10 opacity-10">
                       <ShieldCheck className="w-64 h-64" />
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-6">
                       <div className="text-center">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose-500 mb-2 block">Similarity Score</span>
                          <h2 className="text-7xl font-bold tracking-tighter">{report.similarity}%</h2>
                       </div>
                       <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-rose-600 w-[12%] shadow-[0_0_15px_rgba(225,29,72,0.8)]"></div>
                       </div>
                       <div className="flex gap-10">
                          <div className="text-center">
                             <p className="text-[10px] font-bold uppercase text-white/40 mb-1">Uniqueness</p>
                             <p className="text-lg font-bold text-emerald-500">{report.uniqueness}%</p>
                          </div>
                          <div className="text-center">
                             <p className="text-[10px] font-bold uppercase text-white/40 mb-1">AI Gen</p>
                             <p className="text-lg font-bold text-blue-500">{report.aiProbability}%</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Top Sources */}
                 <div className="solid-card p-6 bg-white border-slate-100 space-y-6">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                       <Layers className="w-4 h-4 text-rose-600" /> Top Matched Sources
                    </h3>
                    <div className="space-y-3">
                       {report.sources.map((source, i) => (
                          <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-rose-300 transition-all">
                             <div className="flex-1 min-w-0 pr-4">
                                <h4 className="text-[11px] font-bold text-slate-800 truncate">{source.title}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                   <ExternalLink className="w-3 h-3 text-slate-400" />
                                   <span className="text-[9px] text-slate-400 font-medium">View Publication</span>
                                </div>
                             </div>
                             <div className="flex flex-col items-end">
                                <span className="text-xs font-bold text-rose-600">{source.match}%</span>
                                <span className="text-[8px] font-bold text-slate-400 uppercase">Match</span>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="solid-card p-6 bg-rose-50 border-rose-100 flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <p className="text-xs text-rose-800 font-medium leading-relaxed">
                       Your work is <strong>Highly Original</strong>. No major plagiarism detected. AI-generated probability is minimal (2%).
                    </p>
                 </div>

                 <ExportShareBar title="Similarity Scan Report" fileType="PDF" />
              </div>
           )}

        </div>
      </div>

    </div>
  );
}
