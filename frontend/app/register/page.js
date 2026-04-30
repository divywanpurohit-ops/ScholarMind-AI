'use client';
import { useState } from 'react';
import { Mail, Lock, User, Building2, Loader2, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Registration failed');
      
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
       <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
       <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

       <div className="w-full max-w-lg animate-fade-in z-10">
          <div className="text-center mb-8">
             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
               <BookOpen className="w-6 h-6 text-white" />
             </div>
             <h1 className="text-3xl font-bold font-heading text-white tracking-tight">Join Scholars AI</h1>
             <p className="text-text-secondary mt-2">Create your academic workspace</p>
          </div>

          <div className="glass p-8 rounded-2xl border border-[var(--border-color)] shadow-2xl backdrop-blur-xl">
             {error && (
               <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg text-center">
                 {error}
               </div>
             )}
             
             <form onSubmit={handleRegister} className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-1">
                   <label className="text-sm font-medium text-text-secondary pl-1">Full Name</label>
                   <div className="relative">
                     <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary/50" />
                     <input 
                       type="text" 
                       name="name"
                       required
                       className="input-field pl-10 bg-black/20 focus:bg-black/40 h-11"
                       placeholder="Dr. Jane Doe"
                       value={formData.name}
                       onChange={handleChange}
                     />
                   </div>
                 </div>
                 
                 <div className="space-y-1">
                   <label className="text-sm font-medium text-text-secondary pl-1">Institution</label>
                   <div className="relative">
                     <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary/50" />
                     <input 
                       type="text" 
                       name="institution"
                       className="input-field pl-10 bg-black/20 focus:bg-black/40 h-11"
                       placeholder="University Name"
                       value={formData.institution}
                       onChange={handleChange}
                     />
                   </div>
                 </div>
               </div>

               <div className="space-y-1">
                 <label className="text-sm font-medium text-text-secondary pl-1">Academic Email</label>
                 <div className="relative">
                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary/50" />
                   <input 
                     type="email" 
                     name="email"
                     required
                     className="input-field pl-10 bg-black/20 focus:bg-black/40 h-11"
                     placeholder="researcher@university.edu"
                     value={formData.email}
                     onChange={handleChange}
                   />
                 </div>
               </div>

               <div className="space-y-1">
                 <label className="text-sm font-medium text-text-secondary pl-1">Password</label>
                 <div className="relative">
                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary/50" />
                   <input 
                     type="password" 
                     name="password"
                     required
                     className="input-field pl-10 bg-black/20 focus:bg-black/40 h-11 font-mono"
                     placeholder="••••••••"
                     value={formData.password}
                     onChange={handleChange}
                   />
                 </div>
               </div>

               <button 
                 type="submit"
                 disabled={isSubmitting || !formData.email || !formData.password || !formData.name}
                 className="w-full btn bg-gradient-to-r from-emerald-500 to-teal-600 text-white h-12 text-lg mt-6 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 {isSubmitting ? (
                   <><Loader2 className="w-5 h-5 animate-spin" /> Creating Account...</>
                 ) : (
                   'Create Account'
                 )}
               </button>
             </form>

             <div className="mt-6 text-center text-text-secondary text-sm">
               Already have an account? <Link href="/login" className="text-white hover:text-emerald-400 font-medium transition-colors">Sign in here</Link>
             </div>
          </div>
       </div>
    </div>
  );
}
