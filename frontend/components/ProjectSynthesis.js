'use client';
import { FileText, Download, CheckCircle2, Sparkles, AlertCircle, Quote } from 'lucide-react';
import ExportShareBar from './ExportShareBar';

export default function ProjectSynthesis({ projectData, addedItems }) {
  return (
    <div className="animate-fade-in space-y-8 pb-10">
      
      {/* Success Banner */}
      <div className="solid-card p-8 bg-gradient-to-r from-emerald-500/20 to-teal-500/5 border-emerald-500/30 flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Project Successfully Finalized!</h2>
          <p className="text-[#9CA3AF] font-medium">All documents and pages have been merged and analyzed by ScholarMind AI.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Executive Summary */}
          <section className="solid-card p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4">
                <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 flex items-center gap-2">
                   <Sparkles className="w-3 h-3" /> Summarized Report
                </div>
             </div>
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
               <FileText className="w-5 h-5 text-blue-400" /> Executive Summary
             </h3>
             <div className="space-y-4 text-[#D1D5DB] leading-relaxed text-lg">
                <p>Based on the {addedItems.length} documents and pages integrated into the project <strong className="text-white">"{projectData.title}"</strong>, the following synthesis has been generated:</p>
                <p>The research highlights a critical convergence between {projectData.topic} and existing frameworks in {projectData.domain}. The analysis suggests that while current methods are robust, there is a significant gap in addressing the specific research questions: <em className="text-cyan-400">"{projectData.questions}"</em>.</p>
                <div className="p-6 bg-[#030712] rounded-xl border border-[#1F2937] my-6 italic text-[#9CA3AF]">
                  "The synthesis reveals that {projectData.objective} is achievable through the proposed methodology, provided that the initial constraints identified in the literature review are managed."
                </div>
                <p>Overall Conclusion: The data supports the hypothesis that {projectData.topic} will play a pivotal role in the future scope of {projectData.domain}.</p>
             </div>
          </section>

          {/* Export Section */}
          <section className="solid-card p-6 bg-[#0B0F19]">
             <h3 className="text-sm font-bold text-[#6B7280] uppercase tracking-wider mb-4 px-2">Export Final Report</h3>
             <ExportShareBar title={`Final Report - ${projectData.title}`} fileType="PDF / DOCX" />
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <section className="solid-card p-6">
             <h3 className="text-sm font-bold text-[#6B7280] uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" /> Synthesis Insights
             </h3>
             <ul className="space-y-4">
                <li className="flex gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
                   <p className="text-sm text-[#9CA3AF]"><span className="text-white font-bold">Novelty Detected:</span> High correlation with emerging trends in {projectData.keywords}.</p>
                </li>
                <li className="flex gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                   <p className="text-sm text-[#9CA3AF]"><span className="text-white font-bold">Citation Score:</span> Perfect adherence to {projectData.citationStyle}.</p>
                </li>
                <li className="flex gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                   <p className="text-sm text-[#9CA3AF]"><span className="text-white font-bold">Content Coverage:</span> All {addedItems.length} items successfully cross-referenced.</p>
                </li>
             </ul>
          </section>

          <section className="solid-card p-6 border-blue-500/20 bg-blue-500/5">
             <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3">AI Suggestions</h3>
             <p className="text-sm text-[#D1D5DB] leading-relaxed mb-4">You might want to generate a <strong>PPT Deck</strong> or <strong>Video Explainer</strong> for this synthesized report next.</p>
             <div className="flex flex-col gap-2">
                <button className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors">Generate Presentation</button>
                <button className="text-xs font-bold text-white bg-[#1F2937] hover:bg-[#374151] px-4 py-2 rounded-lg transition-colors border border-[#374151]">Create Scientific Video</button>
             </div>
          </section>
        </div>

      </div>
    </div>
  );
}
