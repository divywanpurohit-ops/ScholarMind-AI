'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Globe, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/10 to-purple-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/10 to-blue-600/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-10">
           <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl mb-6 transform hover:rotate-6 transition-transform">
              <ShieldCheck className="w-10 h-10 text-white" />
           </div>
           <h1 className="text-4xl font-bold font-heading text-white mb-2 tracking-tight">ScholarMind AI</h1>
           <p className="text-[#9CA3AF] font-medium">The Ultimate Academic Research OS</p>
        </div>

        <div className="solid-card p-10 bg-[#111827]/80 backdrop-blur-xl border-[#1F2937] shadow-2xl">
           <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                 <label className="text-xs font-bold text-[#6B7280] uppercase tracking-widest px-1">Institutional Email</label>
                 <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4B5563] group-focus-within:text-blue-400 transition-colors" />
                    <input 
                      required
                      type="email" 
                      placeholder="name@university.edu" 
                      className="w-full bg-[#030712] border border-[#1F2937] rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <div className="flex justify-between px-1">
                    <label className="text-xs font-bold text-[#6B7280] uppercase tracking-widest">Password</label>
                    <a href="#" className="text-[10px] font-bold text-blue-400 hover:underline">Forgot?</a>
                 </div>
                 <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4B5563] group-focus-within:text-blue-400 transition-colors" />
                    <input 
                      required
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full bg-[#030712] border border-[#1F2937] rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                    />
                 </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn-primary w-full py-4 text-lg shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 transition-transform active:scale-95"
              >
                 {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Sign In <ArrowRight className="w-5 h-5" /></>}
              </button>
           </form>

           <div className="my-8 flex items-center gap-4 text-[#1F2937]">
              <div className="h-px bg-current flex-1"></div>
              <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest shrink-0">Or continue with</span>
              <div className="h-px bg-current flex-1"></div>
           </div>

           <button className="w-full py-4 rounded-2xl bg-[#030712] border border-[#1F2937] text-white font-bold flex items-center justify-center gap-4 hover:bg-[#111827] hover:border-blue-500/50 transition-all group active:scale-95">
              <Globe className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
              Google Workspace
           </button>

           <p className="mt-8 text-center text-sm text-[#9CA3AF]">
              New to ScholarMind? <Link href="/auth/register" className="text-blue-400 font-bold hover:underline">Create an account</Link>
           </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-8 text-[10px] font-bold text-[#4B5563] uppercase tracking-widest">
           <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
           <span className="w-1 h-1 rounded-full bg-[#1F2937]"></span>
           <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
           <span className="w-1 h-1 rounded-full bg-[#1F2937]"></span>
           <a href="#" className="hover:text-blue-400 transition-colors">Help Center</a>
        </div>
      </div>
    </div>
  );
}
