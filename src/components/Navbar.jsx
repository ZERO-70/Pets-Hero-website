import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Mobile Apps', to: 'mobile-apps' },
  { label: 'Services', to: 'services' },
  { label: 'About Us', to: 'find-us' },
  { label: 'CEO & Founder', to: 'ceo' },
];

const TikTokIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

const SnapchatIcon = () => (
  <svg viewBox="0 0 496 512" fill="currentColor" className="w-4 h-4">
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2-1.4 1.9-2.5 9.8-4.3 15.9-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9-17.6 0-23.7 4-37.4 13.7-14.5 10.3-28.4 19.1-49.2 18.2-21 1.6-38.6-11.2-48.5-18.2-13.8-9.7-19.8-13.7-37.4-13.7-12.5 0-20.4 3.1-25.8 3.1-5.4 0-7.5-3.3-8.3-6-1.8-6.1-2.9-14.1-4.3-16-13.8-2.1-44.8-7.5-45.5-21.4-.2-3.6 2.3-6.8 5.9-7.4 46.3-7.6 67.1-55.1 68-57.1 0-.1.1-.2.2-.3 2.5-5 3-9.2 1.6-12.5-3.4-7.9-17.9-10.7-24-13.2-15.8-6.2-18-13.4-17-18.3 1.6-8.5 14.4-13.8 21.9-10.3 5.9 2.8 11.2 4.2 15.7 4.2 3.3 0 5.5-.8 6.6-1.4-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1 34.7 0 68 17.8 84.3 54.3 8.5 19.1 5.2 53.1 3.8 77.1 1.1.6 2.9 1.3 5.7 1.4 4.3-.2 9.2-1.6 14.7-4.2 4-1.9 9.6-1.6 13.6 0 6.3 2.3 10.3 6.8 10.4 11.9.1 6.5-5.7 12.1-17.2 16.6-1.4.6-3.1 1.1-4.9 1.7-6.5 2.1-16.4 5.2-19 11.5-1.4 3.3-.8 7.5 1.6 12.5.1.1.1.2.2.3.9 2 21.7 49.5 68 57.1 4 1 7.1 5.5 4.9 10.8z" />
  </svg>
);

const socialLinks = [
  { href: 'https://www.tiktok.com/@petshero', Icon: TikTokIcon, label: 'TikTok' },
  { href: 'https://www.instagram.com/petsherosa', Icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://www.snapchat.com/@petsherosa', Icon: SnapchatIcon, label: 'Snapchat' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const lastScrollY = useRef(0);
  const gradientStartTime = useRef(Date.now());
  const isDark = theme === 'dark';

  const navShellClass = isDark
    ? 'bg-gradient-to-r from-[#1A2836]/95 via-[#243442]/95 via-[#2BB1D6]/75 via-[#243442]/95 to-[#1A2836]/95 border-b border-[#F5F1E6]/10'
    : 'bg-gradient-to-r from-[#2BB1D6]/90 via-[#1E94B3]/90 via-[#F25430]/80 via-[#1E94B3]/90 to-[#2BB1D6]/90 border-b border-white/10';

  const mobileShellClass = isDark
    ? 'bg-gradient-to-r from-[#1A2836]/97 via-[#243442]/97 via-[#2BB1D6]/80 via-[#243442]/97 to-[#1A2836]/97 border-t border-[#F5F1E6]/20'
    : 'bg-gradient-to-r from-[#2BB1D6]/95 via-[#1E94B3]/95 via-[#F25430]/85 via-[#1E94B3]/95 to-[#2BB1D6]/95 border-t border-white/20';

  useEffect(() => {
    let rafId = null;
    const directionThreshold = 8;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY.current;

        // Always show at top
        if (currentScrollY < 50) {
          setVisible(true);
          setScrolled(false);
        } else {
          setScrolled(true);

          if (scrollDelta > directionThreshold) {
            setVisible(false);
          } else if (scrollDelta < -directionThreshold) {
            setVisible(true);
          }
        }

        lastScrollY.current = currentScrollY;

        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Track active section using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['hero', 'mobile-apps', 'services', 'find-us', 'ceo'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } backdrop-blur-xl animate-gradient-flow ${navShellClass}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5 sm:px-10 lg:px-12 lg:py-3">
        <Link to="hero" smooth duration={500} className="cursor-pointer flex items-center gap-3">
          <div className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2BB1D6]/90 via-[#1E94B3]/85 to-[#F25430]/90 px-3 py-1.5 backdrop-blur-sm ring-2 ring-white/30 shadow-lg">
            <span className="absolute inset-0 rounded-full ring-2 ring-white/40 animate-ping opacity-20" />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-full w-full rounded-full bg-white" />
            </span>
            <span className="relative text-xs font-bold tracking-[0.12em] uppercase text-white">
              Pets Hero
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1 lg:gap-2 relative">
          {navLinks.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className="relative cursor-pointer text-sm font-medium text-white/90 transition-all duration-200 hover:text-white hover:bg-[#F25430] px-4 py-2 rounded-full z-10 inline-block"
              >
                {link.label}
                {activeSection === link.to && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-[#F25430] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
          {/* Small pixelated moon - dark mode only */}
          <div className="relative mr-1">
            <div className="pixel-moon moon-float-fast" style={{ transform: 'scale(0.4)' }}>
              <div className="pixel-moon-glow absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'scale(0.4)' }} />
            </div>
          </div>
          
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-200 hover:bg-[#F25430]"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {socialLinks.map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-200 hover:bg-[#F25430] hover:text-white"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            className="text-white p-1.5 rounded-full bg-white/20 transition-colors hover:bg-[#F25430]"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="text-white p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Floating animals at navbar bottom */}
      <div className="absolute -bottom-2 left-0 right-0 overflow-hidden pointer-events-none opacity-15">
        <div className="flex justify-center gap-8">
          {['🐾', '🐕', '🐈', '🐇', '🐾'].map((emoji, i) => (
            <span
              key={i}
              className="text-7xl emoji-bounce"
              style={{ '--bounce-delay': `${i * 0.2}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden backdrop-blur-xl animate-gradient-flow ${mobileShellClass}`}
            style={{ animationDelay: `${-((Date.now() - gradientStartTime.current) % 30000)}ms` }}
          >
            <div className="px-4 pb-4 pt-2 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="block text-white/90 hover:text-white hover:bg-[#F25430] transition-all duration-200 text-base font-medium cursor-pointer py-2 px-3 rounded-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map(({ href, Icon, label }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 400 }}
                    whileHover={{ y: -3, scale: 1.2, rotate: 10 }}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-[#F25430] hover:text-white transition-all duration-200"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
