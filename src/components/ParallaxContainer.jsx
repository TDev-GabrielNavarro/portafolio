    import { useEffect, useState } from 'react';

    export default function ParallaxContainer({ children, strength = 20 }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
        const x = (e.clientX - window.innerWidth / 2) / strength;
        const y = (e.clientY - window.innerHeight / 2) / strength;
        setPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [strength]);

    return (
        <div
        style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: 'transform 0.1s ease-out'
        }}
        >
        {children}
        </div>
    );
    }