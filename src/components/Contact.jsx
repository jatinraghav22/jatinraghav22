import React from "react";
import { Mail, Phone, ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
            LET&apos;S CONNECT
          </h2>
          <p className="mt-4 text-zinc-400 text-base md:text-lg font-sans">
            I&apos;m currently interested in internship and software development opportunities where I can learn, contribute and grow.
          </p>
        </div>

        {/* Focused Contact Cards Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[100px] pointer-events-none -z-10" />

            <div className="text-center max-w-xl mx-auto mb-10">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                Open for Opportunities
              </h3>
              <p className="text-sm md:text-base text-zinc-400 font-sans leading-relaxed">
                Whether you have an internship opening, project collaboration, or want to discuss full-stack development, feel free to reach out directly through any channel below.
              </p>
            </div>

            {/* Direct Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Direct Email Card */}
              <a
                href="mailto:jatinraghavrrrr@gmail.com"
                className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      DIRECT EMAIL
                    </div>
                    <div className="text-sm font-mono text-zinc-200 group-hover:text-blue-300 font-semibold">
                      jatinraghavrrrr@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Direct Phone / WhatsApp Card */}
              <a
                href="tel:+917895817741"
                className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      PHONE / WHATSAPP
                    </div>
                    <div className="text-sm font-mono text-zinc-200 group-hover:text-emerald-300 font-semibold">
                      (+91) 7895817741
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/jatinraghav22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      GITHUB PROFILE
                    </div>
                    <div className="text-sm font-mono text-zinc-200 group-hover:text-white font-semibold">
                      github.com/jatinraghav22
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/jatin-raghav-a9a060357/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      LINKEDIN NETWORK
                    </div>
                    <div className="text-sm font-mono text-zinc-200 group-hover:text-blue-300 font-semibold">
                      linkedin.com/in/jatin-raghav
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
