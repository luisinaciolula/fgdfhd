"use client"

import { useRouter } from "next/navigation"

export default function FineloQuizStep27() {
  const router = useRouter()

  const handleContinue = () => {
    // Navigate to next step
    router.push("/step28")
  }

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
      <div className="flex flex-col items-center px-4 max-w-4xl mx-auto py-16">
        {/* Title */}
        <h1 className="text-white text-2xl font-semibold text-center mb-16">Your trading skills level</h1>

        {/* Chart Container */}
        <div className="relative w-full max-w-3xl mb-16">
          {/* Chart Background */}
          <div className="relative h-80 bg-transparent">
            {/* Grid Lines */}
            <div className="absolute inset-0">
              {/* Horizontal dotted lines */}
              <div className="absolute top-0 left-0 right-0 border-t border-dotted border-gray-600"></div>
              <div className="absolute top-1/4 left-0 right-0 border-t border-dotted border-gray-600"></div>
              <div className="absolute top-1/2 left-0 right-0 border-t border-dotted border-gray-600"></div>
              <div className="absolute top-3/4 left-0 right-0 border-t border-dotted border-gray-600"></div>
              <div className="absolute bottom-0 left-0 right-0 border-t border-dotted border-gray-600"></div>
            </div>

            {/* Progress Curve */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="30%" stopColor="#f97316" />
                  <stop offset="70%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
              <path
                d="M 50 250 Q 150 200 250 120 Q 300 80 350 50"
                stroke="url(#progressGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              {/* Start point */}
              <circle cx="50" cy="250" r="6" fill="#ef4444" stroke="#fff" strokeWidth="2" />
              {/* End point */}
              <circle cx="350" cy="50" r="6" fill="#22c55e" stroke="#fff" strokeWidth="2" />
            </svg>

            {/* Labels */}
            <div className="absolute bottom-4 left-8">
              <div className="bg-gray-700 text-white px-3 py-1 rounded text-sm font-medium">Now</div>
            </div>
            <div className="absolute top-4 right-8">
              <div className="bg-gray-700 text-white px-3 py-1 rounded text-sm font-medium">After 4 weeks</div>
            </div>
          </div>

          {/* Week Labels */}
          <div className="flex justify-between mt-4 px-8">
            <span className="text-white font-medium">Week 1</span>
            <span className="text-gray-400">Week 2</span>
            <span className="text-gray-400">Week 3</span>
            <span className="text-gray-400">Week 4</span>
          </div>

          {/* Disclaimer */}
          <p className="text-gray-500 text-xs text-center mt-4">This chart is for illustrative purposes only</p>
        </div>

        {/* Bottom Section */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl font-bold mb-2">Your 28-Day Trading Challenge</h2>
          <p className="text-white text-3xl font-bold">is ready!</p>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-12 rounded-lg text-lg transition-colors w-full max-w-md"
        >
          CONTINUE
        </button>
      </div>
    </div>
  )
}
