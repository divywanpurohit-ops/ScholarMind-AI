'use client';
import Link from 'next/link';
import { Home, FolderKanban, FlaskConical, Languages, Bot, Video, Presentation, Network, BookMarked, Library } from 'lucide-react';

export default function SubNavbar() {
  const navItems = [
    { name: 'Home', icon: Home, active: true },
    { name: 'Projects', icon: FolderKanban },
    { name: 'Research Lab', icon: FlaskConical },
    { name: 'Translator Lab', icon: Languages },
    { name: 'Prompt Studio', icon: Bot },
    { name: 'Video Studio', icon: Video },
    { name: 'PPT Studio', icon: Presentation },
    { name: 'Visualization Lab', icon: Network },
    { name: 'Notes', icon: BookMarked },
    { name: 'Citation Library', icon: Library },
  ];

  return (
    <div className="h-12 border-b border-[var(--border-color)] bg-white px-6 flex items-center gap-6 overflow-x-auto custom-scrollbar shrink-0">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link 
            key={item.name} 
            href="#"
            className={`flex items-center gap-2 h-full px-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              item.active 
                ? 'border-indigo-500 text-indigo-600' 
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <Icon className="w-4 h-4" />
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
