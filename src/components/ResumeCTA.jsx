import React from "react";
import { Download, ArrowUpRight, Sparkles } from "lucide-react";

export function ResumeCTA({ resumePath = "/resume/Jatin_Raghav_Resume.pdf" }) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-950/40 via-zinc-950 to-purple-950/40 border border-white/10 p-8 md:p-14 text-center overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/20 blur-[90px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            CAREER OPPORTUNITIES
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase mb-4">
            BUILDING MY NEXT PROJECT.
          </h2>

          <p className="max-w-xl mx-auto text-base md:text-lg text-zinc-400 font-sans leading-relaxed mb-8">
            Looking for opportunities to learn, contribute and build meaningful software.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={resumePath}
              download="Jatin_Raghav_Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD RESUME
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/10 font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all hover:border-white/30 hover:scale-105 active:scale-95"
            >
              VIEW PROJECTS
              <ArrowUpRight className="w-4 h-4 text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
