import './globals.css';
import DashboardShell from '../components/DashboardShell';

export const metadata = {
  title: 'ScholarMind AI - Your Academic AI Partner',
  description: 'Premium Academic Research Operating System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <DashboardShell>
          {children}
        </DashboardShell>
      </body>
    </html>
  );
}
