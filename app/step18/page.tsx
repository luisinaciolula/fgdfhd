"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Step18() {
  const router = useRouter()

  const handleContinue = () => {
    router.push("/step19")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-center p-4">
        <div className="flex items-center gap-2">
          <span className="text-[#9ACD32] font-bold text-lg">F</span>
          <span className="text-white font-bold text-lg">Finelo</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh] px-4 gap-12">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-lg text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
            Get the Right Tools to Trade with Confidence!
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Why start trading unprepared? We provide everything you need—expert tips, AI coaching, personalized
            learning, and risk-free simulations. No more guessing—just clear, step-by-step guidance to level up your
            trading journey.
          </p>
        </div>

        {/* Right Side - Trading Chart Visualization */}
        <div className="flex-1 max-w-lg">
          <img
            src="/trading-chart-dark.webp"
            alt="Trading chart with buy and sell indicators"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center pb-8">
        <div className="max-w-md w-full px-4">
          <Button
            onClick={handleContinue}
            className="w-full bg-[#9ACD32] hover:bg-[#8BC34A] text-black font-semibold py-4 text-lg rounded-xl"
          >
            CONTINUE
          </Button>
        </div>
      </div>
    </div>
  )
}
