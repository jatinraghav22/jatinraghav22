import React from "react";
import { dsaTopics } from "../data/skills";
import { DsaVisualizer } from "./3d/DsaVisualizer";
import { Binary, CheckCircle, BrainCircuit, ExternalLink } from "lucide-react";

export function DsaSection() {
  return (
    <section id="dsa" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs uppercase tracking-widest mb-4">
            <BrainCircuit className="w-3.5 h-3.5" />
            PROBLEM SOLVING
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
            LEARN. SOLVE. IMPROVE.
          </h2>
          <p className="mt-4 text-zinc-400 text-base md:text-lg font-sans">
            Regularly practicing Data Structures and Algorithms to strengthen problem-solving
            skills and prepare for software development opportunities.
          </p>
        </div>

        {/* 2-Column Layout: DSA Visualization + Topics & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Visualizer Component */}
          <div className="lg:col-span-7">
            <DsaVisualizer />
          </div>

          {/* Right Column: Verified Metrics & Core Topics */}
          <div className="lg:col-span-5 space-y-6">
            {/* Metric Banner Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/30 via-zinc-950 to-blue-950/20 border border-purple-500/30 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-purple-400 tracking-wider uppercase font-semibold">
                  ACCOMPLISHMENT
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  Active Practice
                </span>
              </div>
              <div className="font-heading text-5xl font-extrabold text-white mb-2">
                150+
              </div>
              <div className="text-sm font-semibold text-zinc-200">
                DSA Problems Solved
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-sans">
                Solving problems regularly across LeetCode &amp; CodeChef focusing on time complexity, recursion, pointers, and memory constraints.
              </p>

              {/* Platforms */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  LeetCode
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  CodeChef
                </div>
              </div>
            </div>

            {/* Topics Covered */}
            <div className="p-6 rounded-2xl bg-zinc-950/60 border border-white/10 backdrop-blur-sm">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                <Binary className="w-4 h-4 text-blue-400" />
                Key Focus Topics
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {dsaTopics.map((topic) => (
                  <div
                    key={topic.name}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-300 hover:border-purple-500/30 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{topic.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
