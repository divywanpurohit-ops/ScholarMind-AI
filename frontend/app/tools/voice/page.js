'use client';
import { useState } from 'react';
import { 
  Mic, Volume2, Languages, Play, 
  Square, Pause, Loader2, Sparkles, 
  Trash2, Headphones, Download, Zap,
  MessageSquare, Globe
} from 'lucide-react';

export default function VoiceLab() {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en-US');

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const handleReadAloud = () => {
    if (!text) return;
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.onend = () => setIsPlaying(false);
    window.speechSynthesis.speak(utterance);
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <div className="animate-fade-in flex flex-col gap-10 w-full pb-20">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-heading text-white mb-2 flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Mic className="w-6 h-6 text-white" />
           </div>
           Voice Intelligence Lab
        </h1>
        <p className="text-[#9CA3AF] text-lg font-medium">Multilingual speech synthesis and voice-to-research dictation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Interface */}
        <div className="lg:col-span-2 flex flex-col gap-6">
           <div className="solid-card bg-[#0B0F19]/50 border-[#1F2937] flex flex-col min-h-[500px]">
              
              {/* Toolbar */}
              <div className="p-4 border-b border-[#1F2937] bg-[#030712] flex items-center justify-between px-8">
                 <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                       <Globe className="w-4 h-4 text-blue-400" />
                       <select 
                         value={language}
                         onChange={(e) => setLanguage(e.target.value)}
                         className="bg-transparent text-xs font-bold text-white uppercase tracking-widest focus:outline-none"
                       >
                          <option value="en-US" className="bg-[#0B0F19]">English (US)</option>
                          <option value="hi-IN" className="bg-[#0B0F19]">Hindi (India)</option>
                          <option value="fr-FR" className="bg-[#0B0F19]">French</option>
                          <option value="de-DE" className="bg-[#0B0F19]">German</option>
                       </select>
                    </div>
                    <div className="flex items-center gap-2">
                       <Headphones className="w-4 h-4 text-purple-400" />
                       <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest">Premium Neural Voice</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-2">
                    <button className="p-2 text-[#4B5563] hover:text-white" onClick={() => setText('')}>
                       <Trash2 className="w-4 h-4" />
                    </button>
                 </div>
              </div>

              <textarea 
                className="flex-1 bg-transparent p-10 resize-none focus:outline-none text-xl text-[#F3F4F6] custom-scrollbar placeholder-[#4B5563] leading-relaxed font-serif italic"
                placeholder="Type research notes or paste a summary here to hear it aloud, or use the microphone to dictate..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>

              {/* Control Bar */}
              <div className="p-8 bg-[#030712] border-t border-[#1F2937] flex items-center justify-center gap-8">
                 <button 
                   onClick={toggleRecording}
                   className={`w-20 h-20 rounded-full flex items-center justify-center transition-all shadow-2xl ${
                     isRecording 
                      ? 'bg-rose-600 animate-pulse scale-110 shadow-rose-600/40' 
                      : 'bg-[#111827] border border-[#1F2937] text-[#4B5563] hover:text-white hover:border-blue-500/50'
                   }`}
                 >
                    {isRecording ? <Square className="w-8 h-8 text-white" /> : <Mic className="w-8 h-8" />}
                 </button>

                 <button 
                   onClick={isPlaying ? stopReading : handleReadAloud}
                   disabled={!text}
                   className={`px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition-all ${
                     isPlaying 
                      ? 'bg-amber-600 text-white shadow-xl shadow-amber-600/20' 
                      : 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:bg-blue-500'
                   } disabled:opacity-30`}
                 >
                    {isPlaying ? (
                      <><Pause className="w-5 h-5" /> PAUSE READING</>
                    ) : (
                      <><Volume2 className="w-5 h-5" /> READ SUMMARY ALOUD</>
                    )}
                 </button>
              </div>
           </div>
        </div>

        {/* Sidebar Info */}
        <div className="flex flex-col gap-6">
           <div className="solid-card p-8 bg-blue-500/5 border-blue-500/20">
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                 <Zap className="w-4 h-4" /> Smart Features
              </h3>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                       <Sparkles className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-white mb-1">Key Phrase Extraction</h4>
                       <p className="text-xs text-[#9CA3AF]">AI identifies important lines while reading aloud.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                       <MessageSquare className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-white mb-1">Interactive Voice Q&A</h4>
                       <p className="text-xs text-[#9CA3AF]">Ask questions about the text using your voice.</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="solid-card p-8 border-[#1F2937] flex-1">
              <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-6">Voice History</h3>
              <div className="space-y-4">
                 {[
                   { title: 'Project Summary v1', time: '2h ago', lang: 'EN' },
                   { title: 'Ethics Board Notes', time: 'Yesterday', lang: 'HI' },
                   { title: 'Methodology Audio', time: '3 days ago', lang: 'EN' },
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-[#111827] transition-all cursor-pointer group">
                      <div className="flex items-center gap-3">
                         <Play className="w-3 h-3 text-[#4B5563] group-hover:text-blue-400" />
                         <span className="text-xs font-bold text-[#D1D5DB] group-hover:text-white">{item.title}</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#4B5563]">{item.lang}</span>
                   </div>
                 ))}
              </div>
           </div>

           <button className="btn-secondary w-full py-4 flex items-center justify-center gap-3">
              <Download className="w-4 h-4" /> Download Audio (MP3)
           </button>
        </div>

      </div>

    </div>
  );
}
