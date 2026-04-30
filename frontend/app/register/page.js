'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Sparkles, Mail, Lock, User, 
  ArrowRight, ShieldCheck, Globe, Zap, 
  Fingerprint
} from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push('/login');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -ml-96 -mt-96 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] -mr-48 -mb-48"></div>

      <div className="w-full max-w-md relative z-10">
        
        <div className="flex flex-col items-center text-center mb-10 animate-fade-in">
           <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-2xl mb-6">
              <Sparkles className="w-8 h-8 text-white" />
           </div>
           <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic">ScholarMind <span className="text-indigo-500">AI</span></h1>
           <p className="text-slate-400 text-sm font-medium mt-2">Create Your Professional Academic ID</p>
        </div>

        <div className="glass-card bg-white/5 border-white/10 p-10 shadow-2xl animate-slide-up">
           <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                 <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Kailash Chandra"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all"
                    />
                 </div>
              </div>

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
                 <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Password</label>
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
                   <>Create Account <ArrowRight className="w-4 h-4" /></>
                 )}
              </button>
           </form>

           <div className="mt-8 pt-8 border-t border-white/5 text-center">
              <p className="text-xs text-slate-500 font-medium">
                 Already have a Professional ID? <Link href="/login" className="text-indigo-400 font-bold hover:underline">Sign In</Link>
              </p>
           </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
           <div className="space-y-2">
              <ShieldCheck className="w-5 h-5 text-indigo-500 mx-auto" />
              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Privacy Protected</p>
           </div>
           <div className="space-y-2">
              <Globe className="w-5 h-5 text-purple-500 mx-auto" />
              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Global Network</p>
           </div>
           <div className="space-y-2">
              <Zap className="w-5 h-5 text-amber-500 mx-auto" />
              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Instant Setup</p>
           </div>
        </div>

      </div>
    </div>
  );
}
