import React, { useRef, useEffect } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: undefined, y: undefined });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const mouseMoveHandler = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = event.clientX - rect.left;
      mouse.current.y = event.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', mouseMoveHandler);

    let particles = [];
    const gravity = { x: 0, y: 0.05 };
    const maxLife = 60;

    class Particle {
      constructor(x, y) {
        this.pos = { x: x, y: y };
        this.vel = { x: Math.random() * 3 - 1.5, y: Math.random() * -3 - 1 };
        this.life = maxLife;
        this.size = Math.random() * 5 + 2;
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
        const [h, s, l] = primaryColor.split(' ').map(parseFloat);
        this.color = `hsl(${h}, ${s}%, ${l}%)`;
      }
      
      update() {
        this.vel.x += gravity.x;
        this.vel.y += gravity.y;
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.life--;
      }

      draw(ctx) {
        ctx.globalAlpha = this.life / maxLife;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (mouse.current.x !== undefined) {
        for(let i = 0; i < 3; i++) {
           particles.push(new Particle(mouse.current.x, mouse.current.y));
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }
      
      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />;
};

export default ParticleCanvas;