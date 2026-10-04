import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { DsaSection } from "./components/DsaSection";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Journey } from "./components/Journey";
import { Certifications } from "./components/Certifications";
import { Exploring } from "./components/Exploring";
import { GithubSection } from "./components/GithubSection";
import { Contact } from "./components/Contact";
import { ResumeCTA } from "./components/ResumeCTA";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    // Only initialize smooth scroll if user doesn't prefer reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-blue-600 selection:text-white">
      {/* Loading Screen */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {/* Fixed Glass Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <DsaSection />
        <Projects />
        <Education />
        <Journey />
        <Certifications />
        <Exploring />
        <GithubSection />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
