"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function ThreeColumns() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} className="py-32 md:py-40 border-t border-gray-800">
      <div className="w-full px-6 md:px-12 lg:px-16 max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 lg:gap-16">
          {siteConfig.focusAreas.map((area, index) => (
            <motion.div
              key={area.heading}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-left"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 md:mb-8 tracking-tight text-white">
                {area.heading}
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                {area.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

