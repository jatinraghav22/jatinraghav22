import React, { useState, useEffect } from "react";

export function LoadingScreen({ onFinish }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Smooth 900ms timer
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 400);
    }, 950);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-400 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated JR Monogram Box */}
        <div className="relative w-24 h-24 rounded-2xl bg-zinc-950 border border-blue-500/40 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.35)] mb-6 animate-pulse">
          <span className="font-heading text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 tracking-wider">
            JR
          </span>
          <div className="absolute inset-0 rounded-2xl border border-blue-400/20 animate-ping opacity-25" />
        </div>

        {/* Text */}
        <h1 className="font-heading text-xl font-bold tracking-widest text-white uppercase mb-2">
          JATIN RAGHAV
        </h1>

        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
          <span>LOADING EXPERIENCE...</span>
        </div>
      </div>
    </div>
  );
}
