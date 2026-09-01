"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Only enable on devices with a fine pointer (mouse), not touch
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Skip on very small viewports
    if (window.innerWidth < 768) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      el.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!active) setActive(true);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(animate);
    };

    const onLeave = () => setActive(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [active]);

  return (
    <div
      ref={ref}
      className={`mouse-spotlight ${active ? "active" : ""} hidden md:block`}
      aria-hidden="true"
    />
  );
}