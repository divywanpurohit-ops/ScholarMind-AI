'use client';
import { useState } from 'react';
import { 
  GraduationCap, BookOpen, FileText, Settings, 
  Sparkles, Loader2, CheckCircle2, ChevronRight, 
  Plus, Download, MessageSquare, Quote, Layers,
  ChevronLeft, FileOutput, ArrowRight
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function ThesisModePro() {
  const [activeStep, setActiveStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [outputs, setOutputs] = useState({});

  const chapters = [
    { id: 'abstract', title: 'Abstract', icon: FileText, desc: 'Summary of research' },
    { id: 'intro', title: 'Introduction', icon: BookOpen, desc: 'Background & Objective' },
    { id: 'lit-review', title: 'Lit Review', icon: Layers, desc: 'Existing research' },
    { id: 'methods', title: 'Methods', icon: Settings, desc: 'Research design' },
    { id: 'results', title: 'Results', icon: GraduationCap, desc: 'Findings & Data' },
    { id: 'discussion', title: 'Discussion', icon: MessageSquare, desc: 'Interpretations' },
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    const chapterId = chapters[activeStep].id;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/ai/generate-thesis`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ 
          chapterTitle: chapters[activeStep].title,
          projectContext: 'Advanced AI Research and Deep Learning integrations.' 
        })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setOutputs(prev => ({
          ...prev,
          [chapterId]: data.content
        }));
      }
    } catch (error) {
      console.error('Thesis generation failed', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="animate-fade-in h-full flex flex-col w-full gap-6">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-100">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          Thesis Builder Pro
        </h1>
        {Object.keys(outputs).length > 0 && (
           <button className="btn-primary py-2 px-6 text-xs bg-indigo-600 border-none shadow-md">
              <FileOutput className="w-4 h-4" /> Export Full Thesis
           </button>
        )}
      </div>

      <div className="flex-1 flex gap-6 min-h-0 overflow-hidden pb-4">
        
        {/* Left Side: Chapter List (Side-by-Side Settings) */}
        <div className="w-80 flex flex-col gap-3 shrink-0 overflow-y-auto custom-scrollbar pr-2">
           {chapters.map((chapter, idx) => (
             <button 
               key={chapter.id}
               onClick={() => setActiveStep(idx)}
               className={`flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                 activeStep === idx 
                  ? 'bg-white border-indigo-500 shadow-md ring-4 ring-indigo-500/5' 
                  : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'
               }`}
             >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${activeStep === idx ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                   <chapter.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                   <h3 className={`text-[13px] font-bold ${activeStep === idx ? 'text-slate-900' : 'text-slate-500'}`}>
                      {chapter.title}
                   </h3>
                   <p className="text-[10px] font-medium text-slate-400 truncate w-32">{chapter.desc}</p>
                </div>
                {outputs[chapter.id] && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
             </button>
           ))}
           
           <div className="mt-auto solid-card p-4 bg-indigo-50/50 border-indigo-100">
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Thesis Progress</p>
              <div className="h-1.5 w-full bg-indigo-100 rounded-full overflow-hidden">
                 <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${(Object.keys(outputs).length / chapters.length) * 100}%` }}></div>
              </div>
           </div>
        </div>

        {/* Right Side: Writing Area */}
        <div className="flex-1 flex flex-col gap-4 min-h-0">
           <div className="flex-1 solid-card bg-white flex flex-col overflow-hidden relative border-slate-200">
              <div className="flex-1 p-12 overflow-y-auto custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]">
                 {isGenerating ? (
                    <div className="h-full flex flex-col items-center justify-center gap-4">
                       <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
                       <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Generating {chapters[activeStep].title}...</p>
                    </div>
                 ) : outputs[chapters[activeStep].id] ? (
                    <div className="max-w-2xl mx-auto animate-fade-in">
                       <h2 className="text-4xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-6">{chapters[activeStep].title}</h2>
                       <p className="text-slate-700 text-xl leading-relaxed font-serif italic whitespace-pre-wrap">{outputs[chapters[activeStep].id]}</p>
                    </div>
                 ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-10 opacity-30 gap-6">
                       <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center">
                          {(() => {
                             const Icon = chapters[activeStep].icon;
                             return <Icon className="w-10 h-10 text-indigo-500" />;
                          })()}
                       </div>
                       <div className="space-y-2">
                          <h3 className="text-xl font-bold text-slate-900">Start Writing {chapters[activeStep].title}</h3>
                          <p className="text-sm text-slate-500">AI will draft this chapter based on your research project data.</p>
                       </div>
                       <button onClick={handleGenerate} className="btn-primary bg-indigo-600 px-10 py-4 text-sm shadow-xl shadow-indigo-100 border-none">
                          <Sparkles className="w-5 h-5" /> START DRAFTING
                       </button>
                    </div>
                 )}
              </div>
           </div>
           
           <div className="flex items-center justify-between p-2 bg-white rounded-2xl border border-slate-200 shrink-0">
              <button onClick={() => setActiveStep(prev => Math.max(0, prev - 1))} disabled={activeStep === 0} className="btn-secondary py-2 px-6 text-xs font-bold disabled:opacity-20">
                 <ChevronLeft className="w-4 h-4" /> Previous Chapter
              </button>
              <div className="flex gap-2">
                 {chapters.map((_, i) => <div key={i} className={`w-2 h-2 rounded-full ${i === activeStep ? 'bg-indigo-500' : 'bg-slate-200'}`}></div>)}
              </div>
              <button onClick={() => setActiveStep(prev => Math.min(chapters.length-1, prev + 1))} disabled={activeStep === chapters.length-1} className="btn-secondary py-2 px-6 text-xs font-bold disabled:opacity-20">
                 Next Chapter <ChevronRight className="w-4 h-4" />
              </button>
           </div>
        </div>

      </div>
    </div>
  );
}
