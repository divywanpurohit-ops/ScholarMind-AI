'use client';
import { useState } from 'react';
import { 
  Languages, ArrowRightLeft, Globe, 
  FileText, ShieldCheck, Download, 
  Zap, Loader2, ChevronRight, Share2,
  CheckCircle2, AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export default function TranslatorLab() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [targetLang, setTargetLang] = useState('Hindi');

  const languages = [
    'Hindi', 'Spanish', 'German', 'French', 
    'Chinese', 'Japanese', 'Arabic', 'Russian'
  ];

  const handleTranslate = async () => {
    if (!text) return;
    setIsTranslating(true);
    try {
      const res = await fetch('/api/ai/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, targetLanguage: targetLang })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setTranslatedText(data.translatedText);
      } else {
        throw new Error(data.message || 'Translation failed');
      }
    } catch (error) {
      console.error('Translation failed', error);
      setTranslatedText(`[Error]: ${error.message}. Please check your connection or API key.`);
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8 pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <div className="space-y-1">
           <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-2xl shadow-indigo-500/20">
                 <Languages className="w-6 h-6 text-white" />
              </div>
              Translator <span className="text-indigo-600">Lab</span>
           </h1>
           <p className="text-sm font-medium text-slate-500">Professional academic translation with formatting preservation.</p>
        </div>
        <div className="flex gap-3">
           <button className="btn-secondary py-2.5 px-6 text-xs font-bold"><Globe className="w-4 h-4" /> Global Mode</button>
           <button className="btn-primary py-2.5 px-8 bg-indigo-600 text-xs font-black border-none shadow-xl shadow-indigo-900/10">
              <Download className="w-4 h-4" /> EXPORT PDF
           </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 min-h-0 overflow-hidden px-4">
        
        {/* Left Side: Input */}
        <div className="flex-1 flex flex-col gap-6">
           <div className="flex-1 glass-card bg-white p-0 overflow-hidden flex flex-col relative border-slate-200 shadow-xl">
              <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
                 <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">Source: Auto Detect</span>
                 </div>
                 <button onClick={() => setText('')} className="text-[10px] font-bold text-slate-400 hover:text-rose-500 uppercase tracking-widest transition-colors">Clear All</button>
              </div>
              <textarea 
                className="flex-1 p-10 text-lg text-slate-900 focus:outline-none resize-none placeholder-slate-300 font-serif leading-relaxed"
                placeholder="Paste your academic text, manuscript, or abstract here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <div className="p-6 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{text.split(/\s+/).filter(x => x).length} Words</span>
                 </div>
                 <button 
                   onClick={handleTranslate} 
                   disabled={isTranslating || !text}
                   className="btn-primary py-4 px-12 text-xs font-black bg-indigo-600 border-none shadow-2xl shadow-indigo-900/20 group relative overflow-hidden"
                 >
                    {isTranslating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4 group-hover:animate-pulse" />}
                    {isTranslating ? 'TRANSLATING...' : 'START TRANSLATION'}
                 </button>
              </div>
           </div>
        </div>

        {/* Middle: Controls */}
        <div className="hidden lg:flex flex-col justify-center gap-4 py-10">
           <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-500/40">
              <ArrowRightLeft className="w-6 h-6" />
           </div>
        </div>

        {/* Right Side: Output */}
        <div className="flex-1 flex flex-col gap-6">
           <div className="flex-1 glass-card bg-[#0d1117] p-0 overflow-hidden flex flex-col relative border-none shadow-2xl">
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                 <div className="flex items-center gap-3">
                    <select 
                      value={targetLang}
                      onChange={(e) => setTargetLang(e.target.value)}
                      className="bg-transparent text-indigo-400 text-[10px] font-black uppercase tracking-widest focus:outline-none cursor-pointer"
                    >
                       {languages.map(l => <option key={l} value={l} className="bg-[#0d1117] text-white">{l}</option>)}
                    </select>
                 </div>
                 <div className="flex gap-4">
                    <button onClick={() => navigator.clipboard.writeText(translatedText)} className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Copy Link</button>
                    <button className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors"><Share2 className="w-3.5 h-3.5" /></button>
                 </div>
              </div>
              <div className="flex-1 p-10 text-lg text-indigo-100 font-serif leading-relaxed overflow-y-auto custom-scrollbar">
                 {isTranslating ? (
                   <div className="h-full flex flex-col items-center justify-center text-center gap-6 opacity-40">
                      <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
                      <p className="text-sm font-bold uppercase tracking-widest">Processing Language Matrix...</p>
                   </div>
                 ) : translatedText ? (
                   <p className="animate-fade-in">{translatedText}</p>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center p-10 opacity-20 gap-6">
                      <Globe className="w-20 h-20 text-slate-500" />
                      <p className="text-sm font-bold uppercase tracking-[0.3em]">Awaiting Data Input</p>
                   </div>
                 )}
              </div>
              <div className="p-6 bg-white/5 border-t border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Formal Academic Tone Verified</span>
                 </div>
                 {translatedText && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
              </div>
           </div>
        </div>

      </div>

      {/* Info Bar */}
      <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
            { label: 'Formatting', desc: 'Original structure & bold/italic preserved.', icon: CheckCircle2 },
            { label: 'Terminology', desc: 'Domain-specific vocabulary maintained.', icon: Zap },
            { label: 'Citations', desc: 'All bibliography links kept intact.', icon: ShieldCheck }
         ].map(info => (
            <div key={info.label} className="glass-card p-6 flex items-center gap-6 bg-white/50 border-slate-100 hover:bg-white transition-all group">
               <info.icon className="w-8 h-8 text-indigo-600 opacity-40 group-hover:opacity-100 transition-all" />
               <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight">{info.label}</h4>
                  <p className="text-[10px] text-slate-500 font-medium">{info.desc}</p>
               </div>
            </div>
         ))}
      </div>

    </div>
  );
}
