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
  ChevronRight,
  ShieldCheck,
  HardDrive
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
    { id: 'word', name: 'Asan Word', icon: FileText, color: 'text-asan-blue', bg: 'bg-blue-50', desc: 'Documents & Reports' },
    { id: 'sheet', name: 'Asan Sheet', icon: Table, color: 'text-asan-green', bg: 'bg-green-50', desc: 'Data & Analysis' },
    { id: 'slide', name: 'Asan Slide', icon: Presentation, color: 'text-asan-orange', bg: 'bg-orange-50', desc: 'Visual Presentations' },
    { id: 'pdf', name: 'Asan PDF', icon: FileCode, color: 'text-asan-red', bg: 'bg-red-50', desc: 'Secure PDF Editing' },
  ]

  const recentDocs = [
    { name: 'Quarterly Business Report.docx', type: 'word', date: '2 hours ago', size: '1.2 MB' },
    { name: 'Financial_Budget_2024.xlsx', type: 'sheet', date: 'Yesterday', size: '450 KB' },
    { name: 'Product_Roadmap_V3.pptx', type: 'slide', date: '3 days ago', size: '12.5 MB' },
    { name: 'Security_Audit_Draft.pdf', type: 'pdf', date: 'Last week', size: '2.1 MB' },
  ]

  if (mode !== 'dashboard') {
    return (
      <div className="w-screen h-screen flex flex-col bg-white overflow-hidden animate-in fade-in duration-300">
        <div className="h-10 bg-gray-100 border-b flex items-center px-4 justify-between select-none">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMode('dashboard')}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
              title="Return to Dashboard"
            >
              <LayoutGrid size={16} />
            </button>
            <div className="h-4 w-px bg-gray-300 mx-1"></div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              Asan {mode.charAt(0).toUpperCase() + mode.slice(1)} | <span className="text-blue-600">OFFLINE SECURE</span>
            </span>
          </div>
          <div className="flex space-x-2">
             <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
             <div className="w-3 h-3 rounded-full bg-green-500"></div>
             <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <Suspense fallback={
            <div className="flex flex-col items-center justify-center h-full bg-[#f3f2f1] space-y-4">
               <div className={`w-12 h-12 rounded-xl animate-pulse ${
                 mode === 'word' ? 'bg-asan-blue' : mode === 'sheet' ? 'bg-asan-green' : mode === 'slide' ? 'bg-asan-orange' : 'bg-asan-red'
               }`}></div>
               <span className="text-xs font-bold text-gray-400 uppercase animate-pulse">Launching Asan {mode}...</span>
            </div>
          }>
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
    <div className="flex w-screen h-screen bg-[#f3f2f1] text-gray-800 font-sans animate-in fade-in duration-500">
      {/* Sidebar Navigation */}
      <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-6 shadow-sm">
        <div className="w-10 h-10 bg-[#0078d4] rounded-xl flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg ring-2 ring-blue-100">
          A
        </div>
        <button className="p-3 text-blue-600 bg-blue-50 rounded-2xl shadow-sm">
          <LayoutGrid size={24} />
        </button>
        <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-2xl transition-all">
          <Clock size={24} />
        </button>
        <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-2xl transition-all">
          <Plus size={24} />
        </button>
        <div className="flex-1"></div>
        <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-2xl transition-all">
          <Settings size={24} />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-10 bg-white border-b border-gray-200">
          <div className="relative w-[480px]">
            <Search className="absolute left-4 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search local documents..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-100 focus:bg-white focus:border-blue-300 outline-none transition-all text-sm font-medium"
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-end">
               <span className="text-sm font-bold">Senior Developer</span>
               <span className="text-[10px] text-green-600 font-bold uppercase tracking-widest flex items-center">
                 <ShieldCheck size={10} className="mr-1" /> Verified Session
               </span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl shadow-md border-2 border-white"></div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-10 space-y-12">

          {/* Create New Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-black tracking-tight flex items-center">
                 Create New
               </h2>
               <div className="flex items-center space-x-2 text-[10px] font-bold text-gray-400 bg-gray-200/50 px-3 py-1 rounded-full uppercase">
                  <HardDrive size={10} />
                  <span>Available Storage: 842 GB</span>
               </div>
            </div>
            <div className="grid grid-cols-4 gap-8">
              {apps.map(app => (
                <button
                  key={app.id}
                  onClick={() => setMode(app.id as AppMode)}
                  className="group relative p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all text-left overflow-hidden"
                >
                  <div className={`w-14 h-14 ${app.bg} ${app.color} rounded-[20px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <app.icon size={32} />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-1 tracking-tight">{app.name}</h3>
                  <p className="text-xs text-gray-400 font-medium">{app.desc}</p>

                  {/* Hover decoration */}
                  <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${app.bg} opacity-0 group-hover:opacity-20 transition-opacity blur-2xl`}></div>
                </button>
              ))}
            </div>
          </section>

          {/* Recent Documents Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black tracking-tight">Recent Documents</h2>
              <button className="text-blue-600 text-sm font-black hover:underline flex items-center uppercase tracking-widest">
                Browse All <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50/50 border-b border-gray-100">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Name</th>
                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Size</th>
                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Modified</th>
                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentDocs.map((doc, i) => (
                    <tr key={i} className="hover:bg-gray-50/80 cursor-pointer group transition-colors">
                      <td className="px-8 py-6 flex items-center space-x-4">
                        <div className={`p-3 rounded-2xl ${
                          doc.type === 'word' ? 'bg-blue-50 text-blue-600' :
                          doc.type === 'sheet' ? 'bg-green-50 text-green-600' :
                          doc.type === 'slide' ? 'bg-orange-50 text-orange-600' :
                          'bg-red-50 text-red-600'
                        }`}>
                          {doc.type === 'word' && <FileText size={20} />}
                          {doc.type === 'sheet' && <Table size={20} />}
                          {doc.type === 'slide' && <Presentation size={20} />}
                          {doc.type === 'pdf' && <FileCode size={20} />}
                        </div>
                        <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{doc.name}</span>
                      </td>
                      <td className="px-8 py-6 text-sm text-gray-400 font-medium">{doc.size}</td>
                      <td className="px-8 py-6 text-sm text-gray-400 font-medium">{doc.date}</td>
                      <td className="px-8 py-6">
                        <div className="flex items-center space-x-2">
                           <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                           <span className="text-[10px] font-black text-green-600 uppercase tracking-tighter">Safe (Local)</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="h-10 bg-white border-t border-gray-200 px-10 flex items-center justify-between text-[9px] text-gray-400 font-black uppercase tracking-[0.3em] select-none">
           <div className="flex items-center">
              <span className="text-gray-300 mr-4">v0.1.0-STABLE</span>
              <span>© 2024 Asan Office Suite</span>
           </div>
           <div className="flex space-x-8">
             <span className="flex items-center text-blue-600"><ShieldCheck size={10} className="mr-1" /> AES-256 Hardened</span>
             <span className="text-gray-300">Disconnected Mode Active</span>
           </div>
        </footer>
      </main>
    </div>
  )
}

export default App
