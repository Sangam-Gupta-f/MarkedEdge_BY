import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <div className=" sticky top-0 z-50 bg-transparent-50 bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-4">
      {/* Header Container */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <Image src="/ME.png" alt="MarkedEdge Logo" width={40} height={80} className="object-cover h-20 w-60 " />

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <a href="#services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
            Services
          </a>
          <a href="#clients" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
            Clients
          </a>
          <a href="#why" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
            Why MarkedEdge ?
          </a>
          <a href="#faq" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
            FAQ's
          </a>
        </nav>

        {/* Chat Now Button */}
        <Button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-2 rounded-lg flex-shrink-0">
          Chat Now
        </Button>
      </div>
    </div>
  )
}
