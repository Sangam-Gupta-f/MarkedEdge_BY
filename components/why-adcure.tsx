"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Revenue First, Not Vanity",
    description:
      "We measure success by booked calls, enquiries, and orders — not by views or likes.",
  },
  {
    title: "Niche Focus (for Now)",
    description:
      "We specialise in service businesses and fast-moving D2C setups, so our playbooks are tight and repeatable.",
  },
  {
    title: "Studio-to-Sales™ Pipeline",
    description:
      "Strategy → content → ads → website → WhatsApp/CRM → follow-ups. One team owns the entire flow.",
  },
  {
    title: "CPL Guardrails",
    description:
      "We agree on a target cost per lead or order and optimise to stay within it. If we miss (and your inputs were on time), we add extra testing at no charge.",
  },
  {
    title: "Client Inputs SLA",
    description:
      "Clear expectations for approvals and assets within 24–48 hours so campaigns never stall.",
  },
  {
    title: "Founder-Led Trust",
    description:
      "We turn your founder’s face and process into content that answers objections and speeds up buying.",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="relative bg-[#0b0b0b] text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Floating glow background */}
      <motion.div
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#9CFF1E15] blur-[120px] rounded-full"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#9CFF1E10] blur-[100px] rounded-full"
        animate={{ x: [0, -60, 40, 0], y: [0, 30, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Heading */}
      <div className="relative text-center mb-20 z-10">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          What Makes <span className="text-[#9CFF1E]">Us Different</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We’re not another agency chasing trends — our systems are built for measurable growth, clarity, and conversions.
        </p>
      </div>

      {/* Features Grid */}
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(156,255,30,0.2)",
            }}
            className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-8 shadow-[0_0_15px_rgba(156,255,30,0.05)] 
                       hover:border-[#9CFF1E]/60 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 mt-2 bg-[#9CFF1E] rounded-full shadow-[0_0_15px_#9CFF1E]" />
              <div>
                <h3 className="text-xl font-semibold text-[#9CFF1E] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
