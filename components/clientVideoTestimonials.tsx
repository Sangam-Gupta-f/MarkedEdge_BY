"use client";

import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    thumbnail: "/videos/testimonial1.jpg",
    url: "/videos/testimonial1.mp4",
    duration: "0:29",
    label: "The TOP 1%",
  },
  {
    id: 2,
    thumbnail: "/videos/testimonial2.jpg",
    url: "/videos/testimonial2.mp4",
    duration: "0:25",
    label: "1999–2000 SEASON",
  },
  {
    id: 3,
    thumbnail: "/videos/testimonial3.jpg",
    url: "/videos/testimonial3.mp4",
    duration: "0:29",
    label: "Mehnat Karni",
  },
  {
    id: 4,
    thumbnail: "/videos/testimonial4.jpg",
    url: "/videos/testimonial4.mp4",
    duration: "15:28",
    label: "Founder Talk",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="relative bg-[#0b0b0b] text-white py-24 overflow-hidden">
      {/* dotted bg pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-[size:22px_22px] opacity-40"></div>

      {/* heading */}
      <div className="relative text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-gray-400">Videos</span>{" "}
          <br className="md:hidden" />
          <span className="text-white">That Grab</span>{" "}
          <span className="text-[#9CFF1E] underline decoration-[#9CFF1E]/60">
            Attention
          </span>
        </h2>
      </div>

      {/* floating background glow */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#9CFF1E20] blur-[100px]"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#9CFF1E10] blur-[80px]"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 30, -50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* video cards container */}
      <div className="relative flex flex-wrap justify-center gap-10 md:gap-16 z-10 px-4 md:px-12">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            animate={{
              y: [0, index % 2 === 0 ? 15 : -15, 0],
            }}
            className={`relative rounded-2xl overflow-hidden bg-[#111] border border-[#1f1f1f] shadow-[0_0_25px_rgba(156,255,30,0.15)] cursor-pointer
              ${index % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]"}
              w-[80%] sm:w-[300px] md:w-[320px] lg:w-[340px]
              hover:scale-[1.06] hover:rotate-0 hover:shadow-[0_0_40px_rgba(156,255,30,0.3)] transition-all duration-300`}
          >
            <video
              src={video.url}
              poster={video.thumbnail}
              className="w-full h-auto rounded-2xl"
              controls
            />
            {/* Duration Badge */}
            <div className="absolute bottom-3 left-3 bg-[#0b0b0baa] backdrop-blur-md text-sm px-2 py-1 rounded-md flex items-center gap-2 border border-[#9CFF1E30]">
              <span className="font-medium text-[#9CFF1E]">
                {video.duration}
              </span>
            </div>
            {/* Label */}
            <div className="absolute bottom-3 right-3 text-xs text-gray-300 uppercase tracking-wide">
              {video.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
