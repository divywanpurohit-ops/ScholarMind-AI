'use client';
import { 
  Bell, Search, User, Settings, HelpCircle, 
  Menu, BookOpen, Clock, Activity, ShieldCheck
} from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="h-[72px] bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0 z-10">
      
      {/* Left Section: Breadcrumbs / Status */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100">
           <Activity className="w-3.5 h-3.5 text-blue-600" />
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">ScholarMind AI v2.0 Live</span>
        </div>
        <div className="h-4 w-px bg-slate-200"></div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
           <BookOpen className="w-4 h-4" /> Academic OS
        </div>
      </div>

      {/* CENTER REMOVED - COMPLETELY CLEAN AS REQUESTED */}

      {/* Right Section: Intelligence Status Only */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
           <ShieldCheck className="w-4 h-4" />
           <span className="text-[10px] font-bold uppercase tracking-widest">Research Sync Active</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-pointer">
           <Bell className="w-4 h-4" />
        </div>
      </div>

    </nav>
  );
}
