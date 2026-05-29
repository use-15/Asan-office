import React from 'react'
import {
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, Type, Image as ImageIcon, Table as TableIcon,
  Search, Replace, Undo, Redo, ChevronDown, Highlighter,
  Save, Printer, FileText, Layout, CheckCircle, Eye
} from 'lucide-react'

interface RibbonProps {
  editor: any
}

export const Ribbon: React.FC<RibbonProps> = ({ editor }) => {
  if (!editor) return null

  return (
    <div className="bg-[#f3f2f1] border-b border-gray-300 select-none font-sans">
      {/* Tab Header */}
      <div className="flex px-4 bg-white border-b border-gray-200">
        {['File', 'Home', 'Insert', 'Layout', 'Review', 'View'].map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-1.5 text-xs font-medium border-b-2 transition-colors ${
              i === 1 ? 'border-asan-blue text-asan-blue' : 'border-transparent text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Ribbon Controls */}
      <div className="flex h-24 p-1.5 space-x-1 items-stretch overflow-x-auto">

        {/* Quick Access / Clipboard */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
          <div className="flex space-x-2">
            <button onClick={() => editor.chain().focus().undo().run()} className="p-1.5 hover:bg-white rounded transition-colors" title="Undo">
              <Undo size={16} />
            </button>
            <button onClick={() => editor.chain().focus().redo().run()} className="p-1.5 hover:bg-white rounded transition-colors" title="Redo">
              <Redo size={16} />
            </button>
          </div>
          <span className="text-[10px] text-gray-400 mt-auto uppercase">Clipboard</span>
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
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`p-1.5 rounded ${editor.isActive('bold') ? 'bg-blue-50 text-blue-700' : 'hover:bg-white'}`}
              >
                <Bold size={14} />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`p-1.5 rounded ${editor.isActive('italic') ? 'bg-blue-50 text-blue-700' : 'hover:bg-white'}`}
              >
                <Italic size={14} />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`p-1.5 rounded ${editor.isActive('underline') ? 'bg-blue-50 text-blue-700' : 'hover:bg-white'}`}
              >
                <Underline size={14} />
              </button>
              <div className="w-px h-4 bg-gray-300 mx-1"></div>
              <button className="p-1.5 hover:bg-white rounded">
                <Highlighter size={14} />
              </button>
              <button className="p-1.5 hover:bg-white rounded flex flex-col items-center">
                <Type size={14} />
                <div className="w-full h-0.5 bg-red-600"></div>
              </button>
            </div>
          </div>
          <span className="text-[10px] text-gray-400 mt-auto uppercase">Font</span>
        </div>

        {/* Paragraph Group */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
          <div className="grid grid-cols-4 gap-0.5">
             <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className="p-1.5 hover:bg-white rounded">
               <AlignLeft size={14} />
             </button>
             <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className="p-1.5 hover:bg-white rounded">
               <AlignCenter size={14} />
             </button>
             <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className="p-1.5 hover:bg-white rounded">
               <AlignRight size={14} />
             </button>
             <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} className="p-1.5 hover:bg-white rounded">
               <AlignJustify size={14} />
             </button>
             <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="p-1.5 hover:bg-white rounded">
               <List size={14} />
             </button>
             <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="p-1.5 hover:bg-white rounded">
               <ListOrdered size={14} />
             </button>
          </div>
          <span className="text-[10px] text-gray-400 mt-auto uppercase">Paragraph</span>
        </div>

        {/* Insert Group */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300">
           <div className="flex space-x-2">
              <button className="flex flex-col items-center p-1.5 hover:bg-white rounded group">
                <ImageIcon size={20} className="text-blue-600" />
                <span className="text-[9px] mt-1">Pictures</span>
              </button>
              <button className="flex flex-col items-center p-1.5 hover:bg-white rounded group">
                <TableIcon size={20} className="text-blue-600" />
                <span className="text-[9px] mt-1">Table</span>
              </button>
           </div>
           <span className="text-[10px] text-gray-400 mt-auto uppercase">Insert</span>
        </div>

        {/* Styles Group */}
        <div className="flex flex-col items-center justify-between px-2 border-r border-gray-300 min-w-40">
          <div className="flex space-x-1 h-12">
            <div className="w-14 h-full border rounded bg-white p-1 text-[9px] flex flex-col justify-between overflow-hidden cursor-pointer hover:bg-blue-50 border-asan-blue">
              <span className="font-bold">AaBbCc</span>
              <span>Normal</span>
            </div>
            <div className="w-14 h-full border rounded bg-white p-1 text-[9px] flex flex-col justify-between overflow-hidden cursor-pointer hover:bg-blue-50">
              <span className="text-asan-blue font-bold text-[10px]">Heading 1</span>
            </div>
          </div>
          <span className="text-[10px] text-gray-400 mt-auto uppercase">Styles</span>
        </div>

        {/* Editing Group */}
        <div className="flex flex-col items-center justify-between px-2">
           <div className="flex flex-col space-y-1">
              <button className="flex items-center space-x-2 text-[10px] hover:bg-white px-2 py-0.5 rounded">
                <Search size={12} className="text-blue-600" />
                <span>Find</span>
              </button>
              <button className="flex items-center space-x-2 text-[10px] hover:bg-white px-2 py-0.5 rounded">
                <Replace size={12} className="text-blue-600" />
                <span>Replace</span>
              </button>
           </div>
           <span className="text-[10px] text-gray-400 mt-auto uppercase">Editing</span>
        </div>

      </div>
    </div>
  )
}
