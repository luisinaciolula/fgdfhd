"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function FineloQuizStep29() {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isScratching, setIsScratching] = useState(false)
  const [scratchedPercentage, setScratchedPercentage] = useState(0)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 200

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#FFA726")
    gradient.addColorStop(1, "#FF9800")

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
    ctx.lineWidth = 3
    ctx.lineCap = "round"

    for (let i = 0; i < 4; i++) {
      ctx.beginPath()
      const y = 50 + i * 30
      ctx.moveTo(50, y)
      ctx.quadraticCurveTo(150, y - 20, 250, y)
      ctx.stroke()
    }
  }, [])

  const scratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    let clientX, clientY

    if ("touches" in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    const x = clientX - rect.left
    const y = clientY - rect.top

    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill()

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data
    let transparent = 0

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++
    }

    const percentage = (transparent / (pixels.length / 4)) * 100
    setScratchedPercentage(percentage)

    if (percentage > 30 && !showModal) {
      setShowModal(true)
    }
  }

  const handleMouseDown = () => setIsScratching(true)
  const handleMouseUp = () => setIsScratching(false)
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isScratching) scratch(e)
  }

  const handleTouchStart = () => setIsScratching(true)
  const handleTouchEnd = () => setIsScratching(false)
  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    if (isScratching) scratch(e)
  }

  const handleClaimDiscount = () => {
    router.push("/step30")
  }

  return (
    <div className="min-h-screen bg-black text-white">
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

      <div className="flex flex-col items-center justify-center px-4 min-h-[calc(100vh-80px)]">
        <h1 className="text-white text-3xl font-semibold text-center mb-4">Scratch & Save on Your</h1>
        <h1 className="text-green-400 text-3xl font-semibold text-center mb-8">Personal Trading Challenge!</h1>

        <p className="text-white text-lg text-center mb-2">Become confident trader with Finelo!</p>
        <p className="text-white text-lg text-center mb-8">
          Reveal your surprise deal <span className="text-xl">🎁</span>
        </p>

        <p className="text-white text-lg text-center mb-8">
          Scratch the card <span className="text-xl">👇</span>
        </p>

        <div className="relative">
          <div className="absolute inset-0 bg-gray-700 rounded-lg flex flex-col items-center justify-center text-gray-400">
            <div className="text-6xl font-bold mb-2">
              50<span className="text-3xl">%</span>
            </div>
            <div className="text-2xl font-bold">off</div>
            <div className="text-sm mt-4 opacity-70">madison_sep2025</div>
          </div>

          <canvas
            ref={canvasRef}
            className="rounded-lg cursor-pointer touch-none"
            style={{ width: "300px", height: "200px" }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
          />
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
          <div className="bg-gray-800 rounded-t-2xl p-6 w-full max-w-md mx-4 mb-0 animate-slide-up">
            <div className="text-center">
              <div className="text-4xl mb-4">🤩</div>
              <h2 className="text-white text-2xl font-bold mb-4">Woo hoo!</h2>
              <p className="text-white text-lg mb-2">You won a promo code with</p>
              <p className="text-green-400 text-2xl font-bold mb-4">50% off</p>
              <p className="text-gray-300 text-sm mb-6">It will be applied automatically</p>
              <button
                onClick={handleClaimDiscount}
                className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-6 rounded-lg transition-colors"
              >
                CLAIM MY DISCOUNT
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
