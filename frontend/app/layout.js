import './globals.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FloatingToolbar from '../components/FloatingToolbar';

export const metadata = {
  title: 'SCHOLARMIND AI - Academic OS',
  description: 'Ultimate Academic Research Operating System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-container bg-[#0B0F19] text-[#F3F4F6]">
        
        {/* Strictly 2-Panel Layout to eliminate all overlap */}
        
        {/* Panel 1: Left Sidebar (Fixed Width) */}
        <Sidebar />
        
        {/* Panel 2: Main Central Area (Takes remaining width) */}
        <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
          
          {/* Top Navbar */}
          <Navbar />
          
          {/* Workspace Area - Clean and Spacious */}
          <main className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12 custom-scrollbar">
            <div className="max-w-[1400px] mx-auto w-full">
              {children}
            </div>
          </main>

          {/* NEW: Global Academic Footer */}
          <footer className="p-4 bg-white border-t border-slate-100 flex items-center justify-center shrink-0">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Made by <span className="text-blue-600">Kailash Chandra</span>, Department of Biochemistry
             </p>
          </footer>
          
        </div>

        <FloatingToolbar />

      </body>
    </html>
  );
}
