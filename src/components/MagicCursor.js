import { useEffect, useRef } from 'react';

export default function MagicCursor() {
  const cursorRef = useRef([]);
  const NUM_TRAILS = 20;

  useEffect(() => {
    const coords = { x: 0, y: 0 };

    // Create trail elements
    for (let i = 0; i < NUM_TRAILS; i++) {
      const dot = document.createElement('div');
      dot.className = 'cursor-dot';
      dot.style.opacity = (1 - i / NUM_TRAILS).toFixed(2);
      dot.style.background = `radial-gradient(circle, rgba(255,255,255,${1 - i / NUM_TRAILS}) 0%, rgba(173,216,230,0.2) 80%)`;
      document.body.appendChild(dot);
      cursorRef.current.push({ element: dot, x: 0, y: 0 });
    }

    const animate = () => {
      let { x, y } = coords;
      cursorRef.current.forEach((dot, index) => {
        dot.x += (x - dot.x) * 0.15;
        dot.y += (y - dot.y) * 0.15;
        dot.element.style.transform = `translate(${dot.x}px, ${dot.y}px) rotate(${index * 10}deg)`;
      });
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('mousemove', e => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    return () => {
      cursorRef.current.forEach(dot => document.body.removeChild(dot.element));
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return null; // no visible JSX, just effect
}
