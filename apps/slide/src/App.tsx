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
  Search
} from 'lucide-react'

export default function AsanSlide() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showTransitions, setShowTransitions] = useState(false)
  const [slides, setSlides] = useState([
    { title: 'Project Asan Office', subtitle: 'The Future of Offline Productivity', layout: 'title' },
    { title: 'Executive Summary', content: ['Offline-First Architecture', 'Native Performance', 'Privacy Focused'], layout: 'content' },
    { title: 'Technical Stack', content: ['Tauri & Rust Backend', 'React & Tailwind Frontend', 'SQLite Local Storage'], layout: 'content' },
  ])

  return (
    <div className="flex flex-col h-full bg-[#f3f2f1] overflow-hidden font-sans text-gray-800">
      <SlideRibbon />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Action Bar */}
        <div className="w-10 bg-white border-r flex flex-col items-center py-4 space-y-4 shadow-sm z-10">
          <button className="p-2 text-asan-orange bg-orange-50 rounded"><Search size={20} /></button>
          <button onClick={() => setShowTransitions(!showTransitions)} className={`p-2 rounded ${showTransitions ? 'text-asan-orange bg-orange-50' : 'text-gray-400 hover:bg-gray-100'}`} title="Transitions">
            <Zap size={20} />
          </button>
          <button className="p-2 text-gray-400 hover:bg-gray-100"><Palette size={20} /></button>
          <button className="p-2 text-gray-400 hover:bg-gray-100"><Layers size={20} /></button>
          <div className="flex-1"></div>
          <button className="p-2 text-gray-400 hover:bg-gray-100"><Settings size={20} /></button>
        </div>

        {/* Slide Thumbnails Sidebar */}
        <div className="w-48 bg-[#f0f0f0] border-r overflow-y-auto p-4 flex flex-col space-y-4">
          {slides.map((slide, i) => (
            <div key={i} className="flex space-x-2">
              <span className="text-[10px] text-gray-400 mt-1">{i + 1}</span>
              <div
                onClick={() => setCurrentSlide(i)}
                className={`flex-1 aspect-video rounded border-2 transition-all cursor-pointer overflow-hidden bg-white shadow-sm hover:shadow-md ${
                  currentSlide === i ? 'border-asan-orange ring-1 ring-asan-orange' : 'border-transparent'
                }`}
              >
                <div className="w-full h-full p-2 flex flex-col items-center justify-center opacity-40 scale-75">
                  <div className="w-12 h-2 bg-gray-200 rounded-full mb-1"></div>
                  <div className="w-8 h-1.5 bg-gray-100 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
          <button className="flex items-center justify-center py-4 border-2 border-dashed border-gray-300 rounded hover:bg-white transition-colors text-gray-400">
            <Plus size={20} />
          </button>
        </div>

        {/* Slide Stage Container */}
        <div className="flex-1 bg-[#e6e6e6] p-12 flex flex-col items-center justify-center relative overflow-hidden">

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-20 opacity-0 hover:opacity-100 transition-opacity">
             <button onClick={() => setCurrentSlide(Math.max(0, currentSlide-1))} className="p-1 hover:bg-gray-100 rounded-full"><ChevronLeft size={20}/></button>
             <span className="text-xs font-bold">{currentSlide + 1} of {slides.length}</span>
             <button onClick={() => setCurrentSlide(Math.min(slides.length-1, currentSlide+1))} className="p-1 hover:bg-gray-100 rounded-full"><ChevronRight size={20}/></button>
          </div>

          <div className="aspect-video w-full max-w-[960px] bg-white shadow-2xl rounded-sm flex flex-col p-12 relative overflow-hidden ring-1 ring-gray-300">
             <AnimatePresence mode="wait">
               <motion.div
                 key={currentSlide}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 1.05 }}
                 transition={{ duration: 0.4, ease: "easeInOut" }}
                 className="h-full flex flex-col items-center justify-center text-center"
               >
                 {slides[currentSlide].layout === 'title' ? (
                   <>
                     <h1 className="text-6xl font-black text-asan-orange mb-4 tracking-tight">
                       {slides[currentSlide].title}
                     </h1>
                     <div className="h-1.5 w-24 bg-asan-orange rounded-full mb-8"></div>
                     <p className="text-2xl text-gray-400 font-light italic">
                       {slides[currentSlide].subtitle}
                     </p>
                   </>
                 ) : (
                   <div className="w-full h-full flex flex-col items-start text-left">
                     <h2 className="text-4xl font-bold mb-12 border-b-4 border-asan-orange pb-2">
                       {slides[currentSlide].title}
                     </h2>
                     <ul className="space-y-6">
                        {slides[currentSlide].content?.map((item, j) => (
                          <li key={j} className="flex items-center text-2xl text-gray-600">
                            <div className="w-3 h-3 bg-asan-orange rounded-full mr-4"></div>
                            {item}
                          </li>
                        ))}
                     </ul>
                   </div>
                 )}
               </motion.div>
             </AnimatePresence>
             <div className="absolute bottom-6 right-8 text-xs text-gray-300 font-mono">
               {currentSlide + 1}
             </div>
          </div>
        </div>

        {/* Transitions Sidebar */}
        {showTransitions && <TransitionsSidebar onClose={() => setShowTransitions(false)} />}
      </div>

      {/* Slide Status Bar */}
      <div className="h-6 bg-[#d83b01] text-white flex items-center justify-between px-4 text-[10px] select-none z-20">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer hover:bg-white/10 px-1 rounded font-bold">
             <Monitor size={12} />
             <span>Slide {currentSlide + 1} of {slides.length}</span>
          </div>
          <span className="text-white/60">English (US)</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4 border-l border-white/20 pl-4">
            <button className="hover:text-orange-200 transition-colors"><Grid size={12} /></button>
            <button className="hover:text-orange-200 transition-colors"><Presentation size={12} /></button>
            <span>75%</span>
            <input type="range" className="w-24 h-1 accent-white" />
            <Settings size={12} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}
