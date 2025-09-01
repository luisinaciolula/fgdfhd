"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function FineloQuizStep28() {
  const router = useRouter()
  const [name, setName] = useState("")

  const handleContinue = () => {
    // Navigate to next step
    router.push("/step29")
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
      <div className="flex flex-col items-center justify-center px-4 min-h-[calc(100vh-80px)]">
        {/* Title */}
        <h1 className="text-white text-3xl font-semibold text-center mb-16">What is your name?</h1>

        {/* Name Input */}
        <div className="w-full max-w-md mb-8">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full bg-transparent text-white text-lg py-3 px-0 border-0 border-b-2 border-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
          />
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
