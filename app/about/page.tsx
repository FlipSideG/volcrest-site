"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="w-full px-6 md:px-12 lg:px-16 max-w-content mx-auto">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-16 md:mb-20"
          >
            About
          </motion.h1>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-4xl"
          >
            <p>
              Rick Botley studied Computer Science before beginning his career in shipbroking and global commodities, building a foundation in both technical systems and commercial execution.
            </p>

            <p>
              He spent more than 15 years at Shell Trading and later 3 years at Navigate, working across freight, shipping, market structure, and decision-making in complex international markets.
            </p>

            <p>
              Volcrest Capital reflects that combination of backgrounds. The work now centres on LLM systems, containerised services, automation, and software that can be deployed across local machines and cloud environments.
            </p>

            <p>
              The edge is not generic SaaS positioning. It is a mix of technical grounding, operational awareness, and experience in high-value workflows where clarity, speed, and control matter.
            </p>

            <p>
              Today, Volcrest sits at the intersection of applied software, infrastructure, and selective long-term technology opportunities.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

