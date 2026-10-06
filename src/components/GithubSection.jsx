import React from "react";
import { ExternalLink, GitFork, Star, Code2, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./Icons";

export function GithubSection() {
  const featuredRepos = [
    {
      name: "CarCraft",
      desc: "Full-stack automotive inventory & dealership suite with React and Django REST.",
      lang: "Python / React",
      link: "https://github.com/jatinraghav22/CarCraft"
    },
    {
      name: "CoCode",
      desc: "Unified Real-Time Collaborative Coding Platform with multi-file workspace, compiler, Tldraw whiteboard & chat.",
      lang: "React / Node / Socket.IO",
      link: "https://github.com/jatinraghav22/CoCode"
    }
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#07070B]/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-xs uppercase tracking-widest mb-4">
          <GithubIcon className="w-3.5 h-3.5" />
          OPEN SOURCE &amp; REPOSITORIES
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white uppercase mb-4">
          CODE &amp; PROJECTS
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-zinc-400 font-sans leading-relaxed mb-10">
          I enjoy learning by building. Explore my repositories and development projects on GitHub.
        </p>

        {/* Real Repositories Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
          {featuredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-blue-400 font-semibold flex items-center gap-1.5">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    {repo.name}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {repo.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{repo.lang}</span>
                <span className="text-zinc-400">Public Repo</span>
              </div>
            </a>
          ))}
        </div>

        {/* View GitHub Profile Button */}
        <a
          href="https://github.com/jatinraghav22"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono text-xs font-semibold tracking-wider uppercase border border-white/10 hover:border-white/30 transition-all shadow-lg hover:scale-105"
        >
          <GithubIcon className="w-4 h-4" />
          VIEW GITHUB PROFILE
        </a>
      </div>
    </section>
  );
}
