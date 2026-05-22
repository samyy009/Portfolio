import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Mouse interaction state
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Drifting particles
    const particles = Array.from({ length: 140 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 1.2,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      originalVx: (Math.random() - 0.5) * 0.3,
      originalVy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.2,
      color: i % 2 === 0 ? '249,115,22' : '255,255,255',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Stronger Magnetic Repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        const radius = 180; // Repulsion radius
        
        if (dist < radius) {
          const force = (radius - dist) / radius;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 0.8;
          p.vy -= Math.sin(angle) * force * 0.8;
        } else {
          // Soft return to drift
          p.vx *= 0.98;
          p.vy *= 0.98;
          p.vx += p.originalVx * 0.05;
          p.vy += p.originalVy * 0.05;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around with soft bounce
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p.color},${p.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Luminous Thread Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          
          if (dist < 120) {
            const threadOpacity = (1 - dist / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Create a gradient thread
            const grd = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grd.addColorStop(0, `rgba(${p1.color},${threadOpacity})`);
            grd.addColorStop(1, `rgba(${p2.color},${threadOpacity})`);
            
            ctx.strokeStyle = grd;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.55 }} />;
};

export default ParticleBackground;
