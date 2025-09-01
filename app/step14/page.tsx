"use client"

import Link from "next/link"

export default function FineloQuizStep14() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <Link href="/step13">
            <button className="text-white hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </Link>

          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>

          <div className="text-white text-sm">10/18</div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "55.56%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 max-w-4xl mx-auto py-12">
        {/* Question */}
        <div className="text-center mb-12">
          <h1 className="text-white text-3xl font-bold mb-4 text-balance">
            Which trading topic interests you the most?
          </h1>
        </div>

        {/* Options */}
        <div className="w-full max-w-2xl space-y-4">
          <Link href="/step15">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">⏰</span>
              <span className="text-lg">Right time to sell and buy</span>
            </button>
          </Link>

          <Link href="/step15">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">🔍</span>
              <span className="text-lg">Different asset types</span>
            </button>
          </Link>

          <Link href="/step15">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">⚖️</span>
              <span className="text-lg">Risks and rewards</span>
            </button>
          </Link>

          <Link href="/step15">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg text-left transition-colors flex items-center gap-4">
              <span className="text-2xl">🤔</span>
              <span className="text-lg">I'm not sure yet</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
