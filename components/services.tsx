"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Lead-Gen Ads Sprint (90 Days)",
    tag: "Meta + Google Ads",
    description:
      "A 90-day sprint to get 30–40 qualified appointments. We run Meta Ads, set up tracking, landing pages, and WhatsApp/CRM routing — all focused on conversion.",
    highlights: [
      "ICP & offer polish",
      "Ad scripts + creative kit",
      "Pixel setup & daily budget control",
      "Weekly performance report",
    ],
    cta: "Start the Sprint →",
  },
  {
    id: 2,
    title: "Founder Personal Brand Engine (Instagram)",
    tag: "Done-With-You Content System",
    description:
      "We turn your face and process into your strongest trust signal. Custom content strategy, Reels, and posts built to drive enquiries — not vanity likes.",
    highlights: [
      "Monthly content plan & hooks",
      "Reel & carousel editing",
      "DM & story prompts",
      "Monthly A/B testing",
    ],
    cta: "Build My Brand →",
  },
  {
    id: 3,
    title: "Conversion-Focused Websites",
    tag: "Next.js / Shopify / WordPress",
    description:
      "Websites that turn visitors into leads or orders. Fast, clear, and tracked from day one — built to convert, not just look good.",
    highlights: [
      "High-intent copy & trust blocks",
      "GA4 + Pixel tracking",
      "Mobile speed optimization",
      "Clean, scalable design",
    ],
    cta: "Plan My Site →",
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
    <section className="relative bg-[#0b0b0b] text-white py-24 overflow-hidden">
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
            Services
          </span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Three focused programs to scale your brand — from leads, to personal brand, to high-converting websites.
        </p>
      </div>

      {/* Service Cards */}
      <div className="relative flex flex-col md:flex-row flex-wrap justify-center gap-10 px-6 md:px-16 z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="relative bg-[#111] border border-[#1f1f1f] rounded-2xl p-8 max-w-sm md:max-w-md flex flex-col justify-between cursor-pointer"
            custom={index}
            variants={fadeInUp}
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
              <p className="text-gray-400 mb-6">{service.description}</p>

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
              {service.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
