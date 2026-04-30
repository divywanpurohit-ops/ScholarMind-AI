'use client';
import { useState } from 'react';
import { 
  Video, PlayCircle, FileText, Activity, 
  Download, Loader2, Sparkles, ChevronRight, 
  Settings2, Sliders, Layers, Monitor, Play,
  Plus, Trash2, CheckCircle, Share2, MessageCircle
} from 'lucide-react';
import Link from 'next/link';

export default function VideoStudioPro() {
  const [prompts, setPrompts] = useState(['']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [scenes, setScenes] = useState([]);
  const [activeScene, setActiveScene] = useState(0);
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
      const allScenes = [];
      for (const prompt of prompts) {
        const res = await fetch('/api/ai/generate-video', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, style: 'Academic Animation' })
        });
        const data = await res.json();
        if (data.status === 'success') {
          allScenes.push(...data.scenes);
        }
      }
      setScenes(allScenes);
      setIsMerged(true);
      setActiveScene(0);
    } catch (error) {
      console.error('Video Generation failed', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8 pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <div className="space-y-1">
           <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-600 flex items-center justify-center shadow-2xl shadow-rose-500/20">
                 <Video className="w-6 h-6 text-white" />
              </div>
              Video Studio <span className="text-rose-600">Pro</span>
           </h1>
           <p className="text-sm font-medium text-slate-500">AI-driven scene generation and multi-prompt merging.</p>
        </div>
        <div className="flex gap-3">
           <button className="btn-secondary py-2.5 px-6 text-rose-600 border-rose-200 bg-rose-50 font-black text-[10px] uppercase tracking-widest">
              <Activity className="w-4 h-4" /> Live Preview
           </button>
           <button disabled={!isMerged} className="btn-primary py-2.5 px-8 bg-rose-600 border-none shadow-xl shadow-rose-900/10 text-[10px] font-black uppercase tracking-widest">
              <Download className="w-4 h-4" /> EXPORT MP4
           </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 min-h-0 overflow-hidden px-4">
        
        {/* Left Side: Prompts */}
        <div className="w-full lg:w-[450px] flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-2">
           <div className="flex items-center justify-between">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Video Sequence</h3>
              <button onClick={addPrompt} className="text-[10px] font-black text-rose-600 hover:text-rose-700 uppercase tracking-widest flex items-center gap-2 transition-colors">
                 <Plus className="w-4 h-4" /> Add Scene
              </button>
           </div>
           
           <div className="space-y-4">
              {prompts.map((prompt, idx) => (
                <div key={idx} className="glass-card p-6 bg-white border-slate-100 space-y-4 relative group animate-slide-right" style={{ animationDelay: `${idx * 0.1}s` }}>
                   <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Scene {idx + 1} Prompt</span>
                      {prompts.length > 1 && (
                        <button onClick={() => removePrompt(idx)} className="p-1 text-slate-300 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">
                           <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                   </div>
                   <textarea 
                     className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs text-slate-900 focus:outline-none focus:border-rose-500 transition-all min-h-[100px] resize-none font-medium"
                     placeholder={`Describe the visual and narration for scene ${idx + 1}...`}
                     value={prompt}
                     onChange={(e) => updatePrompt(idx, e.target.value)}
                   ></textarea>
                </div>
              ))}
           </div>

           <button 
             onClick={handleGenerateAll}
             disabled={isGenerating || prompts.some(p => !p)}
             className="w-full bg-rose-600 hover:bg-rose-500 text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl shadow-2xl shadow-rose-900/20 active:scale-95 transition-all flex items-center justify-center gap-3 mt-4"
           >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {isGenerating ? 'RENDERING SCENES...' : 'GENERATE FULL SEQUENCE'}
           </button>
        </div>

        {/* Right Side: Visual Preview */}
        <div className="flex-1 flex flex-col gap-6">
           <div className="flex-1 glass-card bg-slate-900 p-0 overflow-hidden flex flex-col relative border-none shadow-2xl">
              {!isMerged ? (
                 <div className="flex-1 flex flex-col items-center justify-center text-center p-10 opacity-20 gap-8">
                    <div className="relative">
                       <PlayCircle className="w-24 h-24 text-slate-400" />
                       <div className="absolute inset-0 bg-rose-500/10 rounded-full blur-2xl"></div>
                    </div>
                    <div className="space-y-2">
                       <p className="text-xl font-black text-slate-400 uppercase tracking-[0.2em]">{isGenerating ? 'Rendering Magic...' : 'Studio Standby'}</p>
                       <p className="text-xs font-medium text-slate-500">Your AI-generated video sequence will play here.</p>
                    </div>
                 </div>
              ) : (
                 <div className="flex-1 flex flex-col animate-fade-in relative">
                    <div className="flex-1 bg-black flex items-center justify-center">
                       <div className="w-full max-w-2xl aspect-video bg-slate-800 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-10 text-center gap-6 shadow-2xl overflow-hidden relative group">
                          <img 
                            src={`https://images.unsplash.com/photo-1532187875605-1ef6ca237bba?auto=format&fit=crop&q=80&w=800`} 
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[10s]" 
                            alt="Visual" 
                          />
                          <div className="relative z-10 space-y-4">
                             <h4 className="text-white text-3xl font-black uppercase tracking-tight">{scenes[activeScene]?.visual}</h4>
                             <p className="text-rose-300 text-lg font-serif italic max-w-lg mx-auto">"{scenes[activeScene]?.narration}"</p>
                          </div>
                          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                             <div className="px-2 py-0.5 rounded bg-rose-600 text-white text-[8px] font-black uppercase">SCENE {activeScene + 1}</div>
                          </div>
                       </div>
                    </div>

                    <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between px-12">
                       <div className="flex gap-4 overflow-x-auto custom-scrollbar max-w-lg pb-2">
                          {scenes.map((_, i) => (
                             <button 
                               key={i} 
                               onClick={() => setActiveScene(i)}
                               className={`w-16 h-10 rounded-lg border-2 transition-all flex items-center justify-center text-[10px] font-black ${i === activeScene ? 'border-rose-600 bg-white text-rose-600 shadow-md' : 'border-slate-200 bg-slate-100 text-slate-400'}`}
                             >
                                #{i+1}
                             </button>
                          ))}
                       </div>
                       <div className="flex items-center gap-4">
                          <button onClick={() => setActiveScene(prev => Math.max(0, prev - 1))} className="p-3 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-rose-600 transition-all shadow-sm">
                             <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button onClick={() => setActiveScene(prev => Math.min(scenes.length - 1, prev + 1))} className="p-3 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-rose-600 transition-all shadow-sm">
                             <ChevronRight className="w-6 h-6" />
                          </button>
                       </div>
                    </div>
                 </div>
              )}
           </div>
           
           {isMerged && (
              <div className="glass-card p-6 bg-slate-50 border-slate-200 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                       <CheckCircle className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                       <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight">Sequence Ready</h4>
                       <p className="text-[10px] text-slate-500 font-medium">Export in 4K resolution with high-fidelity narration.</p>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <button className="p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:text-rose-600 transition-all"><Share2 className="w-4 h-4" /></button>
                    <button className="p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:text-emerald-600 transition-all"><MessageCircle className="w-4 h-4" /></button>
                 </div>
              </div>
           )}
        </div>

      </div>
    </div>
  );
}
