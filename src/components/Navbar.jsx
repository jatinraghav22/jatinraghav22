import React, { useState, useEffect } from "react";
import { FileText, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "DSA", href: "#dsa" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EDUCATION", href: "#education" },
    { label: "JOURNEY", href: "#journey" },
    { label: "CONTACT", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2.5 text-white"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-heading font-bold text-sm tracking-wider text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform">
            JR
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-tight text-white group-hover:text-blue-400 transition-colors">
              JATIN RAGHAV
            </span>
            <span className="text-[10px] font-mono text-zinc-400">
              B.Tech CSE Student
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-zinc-950/70 border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600/30 text-blue-300 border border-blue-500/40 shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons & Resume */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/jatinraghav22"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-300 hover:text-white transition-all hover:scale-105"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/jatin-raghav-a9a060357/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-300 hover:text-white transition-all hover:scale-105"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="/resume/Jatin_Raghav_Resume.pdf"
            download="Jatin_Raghav_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105"
          >
            <FileText className="w-3.5 h-3.5" />
            RESUME
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-6 pb-6 pt-2 bg-[#08080C]/95 backdrop-blur-2xl border-b border-white/10 animate-[fadeIn_0.2s_ease-out]">
          <div className="flex flex-col gap-2 pt-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2.5 rounded-xl font-mono text-xs text-zinc-300 hover:bg-white/5 hover:text-blue-400 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-zinc-600">→</span>
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/jatinraghav22"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jatin-raghav-a9a060357/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="/resume/Jatin_Raghav_Resume.pdf"
              download="Jatin_Raghav_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-mono text-xs font-semibold"
            >
              <FileText className="w-4 h-4" />
              RESUME PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
