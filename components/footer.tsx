import { Button } from './ui/button';
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#f4f0fa] to-white text-center py-6 relative  shadow-inner ">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img
          src="/ME.png" // replace with your actual logo path
          alt="MarkedEdge Logo"
          className="h-20 w-60 object-cover"
        />
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-200 my-4 mx-auto w-11/12"></div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-4 text-gray-600">
        <a href="#" aria-label="Instagram" className="hover:text-pink-500">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="#" aria-label="YouTube" className="hover:text-red-500">
          <i className="fab fa-youtube text-2xl"></i>
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a href="#" aria-label="X" className="hover:text-black">
          <i className="fab fa-x-twitter text-2xl"></i>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500">
        Copyright © 2025 <span className="font-medium">MarkedEdge</span> |{' '}
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
      </p>

      {/* Scroll to top button */}
      <Button
        
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow-lg"
      >
        <a href="#top" aria-label="Scroll to top">
        ↑
        </a>
      </Button>
    </footer>
  );
}
