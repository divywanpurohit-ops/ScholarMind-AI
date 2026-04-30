'use client';
import { useState } from 'react';
import { UploadCloud, FileText, Search, Plus, Send, Bot, FileCheck, Layers, BrainCircuit, Maximize2, Minimize2 } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ProjectWorkspace() {
  const params = useParams();
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Quantum_Cryptography_Review_2025.pdf', size: '2.4 MB', date: 'Just now', type: 'pdf' },
    { id: 2, name: 'QKD_Protocol_Analysis.docx', size: '1.1 MB', date: '2 hours ago', type: 'docx' },
    { id: 3, name: 'Entanglement_Dataset_v3.csv', size: '8.4 MB', date: '1 day ago', type: 'csv' }
  ]);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello Dr. Researcher. I have analyzed your 3 documents. What would you like to explore today? I can generate a literature review, find research gaps, or summarize key findings.' }
  ]);
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Processing your request across the knowledge base...' }]);
      
      setTimeout(() => {
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { 
            role: 'assistant', 
            content: `Based on 'Quantum_Cryptography_Review_2025.pdf', the main limitation identified is the distance constraint in QKD protocols due to photon loss. The dataset in 'Entanglement_Dataset_v3.csv' suggests recent experiments have pushed this boundary to 500km under specific conditions.\n\nWould you like me to draft a methodology section based on this finding?` 
          };
          return newMessages;
        });
      }, 1500);
    }, 500);
  };

  return (
    <div className="h-full flex flex-col -m-2">
      {/* Workspace Header */}
      <div className="mb-4 px-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-heading flex items-center gap-2">
            <Layers className="w-6 h-6 text-indigo-400" />
            Project: Quantum Cryptography Applications
          </h1>
          <p className="text-text-secondary text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Knowledge Base Active • 3 Documents Indexed
          </p>
        </div>
      </div>

      <div className={`flex-1 flex gap-4 overflow-hidden px-4 pb-4 ${isExpanded ? 'flex-col md:flex-row' : 'flex-col md:flex-row'}`}>
        
        {/* Left Pane: Documents Library */}
        <div className={`glass flex flex-col overflow-hidden transition-all duration-300 ${isExpanded ? 'md:w-1/4' : 'md:w-1/3'}`}>
          <div className="p-4 border-b border-[var(--border-color)] bg-black/10 flex justify-between items-center">
            <h2 className="font-semibold flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-purple-400" />
              Document Library
            </h2>
            <button className="p-1.5 bg-indigo-500/20 text-indigo-400 rounded-lg hover:bg-indigo-500/30 transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <div className="p-4 border-b border-[var(--border-color)]">
            <div className="border-2 border-dashed border-[var(--border-color)] rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all cursor-pointer">
              <UploadCloud className="w-8 h-8 text-text-secondary mb-2" />
              <p className="text-sm font-medium">Drag & Drop Documents</p>
              <p className="text-xs text-text-secondary mt-1">PDF, DOCX, CSV, TXT up to 50MB</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
            {documents.map((doc) => (
              <div key={doc.id} className="p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group border border-transparent hover:border-[var(--border-color)]">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-black/20 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                    <FileText className="w-5 h-5 text-text-secondary group-hover:text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate" title={doc.name}>{doc.name}</p>
                    <div className="flex items-center gap-2 text-xs text-text-secondary mt-1">
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Pane: Smart Assistant / RAG Chat */}
        <div className={`glass flex flex-col overflow-hidden transition-all duration-300 border border-[var(--border-color)] ${isExpanded ? 'md:w-3/4' : 'md:w-2/3'}`}>
          <div className="p-4 border-b border-[var(--border-color)] bg-black/10 flex justify-between items-center relative overflow-hidden">
            <div className="relative z-10 flex items-center gap-3">
               <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <BrainCircuit className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">Research Copilot</h2>
                <p className="text-xs text-text-secondary">Connected to Workspace Knowledge Base</p>
              </div>
            </div>

            <div className="relative z-10 flex gap-2">
               <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 text-text-secondary hover:text-white transition-colors bg-black/20 rounded-lg"
                >
                 {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
               </button>
            </div>
            {/* Background gradient */}
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none"></div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-indigo-400" />
                  </div>
                )}
                
                <div className={`max-w-[80%] rounded-2xl px-5 py-4 ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20' 
                    : 'bg-black/20 border border-[var(--border-color)] text-text-primary'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>
                
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">DR</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-[var(--border-color)] bg-black/20">
            <form onSubmit={handleSendMessage} className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your documents, generate insights, or write a draft..." 
                className="input-field w-full pl-4 pr-12 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-inner text-[15px]"
              />
              <button 
                type="submit" 
                disabled={!input.trim()}
                className={`absolute right-2 top-2 p-2 rounded-lg transition-all ${
                  input.trim() ? 'bg-indigo-500 text-white hover:scale-105 shadow-md shadow-indigo-500/20' : 'bg-transparent text-text-secondary'
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <div className="flex items-center gap-2 mt-3 px-1">
               <span className="text-xs text-text-secondary">Quick Actions:</span>
               <button className="text-xs px-2 py-1 rounded bg-black/30 border border-[var(--border-color)] hover:bg-black/50 text-indigo-300">Summarize All</button>
               <button className="text-xs px-2 py-1 rounded bg-black/30 border border-[var(--border-color)] hover:bg-black/50 text-purple-300">Find Research Gap</button>
               <button className="text-xs px-2 py-1 rounded bg-black/30 border border-[var(--border-color)] hover:bg-black/50 text-emerald-300">Generate Abstract</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
