import React from 'react'
import {
  Bold, Italic, AlignLeft, AlignCenter, AlignRight,
  Filter, SortAsc, SortDesc, Table as TableIcon,
  Calculator, ChevronDown, Percent, DollarSign,
  Undo, Redo, LayoutGrid, Search, Layers,
  Trash2, PlusSquare, Image as ImageIcon, Save, Download
} from 'lucide-react'

interface SheetRibbonProps {
  onExport: () => void
}

export const SheetRibbon: React.FC<SheetRibbonProps> = ({ onExport }) => {
  return (
    <div className="bg-[#f3f2f1] border-b border-gray-300 select-none font-sans">
      <div className="flex px-4 bg-white border-b border-gray-200">
        {['File', 'Home', 'Insert', 'Page Layout', 'Formulas', 'Data', 'Review', 'View'].map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-1.5 text-xs font-medium border-b-2 transition-colors ${
              i === 1 ? 'border-asan-green text-asan-green' : 'border-transparent text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex h-24 p-1.5 space-x-1 items-stretch overflow-x-auto">

        {/* Quick Access / Export */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
          <div className="flex space-x-2">
            <button onClick={onExport} className="p-1.5 hover:bg-white rounded transition-colors text-asan-green" title="Export XLSX">
              <Download size={16} />
            </button>
            <button className="p-1.5 hover:bg-white rounded transition-colors"><Save size={16} /></button>
          </div>
          <span className="text-[10px] text-gray-400 mt-auto uppercase">File</span>
        </div>

        {/* Font Group */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-1">
              <div className="flex border rounded bg-white px-1 py-0.5 items-center space-x-2">
                <span className="text-xs">Calibri</span>
                <ChevronDown size={10} />
              </div>
              <div className="flex border rounded bg-white px-1 py-0.5 items-center space-x-2 w-12">
                <span className="text-xs">11</span>
                <ChevronDown size={10} />
              </div>
            </div>
            <div className="flex items-center space-x-0.5">
              <button className="p-1.5 hover:bg-white rounded active:bg-green-100"><Bold size={14} /></button>
              <button className="p-1.5 hover:bg-white rounded active:bg-green-100"><Italic size={14} /></button>
              <div className="w-px h-4 bg-gray-300 mx-1"></div>
              <button className="p-1.5 hover:bg-white rounded border border-gray-300 bg-white"><div className="w-3 h-3 bg-green-700"></div></button>
            </div>
          </div>
          <span className="text-[10px] text-gray-400 mt-auto uppercase">Font</span>
        </div>

        {/* Alignment */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
          <div className="grid grid-cols-3 gap-0.5">
             <button className="p-1.5 hover:bg-white rounded"><AlignLeft size={14} /></button>
             <button className="p-1.5 hover:bg-white rounded"><AlignCenter size={14} /></button>
             <button className="p-1.5 hover:bg-white rounded"><AlignRight size={14} /></button>
          </div>
          <span className="text-[10px] text-gray-400 mt-auto uppercase">Alignment</span>
        </div>

        {/* Number */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
          <div className="flex flex-col space-y-1">
             <div className="flex border rounded bg-white px-1 py-0.5 items-center space-x-2 w-full">
                <span className="text-xs">General</span>
                <ChevronDown size={10} />
              </div>
              <div className="flex space-x-2 justify-center">
                 <button className="p-1 hover:bg-white rounded text-green-700"><DollarSign size={14} /></button>
                 <button className="p-1 hover:bg-white rounded text-green-700"><Percent size={14} /></button>
              </div>
          </div>
          <span className="text-[10px] text-gray-400 mt-auto uppercase">Number</span>
        </div>

        {/* Styles */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
           <div className="flex space-x-2">
              <button className="flex flex-col items-center p-1.5 hover:bg-white rounded group">
                <Layers size={20} className="text-green-700" />
                <span className="text-[9px] mt-1">Conditional</span>
              </button>
              <button className="flex flex-col items-center p-1.5 hover:bg-white rounded group">
                <TableIcon size={20} className="text-green-700" />
                <span className="text-[9px] mt-1">Table</span>
              </button>
           </div>
           <span className="text-[10px] text-gray-400 mt-auto uppercase">Styles</span>
        </div>

        {/* Editing */}
        <div className="flex flex-col items-center justify-between px-2">
           <div className="grid grid-cols-2 gap-1">
              <button className="flex items-center space-x-1 px-1.5 py-0.5 hover:bg-white rounded text-[10px]">
                <Calculator size={12} className="text-green-700" />
                <span>AutoSum</span>
              </button>
              <button className="flex items-center space-x-1 px-1.5 py-0.5 hover:bg-white rounded text-[10px]">
                <Filter size={12} className="text-green-700" />
                <span>Filter</span>
              </button>
           </div>
           <span className="text-[10px] text-gray-400 mt-auto uppercase">Editing</span>
        </div>

      </div>
    </div>
  )
}
