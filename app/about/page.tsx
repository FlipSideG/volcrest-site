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
              Rick Botley began his career in technology, graduating with a Computer Science degree before moving into commodities trading.
            </p>

            <p>
              He spent 16 years at Shell Trading, working across oil shipping, physical cargo trading, and derivatives, gaining experience in complex risk, market structure, and global energy flows. He later spent two years in the private sector in a similar capacity, operating with greater commercial flexibility and a more entrepreneurial mandate.
            </p>

            <p>
              In 2021, Rick stepped away from institutional trading to focus exclusively on managing his own private capital. This developed into Volcrest Capital, a privately held investment vehicle used solely for the management of his personal assets and long-term holdings.
            </p>

            <p>
              The approach reflects his background: thoughtful risk-taking and a willingness to accept periods of volatility when the long-term value proposition is compelling. As a personal investment portfolio, it has experienced both meaningful drawdowns and strong compounding, consistent with a high-risk, high-reward philosophy. Since 2021, the portfolio has achieved approximately 25.5% annualised returns, alongside high volatility, reflecting this personal strategy.
            </p>

            <p>
              Today, Volcrest Capital allocates Rick's own capital across areas such as advanced computing, energy infrastructure, defence innovation, and other selective long-term opportunities.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

