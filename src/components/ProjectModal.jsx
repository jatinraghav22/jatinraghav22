import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Shield, Layers, Cpu, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B0B12] border border-white/10 p-6 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tag & Number */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-sm font-bold text-blue-400">
            PROJECT {project.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-300">
            {project.category}
          </span>
          {project.badge && (
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          {project.title}
        </h2>
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6 font-sans">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-white/10">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 font-medium text-sm transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              Source Code
            </a>
          )}
          {project.roles && (
            <div className="flex items-center gap-2 ml-auto text-xs font-mono text-zinc-400">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Roles: {project.roles.join(" • ")}</span>
            </div>
          )}
        </div>

        {/* Technologies Grid */}
        <div className="mb-8">
          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400" /> Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-zinc-300 hover:border-blue-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="mb-8">
          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-zinc-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" /> Architecture
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              {project.architecture}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" /> Engineering Challenges
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              {project.challenges}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
