import React, { useRef, useEffect } from 'react';

const BezierCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const points = [];
    const numPoints = 5;
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: Math.random() * 50 + 20,
      });
    }

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      points.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x - p.radius < 0 || p.x + p.radius > canvas.width) p.vx *= -1;
        if (p.y - p.radius < 0 || p.y + p.radius > canvas.height) p.vy *= -1;
      });

      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
      const [h, s, l] = primaryColor.split(' ').map(parseFloat);
      
      ctx.fillStyle = `hsl(${h}, ${s}%, ${l}%)`;
      ctx.beginPath();
      
      let p1 = points[0];
      let p2 = points[1];
      
      ctx.moveTo(p1.x, p1.y);

      for (let i = 1; i < numPoints - 1; i++) {
        let p_mid = {
          x: (points[i].x + points[i+1].x) / 2,
          y: (points[i].y + points[i+1].y) / 2
        };
        ctx.quadraticCurveTo(points[i].x, points[i].y, p_mid.x, p_mid.y);
      }
      
      let last_mid = {
        x: (points[numPoints-1].x + points[0].x) / 2,
        y: (points[numPoints-1].y + points[0].y) / 2
      };
      ctx.quadraticCurveTo(points[numPoints-1].x, points[numPoints-1].y, last_mid.x, last_mid.y);
      ctx.quadraticCurveTo(points[0].x, points[0].y, (points[0].x + points[1].x)/2, (points[0].y + points[1].y)/2);

      ctx.closePath();
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };
    animate(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default BezierCanvas;