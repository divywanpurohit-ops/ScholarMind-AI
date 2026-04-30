'use client';
import { 
  Languages, FileText, BarChart3, Calculator, PenTool, 
  RefreshCw, UserCheck, Network, Presentation, Video, Quote, Download
} from 'lucide-react';

export default function BottomDock() {
  const actions = [
    { icon: Languages, label: 'Translate' },
    { icon: FileText, label: 'Summarize' },
    { icon: BarChart3, label: 'Analyze' },
    { icon: Calculator, label: 'Statistics' },
    { icon: PenTool, label: 'Rewrite' },
    { icon: RefreshCw, label: 'Paraphrase' },
    { icon: UserCheck, label: 'Humanize' },
    { icon: Network, label: 'Visualize' },
    { icon: Presentation, label: 'PPT' },
    { icon: Video, label: 'Video' },
    { icon: Quote, label: 'Citation' },
    { icon: Download, label: 'Export' },
  ];

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-dock flex items-center gap-1 p-2 rounded-2xl border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
        {actions.map((action, idx) => (
          <button 
            key={idx} 
            className="relative group p-3 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-2 hover:scale-110"
            title={action.label}
          >
            <action.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
            
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#030712] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#1F2937] shadow-xl">
              {action.label}
            </span>
            
            {/* Dock Indicator Dot */}
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>
        ))}
      </div>
    </div>
  );
}
