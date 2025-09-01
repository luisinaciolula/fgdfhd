"use client"

import { useEffect, useState } from "react"

export default function FineloQuizStep25() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 46) {
          clearInterval(timer)
          return 46
        }
        return prev + 1
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

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
        {/* Progress Circle */}
        <div className="relative w-32 h-32 mb-8">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle cx="60" cy="60" r="50" stroke="rgb(55, 65, 81)" strokeWidth="8" fill="none" />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="rgb(34, 197, 94)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 50}`}
              strokeDashoffset={`${2 * Math.PI * 50 * (1 - progress / 100)}`}
              className="transition-all duration-100 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">{progress}%</span>
          </div>
        </div>

        <p className="text-gray-300 text-center mb-16">Creating your personal challenge...</p>

        {/* Social Proof Section */}
        <div className="text-center mb-8">
          <h2 className="text-green-400 text-3xl font-bold mb-2">1 million+ people</h2>
          <p className="text-white text-xl">have chosen Finelo</p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
          {/* Stars */}
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-green-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <h3 className="text-white font-semibold mb-3">Awesome Investment...</h3>

          <p className="text-gray-300 text-sm mb-4">
            "Incredible! Finelo has given me enhanced insights into trading, and I'm really enjoying the process of
            learning more about trading strategies and challenges."
          </p>

          <p className="text-white font-medium text-right">Liam Stanford</p>
        </div>
      </div>
    </div>
  )
}
