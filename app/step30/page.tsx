"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"

// --- Componentes Auxiliares para um Código Mais Limpo ---

// Componente para a barra de skills na seção Hero
const SkillBar = ({ level, label }) => {
  const percentage = level === 'Low' ? '20%' : level === 'Moderate' ? '50%' : '100%';
  const color = level === 'High' ? 'bg-green-500' : 'bg-gradient-to-r from-red-500 via-yellow-400 to-green-500';
  
  return (
    <div>
      <p className="text-white text-sm mb-2 font-semibold">{label}</p>
      <div className="w-full h-2 bg-gray-600 rounded-full relative">
        <div className={`h-2 rounded-full ${color}`} style={{ width: percentage }}></div>
        <div 
          className="absolute top-1/2 -mt-2 w-4 h-4 rounded-full bg-white border-2 border-gray-900" 
          style={{ left: `calc(${percentage} - 8px)` }}
        ></div>
      </div>
      <p className="text-gray-400 text-xs mt-1 capitalize">{level}</p>
    </div>
  );
};

// Componente para os itens da lista "O que você recebe"
const CheckListItem = ({ children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 mt-1">
      <Image src="/pagina30/check-icon.svg" alt="Checkmark" width={24} height={24} />
    </div>
    <span className="text-white text-lg">{children}</span>
  </div>
);

// --- Componente Principal da Página ---

export default function FineloQuizStep30() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 54 })

  const nameFromUrl = searchParams.get("name") || "promo"
  const couponCode = `${nameFromUrl.toLowerCase().replace(/\s+/g, "")}_set25`

  useEffect(() => {
    if (timeLeft.minutes === 0 && timeLeft.seconds === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  const formatTime = (time: number) => time.toString().padStart(2, "0")

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header Fixo */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-green-400 text-2xl font-bold">
            <span className="text-white">F</span>inelo
          </div>
          <a href="#pricing" className="bg-lime-400 text-black px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-lime-500 transition-colors">
            GET MY PLAN
          </a>
        </div>
      </header>

      <main>
        {/* Seção Hero */}
        <section className="bg-black py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Card "Now" */}
            <div className="bg-[#1C1C1E] p-6 rounded-2xl w-full max-w-sm">
              <p className="text-white text-lg font-semibold mb-4">Now</p>
              <Image src="/pagina30/hero-now.png" alt="Current state" width={330} height={200} className="rounded-lg mb-6" />
              <div className="space-y-4">
                <SkillBar label="Trading skills" level="Moderate" />
                <SkillBar label="Financial confidence" level="Low" />
              </div>
            </div>

            <div className="text-lime-400 text-6xl font-thin hidden md:block mx-4">→</div>
            
            {/* Card "Goal" */}
            <div className="bg-[#1C1C1E] p-6 rounded-2xl w-full max-w-sm">
              <p className="text-white text-lg font-semibold mb-4">Goal</p>
              <Image src="/pagina30/hero-goal.png" alt="Goal state" width={330} height={200} className="rounded-lg mb-6" />
              <div className="space-y-4">
                <SkillBar label="Trading skills" level="High" />
                <SkillBar label="Financial confidence" level="High" />
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">This is not a guarantee or promise of results.</p>
        </section>

        {/* Seção "Trading is easier" */}
        <section className="bg-lime-400 py-16 text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Trading is easier than you think</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <Image src="/pagina30/trading-easier-man.png" alt="Man smiling" width={250} height={300} className="rounded-lg"/>
              <Image src="/pagina30/trading-days.png" alt="Daily progress examples" width={300} height={300} />
              <div className="space-y-4">
                  <div className="flex items-center gap-3"><Image src="/pagina30/coin-icon.svg" alt="coin" width={24} height={24}/><span>You can start with $20</span></div>
                  <div className="flex items-center gap-3"><Image src="/pagina30/hat-icon.svg" alt="hat" width={24} height={24}/><span>No need for a Finance degree</span></div>
                  <div className="flex items-center gap-3"><Image src="/pagina30/chart-icon.svg" alt="chart" width={24} height={24}/><span>No need to be a market expert</span></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Seção "Try Finelo" & Preços */}
        <section id="pricing" className="bg-black py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-8">Try Finelo and you will:</h2>
            <div className="space-y-4 mb-12 max-w-2xl mx-auto text-left">
              <CheckListItem>Discover different trading strategies</CheckListItem>
              <CheckListItem>Master everything to become an intelligent trader</CheckListItem>
              <CheckListItem>Know key trading terms and rules</CheckListItem>
            </div>
            
            {/* Cards de Objetivo e Target */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
              <div className="bg-[#1C1C1E] rounded-lg p-4 text-left w-full max-w-xs">
                <p className="text-gray-400 text-sm">✓ Your goal</p>
                <p className="text-white font-semibold">Passive income</p>
              </div>
              <div className="bg-[#1C1C1E] rounded-lg p-4 text-left w-full max-w-xs">
                <p className="text-gray-400 text-sm">✓ Your target</p>
                <p className="text-white font-semibold">Buy a car</p>
              </div>
            </div>
            
            {/* Planos de Preços */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-[#1C1C1E] rounded-xl p-6 border-2 border-transparent hover:border-lime-400 transition-all cursor-pointer">
                <h3 className="text-white font-bold mb-4">1-WEEK PLAN</h3>
                <p className="text-gray-400 text-sm">€13.86</p>
                <hr className="border-gray-700 my-4" />
                <p><span className="text-white text-4xl font-bold">€1.98</span> <span className="text-gray-400">per day</span></p>
              </div>
              <div className="bg-[#1C1C1E] rounded-xl p-6 border-2 border-lime-400 relative transform md:scale-110">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>
                <h3 className="text-white font-bold mb-4">4-WEEK PLAN</h3>
                <p className="text-gray-400 text-sm">€39.99</p>
                <hr className="border-gray-700 my-4" />
                <p><span className="text-white text-4xl font-bold">€1.43</span> <span className="text-gray-400">per day</span></p>
              </div>
              <div className="bg-[#1C1C1E] rounded-xl p-6 border-2 border-transparent hover:border-lime-400 transition-all cursor-pointer">
                <h3 className="text-white font-bold mb-2">12-WEEK PLAN</h3>
                <p className="text-gray-400 text-sm">€79.99</p>
                <hr className="border-gray-700 my-4" />
                <p><span className="text-white text-4xl font-bold">€0.95</span> <span className="text-gray-400">per day</span></p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              People using plan for 3 months achieve twice as many results as for 1 month
              <br/>*According to a research by Finelo, 2023
            </p>

            <button className="bg-lime-400 text-black font-bold py-4 px-8 rounded-lg text-xl mb-6 w-full max-w-md hover:bg-lime-500 transition-colors">GET MY PLAN</button>

            <div className="text-gray-400 text-xs mb-4">Pay safe & secure</div>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <Image src="/pagina30/payment-methods.png" alt="Payment methods" width={250} height={25} />
            </div>
            <p className="text-gray-600 text-xs max-w-lg mx-auto">
              By clicking "Get My Plan", you agree to automatic renewal of your subscription for €39.99, then €39.99 every 4 weeks (both excluding taxes) until you cancel. You can cancel anytime via support or account settings. See Subscription Terms for details.
            </p>
          </div>
        </section>

        {/* Seção Garantia */}
        <section className="bg-lime-400 py-16 text-black">
          <div className="container mx-auto px-4 text-center flex flex-col items-center">
            <Image src="/pagina30/guarantee-badge.png" alt="Money-Back Guarantee" width={100} height={100} className="mb-6"/>
            <h2 className="text-3xl font-bold mb-4">Money-Back Guarantee</h2>
            <p className="max-w-3xl mx-auto">
              We are so confident in our service that we are ready to offer a full refund within 30 days of your first purchase OR before the end of your first subscription period, whichever comes first. Additional terms and conditions apply.
              <br/><br/>For full details, please review our complete refund policy <a href="#" className="underline">here</a>.
            </p>
          </div>
        </section>

        {/* Seção "Access Anywhere" */}
        <section className="bg-black py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-4">Access Finelo anywhere</h2>
            <h3 className="text-gray-400 text-xl mb-10">using your mobile device</h3>
            <Image src="/pagina30/mobile-mockups.png" alt="Finelo on mobile devices" width={800} height={400} className="mx-auto" />
          </div>
        </section>

        {/* Seção Final "What you get" e Testimonials */}
        <section className="bg-black pt-8 pb-16">
           <div className="container mx-auto px-4">
              <h2 className="text-white text-3xl font-bold text-center mb-10">What you get</h2>
              <div className="space-y-4 max-w-2xl mx-auto text-left mb-16">
                <CheckListItem>Know key trading terms and rules</CheckListItem>
                <CheckListItem>2,000 insightful, easy and fun lesson-questions</CheckListItem>
                <CheckListItem>Virtual trading simulator with real-world data</CheckListItem>
                <CheckListItem>Personal mastery challenges based on your interests</CheckListItem>
                <CheckListItem>24/7 online support to help on your learning journey</CheckListItem>
              </div>

              <h2 className="text-white text-3xl font-bold text-center mb-10">People love Finelo</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-[#1C1C1E] rounded-lg p-6">
                  <p className="mb-4">😎 @laura</p>
                  <p className="text-gray-300 text-sm mb-4">"The company excelled by not rushing beginners into trading, instead ensuring that they first receive proper learning and practice."</p>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
                <div className="bg-[#1C1C1E] rounded-lg p-6">
                  <p className="mb-4">😎 @alex</p>
                  <p className="text-gray-300 text-sm mb-4">"Initially skeptical, I've been pleasantly surprised by the app's effectiveness. It provides a wealth of insights and helped me to increase my balance saving and investing wisely."</p>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
                <div className="bg-[#1C1C1E] rounded-lg p-6">
                  <p className="mb-4">😎 @sarah</p>
                  <p className="text-gray-300 text-sm mb-4">"This app has completely altered my approach to finances. Originally a big spender, I've learned to embrace smarter financial habits. The lessons are straightforward, engaging, and highly applicable."</p>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
           </div>
        </section>
      </main>
    </div>
  )
}
