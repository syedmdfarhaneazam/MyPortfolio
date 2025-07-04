import React, { useRef, useEffect } from 'react';

const SpringCanvas = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: undefined, y: undefined, down: false });
  const draggedNode = useRef(null);

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

    const handleMouseDown = (e) => {
      mouse.current.down = true;
      updateMousePos(e);
      for(const node of nodes) {
        const dist = Math.hypot(node.pos.x - mouse.current.x, node.pos.y - mouse.current.y);
        if(dist < node.radius * 2) {
          draggedNode.current = node;
          break;
        }
      }
    };
    const handleMouseUp = () => {
      mouse.current.down = false;
      draggedNode.current = null;
    };
    const handleMouseMove = (e) => {
      updateMousePos(e);
    };
    
    const updateMousePos = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseout', handleMouseUp);
    canvas.addEventListener('mousemove', handleMouseMove);

    const nodes = [];
    const springs = [];
    const damping = 0.95;
    const mass = 1;
    const k = 0.1;
    
    const gridSize = 10;
    const restLen = canvas.width / (gridSize * 1.5);
    const startX = (canvas.width - (gridSize - 1) * restLen) / 2;
    const startY = (canvas.height - (gridSize - 1) * restLen) / 2;

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        nodes.push({
          pos: { x: startX + x * restLen, y: startY + y * restLen },
          vel: { x: 0, y: 0 },
          acc: { x: 0, y: 0 },
          radius: 5,
          pinned: y === 0
        });
      }
    }

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        if (x < gridSize - 1) springs.push({ a: y * gridSize + x, b: y * gridSize + x + 1, restLen: restLen, k: k });
        if (y < gridSize - 1) springs.push({ a: y * gridSize + x, b: (y + 1) * gridSize + x, restLen: restLen, k: k });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if(draggedNode.current) {
        draggedNode.current.pos.x = mouse.current.x;
        draggedNode.current.pos.y = mouse.current.y;
      }
      
      for(const spring of springs) {
        const a = nodes[spring.a];
        const b = nodes[spring.b];
        const dir = { x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y };
        const dist = Math.hypot(dir.x, dir.y);
        const forceMag = (dist - spring.restLen) * spring.k;
        const force = { x: (dir.x/dist) * forceMag, y: (dir.y/dist) * forceMag };
        if(!a.pinned) a.acc = { x: a.acc.x + force.x / mass, y: a.acc.y + force.y / mass };
        if(!b.pinned) b.acc = { x: b.acc.x - force.x / mass, y: b.acc.y - force.y / mass };
      }

      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
      const [h, s, l] = primaryColor.split(' ').map(parseFloat);
      
      ctx.strokeStyle = `hsl(${h}, ${s}%, ${l}%)`;
      ctx.lineWidth = 2;
      for(const spring of springs) {
        const a = nodes[spring.a];
        const b = nodes[spring.b];
        ctx.beginPath();
        ctx.moveTo(a.pos.x, a.pos.y);
        ctx.lineTo(b.pos.x, b.pos.y);
        ctx.stroke();
      }

      ctx.fillStyle = `hsl(${h}, ${s}%, ${l}%)`;
      for(const node of nodes) {
        if(!node.pinned) {
          node.vel.x = (node.vel.x + node.acc.x) * damping;
          node.vel.y = (node.vel.y + node.acc.y) * damping;
          node.pos.x += node.vel.x;
          node.pos.y += node.vel.y;
          node.acc = { x: 0, y: 0 };
        }
        ctx.beginPath();
        ctx.arc(node.pos.x, node.pos.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseout', handleMouseUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
};

export default SpringCanvas;