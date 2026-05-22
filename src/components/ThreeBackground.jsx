import { useEffect, useRef } from 'react';

const ThreeBackground = () => {
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

    // 3D Grid State
    let rotation = 0;
    const gridSize = 45;
    const spacing = 100;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.lineWidth = 1;

      // Perspective Projection
      const project = (x, y, z) => {
        const factor = 800 / (z + 1000);
        return {
          x: centerX + x * factor,
          y: centerY + y * factor
        };
      };

      const time = Date.now() * 0.0005;

      // Draw Grid (Warping Plane)
      rotation += 0.001;
      const cosR = Math.cos(rotation * 0.5);
      const sinR = Math.sin(rotation * 0.5);

      for (let x = -gridSize; x <= gridSize; x += 2) {
        ctx.beginPath();
        for (let z = -gridSize; z <= gridSize; z += 2) {
          const wave = Math.sin(time + (x * 0.1) + (z * 0.1)) * 50;
          const rx = x * spacing * cosR - z * spacing * sinR;
          const rz = x * spacing * sinR + z * spacing * cosR;
          const p = project(rx, 400 + wave, rz);
          if (z === -gridSize) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `rgba(59, 130, 246, ${Math.max(0.02, 0.1 * (1 - Math.abs(x)/gridSize))})`;
        ctx.stroke();
      }

      // 3D Particles
      for (let i = 0; i < 60; i++) {
        const nx = Math.sin(time * 0.3 + i * 0.5) * 1200;
        const ny = Math.cos(time * 0.4 + i * 0.8) * 800;
        const nz = Math.sin(time * 0.2 + i) * 1500;
        
        const p = project(nx, ny, nz);
        const dist = Math.sqrt(nx*nx + ny*ny + nz*nz);
        const opacity = Math.max(0, 1 - dist / 2000);
        const size = (800 / (nz + 1000)) * 2.5;
        
        if (nz > -900 && opacity > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.5, size), 0, Math.PI * 2);
          ctx.fillStyle = i % 3 === 0 ? `rgba(249, 115, 22, ${opacity * 0.4})` : `rgba(59, 130, 246, ${opacity * 0.3})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.7 }} />;
};

export default ThreeBackground;
