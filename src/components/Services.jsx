import { motion } from 'framer-motion';
import { Scissors, ShoppingBag, Stethoscope, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Service Providers',
    description:
      'Care for your pet, including grooming, boarding, sitting, training, and transportation — all available at your fingertips.',
    features: ['Grooming', 'Boarding', 'Sitting', 'Training', 'Transportation'],
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    accentColor: 'border-primary/20 hover:border-primary/50',
    glowColor: 'group-hover:shadow-primary/20 group-hover:shadow-lg',
  },
  {
    icon: ShoppingBag,
    title: 'Product Vendors',
    description:
      "Premium pet products for all your pet's needs, with easy ordering and doorstep delivery.",
    features: ['Premium Quality', 'Easy Ordering', 'Fast Delivery', 'Wide Selection'],
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
    accentColor: 'border-accent/20 hover:border-accent/40',
    featured: true,
  },
  {
    icon: Stethoscope,
    title: 'Doctors',
    description:
      'Expert online and onsite veterinary consultations to keep your pet healthy and well.',
    features: ['Online Consultations', 'Onsite Visits', 'Video Calls', 'Trusted Vets'],
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
    <section id="services" className="relative overflow-hidden bg-light py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-primary uppercase">
            Hero Pets Vendors
          </span>
          <h2 className="mb-5 text-4xl font-bold text-dark sm:text-5xl">Our Services</h2>
          <p className="mx-auto max-w-xl text-lg text-dark/55">
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
          {services.map(({ icon: Icon, title, description, features, iconBg, iconColor, accentColor, glowColor, featured }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`group relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-7 ${accentColor} ${glowColor || ''} ${
                featured ? 'ring-1 ring-accent/20' : ''
              }`}
            >
              {featured && (
                <div className="absolute -top-3 right-5 rounded-full bg-gradient-to-r from-accent to-accent-light px-4 py-1 text-[11px] font-bold text-white shadow-md shadow-accent/20">
                  Popular
                </div>
              )}

              {/* Shimmer overlay on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 shimmer" />

              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}>
                <Icon size={24} className={iconColor} />
              </div>

              <h3 className="mb-2 text-xl font-bold text-dark">{title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-dark/55">{description}</p>

              <div className="mt-auto">
                <ul className="space-y-2.5">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-dark/65">
                      <ChevronRight size={14} className="shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
