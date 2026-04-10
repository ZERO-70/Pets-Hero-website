import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';
import PawPrints from './PawPrints';

const contactItems = [
  {
    icon: MapPin,
    title: 'Address',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    content: (
      <p className="text-sm leading-relaxed text-dark/60">
        6746 Ahmad Fathi Zaghloul 2599,<br />
        Al Taawun Dist.<br />
        Riyadh, KSA
      </p>
    ),
  },
  {
    icon: Phone,
    title: 'Phone',
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
    content: (
      <a href="tel:+966539222742" className="text-sm font-semibold text-accent transition-colors hover:text-accent-light">
        +966-53-922-2742
      </a>
    ),
  },
  {
    icon: Clock,
    title: 'Hours',
    iconBg: 'bg-[#2BB1D6]/10',
    iconColor: 'text-[#2BB1D6]',
    content: (
      <p className="text-sm leading-relaxed text-dark/60">
        Sun – Thu: 9:00 AM – 6:00 PM<br />
        Fri – Sat: Closed
      </p>
    ),
  },
];

export default function FindUs() {
  return (
    <section id="find-us" className="relative bg-[#F5F1E6] py-24">
      {/* Floating paw prints */}
      <PawPrints count={3} />
      
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#2BB1D6]/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-[#2BB1D6] uppercase">
            <MapPin size={14} /> Location <span>📍</span>
          </span>
          <h2 className="mb-5 text-4xl font-bold text-[#1A2836] sm:text-5xl">Find Us 🗺️</h2>
          <p className="mx-auto max-w-xl text-lg text-[#1A2836]/55">
            Visit our office or get in touch — we're always here to help with your pet care needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactItems.map(({ icon: Icon, title, iconBg, iconColor, content }) => (
              <div
                key={title}
                className="group flex items-start gap-4 rounded-2xl border border-[#1A2836]/8 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#2BB1D6]/30"
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBg} transition-colors duration-300`}>
                  <Icon size={20} className={iconColor} />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-dark">{title}</h4>
                  {content}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="overflow-hidden rounded-2xl border border-[#2BB1D6]/20 shadow-lg lg:col-span-2"
            style={{ minHeight: '360px' }}
          >
            <iframe
              loading="lazy"
              title="Pets Hero Location"
              src="https://maps.google.com/maps?q=24.767361%2C46.691944&t=m&z=14&output=embed&iwloc=near"
              className="h-full w-full"
              style={{ minHeight: '360px', border: 0 }}
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
