import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FineloQuizStep4() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Progress */}
      <header className="bg-black">
        <div className="flex items-center justify-between p-4">
          <Link href="/step3">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <div className="text-white text-sm">2/18</div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div className="bg-green-400 h-1" style={{ width: "11.11%" }}></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 max-w-4xl mx-auto min-h-[80vh]">
        {/* Question */}
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-white text-4xl font-bold mb-4">What is your main goal?</h1>
          </div>

          {/* Goal Options */}
          <div className="space-y-4">
            <Link href="/step5">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-6 px-8 rounded-lg text-xl border-0 justify-start flex items-center gap-4">
                <span className="text-2xl">💰</span>
                Grow wealth
              </Button>
            </Link>
            <Link href="/step5">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-6 px-8 rounded-lg text-xl border-0 justify-start flex items-center gap-4">
                <span className="text-2xl">⚡</span>
                Passive income
              </Button>
            </Link>
            <Link href="/step5">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-6 px-8 rounded-lg text-xl border-0 justify-start flex items-center gap-4">
                <span className="text-2xl">🚀</span>
                Financial independence
              </Button>
            </Link>
            <Link href="/step5">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-6 px-8 rounded-lg text-xl border-0 justify-start flex items-center gap-4">
                <span className="text-2xl">😎</span>
                Be my own boss
              </Button>
            </Link>
            <Link href="/step5">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-6 px-8 rounded-lg text-xl border-0 justify-start flex items-center gap-4">
                <span className="text-2xl">🏖️</span>
                Retire wealthy
              </Button>
            </Link>
            <Link href="/step5">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-6 px-8 rounded-lg text-xl border-0 justify-start flex items-center gap-4">
                <span className="text-2xl">🌍</span>
                Travel the world
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
