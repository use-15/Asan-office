import React, { useState } from 'react'
import { Search, Replace, ChevronUp, ChevronDown, X } from 'lucide-react'

export const FindReplace: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [findText, setFindText] = useState('')
  const [replaceText, setReplaceText] = useState('')
  const [useRegex, setUseRegex] = useState(false)

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col shadow-xl">
      <div className="p-4 border-b flex items-center justify-between bg-gray-50">
        <h3 className="font-bold text-sm">Navigation / Find & Replace</h3>
        <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded"><X size={16} /></button>
      </div>

      <div className="p-4 space-y-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase">Find</label>
          <div className="relative">
            <input
              type="text"
              value={findText}
              onChange={(e) => setFindText(e.target.value)}
              className="w-full border rounded p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none pr-8"
              placeholder="Search document..."
            />
            <Search className="absolute right-2 top-2.5 text-gray-400" size={14} />
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <input
              type="checkbox"
              id="regex"
              checked={useRegex}
              onChange={() => setUseRegex(!useRegex)}
              className="rounded"
            />
            <label htmlFor="regex" className="text-xs text-gray-600">Use Regular Expressions</label>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase">Replace with</label>
          <div className="relative">
            <input
              type="text"
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
              className="w-full border rounded p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none pr-8"
              placeholder="Replace with..."
            />
            <Replace className="absolute right-2 top-2.5 text-gray-400" size={14} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2">
          <button className="bg-blue-600 text-white py-2 rounded text-xs font-bold hover:bg-blue-700 transition-colors">
            Replace
          </button>
          <button className="bg-gray-100 border border-gray-200 py-2 rounded text-xs font-bold hover:bg-gray-200 transition-colors">
            Replace All
          </button>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-4">
          <span>0 of 0 matches</span>
          <div className="flex space-x-1">
            <button className="p-1 border rounded hover:bg-gray-50"><ChevronUp size={14} /></button>
            <button className="p-1 border rounded hover:bg-gray-50"><ChevronDown size={14} /></button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <div className="text-xs text-gray-400 text-center mt-10 italic">
          Search results will appear here as you type.
        </div>
      </div>
    </div>
  )
}
