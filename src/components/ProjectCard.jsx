import React from "react";
import { ArrowRight, Terminal, Bot, BookOpen, Sparkles } from "lucide-react";

export function ProjectCard({ project, onOpenDetails }) {
  const isCarCraft = project.id === "carcraft";
  const isCoCode = project.id === "cocode";
  const isResume = project.id === "ai-resume-analyzer";
  const isCourse = project.id === "course-registration";

  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group relative rounded-3xl bg-[#09090F] border border-white/10 hover:border-purple-500/50 p-6 md:p-8 transition-all duration-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.18)] cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Background ambient glow on hover */}
      <div
        className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-all duration-700 opacity-20 group-hover:opacity-40"
        style={{ backgroundColor: project.accentColor || "#3B82F6" }}
      />

      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-purple-400">
              {project.number}
            </span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          {project.badge && (
            <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-purple-500/10 border border-purple-500/30 text-purple-300">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <div className="mb-5">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2.5 flex items-start justify-between gap-3">
            <span>{project.title}</span>
            <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-1.5 transition-all shrink-0 mt-1" />
          </h3>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Bespoke Interactive Visual Sandbox for Each Project */}
        <div className="my-4 rounded-2xl bg-black/70 border border-white/10 p-4 md:p-5 relative overflow-hidden select-none">
          {/* Project 01: CoCode Real-Time IDE & Workspace Visual */}
          {isCoCode && (
            <div className="space-y-3 font-mono text-xs">
              {/* Top IDE Window Header & Status */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] text-purple-300 flex items-center gap-1.5 ml-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    room-402 #workspace
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium">
                    💻 Code Editor
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5 hidden sm:inline">
                    🎨 Tldraw Board
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    3 Devs Live
                  </span>
                </div>
              </div>

              {/* Multi-File Tab Bar */}
              <div className="flex items-center gap-2 text-[11px] border-b border-white/5 pb-1.5 overflow-x-auto">
                <div className="px-2.5 py-1 rounded-t-md bg-white/10 text-white font-medium border-b-2 border-purple-500 flex items-center gap-1.5">
                  <span className="text-cyan-400">⚛</span> App.jsx
                </div>
                <div className="px-2.5 py-1 rounded-t-md text-zinc-500 hover:text-zinc-300 flex items-center gap-1.5">
                  <span className="text-amber-400">⚡</span> compiler.js
                </div>
                <div className="px-2.5 py-1 rounded-t-md text-zinc-500 hover:text-zinc-300 flex items-center gap-1.5">
                  <span className="text-emerald-400">🔌</span> socket.js
                </div>
              </div>

              {/* Code IDE Lines with Live Collaborator Cursors */}
              <div className="space-y-1.5 text-[11px] text-zinc-300 py-1">
                <div className="flex gap-3">
                  <span className="text-zinc-600 select-none">01</span>
                  <span><span className="text-purple-400">import</span> &#123; io &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">"socket.io-client"</span>;</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-zinc-600 select-none">02</span>
                  <span><span className="text-purple-400">const</span> socket = io(<span className="text-cyan-300">"wss://cocode-api.live"</span>);</span>
                  <span className="px-1.5 py-0.2 rounded bg-purple-600 text-white text-[9px] font-sans shadow-sm flex items-center gap-1 animate-pulse">
                    Jatin (Host) ▾
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-zinc-600 select-none">03</span>
                  <span>socket.emit(<span className="text-emerald-400">"code_delta"</span>, &#123; file: <span className="text-amber-300">"App.jsx"</span>, op &#125;);</span>
                  <span className="px-1.5 py-0.2 rounded bg-cyan-600 text-white text-[9px] font-sans shadow-sm flex items-center gap-1">
                    Alex (Editor) ▾
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-zinc-600 select-none">04</span>
                  <span><span className="text-blue-400">await</span> executeOnline(&#123; runtime: <span className="text-amber-300">"node20"</span> &#125;);</span>
                </div>
              </div>

              {/* Integrated Online Execution & Terminal Output */}
              <div className="pt-2 mt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] text-zinc-500">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 shrink-0" /> [Compiler] Execution status: 200 OK (16ms) • Output accepted
                </span>
                <span className="text-zinc-400">Multi-File Sync &bull; Tldraw Active</span>
              </div>
            </div>
          )}

          {/* Project 02: CarCraft Visual Showroom */}
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

        {/* Feature Highlights on Card for CoCode */}
        {isCoCode && (
          <div className="my-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-purple-400/80 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-purple-400" />
              KEY CAPABILITIES
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div className="px-2.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5">
                <span>🔐</span> <span>User Auth</span>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5">
                <span>👥</span> <span>Real-Time Sync</span>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5">
                <span>💻</span> <span>Code Compiler</span>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5">
                <span>📂</span> <span>Multi-File IDE</span>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5">
                <span>🎨</span> <span>Tldraw Board</span>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5">
                <span>💬</span> <span>Real-Time Chat</span>
              </div>
            </div>
          </div>
        )}

        {/* Feature Highlights on Card for CarCraft */}
        {isCarCraft && (
          <div className="my-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-blue-400/80 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-blue-400" />
              KEY CAPABILITIES
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div className="px-2.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5">
                <span>🚗</span> <span>Vehicle Inventory</span>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5">
                <span>🛒</span> <span>Parts E-Commerce</span>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5">
                <span>📅</span> <span>Service Booking</span>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5">
                <span>👤</span> <span>Customer Management</span>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5">
                <span>💰</span> <span>Vehicle Sales</span>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1.5">
                <span>📊</span> <span>Financial Tracking</span>
              </div>
            </div>
          </div>
        )}

        {/* Tech Tags */}
        {isCoCode ? (
          <div className="mt-3 pt-3 border-t border-white/5 space-y-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono text-purple-400 uppercase mr-1">Frontend:</span>
              {["React", "Vite", "CodeMirror", "Tailwind CSS", "Socket.IO Client", "Tldraw"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-purple-500/10 border border-purple-500/20 text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono text-blue-400 uppercase mr-1">Backend &amp; Deploy:</span>
              {["Node.js", "Express.js", "Socket.IO", "JWT Auth", "REST API", "Vercel", "Render"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-blue-500/10 border border-blue-500/20 text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : isCarCraft ? (
          <div className="mt-3 pt-3 border-t border-white/5 space-y-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono text-purple-400 uppercase mr-1">Frontend:</span>
              {["React", "JavaScript", "Axios", "Bootstrap"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-purple-500/10 border border-purple-500/20 text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono text-blue-400 uppercase mr-1">Backend &amp; Deploy:</span>
              {["Python", "Django", "Django REST Framework", "MySQL", "JWT Auth", "REST API", "Vercel", "Render"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-blue-500/10 border border-blue-500/20 text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : (
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
        )}
      </div>

      {/* Bottom Footer Actions */}
      <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5" onClick={(e) => e.stopPropagation()}>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              title="Open Live Application"
              aria-label={`Live demo for ${project.title}`}
            >
              <span>🚀 Live Demo</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/15 hover:border-white/30 font-medium text-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
              title="View GitHub Repository"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <span>💻 GitHub</span>
            </a>
          )}
        </div>

        <span className="text-xs font-mono text-purple-400 group-hover:text-purple-300 group-hover:underline flex items-center gap-1">
          Explore Architecture &amp; Details →
        </span>
      </div>
    </div>
  );
}
