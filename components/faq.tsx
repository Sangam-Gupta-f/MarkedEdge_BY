'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How soon will I see leads?",
      answer: "Usually 7–14 days after launch. Consistency improves in weeks 3–6 as we test."
    },
    {
      question: "How much ad budget do I need?",
      answer: "For most local services, plan ₹–₹ / month. Premium areas or luxury projects may need more"
    },
    {
      question: "Do I need to shoot fancy videos?",
      answer: "No. Clean phone videos and real work photos are enough. We’ll guide you on what to shoot."
    },
        {
      question: "What if I delay content approvals?",
      answer: "Delays slow results. Our Client Inputs SLA asks for approvals and assets within 24–48 hours"
    },
    {
      question: "Do you guarantee results?",
      answer: "We don’t make empty promises. We set a CPL ceiling together and back it with make-good credits (extra testing/creatives if we miss it and your inputs were on time)."
    },
  ]

  return (
    <section id="faq" className="py-20 bg-purple-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-12">
          <h2 className="text-5xl font-bold text-center text-black mb-12">Need Help?</h2>

          <div className="space-y-4 mb-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-black text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-700 border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t pt-8">
            <p className="text-center text-gray-700">
              Still Have A Question? <a href="#" className="font-bold text-black underline hover:text-gray-600">Chat With Our Experts</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
