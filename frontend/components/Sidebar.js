'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Home, FolderKanban, BookOpen, Languages, PenTool, 
  BarChart3, Video, Presentation, Network, 
  Library, Plus, MessageSquare, 
  GraduationCap, FileSearch, Search,
  Quote, Brain, Mic, ShieldCheck, Zap
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuGroups = [
    {
      title: 'Workspace',
      items: [
        { name: 'Dashboard', icon: Home, path: '/' },
        { name: 'My Projects', icon: FolderKanban, path: '/projects' },
        { name: 'Library', icon: Library, path: '/library' },
      ]
    },
    {
      title: 'Intelligence',
      items: [
        { name: 'Research Intel', icon: ShieldCheck, path: '/tools/intel' },
        { name: 'Voice Lab', icon: Mic, path: '/tools/voice' },
        { name: 'Thesis Builder', icon: GraduationCap, path: '/tools/thesis' },
        { name: 'Data Lab', icon: BarChart3, path: '/tools/data' },
      ]
    },
    {
      title: 'Studio',
      items: [
        { name: 'PPT Studio', icon: Presentation, path: '/tools/ppt' },
        { name: 'Video Studio', icon: Video, path: '/tools/video' },
        { name: 'Visualizations', icon: Network, path: '/tools/visualization' },
      ]
    }
  ];

  return (
    <div className="w-[260px] bg-white border-r border-slate-200 h-full flex flex-col shrink-0 z-20 overflow-hidden shadow-sm">
      
      {/* Top Sidebar Header (Logo & Search Only) */}
      <div className="p-4 border-b border-slate-100 space-y-4">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer px-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-100">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-bold text-slate-900 tracking-tight">SCHOLARMIND</span>
        </Link>

        {/* Integrated Sidebar Search */}
        <div className="relative px-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Quick search..."
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-[11px] font-medium text-slate-900 focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-3 pt-4 pb-8">
        {menuGroups.map((group, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3 px-3">
              {group.title}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item, i) => {
                const isActive = pathname === item.path;
                return (
                  <li key={i}>
                    <Link href={item.path}>
                      <div className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all cursor-pointer text-[11px] font-semibold ${
                        isActive 
                          ? 'bg-blue-50 text-blue-700 border border-blue-100 shadow-sm' 
                          : 'text-slate-500 border border-transparent hover:bg-slate-50 hover:text-slate-900'
                      }`}>
                        <item.icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                        <span className="truncate">{item.name}</span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Footer New Project Button */}
      <div className="p-4 border-t border-slate-100 bg-white shrink-0">
        <Link href="/projects/new">
          <button className="w-full btn-primary bg-blue-600 hover:bg-blue-500 py-2.5 text-[11px] font-bold border-none shadow-lg shadow-blue-100">
            <Plus className="w-3.5 h-3.5" /> NEW PROJECT
          </button>
        </Link>
      </div>

    </div>
  );
}
