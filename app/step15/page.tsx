"use client"

import Link from "next/link"

export default function FineloQuizStep15() {
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
      <div className="flex items-center justify-center px-4 max-w-6xl mx-auto py-12 min-h-[80vh]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-white text-4xl font-bold mb-6 text-balance">We've Got You!</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              From fundamentals to advanced strategies, we cover it all. Our step-by-step challenge adapts to your
              skills and knowledge, helping you gain confidence and master trading in just a few weeks. Let's make your
              trading journey simple and successful!
            </p>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="flex-1 max-w-md">
            <img src="/finelo-app-explore.webp" alt="Finelo App Interface" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center pb-8">
        <Link href="/step16">
          <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-12 py-4 rounded-lg text-lg transition-colors">
            CONTINUE
          </button>
        </Link>
      </div>
    </div>
  )
}
