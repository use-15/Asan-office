import React, { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import { Ribbon } from './components/Ribbon'
import { FindReplace } from './components/FindReplace'
import { EquationEditor } from './components/EquationEditor'
import { GrammarSidebar } from './components/GrammarSidebar'
import { MacroEditor } from './components/MacroEditor'
import {
  FileText,
  Clock,
  Search,
  Sigma,
  Info,
  CheckCircle,
  FileDigit,
  Code
} from 'lucide-react'

export default function AsanWord() {
  const [sidebar, setSidebar] = useState<'find' | 'equation' | 'properties' | 'history' | 'grammar' | 'macro' | null>(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: `
      <h1 style="text-align: center">Quarterly Business Report</h1>
      <p style="text-align: center">Prepared for Asan Office Stakeholders</p>
      <hr />
      <p><strong>Executive Summary</strong></p>
      <p>This report outlines the progress made in the development of the <strong>Asan Office Suite</strong>. We have achieved core architecture stability and are now moving into specialized component refinement.</p>
      <p></p>
      <p><em>Security Note:</em> This document is encrypted locally using AES-256. No cloud synchronization has occurred, ensuring maximum privacy for corporate data.</p>
      <p></p>
      <p><strong>Development Milestones:</strong></p>
      <ul data-type="taskList">
        <li data-checked="true">Initialize Monorepo</li>
        <li data-checked="true">Implement Word Core</li>
        <li data-checked="false">Excel-Compatible Sheet Engine</li>
        <li data-checked="false">PDF Annotation System</li>
      </ul>
    `,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[1056px] w-[816px] bg-white shadow-lg p-16 my-8',
      },
    },
  })

  return (
    <div className="flex flex-col h-full bg-gray-200 overflow-hidden font-sans text-gray-800">
      <Ribbon editor={editor} />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Toolbar (Quick Access for sidebars) */}
        <div className="w-10 bg-white border-r flex flex-col items-center py-4 space-y-4 shadow-sm z-10">
          <button onClick={() => setSidebar(sidebar === 'find' ? null : 'find')} className={`p-2 rounded ${sidebar === 'find' ? 'text-asan-blue bg-blue-50' : 'text-gray-400 hover:bg-gray-100'}`}>
            <Search size={20} />
          </button>
          <button onClick={() => setSidebar(sidebar === 'equation' ? null : 'equation')} className={`p-2 rounded ${sidebar === 'equation' ? 'text-asan-blue bg-blue-50' : 'text-gray-400 hover:bg-gray-100'}`}>
            <Sigma size={20} />
          </button>
          <button onClick={() => setSidebar(sidebar === 'grammar' ? null : 'grammar')} className={`p-2 rounded ${sidebar === 'grammar' ? 'text-asan-blue bg-blue-50' : 'text-gray-400 hover:bg-gray-100'}`}>
            <CheckCircle size={20} />
          </button>
          <button onClick={() => setSidebar(sidebar === 'macro' ? null : 'macro')} className={`p-2 rounded ${sidebar === 'macro' ? 'text-asan-blue bg-blue-50' : 'text-gray-400 hover:bg-gray-100'}`}>
            <Code size={20} />
          </button>
          <button onClick={() => setSidebar(sidebar === 'history' ? null : 'history')} className={`p-2 rounded ${sidebar === 'history' ? 'text-asan-blue bg-blue-50' : 'text-gray-400 hover:bg-gray-100'}`}>
            <Clock size={20} />
          </button>
          <div className="flex-1"></div>
          <button onClick={() => setSidebar(sidebar === 'properties' ? null : 'properties')} className={`p-2 rounded ${sidebar === 'properties' ? 'text-asan-blue bg-blue-50' : 'text-gray-400 hover:bg-gray-100'}`}>
            <Info size={20} />
          </button>
        </div>

        {/* Editor Area */}
        <div className="flex-1 overflow-y-auto scrollbar-hide flex justify-center bg-[#e6e6e6]">
          <EditorContent editor={editor} />
        </div>

        {/* Dynamic Sidebars */}
        {sidebar === 'find' && <FindReplace onClose={() => setSidebar(null)} />}
        {sidebar === 'equation' && <EquationEditor onClose={() => setSidebar(null)} />}
        {sidebar === 'grammar' && <GrammarSidebar onClose={() => setSidebar(null)} />}
        {sidebar === 'macro' && <MacroEditor onClose={() => setSidebar(null)} />}
        {sidebar === 'properties' && (
          <div className="w-80 bg-white border-l p-6 space-y-6 shadow-xl">
             <div className="flex justify-between items-center mb-4">
               <h3 className="font-bold">Document Properties</h3>
               <button onClick={() => setSidebar(null)} className="text-gray-400 hover:text-gray-600">×</button>
             </div>
             <div className="space-y-4 text-sm">
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Title</label>
                  <input type="text" defaultValue="Quarterly Business Report" className="w-full border rounded p-2" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Author</label>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold">SD</div>
                    <span>Senior Developer</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t pt-4">
                   <div className="text-center">
                      <div className="text-xl font-bold">124</div>
                      <div className="text-[10px] text-gray-400 uppercase">Words</div>
                   </div>
                   <div className="text-center">
                      <div className="text-xl font-bold">842</div>
                      <div className="text-[10px] text-gray-400 uppercase">Chars</div>
                   </div>
                </div>
             </div>
          </div>
        )}
        {sidebar === 'history' && (
          <div className="w-80 bg-white border-l p-6 space-y-4 shadow-xl">
            <h3 className="font-bold">Version History</h3>
            <div className="space-y-3">
               {[
                 { time: '10:45 AM', user: 'Senior Dev', desc: 'Added executive summary' },
                 { time: '09:30 AM', user: 'Senior Dev', desc: 'Initial draft' },
               ].map((v, i) => (
                 <div key={i} className="p-3 border rounded-lg hover:border-asan-blue cursor-pointer transition-colors group">
                   <div className="flex justify-between items-center mb-1">
                     <span className="font-bold text-sm">{v.time}</span>
                     <span className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">v{2-i}.0</span>
                   </div>
                   <p className="text-xs text-gray-500">{v.desc}</p>
                 </div>
               ))}
            </div>
            <button className="w-full border-2 border-dashed py-3 rounded-lg text-xs text-gray-400 hover:bg-gray-50 flex items-center justify-center space-x-2">
               <FileDigit size={14} />
               <span>Save as New Snapshot</span>
            </button>
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#0078d4] text-white flex items-center justify-between px-4 text-[10px] select-none z-20">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer hover:bg-white/10 px-1 rounded">
             <FileText size={12} />
             <span>Page 1 of 1</span>
          </div>
          <span className="cursor-pointer hover:bg-white/10 px-1 rounded">124 words</span>
          <span className="cursor-pointer hover:bg-white/10 px-1 rounded">English (United States)</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
             <CheckCircle size={12} />
             <span>Ready</span>
          </span>
          <div className="flex items-center space-x-2">
            <span>100%</span>
            <input type="range" className="w-24 h-1 accent-white" />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .ProseMirror {
          outline: none;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  )
}
