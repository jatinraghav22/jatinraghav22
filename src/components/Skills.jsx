import React, { useState } from "react";
import { skillCategories } from "../data/skills";
import { Cpu, Terminal, Layout, Server, Database, GitBranch, Layers } from "lucide-react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryIcons = {
    languages: <Terminal className="w-4 h-4 text-purple-400" />,
    frontend: <Layout className="w-4 h-4 text-cyan-400" />,
    backend: <Server className="w-4 h-4 text-blue-400" />,
    database: <Database className="w-4 h-4 text-emerald-400" />,
    "core-cs": <Layers className="w-4 h-4 text-amber-400" />,
    tools: <GitBranch className="w-4 h-4 text-pink-400" />
  };

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-[#07070B]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Cpu className="w-3.5 h-3.5" />
              TECHNICAL STACK
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white">
              TECHNICAL SKILLS
            </h2>
            <p className="mt-4 text-zinc-400 text-base md:text-lg max-w-2xl font-sans">
              Technologies and computer science foundations practiced through university coursework and hands-on project engineering.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/5"
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white/5 text-zinc-400 hover:text-white border border-white/5"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    {categoryIcons[category.id] || <Cpu className="w-4 h-4 text-blue-400" />}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 font-sans mb-5 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Badges (no subjective percentages) */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/40 transition-all flex flex-col"
                  >
                    <span className="font-mono text-xs font-medium text-zinc-200 group-hover:text-blue-300">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-sans">
                      {skill.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
