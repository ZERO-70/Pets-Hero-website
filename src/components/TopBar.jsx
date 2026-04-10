import { MapPin, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="hidden sm:block bg-[#2BB1D6]/10 text-[#1A2836] text-sm py-2 px-4">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-1 px-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-[#2BB1D6] shrink-0" />
          <span>6746 Ahmad Fathi Zaghloul 2599, Al Taawun Dist. Riyadh KSA</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-[#2BB1D6] shrink-0" />
          <a href="tel:+966539222742" className="hover:text-[#2BB1D6] transition-colors font-medium">
            +966-53-922-2742
          </a>
        </div>
      </div>
    </div>
  );
}
