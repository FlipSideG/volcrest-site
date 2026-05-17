import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Volcrest Capital — Preview",
  description:
    "Preview page for Volcrest Capital positioning around LLM systems, infrastructure, and applied software.",
};

const pillars = [
  {
    title: "LLM Systems",
    text: "Applied systems built around language models, retrieval, workflow logic, and decision support — designed for use in real operating environments rather than slideware.",
  },
  {
    title: "Infrastructure",
    text: "Containerised services, local hosting, cloud deployment, and practical runtime architecture for teams that need portability, control, and sensible operating costs.",
  },
  {
    title: "Applied Software",
    text: "Software for technical and commercial workflows where data, automation, and judgement need to work together cleanly, without unnecessary complexity.",
  },
];

const stackPoints = [
  "Python backends and service layers",
  "LLM workflows, tools, and evaluation loops",
  "Containers, Docker, and deployment portability",
  "Local-machine hosting where privacy or cost matters",
  "Cloud infrastructure where scale or reliability matters",
  "Operational software shaped around real user workflows",
];

const founderPoints = [
  "Computer Science background before entering commercial markets",
  "Shipbroking foundation and years inside shipping workflows",
  "15+ years at Shell Trading across freight and global commodities",
  "3 years at Navigate working across market structure and commercial decision-making",
  "A software-led view shaped by people who actually have to operate the system",
];

const engagementPoints = [
  "Designing LLM-powered internal tools and workflow systems",
  "Choosing between local, hybrid, and cloud deployment models",
  "Structuring containerised software that can move between environments",
  "Building practical systems for commercial, operational, and data-heavy teams",
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
                  LLM systems, infrastructure, and applied software.
                </p>
                <p className="text-lg md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
                  We design and build modern software around language models, containers, automation, and deployment across local machines and cloud environments.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white px-8 py-3 text-sm uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  Review with us
                </a>
                <a
                  href="#founder"
                  className="inline-flex items-center rounded-full border border-white/20 px-8 py-3 text-sm uppercase tracking-[0.18em] text-gray-300 transition-colors hover:border-white/50 hover:text-white"
                >
                  Why this angle
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-18 md:py-24 border-b border-white/10">
          <div className="w-full max-w-container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500 mb-5">
                    Focus
                  </p>
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-5">
                    {pillar.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    {pillar.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-18 md:py-24 border-b border-white/10">
          <div className="w-full max-w-container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500 mb-5">
                  What this should communicate
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight max-w-3xl">
                  Not another vague software company. Not a generic capital page either.
                </h2>
                <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
                  The goal is to position Volcrest as a serious, founder-led operation at the intersection of commercial judgement, technical systems, and deployable software. The emphasis is on real implementation: tools, services, workflows, and infrastructure that can be run, adapted, and operated.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500 mb-6">
                  Technical signals
                </p>
                <ul className="space-y-4 text-gray-300">
                  {stackPoints.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="founder" className="py-18 md:py-24 border-b border-white/10">
          <div className="w-full max-w-container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500 mb-5">
                  Founder background
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">
                  Technical grounding with commercial depth.
                </h2>
              </div>
              <div>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  Volcrest Capital is led by Rick Botley. The point of this section is not to turn the homepage into a CV, but to make clear that the software approach is shaped by someone who understands both systems and the environments those systems need to serve.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {founderPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 text-gray-300 leading-relaxed"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-18 md:py-24 border-b border-white/10">
          <div className="w-full max-w-container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500 mb-5">
                  Where this goes next
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight max-w-2xl">
                  A cleaner bridge between strategy, systems, and implementation.
                </h2>
              </div>
              <div className="space-y-5 text-lg text-gray-400 leading-relaxed">
                <p>
                  This version assumes the site should move toward software and systems positioning now, while keeping enough restraint that it still feels premium, sparse, and founder-led.
                </p>
                <p>
                  Hiring language is deliberately held back. The page is built to support that later without making the homepage feel like a recruitment ad today.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {engagementPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[24px] border border-white/10 bg-white/[0.02] px-6 py-5 text-gray-300 leading-relaxed"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="w-full max-w-container mx-auto px-6 md:px-12 lg:px-16">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-10 md:p-14 lg:p-16">
              <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500 mb-5">
                Closing line
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight max-w-4xl">
                Modern systems, built with technical clarity.
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
                If the direction is right, this can become the new homepage. If not, we can trim, sharpen, or make it more severe before replacing the main page.
              </p>
              <div className="mt-10">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white px-8 py-3 text-sm uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
