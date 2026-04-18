// ─────────────────────────────────────────────────────────────
//  LanguageContext.jsx – global language + RTL state provider
// ─────────────────────────────────────────────────────────────
import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../i18n/translations';

const LANG_KEY = 'pets-hero-lang';

/**
 * Detect whether the user is likely in an Arabic-speaking region.
 * Priority: stored preference → browser timezone/locale → fallback EN
 */
function detectInitialLang() {
  // 1. Respect a previously stored manual choice
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === 'ar' || stored === 'en') return stored;

  // 2. Check browser timezone — Saudi Arabia and most Arab Gulf countries
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? '';
  const arabicTimezones = [
    'Asia/Riyadh',       // KSA
    'Asia/Kuwait',
    'Asia/Qatar',        // Qatar
    'Asia/Bahrain',
    'Asia/Dubai',        // UAE
    'Asia/Muscat',       // Oman
    'Asia/Aden',         // Yemen
    'Asia/Baghdad',      // Iraq
    'Asia/Damascus',     // Syria
    'Asia/Amman',        // Jordan
    'Asia/Beirut',       // Lebanon
    'Africa/Cairo',      // Egypt
    'Africa/Tripoli',    // Libya
    'Africa/Tunis',      // Tunisia
    'Africa/Algiers',    // Algeria
    'Africa/Casablanca', // Morocco
  ];
  if (arabicTimezones.includes(tz)) return 'ar';

  // 3. Check browser language
  const lang = (navigator.language || '').toLowerCase();
  if (lang.startsWith('ar')) return 'ar';

  return 'en';
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang);
  const t = translations[lang];
  const isRTL = lang === 'ar';

  // Apply RTL to the document when Arabic is active
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const toggleLang = () => {
    const next = lang === 'en' ? 'ar' : 'en';
    localStorage.setItem(LANG_KEY, next);
    setLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, isRTL, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Convenience hook — throws if used outside provider */
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}
