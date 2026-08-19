import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  angle: number;
  rotationSpeed: number;
  vx: number;
  vy: number;
  opacity: number;
  type: 'grain' | 'dot' | 'fiber';
}

export const SeedCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle count optimized for silky 60fps
    const particleCount = Math.min(Math.floor(width / 35), 45);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 2,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.2 - Math.random() * 0.3,
        opacity: Math.random() * 0.45 + 0.15,
        type: i % 3 === 0 ? 'grain' : i % 3 === 1 ? 'dot' : 'fiber'
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.rotationSpeed;

        // Wrap around boundaries
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        if (p.type === 'grain') {
          // Sesame / Cotton Seed grain ellipse
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.8, p.size * 0.9, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity * 0.6})`;
          ctx.fill();
        } else if (p.type === 'fiber') {
          // Delicate cotton whisper line
          ctx.beginPath();
          ctx.moveTo(-p.size * 1.5, 0);
          ctx.quadraticCurveTo(0, p.size, p.size * 1.5, 0);
          ctx.strokeStyle = `rgba(200, 230, 210, ${p.opacity * 0.5})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          // Micro seed point
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(142, 169, 152, ${p.opacity * 0.5})`;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: 0.8 }}
      aria-hidden="true"
    />
  );
};
