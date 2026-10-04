import React from "react";
import { ExternalLink, ArrowRight, ShieldCheck, Terminal, Bot, BookOpen, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ProjectCard({ project, onOpenDetails }) {
  const isCarCraft = project.id === "carcraft";
  const isCoCode = project.id === "cocode";
  const isResume = project.id === "ai-resume-analyzer";
  const isCourse = project.id === "course-registration";

  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group relative rounded-3xl bg-[#09090F] border border-white/10 hover:border-blue-500/50 p-6 md:p-8 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.18)] cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Background ambient glow on hover */}
      <div
        className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-all duration-700 opacity-20 group-hover:opacity-40"
        style={{ backgroundColor: project.accentColor || "#3B82F6" }}
      />

      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-blue-400">
            {project.number}
          </span>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        {project.badge && (
          <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300">
            {project.badge}
          </span>
        )}
      </div>

      {/* Title & Description */}
      <div className="mb-6">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2 flex items-center gap-3">
          {project.title}
          <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1.5 transition-all" />
        </h3>
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Bespoke Interactive Visual Sandbox for Each Project */}
      <div className="my-4 rounded-2xl bg-black/60 border border-white/10 p-4 md:p-5 relative overflow-hidden select-none">
        {/* Project 01: CarCraft Visual Showroom */}
        {isCarCraft && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2">
              <span className="text-blue-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                SHOWROOM_INVENTORY_ONLINE
              </span>
              <span className="text-zinc-500">ROLES: CUSTOMER | ADMIN</span>
            </div>

            {/* Futuristic Showroom Graphic */}
            <div className="relative h-32 rounded-xl bg-gradient-to-b from-blue-950/20 via-zinc-900/60 to-black p-3 flex flex-col justify-between border border-blue-500/20">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-mono text-zinc-400">VEHICLE SUITE</div>
                  <div className="text-sm font-bold text-white">CarCraft Enterprise Hub</div>
                </div>
                <div className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px] border border-blue-500/40">
                  Django REST + React
                </div>
              </div>

              {/* Wireframe car silhouette visualization */}
              <div className="flex items-center justify-center py-2">
                <svg className="w-full max-w-xs h-14 stroke-blue-400/80 fill-none stroke-[1.5]" viewBox="0 0 200 60">
                  <path d="M10 45 L35 45 C40 38 52 38 57 45 L143 45 C148 38 160 38 165 45 L190 45 L180 32 L150 25 L120 12 L70 12 L45 28 L20 35 Z" />
                  <circle cx="46" cy="45" r="7" stroke="#60A5FA" strokeWidth="2" />
                  <circle cx="154" cy="45" r="7" stroke="#60A5FA" strokeWidth="2" />
                  <line x1="85" y1="12" x2="85" y2="28" stroke="#3B82F6" strokeDasharray="2 2" />
                  <line x1="120" y1="12" x2="125" y2="28" stroke="#3B82F6" strokeDasharray="2 2" />
                </svg>
              </div>

              <div className="flex justify-between text-[11px] font-mono text-zinc-400 pt-1 border-t border-white/5">
                <span>Inventory: 140+ Units</span>
                <span>Parts E-Commerce: Active</span>
                <span>Service Booking: Synced</span>
              </div>
            </div>
          </div>
        )}

        {/* Project 02: CoCode Real-Time IDE Visual */}
        {isCoCode && (
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-zinc-400 border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] text-zinc-400">workspace/editor.tsx</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] border border-purple-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  2 Devs Live
                </span>
              </div>
            </div>

            {/* Code IDE Lines with Live Cursors */}
            <div className="space-y-1 text-[11px] text-zinc-300">
              <div className="flex gap-3">
                <span className="text-zinc-600 select-none">01</span>
                <span><span className="text-purple-400">const</span> socket = io(<span className="text-cyan-300">"wss://cocode.live"</span>);</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-zinc-600 select-none">02</span>
                <span>socket.on(<span className="text-emerald-400">"code_sync"</span>, (delta) =&gt; updateBuffer(delta));</span>
                <span className="px-1.5 py-0.2 rounded bg-purple-600 text-white text-[9px] shadow-sm animate-bounce">
                  Jatin (Host)
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-600 select-none">03</span>
                <span><span className="text-blue-400">await</span> judge0.execute({'{'} code, language: <span className="text-amber-300">"cpp"</span> {'}'});</span>
              </div>
            </div>

            {/* Integrated Terminal Output */}
            <div className="pt-2 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500">
              <span className="text-emerald-400 flex items-center gap-1">
                <Terminal className="w-3 h-3" /> Execution output: [0ms] Status: Accepted
              </span>
              <span>50+ Languages</span>
            </div>
          </div>
        )}

        {/* Project 03: AI Resume Analyzer Visual */}
        {isResume && (
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-zinc-400 border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Bot className="w-3.5 h-3.5" />
                ATS_NEURAL_AUDIT
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px] border border-emerald-500/30">
                ATS Score: 92/100
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-zinc-500 text-[10px]">PARSED KEYWORDS</div>
                <div className="text-zinc-200 mt-1 flex flex-wrap gap-1">
                  <span className="text-blue-300">React</span> · <span className="text-cyan-300">Node</span> · <span className="text-purple-300">MongoDB</span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-zinc-500 text-[10px]">SECTION DIAGNOSTICS</div>
                <div className="text-emerald-400 mt-1">✓ Skills & Metrics Matched</div>
              </div>
            </div>

            <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 h-full w-[92%]" />
            </div>
          </div>
        )}

        {/* Project 04: Course Registration Visual */}
        {isCourse && (
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-zinc-400 border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <BookOpen className="w-3.5 h-3.5" />
                COURSE_ENROLLMENT_PORTAL
              </span>
              <span className="text-[10px] text-zinc-500">Firebase Realtime Sync</span>
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-zinc-200 font-sans">CS-301: Data Structures</span>
                <span className="text-emerald-400 font-mono">Enrolled (58/60)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-zinc-200 font-sans">CS-305: Database Systems</span>
                <span className="text-blue-400 font-mono">Available (42/60)</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tech Tags */}
      <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/5 text-zinc-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-1 rounded-lg text-xs font-mono bg-white/[0.02] text-zinc-500">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>

      {/* Bottom Footer Actions */}
      <div className="mt-5 pt-3 flex items-center justify-between">
        <span className="text-xs font-mono text-blue-400 group-hover:underline flex items-center gap-1">
          Explore Architecture & Code →
        </span>

        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="View GitHub Repository"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white transition-colors border border-blue-500/30"
              title="Open Live Application"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
