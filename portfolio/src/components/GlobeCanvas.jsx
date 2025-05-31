// src/components/GlobeCanvas.jsx
import React, { useEffect, useRef } from 'react';
// import '../GlobeCanvas.css'; // Assuming you have a CSS file for styling

const GlobeCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');

  // 🔁 Dynamic canvas size based on screen size
  const setCanvasSize = () => {
    const size = Math.min(window.innerWidth, window.innerHeight);
    canvas.width = size;
    canvas.height = size;
  };

  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);

  let dots = [];
  const radius = canvas.width * 0.4; // 40% of canvas size
  const numDots = 2000;
  const focalLength = 500;

  class Dot {
    constructor(theta, phi) {
      this.theta = theta;
      this.phi = phi;
      this.updatePosition();
    }

    updatePosition() {
      const x = radius * Math.sin(this.phi) * Math.cos(this.theta);
      const y = radius * Math.cos(this.phi);
      const z = radius * Math.sin(this.phi) * Math.sin(this.theta);
      this.x = x;
      this.y = y;
      this.z = z;
    }

    rotateY(angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x = this.x * cos - this.z * sin;
      const z = this.x * sin + this.z * cos;
      this.x = x;
      this.z = z;
    }

    draw() {
      const scale = focalLength / (focalLength + this.z);
      const x2d = this.x * scale + canvas.width / 2;
      const y2d = this.y * scale + canvas.height / 2;
      const brightness = Math.min(255, Math.max(100, 300 - this.z));
      ctx.fillStyle = `rgb(0, ${brightness}, 255)`;
      ctx.beginPath();
      ctx.arc(x2d, y2d, 2 * scale, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  // Generate dots
  for (let i = 0; i < numDots; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    dots.push(new Dot(theta, phi));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let dot of dots) {
      dot.rotateY(0.003);
      dot.draw();
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  let animationFrameId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', setCanvasSize);
  };
}, []);


return (
    <canvas
        ref={canvasRef}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            maxWidth: '100vw',
            maxHeight: '100vh',
            background: '#000',
            zIndex: -1,
        }}
        className="globe-canvas"
    />
);
};

export default GlobeCanvas;
