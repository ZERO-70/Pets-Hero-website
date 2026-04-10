import { useEffect, useMemo, useRef, useState } from 'react';

const PIXEL_PETS = {
  cat: [
    [
      '............',
      '..BB....BB..',
      '.BPPB..BPPB.',
      '.BCCCBBCCCB.',
      'BBCCCCCCCCBB',
      'BCDECCCCEDCB',
      'BCCCCCCCCCCB',
      'BCCCDDDDCCCB',
      '.BCCCCCCCCB.',
      '..BCCCCCCB..',
      '...BBBBBB...',
      '............',
    ],
    [
      '............',
      '..BB....BB..',
      '.BPBB..BBPB.',
      '.BCCCBBCCCB.',
      'BBCCCCCCCCBB',
      'BCDDCCCCDDCB',
      'BCCCCCCCCCCB',
      'BCCCDDDDCCCB',
      '.BCCCCCCCCB.',
      '..BCCCCCCB..',
      '...BBBBBB...',
      '............',
    ],
  ],
  dog: [
    [
      '............',
      '..BB....BB..',
      '.BDDB..BDDB.',
      '.BDDDBBDDDB.',
      'BBCCCCCCCCBB',
      'BCECCCCCCECB',
      'BCCCCCCCCCCB',
      'BCCCDDDDCCCB',
      '.BCCCCCCCCB.',
      '..BCCCCCCB..',
      '...BBBBBB...',
      '............',
    ],
    [
      '............',
      '..BB....BB..',
      '.BDBB..BBDB.',
      '.BDDDBBDDDB.',
      'BBCCCCCCCCBB',
      'BCDDCCCCDDCB',
      'BCCCCCCCCCCB',
      'BCCCDDDDCCCB',
      '.BCCCCCCCCB.',
      '..BCCCCCCB..',
      '...BBBBBB...',
      '............',
    ],
  ],
};

const PET_COLORS = {
  cat: { B: '#1A2836', C: '#FFD7A1', D: '#F7B66B', E: '#2BB1D6', P: '#FF96B8' },
  dog: { B: '#1A2836', C: '#E8C39E', D: '#C98E52', E: '#2BB1D6', P: '#F6B36B' },
};

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [petType, setPetType] = useState('cat');
  const [frameIndex, setFrameIndex] = useState(0);
  const petRef = useRef(null);
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const facingRef = useRef(1);
  const lastFrameSwitchRef = useRef(0);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(media.matches);
    update();

    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event) => {
      targetRef.current = { x: event.clientX + 20, y: event.clientY + 20 };
    };

    let rafId;
    const follow = () => {
      const now = performance.now();
      const current = currentRef.current;
      const target = targetRef.current;
      const dx = target.x - current.x;
      const dy = target.y - current.y;
      const distance = Math.hypot(dx, dy);

      const chaseStrength = Math.max(0.08, Math.min(0.24, distance / 220));

      current.x += dx * chaseStrength;
      current.y += dy * chaseStrength;
      currentRef.current = current;

      if (Math.abs(dx) > 1.5) {
        facingRef.current = dx > 0 ? 1 : -1;
      }

      const runInterval =
        distance > 140 ? 70 : distance > 90 ? 95 : distance > 45 ? 130 : 240;

      if (now - lastFrameSwitchRef.current > runInterval) {
        setFrameIndex((prev) => (prev + 1) % 2);
        lastFrameSwitchRef.current = now;
      }

      const moving = distance > 18;
      const gaitSpeed = distance > 140 ? 0.06 : distance > 90 ? 0.05 : distance > 45 ? 0.04 : 0.025;
      const gait = Math.sin(now * gaitSpeed);
      const hop = moving ? Math.abs(gait) * 3.2 : 0;
      const bobAmplitude = moving ? 1.6 : 0.4;
      const bob = Math.sin(now * 0.02) * bobAmplitude;
      const lean = Math.max(-12, Math.min(12, dx * 0.05));
      const stretchX = moving ? 1 + Math.abs(gait) * 0.12 : 1;
      const stretchY = moving ? 1 - Math.abs(gait) * 0.08 : 1;

      if (petRef.current) {
        petRef.current.style.transform = `translate3d(${current.x - 24}px, ${current.y - 24 + bob - hop}px, 0) scaleX(${facingRef.current * stretchX}) scaleY(${stretchY}) rotate(${lean}deg)`;
      }

      rafId = requestAnimationFrame(follow);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const speciesTimer = setInterval(() => {
      setPetType((prev) => (prev === 'cat' ? 'dog' : 'cat'));
    }, 7000);

    return () => {
      clearInterval(speciesTimer);
    };
  }, [enabled]);

  const pixels = useMemo(() => {
    const sprite = PIXEL_PETS[petType][frameIndex];
    const palette = PET_COLORS[petType];
    const rects = [];

    for (let y = 0; y < sprite.length; y += 1) {
      for (let x = 0; x < sprite[y].length; x += 1) {
        const code = sprite[y][x];
        if (code !== '.') {
          rects.push({ x, y, color: palette[code] ?? '#1A2836' });
        }
      }
    }

    return rects;
  }, [petType, frameIndex]);

  if (!enabled) return null;

  return (
    <div
      ref={petRef}
      className="pointer-events-none fixed left-0 top-0 z-[10000]"
      style={{
        width: 48,
        height: 48,
        willChange: 'transform',
        filter: 'drop-shadow(0 4px 8px rgba(26,40,54,0.28))',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 12 12"
        width="48"
        height="48"
        style={{ imageRendering: 'pixelated' }}
      >
        {pixels.map((px) => (
          <rect key={`${px.x}-${px.y}`} x={px.x} y={px.y} width="1" height="1" fill={px.color} />
        ))}
      </svg>
    </div>
  );
}
