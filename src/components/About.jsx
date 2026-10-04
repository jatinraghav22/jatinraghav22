import React from "react";
import { quickStats } from "../data/education";
import { User, BookOpen, Code, Compass, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
          <User className="w-3.5 h-3.5" />
          ABOUT ME
        </div>

        {/* Large Heading */}
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8 uppercase leading-tight">
          CURIOUS BY NATURE. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            BUILDING BY PRACTICE.
          </span>
        </h2>

        {/* Split Grid: Content & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
            <p>
              I&apos;m <span className="text-white font-semibold">Jatin Raghav</span>, a Computer Science and Engineering student at{" "}
              <span className="text-blue-400">ABES Engineering College, Ghaziabad</span>. I enjoy building web applications, exploring full-stack development and solving programming problems using Data Structures and Algorithms.
            </p>
            <p>
              My current learning journey focuses on{" "}
              <span className="text-white font-medium">React.js, JavaScript, Node.js, Express.js, MongoDB, Python</span> and modern software development practices.
            </p>
            <p className="p-4 rounded-2xl bg-zinc-950/70 border border-white/10 text-zinc-300 italic border-l-4 border-l-blue-500">
              &ldquo;I believe the best way to learn software development is by building projects, solving problems and continuously improving.&rdquo;
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" /> B.Tech CSE &apos;28
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-purple-400" /> Full-Stack Learner
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-cyan-400" /> Problem Solver
              </span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {quickStats.map((stat) => (
              <div
                key={stat.id}
                className="group p-6 rounded-2xl bg-[#09090F] border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col justify-between"
              >
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-blue-400 group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="mt-4">
                  <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
