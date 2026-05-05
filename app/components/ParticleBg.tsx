"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  type: "heart" | "note" | "star";
  delay: number;
}

// Deterministic pseudo-random based on index (avoids SSR hydration mismatch)
function seededRandom(i: number, seed: number): number {
  const x = Math.sin(i * 127.1 + seed * 311.7) * 10000;
  return x - Math.floor(x);
}

export default function ParticleBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  const createParticle = useCallback((index: number): Particle => {
    const types: Particle["type"][] = ["heart", "note", "star"];
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 12 + Math.random() * 24,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: -(0.1 + Math.random() * 0.2),
      opacity: 0.04 + Math.random() * 0.08,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
      type: types[index % 3],
      delay: Math.random() * 10,
    };
  }, []);

  useEffect(() => {
    const count = 18;
    particlesRef.current = Array.from({ length: count }, (_, i) => createParticle(i));

    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLSpanElement>(".particle");
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      particlesRef.current.forEach((p, i) => {
        const el = elements[i];
        if (!el) return;

        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y < -10) {
          p.y = 110;
          p.x = Math.random() * 100;
        }
        if (p.x < -10 || p.x > 110) p.x = Math.random() * 100;

        el.style.transform = `translate(${p.x}vw, ${p.y}vh) rotate(${p.rotation}deg)`;
        el.style.opacity = String(p.opacity * (0.7 + 0.3 * Math.sin(elapsed * 0.5 + p.delay)));
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animRef.current);
  }, [createParticle]);

  const renderSymbol = (type: Particle["type"]) => {
    switch (type) {
      case "heart": return "♥";
      case "note": return "♪";
      case "star": return "✦";
    }
  };

  return (
    <div ref={containerRef} className="particle-container" aria-hidden="true">
      {Array.from({ length: 18 }, (_, i) => (
        <span
          key={i}
          className="particle absolute pointer-events-none select-none"
          style={{
            fontSize: `${12 + seededRandom(i, 1) * 24}px`,
            color: i % 3 === 0 ? "#E8A8B8" : i % 3 === 1 ? "#A8C4E8" : "#B8A8E8",
            transition: "opacity 0.3s",
          }}
        >
          {renderSymbol(particlesRef.current[i]?.type || (["heart", "note", "star"] as const)[i % 3])}
        </span>
      ))}
    </div>
  );
}
