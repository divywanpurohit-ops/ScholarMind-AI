'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Sparkles, Mail, Lock, ChevronRight, 
  ArrowRight, ShieldCheck, Globe, Zap, 
  Fingerprint, Globe, ShieldCheck, Zap
} from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login delay
    setTimeout(() => {
      router.push('/');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>

      <div className="w-full max-w-md relative z-10">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-10 animate-fade-in">
           <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-2xl shadow-indigo-500/20 mb-6">
              <Sparkles className="w-8 h-8 text-white" />
           </div>
           <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic">ScholarMind <span className="text-indigo-500">AI</span></h1>
           <p className="text-slate-400 text-sm font-medium mt-2">The Ultimate Academic Research Operating System</p>
        </div>

        {/* Login Card */}
        <div className="glass-card bg-white/5 border-white/10 p-10 shadow-2xl animate-slide-up">
           <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                 <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="kailash@scholarmind.ai"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all"
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Password</label>
                    <a href="#" className="text-[9px] font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-widest">Forgot?</a>
                 </div>
                 <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                    <input 
                      type="password" 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all"
                    />
                 </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs uppercase tracking-[0.2em] py-4 rounded-xl shadow-xl shadow-indigo-900/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                 {isLoading ? (
                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                 ) : (
                   <>Enter Command Center <ArrowRight className="w-4 h-4" /></>
                 )}
              </button>
           </form>

           <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Or continue with</p>
              <div className="grid grid-cols-2 gap-4">
                 <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-bold hover:bg-white/10 transition-all">
                    <Globe className="w-4 h-4" /> Google
                 </button>
                 <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-bold hover:bg-white/10 transition-all">
                    <ShieldCheck className="w-4 h-4" /> GitHub
                 </button>
              </div>
           </div>
        </div>

        <p className="text-center mt-8 text-xs text-slate-500 font-medium">
           Don't have an account? <Link href="/register" className="text-indigo-400 font-bold hover:underline">Create Professional ID</Link>
        </p>

        {/* Feature Highlights */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
           <div className="space-y-2">
              <ShieldCheck className="w-5 h-5 text-indigo-500 mx-auto" />
              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Secure & Encrypted</p>
           </div>
           <div className="space-y-2">
              <Globe className="w-5 h-5 text-purple-500 mx-auto" />
              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Global Discovery</p>
           </div>
           <div className="space-y-2">
              <Zap className="w-5 h-5 text-amber-500 mx-auto" />
              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">AI Acceleration</p>
           </div>
        </div>

      </div>
    </div>
  );
}
