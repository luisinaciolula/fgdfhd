"use client"

import Link from "next/link"
import { useState } from "react"

export default function FineloQuizStep16() {
  const [selectedTools, setSelectedTools] = useState<string[]>([])

  const toggleTool = (tool: string) => {
    setSelectedTools((prev) => (prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]))
  }

  const tools = [
    { id: "tips", label: "Regular trading tips and tricks", icon: "💡" },
    { id: "ai-coach", label: "AI Trading Coach", icon: "🤖" },
    { id: "learning-plan", label: "Personal Learning Plan", icon: "📚" },
    { id: "simulator", label: "Virtual risk-free trading simulator", icon: "📈" },
    { id: "strategies", label: "Strategies of successful traders", icon: "😎" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <Link href="/step15">
            <button className="text-white hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </Link>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <div className="text-white text-sm">12/18</div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "66.67%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 max-w-4xl mx-auto py-12 min-h-[80vh]">
        <div className="text-center mb-12">
          <h1 className="text-white text-3xl font-bold mb-4 text-balance">
            Which tools would you like to have for your trading journey?
          </h1>
          <p className="text-gray-400 text-lg">Choose all that apply</p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => toggleTool(tool.id)}
              className={`p-6 rounded-lg border-2 transition-all text-left ${
                selectedTools.includes(tool.id)
                  ? "bg-green-400/10 border-green-400 text-white"
                  : "bg-gray-800 border-gray-700 hover:border-gray-600 text-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{tool.icon}</span>
                <span className="text-lg font-medium">{tool.label}</span>
              </div>
            </button>
          ))}

          {/* Last item spans full width on larger screens */}
          <div className="md:col-span-2 flex justify-center">
            <button
              onClick={() => toggleTool("strategies")}
              className={`p-6 rounded-lg border-2 transition-all text-left max-w-md w-full ${
                selectedTools.includes("strategies")
                  ? "bg-green-400/10 border-green-400 text-white"
                  : "bg-gray-800 border-gray-700 hover:border-gray-600 text-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">😎</span>
                <span className="text-lg font-medium">Strategies of successful traders</span>
              </div>
            </button>
          </div>
        </div>

        {/* Next Step Button */}
        <Link href="/step17">
          <button
            className={`font-semibold px-12 py-4 rounded-lg text-lg transition-colors ${
              selectedTools.length === 0
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-green-400 hover:bg-green-500 text-black"
            }`}
            disabled={selectedTools.length === 0}
          >
            NEXT STEP
          </button>
        </Link>
      </div>
    </div>
  )
}
