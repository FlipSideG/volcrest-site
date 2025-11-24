"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation Links */}
          <div className="flex items-center gap-8 md:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm uppercase tracking-wide-caps font-medium text-white hover:opacity-70 transition-opacity duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

