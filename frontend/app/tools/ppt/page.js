'use client';
import { useState } from 'react';
import { 
  Presentation, LayoutTemplate, Palette, Type, 
  Download, Loader2, Sparkles, ChevronRight, 
  Settings2, Sliders, Layers, Monitor, Play,
  ChevronLeft, X, ArrowRight, Plus, Trash2,
  CheckCircle, Share2, MessageCircle
} from 'lucide-react';
import Link from 'next/link';

export default function PPTStudioPro() {
  const [prompts, setPrompts] = useState(['']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMerged, setIsMerged] = useState(false);

  const addPrompt = () => setPrompts([...prompts, '']);
  const removePrompt = (index) => {
    const newPrompts = prompts.filter((_, i) => i !== index);
    setPrompts(newPrompts.length ? newPrompts : ['']);
  };

  const updatePrompt = (index, value) => {
    const newPrompts = [...prompts];
    newPrompts[index] = value;
    setPrompts(newPrompts);
  };

  const handleGenerateAll = async () => {
    if (prompts.some(p => !p)) return;
    setIsGenerating(true);
    setIsMerged(false);
    try {
      // Simulate generating each prompt and merging
      const allSlides = [];
      for (const prompt of prompts) {
        const res = await fetch('/api/ai/generate-ppt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic: prompt, structure: 'Academic' })
        });
        const data = await res.json();
        if (data.status === 'success') {
          allSlides.push(...data.slides);
        }
      }
      setSlides(allSlides);
      setIsMerged(true);
      setCurrentSlide(0);
    } catch (error) {
      console.error('PPT Generation failed', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = async () => {
    if (!slides.length) return;
    const pptxgen = (await import('pptxgenjs')).default;
    let pres = new pptxgen();
    slides.forEach(s => {
      let slide = pres.addSlide();
      slide.addText(s.title, { x: 0.5, y: 0.5, fontSize: 32, bold: true, color: "363636" });
      slide.addText(s.content, { x: 0.5, y: 1.5, fontSize: 14, color: "363636", bullet: true });
    });
    pres.writeFile({ fileName: `ScholarMind_Merge.pptx` });
  };

  const handleWhatsApp = () => {
    const text = `Check out my research presentation generated on ScholarMind AI!`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8 pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <div className="space-y-1">
           <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-2xl shadow-emerald-500/20">
                 <Presentation className="w-6 h-6 text-white" />
              </div>
              PPT Studio <span className="text-emerald-600">Pro</span>
           </h1>
           <p className="text-sm font-medium text-slate-500">Multi-topic prompt merging for professional academic decks.</p>
        </div>
        <div className="flex gap-3">
           <button onClick={handleWhatsApp} className="btn-secondary py-2.5 px-6 text-[#25D366] border-[#25D366]/20 bg-[#25D366]/5 font-black text-[10px]"><MessageCircle className="w-4 h-4" /> WHATSAPP SHARE</button>
           <button onClick={handleDownload} disabled={!isMerged} className="btn-primary py-2.5 px-8 bg-emerald-600 border-none shadow-xl shadow-emerald-900/10 text-[10px] font-black">
              <Download className="w-4 h-4" /> EXPORT PPTX
           </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 min-h-0 overflow-hidden px-4">
        
        {/* Left Side: Prompt List */}
        <div className="w-full lg:w-[450px] flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-2">
           <div className="flex items-center justify-between">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Presentation Outline</h3>
              <button onClick={addPrompt} className="text-[10px] font-black text-emerald-600 hover:text-emerald-700 uppercase tracking-widest flex items-center gap-2 transition-colors">
                 <Plus className="w-4 h-4" /> Add Topic
              </button>
           </div>
           
           <div className="space-y-4">
              {prompts.map((prompt, idx) => (
                <div key={idx} className="glass-card p-6 bg-white border-slate-100 space-y-4 relative group animate-slide-right" style={{ animationDelay: `${idx * 0.1}s` }}>
                   <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Topic {idx + 1}</span>
                      {prompts.length > 1 && (
                        <button onClick={() => removePrompt(idx)} className="p-1 text-slate-300 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">
                           <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                   </div>
                   <textarea 
                     className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 transition-all min-h-[100px] resize-none font-medium"
                     placeholder={`Describe topic ${idx + 1} in detail...`}
                     value={prompt}
                     onChange={(e) => updatePrompt(idx, e.target.value)}
                   ></textarea>
                </div>
              ))}
           </div>

           <button 
             onClick={handleGenerateAll}
             disabled={isGenerating || prompts.some(p => !p)}
             className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl shadow-2xl shadow-emerald-900/20 active:scale-95 transition-all flex items-center justify-center gap-3 mt-4"
           >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {isGenerating ? 'GENERATING & MERGING...' : 'GENERATE MERGED DECK'}
           </button>
        </div>

        {/* Right Side: Preview */}
        <div className="flex-1 flex flex-col gap-6">
           <div className="flex-1 glass-card bg-slate-900 p-0 overflow-hidden flex flex-col relative border-none shadow-2xl">
              {!isMerged ? (
                 <div className="flex-1 flex flex-col items-center justify-center text-center p-10 opacity-20 gap-8">
                    <Monitor className="w-24 h-24 text-slate-400" />
                    <div className="space-y-2">
                       <p className="text-xl font-black text-slate-400 uppercase tracking-[0.2em]">{isGenerating ? 'Drafting Excellence...' : 'Awaiting Merge'}</p>
                       <p className="text-xs font-medium text-slate-500">Your professional slide deck will appear here after generation.</p>
                    </div>
                 </div>
              ) : (
                 <div className="flex-1 flex flex-col animate-fade-in">
                    <div className="flex-1 p-16 flex flex-col justify-center overflow-y-auto custom-scrollbar relative bg-white">
                       <div className="max-w-3xl mx-auto text-center space-y-8">
                           <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">{slides[currentSlide]?.title}</h2>
                           <div className="w-24 h-2 bg-emerald-600 mx-auto rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
                           <p className="text-slate-600 text-2xl font-serif italic leading-relaxed whitespace-pre-wrap">{slides[currentSlide]?.content}</p>
                       </div>
                    </div>

                    <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between px-12">
                       <button onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))} className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm">
                          <ChevronLeft className="w-8 h-8" />
                       </button>
                       <div className="flex flex-col items-center gap-3">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Slide {currentSlide + 1} of {slides.length}</span>
                          <div className="flex gap-2">
                             {slides.map((_, i) => <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentSlide ? 'w-10 bg-emerald-600' : 'w-2 bg-slate-200'}`}></div>)}
                          </div>
                       </div>
                       <button onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))} className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm">
                          <ChevronRight className="w-8 h-8" />
                       </button>
                    </div>
                 </div>
              )}
           </div>
           
           {isMerged && (
              <div className="glass-card p-6 flex items-center justify-between bg-emerald-50 border-emerald-100">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                       <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                       <h4 className="text-xs font-black text-emerald-900 uppercase tracking-tight">Merge Complete</h4>
                       <p className="text-[10px] text-emerald-700 font-medium">All topics have been successfully synthesized into one deck.</p>
                    </div>
                 </div>
                 <button className="text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:underline flex items-center gap-2">
                    Review Structure <ChevronRight className="w-3 h-3" />
                 </button>
              </div>
           )}
        </div>

      </div>
    </div>
  );
}
