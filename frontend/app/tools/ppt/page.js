'use client';
import { useState } from 'react';
import { 
  Presentation, LayoutTemplate, Palette, Type, 
  Download, Loader2, Sparkles, ChevronRight, 
  Settings2, Sliders, Layers, Monitor, Play,
  ChevronLeft, X, ArrowRight
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function PPTSideBySide() {
  const [activePocket, setActivePocket] = useState('topic');
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [slidesReady, setSlidesReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  const pockets = [
    { id: 'topic', label: 'Topic & Source', icon: Sliders },
    { id: 'structure', label: 'Structure', icon: Layers },
    { id: 'style', label: 'Visual Theme', icon: Palette },
    { id: 'tone', label: 'Content Tone', icon: Type }
  ];

  const handleGenerate = async () => {
    if (!topic) return;
    setIsGenerating(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/ai/generate-ppt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ topic, structure: 'Academic', style: 'Modern', tone: 'Professional' })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setSlides(data.slides);
        setSlidesReady(true);
        setCurrentSlide(0);
      }
    } catch (error) {
      console.error('Failed to generate PPT', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadPPT = async () => {
    if (!slides || slides.length === 0) return;
    // Dynamically import pptxgenjs to avoid SSR issues
    const pptxgen = (await import('pptxgenjs')).default;
    let pres = new pptxgen();
    
    slides.forEach(slideData => {
      let slide = pres.addSlide();
      slide.addText(slideData.title, { x: 0.5, y: 0.5, fontSize: 32, bold: true, color: "363636" });
      if (slideData.subtitle) {
        slide.addText(slideData.subtitle, { x: 0.5, y: 1.2, fontSize: 18, color: "666666" });
      }
      slide.addText(slideData.content, { x: 0.5, y: 2.0, fontSize: 14, color: "363636", bullet: true });
    });
    
    pres.writeFile({ fileName: `ScholarMind_${topic.slice(0, 10)}.pptx` });
  };

  return (
    <div className="animate-fade-in h-full flex flex-col w-full gap-6">
      
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-100">
            <Presentation className="w-5 h-5 text-white" />
          </div>
          PPT Studio Pro
        </h1>
        {slidesReady && (
           <div className="flex gap-3">
              <button onClick={() => setSlidesReady(false)} className="btn-secondary py-2 px-4 text-xs font-bold">Reset</button>
              <button onClick={handleDownloadPPT} className="btn-primary py-2 px-6 text-xs bg-emerald-600 border-none shadow-md">
                 <Download className="w-4 h-4" /> Download PPTX
              </button>
           </div>
        )}
      </div>

      <div className="flex-1 flex gap-6 min-h-0 overflow-hidden pb-4">
        
        {/* Left Side: Pockets (Settings) */}
        <div className="w-80 flex flex-col gap-4 shrink-0">
           {pockets.map((pocket) => (
             <button 
               key={pocket.id}
               onClick={() => setActivePocket(pocket.id)}
               className={`flex flex-col gap-3 p-5 rounded-2xl border transition-all text-left ${
                 activePocket === pocket.id 
                  ? 'bg-white border-emerald-500 shadow-md ring-4 ring-emerald-500/5' 
                  : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'
               }`}
             >
                <div className="flex items-center gap-3">
                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activePocket === pocket.id ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                      <pocket.icon className="w-4 h-4" />
                   </div>
                   <span className={`text-sm font-bold ${activePocket === pocket.id ? 'text-slate-900' : 'text-slate-500'}`}>{pocket.label}</span>
                </div>
                
                {activePocket === pocket.id && (
                   <div className="mt-2 animate-fade-in space-y-4">
                      {pocket.id === 'topic' && (
                         <textarea 
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 transition-all"
                           rows="4"
                           placeholder="Describe your research..."
                           value={topic}
                           onChange={(e) => setTopic(e.target.value)}
                         ></textarea>
                      )}
                      
                      {pocket.id === 'structure' && (
                         <div className="flex flex-col gap-2">
                            {['Conference (15m)', 'Lecture (45m)', 'Thesis Defense'].map(opt => (
                               <button key={opt} className="w-full text-left p-3 rounded-lg bg-slate-50 text-[11px] font-bold text-slate-600 hover:bg-emerald-50">{opt}</button>
                            ))}
                         </div>
                      )}

                      {pocket.id === 'style' && (
                         <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-full bg-emerald-500 ring-2 ring-emerald-100 cursor-pointer"></div>
                            <div className="w-8 h-8 rounded-full bg-indigo-500 cursor-pointer"></div>
                            <div className="w-8 h-8 rounded-full bg-slate-800 cursor-pointer"></div>
                         </div>
                      )}

                      {pocket.id === 'tone' && (
                         <div className="flex flex-wrap gap-2">
                            {['Technical', 'Academic', 'Simplified'].map(opt => (
                               <button key={opt} className="px-3 py-1.5 rounded-lg bg-slate-50 text-[10px] font-bold text-slate-600 border border-slate-200">{opt}</button>
                            ))}
                         </div>
                      )}
                   </div>
                )}
             </button>
           ))}
           
           <button 
             onClick={handleGenerate}
             disabled={isGenerating || !topic}
             className="mt-auto btn-primary py-4 shadow-xl shadow-emerald-100 border-none w-full"
           >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              Generate Deck
           </button>
        </div>

        {/* Right Side: Preview/Output */}
        <div className="flex-1 flex flex-col gap-6 min-h-0 overflow-hidden">
           <div className="flex-1 solid-card bg-slate-900 overflow-hidden flex flex-col shadow-2xl relative border-none">
              {!slidesReady ? (
                 <div className="flex-1 flex flex-col items-center justify-center text-center p-10 opacity-30 gap-6">
                    <Monitor className="w-20 h-20 text-white" />
                    <p className="text-xl font-bold text-white tracking-widest uppercase">Canvas Ready</p>
                 </div>
              ) : (
                 <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                    <div className="flex-1 p-16 flex flex-col justify-center overflow-y-auto custom-scrollbar relative bg-white">
                       <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
                           <h2 className="text-5xl font-bold text-slate-900 tracking-tight leading-tight">{slides[currentSlide]?.title}</h2>
                           <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
                           <p className="text-slate-600 text-2xl font-serif italic leading-relaxed whitespace-pre-wrap">{slides[currentSlide]?.content}</p>
                       </div>
                    </div>

                    <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0 px-10">
                       <button onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))} className="p-3 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 transition-all">
                          <ChevronLeft className="w-6 h-6" />
                       </button>
                       <div className="flex items-center gap-6">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Slide {currentSlide + 1} / {slides.length}</span>
                          <div className="flex gap-2">
                             {slides.map((_, i) => <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentSlide ? 'w-10 bg-emerald-600' : 'w-2 bg-slate-200'}`}></div>)}
                          </div>
                       </div>
                       <button onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))} className="p-3 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 transition-all">
                          <ChevronRight className="w-6 h-6" />
                       </button>
                    </div>
                 </div>
              )}
           </div>

           {slidesReady && (
              <div className="solid-card p-6 bg-white shrink-0">
                 <ExportShareBar 
                    title="Academic Slide Deck" 
                    fileType="PPTX" 
                    onDownload={handleDownloadPPT}
                    contentToShare={`I just generated an AI presentation on "${topic}" using ScholarMind AI!`}
                 />
              </div>
           )}
        </div>

      </div>
    </div>
  );
}
