"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function Step16() {
  const router = useRouter()
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])

  const companies = [
    { name: "Netflix", icon: "🎬", color: "bg-red-600" },
    { name: "Tesla", icon: "🚗", color: "bg-red-500" },
    { name: "Apple", icon: "🍎", color: "bg-gray-800" },
    { name: "Amazon", icon: "📦", color: "bg-gray-700" },
    { name: "McDonalds", icon: "🍟", color: "bg-yellow-500" },
    { name: "Shell", icon: "⛽", color: "bg-red-600" },
    { name: "Exxon", icon: "🛢️", color: "bg-red-700" },
    { name: "Microsoft", icon: "💻", color: "bg-blue-600" },
    { name: "Google", icon: "🔍", color: "bg-blue-500" },
    { name: "Pfizer", icon: "💊", color: "bg-blue-700" },
  ]

  const toggleCompany = (company: string) => {
    setSelectedCompanies((prev) => (prev.includes(company) ? prev.filter((c) => c !== company) : [...prev, company]))
  }

  const handleNext = () => {
    router.push("/step17")
  }

  const handleBack = () => {
    router.push("/step15")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button onClick={handleBack} className="text-white hover:text-green-400 transition-colors">
          <ArrowLeft size={24} />
        </button>

        <div className="flex items-center gap-2">
          <span className="text-green-400 font-bold text-xl">F</span>
          <span className="text-white font-bold text-xl">Finelo</span>
        </div>

        <div className="text-white text-sm">11 / 18</div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 mb-8">
        <div className="w-full bg-gray-800 h-1 rounded-full">
          <div className="bg-green-400 h-1 rounded-full transition-all duration-300" style={{ width: "61.11%" }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 flex flex-col items-center">
        <div className="w-full max-w-2xl text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Which companies are you most interested in?</h1>
          <p className="text-gray-400 text-lg">Choose all that apply</p>
        </div>

        {/* Companies Grid */}
        <div className="w-full max-w-2xl mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {companies.map((company) => (
              <button
                key={company.name}
                onClick={() => toggleCompany(company.name)}
                className={`
                  flex items-center gap-3 p-4 rounded-full border-2 transition-all duration-200
                  ${
                    selectedCompanies.includes(company.name)
                      ? "border-green-400 bg-green-400/10"
                      : "border-gray-600 hover:border-gray-500"
                  }
                `}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${company.color}`}
                >
                  {company.icon}
                </div>
                <span className="text-white font-medium">{company.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <div className="w-full max-w-md">
          <button
            onClick={handleNext}
            className="w-full bg-green-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-green-300 transition-colors text-lg"
          >
            NEXT STEP
          </button>
        </div>
      </div>
    </div>
  )
}
