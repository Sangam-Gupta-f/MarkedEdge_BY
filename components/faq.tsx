"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How soon will I see leads?",
      answer:
        "Usually 7–14 days after launch. Consistency improves in weeks 3–6 as we test and optimise.",
    },
    {
      question: "How much ad budget do I need?",
      answer:
        "For most local services, plan ₹30,000–₹60,000/month. Premium or luxury projects may need more.",
    },
    {
      question: "Do I need to shoot fancy videos?",
      answer:
        "No. Clean phone videos and real work photos are enough. We’ll guide you on what to shoot.",
    },
    {
      question: "What if I delay content approvals?",
      answer:
        "Delays slow results. Our Client Inputs SLA asks for approvals and assets within 24–48 hours.",
    },
    {
      question: "Do you guarantee results?",
      answer:
        "We don’t make empty promises. We set a CPL ceiling together and back it with make-good credits (extra testing/creatives if we miss it and your inputs were on time).",
    },
  ];

  return (
    <section id="faq" className="relative bg-[#0b0b0b] text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Glow background accents */}
      <motion.div
        className="absolute -top-40 -left-32 w-[400px] h-[400px] bg-[#9CFF1E15] blur-[120px] rounded-full"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#9CFF1E10] blur-[100px] rounded-full"
        animate={{ x: [0, -60, 40, 0], y: [0, 30, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-[#9CFF1E]">Questions</span>
          </h2>
          <div className="w-24 h-[3px] mx-auto bg-[#9CFF1E] rounded-full shadow-[0_0_15px_#9CFF1E]" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
            Quick answers to common questions about our sprints, systems, and expectations.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-[#1f1f1f] rounded-xl overflow-hidden bg-[#111] transition-all duration-300 ${
                openIndex === index ? "shadow-[0_0_20px_rgba(156,255,30,0.15)]" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#141414] transition"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#9CFF1E] transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-300 border-t border-[#1f1f1f]"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16 border-t border-[#1f1f1f] pt-10">
          <p className="text-gray-400">
            Still have a question?{" "}
            <a
              href="#"
              className="text-[#9CFF1E] font-semibold hover:underline hover:text-white transition"
            >
              Chat with our team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
