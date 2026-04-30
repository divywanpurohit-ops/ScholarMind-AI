'use client';
import { useState } from 'react';
import { 
  ShieldCheck, Search, Activity, Sparkles, 
  AlertTriangle, CheckCircle2, ChevronRight, 
  Network, Loader2, Target, Zap, 
  BarChart3, MessageSquare, Globe, Microscope,
  Database, FileSearch, Quote, Download,
  Terminal, Beaker
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function ResearchIntelLab() {
  const [topic, setTopic] = useState('');
  const [isAuditing, setIsAuditing] = useState(false);
  const [report, setReport] = useState(null);

  const handleAudit = async () => {
    if (!topic) return;
    setIsAuditing(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/ai/audit-research`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ topic })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setReport(data.report);
      }
    } catch (error) {
      console.error('Audit failed', error);
    } finally {
      setIsAuditing(false);
    }
  };

  const auditPockets = [
    { id: 'gaps', label: 'Research Gap Finder', icon: Target },
    { id: 'contradictions', label: 'Contradiction Detector', icon: AlertTriangle },
    { id: 'novelty', label: 'Novelty Score', icon: Sparkles },
    { id: 'hypothesis', label: 'Hypothesis Builder', icon: Beaker },
  ];

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-100">
                 <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              Research Intelligence Lab
           </h1>
           <p className="text-sm text-slate-500 mt-1 font-medium">Deep academic audit for gaps, contradictions, and novelty detection.</p>
        </div>
        <div className="flex gap-3">
           <button className="btn-secondary py-2 px-6 text-xs font-bold"><Database className="w-4 h-4" /> PubMed Connect</button>
           <button className="btn-primary py-2 px-6 bg-blue-600 text-xs font-bold border-none shadow-md shadow-blue-100">
             <Download className="w-4 h-4" /> Export Audit Report
           </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden pb-4">
        
        {/* Left Side: Parameters */}
        <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0 overflow-y-auto custom-scrollbar pr-2">
           
           <div className="solid-card p-6 bg-white space-y-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                 <Microscope className="w-4 h-4 text-blue-600" /> Research Context
              </h3>
              <textarea 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-all min-h-[150px]"
                placeholder="Describe your core hypothesis, methodology, or paste your abstract for auditing..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              ></textarea>
              
              <div className="space-y-4 pt-4 border-t border-slate-100">
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Target Databases</h4>
                 <div className="space-y-2">
                    {['Nature / Science', 'PubMed Central', 'IEEE Xplore', 'Google Scholar'].map(db => (
                       <div key={db} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-600">
                          <input type="checkbox" defaultChecked className="accent-blue-600" />
                          <span>{db}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <button 
                onClick={handleAudit}
                disabled={isAuditing}
                className="w-full btn-primary bg-blue-600 py-4 shadow-xl shadow-blue-100 border-none flex items-center justify-center gap-3 group"
              >
                 {isAuditing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform" />}
                 START GLOBAL AUDIT
              </button>
           </div>
        </div>

        {/* Right Side: Audit Results */}
        <div className="flex-1 flex flex-col gap-6 min-h-0 overflow-hidden">
           
           <div className="flex-1 solid-card bg-white flex flex-col overflow-hidden border-slate-200">
              {!report ? (
                 <div className="h-full flex flex-col items-center justify-center text-center p-10 opacity-30 gap-6">
                    {isAuditing ? (
                       <div className="flex flex-col items-center gap-6">
                          <div className="relative w-24 h-24">
                             <div className="absolute inset-0 border-4 border-blue-50 rounded-full"></div>
                             <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                             <Search className="absolute inset-0 m-auto w-10 h-10 text-blue-600 animate-pulse" />
                          </div>
                          <div className="space-y-2">
                             <p className="text-xl font-bold text-slate-900 tracking-widest uppercase">Cross-Referencing 40M+ Papers</p>
                             <div className="flex gap-2 justify-center">
                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-300"></div>
                             </div>
                          </div>
                       </div>
                    ) : (
                       <>
                          <ShieldCheck className="w-24 h-24 text-slate-200" />
                          <p className="text-2xl font-bold text-slate-300 tracking-widest uppercase">Awaiting Research Scan</p>
                       </>
                    )}
                 </div>
              ) : (
                 <div className="flex-1 p-10 overflow-y-auto custom-scrollbar animate-fade-in space-y-10">
                    
                    {/* Key Scores */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                       {[
                         { label: 'Novelty Score', value: `${report.noveltyScore}%`, color: 'bg-emerald-50 text-emerald-700', icon: Sparkles },
                         { label: 'Contradictions', value: report.contradictions, color: 'bg-rose-50 text-rose-700', icon: AlertTriangle },
                         { label: 'Research Gaps', value: report.gapsFound, color: 'bg-blue-50 text-blue-700', icon: Target },
                         { label: 'Citations Missing', value: report.citationsNeeded, color: 'bg-amber-50 text-amber-700', icon: Quote },
                       ].map((item) => (
                         <div key={item.label} className={`p-6 rounded-3xl ${item.color} border border-current/10 flex flex-col gap-2`}>
                            <item.icon className="w-5 h-5 opacity-60" />
                            <span className="text-3xl font-bold tracking-tight">{item.value}</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{item.label}</span>
                         </div>
                       ))}
                    </div>

                    {/* Detailed Findings */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                       
                       <div className="solid-card p-8 bg-slate-50 border-slate-200 space-y-6">
                          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-3">
                             <AlertTriangle className="w-4 h-4 text-rose-500" /> Empirical Contradictions
                          </h3>
                          <div className="space-y-4">
                             <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 relative group hover:border-rose-300 transition-all">
                                <span className="absolute top-4 right-4 px-2 py-1 bg-rose-50 text-rose-600 text-[8px] font-bold rounded uppercase">Critical</span>
                                <h4 className="text-xs font-bold text-slate-900">Inconsistent with Nature 2024 (Conflict ID: 42)</h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed italic">"Study suggests variable X correlates positively, whereas Nature Publication [2024] reports an inverse relationship in similar datasets."</p>
                             </div>
                          </div>
                       </div>

                       <div className="solid-card p-8 bg-slate-50 border-slate-200 space-y-6">
                          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-3">
                             <Target className="w-4 h-4 text-blue-500" /> Literature Gap Identification
                          </h3>
                          <div className="space-y-4">
                             <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 group hover:border-blue-300 transition-all">
                                <h4 className="text-xs font-bold text-slate-900">Unexplored Demographic: Southeast Asia</h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed">"Most existing papers focus on Western populations. Your methodology could pioneer research in the ASEAN context."</p>
                             </div>
                             <button className="w-full py-3 rounded-xl bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest hover:bg-blue-100 transition-all">
                                Suggest More Gaps
                             </button>
                          </div>
                       </div>

                    </div>

                    {/* Final Conclusion */}
                    <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12">
                          <ShieldCheck className="w-48 h-48" />
                       </div>
                       <div className="relative z-10 space-y-4">
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-white" />
                             </div>
                             <h3 className="text-lg font-bold tracking-tight">Audit Conclusion</h3>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed font-serif italic">
                             "The proposed research displays high novelty (92%) with a strong potential for Q1 journal publication. While two critical contradictions were detected, addressing them in the Methodology section will solidify the validity of the hypothesis."
                          </p>
                          <div className="pt-4 flex gap-4">
                             <button className="px-6 py-2 rounded-xl bg-blue-600 text-xs font-bold hover:bg-blue-500 transition-all">Integrate Fixes</button>
                             <button className="px-6 py-2 rounded-xl bg-white/10 text-xs font-bold hover:bg-white/20 transition-all">Generate Future Scope</button>
                          </div>
                       </div>
                    </div>

                 </div>
              )}
           </div>

           {report && (
              <div className="solid-card p-6 bg-white shrink-0">
                 <ExportShareBar title="Research Intelligence Audit" fileType="PDF" />
              </div>
           )}
        </div>

      </div>

    </div>
  );
}
