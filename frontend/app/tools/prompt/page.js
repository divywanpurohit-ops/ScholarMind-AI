'use client';
import { useState } from 'react';
import { Bot, Terminal, Copy, Check, Sparkles, Wand2 } from 'lucide-react';

export default function PromptStudio() {
  const [goal, setGoal] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!goal) return;
    setIsGenerating(true);
    
    setTimeout(() => {
      setResult(`You are an expert academic researcher and peer reviewer specializing in ${goal.split(' ').slice(0,3).join(' ')}...

Your task is to comprehensively analyze the provided literature and generate a highly structured, critical literature review.

Please adhere to the following constraints:
1. Use an objective, formal academic tone (e.g., APA 7th edition standards).
2. Avoid generic summaries; instead, focus on synthesizing contrasting viewpoints, methodological flaws, and highlighting the specific research gaps.
3. Structure the output into: Introduction, Thematic Analysis, Methodological Critique, and Future Directions.
4. Ensure all claims are strictly tied to the source texts provided. Do not hallucinate external citations.

Take a deep breath and work on this step-by-step.`);
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-fade-in h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold font-heading flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-lg">
            <Bot className="w-5 h-5 text-white" />
          </div>
          Prompt Studio
        </h1>
        <p className="text-text-secondary mt-2">Engineer the perfect prompts for ChatGPT, Claude, and Gemini for academic use cases.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Panel: Input */}
        <div className="glass p-6 rounded-xl border border-[var(--border-color)] flex flex-col">
          <div className="space-y-6 flex-1">
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">What do you want the AI to do?</label>
              <textarea 
                rows="3"
                className="input-field resize-none text-lg"
                placeholder="E.g. Write a literature review on machine learning in healthcare..."
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">Target Audience / Output Format</label>
              <select className="input-field text-sm cursor-pointer">
                <option>Academic Journal (Peer-Reviewed)</option>
                <option>Grant Proposal</option>
                <option>Conference Abstract</option>
                <option>University Assignment (Undergrad)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">Constraints & Nuances</label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2 p-3 bg-black/20 border border-[var(--border-color)] rounded-lg cursor-pointer hover:bg-white/5">
                  <input type="checkbox" className="accent-teal-500" defaultChecked />
                  <span className="text-sm">Prevent Hallucinations</span>
                </label>
                <label className="flex items-center gap-2 p-3 bg-black/20 border border-[var(--border-color)] rounded-lg cursor-pointer hover:bg-white/5">
                  <input type="checkbox" className="accent-teal-500" defaultChecked />
                  <span className="text-sm">Force Step-by-Step</span>
                </label>
                <label className="flex items-center gap-2 p-3 bg-black/20 border border-[var(--border-color)] rounded-lg cursor-pointer hover:bg-white/5">
                  <input type="checkbox" className="accent-teal-500" />
                  <span className="text-sm">Include Citations</span>
                </label>
                <label className="flex items-center gap-2 p-3 bg-black/20 border border-[var(--border-color)] rounded-lg cursor-pointer hover:bg-white/5">
                  <input type="checkbox" className="accent-teal-500" defaultChecked />
                  <span className="text-sm">Objective Tone</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--border-color)]">
            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !goal}
              className="btn w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white flex items-center justify-center gap-2 py-3 shadow-lg shadow-teal-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <><Sparkles className="w-5 h-5 animate-spin" /> Crafting Prompt...</>
              ) : (
                <><Wand2 className="w-5 h-5" /> Engineer Prompt</>
              )}
            </button>
          </div>
        </div>

        {/* Right Panel: Output */}
        <div className="glass flex flex-col rounded-xl border border-teal-500/30 overflow-hidden relative bg-black/40">
           <div className="p-4 border-b border-[var(--border-color)] bg-black/40 flex justify-between items-center backdrop-blur-md">
             <h2 className="font-semibold flex items-center gap-2 text-teal-400 font-mono">
               <Terminal className="w-4 h-4" />
               Optimized_System_Prompt.txt
             </h2>
             {result && (
               <button 
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-md border border-[var(--border-color)]"
                >
                 {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                 {copied ? 'Copied to Clipboard' : 'Copy Prompt'}
               </button>
             )}
          </div>

          <div className="flex-1 p-6 overflow-y-auto custom-scrollbar font-mono text-sm leading-relaxed text-teal-50/80">
            {!result && !isGenerating ? (
              <div className="h-full flex flex-col items-center justify-center text-text-secondary/30">
                <Bot className="w-16 h-16 mb-4" />
                <p className="font-sans text-base">Your engineered prompt will appear here.</p>
              </div>
            ) : isGenerating ? (
               <div className="h-full flex flex-col items-start text-teal-400/50">
                  <p className="animate-pulse">Analyzing user intent...</p>
                  <p className="animate-pulse delay-75">Applying academic framework heuristics...</p>
                  <p className="animate-pulse delay-150">Injecting constraint guards...</p>
                  <p className="animate-pulse delay-300 mt-4">&gt; Generating...</p>
               </div>
            ) : (
              <div className="whitespace-pre-wrap">{result}</div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
