import React, { useState } from 'react'
import { Workbook } from 'fortune-sheet'
import '@fortune-sheet/react/dist/index.css'
import ExcelJS from 'exceljs'
import { SheetRibbon } from './components/SheetRibbon'
import { PivotTableManager } from './components/PivotTableManager'
import {
  Settings,
  HelpCircle,
  Database,
  LineChart,
  BarChart3,
  Filter,
  Layers,
  Search,
  ChevronDown
} from 'lucide-react'

export default function AsanSheet() {
  const [showPivot, setShowPivot] = useState(false)
  const [data, setData] = useState([
    {
      name: "Budget 2024",
      celldata: [
        { r: 0, c: 0, v: { ct: { fa: "General", t: "g" }, m: "Category", v: "Category", bl: 1, bg: "#f3f2f1" } },
        { r: 0, c: 1, v: { ct: { fa: "General", t: "g" }, m: "Q1", v: "Q1", bl: 1, bg: "#f3f2f1" } },
        { r: 0, c: 2, v: { ct: { fa: "General", t: "g" }, m: "Q2", v: "Q2", bl: 1, bg: "#f3f2f1" } },
        { r: 1, c: 0, v: "Marketing" },
        { r: 1, c: 1, v: 12000 },
        { r: 1, c: 2, v: 15000 },
        { r: 2, c: 0, v: "Development" },
        { r: 2, c: 1, v: 45000 },
        { r: 2, c: 2, v: 48000 },
        { r: 3, c: 0, v: "Operations" },
        { r: 3, c: 1, v: 8000 },
        { r: 3, c: 2, v: 8500 },
        { r: 4, c: 0, v: { m: "Total", v: "Total", bl: 1 } },
        { r: 4, c: 1, v: { f: "=SUM(B2:B4)", v: 65000, bl: 1, fc: "#107c10" } },
        { r: 4, c: 2, v: { f: "=SUM(C2:C4)", v: 71500, bl: 1, fc: "#107c10" } },
      ],
      config: {
        columnlen: { "0": 150, "1": 100, "2": 100 }
      }
    }
  ])

  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Sheet1')

    // Simple export of data
    data[0].celldata?.forEach(cell => {
      const r = (cell.r ?? 0) + 1
      const c = (cell.c ?? 0) + 1
      const row = worksheet.getRow(r)
      const cellObj = row.getCell(c)

      if (typeof cell.v === 'object') {
        cellObj.value = cell.v.v ?? cell.v.m
        if (cell.v.f) cellObj.value = { formula: cell.v.f.substring(1), result: cell.v.v }
      } else {
        cellObj.value = cell.v
      }
    })

    const buffer = await workbook.xlsx.writeBuffer()
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'Asan_Budget_2024.xlsx'
    link.click()
  }

  return (
    <div className="flex flex-col h-full bg-[#f3f2f1] overflow-hidden font-sans text-gray-800">
      <SheetRibbon onExport={handleExport} />

      <div className="h-9 bg-white border-b flex items-center px-2 space-x-2">
         <div className="w-16 h-6 border rounded bg-gray-50 flex items-center justify-center text-xs font-mono">B5</div>
         <div className="h-4 w-px bg-gray-300"></div>
         <div className="text-gray-400 italic text-sm px-2">fx</div>
         <div className="flex-1 h-6 border rounded px-2 text-sm flex items-center font-mono text-green-700 font-bold">
            =SUM(B2:B4)
         </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        <div className="w-10 bg-white border-r flex flex-col items-center py-4 space-y-4 shadow-sm z-10">
          <button className="p-2 text-asan-green bg-green-50 rounded shadow-sm"><Search size={20} /></button>
          <button onClick={() => setShowPivot(!showPivot)} className={`p-2 rounded ${showPivot ? 'text-asan-green bg-green-50' : 'text-gray-400 hover:bg-gray-100'}`} title="PivotTable">
            <Layers size={20} />
          </button>
          <button className="p-2 text-gray-400 hover:bg-gray-100"><BarChart3 size={20} /></button>
          <button className="p-2 text-gray-400 hover:bg-gray-100"><Filter size={20} /></button>
          <div className="flex-1"></div>
          <button className="p-2 text-gray-400 hover:bg-gray-100"><Settings size={20} /></button>
        </div>

        <div className="flex-1 relative">
          <Workbook
            data={data}
            onChange={setData}
            options={{
              showToolbar: false,
              showGrid: true,
              allowEdit: true,
              showSheetTabs: true,
            }}
          />
        </div>

        {showPivot && <PivotTableManager onClose={() => setShowPivot(false)} />}
      </div>

      <div className="h-6 bg-[#107c10] text-white flex items-center justify-between px-4 text-[10px] select-none z-20">
        <div className="flex items-center space-x-4">
          <span className="font-bold">Budget 2024</span>
          <span className="text-white/60 uppercase tracking-tighter border-l border-white/20 pl-4">Ready</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3 bg-white/10 px-2 py-0.5 rounded">
             <span>Sum: 136,500</span>
             <span>Count: 6</span>
             <span>Avg: 22,750</span>
          </div>
          <div className="flex items-center space-x-4 border-l border-white/20 pl-4">
            <LineChart size={12} className="cursor-pointer" />
            <span>100%</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .fortune-container { width: 100% !important; height: 100% !important; }
        .fortune-sheet-selection { border-color: #107c10 !important; background: rgba(16, 124, 16, 0.1) !important; }
      `}} />
    </div>
  )
}
