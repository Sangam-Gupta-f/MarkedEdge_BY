"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Volume2, VolumeX, Pause, Play } from "lucide-react"; // icons

const videos = [
  {
    id: 1,
    thumbnail: "/motu.mp4",
    url: "/motu.mp4",
    duration: "0:45",
    label: "The TOP 1%",
  },
  {
    id: 2,
    thumbnail: "/girl1.mp4",
    url: "/girl1.mp4",
    duration: "0:25",
    label: "1999–2000 SEASON",
  },
  {
    id: 3,
    thumbnail: "/ritu1.mp4",
    url: "/ritu1.mp4",
    duration: "0:29",
    label: "Mehnat Karni",
  },
  {
    id: 4,
    thumbnail: "/mama.mp4",
    url: "/mama.mp4",
    duration: "0:15",
    label: "Founder Talk",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="relative bg-[#0b0b0b] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-[size:22px_22px] opacity-40"></div>

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

      <div className="relative flex flex-wrap justify-center gap-10 md:gap-16 z-10 px-4 md:px-12">
        {videos.map((video, index) => (
          <VideoCard key={video.id} video={video} index={index} />
        ))}
      </div>
    </section>
  );
}

// 🎬 Reusable VideoCard component
function VideoCard({ video, index }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      animate={{
        y: [0, index % 2 === 0 ? 15 : -15, 0],
      }}
      className={`relative rounded-2xl overflow-hidden bg-[#111] border border-[#1f1f1f]
        shadow-[0_0_25px_rgba(156,255,30,0.15)] cursor-pointer
        ${index % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]"}
        w-[250px] md:w-[300px] h-[440px]
        hover:scale-[1.06] hover:rotate-0 hover:shadow-[0_0_40px_rgba(156,255,30,0.3)]
        transition-all duration-300`}
    >
      <div className="w-full h-full overflow-hidden rounded-2xl bg-black relative">
        <video
          ref={videoRef}
          src={video.url}
          poster={video.thumbnail}
          className="w-full h-full object-cover"
          muted={isMuted}
          autoPlay
          loop
          playsInline
        />

        {/* 🔊 Mute / Unmute Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          className="absolute top-3 right-3 bg-black/60 p-2 rounded-full border border-[#9CFF1E30] hover:bg-black/80 transition"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-[#9CFF1E]" />
          ) : (
            <Volume2 className="w-5 h-5 text-[#9CFF1E]" />
          )}
        </button>

        {/* ⏯ Play / Pause Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="absolute bottom-3 right-3 bg-black/60 p-2 rounded-full border border-[#9CFF1E30] hover:bg-black/80 transition"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-[#9CFF1E]" />
          ) : (
            <Play className="w-5 h-5 text-[#9CFF1E]" />
          )}
        </button>

        {/* ⏱ Duration Badge */}
        <div className="absolute bottom-3 left-3 bg-[#0b0b0baa] backdrop-blur-md text-sm px-2 py-1 rounded-md flex items-center gap-2 border border-[#9CFF1E30]">
          <span className="font-medium text-[#9CFF1E]">{video.duration}</span>
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-gray-300 uppercase tracking-wide">
        {video.label}
      </div>
    </motion.div>
  );
}
