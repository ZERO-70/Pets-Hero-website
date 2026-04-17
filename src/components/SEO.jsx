/**
 * SEO.jsx — Structured Data (JSON-LD) Component
 *
 * Injects rich JSON-LD schemas into <head> for Google rich results.
 * Schemas included:
 *  1. LocalBusiness  — critical for "near me" searches in Riyadh
 *  2. WebSite        — enables sitelinks searchbox
 *  3. MobileApplication (Customer App)
 *  4. MobileApplication (Vendor App)
 *  5. Person (CEO)
 *
 * NOTE: Organization schema is inline in index.html for faster parsing.
 * NOTE: Update SITE_URL constant when custom domain goes live.
 */

import { useEffect } from 'react';

const SITE_URL = 'https://pets-hero-react.vercel.app';

const schemas = [
  // ── 1. LocalBusiness ────────────────────────────────────────────────────────
  {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AnimalShelter'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Pets Hero',
    alternateName: 'بيتس هيرو',
    description:
      "Saudi Arabia's leading pet care platform. Find expert vets, professional groomers, premium pet products, and trusted service providers in Riyadh, KSA.",
    url: SITE_URL,
    telephone: '+966539222742',
    priceRange: '$$',
    image: `${SITE_URL}/assets/logo.png`,
    logo: `${SITE_URL}/assets/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6746 Ahmad Fathi Zaghloul 2599, Al Taawun Dist.',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh Province',
      postalCode: '12477',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.767361,
      longitude: 46.691944,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966539222742',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
    },
    sameAs: [
      'https://www.tiktok.com/@petshero',
      'https://www.instagram.com/petsherosa',
      'https://www.snapchat.com/@petsherosa',
    ],
    hasMap: 'https://maps.google.com/maps?q=24.767361,46.691944',
    areaServed: {
      '@type': 'City',
      name: 'Riyadh',
    },
    servesCuisine: undefined,
    potentialAction: {
      '@type': 'OrderAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://play.google.com/store/apps/details?id=com.petshero.customer',
        actionPlatform: [
          'http://schema.org/MobileWebPlatform',
          'http://schema.org/AndroidPlatform',
        ],
      },
    },
  },

  // ── 2. WebSite ───────────────────────────────────────────────────────────────
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Pets Hero',
    description: "Saudi Arabia's #1 pet care platform",
    inLanguage: ['en-SA', 'ar-SA'],
    publisher: {
      '@id': `${SITE_URL}/#localbusiness`,
    },
  },

  // ── 3. MobileApplication — Customer App ─────────────────────────────────────
  {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Pets Hero — Pet Care App',
    alternateName: 'Pets Hero Customer',
    description:
      'The Pets Hero customer app for Saudi Arabia — shop premium pet supplies, book grooming, order vet consultations, and manage your pet in one place.',
    operatingSystem: 'Android, iOS',
    applicationCategory: 'LifestyleApplication',
    applicationSubCategory: 'PetCareApplication',
    inLanguage: ['en', 'ar'],
    countriesSupported: 'SA',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'SAR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '120',
      bestRating: '5',
      worstRating: '1',
    },
    downloadUrl: [
      'https://play.google.com/store/apps/details?id=com.petshero.customer',
      'https://apps.apple.com/us/app/pets-hero/id6740918153',
    ],
    url: 'https://play.google.com/store/apps/details?id=com.petshero.customer',
    publisher: {
      '@type': 'Organization',
      name: 'Pets Hero',
    },
    featureList: [
      'Pet grooming bookings',
      'Online vet consultations',
      'Premium pet product shopping',
      'Pet boarding and sitting',
      'Smart notifications and vaccination reminders',
    ],
  },

  // ── 4. MobileApplication — Vendor App ───────────────────────────────────────
  {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Pets Hero Pro — Vendor App',
    alternateName: 'Pets Hero Vendor',
    description:
      'The Pets Hero vendor app for Saudi Arabia — manage your pet business, doctor consultations, grooming services, and transactions all in one dashboard.',
    operatingSystem: 'Android, iOS',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'PetCareApplication',
    inLanguage: ['en', 'ar'],
    countriesSupported: 'SA',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'SAR',
    },
    downloadUrl: [
      'https://play.google.com/store/apps/details?id=com.petshero.vendor',
      'https://apps.apple.com/us/app/pets-hero-pro/id6740934646',
    ],
    url: 'https://play.google.com/store/apps/details?id=com.petshero.vendor',
    publisher: {
      '@type': 'Organization',
      name: 'Pets Hero',
    },
    featureList: [
      'Doctor consultation management',
      'Service provider dashboard',
      'Secure wallet and transactions',
      'Order management',
      'Client communication',
    ],
  },

  // ── 5. Person — CEO ─────────────────────────────────────────────────────────
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yazeed Alhayyaf',
    jobTitle: 'CEO & Founder',
    worksFor: {
      '@id': `${SITE_URL}/#localbusiness`,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Riyadh',
      addressCountry: 'SA',
    },
    knowsAbout: [
      'Business Valuation',
      'Financial Leadership',
      'Entrepreneurship',
      'Pet Care Industry',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Certified Public Accountant (CPA)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Accredited Senior Appraiser (ASA)',
      },
    ],
    description:
      'Strategic and results-oriented CFO with 18+ years of leadership experience. Founder of Pets Hero, Nabt, AmeenCare, and other ventures. Audit committee chairman and board member for listed and non-listed companies in Saudi Arabia.',
  },
];

export default function SEO() {
  useEffect(() => {
    // Inject each schema as a separate <script> tag in <head>
    const scripts = schemas.map((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      // Remove undefined values before stringifying
      script.textContent = JSON.stringify(schema, (_, v) => (v === undefined ? undefined : v));
      document.head.appendChild(script);
      return script;
    });

    // Cleanup on unmount
    return () => {
      scripts.forEach((s) => {
        if (document.head.contains(s)) {
          document.head.removeChild(s);
        }
      });
    };
  }, []);

  return null;
}
