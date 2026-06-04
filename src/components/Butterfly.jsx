import { useEffect, useRef } from "react";

const Butterfly = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let lastTime = 0;

    // 1. Handle High-DPI (Retina) displays for crisp, non-pixelated rendering
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    
    resize();
    window.addEventListener("resize", resize);

    const img = new Image();
    img.src = "/butterfly.png"; // Ensure this is in your /public folder

    const sparkles = [];
    const MAX_SPARKLES = 150;

    // Butterfly state
    const bf = {
      x: window.innerWidth * 0.8,
      y: window.innerHeight * 0.3,
      baseX: window.innerWidth * 0.8,
      baseY: window.innerHeight * 0.3,
      t: 0, 
      wingPhase: 0,
      size: 45,
    };

    const spawnSparkle = (x, y) => {
      if (sparkles.length >= MAX_SPARKLES) return;
      
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      
      sparkles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5, // Floats upwards slightly
        life: 1.0,
        decay: 0.01 + Math.random() * 0.015,
        size: Math.random() * 3 + 1.5,
        hue: 300 + Math.random() * 60, // Pink to Violet range
        isStar: Math.random() > 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.1,
      });
    };

    const drawStar = (x, y, r, spikes = 4) => {
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const angle = (i * Math.PI) / spikes - Math.PI / 2;
        const radius = i % 2 === 0 ? r : r * 0.4;
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      // Delta Time: Ensures movement is perfectly smooth regardless of FPS (60hz vs 144hz)
      const dt = (timestamp - lastTime) / 16.67; 
      lastTime = timestamp;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // --- BUTTERFLY MOVEMENT (Smooth Sine Waves) ---
      bf.t += 0.008 * dt; 
      bf.wingPhase += 0.15 * dt;

      const wanderX = Math.sin(bf.t * 0.7) * (window.innerWidth * 0.3);
      const wanderY = Math.sin(bf.t * 1.1) * (window.innerHeight * 0.2);
      
      bf.x = bf.baseX + wanderX;
      bf.y = bf.baseY + wanderY;

      // Slowly drift across the screen
      bf.baseX -= 0.3 * dt; 
      if (bf.baseX < -100) bf.baseX = window.innerWidth + 100;

      // --- SPARKLING DUST (No Trail) ---
      if (Math.random() > 0.3) { 
        spawnSparkle(
          bf.x + (Math.random() - 0.5) * 30, 
          bf.y + (Math.random() - 0.5) * 30
        );
      }

      // Additive blending makes the sparkles GLOW like real magic
      ctx.save();
      ctx.globalCompositeOperation = "lighter"; 
      
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        s.vy += 0.03 * dt; // Gentle gravity
        s.vx *= 0.98; 
        s.rotation += s.rotSpeed * dt;
        s.life -= s.decay * dt;

        if (s.life <= 0) {
          sparkles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.globalAlpha = s.life * 0.8;
        
        ctx.shadowBlur = 12;
        ctx.shadowColor = `hsl(${s.hue}, 100%, 75%)`;
        ctx.fillStyle = `hsl(${s.hue}, 100%, 85%)`;

        if (s.isStar) {
          drawStar(0, 0, s.size, 4);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, s.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      ctx.restore(); 

      // --- DRAW BUTTERFLY ---
      if (img.complete && img.naturalWidth > 0) {
        const flapScale = 0.6 + Math.abs(Math.cos(bf.wingPhase)) * 0.4;
        
        ctx.save();
        ctx.translate(bf.x, bf.y);
        ctx.rotate(Math.sin(bf.t * 1.1) * 0.2); // Gentle tilt
        ctx.scale(flapScale, 1); // Wing flap
        
        ctx.shadowBlur = 25;
        ctx.shadowColor = "rgba(255, 107, 138, 0.6)"; // Candy Pink glow
        
        ctx.drawImage(img, -bf.size, -bf.size, bf.size * 2, bf.size * 2);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    img.onload = () => { animationFrameId = requestAnimationFrame(animate); };
    if (img.complete) { animationFrameId = requestAnimationFrame(animate); }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default Butterfly;