import { Link } from 'react-scroll';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

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

const navLinks = [
  { label: 'Mobile Apps', to: 'mobile-apps' },
  { label: 'Services', to: 'services' },
  { label: 'About Us', to: 'find-us' },
  { label: 'CEO & Founder', to: 'ceo' },
];

const socialLinks = [
  { href: 'https://www.tiktok.com/@petshero', Icon: TikTokIcon, label: 'TikTok' },
  { href: 'https://www.instagram.com/petsherosa', Icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://www.snapchat.com/@petsherosa', Icon: SnapchatIcon, label: 'Snapchat' },
  { href: 'tel:+966539222742', Icon: Phone, label: 'Phone', iconProps: { size: 16 } },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#2BB1D6]/10 via-[#F5F1E6] to-[#F25430]/10 pt-14 pb-6">
      {/* Decorative paw prints at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none opacity-10">
        <div className="flex justify-center gap-8 pb-4">
          {['🐾', '🐕', '🐈', '🐇', '🐾'].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#2BB1D6]/10">
          <div>
            <Link to="hero" smooth duration={500} className="cursor-pointer inline-block mb-4">
              <img src="/assets/logo.png" alt="Pets Hero" className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-[#1A2836]/60 text-sm leading-relaxed max-w-xs">
              Your partner for complete pet care 🐾 — connecting pet owners with services, products,
              and expert veterinary care in Saudi Arabia.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-[#1A2836] mb-4 flex items-center gap-2">
              Quick Links <span>🦴</span>
            </h5>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-[#1A2836]/60 hover:text-[#2BB1D6] transition-colors text-sm cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-[#1A2836] mb-4 flex items-center gap-2">
              Connect With Us <span>❤️</span>
            </h5>
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map(({ href, Icon, label, iconProps }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('tel') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-[#2BB1D6]/10 flex items-center justify-center text-[#2BB1D6] hover:bg-[#2BB1D6] hover:text-white transition-all duration-200"
                >
                  {iconProps ? <Icon {...iconProps} /> : <Icon />}
                </a>
              ))}
            </div>
            <div className="space-y-1">
              <p className="text-[#1A2836]/60 text-sm">📍 Al Taawun Dist. Riyadh, KSA</p>
              <a href="tel:+966539222742" className="text-[#F25430] hover:underline text-sm">
                📞 +966-53-922-2742
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center">
          <p className="text-[#1A2836]/40 text-sm flex items-center justify-center gap-2">
            <span>🐾</span> © 2026 Pets Hero. All Rights Reserved. <span>🐾</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
