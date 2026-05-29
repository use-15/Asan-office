import React from 'react'
import {
  FileText, PenTool, Highlighter, Type,
  Search, ZoomIn, ZoomOut, Save, Printer,
  ChevronDown, Lock, FileSignature, Undo, Redo,
  Columns, RotateCw, Trash2
} from 'lucide-react'

export const PdfRibbon: React.FC = () => {
  return (
    <div className="bg-[#f3f2f1] border-b border-gray-300 select-none font-sans">
      <div className="flex px-4 bg-white border-b border-gray-200">
        {['File', 'Home', 'Insert', 'Layout', 'Review', 'View'].map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-1.5 text-xs font-medium border-b-2 transition-colors ${
              i === 1 ? 'border-asan-red text-asan-red' : 'border-transparent text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex h-24 p-1.5 space-x-1 items-stretch overflow-x-auto">

        {/* Quick Access */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
          <div className="flex space-x-2">
            <button className="p-1.5 hover:bg-white rounded transition-colors"><Undo size={16} /></button>
            <button className="p-1.5 hover:bg-white rounded transition-colors"><Redo size={16} /></button>
          </div>
          <span className="text-[10px] text-gray-400 mt-auto uppercase">Clipboard</span>
        </div>

        {/* Viewing */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
           <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-1">
                 <button className="p-1 hover:bg-white rounded"><ZoomOut size={14} /></button>
                 <div className="flex border rounded bg-white px-2 py-0.5 text-xs">100% <ChevronDown size={10} className="ml-2 mt-1" /></div>
                 <button className="p-1 hover:bg-white rounded"><ZoomIn size={14} /></button>
              </div>
              <div className="flex justify-center space-x-2">
                 <button className="p-1 hover:bg-white rounded" title="Rotate"><RotateCw size={14} /></button>
                 <button className="p-1 hover:bg-white rounded" title="Two Pages"><Columns size={14} /></button>
              </div>
           </div>
           <span className="text-[10px] text-gray-400 mt-auto uppercase">View</span>
        </div>

        {/* Annotate */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
           <div className="grid grid-cols-2 gap-2">
              <button className="flex flex-col items-center p-1 bg-red-50 border border-asan-red rounded text-asan-red">
                <Highlighter size={18} />
                <span className="text-[8px]">Highlight</span>
              </button>
              <button className="flex flex-col items-center p-1 hover:bg-white border border-transparent rounded text-gray-600">
                <PenTool size={18} />
                <span className="text-[8px]">Draw</span>
              </button>
           </div>
           <span className="text-[10px] text-gray-400 mt-auto uppercase">Annotate</span>
        </div>

        {/* Security */}
        <div className="flex flex-col items-center justify-between px-2">
           <div className="flex space-x-2">
              <button className="flex flex-col items-center p-1 hover:bg-white rounded group">
                 <FileSignature size={22} className="text-asan-red" />
                 <span className="text-[8px] mt-1">Sign</span>
              </button>
              <button className="flex flex-col items-center p-1 hover:bg-white rounded group">
                 <Lock size={22} className="text-gray-600 group-hover:text-asan-red" />
                 <span className="text-[8px] mt-1">Lock</span>
              </button>
           </div>
           <span className="text-[10px] text-gray-400 mt-auto uppercase">Security</span>
        </div>

      </div>
    </div>
  )
}
