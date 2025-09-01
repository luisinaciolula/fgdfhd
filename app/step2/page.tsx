import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function FineloQuizStep2() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-black">
        <div></div>
        <div className="text-green-400 text-xl font-bold">
          <span className="text-green-400">F</span>inelo
        </div>
        <Menu className="w-6 h-6 text-white" />
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 max-w-4xl mx-auto min-h-[80vh]">
        {/* Social Proof Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-8 w-full max-w-lg text-center">
          {/* User Count */}
          <div className="mb-6">
            <h2 className="text-green-400 text-3xl font-bold mb-2">1000 000+ people</h2>
            <p className="text-white text-lg">already use Finelo</p>
          </div>

          {/* Testimonial */}
          <div className="mb-6">
            <blockquote className="text-white text-lg mb-4 leading-relaxed">
              &quot;A good trader is someone who manages to make money while limiting risk.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/bill-lipschutz-avatar.webp" alt="Bill Lipschutz" className="w-full h-full object-cover" />
              </div>
              <span className="text-gray-300 text-sm">Bill Lipschutz</span>
            </div>
          </div>

          {/* Media Mentions */}
          <div className="text-center">
            <p className="text-gray-300 text-sm mb-4">Trading strategies mentioned in</p>
            <div className="flex flex-col items-center gap-4">
              <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
                <div className="text-white font-bold text-lg">TIME</div>
                <div className="text-white font-bold text-lg">WSJ</div>
                <div className="text-white font-bold text-lg">Forbes</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center justify-items-center">
                <div className="text-white font-bold text-lg">TC</div>
                <div className="text-white font-bold text-lg">The Guardian</div>
              </div>
              <div className="bg-white rounded-lg p-4 max-w-xs">
                <img src="/the-economist-logo-new.webp" alt="The Economist" className="w-full h-auto" />
              </div>
              <div className="text-white font-bold text-lg">FINANCIAL TIMES</div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <Link href="/step3">
          <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-12 rounded-lg text-lg">
            CONTINUE
          </Button>
        </Link>
      </div>
    </div>
  )
}
