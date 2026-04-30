import './globals.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'ScholarMind AI - Your Academic AI Partner',
  description: 'Premium Academic Research Operating System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg-dashboard)] text-[var(--text-primary)] min-h-screen">
        
        {/* Main Dashboard Layout Wrapper */}
        <div className="flex h-screen overflow-hidden p-4 gap-4">
          
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

      </body>
    </html>
  );
}
