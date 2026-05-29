"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-7rem)] flex items-center pt-24 pb-8 md:pt-28 md:pb-10">
      <div className="w-full px-6 md:px-12 lg:px-16 max-w-container mx-auto">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white mb-6 md:mb-8"
          >
            {siteConfig.hero.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 md:space-y-6 max-w-3xl"
          >
            <p className="text-xl md:text-3xl font-light text-white leading-snug">
              {siteConfig.hero.subtitle}
            </p>
            
            <p className="text-base md:text-xl text-gray-400 leading-relaxed">
              {siteConfig.hero.subline}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 md:mt-10"
          >
            <a
              href="/contact"
              className="group relative inline-block px-10 py-4 text-sm uppercase tracking-wide-caps font-medium border border-white rounded-full overflow-hidden transition-all duration-500 hover:text-black"
            >
              <span className="relative z-10">{siteConfig.hero.ctaText}</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

