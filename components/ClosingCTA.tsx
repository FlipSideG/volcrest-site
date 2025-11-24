"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function ClosingCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} className="py-40 md:py-48">
      <div className="w-full px-6 md:px-12 lg:px-16 max-w-content mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-display font-light tracking-tight mb-16 md:mb-20 text-white"
        >
          {siteConfig.closing.line}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <button className="group relative px-10 py-4 text-sm uppercase tracking-wide-caps font-medium border border-white rounded-full overflow-hidden transition-all duration-500 hover:text-black">
            <span className="relative z-10">{siteConfig.closing.ctaText}</span>
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

