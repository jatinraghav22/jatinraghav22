import React, { useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Sparkles, Code2 } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "fullstack") return project.technologies.includes("Django") || project.technologies.includes("Node.js");
    if (filter === "realtime") return project.technologies.includes("Socket.IO") || project.technologies.includes("Firebase");
    return true;
  });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              PORTFOLIO SHOWCASE
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white">
              SELECTED PROJECTS
            </h2>
            <p className="mt-4 text-zinc-400 text-base md:text-lg max-w-2xl font-sans">
              Projects built while learning, experimenting and solving real development problems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-950/80 border border-white/10 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                filter === "fullstack"
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Full-Stack & APIs
            </button>
            <button
              onClick={() => setFilter("realtime")}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                filter === "realtime"
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Real-Time / Sync
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>

        {/* Modal for Deep Dive Architecture & Code */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
