"use client";

import { useEffect, useRef } from "react";

const GLYPHS = ["0", "1", "{", "}", "<", ">", "/", "*", "fn", "=>", "#", "AI", "git", "npm", "::"];
const COLORS = ["#8b7bff", "#ff9166", "#f6f4fb"];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  glyph: string;
  color: string;
  size: number;
};

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let particles: Particle[] = [];
    let lastX = -1000;
    let lastY = -1000;

    const onMove = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (dist < 14 && lastX !== -1000) return;
      lastX = e.clientX;
      lastY = e.clientY;
      if (particles.length >= 140) return;

      particles.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 0.7,
        vy: -0.5 - Math.random() * 0.7,
        life: 0,
        maxLife: 55 + Math.random() * 35,
        glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 11 + Math.random() * 7,
      });
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((p) => {
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        const t = p.life / p.maxLife;
        const alpha = Math.max(0, 1 - t);
        const scale = 1 + t * 0.4;
        ctx.globalAlpha = alpha * 0.85;
        ctx.fillStyle = p.color;
        ctx.font = `${p.size * scale}px ui-monospace, "Geist Mono", monospace`;
        ctx.fillText(p.glyph, p.x, p.y);
      });
      ctx.globalAlpha = 1;
      particles = particles.filter((p) => p.life < p.maxLife);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40"
      aria-hidden="true"
    />
  );
}
