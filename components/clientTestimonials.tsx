"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    brand: "BlackPapers",
    logo: "/brands/blackpapers.png", // <-- replace with actual logo path
    text: "We’ve been associated with MarkedEdge for a long time, and I can confidently say they’ve delivered consistent performance from day one. Our campaigns have always maintained a great cost per lead, and the quality of leads has stayed strong.",
  },
  {
    brand: "Urban House Interiors",
    logo: "/brands/urbanhouse.png",
    text: "It’s been around 10 months with MarkedEdge, and we’ve built an audience of 45K organic followers. Along with that, our Meta ads have started delivering strong and consistent results. The team genuinely understands how to grow a brand the right way.",
  },
  {
    brand: "Archirace Studio",
    logo: "/brands/archirace.png",
    text: "From the first campaign itself, we started seeing quality leads at a very low CPL. What really stands out about MarkedEdge is their agility — the team is always ready to optimize whenever there’s a dip or issue with ads.",
  },
  {
    brand: "Jalsaghar Art Studio",
    logo: "/brands/jalsaghar.png",
    text: "MarkedEdge completely transformed our marketing journey. From creating an engaging Shopify website to building 4K+ organic followers on Instagram, the team has helped us turn our creative passion into a real brand identity that connects with customers.",
  },
  {
    brand: "CI Baby",
    logo: "/brands/cibaby.png",
    text: "The MarkedEdge team did an incredible job designing our Shopify website. The layout, flow, and feel truly match our brand. We were so impressed with their work that we decided to continue with them for performance marketing as well.",
  },
  {
    brand: "Swaraga",
    logo: "/brands/swaraga.png",
    text: "The MarkedEdge team did a great job helping us increase our event bookings through Meta ads. Their ad strategy and constant optimization made a big difference. We’re genuinely impressed with the results.",
  },
];

export default function ClientTextTestimonials() {
  return (
    <section
      id="clients"
      className="bg-[#0b0b0b] text-white py-24 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Subtle neon glow top divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#9CFF1E] to-transparent opacity-70"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What Our <span className="text-[#9CFF1E]">Clients Say</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Real stories from our partner brands — consistent performance,
          real growth, and long-term results.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#151515] border border-[#1f1f1f] hover:border-[#9CFF1E]/40 rounded-2xl p-8 shadow-lg transition-transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Brand Avatar */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#9CFF1E]/30 flex-shrink-0">
                <Image
                  src={item.logo}
                  alt={item.brand}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#9CFF1E]">
                {item.brand}
              </h3>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-300 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom glow divider */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#9CFF1E] to-transparent opacity-70 mt-12"></div>
    </section>
  );
}
