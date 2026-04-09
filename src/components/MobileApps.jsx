import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell, ShoppingBag, Scissors, UserCheck, Stethoscope, Users,
  Store, Wallet,
} from 'lucide-react';

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
    mockup: '/assets/customer-app-new.png',
    features: [
      {
        icon: Bell,
        title: 'Smart Notifications',
        desc: 'Pet order notifications, upcoming vaccinations, reminders, birthday and food alerts.',
      },
      {
        icon: ShoppingBag,
        title: 'Store',
        desc: 'Shop premium pet supplies at unbeatable prices, with easy checkout and delivery.',
      },
      {
        icon: Scissors,
        title: 'Pet Services',
        desc: 'Book professional grooming, boarding, sitting, and training services on demand.',
      },
    ],
  },
  {
    id: 'vendor',
    label: 'Vendor App',
    playLink: 'https://play.google.com/store/apps/details?id=com.petshero.vendor',
    mockup: '/assets/vendor-app.png',
    features: [
      {
        icon: Stethoscope,
        title: 'Doctor Consultation',
        desc: 'Provide expert medical consultations to your patients online and onsite via video.',
      },
      {
        icon: Users,
        title: 'Service Provider',
        desc: 'Connect with pet owners for grooming, sitting, boarding, and more through the app.',
      },
      {
        icon: Wallet,
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
    <section id="mobile-apps" className="py-24 bg-dark overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Download Now
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-light mb-5">
            Our Mobile Apps
          </h2>
          <p className="text-light/60 text-lg max-w-xl mx-auto">
            Available for both pet owners and vendors — get started in minutes.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-light/10 rounded-full p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-light/60 hover:text-light'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-accent rounded-full"
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
              {currentTab.features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
                    <Icon size={22} className="text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light mb-1">{title}</h4>
                    <p className="text-light/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex justify-center"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-primary/20 blur-3xl" />
                <img
                  src={currentTab.mockup}
                  alt={`${currentTab.label} mockup`}
                  className="relative h-[320px] w-auto object-contain rounded-3xl shadow-2xl sm:h-[380px]"
                />
              </div>
            </motion.div>

            <div className="flex flex-col gap-4 items-center lg:items-start">
              <h3 className="text-2xl font-bold text-light">{currentTab.label}</h3>
              <p className="text-light/60 text-sm leading-relaxed text-center lg:text-left">
                {activeTab === 'customer'
                  ? 'Download the Pets Hero customer app and access everything your pet needs — from shopping to vet consultations.'
                  : 'Join Pets Hero as a vendor, doctor, or service provider and grow your business by connecting with thousands of pet owners.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={currentTab.playLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-5 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105 text-sm"
                >
                  <AndroidIcon />
                  Google Play
                </a>
                <button className="flex items-center gap-2 bg-light/10 hover:bg-light/20 text-light font-semibold px-5 py-3 rounded-full border border-light/20 transition-all duration-300 hover:scale-105 text-sm">
                  <AppleIcon />
                  App Store
                </button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex -space-x-2">
                  {['🐕', '🐈', '🐇'].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/30 border-2 border-dark flex items-center justify-center text-sm"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <span className="text-light/50 text-xs">Thousands of happy pets</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
