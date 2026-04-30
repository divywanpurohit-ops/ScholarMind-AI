'use client';
import { useState } from 'react';
import { Mail, Lock, ArrowRight, Loader2, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Login failed');
      
      // Store token and redirect
      localStorage.setItem('token', data.token);
      window.location.href = '/';
      
    } catch (err) {
      setError(err.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

       <div className="w-full max-w-md animate-fade-in z-10">
          <div className="text-center mb-10">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(79,70,229,0.3)]">
               <BookOpen className="w-8 h-8 text-white" />
             </div>
             <h1 className="text-4xl font-bold font-heading text-white tracking-tight">Scholars AI</h1>
             <p className="text-text-secondary mt-2">Sign in to your academic workspace</p>
          </div>

          <div className="glass p-8 rounded-2xl border border-[var(--border-color)] shadow-2xl backdrop-blur-xl">
             {error && (
               <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg text-center">
                 {error}
               </div>
             )}
             
             <form onSubmit={handleLogin} className="space-y-5">
               <div className="space-y-1">
                 <label className="text-sm font-medium text-text-secondary pl-1">Academic Email</label>
                 <div className="relative">
                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary/50" />
                   <input 
                     type="email" 
                     required
                     className="input-field pl-10 bg-black/20 focus:bg-black/40 h-12 text-lg"
                     placeholder="researcher@university.edu"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                   />
                 </div>
               </div>

               <div className="space-y-1">
                 <div className="flex justify-between pl-1 pr-1">
                   <label className="text-sm font-medium text-text-secondary">Password</label>
                   <Link href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Forgot?</Link>
                 </div>
                 <div className="relative">
                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary/50" />
                   <input 
                     type="password" 
                     required
                     className="input-field pl-10 bg-black/20 focus:bg-black/40 h-12 text-lg font-mono"
                     placeholder="••••••••"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                   />
                 </div>
               </div>

               <button 
                 type="submit"
                 disabled={isSubmitting || !email || !password}
                 className="w-full btn bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-12 text-lg mt-4 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed group"
               >
                 {isSubmitting ? (
                   <><Loader2 className="w-5 h-5 animate-spin" /> Authenticating...</>
                 ) : (
                   <>Sign In <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                 )}
               </button>
             </form>

             <div className="mt-8 text-center text-text-secondary">
               Don't have an account? <Link href="/register" className="text-white hover:text-blue-400 font-medium transition-colors">Apply for Access</Link>
             </div>
          </div>
       </div>
    </div>
  );
}
