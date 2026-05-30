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
  Layout,
  FileSignature,
  Maximize,
  ZoomIn,
  ZoomOut
} from 'lucide-react'

export default function AsanPDF() {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)
  const [isEncrypted, setIsEncrypted] = useState(true)
  const totalPages = 12

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200))
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 50))

  return (
    <div className="flex flex-col h-full bg-[#525659] overflow-hidden font-sans text-gray-800">
      <PdfRibbon />

      <div className="flex flex-1 overflow-hidden relative">
        <div className="w-10 bg-[#323639] border-r border-[#404447] flex flex-col items-center py-4 space-y-4 shadow-sm z-10 text-[#f1f1f1]">
          <button className="p-2 bg-[#4c5052] rounded shadow-inner"><Layout size={20} /></button>
          <button className="p-2 hover:bg-[#4c5052] rounded transition-colors"><Search size={20} /></button>
          <button className="p-2 hover:bg-[#4c5052] rounded transition-colors"><Clock size={20} /></button>
          <div className="flex-1"></div>
          <button onClick={() => setIsEncrypted(!isEncrypted)} className={`p-2 rounded transition-colors ${isEncrypted ? 'text-green-400 bg-green-900/20' : 'text-gray-400 hover:bg-[#4c5052]'}`}>
            {isEncrypted ? <Lock size={20} /> : <Unlock size={20} />}
          </button>
          <button className="p-2 hover:bg-[#4c5052] rounded transition-colors"><Info size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center space-y-8 scrollbar-thin scroll-smooth">
           {[1, 2, 3].map(page => (
             <div
               key={page}
               style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
               className="bg-white shadow-2xl w-full max-w-[800px] aspect-[1/1.41] relative group flex flex-col p-16 transition-transform duration-200"
             >
                <div className="flex justify-between items-center mb-12">
                   <div className="h-10 w-48 bg-gray-50 rounded border border-gray-100"></div>
                   <div className="text-[10px] text-gray-300 font-bold tracking-[0.2em] uppercase">Secure Document Container</div>
                </div>

                {page === 1 ? (
                  <div className="space-y-8">
                    <h1 className="text-5xl font-serif font-black text-gray-900 border-b-4 border-asan-red pb-6 tracking-tight">Quarterly Business Report</h1>
                    <div className="grid grid-cols-4 gap-6">
                       <div className="bg-red-50 rounded border border-red-200 flex items-center justify-center text-asan-red font-black text-xs uppercase tracking-widest rotate-12 shadow-sm">Strictly Confidential</div>
                       <div className="bg-gray-50 rounded border border-gray-100 col-span-3 p-6 space-y-3">
                          <div className="h-2.5 w-full bg-gray-200 rounded-full"></div>
                          <div className="h-2.5 w-11/12 bg-gray-200 rounded-full"></div>
                          <div className="h-2.5 w-3/4 bg-gray-200 rounded-full"></div>
                       </div>
                    </div>
                    <p className="text-gray-800 leading-relaxed font-serif text-lg">
                      This comprehensive audit details the local-only development cycle of <strong>Asan Office</strong>.
                      Integrity is maintained via offline AES-256 block ciphers and X.509 signature lines.
                    </p>
                    <div className="h-40 bg-gray-50 rounded-xl border border-gray-200 p-8 flex items-end justify-between">
                       <div className="space-y-2">
                          <div className="h-0.5 w-32 bg-gray-400"></div>
                          <div className="text-[10px] text-gray-400 uppercase font-bold">Authorized Signature</div>
                       </div>
                       <div className="text-asan-red opacity-20"><FileSignature size={64} strokeWidth={1} /></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                     {Array.from({length: 12}).map((_, i) => (
                       <div key={i} className={`h-2.5 bg-gray-100 rounded-full`} style={{ width: `${Math.random() * 30 + 70}%` }}></div>
                     ))}
                  </div>
                )}

                <div className="mt-auto flex justify-between items-end border-t border-gray-100 pt-6">
                   <div className="text-[9px] text-gray-400 font-mono tracking-wider italic">Certified Digital Release | {new Date().toLocaleDateString()}</div>
                   <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-200 shadow-sm">
                      <FileSignature size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-tighter">Identity Verified</span>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-6 bg-[#323639]/95 backdrop-blur-xl px-8 py-3 rounded-full shadow-2xl border border-[#4c5052] text-white z-30 ring-1 ring-white/10">
           <button onClick={() => setCurrentPage(Math.max(1, currentPage-1))} className="p-1.5 hover:bg-[#4c5052] rounded-full transition-colors"><ChevronUp size={24}/></button>
           <div className="flex items-center space-x-3">
             <input type="text" value={currentPage} className="w-12 bg-[#4c5052] border border-[#525659] text-center text-sm font-bold rounded py-1 outline-none focus:ring-1 focus:ring-asan-red transition-all" onChange={(e) => setCurrentPage(Number(e.target.value))} />
             <span className="text-xs text-gray-400 font-medium">OF {totalPages}</span>
           </div>
           <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage+1))} className="p-1.5 hover:bg-[#4c5052] rounded-full transition-colors"><ChevronDown size={24}/></button>
        </div>
      </div>

      <div className="h-6 bg-[#c43e1c] text-white flex items-center justify-between px-4 text-[10px] select-none z-40 shadow-inner">
        <div className="flex items-center space-x-4">
          <span className="font-bold tracking-tight uppercase border-r border-white/20 pr-4">Quarterly_Report_v2.pdf</span>
          <span className="flex items-center space-x-2">
             <Lock size={12} className={isEncrypted ? 'text-red-200' : 'text-white/40'} />
             <span className="font-bold uppercase tracking-tighter">{isEncrypted ? 'Secure Coded' : 'Open Access'}</span>
          </span>
        </div>
        <div className="flex items-center space-x-6 font-bold">
          <div className="flex items-center space-x-4 border-l border-white/20 pl-4">
            <ZoomOut size={14} className="cursor-pointer hover:scale-110 transition-transform" onClick={handleZoomOut} />
            <span className="w-10 text-center">{zoom}%</span>
            <ZoomIn size={14} className="cursor-pointer hover:scale-110 transition-transform" onClick={handleZoomIn} />
            <div className="h-3 w-px bg-white/20 mx-2"></div>
            <Maximize size={14} className="cursor-pointer hover:scale-110" onClick={() => setZoom(100)} />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-thin::-webkit-scrollbar { width: 10px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: #323639; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #4c5052; border-radius: 5px; border: 3px solid #323639; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: #666; }
      `}} />
    </div>
  )
}
