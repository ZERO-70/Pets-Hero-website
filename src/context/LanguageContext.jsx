// ─────────────────────────────────────────────────────────────
//  LanguageContext.jsx – global language + RTL state provider
// ─────────────────────────────────────────────────────────────
import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../i18n/translations';

const LANG_KEY = 'pets-hero-lang';

/**
 * Detect the initial language.
 * Priority: stored preference → Saudi Arabia timezone → fallback EN
 * Only KSA (Asia/Riyadh) shows Arabic by default; UAE and all other
 * regions default to English.
 */
function detectInitialLang() {
  // 1. Respect a previously stored manual choice
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === 'ar' || stored === 'en') return stored;

  // 2. Only auto-select Arabic for Saudi Arabia
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? '';
  if (tz === 'Asia/Riyadh') return 'ar';

  // 3. Fallback to English for every other region (including UAE, etc.)
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
