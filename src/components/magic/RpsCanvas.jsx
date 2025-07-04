import React, { useRef, useEffect } from 'react';

const RpsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const Types = { ROCK: 0, PAPER: 1, SCISSORS: 2 };
    const typeColors = ['#ff4757', '#487eb0', '#2ed573']; // Red, Blue, Green

    let agents = [];
    const numAgentsPerType = 50;
    const radius = 6;
    const step = 1.5;
    const turnProb = 0.05;

    let worldWidth, worldHeight, offsetX, offsetY;
    let grid, cellSize;
    
    const resizeCanvas = () => {
        const parent = canvas.parentElement;
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        
        worldWidth = canvas.width * 0.8;
        worldHeight = canvas.height * 0.7;
        offsetX = (canvas.width - worldWidth) / 2;
        offsetY = (canvas.height - worldHeight) / 2;
        
        cellSize = radius * 2;
        grid = new SpatialHash(worldWidth, worldHeight, cellSize);
        
        if (agents.length === 0) {
            for (let i = 0; i < numAgentsPerType * 3; i++) {
                const type = Math.floor(i / numAgentsPerType);
                agents.push(createAgent(type));
            }
        } else {
             agents.forEach(agent => {
                agent.x = Math.random() * worldWidth;
                agent.y = Math.random() * worldHeight;
             });
        }
    };

    class SpatialHash {
      constructor(width, height, cellSize) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.cols = Math.ceil(width / cellSize);
        this.rows = Math.ceil(height / cellSize);
        this.grid = new Map();
      }

      getKey(x, y) {
        const col = Math.floor(x / this.cellSize);
        const row = Math.floor(y / this.cellSize);
        return `${col},${row}`;
      }

      insert(agent) {
        const key = this.getKey(agent.x, agent.y);
        if (!this.grid.has(key)) {
          this.grid.set(key, []);
        }
        this.grid.get(key).push(agent);
      }

      query(agent) {
        const neighbors = [];
        const agentCol = Math.floor(agent.x / this.cellSize);
        const agentRow = Math.floor(agent.y / this.cellSize);

        for (let row = agentRow - 1; row <= agentRow + 1; row++) {
          for (let col = agentCol - 1; col <= agentCol + 1; col++) {
            const key = `${col},${row}`;
            if (this.grid.has(key)) {
              neighbors.push(...this.grid.get(key));
            }
          }
        }
        return neighbors;
      }

      clear() {
        this.grid.clear();
      }
    }
    
    function createAgent(type) {
      return {
        type: type,
        x: Math.random() * worldWidth,
        y: Math.random() * worldHeight,
        angle: Math.random() * 2 * Math.PI,
      };
    }

    function update() {
      grid.clear();
      agents.forEach(agent => grid.insert(agent));

      agents.forEach(agent => {
        if (Math.random() < turnProb) {
          agent.angle += (Math.random() - 0.5) * Math.PI;
        }
        agent.x += Math.cos(agent.angle) * step;
        agent.y += Math.sin(agent.angle) * step;

        agent.x = (agent.x + worldWidth) % worldWidth;
        agent.y = (agent.y + worldHeight) % worldHeight;

        const neighbors = grid.query(agent);
        for (const other of neighbors) {
          if (agent === other) continue;
          const dx = agent.x - other.x;
          const dy = agent.y - other.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < (radius * 2) ** 2) {
            const winner = (agent.type - other.type + 3) % 3;
            if (winner === 1) { // agent wins
              other.type = agent.type;
            } else if (winner === 2) { // other wins
              agent.type = other.type;
            }
          }
        }
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'hsl(var(--primary) / 0.3)';
      ctx.strokeRect(offsetX, offsetY, worldWidth, worldHeight);

      agents.forEach(agent => {
        ctx.fillStyle = typeColors[agent.type];
        ctx.beginPath();
        ctx.arc(offsetX + agent.x, offsetY + agent.y, radius, 0, 2 * Math.PI);
        ctx.fill();
      });

      const counts = agents.reduce((acc, agent) => {
        acc[agent.type]++;
        return acc;
      }, [0, 0, 0]);
      
      ctx.fillStyle = typeColors[Types.ROCK];
      ctx.fillText(`Rock: ${counts[Types.ROCK]}`, 10, 20);
      ctx.fillStyle = typeColors[Types.PAPER];
      ctx.fillText(`Paper: ${counts[Types.PAPER]}`, 10, 40);
      ctx.fillStyle = typeColors[Types.SCISSORS];
      ctx.fillText(`Scissors: ${counts[Types.SCISSORS]}`, 10, 60);
    }
    
    function animate() {
      update();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default RpsCanvas;