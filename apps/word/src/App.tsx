import React, { useState, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import Image from '@tiptap/extension-image'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
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
  const [wordCount, setWordCount] = useState(0)
  const [charCount, setCharCount] = useState(0)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Image,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: `
      <h1 style="text-align: center">Quarterly Business Report</h1>
      <p style="text-align: center">Prepared for Asan Office Stakeholders</p>
      <hr />
      <p><strong>Executive Summary</strong></p>
      <p>This report outlines the progress made in the development of the <strong>Asan Office Suite</strong>. We have achieved core architecture stability and are now moving into specialized component refinement.</p>
      <p></p>
      <table>
        <tbody>
          <tr>
            <th>Module</th>
            <th>Status</th>
            <th>Progress</th>
          </tr>
          <tr>
            <td>Word</td>
            <td>Beta</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>Sheet</td>
            <td>Alpha</td>
            <td>65%</td>
          </tr>
        </tbody>
      </table>
      <p></p>
      <p><em>Security Note:</em> This document is encrypted locally using AES-256. No cloud synchronization has occurred.</p>
    `,
    onUpdate({ editor }) {
      const text = editor.getText()
      setWordCount(text.split(/\s+/).filter(word => word.length > 0).length)
      setCharCount(text.length)
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[1056px] w-[816px] bg-white shadow-lg p-16 my-8 border border-gray-300',
      },
    },
  })

  useEffect(() => {
    if (editor) {
      const text = editor.getText()
      setWordCount(text.split(/\s+/).filter(word => word.length > 0).length)
      setCharCount(text.length)
    }
  }, [editor])

  return (
    <div className="flex flex-col h-full bg-[#f3f2f1] overflow-hidden font-sans text-gray-800">
      <Ribbon editor={editor} />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Toolbar */}
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

        {/* Sidebars */}
        {sidebar === 'find' && <FindReplace editor={editor} onClose={() => setSidebar(null)} />}
        {sidebar === 'equation' && <EquationEditor onClose={() => setSidebar(null)} />}
        {sidebar === 'grammar' && <GrammarSidebar onClose={() => setSidebar(null)} />}
        {sidebar === 'macro' && <MacroEditor onClose={() => setSidebar(null)} />}
        {sidebar === 'properties' && (
          <div className="w-80 bg-white border-l p-6 space-y-6 shadow-xl">
             <div className="flex justify-between items-center mb-4 font-bold">Document Properties</div>
             <div className="space-y-4 text-sm">
                <div>
                  <label className="text-xs text-gray-400 block mb-1 uppercase font-bold">Word Count</label>
                  <div className="text-lg font-bold">{wordCount}</div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 block mb-1 uppercase font-bold">Character Count</label>
                  <div className="text-lg font-bold">{charCount}</div>
                </div>
             </div>
          </div>
        )}
      </div>

      <div className="h-6 bg-asan-blue text-white flex items-center justify-between px-4 text-[10px] select-none z-20">
        <div className="flex items-center space-x-4">
          <span>Page 1 of 1</span>
          <span>{wordCount} words</span>
          <span>English (United States)</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>100%</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .ProseMirror table { border-collapse: collapse; table-layout: fixed; width: 100%; margin: 0; overflow: hidden; border: 1px solid #ccc; }
        .ProseMirror td, .ProseMirror th { min-width: 1em; border: 1px solid #ccc; padding: 3px 5px; vertical-align: top; box-sizing: border-box; position: relative; }
        .ProseMirror th { font-weight: bold; text-align: left; background-color: #f1f3f5; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  )
}
