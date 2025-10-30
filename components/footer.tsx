"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-[#0b0b0b] text-gray-400 py-12 border-t border-[#1a1a1a]">
      {/* Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#9CFF1E] to-transparent opacity-70"></div>

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Image
          src="/ME.png"
          alt="MarkedEdge Logo"
          width={160}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-[#9CFF1E] transition-transform hover:scale-110"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="hover:text-[#9CFF1E] transition-transform hover:scale-110"
        >
          <i className="fab fa-youtube text-2xl"></i>
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="hover:text-[#9CFF1E] transition-transform hover:scale-110"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="#"
          aria-label="X"
          className="hover:text-[#9CFF1E] transition-transform hover:scale-110"
        >
          <i className="fab fa-x-twitter text-2xl"></i>
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1a1a1a] w-10/12 mx-auto my-8"></div>

      {/* Copyright */}
      <p className="text-sm text-center text-gray-500">
        © 2025 <span className="text-[#9CFF1E] font-semibold">MarkedEdge</span>{" "}
        |{" "}
        <a
          href="/privacy"
          className="text-gray-400 hover:text-[#9CFF1E] transition-colors underline-offset-2 hover:underline"
        >
          Privacy Policy
        </a>
      </p>

      {/* Scroll to Top Button */}
      {showTop && (
        <Button
          asChild
          className="fixed bottom-6 right-6 bg-[#9CFF1E] text-black rounded-full w-11 h-11 flex items-center justify-center font-bold text-xl hover:shadow-[0_0_20px_#9CFF1E] transition-all animate-pulse"
        >
          <a href="#top" aria-label="Scroll to top">
            ↑
          </a>
        </Button>
      )}
    </footer>
  );
}
