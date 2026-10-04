import React from "react";
import { certifications } from "../data/certifications";
import { Award, CheckCircle2, BookOpen } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 relative bg-[#07070B]/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            STRUCTURED LEARNING
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
            CERTIFICATIONS &amp; LEARNING
          </h2>
          <p className="mt-4 text-zinc-400 text-base md:text-lg font-sans">
            Curated coursework completed to supplement academic studies with industry-standard development paradigms.
          </p>
        </div>

        {/* Certificates Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 md:p-8 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-400">
                    Verified Course
                  </span>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-medium mb-1">
                  {cert.issuer}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-md inline-block mb-4 border border-purple-500/20">
                  {cert.badge}
                </div>

                <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">
                  {cert.summary}
                </p>
              </div>

              {/* Skills covered in this certificate */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-[11px] font-mono text-zinc-500 mb-2">Core Focus:</div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
