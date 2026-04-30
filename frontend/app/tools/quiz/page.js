'use client';
import { useState } from 'react';
import { 
  HelpCircle, CheckCircle2, XCircle, Sparkles, 
  RotateCcw, Download, ChevronRight, FileText,
  Brain, Zap, MessageSquare, Target, ListChecks,
  Mic, Clock, Save, Share2
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function QuizGenerator() {
  const [source, setSource] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [activeType, setActiveType] = useState('mcq');

  const handleGenerate = () => {
    if (!source) return;
    setIsGenerating(true);
    setTimeout(() => {
      setQuiz([
        { q: "What is the primary role of mitochondria in a cell?", options: ["Energy Production", "Protein Synthesis", "DNA Replication", "Waste Management"], ans: 0 },
        { q: "Which enzyme is responsible for DNA unwinding?", options: ["Helicase", "Polymerase", "Ligase", "Primase"], ans: 0 }
      ]);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-100">
                 <HelpCircle className="w-5 h-5 text-white" />
              </div>
              Quiz & MCQ Generator
           </h1>
           <p className="text-sm text-slate-500 mt-1 font-medium">Transform any research paper or notes into Quizzes, Viva questions, and MCQs.</p>
        </div>
        <div className="flex gap-3">
           <button className="btn-secondary py-2 px-6 text-xs font-bold"><Clock className="w-4 h-4" /> Past Quizzes</button>
           <button className="btn-primary py-2 px-6 bg-orange-600 text-xs font-bold border-none shadow-md">
             <Download className="w-4 h-4" /> Export as QTI/PDF
           </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden pb-4">
        
        {/* Left Side: Input & Settings */}
        <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0 overflow-y-auto custom-scrollbar pr-2">
           <div className="solid-card p-6 bg-white space-y-6">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                 <Brain className="w-4 h-4 text-orange-600" /> Source Content
              </h3>
              <textarea 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-900 focus:outline-none focus:border-orange-500 transition-all min-h-[150px]"
                placeholder="Paste your research abstract, notes, or chapter content here..."
                value={source}
                onChange={(e) => setSource(e.target.value)}
              ></textarea>
              
              <div className="space-y-4 pt-4 border-t border-slate-100">
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Question Type</h4>
                 <div className="flex flex-col gap-2">
                    {[
                      { id: 'mcq', label: 'MCQs', icon: ListChecks },
                      { id: 'viva', label: 'Viva Questions', icon: Mic },
                      { id: 'flash', label: 'Flashcards', icon: Zap }
                    ].map(type => (
                       <button 
                         key={type.id}
                         onClick={() => setActiveType(type.id)}
                         className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                           activeType === type.id ? 'bg-orange-50 border-orange-200 text-orange-700' : 'bg-slate-50 border-transparent text-slate-500 hover:bg-white hover:border-slate-200'
                         }`}
                       >
                          <type.icon className="w-4 h-4" />
                          <span className="text-[11px] font-bold uppercase">{type.label}</span>
                       </button>
                    ))}
                 </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full btn-primary bg-orange-600 py-4 shadow-xl shadow-orange-100 border-none flex items-center justify-center gap-3 group"
              >
                 {isGenerating ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Sparkles className="w-4 h-4 group-hover:scale-125 transition-transform" />}
                 GENERATE QUESTIONS
              </button>
           </div>
        </div>

        {/* Right Side: Quiz Output */}
        <div className="flex-1 flex flex-col gap-6 min-h-0 overflow-hidden">
           <div className="flex-1 solid-card bg-white flex flex-col overflow-hidden border-slate-200">
              {!quiz ? (
                 <div className="h-full flex flex-col items-center justify-center text-center p-10 opacity-30 gap-6">
                    {isGenerating ? (
                       <div className="flex flex-col items-center gap-6">
                          <div className="relative w-20 h-20">
                             <div className="absolute inset-0 border-4 border-orange-50 rounded-full"></div>
                             <div className="absolute inset-0 border-4 border-orange-600 rounded-full border-t-transparent animate-spin"></div>
                             <Target className="absolute inset-0 m-auto w-8 h-8 text-orange-600 animate-pulse" />
                          </div>
                          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest">Extracting core concepts...</p>
                       </div>
                    ) : (
                       <>
                          <HelpCircle className="w-20 h-20 text-slate-200" />
                          <p className="text-xl font-bold text-slate-300 tracking-widest uppercase">Awaiting Quiz Generation</p>
                       </>
                    )}
                 </div>
              ) : (
                 <div className="flex-1 p-10 overflow-y-auto custom-scrollbar animate-fade-in space-y-8">
                    {quiz.map((item, qIdx) => (
                       <div key={qIdx} className="solid-card p-8 bg-slate-50 border-slate-100 space-y-6">
                          <div className="flex items-start justify-between">
                             <h3 className="text-lg font-bold text-slate-900 leading-tight pr-10">
                                <span className="text-orange-600 mr-2">Q{qIdx + 1}.</span> {item.q}
                             </h3>
                             <div className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-bold uppercase">Difficulty: Mid</div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                             {item.options.map((opt, oIdx) => (
                                <button key={oIdx} className="p-4 rounded-2xl bg-white border border-slate-200 text-left text-xs font-medium text-slate-600 hover:border-orange-500 hover:bg-orange-50 transition-all flex items-center justify-between group">
                                   <span>{opt}</span>
                                   <div className="w-4 h-4 rounded-full border border-slate-200 group-hover:border-orange-500"></div>
                                </button>
                             ))}
                          </div>
                       </div>
                    ))}
                    
                    <div className="flex justify-center pt-6">
                       <button onClick={() => setQuiz(null)} className="btn-secondary py-3 px-10 text-xs font-bold flex items-center gap-2">
                          <RotateCcw className="w-4 h-4" /> Reset and Try Again
                       </button>
                    </div>
                 </div>
              )}
           </div>

           {quiz && (
              <div className="solid-card p-6 bg-white shrink-0">
                 <ExportShareBar title="Academic Quiz Export" fileType="PDF" />
              </div>
           )}
        </div>

      </div>

    </div>
  );
}
