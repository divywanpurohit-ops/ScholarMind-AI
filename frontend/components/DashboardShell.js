'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import RightPanel from './RightPanel';
import BottomToolStrip from './BottomToolStrip';

export default function DashboardShell({ children }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isAuthPage = pathname === '/login' || pathname === '/register' || pathname === '/splash';

  // Prevent hydration mismatch by only rendering after mount
  if (!isMounted) return <div className="min-h-screen bg-[#0d1117]"></div>;

  if (isAuthPage) {
    return <div className="min-h-screen bg-[#0d1117]">{children}</div>;
  }

  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden bg-[#f8fafc] fixed inset-0">
      
      {/* 1. Left Sidebar (Fixed Width) */}
      <Sidebar />
      
      {/* 2. Main Container (Flex Column) */}
      <div className="flex-1 flex flex-col min-w-0 relative h-full">
        
        {/* Top Navbar */}
        <Navbar />
        
        {/* Workspace + Right Panel (Flex Row) */}
        <div className="flex-1 flex flex-row overflow-hidden relative">
          
          {/* Center Main Workspace (Scrollable) */}
          <main className="flex-1 overflow-y-auto custom-scrollbar px-6 md:px-10 py-8 space-y-10 bg-[#f8fafc]">
            <div className="max-w-[1400px] mx-auto">
              {children}
            </div>
          </main>
          
          {/* 3. Right Sidebar */}
          <RightPanel />
          
        </div>

        {/* 4. Global Tool Strip (Bottom) */}
        <BottomToolStrip />
        
      </div>
    </div>
  );
}
