import { useState, useEffect } from "react";

export function DsaVisualizer() {
  const [activeTab, setActiveTab] = useState("tree"); // "tree", "graph", "array"
  const [activeNode, setActiveNode] = useState(1);
  const [pointerLeft, setPointerLeft] = useState(0);
  const [pointerRight, setPointerRight] = useState(6);

  // Auto-pulse traversal effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev % 7) + 1);
      setPointerLeft((prev) => (prev + 1) % 4);
      setPointerRight((prev) => 6 - ((prev + 1) % 4));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-2xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl p-5 md:p-6 shadow-2xl relative overflow-hidden">
      {/* Visualizer header & interactive tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-zinc-300 tracking-wider uppercase font-semibold">
            DSA_VISUALIZER.ENGINE
          </span>
        </div>
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/5">
          <button
            onClick={() => setActiveTab("tree")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              activeTab === "tree"
                ? "bg-blue-600/30 text-blue-400 border border-blue-500/40"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Binary Tree
          </button>
          <button
            onClick={() => setActiveTab("graph")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              activeTab === "graph"
                ? "bg-purple-600/30 text-purple-400 border border-purple-500/40"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Graph Nodes
          </button>
          <button
            onClick={() => setActiveTab("array")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              activeTab === "array"
                ? "bg-cyan-600/30 text-cyan-400 border border-cyan-500/40"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Two Pointers
          </button>
        </div>
      </div>

      {/* View 1: Binary Tree */}
      {activeTab === "tree" && (
        <div className="relative h-64 flex flex-col justify-between items-center py-2">
          {/* Level 0: Root */}
          <div className="relative z-10">
            <button
              onClick={() => setActiveNode(1)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 ${
                activeNode === 1
                  ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.8)] scale-110"
                  : "bg-zinc-900 border border-blue-500/30 text-blue-300 hover:border-blue-400"
              }`}
            >
              42
            </button>
          </div>

          {/* Level 1: Left and Right Children */}
          <div className="w-full flex justify-around px-8 relative z-10">
            <button
              onClick={() => setActiveNode(2)}
              className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono text-sm font-semibold transition-all duration-300 ${
                activeNode === 2
                  ? "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.8)] scale-110"
                  : "bg-zinc-900 border border-purple-500/30 text-purple-300 hover:border-purple-400"
              }`}
            >
              21
            </button>
            <button
              onClick={() => setActiveNode(3)}
              className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono text-sm font-semibold transition-all duration-300 ${
                activeNode === 3
                  ? "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.8)] scale-110"
                  : "bg-zinc-900 border border-purple-500/30 text-purple-300 hover:border-purple-400"
              }`}
            >
              68
            </button>
          </div>

          {/* Level 2: Leaves */}
          <div className="w-full flex justify-between px-4 relative z-10">
            {[
              { id: 4, val: 12 },
              { id: 5, val: 29 },
              { id: 6, val: 55 },
              { id: 7, val: 91 }
            ].map((node) => (
              <button
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300 ${
                  activeNode === node.id
                    ? "bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.8)] scale-110"
                    : "bg-zinc-900 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400"
                }`}
              >
                {node.val}
              </button>
            ))}
          </div>

          {/* SVG Connector Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-zinc-700/60 stroke-[1.5]">
            {/* Root to L1 */}
            <line x1="50%" y1="16%" x2="28%" y2="48%" />
            <line x1="50%" y1="16%" x2="72%" y2="48%" />
            {/* L1 to Leaves */}
            <line x1="28%" y1="52%" x2="12%" y2="84%" />
            <line x1="28%" y1="52%" x2="38%" y2="84%" />
            <line x1="72%" y1="52%" x2="62%" y2="84%" />
            <line x1="72%" y1="52%" x2="88%" y2="84%" />
          </svg>
        </div>
      )}

      {/* View 2: Graph Network */}
      {activeTab === "graph" && (
        <div className="relative h-64 w-full flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-purple-500/30 stroke-[1.5]">
            <line x1="20%" y1="30%" x2="50%" y2="20%" strokeDasharray="4 2" />
            <line x1="50%" y1="20%" x2="80%" y2="35%" />
            <line x1="80%" y1="35%" x2="70%" y2="75%" strokeDasharray="4 2" />
            <line x1="70%" y1="75%" x2="30%" y2="80%" />
            <line x1="30%" y1="80%" x2="20%" y2="30%" />
            <line x1="50%" y1="20%" x2="50%" y2="55%" />
            <line x1="50%" y1="55%" x2="70%" y2="75%" />
            <line x1="50%" y1="55%" x2="30%" y2="80%" />
          </svg>

          {/* Vertices */}
          <div className="absolute top-[20%] left-[16%]">
            <span className="w-10 h-10 rounded-full bg-zinc-900 border border-purple-500/50 flex items-center justify-center font-mono text-xs text-purple-300">
              V0
            </span>
          </div>
          <div className="absolute top-[10%] left-[46%]">
            <span className="w-10 h-10 rounded-full bg-purple-600/40 border border-purple-400 flex items-center justify-center font-mono text-xs text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              V1
            </span>
          </div>
          <div className="absolute top-[25%] right-[16%]">
            <span className="w-10 h-10 rounded-full bg-zinc-900 border border-cyan-500/50 flex items-center justify-center font-mono text-xs text-cyan-300">
              V2
            </span>
          </div>
          <div className="absolute top-[48%] left-[46%]">
            <span className="w-11 h-11 rounded-full bg-blue-600/40 border border-blue-400 flex items-center justify-center font-mono text-xs text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse">
              BFS
            </span>
          </div>
          <div className="absolute bottom-[16%] left-[25%]">
            <span className="w-10 h-10 rounded-full bg-zinc-900 border border-emerald-500/50 flex items-center justify-center font-mono text-xs text-emerald-300">
              V3
            </span>
          </div>
          <div className="absolute bottom-[18%] right-[25%]">
            <span className="w-10 h-10 rounded-full bg-zinc-900 border border-amber-500/50 flex items-center justify-center font-mono text-xs text-amber-300">
              V4
            </span>
          </div>
        </div>
      )}

      {/* View 3: Two Pointers Array */}
      {activeTab === "array" && (
        <div className="relative h-64 flex flex-col justify-center gap-6">
          <div className="flex justify-between items-center text-xs font-mono text-zinc-400 px-2">
            <span className="text-cyan-400">Pointer Left: idx {pointerLeft}</span>
            <span className="text-purple-400">Pointer Right: idx {pointerRight}</span>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {[1, 3, 5, 8, 12, 19, 27].map((num, idx) => {
              const isLeft = idx === pointerLeft;
              const isRight = idx === pointerRight;
              return (
                <div
                  key={idx}
                  className={`h-16 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                    isLeft
                      ? "bg-cyan-500/20 border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                      : isRight
                      ? "bg-purple-500/20 border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                      : "bg-zinc-900/80 border border-white/5"
                  }`}
                >
                  <span className="font-mono text-lg font-bold text-white">{num}</span>
                  <span className="text-[10px] font-mono text-zinc-500">[{idx}]</span>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between text-xs font-mono text-zinc-400 px-3">
            <span className="text-cyan-400">▲ left_ptr++</span>
            <span className="text-zinc-500">Target Sum: O(N) Time | O(1) Space</span>
            <span className="text-purple-400">▲ right_ptr--</span>
          </div>
        </div>
      )}

      {/* Live Algorithm State Bar */}
      <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Complexity:</span>
          <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Time: O(log N)
          </span>
          <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
            Space: O(1) Aux
          </span>
        </div>
        <div className="text-zinc-500 text-[11px]">
          Platforms: <span className="text-white">LeetCode</span> · <span className="text-white">CodeChef</span>
        </div>
      </div>
    </div>
  );
}
