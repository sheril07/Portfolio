"use client"

import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                ● AVAILABLE FOR WORK
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-balance">
              I'm <span className="text-teal-400">Sheril Siby</span> Thomas
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
              Electronics and Computer Engineer with expertise in Python and SQL. I have 11 years of experience working
              on useful and mindful products together with startups and known brands
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg">
                Contact Us
              </button>
              <button className="px-8 py-3 border border-gray-600 text-white rounded-full font-semibold hover:bg-gray-900/50 transition-colors">
                Book a call
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <ArrowDown className="w-6 h-6 animate-bounce text-gray-500" />
        </div>
      </div>
    </section>
  )
}
