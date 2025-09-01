"use client"

import Link from "next/link"

export default function FineloQuizStep24() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <div></div>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 max-w-4xl mx-auto py-12">
        <h1 className="text-white text-4xl font-bold text-center mb-4 text-balance">
          Your Personal 28-Day Trading Challenge
        </h1>

        <p className="text-gray-300 text-center mb-2 max-w-md">Based on your answers, we expect you to</p>
        <p className="text-gray-300 text-center mb-8 max-w-md">gain necessary trading skills of</p>

        <h2 className="text-white text-2xl font-bold text-center mb-12">
          <span className="underline">Confident Trader</span> by Nov, 2025
        </h2>

        {/* Goal Section */}
        <div className="mb-8">
          <div className="bg-gray-800 px-4 py-2 rounded-lg inline-block">
            <span className="text-white text-sm">Your goal: </span>
            <span className="text-white font-semibold">A perfect wedding</span>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="w-full max-w-md mb-12">
          <div className="flex items-end justify-center gap-4 h-32 mb-4">
            {/* Bar 1 - Beginner */}
            <div className="flex flex-col items-center">
              <div className="bg-red-500 w-12 h-8 rounded-t"></div>
              <span className="text-gray-400 text-xs mt-2">Beginner</span>
            </div>

            {/* Bar 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-orange-400 w-12 h-16 rounded-t"></div>
            </div>

            {/* Bar 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-green-300 w-12 h-24 rounded-t"></div>
            </div>

            {/* Bar 4 - Confident Trader */}
            <div className="flex flex-col items-center relative">
              <div className="bg-green-500 w-12 h-32 rounded-t"></div>
              <div className="absolute -top-8 bg-gray-700 px-2 py-1 rounded text-xs whitespace-nowrap">
                Confident Trader
              </div>
              <span className="text-gray-400 text-xs mt-2">100%</span>
            </div>
          </div>

          <div className="text-center">
            <span className="text-gray-400 text-xs">50%</span>
          </div>
        </div>

        {/* Continue Button */}
        <Link href="/step25" className="w-full max-w-md">
          <button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
            CONTINUE
          </button>
        </Link>
      </div>
    </div>
  )
}
