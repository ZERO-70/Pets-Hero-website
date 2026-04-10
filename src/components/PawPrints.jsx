import { memo } from 'react';

const pawPositions = [
  { left: '5%', top: '20%', delay: 0, rotate: 15 },
  { left: '12%', top: '60%', delay: 2, rotate: -20 },
  { left: '85%', top: '15%', delay: 1, rotate: 25 },
  { left: '90%', top: '70%', delay: 3, rotate: -10 },
  { left: '25%', top: '80%', delay: 1.5, rotate: 30 },
  { left: '75%', top: '45%', delay: 2.5, rotate: -15 },
  { left: '40%', top: '10%', delay: 0.5, rotate: 45 },
  { left: '60%', top: '85%', delay: 3.5, rotate: -30 },
];

export default memo(function PawPrints({ count = 6 }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pawPositions.slice(0, count).map((pos, i) => (
        <div
          key={i}
          className="absolute paw-float"
          style={{
            left: pos.left,
            top: pos.top,
            '--paw-rotate': `${pos.rotate}deg`,
            '--paw-delay': `${pos.delay}s`,
          }}
        >
          <span className="floating-paw text-6xl opacity-70">🐾</span>
        </div>
      ))}
    </div>
  );
})
