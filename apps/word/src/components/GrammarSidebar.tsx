import React from 'react'
import { X, CheckCircle, AlertCircle, RefreshCcw } from 'lucide-react'

export const GrammarSidebar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col shadow-xl">
      <div className="p-4 border-b flex items-center justify-between bg-gray-50">
        <h3 className="font-bold text-sm text-asan-blue flex items-center">
          <CheckCircle size={16} className="mr-2" />
          Editor / Grammar
        </h3>
        <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded"><X size={16} /></button>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-green-50 border border-green-100 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-green-700">98</div>
          <div className="text-[10px] text-green-600 uppercase font-bold">Editor Score</div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold text-gray-500 uppercase">Suggestions</h4>

          <div className="p-4 border border-blue-200 bg-blue-50/50 rounded-xl space-y-2">
            <div className="flex items-center text-blue-700 font-bold text-xs">
              <AlertCircle size={14} className="mr-1" />
              Conciseness
            </div>
            <p className="text-xs text-gray-600 italic">"outlines the progress made in the development of"</p>
            <div className="flex items-center space-x-2">
               <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-blue-700">summarizes</span>
               <span className="text-[10px] text-gray-400">Instead of long phrase</span>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-xl space-y-2 opacity-60">
            <div className="flex items-center text-gray-700 font-bold text-xs">
              <CheckCircle size={14} className="mr-1" />
              Punctuation
            </div>
            <p className="text-[10px] text-gray-500">No errors found in this category.</p>
          </div>
        </div>

        <button className="w-full flex items-center justify-center space-x-2 py-3 border-2 border-dashed border-gray-200 rounded-xl text-xs text-gray-400 hover:bg-gray-50 transition-colors">
          <RefreshCcw size={14} />
          <span>Re-scan Document</span>
        </button>
      </div>
    </div>
  )
}
