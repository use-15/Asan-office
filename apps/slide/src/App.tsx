import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SlideRibbon } from './components/SlideRibbon'
import { TransitionsSidebar } from './components/TransitionsSidebar'
import {
  Layout,
  Monitor,
  Settings,
  Plus,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Presentation,
  Grid,
  Zap,
  Palette,
  Layers,
  Search,
  Trash2,
  Copy
} from 'lucide-react'

export default function AsanSlide() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showTransitions, setShowTransitions] = useState(false)
  const [slides, setSlides] = useState([
    { title: 'Project Asan Office', subtitle: 'The Future of Offline Productivity', layout: 'title', theme: 'modern' },
    { title: 'Executive Summary', content: ['Offline-First Architecture', 'Native Performance', 'Privacy Focused'], layout: 'content', theme: 'modern' },
    { title: 'Technical Stack', content: ['Tauri & Rust Backend', 'React & Tailwind Frontend', 'SQLite Local Storage'], layout: 'content', theme: 'modern' },
  ])

  const addSlide = () => {
    const newSlide = { title: 'New Slide', content: ['Enter content here'], layout: 'content', theme: 'modern' }
    setSlides([...slides, newSlide])
    setCurrentSlide(slides.length)
  }

  const deleteSlide = (index: number) => {
    if (slides.length <= 1) return
    const newSlides = slides.filter((_, i) => i !== index)
    setSlides(newSlides)
    setCurrentSlide(Math.max(0, index - 1))
  }

  return (
    <div className="flex flex-col h-full bg-[#f3f2f1] overflow-hidden font-sans text-gray-800">
      <SlideRibbon />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Action Bar */}
        <div className="w-10 bg-white border-r flex flex-col items-center py-4 space-y-4 shadow-sm z-10">
          <button className="p-2 text-asan-orange bg-orange-50 rounded shadow-sm"><Search size={20} /></button>
          <button onClick={() => setShowTransitions(!showTransitions)} className={`p-2 rounded ${showTransitions ? 'text-asan-orange bg-orange-50' : 'text-gray-400 hover:bg-gray-100'}`} title="Transitions">
            <Zap size={20} />
          </button>
          <button className="p-2 text-gray-400 hover:bg-gray-100"><Palette size={20} /></button>
          <button className="p-2 text-gray-400 hover:bg-gray-100"><Layers size={20} /></button>
          <div className="flex-1"></div>
          <button className="p-2 text-gray-400 hover:bg-gray-100"><Settings size={20} /></button>
        </div>

        {/* Slide Thumbnails Sidebar */}
        <div className="w-48 bg-[#f0f0f0] border-r overflow-y-auto p-4 flex flex-col space-y-4 relative">
          {slides.map((slide, i) => (
            <div key={i} className="flex flex-col space-y-1 group">
              <div className="flex justify-between items-center px-1">
                 <span className="text-[10px] text-gray-400 font-bold">{i + 1}</span>
                 <button onClick={(e) => { e.stopPropagation(); deleteSlide(i); }} className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600">
                   <Trash2 size={10} />
                 </button>
              </div>
              <div
                onClick={() => setCurrentSlide(i)}
                className={`aspect-video rounded border-2 transition-all cursor-pointer overflow-hidden bg-white shadow-sm hover:shadow-md ${
                  currentSlide === i ? 'border-asan-orange ring-1 ring-asan-orange' : 'border-transparent'
                }`}
              >
                <div className="w-full h-full p-2 flex flex-col items-center justify-center opacity-40 scale-75 select-none">
                  <div className="w-12 h-2 bg-gray-200 rounded-full mb-1"></div>
                  <div className="w-8 h-1.5 bg-gray-100 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={addSlide}
            className="flex items-center justify-center py-4 border-2 border-dashed border-gray-300 rounded hover:bg-white hover:border-asan-orange hover:text-asan-orange transition-all text-gray-400"
          >
            <Plus size={20} />
          </button>
        </div>

        {/* Slide Stage */}
        <div className="flex-1 bg-[#e6e6e6] p-12 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="aspect-video w-full max-w-[960px] bg-white shadow-2xl rounded-sm flex flex-col p-12 relative overflow-hidden ring-1 ring-gray-300">
             <AnimatePresence mode="wait">
               <motion.div
                 key={currentSlide}
                 initial={{ opacity: 0, scale: 0.98 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 1.02 }}
                 transition={{ duration: 0.3 }}
                 className="h-full flex flex-col items-center justify-center text-center"
               >
                 {slides[currentSlide].layout === 'title' ? (
                   <>
                     <h1 className="text-6xl font-black text-asan-orange mb-4 tracking-tight drop-shadow-sm">
                       {slides[currentSlide].title}
                     </h1>
                     <div className="h-1.5 w-24 bg-asan-orange rounded-full mb-8 shadow-sm"></div>
                     <p className="text-2xl text-gray-400 font-light italic">
                       {slides[currentSlide].subtitle}
                     </p>
                   </>
                 ) : (
                   <div className="w-full h-full flex flex-col items-start text-left">
                     <h2 className="text-4xl font-bold mb-12 border-b-4 border-asan-orange pb-2 uppercase tracking-wide">
                       {slides[currentSlide].title}
                     </h2>
                     <ul className="space-y-6">
                        {slides[currentSlide].content?.map((item, j) => (
                          <li key={j} className="flex items-center text-2xl text-gray-600 font-light">
                            <div className="w-3 h-3 bg-asan-orange rounded-full mr-4 shadow-sm"></div>
                            {item}
                          </li>
                        ))}
                     </ul>
                   </div>
                 )}
               </motion.div>
             </AnimatePresence>
             <div className="absolute bottom-6 right-8 text-xs text-gray-300 font-mono italic">
               {currentSlide + 1}
             </div>
          </div>
        </div>

        {showTransitions && <TransitionsSidebar onClose={() => setShowTransitions(false)} />}
      </div>

      <div className="h-6 bg-[#d83b01] text-white flex items-center justify-between px-4 text-[10px] select-none z-20">
        <div className="flex items-center space-x-4">
          <span className="font-bold">Slide {currentSlide + 1} of {slides.length}</span>
          <span className="text-white/60 tracking-widest uppercase border-l border-white/20 pl-4">English (US)</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4 border-l border-white/20 pl-4">
            <button className="hover:scale-110 transition-transform"><Grid size={12} /></button>
            <button className="hover:scale-110 transition-transform"><Presentation size={12} /></button>
            <span className="w-8 text-center">85%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
