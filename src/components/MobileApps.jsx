import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell, ShoppingBag, Scissors, UserCheck, Stethoscope, Users,
  Store, Wallet, Heart, Sparkles
} from 'lucide-react';
import PawPrints from './PawPrints';
import SectionDivider from './SectionDivider';

const AndroidIcon = () => (
  <svg viewBox="0 0 576 512" fill="currentColor" className="w-4 h-4">
    <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const tabs = [
  {
    id: 'customer',
    label: 'Customer App',
    playLink: 'https://play.google.com/store/apps/details?id=com.petshero.customer',
    appStoreLink: 'https://apps.apple.com/us/app/pets-hero/id6740918153',
    mockup: '/assets/customer-app-new.png',
    features: [
      {
        icon: Bell,
        emoji: '🔔',
        title: 'Smart Notifications',
        desc: 'Pet order notifications, upcoming vaccinations, reminders, birthday and food alerts.',
      },
      {
        icon: ShoppingBag,
        emoji: '🛍️',
        title: 'Store',
        desc: 'Shop premium pet supplies at unbeatable prices, with easy checkout and delivery.',
      },
      {
        icon: Scissors,
        emoji: '✂️',
        title: 'Pet Services',
        desc: 'Book professional grooming, boarding, sitting, and training services on demand.',
      },
    ],
  },
  {
    id: 'vendor',
    label: 'Vendor App',
    playLink: 'https://play.google.com/store/apps/details?id=com.petshero.vendor',
    appStoreLink: 'https://apps.apple.com/us/app/pets-hero-pro/id6740934646',
    mockup: '/assets/vendor-app.png',
    features: [
      {
        icon: Stethoscope,
        emoji: '🩺',
        title: 'Doctor Consultation',
        desc: 'Provide expert medical consultations to your patients online and onsite via video.',
      },
      {
        icon: Users,
        emoji: '🤝',
        title: 'Service Provider',
        desc: 'Connect with pet owners for grooming, sitting, boarding, and more through the app.',
      },
      {
        icon: Wallet,
        emoji: '💳',
        title: 'Wallet & Transactions',
        desc: 'Manage all transactions securely — products, services, or consultations — in one place.',
      },
    ],
  },
];

const slideVariants = {
  enterLeft: { opacity: 0, x: -40 },
  enterRight: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exitLeft: { opacity: 0, x: 40 },
  exitRight: { opacity: 0, x: -40 },
};

export default function MobileApps() {
  const [activeTab, setActiveTab] = useState('customer');
  const [direction, setDirection] = useState(1);

  const handleTabChange = (id) => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    const newIndex = tabs.findIndex((t) => t.id === id);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(id);
  };

  const currentTab = tabs.find((t) => t.id === activeTab);

  return (
    <section id="mobile-apps" className="mobileapps-theme-bg relative overflow-hidden py-24">
      {/* Floating paw prints */}
      <PawPrints count={3} />

      <div className="mobileapps-overlay pointer-events-none absolute inset-0" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-[#F25430]/20 text-[#F25430] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase css-pulse-scale">
            <Sparkles size={14} /> Download Now <Sparkles size={14} />
          </span>
          <h2 className="theme-text-strong mb-5 text-4xl font-bold sm:text-5xl">
            📱 Our Mobile Apps 🐾
          </h2>
          <p className="theme-text-muted mx-auto max-w-xl text-lg">
            Available for both pet owners and vendors — get started in minutes.
          </p>
        </motion.div>

        <div className="mb-10 flex justify-center">
          <div className="mobileapps-tab-shell inline-flex rounded-full p-1 gap-1 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'mobileapps-tab-inactive'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-[#2BB1D6] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={{
              enter: (d) => (d > 0 ? slideVariants.enterRight : slideVariants.enterLeft),
              center: slideVariants.center,
              exit: (d) => (d > 0 ? slideVariants.exitLeft : slideVariants.exitRight),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
          >
            <div className="space-y-6">
              {currentTab.features.map(({ icon: Icon, emoji, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-2xl bg-[#2BB1D6]/15 flex items-center justify-center shrink-0 group-hover:bg-[#2BB1D6]/25 transition-colors duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <span className="text-lg mr-0.5">{emoji}</span>
                    <Icon size={20} className="text-[#2BB1D6] group-hover:text-[#F25430] transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h4 className="theme-text-strong mb-1 font-semibold">{title}</h4>
                    <p className="theme-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center css-float-slow">
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-primary/20 blur-3xl" />
                <div className="polaroid-app relative">
                  <img
                    src={currentTab.mockup}
                    alt={`${currentTab.label} screenshot — Pets Hero pet care app for Saudi Arabia`}
                    loading="lazy"
                    className="h-[320px] w-auto object-contain rounded-xl sm:h-[380px]"
                  />
                  <div className="theme-text-muted absolute bottom-3 left-0 right-0 text-center text-sm font-semibold">
                    {currentTab.label} 📱
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center lg:items-start">
              <h3 className="theme-text-strong text-2xl font-bold">{currentTab.label}</h3>
              <p className="theme-text-muted text-center text-sm leading-relaxed lg:text-left">
                {activeTab === 'customer'
                  ? 'Download the Pets Hero customer app and access everything your pet needs — from shopping to vet consultations.'
                  : 'Join Pets Hero as a vendor, doctor, or service provider and grow your business by connecting with thousands of pet owners.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <motion.a
                  href={currentTab.playLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${currentTab.label} on Google Play`}
                  className="flex items-center gap-2 bg-[#F25430] hover:bg-[#F25430]/90 text-white font-semibold px-5 py-3 rounded-full text-sm"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <AndroidIcon />
                  Google Play
                </motion.a>
                <motion.a
                  href={currentTab.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${currentTab.label} on the App Store`}
                  className="theme-text-strong flex items-center gap-2 rounded-full border border-[#2BB1D6]/20 bg-white px-5 py-3 text-sm font-semibold hover:bg-[#2BB1D6]/10"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <AppleIcon />
                  App Store
                </motion.a>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex -space-x-2">
                  {['🐕', '🐈', '🐇'].map((emoji, i) => (
                    <div
                      key={i}
                      className="mobileapps-pet-chip flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm emoji-bounce hover:scale-120 hover:rotate-6 transition-transform"
                      style={{ '--bounce-delay': `${i * 0.2}s` }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <span className="theme-text-muted flex items-center gap-1 text-xs css-pulse-opacity">
                  <Heart size={10} className="text-[#F25430]" fill="currentColor" />
                  Thousands of happy pets
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <SectionDivider variant="mobileToCeo" />
    </section>
  );
}
