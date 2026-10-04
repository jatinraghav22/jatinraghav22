import React from "react";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#040407] py-14 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand & Positioning */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-heading font-bold text-xs text-white">
                JR
              </div>
              <span className="font-heading font-bold text-lg text-white">
                JATIN RAGHAV
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-sans max-w-sm">
              B.Tech Computer Science &amp; Engineering Student at ABES Engineering College, Ghaziabad. Aspiring Software Developer.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/jatinraghav22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jatin-raghav-a9a060357/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:jatinraghavrrrr@gmail.com"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all hover:scale-105"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/30 text-blue-300 hover:text-white transition-all hover:scale-105 ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Jatin Raghav. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            Built with React 19, Three.js &amp; GSAP
          </div>
        </div>
      </div>
    </footer>
  );
}
