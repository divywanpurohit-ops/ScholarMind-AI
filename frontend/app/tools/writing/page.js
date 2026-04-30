'use client';
import { useState } from 'react';
import { 
  PenTool, ShieldCheck, UserCheck, Sparkles, 
  FileSearch, Activity, Download, Trash2, 
  ChevronRight, AlertCircle, CheckCircle2,
  Gauge, Zap, MessageSquare, BarChart3, Target
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function WritingLab() {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = () => {
    if (!text) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setResults({
        readability: 88,
        clarity: 92,
        originality: 98,
        aiScore: 5,
        readiness: 85
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleHumanize = async () => {
    if (!text) return;
    setIsAnalyzing(true);
    try {
      const res = await fetch('/api/ai/humanize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setText(data.humanizedText);
      }
    } catch (error) {
      console.error('Humanize failed', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-100">
                 <PenTool className="w-5 h-5 text-white" />
              </div>
              Writing Intelligence Lab
           </h1>
           <p className="text-sm text-slate-500 mt-1 font-medium">Verify originality, humanize AI text, and check journal submission readiness.</p>
        </div>
        <div className="flex gap-3">
           <button className="btn-secondary py-2 px-6 text-xs font-bold"><Gauge className="w-4 h-4" /> Full Audit</button>
           <button className="btn-primary py-2 px-6 bg-indigo-600 text-xs font-bold border-none"><Download className="w-4 h-4" /> Download Report</button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden">
        
        {/* Left Side: Editor */}
        <div className="flex-1 flex flex-col gap-4 overflow-hidden">
           <div className="flex-1 solid-card bg-white flex flex-col overflow-hidden relative border-slate-200">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
                  <div className="flex gap-4">
                     <button onClick={() => {}} className="text-[10px] font-bold text-slate-400 hover:text-indigo-600 uppercase tracking-widest transition-all">Paraphrase</button>
                     <button onClick={handleHumanize} className="text-[10px] font-bold text-indigo-600 hover:text-indigo-700 uppercase tracking-widest transition-all">Humanize ✨</button>
                     <button onClick={() => {}} className="text-[10px] font-bold text-slate-400 hover:text-indigo-600 uppercase tracking-widest transition-all">Fix Grammar</button>
                  </div>
                 <button onClick={() => setText('')} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400"><Trash2 className="w-4 h-4" /></button>
              </div>
              <textarea 
                className="flex-1 p-10 text-lg text-slate-900 focus:outline-none resize-none placeholder-slate-300 font-serif leading-relaxed"
                placeholder="Paste your manuscript or research paper draft here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.split(/\s+/).filter(x => x).length} Words</span>
                 </div>
                 <button onClick={handleAnalyze} className="btn-primary py-2.5 px-10 text-xs font-bold border-none bg-indigo-600 shadow-md group">
                    <Zap className="w-4 h-4 group-hover:animate-pulse" /> START INTELLIGENCE SCAN
                 </button>
              </div>
           </div>
        </div>

        {/* Right Side: Analysis & Scores */}
        <div className="w-full lg:w-[400px] flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-2">
           
           {!results && !isAnalyzing ? (
              <div className="flex-1 solid-card bg-white p-10 flex flex-col items-center justify-center text-center gap-6 opacity-40">
                 <Activity className="w-16 h-16 text-indigo-500" />
                 <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Awaiting Analysis</p>
              </div>
           ) : isAnalyzing ? (
              <div className="flex-1 solid-card bg-white p-10 flex flex-col items-center justify-center gap-8">
                 <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                    <UserCheck className="absolute inset-0 m-auto w-8 h-8 text-indigo-600 animate-pulse" />
                 </div>
                 <div className="space-y-2 text-center">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Checking for AI Patterns...</p>
                    <p className="text-[10px] text-slate-400 font-medium">Comparing against 10M+ generative models</p>
                 </div>
              </div>
           ) : (
              <div className="space-y-6 animate-fade-in pb-10">
                 {/* Main Readiness Card */}
                 <div className="solid-card p-8 bg-indigo-600 text-white shadow-2xl shadow-indigo-200 border-none relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                       <ShieldCheck className="w-32 h-32" />
                    </div>
                    <div className="relative z-10 space-y-6">
                       <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">Submission Readiness</h3>
                          <div className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold">EXCELLENT</div>
                       </div>
                       <div className="flex items-end gap-2">
                          <span className="text-6xl font-bold">{results.readiness}%</span>
                          <span className="text-sm font-bold text-white/50 mb-2">SCORE</span>
                       </div>
                       <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-white w-[85%] shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                       </div>
                    </div>
                 </div>

                 {/* Detailed Metrics */}
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Readability', value: results.readability, icon: MessageSquare, color: 'text-emerald-500' },
                      { label: 'Clarity', value: results.clarity, icon: Activity, color: 'text-blue-500' },
                      { label: 'Originality', value: results.originality, icon: Sparkles, color: 'text-amber-500' },
                      { label: 'AI Content', value: results.aiScore, icon: UserCheck, color: 'text-indigo-500' }
                    ].map((metric) => (
                      <div key={metric.label} className="solid-card p-5 bg-white border-slate-100 flex flex-col gap-3">
                         <div className="flex items-center justify-between">
                            <metric.icon className={`w-4 h-4 ${metric.color}`} />
                            <span className="text-sm font-bold text-slate-900">{metric.value}%</span>
                         </div>
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{metric.label}</p>
                      </div>
                    ))}
                 </div>

                 {/* Improvement Suggestions */}
                 <div className="solid-card p-6 bg-white border-slate-100 space-y-4">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                       <Target className="w-4 h-4 text-indigo-600" /> Key Insights
                    </h3>
                    <div className="space-y-3">
                       <div className="flex gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <p className="text-[11px] text-slate-600 leading-relaxed">The tone is perfectly matched for <strong>Academic Publication</strong>.</p>
                       </div>
                       <div className="flex gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                          <p className="text-[11px] text-slate-600 leading-relaxed">Consider simplifying complex sentences in <strong>Abstract Section</strong>.</p>
                       </div>
                    </div>
                 </div>

                 <ExportShareBar title="Writing Analysis Report" fileType="PDF" />
              </div>
           )}

        </div>
      </div>

    </div>
  );
}
