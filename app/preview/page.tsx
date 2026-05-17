import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Volcrest Capital — Preview",
  description:
    "Preview page for Volcrest Capital focused on agent platforms for commercial trading desks.",
};

const focusCards = [
  {
    title: "Multi-agent workflows",
    text: "Production services running today. Python, FastAPI, event-driven pipelines, and real-time desk data.",
  },
  {
    title: "Data fusion",
    text: "Market signals, broker flow, vessel context, and internal desk inputs reconciled into one operating layer.",
  },
  {
    title: "Domain-trained models",
    text: "Models tuned on the desk's own language, workflows, and historical decisions — built to improve signal quality, not generate noise.",
  },
];

export default function PreviewPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        <section className="pt-32 pb-20 md:pt-44 md:pb-28 border-b border-white/10">
          <div className="w-full max-w-container mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-5xl">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-gray-500 mb-8">
                Preview route · proposed homepage direction
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-white max-w-5xl leading-[0.95]">
                Volcrest Capital
              </h1>
              <div className="mt-8 max-w-4xl space-y-6">
                <p className="text-2xl md:text-4xl font-light text-white leading-tight">
                  Agent platforms for commercial trading desks.
                </p>
                <p className="text-lg md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
                  Multi-workflow agent systems for desks that run on data,
                  judgement, and speed. Starting with freight trading.
                  Production-minded software, integrated data, and
                  domain-trained models for live desk workflows. Commercial
                  discussions already underway.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="mailto:Rick@volcrestcapital.com?subject=Engineering%20roles"
                  className="inline-flex items-center rounded-full border border-white px-8 py-3 text-sm uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  Engineering roles
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white/20 px-8 py-3 text-sm uppercase tracking-[0.18em] text-gray-300 transition-colors hover:border-white/50 hover:text-white"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-18 md:py-24 border-b border-white/10">
          <div className="w-full max-w-container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid gap-6 md:grid-cols-3">
              {focusCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500 mb-5">
                    Focus
                  </p>
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-5">
                    {card.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="founder" className="py-20 md:py-28">
          <div className="w-full max-w-container mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-5xl rounded-[32px] border border-white/10 bg-white/[0.04] p-10 md:p-14 lg:p-16">
              <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500 mb-5">
                Founder
              </p>
              <p className="font-serif text-3xl md:text-5xl font-light leading-tight text-white">
                Volcrest is led by Rick Botley. Computer Science background.
                Eighteen years across Shell, Navig8, and his own shipbroking
                agency in physical oil tanker trading. Now building the
                software, data, and model layer for the desks he spent his
                career on.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
