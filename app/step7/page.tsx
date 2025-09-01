import Link from "next/link"

export default function FineloQuizStep7() {
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
            <h1 className="text-white text-4xl font-bold mb-6 text-balance">
              Great news! We can help you to get to the next level
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our challenge is backed by thousands of research hours and content carefully crafted for your needs and
              skills!
            </p>
          </div>

          {/* Right Side - Motivational Image */}
          <div className="flex-1 max-w-md">
            <img
              src="/mountain-person-phone.jpg"
              alt="Person with phone in mountain landscape"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center pb-8">
        <Link href="/step8">
          <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-12 rounded-lg text-lg transition-colors">
            CONTINUE
          </button>
        </Link>
      </div>
    </div>
  )
}
