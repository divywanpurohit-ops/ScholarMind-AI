'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, User, Globe, ArrowRight, Loader2, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
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
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-600/10 to-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-10">
           <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 shadow-2xl mb-6 transform hover:-rotate-6 transition-transform">
              <GraduationCap className="w-10 h-10 text-white" />
           </div>
           <h1 className="text-4xl font-bold font-heading text-white mb-2 tracking-tight">Join ScholarMind</h1>
           <p className="text-[#9CA3AF] font-medium">Create your intelligent research environment</p>
        </div>

        <div className="solid-card p-10 bg-[#111827]/80 backdrop-blur-xl border-[#1F2937] shadow-2xl">
           <form onSubmit={handleRegister} className="space-y-5">
              <div className="space-y-2">
                 <label className="text-xs font-bold text-[#6B7280] uppercase tracking-widest px-1">Full Name</label>
                 <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4B5563] group-focus-within:text-indigo-400 transition-colors" />
                    <input 
                      required
                      type="text" 
                      placeholder="Dr. Jane Smith" 
                      className="w-full bg-[#030712] border border-[#1F2937] rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 transition-all font-medium"
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-bold text-[#6B7280] uppercase tracking-widest px-1">Institutional Email</label>
                 <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4B5563] group-focus-within:text-indigo-400 transition-colors" />
                    <input 
                      required
                      type="email" 
                      placeholder="jsmith@university.edu" 
                      className="w-full bg-[#030712] border border-[#1F2937] rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 transition-all font-medium"
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-bold text-[#6B7280] uppercase tracking-widest px-1">Create Password</label>
                 <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4B5563] group-focus-within:text-indigo-400 transition-colors" />
                    <input 
                      required
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full bg-[#030712] border border-[#1F2937] rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 transition-all font-medium"
                    />
                 </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary w-full py-4 text-lg bg-gradient-to-r from-indigo-600 to-blue-600 shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 border-none active:scale-95 transition-all"
                >
                  {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Start Your Research <ArrowRight className="w-5 h-5" /></>}
                </button>
              </div>
           </form>

           <div className="my-8 flex items-center gap-4 text-[#1F2937]">
              <div className="h-px bg-current flex-1"></div>
              <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest shrink-0">Register with</span>
              <div className="h-px bg-current flex-1"></div>
           </div>

           <button className="w-full py-4 rounded-2xl bg-[#030712] border border-[#1F2937] text-white font-bold flex items-center justify-center gap-4 hover:bg-[#111827] hover:border-indigo-500/50 transition-all active:scale-95">
              <Globe className="w-6 h-6 text-blue-400" />
              Institutional Google
           </button>

           <p className="mt-8 text-center text-sm text-[#9CA3AF]">
              Already have an account? <Link href="/auth/login" className="text-indigo-400 font-bold hover:underline">Sign In</Link>
           </p>
        </div>

        <p className="mt-8 text-center text-[10px] text-[#4B5563] leading-relaxed uppercase tracking-wider font-bold">
           By registering, you agree to our <br/> 
           <a href="#" className="text-[#6B7280] hover:text-white transition-colors underline underline-offset-4">Academic Ethics & Usage Policy</a>
        </p>
      </div>
    </div>
  );
}
