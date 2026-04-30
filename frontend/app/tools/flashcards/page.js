'use client';
import { useState } from 'react';
import { 
  Brain, HelpCircle, Sparkles, Loader2, 
  ChevronLeft, ChevronRight, RefreshCw, 
  CheckCircle2, XCircle, BookOpen, Download, 
  Rotate3d, Trash2, Award
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function FlashcardsLab() {
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('flashcards');
  const [cards, setCards] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleGenerate = () => {
    if (!input) return;
    setIsGenerating(true);
    setCards([]);
    setQuizzes([]);
    
    setTimeout(() => {
      setIsGenerating(false);
      if (activeTab === 'flashcards') {
        setCards([
          { front: "What is CRISPR-Cas9?", back: "A revolutionary gene-editing tool that allows scientists to precisely alter DNA sequences and modify gene function." },
          { front: "Define Quantum Entanglement.", back: "A physical phenomenon that occurs when a pair or group of particles is generated, interact, or share spatial proximity in a way such that the quantum state of each particle of the pair or group cannot be described independently of the state of the others." },
          { front: "What is the Central Dogma of Molecular Biology?", back: "The process by which the instructions in DNA are converted into a functional product (DNA -> RNA -> Protein)." },
          { front: "Explain Schrödinger's Cat.", back: "A thought experiment that illustrates the paradox of quantum superposition, where a cat in a box can be simultaneously alive and dead until observed." }
        ]);
      } else {
        setQuizzes([
          { 
            q: "Which scientist is primary associated with the theory of General Relativity?", 
            options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Niels Bohr"],
            ans: 1
          },
          { 
            q: "In molecular biology, what does the 'U' stand for in RNA?", 
            options: ["Uracil", "Uridine", "Uranium", "Universal"],
            ans: 0
          }
        ]);
      }
      setCurrentIndex(0);
      setScore(0);
      setUserAnswer(null);
    }, 2000);
  };

  return (
    <div className="animate-fade-in h-full flex flex-col w-full">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading flex items-center gap-3 text-white">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Brain className="w-6 h-6 text-white" />
            </div>
            Flashcards & Quiz Lab
          </h1>
          <p className="text-[#9CA3AF] mt-2 font-medium flex items-center gap-2">
            Active recall study tool. Generate interactive cards and quizzes from your research.
            <span className="px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold border border-orange-500/20">Learning Studio</span>
          </p>
        </div>
        
        {(cards.length > 0 || quizzes.length > 0) && (
          <button className="btn-secondary text-sm" onClick={() => {setCards([]); setQuizzes([]); setInput('');}}>
            <Trash2 className="w-4 h-4 text-rose-400" /> New Study Session
          </button>
        )}
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-[600px]">
        
        {/* Input Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-6 h-full">
          <div className="solid-card p-6 flex-1 bg-[#0B0F19]/50 border-[#1F2937]">
            <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-6">Study Material</h3>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-xs font-bold text-[#F3F4F6] uppercase">Paste Content</label>
                <textarea 
                  rows="10"
                  className="w-full bg-[#030712] border border-[#1F2937] rounded-xl p-4 text-sm text-white focus:outline-none focus:border-orange-500 transition-all resize-none placeholder-[#4B5563]"
                  placeholder="Paste your paper summary, notes, or article text here to generate flashcards or a quiz..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                ></textarea>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-[#F3F4F6] uppercase">Study Mode</label>
                <div className="grid grid-cols-1 gap-2">
                  <button 
                    onClick={() => setActiveTab('flashcards')}
                    className={`flex items-center gap-3 w-full p-3 rounded-xl border transition-all text-sm font-bold ${
                      activeTab === 'flashcards' 
                        ? 'bg-orange-500/10 border-orange-500/40 text-orange-400 shadow-inner' 
                        : 'bg-[#030712] border-[#1F2937] text-[#9CA3AF] hover:border-[#374151] hover:text-white'
                    }`}
                  >
                    <Rotate3d className="w-4 h-4" /> 3D Flashcards
                  </button>
                  <button 
                    onClick={() => setActiveTab('quiz')}
                    className={`flex items-center gap-3 w-full p-3 rounded-xl border transition-all text-sm font-bold ${
                      activeTab === 'quiz' 
                        ? 'bg-amber-500/10 border-amber-500/40 text-amber-400 shadow-inner' 
                        : 'bg-[#030712] border-[#1F2937] text-[#9CA3AF] hover:border-[#374151] hover:text-white'
                    }`}
                  >
                    <HelpCircle className="w-4 h-4" /> AI Quizzer (MCQ)
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !input}
            className="btn-primary w-full py-4 text-lg bg-gradient-to-r from-orange-600 to-amber-600 shadow-xl shadow-orange-600/20 flex items-center justify-center gap-3 border-none"
          >
            {isGenerating ? (
              <><Loader2 className="w-6 h-6 animate-spin" /> SYNTHESIZING...</>
            ) : (
              <><Sparkles className="w-6 h-6" /> GENERATE STUDY SET</>
            )}
          </button>
        </div>

        {/* Interactive Workspace */}
        <div className="lg:col-span-3 flex flex-col gap-6 h-full">
           <div className="flex-1 solid-card bg-[#0B0F19]/50 overflow-hidden relative border-[#1F2937] flex items-center justify-center p-10">
              
              {!isGenerating && cards.length === 0 && quizzes.length === 0 ? (
                 <div className="text-center text-[#4B5563] max-w-sm animate-fade-in">
                    <Award className="w-24 h-24 mx-auto mb-6 opacity-5" />
                    <h3 className="text-xl font-bold text-[#6B7280] mb-2">Master Your Content</h3>
                    <p className="text-sm font-medium">Use AI to generate active recall materials. Perfect for exams and thesis defense preparation.</p>
                 </div>
              ) : isGenerating ? (
                 <div className="text-center flex flex-col items-center gap-6">
                    <div className="relative">
                       <Loader2 className="w-16 h-16 animate-spin text-orange-500 opacity-20" />
                       <Brain className="w-8 h-8 text-orange-400 absolute inset-0 m-auto animate-pulse" />
                    </div>
                    <div className="space-y-1">
                       <p className="text-orange-400 font-bold text-xl uppercase tracking-widest">Generating Study Set...</p>
                       <p className="text-[#6B7280] text-sm italic">Identifying key concepts and definitions...</p>
                    </div>
                 </div>
              ) : activeTab === 'flashcards' && cards.length > 0 ? (
                 <div className="w-full max-w-2xl h-[450px] flex flex-col gap-8 animate-fade-in">
                    {/* Perspective Container */}
                    <div className="flex-1 perspective-1000">
                       <div 
                         onClick={() => setIsFlipped(!isFlipped)}
                         className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
                       >
                          {/* Front Side */}
                          <div className="absolute inset-0 backface-hidden solid-card bg-[#030712] border-orange-500/30 flex flex-col items-center justify-center p-10 text-center shadow-2xl">
                             <div className="absolute top-6 left-6 text-[10px] font-bold text-orange-500 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">QUESTION</div>
                             <h3 className="text-2xl font-bold text-white leading-relaxed font-serif italic">
                                {cards[currentIndex].front}
                             </h3>
                             <p className="absolute bottom-6 text-[10px] text-[#4B5563] font-bold uppercase tracking-widest">Click to reveal answer</p>
                          </div>
                          {/* Back Side */}
                          <div className="absolute inset-0 backface-hidden rotate-y-180 solid-card bg-gradient-to-br from-[#111827] to-[#030712] border-emerald-500/30 flex flex-col items-center justify-center p-10 text-center shadow-2xl">
                             <div className="absolute top-6 left-6 text-[10px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">EXPLANATION</div>
                             <p className="text-xl font-medium text-[#D1D5DB] leading-relaxed">
                                {cards[currentIndex].back}
                             </p>
                             <div className="absolute bottom-6 flex gap-4">
                                <button className="text-[10px] font-bold text-[#4B5563] hover:text-white uppercase tracking-widest">Need more practice</button>
                                <span className="text-[#1F2937]">|</span>
                                <button className="text-[10px] font-bold text-emerald-400 hover:text-emerald-300 uppercase tracking-widest">I Got This!</button>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between">
                       <button 
                         disabled={currentIndex === 0}
                         onClick={() => {setCurrentIndex(currentIndex - 1); setIsFlipped(false);}}
                         className="p-3 rounded-full bg-[#111827] border border-[#1F2937] text-white disabled:opacity-20 transition-all hover:border-orange-500/50"
                       >
                          <ChevronLeft className="w-6 h-6" />
                       </button>
                       <div className="text-sm font-bold text-[#6B7280]">
                          <span className="text-white">{currentIndex + 1}</span> / {cards.length}
                       </div>
                       <button 
                         disabled={currentIndex === cards.length - 1}
                         onClick={() => {setCurrentIndex(currentIndex + 1); setIsFlipped(false);}}
                         className="p-3 rounded-full bg-[#111827] border border-[#1F2937] text-white disabled:opacity-20 transition-all hover:border-orange-500/50"
                       >
                          <ChevronRight className="w-6 h-6" />
                       </button>
                    </div>
                 </div>
              ) : activeTab === 'quiz' && quizzes.length > 0 ? (
                 <div className="w-full max-w-3xl flex flex-col gap-8 animate-fade-in">
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-[#1F2937] rounded-full overflow-hidden">
                       <div className="h-full bg-amber-500 transition-all duration-500" style={{ width: `${((currentIndex + 1) / quizzes.length) * 100}%` }}></div>
                    </div>

                    <div className="solid-card p-10 bg-[#030712] border-[#1F2937] shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4">
                          <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 uppercase tracking-widest">Question {currentIndex + 1}</span>
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-10 leading-relaxed max-w-2xl">
                          {quizzes[currentIndex].q}
                       </h3>
                       
                       <div className="grid grid-cols-1 gap-4">
                          {quizzes[currentIndex].options.map((opt, i) => (
                             <button 
                                key={i}
                                disabled={userAnswer !== null}
                                onClick={() => {
                                   setUserAnswer(i);
                                   if (i === quizzes[currentIndex].ans) setScore(score + 1);
                                }}
                                className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all font-bold ${
                                   userAnswer === null 
                                     ? 'bg-[#111827] border-[#1F2937] text-[#D1D5DB] hover:border-amber-500/50 hover:bg-amber-500/5 group' 
                                     : i === quizzes[currentIndex].ans
                                       ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
                                       : userAnswer === i
                                         ? 'bg-rose-500/10 border-rose-500/50 text-rose-400'
                                         : 'bg-[#111827] border-[#1F2937] opacity-40'
                                }`}
                             >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                                   userAnswer === null 
                                     ? 'border-[#1F2937] group-hover:border-amber-500/30' 
                                     : i === quizzes[currentIndex].ans
                                       ? 'bg-emerald-500 border-emerald-500 text-white'
                                       : userAnswer === i
                                         ? 'bg-rose-500 border-rose-500 text-white'
                                         : 'border-[#1F2937]'
                                }`}>
                                   {userAnswer !== null && i === quizzes[currentIndex].ans ? <CheckCircle2 className="w-5 h-5" /> : userAnswer === i ? <XCircle className="w-5 h-5" /> : String.fromCharCode(65 + i)}
                                </div>
                                <span>{opt}</span>
                             </button>
                          ))}
                       </div>
                    </div>

                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <Award className="w-6 h-6 text-amber-400" />
                          <span className="text-sm font-bold text-[#9CA3AF]">Current Score: <strong className="text-white">{score}</strong></span>
                       </div>
                       <button 
                         disabled={userAnswer === null}
                         onClick={() => {
                            if (currentIndex < quizzes.length - 1) {
                               setCurrentIndex(currentIndex + 1);
                               setUserAnswer(null);
                            } else {
                               alert(`Quiz Complete! Final Score: ${score}/${quizzes.length}`);
                            }
                         }}
                         className="btn-primary py-3 px-8 text-sm shadow-xl shadow-amber-600/20"
                       >
                          {currentIndex < quizzes.length - 1 ? 'Next Question' : 'Finish Quiz'} <ChevronRight className="w-4 h-4" />
                       </button>
                    </div>
                 </div>
              ) : null}
           </div>

           {/* Export Study Guide */}
           {(cards.length > 0 || quizzes.length > 0) && !isGenerating && (
              <div className="flex items-center justify-between">
                 <div className="flex-1 max-w-md">
                    <ExportShareBar title="Study Guide & Flashcards" fileType="PDF" />
                 </div>
                 <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-orange-400" /> Powered by ScholarMind Active Recall
                 </div>
              </div>
           )}
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </div>
  );
}
