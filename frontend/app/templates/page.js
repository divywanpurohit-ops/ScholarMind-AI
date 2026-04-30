'use client';
import { Layers, FileText, Search, Download } from 'lucide-react';

export default function TemplatesGallery() {
  const templates = [
    { category: 'Manuscripts', items: [
      { name: 'Nature Journal Format', desc: 'Standard double-column layout for Nature publications.', type: 'DOCX' },
      { name: 'IEEE Conference Paper', desc: 'Official IEEE template for computer science proceedings.', type: 'DOCX' },
      { name: 'APA 7th Edition Paper', desc: 'Fully formatted APA 7 template with title page and references.', type: 'DOCX' }
    ]},
    { category: 'Grants & Proposals', items: [
      { name: 'NSF Grant Proposal', desc: 'Structured template following National Science Foundation guidelines.', type: 'PDF' },
      { name: 'ERC Starting Grant', desc: 'European Research Council template for part B1 and B2.', type: 'DOCX' },
      { name: 'Thesis Proposal', desc: 'Standard university thesis proposal structure.', type: 'DOCX' }
    ]},
    { category: 'Presentations', items: [
      { name: 'Academic Poster (A0)', desc: 'Large format 48x36 inch poster template for conferences.', type: 'PPTX' },
      { name: '15-Min Defense Slide Deck', desc: 'Minimalist slide deck optimized for thesis defense.', type: 'PPTX' }
    ]}
  ];

  return (
    <div className="animate-fade-in h-full flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
              <Layers className="w-5 h-5 text-white" />
            </div>
            Template Gallery
          </h1>
          <p className="text-text-secondary mt-2">Download perfectly formatted academic templates for your next publication or presentation.</p>
        </div>
        
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search templates..." 
            className="input-field pl-10 bg-black/20"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 pb-12 space-y-10">
        
        {templates.map((section, idx) => (
          <div key={idx} className="space-y-4">
             <div className="flex items-center gap-4">
               <h2 className="text-xl font-bold font-heading text-white">{section.category}</h2>
               <div className="flex-1 h-px bg-[var(--border-color)]"></div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
               {section.items.map((item, i) => (
                 <div key={i} className="glass p-6 rounded-xl border border-[var(--border-color)] hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all group relative overflow-hidden flex flex-col">
                   {/* Background flair */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                   
                   <div className="flex items-start justify-between mb-4 relative z-10">
                     <div className="w-12 h-12 rounded-xl bg-black/30 border border-[var(--border-color)] flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                       <FileText className="w-6 h-6" />
                     </div>
                     <span className="text-xs font-mono px-2 py-1 bg-white/5 border border-[var(--border-color)] rounded text-text-secondary">
                       {item.type}
                     </span>
                   </div>
                   
                   <div className="flex-1 relative z-10">
                     <h3 className="text-lg font-semibold text-text-primary mb-2">{item.name}</h3>
                     <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                   </div>
                   
                   <div className="mt-6 pt-4 border-t border-[var(--border-color)] relative z-10 flex gap-3">
                     <button className="flex-1 btn bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 flex items-center justify-center gap-2">
                       <Download className="w-4 h-4" /> Download
                     </button>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        ))}

      </div>
    </div>
  );
}
