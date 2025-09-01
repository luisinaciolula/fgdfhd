"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function FineloQuizStep30() {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 54 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => time.toString().padStart(2, "0")

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with countdown */}
      <header className="bg-black border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <div className="text-white font-mono">
            {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </div>
          <div className="text-green-400 text-xl font-bold">
            <span className="text-green-400">F</span>inelo
          </div>
          <button className="bg-green-500 text-black px-4 py-2 rounded font-semibold text-sm">GET MY PLAN</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-600 to-green-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-red-500 text-sm">🔥</span>
            <span className="text-white text-sm ml-2">Special discount</span>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded ml-2">50%</span>
          </div>
          <h1 className="text-white text-3xl font-bold mb-2">Your Personal</h1>
          <h1 className="text-white text-3xl font-bold mb-4">28-day Trading Challenge</h1>
          <div className="bg-green-500 text-black px-4 py-2 rounded inline-block font-semibold">madison_sep2025</div>
        </div>

        <div className="flex justify-center items-center mt-8 space-x-8">
          <div className="text-center">
            <div className="text-white text-sm mb-2">Now</div>
            <div className="w-24 h-32 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
            </div>
            <div className="text-white text-sm mb-2">Trading skills</div>
            <div className="w-24 h-2 bg-gray-600 rounded">
              <div className="w-1/4 h-2 bg-red-500 rounded"></div>
            </div>
            <div className="text-white text-xs mt-1">Moderate</div>
            <div className="text-white text-sm mt-2">Financial confidence</div>
            <div className="w-24 h-2 bg-gray-600 rounded">
              <div className="w-1/4 h-2 bg-red-500 rounded"></div>
            </div>
            <div className="text-white text-xs mt-1">Low</div>
          </div>

          <div className="text-green-400 text-4xl">→</div>

          <div className="text-center">
            <div className="text-white text-sm mb-2">Goal</div>
            <div className="w-24 h-32 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-green-600 rounded-full"></div>
            </div>
            <div className="text-white text-sm mb-2">Trading skills</div>
            <div className="w-24 h-2 bg-gray-600 rounded">
              <div className="w-full h-2 bg-green-500 rounded"></div>
            </div>
            <div className="text-white text-xs mt-1">Expert</div>
            <div className="text-white text-sm mt-2">Financial confidence</div>
            <div className="w-24 h-2 bg-gray-600 rounded">
              <div className="w-full h-2 bg-green-500 rounded"></div>
            </div>
            <div className="text-white text-xs mt-1">High</div>
          </div>
        </div>
      </section>

      {/* Trading is easier section */}
      <section className="bg-green-400 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-black text-3xl font-bold text-center mb-8">Trading is easier than you think</h2>
          <div className="flex items-center justify-center space-x-8">
            <div className="w-32 h-40 bg-gray-800 rounded-lg"></div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded text-white flex items-center justify-center text-sm">1</div>
                <div className="text-black">Step 1</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded text-white flex items-center justify-center text-sm">2</div>
                <div className="text-black">Step 2</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded text-white flex items-center justify-center text-sm">3</div>
                <div className="text-black">Step 3</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded text-white flex items-center justify-center text-sm">4</div>
                <div className="text-black">Step 4</div>
              </div>
            </div>
            <div className="text-black space-y-2">
              <div>You can start with $20</div>
              <div>No need for a finance degree</div>
              <div>No need to be a market expert</div>
            </div>
          </div>
        </div>
      </section>

      {/* Try Finelo section */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-8">Try Finelo and you will:</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-400">✓</span>
              <span className="text-white">Discover different trading strategies</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-400">✓</span>
              <span className="text-white">Master everything you need to become an intelligent trader</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-400">✓</span>
              <span className="text-white">Know key trading terms and rules</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 mb-8 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-sm">Your goal</span>
              <span className="text-white text-sm">Your target</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white">Make monthly</span>
              <span className="text-white">A perfect wedding</span>
            </div>
            <div className="bg-green-500 text-black py-2 px-4 rounded font-semibold">Your promo code is applied!</div>
            <div className="text-white text-sm mt-2">madison_sep2025</div>
            <div className="text-white text-right">09:53</div>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <h3 className="text-white font-bold mb-2">1-WEEK PLAN</h3>
              <div className="text-gray-400 line-through text-sm">€1.98 €0.99</div>
              <div className="text-white text-2xl font-bold">€0.99</div>
              <div className="text-gray-400 text-sm">per day</div>
            </div>
            <div className="bg-green-600 rounded-lg p-4 text-center relative">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-400 text-black px-2 py-1 rounded text-xs">
                MOST POPULAR
              </div>
              <h3 className="text-white font-bold mb-2">4-WEEK PLAN</h3>
              <div className="text-gray-200 line-through text-sm">€7.96 €3.98</div>
              <div className="text-white text-2xl font-bold">€0.71</div>
              <div className="text-gray-200 text-sm">per day</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <h3 className="text-white font-bold mb-2">12-WEEK PLAN</h3>
              <div className="text-gray-400 line-through text-sm">€23.88 €11.94</div>
              <div className="text-white text-2xl font-bold">€0.48</div>
              <div className="text-gray-400 text-sm">per day</div>
            </div>
          </div>

          <div className="text-green-400 text-sm mb-4">
            ✓ People using plan for 3 months achieve twice as many results as for 1 month
          </div>
          <div className="text-gray-400 text-xs mb-8">*Disclaimer is available in Terms and Conditions</div>

          <button className="bg-green-500 text-black font-bold py-4 px-8 rounded-lg text-xl mb-4">GET MY PLAN</button>

          <div className="text-gray-400 text-xs mb-4">or continue with</div>
          <div className="flex justify-center space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded"></div>
            <div className="w-8 h-8 bg-red-600 rounded"></div>
            <div className="w-8 h-8 bg-gray-600 rounded"></div>
            <div className="w-8 h-8 bg-orange-600 rounded"></div>
            <div className="w-8 h-8 bg-green-600 rounded"></div>
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="bg-green-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-400 text-2xl">✓</span>
          </div>
          <h2 className="text-black text-3xl font-bold mb-4">Money-Back Guarantee</h2>
          <p className="text-black max-w-2xl mx-auto">
            We are so confident in our service that we are ready to offer a full refund within 30 days of your first
            purchase on before the end of your first subscription period, whichever comes first. Additional terms and
            conditions apply.
          </p>
          <p className="text-black text-sm mt-2">For full details, please review our complete refund policy here.</p>
        </div>
      </section>

      {/* Mobile Access */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Access Finelo anywhere</h2>
          <h3 className="text-white text-xl mb-8">using your mobile device</h3>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-16 h-28 bg-gray-800 rounded-lg"></div>
            <div className="w-16 h-28 bg-gray-800 rounded-lg"></div>
            <div className="w-16 h-28 bg-gray-800 rounded-lg"></div>
            <div className="w-16 h-28 bg-gray-800 rounded-lg"></div>
            <div className="w-16 h-28 bg-gray-800 rounded-lg"></div>
          </div>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-3xl font-bold text-center mb-8">What you get</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-center space-x-3">
              <span className="text-green-400">✓</span>
              <span className="text-white">Know key trading terms and rules</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-400">✓</span>
              <span className="text-white">2,000 insightful, easy and fun lesson-questions</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-400">✓</span>
              <span className="text-white">Virtual trading simulator with real-world data</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-400">✓</span>
              <span className="text-white">Personal mastery challenges based on your interests</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-400">✓</span>
              <span className="text-white">24/7 online support to help on your learning journey</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-3xl font-bold text-center mb-8">People love Finelo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-white font-semibold">@laura</span>
              </div>
              <p className="text-white text-sm mb-4">
                "The company exceeded by not trading anymore but instead by learning and studying first helped people
                learning and studying."
              </p>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-white font-semibold">@drew</span>
              </div>
              <p className="text-white text-sm mb-4">
                "Totally awesome. I've been pleasantly surprised by the app's effectiveness. It provides a wealth of
                insights all that is needed to become a trading wizard."
              </p>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-white font-semibold">@sarah</span>
              </div>
              <p className="text-white text-sm mb-4">
                "This app has completely earned my respect and finances. Originally it big financial risk turned to
                unlimited potential. The lessons are highly educational and informative."
              </p>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
