import React, { useState, useEffect, lazy, Suspense } from "react";
import { ArrowDown, Download, Sparkles, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const HeroScene = lazy(() =>
  import("./3d/HeroScene").then((module) => ({ default: module.HeroScene }))
);

export function Hero() {
  const animatedWords = ["BUILDING", "LEARNING", "SOLVING", "CREATING"];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIdx((prev) => (prev + 1) % animatedWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [animatedWords.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* 3D Student Developer Workspace Background Canvas */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
        <Suspense fallback={<div className="w-full h-full bg-[#050505]" />}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Radial Vignette & Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.85)_75%,#050505_100%)] pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-10" />

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-emerald-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)] animate-[pulse_3s_ease-in-out_infinite]">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-mono text-xs font-medium text-emerald-300 tracking-wide">
            Open to Internship Opportunities
          </span>
        </div>

        {/* Dynamic Animated Activity Badge */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-zinc-400 uppercase tracking-widest mb-3">
          <Terminal className="w-4 h-4 text-blue-400" />
          <span>CURRENTLY</span>
          <span className="text-white font-bold px-2 py-0.5 rounded bg-blue-500/20 border border-blue-500/40 text-blue-300">
            {animatedWords[currentWordIdx]}
          </span>
          <span>MODERN SOFTWARE</span>
        </div>

        {/* Main Name Heading */}
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase mb-4 leading-none select-none">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
            JATIN RAGHAV
          </span>
        </h1>

        {/* Professional Title */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-base sm:text-xl font-heading font-medium text-zinc-300 mb-6">
          <span className="text-blue-400 font-semibold">B.Tech CSE Student</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-200">Aspiring Software Developer</span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="text-purple-400 hidden sm:inline font-mono text-sm">ABES EC &apos;28</span>
        </div>

        {/* Supporting Bio Description */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-zinc-400 font-sans leading-relaxed mb-10 text-balance">
          Computer Science student focused on building modern web applications, exploring
          full-stack development, strengthening Data Structures &amp; Algorithms, and turning ideas
          into working software.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95"
          >
            VIEW PROJECTS
          </a>

          <a
            href="/resume/Jatin_Raghav_Resume.pdf"
            download="Jatin_Raghav_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/10 font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all hover:border-white/30 hover:scale-105 active:scale-95 backdrop-blur-md"
          >
            <Download className="w-4 h-4 text-blue-400" />
            DOWNLOAD RESUME
          </a>

          <a
            href="https://github.com/jatinraghav22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs font-semibold tracking-wider transition-all hover:scale-105"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="hidden sm:inline">GITHUB</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jatin-raghav-a9a060357/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs font-semibold tracking-wider transition-all hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            <span className="hidden sm:inline">LINKEDIN</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-blue-400 transition-colors animate-bounce mt-4"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[11px] tracking-widest uppercase">DISCOVER</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
