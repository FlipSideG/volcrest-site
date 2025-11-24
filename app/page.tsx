import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreeColumns from "@/components/ThreeColumns";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        <Hero />
        <ThreeColumns />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}

