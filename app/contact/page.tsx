"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black flex items-center pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="w-full px-6 md:px-12 lg:px-16 max-w-content mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-12 md:mb-16"
          >
            Contact
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gray-400 font-light mb-12 md:mb-16"
          >
            For technical, strategic, or investment enquiries, reach out via email.
          </motion.p>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="mailto:Rick@volcrestcapital.com"
              className="inline-block text-2xl md:text-3xl lg:text-4xl font-light text-white hover:opacity-70 transition-opacity duration-300"
            >
              Rick@volcrestcapital.com
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

