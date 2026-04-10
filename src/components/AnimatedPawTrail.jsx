import { motion } from 'framer-motion';

// Use emoji paw for perfect shape
const PawIcon = ({ className, rotation = 0 }) => (
  <span 
    className={className}
    style={{ transform: `rotate(${rotation}deg)`, display: 'inline-block' }}
  >
    🐾
  </span>
);

// 4 big paws positioned away from center in curved trail
// Rotation points toes toward the next position
const trailPaws = [
  { x: '5%', y: '90%', rotation: -45, delay: 0 },        // bottom left, going up-right
  { x: '8%', y: '25%', rotation: -10, delay: 2 },        // left side, going up
  { x: '85%', y: '20%', rotation: 170, delay: 4 },       // right top, going down-right
  { x: '88%', y: '85%', rotation: 225, delay: 6 },       // bottom right, going down-left
];

export default function AnimatedPawTrail() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {trailPaws.map((paw, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: paw.x, top: paw.y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: 5,  // Slower animation
            delay: paw.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <PawIcon 
            className="text-[8rem] opacity-60"  // 3x bigger - 128px, lighter
            rotation={paw.rotation}
          />
        </motion.div>
      ))}
    </div>
  );
}
