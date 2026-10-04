import React from "react";
import { educationHistory } from "../data/education";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative bg-[#07070B]/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            ACADEMIC BACKGROUND
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
            EDUCATION
          </h2>
          <p className="mt-4 text-zinc-400 text-base md:text-lg font-sans">
            Formal engineering and secondary education foundations supporting my technical journey.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
          {educationHistory.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 transition-all shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

              {/* Date Indicator on Left for Desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24 font-mono text-xs text-zinc-500">
                {item.period.split("–")[0].trim()}
              </div>

              {/* Education Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-md">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.institution}
                    </h3>
                    <div className="text-sm md:text-base text-zinc-300 font-medium mt-1">
                      {item.degree} — <span className="text-zinc-400">{item.field}</span>
                    </div>
                  </div>

                  {/* Score Pill */}
                  <div className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-400" />
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase block leading-none">
                        {item.scoreType}
                      </span>
                      <span className="font-heading text-sm font-bold text-white">
                        {item.score}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mb-5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{item.location}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[11px] text-zinc-300">
                    {item.status}
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
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
