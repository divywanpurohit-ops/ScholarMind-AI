'use client';
import { useState } from 'react';
import { FileText, Plus, Search, BrainCircuit, CheckCircle2, Loader2, ListOrdered, FileCheck, X } from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function MultiPaperSummarizer() {
  const [step, setStep] = useState(1);
  const [selectedPapers, setSelectedPapers] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState(null);

  const mockLibrary = [
    { id: 1, title: "CRISPR-Cas9 in Gene Editing: A Review", date: "2024-01-15", author: "Smith et al." },
    { id: 2, title: "Off-target Effects of CRISPR Vectors", date: "2023-11-02", author: "Johnson et al." },
    { id: 3, title: "Ethical Implications of Genomic Engineering", date: "2024-02-28", author: "Williams" },
    { id: 4, title: "Next-Gen Delivery Methods for Cas9", date: "2023-09-14", author: "Chen et al." }
  ];

  const handleSelect = (paper) => {
    if (selectedPapers.find(p => p.id === paper.id)) {
      setSelectedPapers(selectedPapers.filter(p => p.id !== paper.id));
    } else {
      setSelectedPapers([...selectedPapers, paper]);
    }
  };

  const handleGenerate = () => {
    if (selectedPapers.length === 0) return;
    setIsGenerating(true);
    setStep(2);
    
    setTimeout(() => {
      setIsGenerating(false);
      setResult({
        summary: "Across the selected papers, there is a consensus that while CRISPR-Cas9 offers unprecedented precision in genomic editing, off-target effects and delivery mechanisms remain significant hurdles. Johnson et al. and Chen et al. highlight that novel viral vectors reduce off-target mutations by 40% compared to traditional methods.",
        conclusion: "The combined literature suggests that the future of CRISPR therapies lies not in the enzyme itself, but in the refinement of delivery vehicles. Ethical frameworks (as discussed by Williams) must evolve simultaneously with these delivery mechanisms before clinical trials can expand globally."
      });
      setStep(3);
    }, 3000);
  };

  return (
    <div className="space-y-6 pb-12 w-full max-w-5xl mx-auto pt-4">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#ececec] mb-2 flex items-center gap-2">
          <ListOrdered className="w-6 h-6 text-[#4f46e5]" /> Multi-Paper Summarizer
        </h1>
        <p className="text-[#a3a3a3] text-sm">Select multiple research papers to generate a single, comprehensive summary and conclusion.</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center gap-4 mb-8 bg-[#171717] p-4 rounded-xl border border-[#383838]">
        <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#4f46e5]' : 'text-[#a3a3a3]'}`}>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-[#4f46e5]/20' : 'bg-[#2f2f2f]'}`}>1</div>
          <span className="text-sm font-medium">Select Papers</span>
        </div>
        <div className="flex-1 h-px bg-[#383838]"></div>
        <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#4f46e5]' : 'text-[#a3a3a3]'}`}>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-[#4f46e5]/20' : 'bg-[#2f2f2f]'}`}>2</div>
          <span className="text-sm font-medium">AI Analysis</span>
        </div>
        <div className="flex-1 h-px bg-[#383838]"></div>
        <div className={`flex items-center gap-2 ${step >= 3 ? 'text-emerald-400' : 'text-[#a3a3a3]'}`}>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 3 ? 'bg-emerald-400/20' : 'bg-[#2f2f2f]'}`}>3</div>
          <span className="text-sm font-medium">Results</span>
        </div>
      </div>

      {/* Step 1: Select Papers */}
      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="solid-card p-5">
            <h3 className="text-[#ececec] font-semibold mb-4 flex items-center gap-2">
              <Search className="w-4 h-4 text-[#a3a3a3]" /> Available Documents
            </h3>
            <div className="space-y-3">
              {mockLibrary.map(paper => (
                <div 
                  key={paper.id}
                  onClick={() => handleSelect(paper)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedPapers.find(p => p.id === paper.id) 
                      ? 'bg-[#4f46e5]/10 border-[#4f46e5]' 
                      : 'bg-[#212121] border-[#383838] hover:border-[#a3a3a3]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <FileText className={`w-5 h-5 shrink-0 ${selectedPapers.find(p => p.id === paper.id) ? 'text-[#4f46e5]' : 'text-[#a3a3a3]'}`} />
                    <div>
                      <p className="text-sm text-[#ececec] font-medium leading-tight mb-1">{paper.title}</p>
                      <p className="text-xs text-[#a3a3a3]">{paper.author} • {paper.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 py-3 border border-dashed border-[#383838] rounded-lg text-[#a3a3a3] hover:text-[#ececec] hover:border-[#a3a3a3] flex items-center justify-center gap-2 transition-colors text-sm">
              <Plus className="w-4 h-4" /> Upload New Document
            </button>
          </div>

          <div className="solid-card p-5 flex flex-col">
            <h3 className="text-[#ececec] font-semibold mb-4">Selected for Analysis ({selectedPapers.length})</h3>
            
            <div className="flex-1">
              {selectedPapers.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 border border-dashed border-[#383838] rounded-lg">
                  <ListOrdered className="w-8 h-8 text-[#383838] mb-2" />
                  <p className="text-[#a3a3a3] text-sm">Select at least two papers from the left to generate a combined summary.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {selectedPapers.map(paper => (
                    <div key={paper.id} className="flex items-center justify-between p-2 px-3 bg-[#212121] rounded-lg border border-[#383838]">
                      <span className="text-sm text-[#ececec] truncate mr-4">{paper.title}</span>
                      <button onClick={() => handleSelect(paper)} className="text-[#a3a3a3] hover:text-red-400">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={handleGenerate}
              disabled={selectedPapers.length < 2}
              className={`mt-6 w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                selectedPapers.length >= 2 
                  ? 'bg-[#4f46e5] text-white hover:bg-[#4338ca]' 
                  : 'bg-[#2f2f2f] text-[#8e8e8e] cursor-not-allowed border border-[#383838]'
              }`}
            >
              <BrainCircuit className="w-5 h-5" /> Generate Meta-Summary
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Generating */}
      {step === 2 && (
        <div className="solid-card p-12 flex flex-col items-center justify-center text-center">
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-full border-4 border-[#383838] border-t-[#4f46e5] animate-spin"></div>
            <BrainCircuit className="w-6 h-6 text-[#4f46e5] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h2 className="text-xl font-bold text-[#ececec] mb-2">Cross-Referencing Documents</h2>
          <p className="text-[#a3a3a3] max-w-md">Our AI is reading and synthesizing information from {selectedPapers.length} papers. This may take a few seconds...</p>
        </div>
      )}

      {/* Step 3: Results */}
      {step === 3 && result && (
        <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
          <div className="solid-card p-6 border-l-4 border-l-emerald-500">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              <h2 className="text-xl font-bold text-[#ececec]">Analysis Complete</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#a3a3a3] uppercase tracking-wider mb-2">Combined Summary</h3>
                <p className="text-[#ececec] leading-relaxed bg-[#212121] p-4 rounded-lg border border-[#383838]">
                  {result.summary}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-[#a3a3a3] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FileCheck className="w-4 h-4" /> Overall Conclusion
                </h3>
                <p className="text-[#ececec] leading-relaxed bg-[#4f46e5]/10 p-4 rounded-lg border border-[#4f46e5]/30">
                  {result.conclusion}
                </p>
              </div>
            </div>
          </div>

          {/* Export & Share Bar Integration */}
          <ExportShareBar title="Meta-Summary Report" fileType="PDF" />
          
          <div className="flex justify-center mt-4">
            <button 
              onClick={() => { setStep(1); setResult(null); setSelectedPapers([]); }}
              className="text-[#a3a3a3] hover:text-[#ececec] text-sm underline"
            >
              Analyze different papers
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
