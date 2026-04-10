import { motion } from 'framer-motion';
import { Award, Briefcase, Quote, MapPin, Heart } from 'lucide-react';
import PawPrints from './PawPrints';

const credentials = [
  { label: 'CPA', desc: 'Certified Public Accountant' },
  { label: 'SOCPA', desc: 'Saudi Organization for CPAs' },
  { label: 'ASA', desc: 'Accredited Senior Appraiser' },
  { label: 'CME1', desc: 'Capital Markets Executive' },
];

const ventures = [
  { name: 'Mala Business Valuation', emoji: '📊' },
  { name: "Yazeed Alhayyaf's CPA Office", emoji: '📈' },
  { name: 'Nabt', emoji: '🌱' },
  { name: 'AmeenCare', emoji: '❤️' },
  { name: 'Pets Hero', emoji: '🐾' },
];

export default function Ceo() {
  return (
    <section id="ceo" className="relative overflow-hidden bg-gradient-to-br from-[#F5F1E6] via-white to-[#2BB1D6]/10 py-24">
      {/* Floating paw prints */}
      <PawPrints count={3} />
      
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#2BB1D6]/15 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-[#F25430]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#2BB1D6]/20 px-4 py-1.5 text-sm font-semibold tracking-wider text-[#2BB1D6] uppercase">
            <span>👔</span> Leadership <span>🐾</span>
          </span>
          <h2 className="text-4xl font-bold text-[#1A2836] sm:text-5xl">CEO & Founder 🌟</h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Left: Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#2BB1D6]/20 bg-white shadow-2xl shadow-[#2BB1D6]/10">
              {/* Top gradient accent */}
              <div className="h-1.5 bg-gradient-to-r from-[#2BB1D6] via-[#F25430] to-[#2BB1D6]" />

              <div className="p-6 sm:p-8">
                {/* Avatar + name */}
                <div className="mb-6 flex items-center gap-5">
                  <div className="polaroid shrink-0 w-24 sm:w-28">
                    <img
                      src="/assets/ceo-real.jpg"
                      alt="Mr. Yazeed - CEO & Founder"
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-[#1A2836]">Mr. Yazeed</h3>
                    <p className="font-semibold text-[#2BB1D6]">CEO & Founder</p>
                    <div className="mt-1 flex items-center gap-1 text-[#1A2836]/40">
                      <MapPin size={12} />
                      <span className="text-xs">Riyadh, Saudi Arabia</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-7">
                  <Quote size={28} className="absolute -left-1 -top-1 text-primary/30" />
                  <p className="pl-7 text-sm leading-7 text-[#1A2836]/60 sm:text-base">
                    Strategic and results-oriented CFO with 18+ years of leadership experience across
                    diverse businesses. Adept at building high-performing teams and driving financial
                    growth. Currently serves as audit committee chairman and board member for listed
                    and non-listed companies.
                  </p>
                </div>

                {/* Credentials */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
                  {credentials.map(({ label, desc }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-primary/15 bg-primary/5 p-3 text-center transition-colors duration-200 hover:border-primary/30 hover:bg-primary/10"
                    >
                      <div className="text-sm font-bold text-primary">{label}</div>
                      <div className="mt-0.5 text-[10px] leading-tight text-[#1A2836]/40">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
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
                <h4 className="text-lg font-bold text-[#1A2836]">Founded & Co-Founded Ventures</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {ventures.map(({ name, emoji }, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    animate={name === 'Pets Hero' ? {
                      rotate: [0, -3, 3, -2, 2, 0],
                      scale: [1, 1.05, 0.98, 1.02, 1],
                    } : undefined}
                    {...(name === 'Pets Hero' ? {
                      transition: {
                        duration: 0.6,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        ease: 'easeInOut',
                      }
                    } : {})}
                    className={`inline-flex items-center gap-1 rounded-full border px-3.5 py-1.5 text-sm cursor-pointer transition-colors duration-200 ${
                      name === 'Pets Hero'
                        ? 'border-[#F25430]/30 bg-gradient-to-r from-[#F25430]/20 to-[#FF7A5C]/20 text-[#F25430] font-semibold shadow-sm shadow-[#F25430]/20'
                        : 'border-[#2BB1D6]/10 bg-[#2BB1D6]/5 text-[#1A2836]/70 hover:border-[#2BB1D6]/30 hover:text-[#2BB1D6]'
                    }`}
                  >
                    <span>{emoji}</span>
                    {name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Trustee card */}
            <div className="rounded-2xl border border-[#2BB1D6]/10 bg-white p-5 sm:p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F25430]/15">
                  <Award size={18} className="text-[#F25430]" />
                </div>
                <h4 className="text-lg font-bold text-[#1A2836]">Also a Bankruptcy Trustee</h4>
              </div>
              <p className="text-sm leading-7 text-[#1A2836]/50 sm:text-base">
                With deep expertise spanning business valuation, financial growth, and entrepreneurship,
                Mr. Yazeed brings visionary leadership to Pets Hero — combining passion for innovation
                with world-class financial acumen.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '18+', label: 'Years Experience' },
                { value: '5+', label: 'Ventures Founded' },
                { value: '4', label: 'Certifications' },
              ].map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 p-4 text-center transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-gradient">{value}</div>
                  <div className="mt-1 text-[11px] text-[#1A2836]/40">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
