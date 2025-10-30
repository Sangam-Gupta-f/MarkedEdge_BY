"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="top"
      className="bg-[#0b0b0b] min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Floating Background Glow */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#9CFF1E40] blur-[120px]"
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#9CFF1E20] blur-[100px]"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 30, -50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative max-w-5xl w-full text-center space-y-8 z-10">
        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Stop Chasing Reach.
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-[#9CFF1E] drop-shadow-[0_0_15px_#9CFF1E60]">
            Start Closing Revenue!
          </h2>
        </div>

        {/* Stats */}
        <p className="text-lg text-gray-300 font-medium">
          5+ Years Experience | 1,000 → 45,000 followers in 9 months (for our
          Interior Designer Client)
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We help service businesses (interior & décor, consulting, local
          services) book qualified appointments in 90 days using Meta ads,
          founder-led content, and conversion-focused websites.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full font-semibold text-black bg-[#9CFF1E] hover:bg-[#b3ff47] transition-all duration-300 hover:shadow-[0_0_30px_#9CFF1E80]"
          >
            Book A Strategy Call
          </motion.button>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="relative mt-16 w-full max-w-4xl z-10">
        <p className="text-center text-gray-400 mb-10 font-medium">
          Our Performance Marketing services are Certified by
        </p>
        <div className="flex items-center justify-center space-x-12">
          <Image
            src="/hero2.png"
            alt="Google Partner Badge"
            width={150}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#9CFF1E] text-sm font-medium cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </div>
  );
}
