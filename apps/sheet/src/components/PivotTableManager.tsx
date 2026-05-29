import React from 'react'
import { X, Table, Filter, ChevronRight, ChevronDown } from 'lucide-react'

export const PivotTableManager: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="w-72 bg-white border-l border-gray-200 flex flex-col shadow-xl animate-in slide-in-from-right">
      <div className="p-4 border-b flex items-center justify-between bg-gray-50">
        <h3 className="font-bold text-sm text-asan-green">PivotTable Fields</h3>
        <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded"><X size={16} /></button>
      </div>

      <div className="p-4 flex-1 space-y-6">
        <div className="space-y-2">
           <label className="text-[10px] font-bold text-gray-400 uppercase">Choose fields to add</label>
           <div className="space-y-1">
              {['Category', 'Quarter', 'Amount', 'Department', 'Region'].map(f => (
                <div key={f} className="flex items-center space-x-2 text-xs">
                   <input type="checkbox" defaultChecked={f === 'Category' || f === 'Amount'} />
                   <span>{f}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
           <div className="border rounded p-2 h-24 flex flex-col">
              <span className="text-[9px] font-bold text-gray-400 uppercase mb-1 flex items-center"><Filter size={8} className="mr-1"/> Filters</span>
              <div className="flex-1 bg-gray-50 rounded"></div>
           </div>
           <div className="border rounded p-2 h-24 flex flex-col">
              <span className="text-[9px] font-bold text-gray-400 uppercase mb-1 flex items-center"><Table size={8} className="mr-1"/> Columns</span>
              <div className="flex-1 bg-gray-50 rounded p-1">
                 <div className="bg-white border rounded px-1 text-[9px] shadow-sm">Quarter</div>
              </div>
           </div>
           <div className="border rounded p-2 h-24 flex flex-col">
              <span className="text-[9px] font-bold text-gray-400 uppercase mb-1 flex items-center"><ChevronRight size={8} className="mr-1"/> Rows</span>
              <div className="flex-1 bg-gray-50 rounded p-1">
                 <div className="bg-white border rounded px-1 text-[9px] shadow-sm">Category</div>
              </div>
           </div>
           <div className="border rounded p-2 h-24 flex flex-col">
              <span className="text-[9px] font-bold text-gray-400 uppercase mb-1 flex items-center">∑ Values</span>
              <div className="flex-1 bg-gray-50 rounded p-1">
                 <div className="bg-white border rounded px-1 text-[9px] shadow-sm font-bold">Sum of Amount</div>
              </div>
           </div>
        </div>

        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
           <div className="text-[10px] font-bold text-green-700 mb-1">Recommended PivotTables</div>
           <p className="text-[9px] text-green-600">Based on your selection, we suggest grouping by 'Region' to see geographic performance.</p>
        </div>
      </div>

      <div className="p-4 border-t bg-gray-50">
         <button className="w-full bg-asan-green text-white py-2 rounded text-xs font-bold hover:opacity-90">
           Update Table
         </button>
      </div>
    </div>
  )
}
