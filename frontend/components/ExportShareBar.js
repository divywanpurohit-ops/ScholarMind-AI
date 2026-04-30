'use client';
import { Download, Link as LinkIcon, Check, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ExportShareBar({ title, fileType, onDownload, contentToShare }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = contentToShare || `Check out this ${title} I created using ScholarMind AI!`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 mt-6 solid-card bg-[#1e1e1e]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#2a2a2a] flex items-center justify-center border border-[#383838]">
          <span className="text-[#ececec] font-semibold text-xs">{fileType}</span>
        </div>
        <div>
          <h4 className="text-sm font-medium text-[#ececec]">{title}</h4>
          <p className="text-xs text-[#a3a3a3]">Ready to export</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Share to WhatsApp Button */}
        <button 
          onClick={handleWhatsApp}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/20 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm font-medium">WhatsApp</span>
        </button>

        {/* Copy Link Button */}
        <button 
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2f2f2f] text-[#ececec] hover:bg-[#3a3a3a] border border-[#383838] transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <LinkIcon className="w-4 h-4" />}
          <span className="text-sm font-medium">{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>

        {/* Download Button */}
        <button 
          onClick={onDownload}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4f46e5] text-white hover:bg-[#4338ca] transition-colors"
        >
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Download</span>
        </button>
      </div>
    </div>
  );
}
