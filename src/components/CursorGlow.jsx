import { useEffect, useState, useRef } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setIsMoving(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsMoving(false), 100);

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos(posRef.current);
      });
    };

    window.addEventListener('mousemove', move, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Main glow - smooth transform, no transition lag */}
      <div
        className="pointer-events-none fixed z-[9998] hidden lg:block"
        style={{
          transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
          width: 500,
          height: 500,
          background:
            'radial-gradient(circle, rgba(43,177,214,0.08) 0%, rgba(242,84,48,0.05) 35%, transparent 65%)',
          borderRadius: '50%',
          willChange: 'transform',
        }}
      />

      {/* Inner bright core */}
      <div
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          transform: `translate(${pos.x - 100}px, ${pos.y - 100}px)`,
          width: 200,
          height: 200,
          background:
            'radial-gradient(circle, rgba(43,177,214,0.15) 0%, rgba(242,84,48,0.08) 45%, transparent 70%)',
          borderRadius: '50%',
          willChange: 'transform',
        }}
      />

      {/* Pulsing ring */}
      <div
        className={`pointer-events-none fixed z-[9997] hidden lg:block transition-all duration-300 ${
          isMoving ? 'scale-150 opacity-60' : 'scale-100 opacity-100'
        }`}
        style={{
          transform: `translate(${pos.x - 30}px, ${pos.y - 30}px) ${isMoving ? 'scale(1.5)' : 'scale(1)'}`,
          width: 60,
          height: 60,
          border: '2px solid rgba(43,177,214,0.4)',
          borderRadius: '50%',
          willChange: 'transform, opacity',
          animation: isMoving ? 'none' : 'pulse-ring 2s ease-in-out infinite',
        }}
      />

      {/* Accent dot */}
      <div
        className="pointer-events-none fixed z-[10000] hidden lg:block"
        style={{
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
          width: 8,
          height: 8,
          background: 'linear-gradient(135deg, #2BB1D6, #F25430)',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(43,177,214,0.5)',
          willChange: 'transform',
        }}
      />

      <style>{`
        @keyframes pulse-ring {
          0%, 100% { transform: translate(${pos.x - 30}px, ${pos.y - 30}px) scale(1); opacity: 0.4; }
          50% { transform: translate(${pos.x - 30}px, ${pos.y - 30}px) scale(1.3); opacity: 0.2; }
        }
      `}</style>
    </>
  );
}
