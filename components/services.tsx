"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: 1,
    title:
      "Get 50–80 qualified interior leads + 30 engaging content pieces in 60 days.",
    tag: "60-Day Lead & Content System",
    highlights: [
      "Lead generation system (Meta ads)",
      "30 high-engagement content pieces",
      "Done-for-you execution",
      "Built for consistent inquiries",
      "If we don’t deliver outcomes → you don’t pay us.",
    ],
    cta: "Get Started →",
  },
  {
    id: 2,
    title:
      "Build a predictable flow of high-ticket interior clients without depending on referrals or ads.",
    tag: "180-Day Client Acquisition System",
    highlights: [
      "Personal brand positioning",
      "Content strategy + authority building",
      "Inquiry filtering system",
      "Inbound lead system",
      "5K – 10K followers organically ",
      "30+ high-ticket appointments",
      "We build a working system that generates consistent inquiries — or you don’t pay us.",
    ],
    cta: "Build My System →",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0b0b0b] text-white py-24 overflow-hidden"
    >
      {/* Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#9CFF1E] to-transparent opacity-70"></div>
      {/* Floating green glows */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#9CFF1E20] blur-[120px]"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#9CFF1E15] blur-[100px]"
        animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <div className="relative text-center mb-20 z-10">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-gray-400">Our</span>{" "}
          <span className="text-white">Growth</span>{" "}
          <span className="text-[#9CFF1E] underline decoration-[#9CFF1E]/60">
            Systems
          </span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Three focused programs to scale your brand — from leads, to personal
          brand, to high-converting websites.
        </p>
      </div>

      {/* Service Cards */}
      <div className="relative flex flex-col md:flex-row flex-wrap justify-center gap-10 px-6 md:px-16 z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="relative bg-[#111] border border-[#1f1f1f] rounded-2xl p-8 max-w-sm md:max-w-md flex flex-col justify-between cursor-pointer"
            custom={index}
            // variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 0 40px rgba(156,255,30,0.25)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {/* Service Info */}
            <div>
              <div className="text-sm text-[#9CFF1E] uppercase mb-2 font-medium tracking-wide">
                {service.tag}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              {/* <p className="text-gray-400 mb-6">{service.description}</p> */}

              <ul className="space-y-2 text-gray-300 text-sm">
                {service.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#9CFF1E] mt-0.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(156,255,30,0.6)",
              }}
              className="mt-8 text-black font-semibold bg-[#9CFF1E] px-6 py-3 rounded-full transition-all hover:bg-[#b8ff54]"
            >
              <Link href="https://calendly.com/rituraj-markededge/30min">
                {service.cta}
              </Link>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
