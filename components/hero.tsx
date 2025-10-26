import Image from 'next/image'
export default function Hero() {
  return (
    <div id="top" className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Main Content */}
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Stop Chasing Reach.</h1>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Start Closing Revenue!
          </h2>
        </div>

        {/* Stats */}
        <p className="text-lg text-gray-300 font-medium">
          5+ Years Experience | 1,000 → 45,000 followers in 9 months (for our Interior Designer Client)
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400">We help service businesses (interior & décor, consulting, local services) book qualified appointments in 90 days using Meta ads, founder-led content, and conversion-focused websites!</p>

        {/* CTA Button */}
        <div className="pt-4">
          <button className="px-8 py-3 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
            Book A Strategy Call
          </button>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mt-10 w-full max-w-4xl">
        <p className="text-center text-gray-400 mb-12 font-medium">
          Our Performance Marketing services are Certified by
        </p>
        <div className="flex items-center justify-center space-x-12">
          <Image src="/hero2.png" alt="Google Partner Badge" width={150} height={100} className="object-contain w-full h-full" />
        </div>
      </div>
    </div>
  )
}
