"use client"

import Link from "next/link"

export default function FineloQuizStep21() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center justify-center p-4">
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 max-w-6xl mx-auto py-8 gap-8">
        {/* Left Side - Profile Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-white text-3xl font-bold text-center mb-8 text-balance">Here's your Trading profile</h1>

          {/* Readiness Score Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-xl font-semibold">Readiness score</h2>
              <div className="bg-gray-700 text-white px-3 py-1 rounded text-sm">Result: Perfect</div>
            </div>

            {/* Progress Bar with Labels */}
            <div className="relative mb-4">
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full w-full"></div>
              </div>
              <div className="absolute top-[-8px] left-[60%] transform -translate-x-1/2">
                <div className="w-4 h-4 bg-white rounded-full border-2 border-gray-800"></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  Moderate
                </div>
              </div>
            </div>

            {/* Scale Labels */}
            <div className="flex justify-between text-xs text-gray-400 mb-6">
              <span>LOW</span>
              <span>INTERMEDIATE</span>
              <span>HIGH</span>
            </div>

            {/* Description */}
            <div className="bg-gray-800 p-4 rounded-lg mb-6 flex items-start gap-3">
              <span className="text-yellow-500 text-xl">🔥</span>
              <div className="text-gray-300 text-sm">
                <strong>Impressive score to succeed in trading</strong>
                <br />
                In 2024, global hedge funds achieved an impressive average return of 12.75%. With the right strategies
                and knowledge, you can benefit from trading too.
              </div>
            </div>

            {/* Profile Metrics */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <div className="text-white font-medium">Motivation</div>
                  <div className="text-green-400 text-sm">High</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⚠</span>
                </div>
                <div>
                  <div className="text-white font-medium">Potential</div>
                  <div className="text-green-400 text-sm">High</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⭕</span>
                </div>
                <div>
                  <div className="text-white font-medium">Focus</div>
                  <div className="text-green-400 text-sm">Fit for trading</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📱</span>
                </div>
                <div>
                  <div className="text-white font-medium">Knowledge</div>
                  <div className="text-yellow-400 text-sm">Intermediate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Founder Image */}
        <div className="hidden lg:block flex-1 max-w-md">
          <img src="/founder-phone-call.jpg" alt="Founder on phone call" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center px-4 pb-8">
        <Link href="/step22" className="w-full max-w-md">
          <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-8 rounded-lg transition-colors">
            CONTINUE
          </button>
        </Link>
      </div>
    </div>
  )
}
