import React, { useState } from 'react'
import { PdfRibbon } from './components/PdfRibbon'
import {
  Search,
  Settings,
  Info,
  Clock,
  Lock,
  Unlock,
  ChevronUp,
  ChevronDown,
  Layout
} from 'lucide-react'

export default function AsanPDF() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 12
  const [isEncrypted, setIsEncrypted] = useState(true)

  return (
    <div className="flex flex-col h-full bg-[#525659] overflow-hidden font-sans text-gray-800">
      <PdfRibbon />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Toolbar */}
        <div className="w-10 bg-[#323639] border-r border-[#404447] flex flex-col items-center py-4 space-y-4 shadow-sm z-10 text-[#f1f1f1]">
          <button className="p-2 bg-[#4c5052] rounded shadow-inner"><Layout size={20} /></button>
          <button className="p-2 hover:bg-[#4c5052] rounded"><Search size={20} /></button>
          <button className="p-2 hover:bg-[#4c5052] rounded"><Clock size={20} /></button>
          <div className="flex-1"></div>
          <button onClick={() => setIsEncrypted(!isEncrypted)} className={`p-2 rounded ${isEncrypted ? 'text-green-400' : 'text-gray-400'}`}>
            {isEncrypted ? <Lock size={20} /> : <Unlock size={20} />}
          </button>
          <button className="p-2 hover:bg-[#4c5052] rounded"><Info size={20} /></button>
        </div>

        {/* PDF Viewer Canvas */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center space-y-8 scrollbar-thin">
           {/* Individual PDF Pages (Simulated) */}
           {[1, 2, 3].map(page => (
             <div key={page} className="bg-white shadow-2xl w-full max-w-[800px] aspect-[1/1.41] relative group flex flex-col p-16">
                <div className="flex justify-between items-center mb-12">
                   <div className="h-10 w-48 bg-gray-50 rounded"></div>
                   <div className="text-[10px] text-gray-300 font-bold tracking-widest">ASAN OFFICE SECURE PDF</div>
                </div>

                {page === 1 ? (
                  <div className="space-y-6">
                    <h1 className="text-4xl font-serif font-bold text-gray-900 border-b-2 pb-4">Quarterly Business Report</h1>
                    <div className="grid grid-cols-3 gap-4 h-32">
                       <div className="bg-red-50 rounded border border-red-100 flex items-center justify-center text-asan-red font-bold">REDACTED</div>
                       <div className="bg-gray-50 rounded border border-gray-100 col-span-2 p-4">
                          <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                          <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                          <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                       </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-serif">
                      This document contains sensitive corporate data regarding the launch of <strong>Asan Office Suite</strong>.
                      Unauthorized reproduction is strictly prohibited under local AES-256 encryption laws.
                    </p>
                    {/* Mock Highlight */}
                    <div className="absolute top-[420px] left-16 right-16 h-6 bg-red-200/50 mix-blend-multiply rounded-sm border-l-4 border-asan-red"></div>
                  </div>
                ) : (
                  <div className="space-y-4">
                     {Array.from({length: 15}).map((_, i) => (
                       <div key={i} className={`h-2 bg-gray-100 rounded`} style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                     ))}
                  </div>
                )}

                <div className="mt-auto flex justify-between items-end">
                   <div className="text-[8px] text-gray-400">Page {page} of {totalPages} | ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
                   <div className="h-8 w-24 bg-gray-50 border rounded-sm flex items-center justify-center opacity-30">
                      <FileSignature size={12} className="mr-1" /> Verified
                   </div>
                </div>

                {/* Annotation Overlay on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2 bg-white/90 backdrop-blur shadow-md p-1 rounded-lg border">
                   <button className="p-1.5 hover:bg-red-50 text-asan-red rounded transition-colors"><PenTool size={14}/></button>
                   <button className="p-1.5 hover:bg-gray-100 rounded transition-colors text-gray-600"><Settings size={14}/></button>
                </div>
             </div>
           ))}
        </div>

        {/* Bottom Pagination Overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-[#323639]/90 backdrop-blur-md px-6 py-2 rounded-full shadow-2xl border border-[#4c5052] text-white z-30">
           <button onClick={() => setCurrentPage(Math.max(1, currentPage-1))} className="p-1 hover:bg-[#4c5052] rounded-full"><ChevronUp size={20}/></button>
           <div className="flex items-center space-x-2">
             <input type="text" value={currentPage} className="w-10 bg-[#4c5052] border border-[#525659] text-center text-xs rounded py-1 outline-none focus:border-asan-red" onChange={(e) => setCurrentPage(Number(e.target.value))} />
             <span className="text-xs text-gray-400">/ {totalPages}</span>
           </div>
           <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage+1))} className="p-1 hover:bg-[#4c5052] rounded-full"><ChevronDown size={20}/></button>
        </div>
      </div>

      {/* PDF Status Bar */}
      <div className="h-6 bg-[#c43e1c] text-white flex items-center justify-between px-4 text-[10px] select-none z-40">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer hover:bg-white/10 px-1 rounded font-bold">
             <FileText size={12} />
             <span>Quarterly_Report.pdf</span>
          </div>
          <span className="text-white/60">A4 Portrait</span>
          <div className="flex items-center space-x-2 border-l border-white/20 pl-4">
             <Lock size={10} className="text-red-200" />
             <span>AES-256 Encrypted</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <button className="hover:text-red-200 transition-colors">Digital Signatures</button>
            <div className="h-3 w-px bg-white/20"></div>
            <ZoomOut size={12} className="cursor-pointer" />
            <span className="w-10 text-center">100%</span>
            <ZoomIn size={12} className="cursor-pointer" />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-thin::-webkit-scrollbar { width: 8px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: #323639; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #525659; border-radius: 4px; border: 2px solid #323639; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: #666; }
      `}} />
    </div>
  )
}
