'use client';
import { useState } from 'react';
import { 
  BarChart3, Upload, TableProperties, PieChart, 
  Sigma, Activity, Loader2, Sparkles, Download, 
  LineChart, FileOutput, Calculator, Database,
  TrendingUp, ScatterChart, BarChart, CheckCircle2,
  AlertTriangle, Filter, Settings2, Share2
} from 'lucide-react';
import ExportShareBar from '../../../components/ExportShareBar';

export default function DataAnalysisLab() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('visualize');
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState(null);

  const handleLoadData = async () => {
    setLoading(true);
    try {
      // Mock data context since we don't have real file upload hooked up to backend yet
      const sampleData = "Sample Dataset: 150 rows. Columns: Age (mean=42.5), Income, Education Level. Contains some missing values.";
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/ai/analyze-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ dataContext: sampleData })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setStats(data.analysis.stats);
        // Assuming we store interpretation in state as well, let's add it
        setInterpretation(data.analysis.interpretation);
        setDataLoaded(true);
      }
    } catch (error) {
      console.error('Data analysis failed', error);
    } finally {
      setLoading(false);
    }
  };

  const [interpretation, setInterpretation] = useState('');

  return (
    <div className="animate-fade-in flex flex-col h-full w-full gap-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-100">
                 <BarChart3 className="w-5 h-5 text-white" />
              </div>
              Data Analysis & Statistics Lab
           </h1>
           <p className="text-sm text-slate-500 mt-1 font-medium">Automated data cleaning, statistical testing, and paper-ready interpretations.</p>
        </div>
        <div className="flex gap-3">
           <button className="btn-secondary py-2 px-6 text-xs font-bold"><Database className="w-4 h-4" /> SQL Connect</button>
           <button className="btn-primary py-2 px-6 bg-emerald-600 text-xs font-bold border-none shadow-md shadow-emerald-100">
             <Download className="w-4 h-4" /> Export Interpretation
           </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden pb-4">
        
        {/* Left Side: Data Source & Controls */}
        <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0 overflow-y-auto custom-scrollbar pr-2">
           
           {/* Upload Zone */}
           <div 
             onClick={handleLoadData}
             className="solid-card p-8 bg-white border-dashed border-2 border-slate-200 flex flex-col items-center justify-center text-center gap-4 hover:border-emerald-500 hover:bg-emerald-50 cursor-pointer transition-all group"
           >
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                 <Upload className="w-6 h-6 text-slate-400 group-hover:text-white" />
              </div>
              <div className="space-y-1">
                 <h3 className="text-sm font-bold text-slate-900">Upload Dataset</h3>
                 <p className="text-[10px] text-slate-400 font-bold uppercase">CSV, XLSX, SQL, JSON</p>
              </div>
           </div>

           {/* Tool Selection Pockets */}
           <div className="flex flex-col gap-2">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Analysis Pockets</h4>
              {[
                { id: 'visualize', label: 'Visualization', icon: PieChart, color: 'text-emerald-600' },
                { id: 'stats', label: 'Descriptive Stats', icon: Sigma, color: 'text-blue-600' },
                { id: 'tests', label: 'Hypothesis Testing', icon: Activity, color: 'text-indigo-600' },
                { id: 'cleaning', label: 'Auto-Cleaning', icon: Filter, color: 'text-amber-600' },
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                    activeTab === tab.id 
                     ? 'bg-white border-emerald-500 shadow-md ring-4 ring-emerald-500/5' 
                     : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'
                  }`}
                >
                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === tab.id ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                      <tab.icon className="w-4 h-4" />
                   </div>
                   <span className={`text-xs font-bold ${activeTab === tab.id ? 'text-slate-900' : 'text-slate-500'}`}>{tab.label}</span>
                </button>
              ))}
           </div>

           {/* Data Audit Alert */}
           {dataLoaded && (
              <div className="solid-card p-4 bg-amber-50 border-amber-100 flex gap-3">
                 <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                 <div>
                    <h4 className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">Audit Findings</h4>
                    <p className="text-[10px] text-amber-600 font-medium leading-relaxed mt-1">
                       Detected {stats.missingValues} missing values in "Age" column. Auto-cleaning tools recommended.
                    </p>
                 </div>
              </div>
           )}
        </div>

        {/* Right Side: Results & Charts */}
        <div className="flex-1 flex flex-col gap-6 min-h-0 overflow-hidden">
           
           <div className="flex-1 solid-card bg-white flex flex-col overflow-hidden border-slate-200">
              {!dataLoaded ? (
                 <div className="h-full flex flex-col items-center justify-center text-center p-10 opacity-30 gap-6">
                    {loading ? (
                       <div className="flex flex-col items-center gap-4">
                          <Loader2 className="w-12 h-12 animate-spin text-emerald-500" />
                          <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Parsing Dataset...</p>
                       </div>
                    ) : (
                       <>
                          <BarChart3 className="w-20 h-20 text-slate-300" />
                          <p className="text-xl font-bold tracking-widest uppercase">Select Data to Begin Analysis</p>
                       </>
                    )}
                 </div>
              ) : (
                 <div className="flex-1 p-8 overflow-y-auto custom-scrollbar animate-fade-in space-y-10">
                    
                    {/* Dynamic Dashboard Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                          <div className="flex items-center justify-between mb-2">
                             <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Mean Value</span>
                             <TrendingUp className="w-4 h-4 text-emerald-500" />
                          </div>
                          <span className="text-3xl font-bold text-emerald-900">{stats.mean}</span>
                       </div>
                       <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                          <div className="flex items-center justify-between mb-2">
                             <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">P-Value</span>
                             <Activity className="w-4 h-4 text-blue-500" />
                          </div>
                          <span className="text-3xl font-bold text-blue-900">{stats.pVal}</span>
                       </div>
                       <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
                          <div className="flex items-center justify-between mb-2">
                             <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Correlation</span>
                             <Calculator className="w-4 h-4 text-indigo-500" />
                          </div>
                          <span className="text-3xl font-bold text-indigo-900">{stats.correlation}</span>
                       </div>
                    </div>

                    {/* Chart Preview */}
                    <div className="space-y-4">
                       <div className="flex items-center justify-between">
                          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                             <BarChart className="w-4 h-4 text-emerald-500" /> Visualization Engine
                          </h3>
                          <button className="text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-widest">Change Chart Type</button>
                       </div>
                       <div className="h-64 rounded-2xl bg-slate-50 border border-slate-100 flex items-end p-10 gap-4 overflow-hidden">
                          {[40, 60, 35, 90, 55, 75, 45, 80].map((h, i) => (
                             <div 
                                key={i} 
                                className="flex-1 bg-emerald-500 rounded-t-lg transition-all hover:bg-emerald-400 group relative cursor-pointer shadow-sm"
                                style={{ height: `${h}%` }}
                             >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                   {h}%
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>

                    {/* Statistical Interpretation */}
                    <div className="space-y-4">
                       <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-500" /> Paper-Ready Interpretation
                       </h3>
                       <div className="p-6 rounded-2xl bg-slate-900 text-slate-300 font-serif leading-relaxed italic border-l-4 border-emerald-500">
                          "{interpretation}"
                       </div>
                       <div className="flex justify-end gap-3">
                          <button className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all">
                             <Copy className="w-4 h-4" /> Copy Interpretation
                          </button>
                          <button className="flex items-center gap-2 text-xs font-bold text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg transition-all">
                             <Share2 className="w-4 h-4" /> Export as RIS/BibTex
                          </button>
                       </div>
                    </div>
                 </div>
              )}
           </div>

           {dataLoaded && (
              <div className="solid-card p-6 bg-white shrink-0">
                 <ExportShareBar 
                    title="Data Analysis Report" 
                    fileType="PDF" 
                    contentToShare={`Check out my latest AI Data Analysis:\n\n${interpretation}`}
                 />
              </div>
           )}
        </div>

      </div>

    </div>
  );
}
