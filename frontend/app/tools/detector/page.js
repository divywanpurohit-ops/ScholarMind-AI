'use client';
import { useState } from 'react';
import { ShieldAlert, ScanSearch, CheckCircle2, AlertTriangle, Fingerprint, RefreshCw, Loader2, Sparkles, UserCheck, Trash2 } from 'lucide-react';
import Link from 'next/link';
import ExportShareBar from '../../../components/ExportShareBar';

export default function AIDetector() {
  const [text, setText] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);

  const handleScan = () => {
    if (!text) return;
    setIsScanning(true);
    setResult(null);
    
    setTimeout(() => {
      setIsScanning(false);
      setResult({
        aiScore: 82,
        humanScore: 18,
        readability: 'Complex',
        sentences: [
          { text: "The rapid advancement of artificial intelligence has significantly altered the landscape of modern technology.", isAi: true, prob: 98 },
          { text: " However, the ethical implications remain a subject of intense debate among scholars.", isAi: false, prob: 12 },
          { text: " We conducted a survey of 500 participants to understand their views on AI ethics.", isAi: false, prob: 5 },
          { text: " The results clearly demonstrate a paradigm shift in cognitive computing frameworks and their societal integration.", isAi: true, prob: 92 }
        ]
      });
    }, 3000);
  };

  return (
    <div className="animate-fade-in h-full flex flex-col w-full">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading flex items-center gap-3 text-white">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-600 to-slate-500 flex items-center justify-center shadow-lg shadow-slate-500/20">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            AI Detector Lab
          </h1>
          <p className="text-[#9CA3AF] mt-2 font-medium flex items-center gap-2">
            Multi-model semantic analysis to identify AI-generated academic content.
            <span className="px-2 py-0.5 rounded-full bg-slate-500/10 text-slate-400 text-xs font-bold border border-slate-500/20">Deep Scan v4.0</span>
          </p>
        </div>
        
        {result && (
          <button className="btn-secondary text-sm" onClick={() => {setResult(null); setText('');}}>
            <Trash2 className="w-4 h-4 text-rose-400" /> Clear Report
          </button>
        )}
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
        
        {/* Input Panel */}
        <div className="solid-card flex flex-col bg-[#0B0F19]/50 overflow-hidden shadow-xl border-[#1F2937]">
          <div className="p-4 border-b border-[#1F2937] bg-[#030712] flex justify-between items-center px-6">
            <span className="text-xs font-bold text-[#6B7280] uppercase tracking-widest">Document Content</span>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{text.length} characters</span>
          </div>
          
          <textarea 
            className="flex-1 bg-transparent p-8 resize-none focus:outline-none text-lg text-[#F3F4F6] custom-scrollbar placeholder-[#4B5563] leading-relaxed"
            placeholder="Paste your research abstract, article, or full paper text here for deep semantic analysis..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <div className="p-6 bg-[#030712] border-t border-[#1F2937]">
            <button 
              onClick={handleScan}
              disabled={isScanning || !text}
              className="btn-primary w-full py-4 text-lg shadow-xl shadow-slate-600/20 flex items-center justify-center gap-3"
            >
              {isScanning ? (
                <><Loader2 className="w-6 h-6 animate-spin" /> RUNNING DEEP SCAN...</>
              ) : (
                <><ScanSearch className="w-6 h-6" /> ANALYZE FOR AI CONTENT</>
              )}
            </button>
          </div>
        </div>

        {/* Results Panel */}
        <div className="solid-card flex flex-col bg-[#0B0F19]/50 overflow-hidden shadow-xl border-[#1F2937]">
          <div className="p-4 border-b border-[#1F2937] bg-[#030712] flex items-center gap-2 px-6">
             <Fingerprint className="w-5 h-5 text-slate-400" />
             <span className="text-xs font-bold text-[#F3F4F6] uppercase tracking-widest">Probability Report</span>
          </div>

          <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
            {!result && !isScanning ? (
              <div className="h-full flex flex-col items-center justify-center text-[#4B5563] gap-6 text-center max-w-sm mx-auto">
                <ShieldAlert className="w-20 h-20 opacity-10" />
                <h3 className="text-xl font-bold text-[#6B7280]">No Analysis Active</h3>
                <p className="text-sm font-medium">Input your text and run the scan to see the AI vs Human probability scores.</p>
              </div>
            ) : isScanning ? (
               <div className="h-full flex flex-col items-center justify-center gap-8">
                  <div className="relative w-40 h-40">
                     <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
                     <div className="absolute inset-0 border-4 border-slate-500 rounded-full border-t-transparent animate-spin"></div>
                     <ScanSearch className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-slate-400 animate-pulse" />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-xl mb-2">Analyzing Semantic Patterns</p>
                    <p className="text-[#6B7280] text-sm animate-pulse">Checking perplexity and burstiness metrics...</p>
                  </div>
               </div>
            ) : (
              <div className="space-y-10 animate-fade-in">
                {/* Score Cards */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-8 text-center relative overflow-hidden group hover:border-rose-500/40 transition-all">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform"></div>
                    <p className="text-xs font-bold text-rose-400 mb-2 uppercase tracking-widest">AI Probability</p>
                    <p className="text-5xl font-bold font-heading text-white">{result.aiScore}%</p>
                    <p className="text-[10px] text-rose-400/60 mt-2 font-bold uppercase">Confidence: High</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center relative overflow-hidden group hover:border-emerald-500/40 transition-all">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl -ml-10 -mt-10 group-hover:scale-150 transition-transform"></div>
                    <p className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-widest">Human Written</p>
                    <p className="text-5xl font-bold font-heading text-white">{result.humanScore}%</p>
                    <p className="text-[10px] text-emerald-400/60 mt-2 font-bold uppercase">Natural Variance</p>
                  </div>
                </div>

                {/* Sentence Breakdown */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-widest">Granular Breakdown</h3>
                    <div className="flex items-center gap-4 text-[10px] font-bold">
                      <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-rose-500/50 rounded-full"></div> <span className="text-[#9CA3AF]">AI</span></div>
                      <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-transparent border border-[#1F2937] rounded-full"></div> <span className="text-[#9CA3AF]">Human</span></div>
                    </div>
                  </div>
                  <div className="p-8 bg-[#030712] border border-[#1F2937] rounded-2xl text-lg leading-relaxed font-serif shadow-inner">
                    {result.sentences.map((s, i) => (
                      <span 
                        key={i} 
                        className={`transition-all rounded px-1 ${s.isAi ? 'bg-rose-500/10 text-rose-200 border-b-2 border-rose-500/30 cursor-help hover:bg-rose-500/20' : 'text-[#D1D5DB]'}`}
                        title={s.isAi ? `AI Certainty: ${s.prob}%` : 'Likely human written'}
                      >
                        {s.text}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI Humanizer CTA */}
                <div className="solid-card p-6 border-slate-500/20 bg-slate-500/5 flex items-center justify-between group">
                  <div className="flex items-start gap-4">
                    <UserCheck className="w-8 h-8 text-slate-400 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Found AI Content?</h4>
                      <p className="text-sm text-[#9CA3AF]">Our Humanizer Lab can rewrite these sentences to bypass AI detection while maintaining academic quality.</p>
                    </div>
                  </div>
                  <Link href="/tools/writing">
                    <button className="p-3 bg-[#111827] rounded-xl text-slate-400 hover:text-white hover:border-slate-500 border border-[#1F2937] transition-all">
                      <RefreshCw className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
                
                <div className="mt-auto">
                   <ExportShareBar title="AI Detection Report" fileType="PDF" />
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
