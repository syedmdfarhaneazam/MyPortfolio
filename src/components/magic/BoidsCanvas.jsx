import React, { useRef, useEffect } from 'react';

const BoidsCanvas = () => {
  const canvasRef = useRef(null);

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

    const maxSpeed = 3;
    const maxForce = 0.05;
    const perception = 60;
    const sepDist = 25;
    const wSep = 1.5;
    const wAli = 1.0;
    const wCoh = 1.0;

    const boids = [];
    const boidCount = 150;

    class Boid {
      constructor() {
        this.pos = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
        this.vel = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
        this.acc = { x: 0, y: 0 };
      }
      
      wrapEdges() {
        if (this.pos.x > canvas.width) this.pos.x = 0;
        else if (this.pos.x < 0) this.pos.x = canvas.width;
        if (this.pos.y > canvas.height) this.pos.y = 0;
        else if (this.pos.y < 0) this.pos.y = canvas.height;
      }

      applyForce(force) {
        this.acc.x += force.x;
        this.acc.y += force.y;
      }
      
      flock(boids) {
        let separation = { x: 0, y: 0 };
        let alignment = { x: 0, y: 0 };
        let cohesion = { x: 0, y: 0 };
        let sepCount = 0;
        let aliCount = 0;
        let cohCount = 0;

        for (let other of boids) {
          const d = Math.hypot(this.pos.x - other.pos.x, this.pos.y - other.pos.y);

          if (d > 0 && d < perception) {
            // Alignment
            alignment.x += other.vel.x;
            alignment.y += other.vel.y;
            aliCount++;
            
            // Cohesion
            cohesion.x += other.pos.x;
            cohesion.y += other.pos.y;
            cohCount++;
            
            // Separation
            if (d < sepDist) {
              let diff = { x: this.pos.x - other.pos.x, y: this.pos.y - other.pos.y };
              diff.x /= d * d; 
              diff.y /= d * d;
              separation.x += diff.x;
              separation.y += diff.y;
              sepCount++;
            }
          }
        }

        const steer = (force, count) => {
          if (count > 0) {
            force.x /= count;
            force.y /= count;
          }
          let mag = Math.hypot(force.x, force.y);
          if (mag > 0) {
            force.x = (force.x / mag) * maxSpeed;
            force.y = (force.y / mag) * maxSpeed;
            force.x -= this.vel.x;
            force.y -= this.vel.y;
            
            mag = Math.hypot(force.x, force.y);
            if (mag > maxForce) {
              force.x = (force.x / mag) * maxForce;
              force.y = (force.y / mag) * maxForce;
            }
          }
          return force;
        };

        if (aliCount > 0) {
          alignment = steer(alignment, aliCount);
        }
        if (cohCount > 0) {
          cohesion.x /= cohCount;
          cohesion.y /= cohCount;
          cohesion = { x: cohesion.x - this.pos.x, y: cohesion.y - this.pos.y };
          cohesion = steer(cohesion, 1);
        }
        if (sepCount > 0) {
          separation = steer(separation, sepCount);
        }
        
        this.applyForce({ x: separation.x * wSep, y: separation.y * wSep });
        this.applyForce({ x: alignment.x * wAli, y: alignment.y * wAli });
        this.applyForce({ x: cohesion.x * wCoh, y: cohesion.y * wCoh });
      }

      update() {
        this.vel.x += this.acc.x;
        this.vel.y += this.acc.y;
        
        const speed = Math.hypot(this.vel.x, this.vel.y);
        if (speed > maxSpeed) {
          this.vel.x = (this.vel.x / speed) * maxSpeed;
          this.vel.y = (this.vel.y / speed) * maxSpeed;
        }

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.acc = { x: 0, y: 0 };
        this.wrapEdges();
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(Math.atan2(this.vel.y, this.vel.x));
        ctx.beginPath();
        ctx.moveTo(8, 0);
        ctx.lineTo(-4, -4);
        ctx.lineTo(-4, 4);
        ctx.closePath();
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
        ctx.fillStyle = `hsl(${primaryColor})`;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < boidCount; i++) {
      boids.push(new Boid());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let boid of boids) {
        boid.flock(boids);
        boid.update();
        boid.draw(ctx);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default BoidsCanvas;