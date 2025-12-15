import { useEffect, useState } from 'react';

export default function MouseGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalizar posición del mouse (0 a 1)
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup: remover el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 transition-all duration-300 pointer-events-none"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
          rgba(59, 130, 246, 0.15) 0%, 
          rgba(249, 115, 22, 0.1) 30%,
          rgba(168, 85, 247, 0.1) 60%,
          transparent 100%)`
      }}
    />
  );
}