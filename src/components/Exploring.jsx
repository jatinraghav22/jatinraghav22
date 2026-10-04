import React from "react";
import { exploringCards } from "../data/exploring";
import { Compass, Sparkles, ArrowRight } from "lucide-react";

export function Exploring() {
  return (
    <section id="exploring" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Compass className="w-3.5 h-3.5" />
              CURRENT INTERESTS
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
              WHAT I&apos;M EXPLORING
            </h2>
            <p className="mt-4 text-zinc-400 text-base md:text-lg max-w-2xl font-sans">
              Active engineering areas and paradigms I am currently studying, implementing in projects, and deepening through hands-on practice.
            </p>
          </div>
        </div>

        {/* 6 Exploration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploringCards.map((item) => (
            <div
              key={item.number}
              className="group p-6 md:p-8 rounded-2xl bg-zinc-950/70 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-400">
                    {item.number}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500">
                    {item.techBadge}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors">
                <span>Active Learning Sphere</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
