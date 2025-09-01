"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Lightbulb, BookOpen, TrendingUp } from "lucide-react"

export default function Step17() {
  const router = useRouter()
  const [selectedTools, setSelectedTools] = useState<string[]>([])

  const tools = [
    {
      id: "tips",
      title: "Regular trading tips and tricks",
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    },
    {
      id: "coach",
      title: "AI Trading Coach",
      icon: <div className="w-8 h-8 text-2xl">🤖</div>,
    },
    {
      id: "learning",
      title: "Personal Learning Plan",
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
    },
    {
      id: "simulator",
      title: "Virtual risk-free trading simulator",
      icon: <TrendingUp className="w-8 h-8 text-red-400" />,
    },
    {
      id: "strategies",
      title: "Strategies of successful traders",
      icon: <div className="w-8 h-8 text-2xl">😎</div>,
    },
  ]

  const toggleTool = (toolId: string) => {
    setSelectedTools((prev) => (prev.includes(toolId) ? prev.filter((id) => id !== toolId) : [...prev, toolId]))
  }

  const handleNext = () => {
    router.push("/step18")
  }

  const handleBack = () => {
    router.push("/step16")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button onClick={handleBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[#9ACD32] font-bold text-lg">F</span>
          <span className="text-white font-bold text-lg">Finelo</span>
        </div>

        <div className="text-white text-sm">12 / 18</div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 mb-8">
        <div className="w-full bg-gray-800 h-2 rounded-full">
          <div className="bg-[#9ACD32] h-2 rounded-full transition-all duration-300" style={{ width: "66.67%" }} />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 flex flex-col items-center">
        <div className="max-w-2xl w-full text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Which tools would you like to have for your trading journey?
          </h1>
          <p className="text-gray-400 text-lg">Choose all that apply</p>
        </div>

        {/* Tools Grid */}
        <div className="max-w-4xl w-full mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {tools.slice(0, 4).map((tool) => (
              <button
                key={tool.id}
                onClick={() => toggleTool(tool.id)}
                className={`p-6 rounded-2xl border-2 transition-all duration-200 text-left flex items-center gap-4 ${
                  selectedTools.includes(tool.id)
                    ? "border-[#9ACD32] bg-[#9ACD32]/10"
                    : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                }`}
              >
                <div className="flex-shrink-0">{tool.icon}</div>
                <span className="text-white font-medium text-lg">{tool.title}</span>
              </button>
            ))}
          </div>

          {/* Center the last tool */}
          <div className="flex justify-center">
            <button
              onClick={() => toggleTool(tools[4].id)}
              className={`p-6 rounded-2xl border-2 transition-all duration-200 text-left flex items-center gap-4 w-full max-w-md ${
                selectedTools.includes(tools[4].id)
                  ? "border-[#9ACD32] bg-[#9ACD32]/10"
                  : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
              }`}
            >
              <div className="flex-shrink-0">{tools[4].icon}</div>
              <span className="text-white font-medium text-lg">{tools[4].title}</span>
            </button>
          </div>
        </div>

        {/* Next Button */}
        <div className="max-w-md w-full">
          <Button
            onClick={handleNext}
            className="w-full bg-[#9ACD32] hover:bg-[#8BC34A] text-black font-semibold py-4 text-lg rounded-xl"
          >
            NEXT STEP
          </Button>
        </div>
      </div>
    </div>
  )
}
