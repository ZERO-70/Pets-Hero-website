import { motion } from 'framer-motion';
import { Award, Briefcase, Quote, MapPin, Heart } from 'lucide-react';
import PawPrints from './PawPrints';
import SectionDivider from './SectionDivider';
import { useLang } from '../context/LanguageContext';

export default function Ceo() {
  const { t, isRTL } = useLang();
  const c = t.ceo;

  return (
    <section id="ceo" dir={isRTL ? 'rtl' : 'ltr'} className="ceo-theme-bg relative overflow-hidden py-24">
      <PawPrints count={3} />

      {/* Decorative orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#2BB1D6]/15 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-[#F25430]/10 blur-[100px]" />

        {/* Pixelated moons */}
        <div className="absolute top-20 right-16 lg:top-24 lg:right-32">
          <div className="pixel-moon moon-float-slow relative" style={{ transform: 'scale(0.8)' }}>
            <div className="pixel-moon-glow absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'scale(0.8)' }} />
          </div>
          <div className="absolute top-4 left-8 pixel-star" style={{ animationDelay: '0.6s' }} />
          <div className="absolute -top-2 left-4 pixel-star" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="absolute bottom-32 right-20 lg:bottom-40 lg:right-40">
          <div className="pixel-moon moon-float-medium relative" style={{ transform: 'scale(0.5)' }}>
            <div className="pixel-moon-glow absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'scale(0.5)' }} />
          </div>
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
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#2BB1D6]/20 px-4 py-1.5 text-sm font-semibold tracking-wider text-[#2BB1D6] uppercase">
            {c.badge}
          </span>
          <h2 className="theme-text-strong text-4xl font-bold sm:text-5xl">{c.heading}</h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Left: Profile card */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#2BB1D6]/20 bg-white shadow-2xl shadow-[#2BB1D6]/10">
              <div className="h-1.5 bg-gradient-to-r from-[#2BB1D6] via-[#F25430] to-[#2BB1D6]" />

              <div className="p-6 sm:p-8">
                {/* Avatar + name */}
                <div className="mb-6 flex items-center gap-5">
                  <div className="polaroid shrink-0 w-24 sm:w-28">
                    <img
                      src="/assets/ceo-real.jpg"
                      alt={`${c.name} - ${c.title}`}
                      loading="lazy"
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="theme-text-strong text-2xl font-bold">{c.name}</h3>
                    <p className="font-semibold text-[#2BB1D6]">{c.title}</p>
                    <div className="theme-text-muted mt-1 flex items-center gap-1">
                      <MapPin size={12} />
                      <span className="text-xs">{c.location}</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-7">
                  <Quote size={28} className={`absolute ${isRTL ? '-right-1' : '-left-1'} -top-1 text-primary/30`} style={isRTL ? { transform: 'scaleX(-1)' } : {}} />
                  <p className={`theme-text-muted ${isRTL ? 'pr-7' : 'pl-7'} text-sm leading-7 sm:text-base`}>
                    {c.quote}
                  </p>
                </div>

                {/* Credentials */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
                  {c.credentials.map(({ label, desc }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-primary/15 bg-primary/5 p-3 text-center transition-colors duration-200 hover:border-primary/30 hover:bg-primary/10"
                    >
                      <div className="text-sm font-bold text-primary">{label}</div>
                      <div className="theme-text-muted mt-0.5 text-[10px] leading-tight">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Ventures card */}
            <div className="rounded-2xl border border-[#2BB1D6]/10 bg-white p-5 sm:p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2BB1D6]/15">
                  <Briefcase size={18} className="text-[#2BB1D6]" />
                </div>
                <h4 className="theme-text-strong text-lg font-bold">{c.venturesHeading}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.ventures.map(({ name, emoji }) => (
                  <span
                    key={name}
                    className={`inline-flex items-center gap-1 rounded-full border px-3.5 py-1.5 text-sm cursor-pointer transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 ${
                      name === 'Pets Hero' || name === 'بيتس هيرو'
                        ? 'border-[#F25430]/30 bg-gradient-to-r from-[#F25430]/20 to-[#FF7A5C]/20 text-[#F25430] font-semibold shadow-sm shadow-[#F25430]/20 css-wiggle'
                        : 'border-[#2BB1D6]/10 bg-[#2BB1D6]/5 theme-text-muted hover:border-[#2BB1D6]/30 hover:text-[#2BB1D6]'
                    }`}
                  >
                    <span>{emoji}</span>
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Trustee card */}
            <div className="rounded-2xl border border-[#2BB1D6]/10 bg-white p-5 sm:p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F25430]/15">
                  <Award size={18} className="text-[#F25430]" />
                </div>
                <h4 className="theme-text-strong text-lg font-bold">{c.trusteeHeading}</h4>
              </div>
              <p className="theme-text-muted text-sm leading-7 sm:text-base">{c.trusteeParagraph}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {c.stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 p-4 text-center transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-gradient">{value}</div>
                  <div className="theme-text-muted mt-1 text-[11px]">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <SectionDivider variant="ceoToFindUs" />
    </section>
  );
}
