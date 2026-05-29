import React, { useState } from 'react'
import { X, Play, Save, FileCode, Zap } from 'lucide-react'

export const MacroEditor: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [code, setCode] = useState(`/**
 * Asan Macro: FormatHeader
 * Description: Centers the first paragraph and makes it H1
 */
function formatHeader() {
  const editor = Asan.getEditor();
  editor.chain().focus().setNode('heading', { level: 1 }).setTextAlign('center').run();
  console.log("Macro executed: Header formatted.");
}`)

  return (
    <div className="w-[450px] bg-[#1e1e1e] text-gray-300 border-l border-black flex flex-col shadow-2xl">
      <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#252526]">
        <h3 className="font-bold text-sm text-yellow-500 flex items-center">
          <Zap size={16} className="mr-2" />
          JS Macro Editor (Asan Script)
        </h3>
        <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded"><X size={16} /></button>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex bg-[#2d2d2d] px-2 py-1 space-x-2 border-b border-gray-800">
           <button className="flex items-center space-x-1 px-2 py-1 text-[10px] hover:bg-[#3d3d3d] rounded">
             <Save size={12} /> <span>Save</span>
           </button>
           <button className="flex items-center space-x-1 px-2 py-1 text-[10px] bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
             <Play size={12} /> <span>Run Macro</span>
           </button>
        </div>

        <div className="flex-1 relative font-mono text-xs">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#1e1e1e] border-r border-gray-800 flex flex-col items-center py-4 text-gray-600 select-none">
            {Array.from({length: 20}).map((_, i) => <div key={i}>{i+1}</div>)}
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full bg-transparent pl-12 pr-4 py-4 outline-none resize-none text-blue-300"
            spellCheck={false}
          />
        </div>

        <div className="h-32 border-t border-gray-800 bg-[#1e1e1e] flex flex-col">
          <div className="px-4 py-1 bg-[#252526] text-[10px] font-bold uppercase flex items-center">
             <FileCode size={12} className="mr-2" /> Console Output
          </div>
          <div className="p-4 overflow-auto text-[10px] font-mono text-gray-500">
            <div>[11:02:14] Loaded asan-script-runtime...</div>
            <div>[11:02:15] Ready for execution.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
