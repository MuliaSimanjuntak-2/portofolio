'use client';

import { useEffect, useRef } from 'react';

interface FloatingShape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  shape: 'circle' | 'square' | 'triangle';
}

const SimpleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Floating shapes configuration
    const shapes: FloatingShape[] = [];
    const shapeCount = 12;
    const shapeTypes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
    
    // Initialize floating shapes
    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 20 + 10,
        opacity: Math.random() * 0.15 + 0.05,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
      });
    }

    // Draw shape function
    const drawShape = (shape: FloatingShape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.fillStyle = `rgba(65, 105, 225, ${shape.opacity})`;
      
      switch (shape.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'square':
          ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.closePath();
          ctx.fill();
          break;
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw shapes
      shapes.forEach((shape) => {
        // Update position
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;
        
        // Wrap around edges
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
        
        // Draw shape
        drawShape(shape);
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-900" />
      
      {/* Secondary gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-royal/5 via-transparent to-transparent" />
      
      {/* Canvas for floating shapes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Minimal decorative elements */}
      <div className="absolute inset-0">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal/30 to-transparent" />
        
        {/* Corner elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-royal/20 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-royal/15 rotate-45 animate-pulse delay-1000" />
        
        {/* Floating dots */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-royal/40 rounded-full animate-bounce delay-500" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-royal/30 rounded-full animate-bounce delay-1500" />
        <div className="absolute top-2/3 left-1/3 w-2.5 h-2.5 bg-royal/25 rounded-full animate-bounce delay-2000" />
      </div>
    </div>
  );
};

export default SimpleBackground;