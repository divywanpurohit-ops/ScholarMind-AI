'use client';
import { useState } from 'react';
import { 
  Zap, MessageSquare, Languages, FileText, 
  BarChart3, Presentation, Video, Network, 
  PenTool, ShieldCheck, ChevronUp, ChevronDown,
  X, Mic, Search, Star, Sparkles, Brain, Activity
} from 'lucide-react';

export default function FloatingToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const tools = [
    { name: 'Translate', icon: Languages },
    { name: 'Summarize', icon: FileText },
    { name: 'Data', icon: BarChart3 },
    { name: 'PPT', icon: Presentation },
    { name: 'Video', icon: Video },
    { name: 'Visualize', icon: Network },
    { name: 'Humanize', icon: Sparkles },
    { name: 'Grammar', icon: PenTool },
  ];

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
        
        {/* Expanded Toolbar Menu */}
        {isOpen && (
          <div className="animate-fade-in mb-4 solid-card p-3 bg-white/90 backdrop-blur-xl border-blue-100 shadow-2xl flex flex-col gap-2 ring-4 ring-blue-500/5">
            {tools.map((tool) => (
              <button 
                key={tool.name}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-all group w-48"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all">
                  <tool.icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-900 uppercase tracking-widest">{tool.name}</span>
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4">
           {/* Chat Trigger */}
           <button 
             onClick={() => setIsChatOpen(!isChatOpen)}
             className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all ${isChatOpen ? 'bg-slate-900 text-white' : 'bg-white text-blue-600 border border-blue-100 hover:scale-110'}`}
           >
              {isChatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
           </button>

           {/* Global Tool Trigger */}
           <button 
             onClick={() => setIsOpen(!isOpen)}
             className={`w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group shadow-blue-200`}
           >
              <Zap className={`w-7 h-7 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center text-[8px] font-bold ring-2 ring-white">AI</div>
           </button>
        </div>
      </div>

      {/* AI Chat Assistant Overlay */}
      {isChatOpen && (
        <div className="fixed bottom-28 right-8 w-[400px] h-[550px] z-[99] animate-fade-in">
           <div className="solid-card h-full bg-white flex flex-col overflow-hidden shadow-3xl border-blue-100 ring-8 ring-blue-500/5">
              {/* Chat Header */}
              <div className="p-5 bg-blue-600 text-white flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                       <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                       <h3 className="text-sm font-bold tracking-tight">Academic Assistant</h3>
                       <p className="text-[9px] font-bold text-white/70 uppercase tracking-widest flex items-center gap-1">
                          <Activity className="w-3 h-3" /> System Online
                       </p>
                    </div>
                 </div>
                 <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-all"><X className="w-5 h-5" /></button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-6 bg-slate-50/50">
                 <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">AI</div>
                    <div className="p-4 rounded-2xl bg-white border border-slate-100 text-xs text-slate-700 leading-relaxed shadow-sm">
                       Greetings Scholar. I can help you translate current documents, generate summaries, or perform statistical analysis on the fly. What do you need?
                    </div>
                 </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white border-t border-slate-100">
                 <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl p-2 px-4 group focus-within:border-blue-500 transition-all">
                    <Search className="w-4 h-4 text-slate-400 group-focus-within:text-blue-500" />
                    <input 
                      type="text" 
                      placeholder="Ask anything..."
                      className="bg-transparent flex-1 py-2 text-xs text-slate-900 focus:outline-none placeholder-slate-400 font-medium"
                    />
                    <button className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all">
                       <ChevronUp className="w-4 h-4" />
                    </button>
                 </div>
                 <div className="flex items-center justify-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400 hover:text-blue-600 transition-all uppercase tracking-widest"><Mic className="w-3 h-3" /> Voice</button>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <button className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400 hover:text-blue-600 transition-all uppercase tracking-widest"><FileText className="w-3 h-3" /> Context</button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </>
  );
}
