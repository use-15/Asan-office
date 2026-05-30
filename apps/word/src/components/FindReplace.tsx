import React, { useState } from 'react'
import { Search, Replace, ChevronUp, ChevronDown, X } from 'lucide-react'

export const FindReplace: React.FC<{ editor: any, onClose: () => void }> = ({ editor, onClose }) => {
  const [findText, setFindText] = useState('')
  const [replaceText, setReplaceText] = useState('')

  const handleReplace = () => {
    if (!editor || !findText) return
    const content = editor.getHTML()
    const newContent = content.replace(new RegExp(findText, 'g'), replaceText)
    editor.commands.setContent(newContent)
  }

  const handleReplaceAll = () => {
    handleReplace()
  }

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
          <button
            onClick={handleReplace}
            className="bg-blue-600 text-white py-2 rounded text-xs font-bold hover:bg-blue-700 transition-colors"
          >
            Replace
          </button>
          <button
            onClick={handleReplaceAll}
            className="bg-gray-100 border border-gray-200 py-2 rounded text-xs font-bold hover:bg-gray-200 transition-colors"
          >
            Replace All
          </button>
        </div>
      </div>
    </div>
  )
}
