import { motion } from 'framer-motion';
import { Scissors, ShoppingBag, Stethoscope, Heart } from 'lucide-react';
import PawPrints from './PawPrints';
import SectionDivider from './SectionDivider';

const services = [
  {
    icon: Scissors,
    emoji: '🐕',
    title: 'Service Providers',
    description:
      'Care for your pet, including grooming, boarding, sitting, training, and transportation — all available at your fingertips.',
    features: ['Grooming', 'Boarding', 'Sitting', 'Training', 'Transportation'],
    featureEmojis: ['✂️', '🏠', '🤗', '🎓', '🚗'],
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    accentColor: 'border-primary/20 hover:border-primary/50',
    glowColor: 'group-hover:shadow-primary/20 group-hover:shadow-lg',
  },
  {
    icon: ShoppingBag,
    emoji: '🐈',
    title: 'Product Vendors',
    description:
      "Premium pet products for all your pet's needs, with easy ordering and doorstep delivery.",
    features: ['Premium Quality', 'Easy Ordering', 'Fast Delivery', 'Wide Selection'],
    featureEmojis: ['⭐', '📱', '🚀', '🛍️'],
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
    accentColor: 'border-accent/20 hover:border-accent/40',
    featured: true,
  },
  {
    icon: Stethoscope,
    emoji: '🐇',
    title: 'Doctors',
    description:
      'Expert online and onsite veterinary consultations to keep your pet healthy and well.',
    features: ['Online Consultations', 'Onsite Visits', 'Video Calls', 'Trusted Vets'],
    featureEmojis: ['💻', '🏥', '📹', '👨‍⚕️'],
    iconBg: 'bg-dark/10',
    iconColor: 'text-dark',
    accentColor: 'border-dark/10 hover:border-dark/25',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="services-theme-bg relative py-24">
      {/* Floating paw prints */}
      <PawPrints count={4} />
      
      {/* Pixelated moons - dark mode only */}
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
            <span>🐾</span> Hero Pets Vendors <span>🐾</span>
          </span>
          <h2 className="theme-text-strong mb-5 text-4xl font-bold sm:text-5xl">Our Services 🦴</h2>
          <p className="theme-text-muted mx-auto max-w-xl text-lg">
            Connect with the best pet care professionals, products, and doctors — all in one platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {services.map(({ icon: Icon, emoji, title, description, features, featureEmojis, iconBg, iconColor, accentColor, glowColor, featured }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className={`group card-with-ears flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-7 ${accentColor} ${glowColor || ''} ${
                featured ? 'ring-2 ring-accent/30' : ''
              }`}
              style={{ '--ear-color': featured ? '#F25430' : (title === 'Doctors' ? '#1A2836' : '#2BB1D6') }}
            >
              {featured && (
                <motion.div
                  className="absolute -top-3 right-5 rounded-full bg-gradient-to-r from-accent to-accent-light px-4 py-1 text-[11px] font-bold text-white shadow-md shadow-accent/20"
                  animate={{
                    rotate: [0, -3, 3, -2, 2, 0],
                    scale: [1, 1.05, 0.98, 1.02, 1],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: 'easeInOut',
                  }}
                  whileHover={{
                    rotate: [0, -8, 8, -5, 5, 0],
                    scale: 1.1,
                    transition: { duration: 0.4, repeat: 0 },
                  }}
                >
                  ⭐ Popular
                </motion.div>
              )}

              {/* Shimmer overlay on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 shimmer" />

              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <span className="text-2xl mr-1">{emoji}</span>
                <Icon size={24} className={iconColor} />
              </div>

              <h3 className="mb-2 text-xl font-bold text-dark flex items-center gap-2">
                {title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-dark/55">{description}</p>

              <div className="mt-auto">
                <ul className="space-y-2.5">
                  {features.map((feature, i) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center gap-2.5 text-sm text-dark/65"
                      whileHover={{ x: 4 }}
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
          ))}
        </motion.div>
      </div>

      <SectionDivider variant="servicesToMobile" />
    </section>
  );
}
