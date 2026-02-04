"use client";

import { useScroll } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import ZondaScrollCanvas from "@/components/ZondaScrollCanvas";
import ZondaExperience from "@/components/ZondaExperience";
import TechnicalMastery from "@/components/TechnicalMastery";
import RacingDNA from "@/components/RacingDNA";
import HistorySection from "@/components/History";
import Bloodline from "@/components/Bloodline";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Track scroll progress within the 600vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-pagani-black min-h-screen text-white">
      {isLoading && <LoadingScreen />}

      <div className={`transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
      </div>

      {/* 
        Master Scroll Sequence 
        600vh height ensures enough scroll space for a smooth playback 
      */}
      <section ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Layer 0: Image Sequence */}
          <div className="absolute inset-0 z-0">
            <ZondaScrollCanvas
              scrollYProgress={scrollYProgress}
              totalFrames={240}
              imageFolderPath="/images/zonda-sequence"
              onLoadComplete={() => setIsLoading(false)}
            />
          </div>

          {/* Layer 10: HUD Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <ZondaExperience scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </section>

      {/* 
        Rest of the Site 
        Scrolls naturally after the sequence finishes 
      */}
      <div className="relative z-20 bg-pagani-black shadow-[0_-50px_100px_rgba(26,26,26,1)]">
        <TechnicalMastery />
        <RacingDNA />
        <HistorySection />
        <Gallery />
        <Bloodline />
        <Footer />
      </div>
    </main>
  );
}
