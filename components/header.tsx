"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0b0b]/90 backdrop-blur-md shadow-[0_0_20px_rgba(156,255,30,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-2">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/ME.png"
            alt="MarkedEdge Logo"
            width={130}
            height={40}
            className="object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Services", href: "#services" },
            { label: "Clients", href: "#clients" },
            { label: "Why Us", href: "#why" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-[#9CFF1E] transition font-medium text-sm relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#9CFF1E] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex bg-[#9CFF1E] text-black text-sm font-semibold px-5 py-2 rounded-full hover:shadow-[0_0_15px_#9CFF1E] hover:scale-105 transition-all"
        >
          Chat Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b0b0b] border-t border-[#1a1a1a]">
          <nav className="flex flex-col items-center space-y-5 py-6 text-base">
            {[
              { label: "Services", href: "#services" },
              { label: "Clients", href: "#clients" },
              { label: "Why Us", href: "#why" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#9CFF1E] font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#9CFF1E] text-black font-semibold px-6 py-2 rounded-full hover:shadow-[0_0_15px_#9CFF1E] hover:scale-105 transition-all"
            >
              Chat Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
