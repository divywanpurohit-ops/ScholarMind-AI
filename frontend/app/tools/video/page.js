'use client';
import { useState } from 'react';
import { 
  Video, Play, Settings2, Download, MonitorPlay, 
  Sparkles, Loader2, Sliders, Film, Volume2, Languages,
  X, ChevronRight, ChevronLeft, Layers, Monitor, PlayCircle,
  ArrowRight
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function VideoSideBySide() {
  const [activePocket, setActivePocket] = useState('script');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoScript, setVideoScript] = useState(null);
  const [estimatedTime, setEstimatedTime] = useState('');

  const pockets = [
    { id: 'script', label: 'Script & Concept', icon: Sliders },
    { id: 'style', label: 'Video Style', icon: Film },
    { id: 'audio', label: 'Voice & Narration', icon: Volume2 },
    { id: 'captions', label: 'Captions Settings', icon: Languages }
  ];

  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    setError(null);
    setEstimatedTime('~1-2 minutes');
    try {
      const res = await fetch('/api/ai/generate-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt, style: 'Cinematic', audio: 'Professional' })
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const data = await res.json();
      if (data.status === 'success') {
        setVideoScript(data.videoData);
        setVideoReady(true);
      } else {
        throw new Error(data.message || 'Generation failed');
      }
    } catch (error) {
      console.error('Failed to generate video script', error);
      setError(error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="animate-fade-in h-full flex flex-col w-full gap-6">
      
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-100">
            <Video className="w-5 h-5 text-white" />
          </div>
          Video Studio Pro
        </h1>
        {videoReady && (
           <div className="flex gap-3">
              <button onClick={() => setVideoReady(false)} className="btn-secondary py-2 px-4 text-xs font-bold">Reset</button>
              <button className="btn-primary py-2 px-6 text-xs bg-orange-600 border-none shadow-md">
                 <Download className="w-4 h-4" /> Export MP4
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
                  ? 'bg-white border-orange-500 shadow-md ring-4 ring-orange-500/5' 
                  : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'
               }`}
             >
                <div className="flex items-center gap-3">
                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activePocket === pocket.id ? 'bg-orange-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                      <pocket.icon className="w-4 h-4" />
                   </div>
                   <span className={`text-sm font-bold ${activePocket === pocket.id ? 'text-slate-900' : 'text-slate-500'}`}>{pocket.label}</span>
                </div>
                
                {activePocket === pocket.id && (
                   <div className="mt-2 animate-fade-in space-y-4">
                      {pocket.id === 'script' && (
                         <textarea 
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-all"
                           rows="4"
                           placeholder="Describe the video concept..."
                           value={prompt}
                           onChange={(e) => setPrompt(e.target.value)}
                         ></textarea>
                      )}
                      
                      {pocket.id === 'style' && (
                         <div className="flex flex-col gap-2">
                            {['3D Animation', 'Whiteboard', 'Cinematic'].map(opt => (
                               <button key={opt} className="w-full text-left p-3 rounded-lg bg-slate-50 text-[11px] font-bold text-slate-600 hover:bg-orange-50">{opt}</button>
                            ))}
                         </div>
                      )}

                      {pocket.id === 'audio' && (
                         <div className="flex flex-wrap gap-2">
                            {['Male (US)', 'Female (UK)', 'Lecturer'].map(opt => (
                               <button key={opt} className="px-3 py-1.5 rounded-lg bg-slate-50 text-[10px] font-bold text-slate-600 border border-slate-200">{opt}</button>
                            ))}
                         </div>
                      )}

                      {pocket.id === 'captions' && (
                         <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                            <input type="checkbox" defaultChecked className="accent-orange-600" />
                            <span className="text-[10px] font-bold text-slate-600 uppercase">Auto Subtitles</span>
                         </div>
                      )}
                   </div>
                )}
             </button>
           ))}
           
           <button 
             onClick={handleGenerate}
             disabled={isGenerating || !prompt}
             className="mt-auto btn-primary py-4 shadow-xl shadow-orange-100 border-none w-full bg-orange-600 hover:bg-orange-500"
           >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              Generate Video
           </button>
        </div>

        {/* Right Side: Preview/Output */}
        <div className="flex-1 flex flex-col gap-6 min-h-0 overflow-hidden">
           <div className="flex-1 solid-card bg-slate-950 overflow-hidden flex flex-col shadow-2xl relative border-none group">
              {!videoReady ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-10 opacity-30 gap-6">
                     <MonitorPlay className="w-20 h-20 text-white" />
                     <div className="space-y-2">
                        <p className="text-xl font-bold text-white tracking-widest uppercase">{isGenerating ? 'Rendering Pipeline...' : 'Pipeline Ready'}</p>
                        {isGenerating && <p className="text-orange-500 font-mono text-xs uppercase animate-pulse">Estimated Time: {estimatedTime}</p>}
                        {error && <p className="text-red-500 font-bold text-sm">Error: {error}</p>}
                     </div>
                  </div>
              ) : (
                 <div className="flex-1 flex flex-col min-h-0 overflow-hidden bg-gradient-to-br from-slate-900 to-black relative">
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-12">
                       <div className="max-w-4xl mx-auto space-y-6">
                          <h3 className="text-3xl font-bold text-white tracking-wide uppercase font-heading text-center mb-10">{videoScript?.title}</h3>
                          
                          {videoScript?.scenes?.map((scene, idx) => (
                             <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 animate-fade-in hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-600/20 text-orange-500 flex items-center justify-center font-bold text-xl border border-orange-500/30">
                                   {scene.scene}
                                </div>
                                <div className="space-y-4 flex-1">
                                   <div>
                                      <h4 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Film className="w-3 h-3" /> Visual Setting</h4>
                                      <p className="text-slate-300 text-sm leading-relaxed">{scene.visual}</p>
                                   </div>
                                   <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                      <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-2"><Volume2 className="w-3 h-3" /> Narration Script</h4>
                                      <p className="text-slate-400 font-serif italic text-sm">"{scene.narration}"</p>
                                   </div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              )}
           </div>

           {videoReady && (
              <div className="solid-card p-6 bg-white shrink-0">
                 <ExportShareBar 
                    title="Academic Video Project" 
                    fileType="MP4" 
                    contentToShare={`I just created a video script for "${prompt}" using ScholarMind AI!`}
                 />
              </div>
           )}
        </div>

      </div>
    </div>
  );
}
