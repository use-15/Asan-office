import React from 'react'
import { X, Zap, Clock, Play } from 'lucide-react'

export const TransitionsSidebar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col shadow-xl">
      <div className="p-4 border-b flex items-center justify-between bg-gray-50">
        <h3 className="font-bold text-sm text-asan-orange flex items-center">
          <Zap size={16} className="mr-2" />
          Transitions & Animations
        </h3>
        <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded"><X size={16} /></button>
      </div>

      <div className="p-4 flex-1 space-y-6 overflow-y-auto">
        <div className="space-y-3">
           <label className="text-[10px] font-bold text-gray-400 uppercase">Transition to this slide</label>
           <div className="grid grid-cols-3 gap-2">
              {['None', 'Morph', 'Fade', 'Push', 'Wipe', 'Split', 'Reveal', 'Cut', 'Random'].map(t => (
                <button key={t} className={`p-2 border rounded text-[10px] hover:border-asan-orange transition-all ${t === 'Morph' ? 'bg-orange-50 border-asan-orange' : 'bg-white'}`}>
                   {t}
                </button>
              ))}
           </div>
        </div>

        <div className="space-y-4 border-t pt-4">
           <label className="text-[10px] font-bold text-gray-400 uppercase">Timing</label>
           <div className="flex items-center justify-between text-xs">
              <span>Duration</span>
              <div className="flex items-center space-x-2 border rounded px-2 py-1">
                 <Clock size={12} className="text-gray-400" />
                 <span>02.00</span>
              </div>
           </div>
           <button className="w-full text-[10px] border py-2 rounded hover:bg-gray-50">Apply To All Slides</button>
        </div>

        <div className="space-y-3 border-t pt-4">
           <label className="text-[10px] font-bold text-gray-400 uppercase">Object Animations</label>
           <div className="p-4 border border-dashed rounded text-center text-[10px] text-gray-400">
              Select an object on the slide to animate.
           </div>
        </div>
      </div>

      <div className="p-4 border-t bg-gray-50 flex space-x-2">
         <button className="flex-1 bg-asan-orange text-white py-2 rounded text-xs font-bold hover:opacity-90 flex items-center justify-center">
           <Play size={14} className="mr-2" /> Preview
         </button>
      </div>
    </div>
  )
}
