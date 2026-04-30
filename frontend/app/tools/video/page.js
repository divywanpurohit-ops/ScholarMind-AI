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

  const pockets = [
    { id: 'script', label: 'Script & Concept', icon: Sliders },
    { id: 'style', label: 'Video Style', icon: Film },
    { id: 'audio', label: 'Voice & Narration', icon: Volume2 },
    { id: 'captions', label: 'Captions Settings', icon: Languages }
  ];

  const handleGenerate = () => {
    if (!prompt) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setVideoReady(true);
    }, 2500);
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
                    <p className="text-xl font-bold text-white tracking-widest uppercase">Pipeline Ready</p>
                 </div>
              ) : (
                 <div className="flex-1 flex flex-col min-h-0 overflow-hidden bg-gradient-to-br from-slate-900 to-black relative">
                    <div className="flex-1 flex items-center justify-center p-12">
                       <div className="w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden relative shadow-2xl border border-white/5">
                          <div className="absolute inset-0 flex items-center justify-center">
                             <div className="text-center p-10 animate-fade-in">
                                <PlayCircle className="w-20 h-20 text-orange-500 mx-auto mb-6 animate-pulse" />
                                <h3 className="text-3xl font-bold text-white tracking-wide uppercase font-heading">{prompt}</h3>
                                <p className="text-orange-500 mt-2 font-mono text-xs uppercase tracking-tighter">Simulating Video Render...</p>
                             </div>
                          </div>
                          
                          {/* Controls Bar */}
                          <div className="absolute bottom-0 left-0 w-full h-20 bg-black/60 backdrop-blur-md flex items-center px-10 gap-8">
                             <button className="text-white hover:text-orange-400 transition-colors">
                                <Play className="w-8 h-8 fill-current" />
                             </button>
                             <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-600 w-1/3"></div>
                             </div>
                             <span className="text-xs font-mono text-slate-400">01:04 / 03:20</span>
                          </div>
                       </div>
                    </div>
                 </div>
              )}
           </div>

           {videoReady && (
              <div className="solid-card p-6 bg-white shrink-0">
                 <ExportShareBar title="Academic Video Project" fileType="MP4" />
              </div>
           )}
        </div>

      </div>
    </div>
  );
}
