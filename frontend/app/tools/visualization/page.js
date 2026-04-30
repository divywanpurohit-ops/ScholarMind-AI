'use client';
import { useState } from 'react';
import { 
  Network, Share2, Download, Layers, Sparkles, 
  Trash2, Play, MousePointer2, ZoomIn, ZoomOut,
  Maximize2, Layout, Database, Terminal, Zap,
  Activity, Globe, Search, Plus
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function VisualizationLab() {
  const [activeType, setActiveType] = useState('mindmap');
  const [isGenerating, setIsGenerating] = useState(false);
  const [ready, setReady] = useState(false);
  const [vizData, setVizData] = useState(null);
  const [prompt, setPrompt] = useState('');

  const vizTypes = [
    { id: 'mindmap', label: 'Mind Map', icon: Network, desc: 'Visual brainstorming' },
    { id: 'concept', label: 'Concept Map', icon: Layout, desc: 'Variable relationships' },
    { id: 'diagram', label: 'Scientific Diagram', icon: Database, desc: 'Process flow & Logic' },
    { id: 'pathway', label: 'Reaction Pathway', icon: Activity, desc: 'Bio/Chem cycles' },
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/ai/generate-visualization`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ prompt, type: activeType })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setVizData(data.visualizationData);
        setReady(true);
      }
    } catch (error) {
      console.error('Visualization generation failed', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-100">
                 <Network className="w-5 h-5 text-white" />
              </div>
              Visualization Lab
           </h1>
           <p className="text-sm text-slate-500 mt-1 font-medium">Create publication-ready diagrams, mind maps, and reaction pathways.</p>
        </div>
        <div className="flex gap-3">
           <button className="btn-secondary py-2 px-6 text-xs font-bold"><Zap className="w-4 h-4" /> AI Suggest Layout</button>
           <button className="btn-primary py-2 px-6 bg-violet-600 text-xs font-bold border-none shadow-md">
             <Download className="w-4 h-4" /> Export High-Res (SVG/PNG)
           </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden pb-4">
        
        {/* Left Side: Parameters */}
        <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0 overflow-y-auto custom-scrollbar pr-2">
           
           <div className="solid-card p-6 bg-white space-y-6">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                 <Terminal className="w-4 h-4 text-violet-600" /> Visualization Type
              </h3>
              <div className="flex flex-col gap-2">
                 {vizTypes.map((type) => (
                   <button 
                     key={type.id}
                     onClick={() => setActiveType(type.id)}
                     className={`flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                       activeType === type.id 
                        ? 'bg-white border-violet-500 shadow-md ring-4 ring-violet-500/5' 
                        : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'
                     }`}
                   >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeType === type.id ? 'bg-violet-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                         <type.icon className="w-4 h-4" />
                      </div>
                      <div>
                         <p className={`text-xs font-bold ${activeType === type.id ? 'text-slate-900' : 'text-slate-500'}`}>{type.label}</p>
                         <p className="text-[9px] text-slate-400 font-medium uppercase">{type.desc}</p>
                      </div>
                   </button>
                 ))}
              </div>
           </div>

           <div className="solid-card p-6 bg-white space-y-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Prompt</h3>
              <textarea 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-900 focus:outline-none focus:border-violet-500 transition-all min-h-[120px]"
                placeholder="Describe the logic or connections you want to visualize..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              ></textarea>
              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !prompt}
                className="w-full btn-primary bg-violet-600 py-3 shadow-xl shadow-violet-100 border-none flex items-center justify-center gap-2"
              >
                 {isGenerating ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Sparkles className="w-4 h-4" />}
                 GENERATE VISUAL
              </button>
           </div>
        </div>

        {/* Right Side: Interactive Canvas */}
        <div className="flex-1 flex flex-col gap-6 min-h-0 overflow-hidden">
           <div className="flex-1 solid-card bg-slate-950 flex flex-col overflow-hidden relative border-none group">
              
              {/* Canvas Controls */}
              <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
                 <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all border border-white/5"><ZoomIn className="w-5 h-5" /></button>
                 <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all border border-white/5"><ZoomOut className="w-5 h-5" /></button>
                 <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all border border-white/5"><Maximize2 className="w-5 h-5" /></button>
              </div>

              {!ready ? (
                 <div className="h-full flex flex-col items-center justify-center text-center p-20 gap-8 opacity-20">
                    <div className="relative">
                       <Network className="w-32 h-32 text-violet-500 animate-pulse" />
                       <div className="absolute inset-0 border-4 border-violet-500/20 rounded-full scale-150 animate-ping"></div>
                    </div>
                    <div className="space-y-2">
                       <p className="text-2xl font-bold text-white tracking-[0.2em] uppercase">Visual Canvas Ready</p>
                       <p className="text-slate-400 text-sm font-medium">ScholarMind Engine is waiting for your logic prompt...</p>
                    </div>
                 </div>
              ) : (
                 <div className="flex-1 p-10 animate-fade-in relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                    {/* Simulated Mind Map Nodes */}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="relative w-full h-full">
                          {/* Dynamic Nodes from API */}
                          {vizData?.nodes?.map((node, index) => {
                             // Quick hardcoded positioning logic for demo purposes based on index
                             const positions = [
                               "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-violet-600 rounded-3xl text-white shadow-3xl shadow-violet-500/50 border border-violet-400", // Center
                               "top-1/4 left-1/4 p-6 bg-slate-900 border border-slate-700 rounded-2xl text-slate-300 shadow-xl",
                               "top-3/4 right-1/4 p-6 bg-slate-900 border border-slate-700 rounded-2xl text-slate-300 shadow-xl",
                               "top-1/3 right-1/3 p-6 bg-slate-900 border border-slate-700 rounded-2xl text-slate-300 shadow-xl",
                               "bottom-1/4 left-1/3 p-6 bg-slate-900 border border-slate-700 rounded-2xl text-slate-300 shadow-xl"
                             ];
                             const posClass = positions[index % positions.length];
                             return (
                               <div key={node.id} className={`absolute ${posClass} animate-fade-in`} style={{ animationDelay: `${index * 100}ms` }}>
                                  {index === 0 ? (
                                     <h2 className="text-2xl font-bold tracking-tight">{node.label}</h2>
                                  ) : (
                                     <p className="text-sm font-bold">{node.label}</p>
                                  )}
                               </div>
                             );
                          })}

                          {/* Connections Lines (Simulated with simple divs) */}
                          <div className="absolute top-1/2 left-1/2 w-[25%] h-px bg-gradient-to-r from-violet-500 to-transparent rotate-45 origin-left -translate-y-1/2 opacity-30"></div>
                          <div className="absolute top-1/2 left-1/2 w-[25%] h-px bg-gradient-to-r from-violet-500 to-transparent -rotate-45 origin-left -translate-y-1/2 opacity-30"></div>
                          <div className="absolute top-1/2 left-1/2 w-[30%] h-px bg-gradient-to-r from-violet-500 to-transparent rotate-135 origin-left -translate-y-1/2 opacity-30"></div>
                       </div>
                    </div>
                    
                    {/* Interaction Tooltip */}
                    <div className="absolute bottom-10 left-10 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
                       <MousePointer2 className="w-4 h-4" /> Drag to move • Scroll to zoom
                    </div>
                 </div>
              )}
           </div>

           {ready && (
              <div className="solid-card p-6 bg-white shrink-0">
                 <ExportShareBar 
                    title="Scientific Visualization" 
                    fileType="SVG" 
                    contentToShare={`I just generated a cool visualization about "${prompt}" with ScholarMind!`}
                 />
              </div>
           )}
        </div>

      </div>

    </div>
  );
}
