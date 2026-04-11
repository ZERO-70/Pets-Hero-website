import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PawPrints from './PawPrints';
import AnimatedPawTrail from './AnimatedPawTrail';
import SectionDivider from './SectionDivider';

const PHRASES = [
  'Simplify Pet care\nAmplify Love ❤️',
  'Expert Vet Consultations 🩺',
  'Premium Pet Products ⭐',
  'Trusted Service Providers 🤝',
];

// Helper to split string into grapheme clusters (handles emojis properly)
const splitGraphemes = (str) => {
  return Array.from(str);
};

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    const graphemes = splitGraphemes(current);

    if (!deleting && charIndex < graphemes.length) {
      const t = setTimeout(() => {
        setDisplayed(graphemes.slice(0, charIndex + 1).join(''));
        setCharIndex((c) => c + 1);
      }, 50);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === graphemes.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(graphemes.slice(0, charIndex - 1).join(''));
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
      className="hero-theme-bg relative flex min-h-screen items-center overflow-hidden pt-24"
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

      {/* Layered wave background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[44%] overflow-hidden opacity-95">
        <svg className="hero-wave hero-wave-back" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#2BB1D6"
            fillOpacity="0.1"
            d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160L1440,320L0,320Z"
          />
        </svg>

        <svg className="hero-wave hero-wave-mid" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#1E94B3"
            fillOpacity="0.22"
            d="M0,256L60,234.7C120,213,240,171,360,149.3C480,128,600,128,720,144C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L0,320Z"
          />
        </svg>

        <svg className="hero-wave hero-wave-front" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#FF6B45"
            fillOpacity="0.32"
            d="M0,288L60,272C120,256,240,224,360,208C480,192,600,192,720,202.7C840,213,960,235,1080,234.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 md:py-16 lg:px-12">
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
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.1,
              }}
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.4 },
              }}
              className="relative mb-6 inline-flex items-center justify-center cursor-pointer"
            >
              {/* Pulsing ring animation behind the logo */}
              <span className="absolute inset-0 rounded-full bg-[#2BB1D6]/20 animate-ping opacity-40" />
              <span className="absolute -inset-2 rounded-full bg-[#2BB1D6]/15 animate-pulse" />
              <span className="absolute -inset-4 rounded-full ring-2 ring-[#2BB1D6]/20 animate-ping opacity-30" />

              <img 
                src="/assets/logo.png" 
                alt="Pets Hero Logo" 
                className="relative h-20 w-auto object-contain drop-shadow-lg sm:h-24 lg:h-28 css-logo-pulse"
              />
            </motion.div>

            <h1 className="mb-6 min-h-[3em] text-4xl font-extrabold leading-[1.15] text-dark sm:text-5xl xl:text-6xl">
              {displayed}
              <span className="ml-0.5 inline-block w-[3px] h-[1em] bg-[#2BB1D6] animate-pulse rounded-full align-middle" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="theme-text-muted mx-auto mb-10 max-w-lg text-base leading-relaxed sm:text-lg lg:mx-0"
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
                    <div className="theme-text-subtle mt-0.5 text-xs">{label}</div>
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

      <SectionDivider variant="heroToServices" />
    </section>
  );
}
