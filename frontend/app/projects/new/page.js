'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Plus, BookOpen, Quote, Languages, Target, 
  HelpCircle, FileText, ChevronRight, Sparkles,
  ArrowRight, Globe, Layers, Beaker, Terminal
} from 'lucide-react';

export default function NewProject() {
  const [formData, setFormData] = useState({
    title: '',
    topic: '',
    keywords: '',
    domain: '',
    objective: '',
    questions: '',
    notes: '',
    language: 'English',
    citationStyle: 'APA'
  });

  const handleStart = () => {
    // Redirect to Workspace
    window.location.href = '/projects/workspace';
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full max-w-5xl mx-auto pb-20">
      
      {/* Step Indicator */}
      <div className="flex items-center gap-4 mb-8">
         <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-blue-100">1</div>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">Project Init</span>
         </div>
         <div className="h-px w-12 bg-slate-200"></div>
         <div className="flex items-center gap-2 opacity-30">
            <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">2</div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Workspace</span>
         </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Core Fields */}
        <div className="flex-1 space-y-8">
           <div className="space-y-2">
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Create Academic Project</h1>
              <p className="text-sm text-slate-500 font-medium">Initialize your research project with global AI intelligence.</p>
           </div>

           <div className="space-y-6">
              {/* Title & Topic */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Project Title</label>
                    <input 
                      className="input-field" 
                      placeholder="E.g. Impact of Quantum AI on Medicine"
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Topic</label>
                    <input 
                      className="input-field" 
                      placeholder="Core research subject..."
                      onChange={(e) => setFormData({...formData, topic: e.target.value})}
                    />
                 </div>
              </div>

              {/* Domain & Keywords */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Research Domain</label>
                    <select className="input-field cursor-pointer">
                       <option>Science & Technology</option>
                       <option>Social Sciences</option>
                       <option>Medicine & Health</option>
                       <option>Arts & Humanities</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Keywords</label>
                    <input 
                      className="input-field" 
                      placeholder="Separated by commas..."
                      onChange={(e) => setFormData({...formData, keywords: e.target.value})}
                    />
                 </div>
              </div>

              {/* Objectives & Questions */}
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Research Objectives</label>
                 <textarea 
                    className="input-field min-h-[100px] py-4" 
                    placeholder="What do you aim to achieve?"
                    onChange={(e) => setFormData({...formData, objective: e.target.value})}
                 ></textarea>
              </div>

              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Research Questions</label>
                 <textarea 
                    className="input-field min-h-[100px] py-4" 
                    placeholder="List your core research questions..."
                    onChange={(e) => setFormData({...formData, questions: e.target.value})}
                 ></textarea>
              </div>
           </div>
        </div>

        {/* Right Column: Settings & CTA */}
        <div className="w-full lg:w-80 space-y-6 shrink-0">
           
           <div className="solid-card p-6 bg-white space-y-6">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                 <Terminal className="w-4 h-4 text-blue-600" /> Preferences
              </h3>

              <div className="space-y-4">
                 <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-1">Preferred Language</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs font-bold text-slate-600">
                       <option>English</option>
                       <option>Hindi</option>
                       <option>French</option>
                       <option>German</option>
                    </select>
                 </div>

                 <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-1">Citation Style</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs font-bold text-slate-600">
                       <option>APA</option>
                       <option>MLA</option>
                       <option>Chicago</option>
                       <option>Harvard</option>
                       <option>Vancouver</option>
                    </select>
                 </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                 <button 
                   onClick={handleStart}
                   className="w-full btn-primary bg-blue-600 py-4 shadow-xl shadow-blue-100 border-none group"
                 >
                    <span>START PROJECT</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
           </div>

           <div className="solid-card p-6 bg-blue-50 border-blue-100">
              <div className="flex items-center gap-2 mb-3">
                 <Sparkles className="w-4 h-4 text-blue-600" />
                 <h4 className="text-[10px] font-bold text-blue-800 uppercase tracking-widest">AI Recommendation</h4>
              </div>
              <p className="text-[10px] text-blue-600 font-medium leading-relaxed">
                 By filling these fields, ScholarMind AI will automatically curate a custom Knowledge Base and suggest relevant papers during your research.
              </p>
           </div>

        </div>
      </div>

    </div>
  );
}
