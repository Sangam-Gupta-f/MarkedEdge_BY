"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "ICP & Offer Lab", description: "We define your ideal customer, service packages, and the one offer that makes them act now." },
  { id: 2, title: "Hook & Creative Kit", description: "We turn your work and founder story into scroll-stopping hooks and simple creatives. No big shoots—clarity wins." },
  { id: 3, title: "Funnel Build", description: "We set up the shortest path to an enquiry: lead form or landing page, tracking, and CRM/WhatsApp routing." },
  { id: 4, title: "Launch & Learn (Day 7–10)", description: "We go live fast, study early signals, and keep only what brings leads at a fair cost." },
  { id: 5, title: "Optimize to CPL Ceiling", description: "We agree on a target cost per lead, test audiences, creatives, and copy until we hit it — then scale carefully." },
  { id: 6, title: "Nurture & Show-Up", description: "We give you DM/WhatsApp follow-up prompts and scripts so more leads become booked calls." },
  { id: 7, title: "Weekly Review", description: "A simple scorecard — leads, CPL, hooks, watch rate, booked calls, and revenue. You’ll know what’s working." },
];

export default function HowWeWork() {
  const [active, setActive] = useState(1);

  return (
    <section className="relative bg-[#0b0b0b] text-white px-6 md:px-20 py-24 overflow-visible">
      {/* Background Glow */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#9CFF1E15] blur-[100px] rounded-full"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#9CFF1E10] blur-[100px] rounded-full"
        animate={{ x: [0, -60, 40, 0], y: [0, 30, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Two-column wrapper */}
      <div className="flex flex-col md:flex-row md:items-start md:space-x-16 max-w-7xl mx-auto">
        {/* LEFT SIDE — Sticky Info Panel */}
        <div className="md:w-1/2 md:h-[100vh] md:sticky md:top-20 flex flex-col justify-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Our <span className="text-gray-400">Studio-to-Sales™</span>
            <br />
            <span className="text-[#9CFF1E] underline decoration-[#9CFF1E]/60">
              How We Work
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            The 7-step process we use to take you from{" "}
            <span className="text-white font-semibold">studio to sales</span> —
            building a brand that grows and sells on social media with clarity and confidence.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(156,255,30,0.6)",
            }}
            className="mt-8 bg-[#9CFF1E] text-black font-semibold px-8 py-3 rounded-full transition-all hover:bg-[#b6ff47]"
          >
            Get Started
          </motion.button>
        </div>

        {/* RIGHT SIDE — Scrollable Steps */}
        <div className="md:w-1/2 relative mt-16 md:mt-0 space-y-24">
          {/* Vertical line timeline */}
          <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#9CFF1E]/60 to-transparent"></div>

          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative pl-8 bg-[#111] border border-[#1f1f1f] rounded-xl p-8 shadow-[0_0_20px_rgba(156,255,30,0.05)] 
                         hover:shadow-[0_0_30px_rgba(156,255,30,0.2)] transition-all cursor-pointer"
              onMouseEnter={() => setActive(step.id)}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute -left-[26px] top-8 w-5 h-5 rounded-full border-2 border-[#9CFF1E] ${
                  active === step.id ? "bg-[#9CFF1E] shadow-[0_0_20px_#9CFF1E]" : "bg-transparent"
                }`}
                animate={active === step.id ? { scale: 1.2 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="absolute -left-14 top-8 text-5xl font-bold text-[#9CFF1E]/30 select-none">
                {step.id}
              </div>

              <h3 className="text-2xl font-semibold text-[#9CFF1E] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
