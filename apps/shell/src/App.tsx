import React, { useState, Suspense, lazy } from 'react'
import {
  FileText,
  Table,
  Presentation,
  FileCode,
  Clock,
  Plus,
  Settings,
  Search,
  LayoutGrid,
  ChevronRight
} from 'lucide-react'

// Lazy load sub-apps
const AsanWord = lazy(() => import('../../word/src/App'))
const AsanSheet = lazy(() => import('../../sheet/src/App'))
const AsanSlide = lazy(() => import('../../slide/src/App'))
const AsanPDF = lazy(() => import('../../pdf/src/App'))

type AppMode = 'dashboard' | 'word' | 'sheet' | 'slide' | 'pdf'

function App() {
  const [mode, setMode] = useState<AppMode>('dashboard')

  const apps = [
    { id: 'word', name: 'Asan Word', icon: FileText, color: 'text-asan-blue', bg: 'bg-blue-50' },
    { id: 'sheet', name: 'Asan Sheet', icon: Table, color: 'text-asan-green', bg: 'bg-green-50' },
    { id: 'slide', name: 'Asan Slide', icon: Presentation, color: 'text-asan-orange', bg: 'bg-orange-50' },
    { id: 'pdf', name: 'Asan PDF', icon: FileCode, color: 'text-asan-red', bg: 'bg-red-50' },
  ]

  const recentDocs = [
    { name: 'Quarterly Report.docx', type: 'word', date: '2 hours ago' },
    { name: 'Budget 2024.xlsx', type: 'sheet', date: 'Yesterday' },
    { name: 'Product Roadmap.pptx', type: 'slide', date: '3 days ago' },
    { name: 'Invoice_INV-091.pdf', type: 'pdf', date: 'Last week' },
  ]

  if (mode !== 'dashboard') {
    return (
      <div className="w-screen h-screen flex flex-col bg-white overflow-hidden">
        <div className="h-10 bg-gray-100 border-b flex items-center px-4 justify-between select-none">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMode('dashboard')}
              className="p-1 hover:bg-gray-200 rounded"
            >
              <LayoutGrid size={16} />
            </button>
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Asan {mode.charAt(0).toUpperCase() + mode.slice(1)} | <span className="text-blue-600">OFFLINE</span>
            </span>
          </div>
          <div className="flex space-x-2">
             <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
             <div className="w-3 h-3 rounded-full bg-green-500"></div>
             <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <Suspense fallback={<div className="flex items-center justify-center h-full">Loading Asan {mode}...</div>}>
            {mode === 'word' && <AsanWord />}
            {mode === 'sheet' && <AsanSheet />}
            {mode === 'slide' && <AsanSlide />}
            {mode === 'pdf' && <AsanPDF />}
          </Suspense>
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-screen h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-16 bg-white border-r flex flex-col items-center py-6 space-y-6">
        <div className="w-10 h-10 bg-[#0078d4] rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4 shadow-sm">
          A
        </div>
        <button className="p-3 text-blue-600 bg-blue-50 rounded-xl">
          <LayoutGrid size={24} />
        </button>
        <button className="p-3 text-gray-400 hover:text-gray-600">
          <Clock size={24} />
        </button>
        <div className="flex-1"></div>
        <button className="p-3 text-gray-400 hover:text-gray-600">
          <Settings size={24} />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 bg-white border-b">
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search documents"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-600">Welcome, Senior Developer</span>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full"></div>
          </div>
        </header>

        {/* Dashboard Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-10">

          {/* App Launchers */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Plus className="mr-2 text-blue-600" size={20} />
              Create New
            </h2>
            <div className="grid grid-cols-4 gap-6">
              {apps.map(app => (
                <button
                  key={app.id}
                  onClick={() => setMode(app.id as AppMode)}
                  className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left"
                >
                  <div className={`w-12 h-12 ${app.bg} ${app.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <app.icon size={28} />
                  </div>
                  <h3 className="font-bold text-gray-800">{app.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">Start a blank document</p>
                </button>
              ))}
            </div>
          </section>

          {/* Recent Documents */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recent Documents</h2>
              <button className="text-blue-600 text-sm font-semibold hover:underline flex items-center">
                View All <ChevronRight size={16} />
              </button>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Modified</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentDocs.map((doc, i) => (
                    <tr key={i} className="hover:bg-gray-50 cursor-pointer group">
                      <td className="px-6 py-4 flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          doc.type === 'word' ? 'bg-blue-50 text-blue-600' :
                          doc.type === 'sheet' ? 'bg-green-50 text-green-600' :
                          doc.type === 'slide' ? 'bg-orange-50 text-orange-600' :
                          'bg-red-50 text-red-600'
                        }`}>
                          {doc.type === 'word' && <FileText size={18} />}
                          {doc.type === 'sheet' && <Table size={18} />}
                          {doc.type === 'slide' && <Presentation size={18} />}
                          {doc.type === 'pdf' && <FileCode size={18} />}
                        </div>
                        <span className="font-medium group-hover:text-blue-600">{doc.name}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{doc.date}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100">
                          Local Only
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="h-10 bg-white border-t px-8 flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-widest">
           <div>Asan Office v0.1.0-alpha</div>
           <div className="flex space-x-4">
             <span>Security: AES-256 Enabled</span>
             <span>Network: DISCONNECTED (SAFE)</span>
           </div>
        </footer>
      </main>
    </div>
  )
}

export default App
