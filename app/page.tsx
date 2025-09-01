"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function FineloQuiz() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-black">
        <div></div>
        <div className="text-green-400 text-xl font-bold">
          <span className="text-green-400">F</span>inelo
        </div>
        <Menu className="w-6 h-6 text-white" />
      </header>

      {/* Badges */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mt-8 mb-8">
        <div className="bg-green-500/20 border border-green-500 rounded-full px-4 py-2 text-sm">
          <span className="text-green-400">✓</span>{" "}
          <span className="text-green-400 font-semibold">1M+ USERS' CHOICE</span>
          <br />
          <span className="text-white text-xs">Learned new skills</span>
        </div>
        <div className="bg-green-500/20 border border-green-500 rounded-full px-4 py-2 text-sm">
          <span className="text-green-400">★</span>{" "}
          <span className="text-green-400 font-semibold">RATED ON TRUSTPILOT</span>
          <br />
          <span className="text-white text-xs">4.6 Satisfaction Score</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 max-w-4xl mx-auto">
        {/* Trading Chart Section */}
        <div className="relative mb-8 w-full max-w-2xl">
          <img
            src="/founder-finelo-chart.webp"
            alt="Founder of Finelo with trading chart showing 130.81 value and performance metrics"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Challenge Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider">
            28-DAY TRADING
            <br />
            CHALLENGE
          </h1>
          <p className="text-gray-300 text-lg">HAVE YOU EVER TRADED BEFORE?</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-md">
          <Button
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-8 rounded-lg text-lg flex-1"
            onClick={() => (window.location.href = "/step2")}
          >
            YES <span className="ml-2">›</span>
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-8 rounded-lg text-lg flex-1"
            onClick={() => (window.location.href = "/step2")}
          >
            NO <span className="ml-2">›</span>
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-xs max-w-2xl">
          <p className="mb-2">
            By proceeding, you agree with <span className="underline">Terms and Conditions</span>,{" "}
            <span className="underline">Privacy Policy</span>, <span className="underline">Subscription Terms</span>
          </p>
          <p>FINELO LIMITED, Limassol, Cyprus</p>
        </div>
      </div>
    </div>
  )
}
