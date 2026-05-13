"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} className="py-32 md:py-40 border-t border-gray-800">
      <div className="w-full px-6 md:px-12 lg:px-16 max-w-content mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm uppercase tracking-wide-caps text-gray-500 mb-6"
        >
          {siteConfig.founder.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl font-light tracking-tight text-white mb-10 md:mb-12 max-w-4xl"
        >
          {siteConfig.founder.title}
        </motion.h2>

        <div className="space-y-7 max-w-4xl">
          {siteConfig.founder.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.9,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
