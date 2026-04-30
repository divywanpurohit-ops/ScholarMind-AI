'use client';
import { useState } from 'react';
import { BookMarked, Search, Plus, Edit3, Type, List, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function SmartNotes() {
  const [activeNote, setActiveNote] = useState(null);
  const notes = [
    { id: 1, title: 'Literature Review Ideas', preview: 'Focus heavily on the BB84 protocol limitations. Compare with E91 protocol...', tags: ['Review', 'Crypto'], color: 'border-l-indigo-500' },
    { id: 2, title: 'Meeting with Supervisor', preview: 'Discuss the timeline for the final draft. Need to clarify the statistical methods used in Chapter 3.', tags: ['Admin', 'Meeting'], color: 'border-l-pink-500' },
    { id: 3, title: 'Experiment 4b Observations', preview: 'The photon detector efficiency dropped by 14% after 3 hours of continuous operation at 4K.', tags: ['Lab', 'Data'], color: 'border-l-emerald-500' },
    { id: 4, title: 'Hypothesis Drafts', preview: 'H1: Integrating XYZ will reduce error rates by 20%.\nH2: The standard deviation will remain constant under...', tags: ['Draft'], color: 'border-l-orange-500' },
  ];

  return (
    <div className="animate-fade-in h-full flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold font-heading flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center shadow-lg">
            <BookMarked className="w-5 h-5 text-white" />
          </div>
          Smart Notes
        </h1>
        <button className="btn btn-primary flex items-center gap-2 shadow-lg shadow-orange-500/20">
          <Plus className="w-4 h-4" /> New Note
        </button>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden">
        
        {/* Left: Notes Masonry / List */}
        <div className="w-1/3 flex flex-col gap-4 overflow-hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search notes, tags, or content..." 
              className="input-field pl-10 glass border-[var(--border-color)]"
            />
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-4">
            {notes.map(note => (
              <div 
                key={note.id} 
                onClick={() => setActiveNote(note.id)}
                className={`glass p-5 rounded-xl border border-[var(--border-color)] cursor-pointer hover:-translate-y-1 transition-all shadow-md ${note.color} border-l-4 ${activeNote === note.id ? 'bg-white/5 border-white/20' : ''}`}
              >
                <h3 className="font-semibold text-lg mb-2 text-text-primary">{note.title}</h3>
                <p className="text-sm text-text-secondary line-clamp-3 mb-4 leading-relaxed">{note.preview}</p>
                <div className="flex gap-2">
                  {note.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-black/30 rounded-md border border-[var(--border-color)] text-text-secondary">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Rich Editor */}
        <div className="w-2/3 glass flex flex-col rounded-xl border border-[var(--border-color)] overflow-hidden relative">
          {!activeNote ? (
             <div className="flex-1 flex flex-col items-center justify-center text-text-secondary/50">
                <Edit3 className="w-16 h-16 mb-4 opacity-30" />
                <p>Select a note or create a new one to start writing.</p>
             </div>
          ) : (
            <div className="flex-1 flex flex-col relative animate-fade-in">
               {/* Toolbar */}
               <div className="p-3 border-b border-[var(--border-color)] bg-black/20 flex gap-2 overflow-x-auto">
                 <button className="p-2 text-text-secondary hover:text-white rounded hover:bg-white/5"><Type className="w-4 h-4" /></button>
                 <button className="p-2 text-text-secondary hover:text-white rounded hover:bg-white/5 font-bold">B</button>
                 <button className="p-2 text-text-secondary hover:text-white rounded hover:bg-white/5 italic">I</button>
                 <div className="w-px h-6 bg-[var(--border-color)] mx-1 self-center"></div>
                 <button className="p-2 text-text-secondary hover:text-white rounded hover:bg-white/5"><List className="w-4 h-4" /></button>
                 <button className="p-2 text-text-secondary hover:text-white rounded hover:bg-white/5"><ImageIcon className="w-4 h-4" /></button>
                 <div className="ml-auto">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-lg text-sm border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors">
                      <Sparkles className="w-4 h-4" /> AI Summarize
                    </button>
                 </div>
               </div>

               {/* Editor Area */}
               <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
                  <input 
                    type="text" 
                    className="w-full bg-transparent text-3xl font-bold font-heading text-white focus:outline-none mb-6 placeholder-text-secondary/30"
                    value={notes.find(n => n.id === activeNote).title}
                    readOnly
                  />
                  <textarea 
                    className="w-full h-[500px] bg-transparent text-lg text-text-primary focus:outline-none resize-none leading-relaxed placeholder-text-secondary/30"
                    value={notes.find(n => n.id === activeNote).preview}
                    readOnly
                  ></textarea>
               </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
