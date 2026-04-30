'use client';
import { 
  Sparkles, MessageSquare, Lightbulb, Presentation, Video, 
  BarChart3, FileText, Send
} from 'lucide-react';
import { useState } from 'react';

export default function AICopilot() {
  const [query, setQuery] = useState('');

  const suggestions = [
    { icon: Lightbulb, text: 'Suggest workflow' },
    { icon: FileText, text: 'Summarize project' },
    { icon: Presentation, text: 'Create presentation' },
    { icon: Video, text: 'Build video script' },
    { icon: BarChart3, text: 'Analyze data' },
  ];

  return (
    <div className="w-[320px] bg-[#030712] border-l border-[#1F2937] h-full flex flex-col shrink-0 z-20 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.5)]">
      
      {/* Header */}
      <div className="h-[64px] flex items-center px-5 border-b border-[#1F2937] shrink-0 bg-gradient-to-r from-[#030712] to-[#0B0F19]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
            <Sparkles className="w-4 h-4 text-indigo-400" />
          </div>
          <span className="text-[15px] font-bold tracking-wide text-white font-heading">AI Copilot</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-5 flex flex-col">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-indigo-500/20">
             <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-1">How can I help?</h3>
          <p className="text-xs text-[#9CA3AF]">Your personal research assistant</p>
        </div>

        {/* Suggestions */}
        <div className="space-y-2 mb-8">
          {suggestions.map((item, idx) => (
            <button key={idx} className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#111827] border border-[#1F2937] hover:border-indigo-500/50 hover:bg-[#1F2937] transition-all text-left group">
              <item.icon className="w-4 h-4 text-[#9CA3AF] group-hover:text-indigo-400 transition-colors" />
              <span className="text-xs font-medium text-[#D1D5DB] group-hover:text-white transition-colors">{item.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-[#1F2937] bg-[#030712] shrink-0">
        <div className="relative">
          <textarea 
            rows="2"
            placeholder="Ask anything or paste a document..."
            className="w-full bg-[#111827] border border-[#1F2937] rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none shadow-inner custom-scrollbar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></textarea>
          <button 
            className={`absolute bottom-3 right-3 p-2 rounded-lg transition-colors ${
              query ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-[#1F2937] text-[#9CA3AF]'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
