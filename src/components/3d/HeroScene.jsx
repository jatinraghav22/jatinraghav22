import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ParticleField } from "./ParticleField";
import { DeveloperNodes } from "./DeveloperNodes";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function FallbackGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
      <div className="relative flex flex-col items-center gap-4">
        {/* Animated glowing monogram ring */}
        <div className="relative w-36 h-36 rounded-full border border-blue-500/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
          <div className="absolute inset-2 rounded-full border border-purple-500/30 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
          <div className="w-20 h-20 rounded-full bg-blue-500/10 backdrop-blur-xl border border-blue-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <span className="font-mono text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              JR
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300">
            LEARN
          </span>
          <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300">
            BUILD
          </span>
          <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
            SOLVE
          </span>
        </div>
      </div>
    </div>
  );
}

export function HeroScene() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return <FallbackGraphic />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Suspense fallback={<FallbackGraphic />}>
        <Canvas
          camera={{ position: [0, 0, isMobile ? 7 : 5.8], fov: 50 }}
          dpr={[1, isMobile ? 1.5 : 2]}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            alpha: true
          }}
        >
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#60A5FA" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#C084FC" />
          
          <ParticleField count={isMobile ? 140 : 280} radius={isMobile ? 5 : 6.5} />
          <DeveloperNodes />
        </Canvas>
      </Suspense>

      {/* Decorative ambient corner glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none -z-10" />
    </div>
  );
}
