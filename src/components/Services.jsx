import { motion } from 'framer-motion';
import { Scissors, ShoppingBag, Stethoscope, Heart } from 'lucide-react';
import PawPrints from './PawPrints';
import SectionDivider from './SectionDivider';
import { useLang } from '../context/LanguageContext';

const ICONS = [Scissors, ShoppingBag, Stethoscope];
const EMOJIS = ['🐕', '🐈', '🐇'];
const ICON_STYLES = [
  { iconBg: 'bg-primary/15', iconColor: 'text-primary', accentColor: 'border-primary/20 hover:border-primary/50', glowColor: 'group-hover:shadow-primary/20 group-hover:shadow-lg', earColor: '#2BB1D6' },
  { iconBg: 'bg-accent/15', iconColor: 'text-accent', accentColor: 'border-accent/20 hover:border-accent/40', featured: true, earColor: '#F25430' },
  { iconBg: 'bg-dark/10', iconColor: 'text-dark', accentColor: 'border-dark/10 hover:border-dark/25', earColor: '#1A2836' },
];

const FEATURE_EMOJIS = [
  ['✂️', '🏠', '🤗', '🎓', '🚗'],
  ['⭐', '📱', '🚀', '🛍️'],
  ['💻', '🏥', '📹', '👨‍⚕️'],
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

export default function Services() {
  const { t, isRTL } = useLang();

  return (
    <section id="services" dir={isRTL ? 'rtl' : 'ltr'} className="services-theme-bg relative py-24">
      <PawPrints count={4} />

      {/* Pixelated moons */}
      <div className="pointer-events-none absolute top-16 right-12 lg:top-20 lg:right-24">
        <div className="pixel-moon moon-float-medium relative">
          <div className="pixel-moon-glow absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute top-6 left-6 pixel-star" style={{ animationDelay: '0.3s' }} />
      </div>
      <div className="pointer-events-none absolute bottom-40 left-10 lg:bottom-48 lg:left-20">
        <div className="pixel-moon moon-float-slow relative" style={{ transform: 'scale(0.6)' }}>
          <div className="pixel-moon-glow absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'scale(0.6)' }} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-[#2BB1D6] uppercase">
            {t.services.badge}
          </span>
          <h2 className="theme-text-strong mb-5 text-4xl font-bold sm:text-5xl">{t.services.heading}</h2>
          <p className="theme-text-muted mx-auto max-w-xl text-lg">{t.services.subheading}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {t.services.cards.map((card, idx) => {
            const Icon = ICONS[idx];
            const emoji = EMOJIS[idx];
            const style = ICON_STYLES[idx];
            const featureEmojis = FEATURE_EMOJIS[idx];

            return (
              <motion.div
                key={`service-card-${idx}`}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className={`group card-with-ears flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-7 ${style.accentColor} ${style.glowColor || ''} ${style.featured ? 'ring-2 ring-accent/30' : ''}`}
                style={{ '--ear-color': style.earColor }}
              >
                {style.featured && (
                  <motion.div
                    className="absolute -top-3 right-5 rounded-full bg-gradient-to-r from-accent to-accent-light px-4 py-1 text-[11px] font-bold text-white shadow-md shadow-accent/20"
                    animate={{ rotate: [0, -3, 3, -2, 2, 0], scale: [1, 1.05, 0.98, 1.02, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                    whileHover={{ rotate: [0, -8, 8, -5, 5, 0], scale: 1.1, transition: { duration: 0.4, repeat: 0 } }}
                  >
                    {card.popularLabel}
                  </motion.div>
                )}

                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 shimmer" />

                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${style.iconBg} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <span className="text-2xl mr-1">{emoji}</span>
                  <Icon size={24} className={style.iconColor} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-dark flex items-center gap-2">{card.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-dark/55">{card.description}</p>

                <div className="mt-auto">
                  <ul className="space-y-2.5">
                    {card.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-dark/65"
                        whileHover={{ x: isRTL ? -4 : 4 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <span className="text-xs">{featureEmojis[i]}</span>
                        <Heart size={10} className="shrink-0 text-accent/60" fill="currentColor" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <SectionDivider variant="servicesToMobile" />
    </section>
  );
}
