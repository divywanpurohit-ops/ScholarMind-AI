'use client';
import { 
  User, Settings, ShieldCheck, Mail, 
  MapPin, Calendar, Award, Zap, 
  BarChart3, Activity, ArrowLeft,
  ChevronRight, Camera, Bell, Lock,
  Globe, Database, Plus
} from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const stats = [
    { label: 'Papers Analyzed', value: '124', icon: BarChart3, color: 'text-blue-500' },
    { label: 'PPTs Generated', value: '38', icon: Zap, color: 'text-amber-500' },
    { label: 'Videos Created', value: '12', icon: Activity, color: 'text-rose-500' },
    { label: 'Accuracy Score', value: '98%', icon: ShieldCheck, color: 'text-emerald-500' }
  ];

  return (
    <div className="animate-fade-in p-8 space-y-10 max-w-6xl mx-auto pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between">
         <Link href="/">
            <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-widest">
               <ArrowLeft className="w-4 h-4" /> Back to Workspace
            </button>
         </Link>
         <div className="flex gap-4">
            <button className="p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-all relative">
               <Bell className="w-4 h-4" />
               <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="btn-primary py-2 px-6 text-xs font-bold bg-indigo-600 border-none shadow-lg">
               Edit Professional Info
            </button>
         </div>
      </div>

      {/* Main Profile Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         
         {/* Left Column: Personal Info */}
         <div className="space-y-8">
            <div className="glass-card p-10 text-center space-y-6">
               <div className="relative inline-block">
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-4xl font-black shadow-2xl shadow-indigo-500/20">
                     KC
                  </div>
                  <button className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-white shadow-lg border border-slate-100 text-indigo-600 hover:scale-110 transition-transform">
                     <Camera className="w-4 h-4" />
                  </button>
               </div>
               <div className="space-y-1">
                  <h1 className="text-2xl font-black text-slate-900">Kailash Chandra</h1>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Senior Research Scientist</p>
               </div>
               <div className="flex items-center justify-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  <MapPin className="w-3 h-3" /> New Delhi, India
               </div>
               <div className="pt-6 border-t border-slate-50 flex justify-center gap-6">
                  <div className="text-center">
                     <p className="text-xl font-black text-slate-900">Pro</p>
                     <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Membership</p>
                  </div>
                  <div className="w-px h-10 bg-slate-100"></div>
                  <div className="text-center">
                     <p className="text-xl font-black text-slate-900">85</p>
                     <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Rank</p>
                  </div>
               </div>
            </div>

            <div className="glass-card p-8 space-y-6">
               <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Quick Contacts</h3>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 group cursor-pointer">
                     <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <Mail className="w-4 h-4" />
                     </div>
                     <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">kailash@scholarmind.ai</span>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                     <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <Globe className="w-4 h-4" />
                     </div>
                     <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">scholarmind.ai/kailash</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Right Column: Detailed Info & Stats */}
         <div className="lg:col-span-2 space-y-10">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {stats.map((stat) => (
                  <div key={stat.label} className="glass-card p-6 flex flex-col gap-3">
                     <stat.icon className={`w-5 h-5 ${stat.color}`} />
                     <div>
                        <p className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                     </div>
                  </div>
               ))}
            </div>

            {/* Research Achievements */}
            <div className="glass-card p-10 space-y-8">
               <div className="flex items-center justify-between">
                  <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-3">
                     <Award className="w-6 h-6 text-amber-500" /> Research Achievements
                  </h2>
                  <button className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest hover:underline">View All</button>
               </div>
               <div className="space-y-4">
                  {[
                     { title: 'Elite Researcher 2026', date: 'Jan 2026', desc: 'Top 1% in academic meta-analysis contributions.' },
                     { title: 'AI Integration Master', date: 'Dec 2025', desc: 'Successfully merged 50+ research modules with AI.' },
                     { title: 'Global Contributor', date: 'Nov 2025', desc: 'Peer-reviewed 100+ papers through Discovery Hub.' },
                  ].map((ach, idx) => (
                     <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-indigo-100 transition-all cursor-pointer group">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
                           <Zap className="w-5 h-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                           <div className="flex items-center justify-between">
                              <h4 className="text-sm font-bold text-slate-900">{ach.title}</h4>
                              <span className="text-[10px] font-bold text-slate-400">{ach.date}</span>
                           </div>
                           <p className="text-xs text-slate-500 leading-relaxed">{ach.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Account Settings Shortcut */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="glass-card p-8 flex items-center justify-between hover:bg-slate-50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Lock className="w-4 h-4" />
                     </div>
                     <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Security & Privacy</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
               </div>
               <div className="glass-card p-8 flex items-center justify-between hover:bg-slate-50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                        <Database className="w-4 h-4" />
                     </div>
                     <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Data Management</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
               </div>
            </div>

         </div>
      </div>

    </div>
  );
}
