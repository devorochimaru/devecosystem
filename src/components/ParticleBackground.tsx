// file: src/components/ParticleBackground.tsx
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const wrapper = canvas.parentElement as HTMLDivElement | null;
    if (!wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to wrapper bounding box (constrains width)
    const resizeCanvas = () => {
      const rect = wrapper.getBoundingClientRect();
      // limit max drawing size to avoid huge canvas on very tall/wide screens
      const maxWidth = Math.min(window.innerWidth, 900);
      const drawWidth = Math.min(rect.width, maxWidth);
      const drawHeight = Math.min(rect.height || window.innerHeight, 600);
      // set backing store size (affects drawing resolution)
      canvas.width = Math.round(drawWidth * devicePixelRatio);
      canvas.height = Math.round(drawHeight * devicePixelRatio);
      canvas.style.width = `${drawWidth}px`;
      canvas.style.height = `${drawHeight}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    resizeCanvas();
    const ro = new ResizeObserver(resizeCanvas);
    ro.observe(wrapper);
    window.addEventListener("resize", resizeCanvas);

    // Create particles sized to canvas drawing size
    const particles: Particle[] = [];
    const particleCount = 40;
    const w = canvas.width / devicePixelRatio;
    const h = canvas.height / devicePixelRatio;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    let animationFrameId = 0;

    const animate = () => {
      const drawW = canvas.width / devicePixelRatio;
      const drawH = canvas.height / devicePixelRatio;
      ctx.clearRect(0, 0, drawW, drawH);

      // Gradient overlay (subtle)
      const gradient = ctx.createRadialGradient(
        drawW / 2,
        drawH / 3,
        0,
        drawW / 2,
        drawH / 3,
        Math.max(drawW, drawH) / 2
      );
      gradient.addColorStop(0, "rgba(255, 30, 39, 0.03)");
      gradient.addColorStop(1, "rgba(255, 30, 39, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, drawW, drawH);

      // Update & draw
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = drawW;
        if (p.x > drawW) p.x = 0;
        if (p.y < 0) p.y = drawH;
        if (p.y > drawH) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 30, 39, ${p.opacity})`;
        ctx.fill();
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255,30,39,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // canvas sits inside wrapper element; CSS (below) centers it and constrains visual size
  return (
    <div ref={undefined} style={{ width: "100%", height: "100%", display: "block" }}>
      <canvas
        ref={canvasRef}
        aria-hidden
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
          pointerEvents: "none",
          opacity: 0.6,
        }}
      />
    </div>
  );
}
