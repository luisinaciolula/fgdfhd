"use client"

import Link from "next/link"

export default function FineloQuizStep10() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header - Simple logo only */}
      <header className="bg-black">
        <div className="flex items-center justify-center p-4">
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 max-w-6xl mx-auto min-h-[80vh]">
        <div className="flex items-center gap-12 w-full">
          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-lg">
            <h1 className="text-white text-3xl font-bold mb-8 text-balance">We are glad to hear this!</h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              According to the survey by Capital One, only 23% of people feel confident about their future. However,
              many people tend to stay on the same financial level for decades, because they lack knowledge how to go
              further. We will come up with several paths to a better financial future based on your answers.
            </p>
          </div>

          {/* Right Side - Mountain Image */}
          <div className="flex-1 max-w-md">
            <img
              src="/mountain-pointing-person.jpg"
              alt="Person pointing at mountains"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center pb-12">
        <Link href="/step11">
          <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-12 py-4 rounded-lg text-lg transition-colors">
            CONTINUE
          </button>
        </Link>
      </div>
    </div>
  )
}
