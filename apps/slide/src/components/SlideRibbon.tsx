import React from 'react'
import {
  Play, Square, Image as ImageIcon, Type, Shapes,
  Undo, Redo, Layout, Monitor, Zap, Palette, Layers,
  ChevronDown, MousePointer2
} from 'lucide-react'

export const SlideRibbon: React.FC = () => {
  return (
    <div className="bg-[#f3f2f1] border-b border-gray-300 select-none font-sans">
      <div className="flex px-4 bg-white border-b border-gray-200">
        {['File', 'Home', 'Insert', 'Draw', 'Design', 'Transitions', 'Animations', 'Slide Show', 'Review', 'View'].map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-1.5 text-xs font-medium border-b-2 transition-colors ${
              i === 1 ? 'border-asan-orange text-asan-orange' : 'border-transparent text-gray-600 hover:bg-gray-100'
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

        {/* Slides */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
           <div className="flex flex-col items-center group cursor-pointer hover:bg-white px-2 py-1 rounded">
              <Square size={22} className="text-asan-orange" />
              <div className="flex items-center text-[9px] mt-1">
                New Slide <ChevronDown size={8} />
              </div>
           </div>
           <span className="text-[10px] text-gray-400 mt-auto uppercase">Slides</span>
        </div>

        {/* Font Group */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-1">
              <div className="flex border rounded bg-white px-1 py-0.5 items-center space-x-2">
                <span className="text-xs">Segoe UI</span>
                <ChevronDown size={10} />
              </div>
              <div className="flex border rounded bg-white px-1 py-0.5 items-center space-x-2 w-12">
                <span className="text-xs">44</span>
                <ChevronDown size={10} />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
               <button className="font-bold text-sm hover:text-asan-orange">B</button>
               <button className="italic text-sm hover:text-asan-orange">I</button>
               <button className="underline text-sm hover:text-asan-orange">U</button>
               <button className="text-sm text-asan-orange font-bold border-b border-asan-orange">A</button>
            </div>
          </div>
          <span className="text-[10px] text-gray-400 mt-auto uppercase">Font</span>
        </div>

        {/* Insert / Draw */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
           <div className="grid grid-cols-2 gap-2">
              <button className="flex flex-col items-center p-1 hover:bg-white rounded text-asan-orange">
                <ImageIcon size={18} />
                <span className="text-[8px]">Images</span>
              </button>
              <button className="flex flex-col items-center p-1 hover:bg-white rounded text-asan-orange">
                <Shapes size={18} />
                <span className="text-[8px]">Shapes</span>
              </button>
           </div>
           <span className="text-[10px] text-gray-400 mt-auto uppercase">Drawing</span>
        </div>

        {/* Slide Show */}
        <div className="flex flex-col items-center justify-between px-2">
           <button className="flex flex-col items-center p-2 hover:bg-white rounded group">
              <Play size={24} className="text-asan-orange group-hover:scale-110 transition-transform" />
              <span className="text-[10px] mt-1">Beginning</span>
           </button>
           <span className="text-[10px] text-gray-400 mt-auto uppercase">Show</span>
        </div>

      </div>
    </div>
  )
}
