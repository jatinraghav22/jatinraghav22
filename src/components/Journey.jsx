import React from "react";
import { journeyMilestones } from "../data/journey";
import { Compass, Milestone, Flag } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            CHRONOLOGICAL GROWTH
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
            MY DEVELOPMENT JOURNEY
          </h2>
          <p className="mt-4 text-zinc-400 text-base md:text-lg font-sans">
            How curiosity turned into code — from computer science fundamentals to building complete full-stack web applications.
          </p>
        </div>

        {/* Journey Cards Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {journeyMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-zinc-950/70 border border-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-heading text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {milestone.year}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-400 uppercase tracking-wider">
                    {milestone.tag}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                  {milestone.title}
                </h3>

                <div className="text-xs font-mono text-zinc-500 mb-4">
                  {milestone.institution}
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  {milestone.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-zinc-500">
                <Milestone className="w-3.5 h-3.5 text-blue-400" />
                <span>Phase {idx + 1} of Learning Roadmap</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
