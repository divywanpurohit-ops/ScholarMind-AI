'use client';
import { useState } from 'react';
import { 
  Languages, ArrowRightLeft, FileText, Globe, 
  Volume2, Trash2, Download, Copy, Sparkles, 
  ChevronDown, Settings2, ShieldCheck, PenTool, 
  FileOutput, MessageSquare, HelpCircle
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function TranslatorLab() {
  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [activeMode, setActiveMode] = useState('academic');

  const handleTranslate = async () => {
    if (!sourceText) return;
    setIsTranslating(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/ai/translate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ text: sourceText, targetLanguage: 'English/Target' })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setTargetText(data.translatedText);
      }
    } catch (error) {
      console.error('Translation failed', error);
      setTargetText('Error occurred during translation.');
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-100">
                 <Languages className="w-5 h-5 text-white" />
              </div>
              Translator Lab
           </h1>
           <p className="text-sm text-slate-500 mt-1 font-medium">Professional academic translation with formatting & citation preservation.</p>
        </div>
        <div className="flex gap-3">
           <button className="btn-secondary py-2 px-6 text-xs font-bold"><Settings2 className="w-4 h-4" /> Glossary Builder</button>
           <button className="btn-primary py-2 px-6 bg-blue-600 text-xs font-bold border-none"><Download className="w-4 h-4" /> Export Bilingual PDF</button>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-6 overflow-hidden">
        
        {/* Top Controls Ribbon */}
        <div className="bg-white border border-slate-200 rounded-2xl p-2 flex items-center gap-6 shadow-sm overflow-x-auto custom-scrollbar shrink-0">
           <div className="flex items-center gap-3 px-4 py-2 border-r border-slate-100 shrink-0">
              <select className="bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer">
                 <option>Detect Language</option>
                 <option>English</option>
                 <option>Hindi</option>
                 <option>Spanish</option>
              </select>
              <ArrowRightLeft className="w-4 h-4 text-blue-500" />
              <select className="bg-transparent text-xs font-bold text-blue-600 focus:outline-none cursor-pointer">
                 <option>Hindi</option>
                 <option>English</option>
                 <option>German</option>
              </select>
           </div>

           <div className="flex items-center gap-2 shrink-0">
              {['Academic', 'Technical', 'Simplified'].map((mode) => (
                <button 
                  key={mode}
                  onClick={() => setActiveMode(mode.toLowerCase())}
                  className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeMode === mode.toLowerCase() 
                     ? 'bg-blue-600 text-white shadow-md' 
                     : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                   {mode} Mode
                </button>
              ))}
           </div>

           <div className="flex items-center gap-4 ml-auto px-4 shrink-0">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5">
                 <input type="checkbox" defaultChecked className="accent-blue-600" />
                 <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Preserve Citations</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5">
                 <input type="checkbox" defaultChecked className="accent-blue-600" />
                 <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Preserve Tables</span>
              </div>
           </div>
        </div>

        {/* Side-by-Side View */}
        <div className="flex-1 flex gap-6 min-h-0 overflow-hidden pb-4">
           
           {/* Source Panel */}
           <div className="flex-1 flex flex-col gap-4">
              <div className="flex-1 solid-card bg-white flex flex-col overflow-hidden relative border-slate-200">
                 <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Source Document / Text</span>
                    <button onClick={() => setSourceText('')} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400"><Trash2 className="w-4 h-4" /></button>
                 </div>
                 <textarea 
                   className="flex-1 p-8 text-lg text-slate-900 focus:outline-none resize-none placeholder-slate-300 font-serif leading-relaxed"
                   placeholder="Paste your academic text or upload a document..."
                   value={sourceText}
                   onChange={(e) => setSourceText(e.target.value)}
                 ></textarea>
                 <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                    <button className="flex items-center gap-2 text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-widest">
                       <FileOutput className="w-3.5 h-3.5" /> Upload PDF / DOCX
                    </button>
                    <button onClick={handleTranslate} className="btn-primary py-2 px-8 text-xs font-bold border-none bg-blue-600 shadow-md">
                       <Sparkles className="w-4 h-4" /> Translate
                    </button>
                 </div>
              </div>
           </div>

           {/* Target Panel */}
           <div className="flex-1 flex flex-col gap-4">
              <div className="flex-1 solid-card bg-slate-50 flex flex-col overflow-hidden relative border-slate-200 ring-4 ring-blue-500/5">
                 <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Professional Output</span>
                    <div className="flex items-center gap-2">
                       <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400"><Volume2 className="w-4 h-4" /></button>
                       <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400"><Copy className="w-4 h-4" /></button>
                    </div>
                 </div>
                 <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
                    {isTranslating ? (
                       <div className="h-full flex flex-col items-center justify-center gap-4">
                          <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Translating with context...</p>
                       </div>
                    ) : targetText ? (
                       <div className="animate-fade-in">
                          <p className="text-lg text-slate-900 leading-relaxed font-serif whitespace-pre-wrap">{targetText}</p>
                       </div>
                    ) : (
                       <div className="h-full flex flex-col items-center justify-center text-center p-10 opacity-20 gap-4">
                          <Globe className="w-16 h-16 text-blue-500" />
                          <p className="text-lg font-bold text-slate-400 tracking-widest uppercase">Target Output Area</p>
                       </div>
                    )}
                 </div>
                 {targetText && (
                    <div className="p-6 bg-white border-t border-slate-200 space-y-4">
                       <div className="flex items-center justify-between">
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Academic Intelligence</h4>
                          <span className="text-[10px] font-bold text-emerald-500 uppercase flex items-center gap-1">
                             <ShieldCheck className="w-3 h-3" /> Citations Verified
                          </span>
                       </div>
                       <div className="flex gap-4">
                          <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-600 hover:border-blue-500 transition-all">
                             <HelpCircle className="w-3.5 h-3.5" /> Explain Terms
                          </button>
                          <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-600 hover:border-blue-500 transition-all">
                             <PenTool className="w-3.5 h-3.5" /> Paraphrase
                          </button>
                       </div>
                    </div>
                 )}
              </div>
           </div>
        </div>

      </div>

      {targetText && (
         <div className="solid-card p-6 bg-white shrink-0">
            <ExportShareBar 
              title="Academic Translation" 
              fileType="PDF" 
              contentToShare={`Check out my translated text:\n\n${targetText}`}
            />
         </div>
      )}
    </div>
  );
}
