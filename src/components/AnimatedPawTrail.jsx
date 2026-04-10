import { memo } from 'react';

// 4 big paws positioned away from center in curved trail
// Rotation points toes toward the next position
const trailPaws = [
  { x: '5%', y: '90%', rotation: -45, delay: 0 },
  { x: '8%', y: '25%', rotation: -10, delay: 2 },
  { x: '85%', y: '20%', rotation: 170, delay: 4 },
  { x: '88%', y: '85%', rotation: 225, delay: 6 },
];

export default memo(function AnimatedPawTrail() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {trailPaws.map((paw, i) => (
        <div
          key={i}
          className="absolute paw-trail-pulse"
          style={{
            left: paw.x,
            top: paw.y,
            '--trail-delay': `${paw.delay}s`,
          }}
        >
          <span
            className="text-[8rem] opacity-60 inline-block"
            style={{ transform: `rotate(${paw.rotation}deg)` }}
          >
            🐾
          </span>
        </div>
      ))}
    </div>
  );
})
