import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PawPrints from './PawPrints';
import AnimatedPawTrail from './AnimatedPawTrail';

const PHRASES = [
  'Simplify Pet care\nAmplify Love ❤️',
  'Expert Vet Consultations',
  'Premium Pet Products',
  'Trusted Service Providers',
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 50);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 28);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    }
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-light via-white to-cream pt-24"
    >
      {/* Animated gradient orb - continuous primary color loop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full gradient-orb blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#2BB1D6]/25 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2BB1D6]/20 blur-[120px]" />
      </div>

      {/* Animated paw trail - goes around the hero */}
      <AnimatedPawTrail />
      
      {/* Fewer floating paws in background */}
      <PawPrints count={4} />

      {/* Subtle grid pattern with primary color */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(43,177,214,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(43,177,214,.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 md:py-16 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative mb-6 inline-flex items-center gap-2.5 rounded-full bg-white/90 px-5 py-2.5 backdrop-blur-sm ring-2 ring-[#2BB1D6]/40 shadow-lg shadow-[#2BB1D6]/25"
            >
              {/* Pulsing ring animation - solid primary color */}
              <span className="absolute inset-0 rounded-full ring-2 ring-[#2BB1D6]/50 animate-ping opacity-40" />
              <span className="absolute -inset-1 rounded-full ring-1 ring-[#2BB1D6]/30 animate-pulse" />

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F25430] opacity-75" />
                <span className="relative inline-flex h-full w-full rounded-full bg-[#F25430]" />
              </span>
              <span className="relative text-sm font-semibold tracking-widest text-[#2BB1D6] uppercase">
                Pets Hero
              </span>
            </motion.div>

            <h1 className="mb-6 min-h-[3em] text-4xl font-extrabold leading-[1.15] text-dark sm:text-5xl xl:text-6xl">
              {displayed}
              <span className="ml-0.5 inline-block w-[3px] h-[1em] bg-[#2BB1D6] animate-pulse rounded-full align-middle" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-dark/60 sm:text-lg lg:mx-0"
            >
              At Pets Hero, we are dedicated to providing exceptional services and products for
              your beloved pets. Our platform brings together three unique vendors — each
              specializing in different aspects of pet care — ensuring every need of your furry
              friend is met with the highest level of quality and care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:justify-start"
            >
              {[
                { value: '3+', label: 'Vendor Types' },
                { value: '24/7', label: 'Support' },
                { value: '100%', label: 'Trusted Care' },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">{value}</div>
                    <div className="mt-0.5 text-xs text-dark/40">{label}</div>
                  </div>
                  {i < 2 && <div className="hidden h-8 w-px bg-light/10 sm:block" />}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative float-slow translate-x-8">
              {/* Animated glowing orb behind image */}
              <div className="absolute -inset-16 rounded-full gradient-orb blur-[60px]" />
              <img
                src="/assets/front.png"
                alt="Pets Hero App"
                className="relative h-[400px] w-auto object-contain drop-shadow-2xl xl:h-[480px]"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-primary/40"
        >
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-light/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
