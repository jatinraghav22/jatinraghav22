import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive =
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest('[role="button"]') ||
        target.classList.contains("interactive-cursor");

      setIsHovering(!!isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Small center dot */}
      <div
        className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? "8px" : "6px",
          height: isHovering ? "8px" : "6px"
        }}
      />
      {/* Outer smoothing ring */}
      <div
        className={`fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ease-out ${
          isHovering
            ? "w-12 h-12 border-blue-400 bg-blue-500/10 scale-125"
            : "w-8 h-8 border-white/30 scale-100"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </>
  );
}
