import React, { useState } from 'react'
import { X, Play } from 'lucide-react'

export const EquationEditor: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [latex, setLatex] = useState('\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}')

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col shadow-xl">
      <div className="p-4 border-b flex items-center justify-between bg-gray-50">
        <h3 className="font-bold text-sm text-asan-blue">LaTeX Equation Editor</h3>
        <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded"><X size={16} /></button>
      </div>

      <div className="p-4 space-y-4">
        <textarea
          value={latex}
          onChange={(e) => setLatex(e.target.value)}
          className="w-full h-32 font-mono text-xs border rounded p-2 focus:ring-1 focus:ring-blue-500 outline-none"
          placeholder="Enter LaTeX here..."
        />

        <div className="p-4 bg-gray-50 rounded border border-dashed flex items-center justify-center min-h-[80px]">
           {/* In a real app, use KaTeX or MathJax here */}
           <div className="text-center">
             <div className="text-lg font-serif">∫₀∞ e⁻ˣ² dx = √π/2</div>
             <div className="text-[10px] text-gray-400 mt-2">Preview (Mocked)</div>
           </div>
        </div>

        <button className="w-full bg-asan-blue text-white py-2 rounded text-xs font-bold flex items-center justify-center space-x-2">
          <Play size={14} />
          <span>Insert into Document</span>
        </button>
      </div>

      <div className="flex-1 p-4 overflow-auto border-t">
        <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-2">Symbols</h4>
        <div className="grid grid-cols-4 gap-1">
          {['α', 'β', 'γ', 'δ', 'π', 'Σ', '∫', '∞', '√', '≠', '≤', '≥'].map(s => (
            <button key={s} className="h-8 border rounded hover:bg-gray-100 text-sm">{s}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
