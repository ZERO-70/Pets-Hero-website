import { motion } from 'framer-motion';
import { Award, Briefcase, Quote, MapPin } from 'lucide-react';

const credentials = [
  { label: 'CPA', desc: 'Certified Public Accountant' },
  { label: 'SOCPA', desc: 'Saudi Organization for CPAs' },
  { label: 'ASA', desc: 'Accredited Senior Appraiser' },
  { label: 'CME1', desc: 'Capital Markets Executive' },
];

const ventures = [
  'Mala Business Valuation',
  "Yazeed Alhayyaf's CPA Office",
  'Nabt',
  'AmeenCare',
  'Pets Hero',
];

export default function Ceo() {
  return (
    <section id="ceo" className="relative overflow-hidden bg-dark py-24">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full glass px-4 py-1.5 text-sm font-semibold tracking-wider text-accent uppercase">
            Leadership
          </span>
          <h2 className="text-4xl font-bold text-light sm:text-5xl">CEO & Founder</h2>
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
            <div className="relative overflow-hidden rounded-2xl border border-light/10 bg-dark-light shadow-2xl">
              {/* Top gradient accent */}
              <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

              <div className="p-6 sm:p-8">
                {/* Avatar + name */}
                <div className="mb-6 flex items-center gap-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/20 shadow-lg sm:h-24 sm:w-24">
                    <img
                      src="/assets/ceo-real.jpg"
                      alt="Mr. Yazeed - CEO & Founder"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-light">Mr. Yazeed</h3>
                    <p className="font-semibold text-accent">CEO & Founder</p>
                    <div className="mt-1 flex items-center gap-1 text-light/40">
                      <MapPin size={12} />
                      <span className="text-xs">Riyadh, Saudi Arabia</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-7">
                  <Quote size={28} className="absolute -left-1 -top-1 text-primary/30" />
                  <p className="pl-7 text-sm leading-7 text-light/60 sm:text-base">
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
                      <div className="mt-0.5 text-[10px] leading-tight text-light/40">{desc}</div>
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
            <div className="rounded-2xl border border-light/10 bg-dark-light p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <h4 className="text-lg font-bold text-light">Founded & Co-Founded Ventures</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {ventures.map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-light/10 bg-light/5 px-3.5 py-1.5 text-sm text-light/70 transition-colors duration-200 hover:border-primary/30 hover:text-primary"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Trustee card */}
            <div className="rounded-2xl border border-light/10 bg-dark-light p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                  <Award size={18} className="text-accent" />
                </div>
                <h4 className="text-lg font-bold text-light">Also a Bankruptcy Trustee</h4>
              </div>
              <p className="text-sm leading-7 text-light/50 sm:text-base">
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
                  <div className="mt-1 text-[11px] text-light/40">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
