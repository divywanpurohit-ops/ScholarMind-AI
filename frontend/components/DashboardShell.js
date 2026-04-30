'use client';
import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function DashboardShell({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/register';

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden p-4 gap-4 bg-[var(--bg-dashboard)]">
      {/* Panel 1: Left Sidebar (Fixed Width, Rounded) */}
      <Sidebar />
      
      {/* Panel 2: Main Workspace (Takes remaining width) */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        
        {/* Top Navbar (Sticky Glass) */}
        <Navbar />
        
        {/* Workspace Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar pt-2">
          <div className="w-full h-full">
            {children}
          </div>
        </main>
        
      </div>
    </div>
  );
}
