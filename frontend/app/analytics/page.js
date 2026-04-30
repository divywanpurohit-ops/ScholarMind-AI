'use client';
import { 
  BarChart3, TrendingUp, Users, FileText, 
  Clock, Award, Brain, Target, Sparkles,
  Zap, PieChart, Activity
} from 'lucide-react';

export default function Analytics() {
  const stats = [
    { label: 'Total Projects', value: '12', icon: Target, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Papers Analyzed', value: '148', icon: FileText, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'AI Contribution', value: '34%', icon: Sparkles, color: 'text-pink-400', bg: 'bg-pink-500/10' },
    { label: 'Research Hours', value: '520h', icon: Clock, icon: Clock, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  ];

  const toolUsage = [
    { name: 'Translation Lab', value: 85, color: 'bg-blue-500' },
    { name: 'Writing Humanizer', value: 70, color: 'bg-purple-500' },
    { name: 'Data Stats Lab', value: 45, color: 'bg-emerald-500' },
    { name: 'Visualization Lab', value: 30, color: 'bg-pink-500' },
  ];

  return (
    <div className="animate-fade-in flex flex-col gap-10 w-full pb-10">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-heading text-white mb-2">Research Analytics</h1>
        <p className="text-[#9CA3AF] text-lg font-medium">Deep insights into your academic productivity and AI integration.</p>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="solid-card p-6 flex items-center gap-5 group hover:border-blue-500/30 transition-all">
            <div className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <stat.icon className={`w-7 h-7 ${stat.color}`} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Tool Usage Chart */}
        <div className="lg:col-span-2 solid-card p-8 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" /> Tool Engagement Frequency
            </h3>
            <span className="text-xs font-bold text-[#6B7280] uppercase">Past 30 Days</span>
          </div>

          <div className="space-y-6">
            {toolUsage.map((tool, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-[#D1D5DB]">{tool.name}</span>
                  <span className="font-mono text-white">{tool.value}%</span>
                </div>
                <div className="h-2 w-full bg-[#111827] rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${tool.color} transition-all duration-1000 shadow-[0_0_10px_rgba(59,130,246,0.3)]`} 
                    style={{ width: `${tool.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-5 bg-blue-500/5 border border-blue-500/20 rounded-2xl flex items-center gap-4">
             <Zap className="w-6 h-6 text-blue-400 animate-pulse" />
             <p className="text-sm text-[#9CA3AF]">
               <strong className="text-white">Pro Tip:</strong> Your use of the <span className="text-blue-400">Translation Lab</span> has increased by 15% this week. Consider merging related projects to save tokens.
             </p>
          </div>
        </div>

        {/* Scholar Progression */}
        <div className="solid-card p-8 flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4">
              <Award className="w-12 h-12 text-amber-500/20 rotate-12" />
           </div>
           
           <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-2">Academic Standing</h3>
           
           <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                 <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-[#111827]" />
                 <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-blue-500" strokeDasharray={440} strokeDashoffset={440 - (440 * 75) / 100} strokeLinecap="round" />
              </svg>
              <div className="absolute">
                 <Brain className="w-10 h-10 text-white mb-1 mx-auto" />
                 <p className="text-3xl font-bold text-white">Lvl 8</p>
              </div>
           </div>

           <div>
              <h4 className="text-xl font-bold text-white mb-1">Senior Researcher</h4>
              <p className="text-sm text-[#9CA3AF] font-medium">Top 5% of ScholarMind users</p>
           </div>

           <div className="w-full space-y-3 pt-4 border-t border-[#1F2937]">
              <div className="flex justify-between text-[10px] font-bold text-[#6B7280] uppercase tracking-widest">
                 <span>Next Rank: Principal Fellow</span>
                 <span>75%</span>
              </div>
              <div className="h-1.5 w-full bg-[#111827] rounded-full overflow-hidden">
                 <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 w-3/4"></div>
              </div>
           </div>
        </div>

      </div>

    </div>
  );
}
