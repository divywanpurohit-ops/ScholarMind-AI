'use client';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import RightPanel from './RightPanel';
import BottomToolStrip from './BottomToolStrip';

export default function DashboardShell({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/register' || pathname === '/splash';

  if (isAuthPage) {
    return <div className="min-h-screen bg-[#0d1117]">{children}</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc]">
      {/* 1. Left Sidebar (Pixel-Perfect Dark Panel) */}
      <Sidebar />
      
      {/* 2. Main Work Area (Scrollable) */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* Top Sticky Navbar */}
        <Navbar />
        
        {/* Workspace Content + Right Panel Layout */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Center Main Workspace */}
          <main className="flex-1 overflow-y-auto custom-scrollbar px-10 py-8 space-y-10">
            {children}
          </main>
          
          {/* 3. Right Sidebar (AI Copilot & Activity) */}
          <RightPanel />
        </div>

        {/* 4. Global Tool Strip (Bottom) */}
        <BottomToolStrip />
      </div>
    </div>
  );
}
