import Link from "next/link"

export default function FineloQuizStep17() {
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
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 max-w-6xl mx-auto py-12 min-h-[80vh] gap-12">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-lg text-center lg:text-left">
          <h1 className="text-white text-4xl font-bold mb-6 text-balance">
            Get the Right Tools to Trade with Confidence!
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Why start trading unprepared? We provide everything you need—expert tips, AI coaching, personalized
            learning, and risk-free simulations. No more guessing—just clear, step-by-step guidance to level up your
            trading journey.
          </p>
        </div>

        {/* Right Side - Trading Chart */}
        <div className="flex-1 max-w-md">
          <img
            src="/trading-chart-signals.jpg"
            alt="Trading chart with buy and sell signals"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center pb-12">
        <Link href="/step18">
          <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-12 py-4 rounded-lg text-lg transition-colors">
            CONTINUE
          </button>
        </Link>
      </div>
    </div>
  )
}
