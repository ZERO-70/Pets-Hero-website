// ─────────────────────────────────────────────────────────────
//  translations.js – centralised EN / AR strings for Pets Hero
// ─────────────────────────────────────────────────────────────

export const translations = {
  en: {
    // ── Navbar ──────────────────────────────────────────────
    nav: {
      mobileApps: 'Mobile Apps',
      services: 'Services',
      aboutUs: 'About Us',
      ceoFounder: 'CEO & Founder',
      switchToArabic: 'عربي',
      switchToEnglish: 'EN',
    },

    // ── Hero ────────────────────────────────────────────────
    hero: {
      phrases: [
        'Simplify Pet care\nAmplify Love ❤️',
        'Expert Vet Consultations 🩺',
        'Premium Pet Products ⭐',
        'Trusted Service Providers 🤝',
      ],
      ariaLabel:
        'Pets Hero — Simplify Pet Care, Amplify Love. Expert Vet Consultations, Premium Pet Products, and Trusted Service Providers in Saudi Arabia.',
      description:
        'At Pets Hero, we are dedicated to providing exceptional services and products for your beloved pets. Our platform brings together three unique vendors, each specializing in different aspects of pet care, ensuring every need of your furry friend is met with the highest level of quality and care.',
      stats: [
        { value: '3+', label: 'Vendor Types' },
        { value: '24/7', label: 'Support' },
        { value: '100%', label: 'Trusted Care' },
      ],
      scroll: 'Scroll',
    },

    // ── Services ────────────────────────────────────────────
    services: {
      badge: '🐾 Hero Pets Vendors 🐾',
      heading: 'Our Services 🦴',
      subheading:
        'Connect with the best pet care professionals, products, and doctors — all in one platform.',
      cards: [
        {
          title: 'Service Providers',
          description:
            'Care for your pet, including grooming, boarding, sitting, training, and transportation — all available at your fingertips.',
          features: ['Grooming', 'Boarding', 'Sitting', 'Training', 'Transportation'],
        },
        {
          title: 'Product Vendors',
          description:
            "Premium pet products for all your pet's needs, with easy ordering and doorstep delivery.",
          features: ['Premium Quality', 'Easy Ordering', 'Fast Delivery', 'Wide Selection'],
          popularLabel: '⭐ Popular',
        },
        {
          title: 'Doctors',
          description:
            'Expert online and onsite veterinary consultations to keep your pet healthy and well.',
          features: ['Online Consultations', 'Onsite Visits', 'Video Calls', 'Trusted Vets'],
        },
      ],
    },

    // ── MobileApps ──────────────────────────────────────────
    mobileApps: {
      badge: 'Download Now',
      heading: '📱 Our Mobile Apps 🐾',
      subheading: 'Available for both pet owners and vendors — get started in minutes.',
      tabs: [
        {
          id: 'customer',
          label: 'Customer App',
          features: [
            {
              title: 'Smart Notifications',
              desc: 'Pet order notifications, upcoming vaccinations, reminders, birthday and food alerts.',
            },
            {
              title: 'Store',
              desc: 'Shop premium pet supplies at unbeatable prices, with easy checkout and delivery.',
            },
            {
              title: 'Pet Services',
              desc: 'Book professional grooming, boarding, sitting, and training services on demand.',
            },
          ],
          description:
            'Download the Pets Hero customer app and access everything your pet needs — from shopping to vet consultations.',
        },
        {
          id: 'vendor',
          label: 'Vendor App',
          features: [
            {
              title: 'Doctor Consultation',
              desc: 'Provide expert medical consultations to your patients online and onsite via video.',
            },
            {
              title: 'Service Provider',
              desc: 'Connect with pet owners for grooming, sitting, boarding, and more through the app.',
            },
            {
              title: 'Wallet & Transactions',
              desc: 'Manage all transactions securely — products, services, or consultations — in one place.',
            },
          ],
          description:
            'Join Pets Hero as a vendor, doctor, or service provider and grow your business by connecting with thousands of pet owners.',
        },
      ],
      googlePlay: 'Google Play',
      appStore: 'App Store',
      happyPets: 'Thousands of happy pets',
    },

    // ── CEO ─────────────────────────────────────────────────
    ceo: {
      badge: '👔 Leadership 🐾',
      heading: 'CEO & Founder 🌟',
      name: 'Mr. Yazeed',
      title: 'CEO & Founder',
      location: 'Riyadh, Saudi Arabia',
      quote:
        'Strategic and results-oriented CFO with 18+ years of leadership experience across diverse businesses. Adept at building high-performing teams and driving financial growth. Currently serves as audit committee chairman and board member for listed and non-listed companies.',
      credentials: [
        { label: 'CPA', desc: 'Certified Public Accountant' },
        { label: 'SOCPA', desc: 'Saudi Organization for CPAs' },
        { label: 'ASA', desc: 'Accredited Senior Appraiser' },
        { label: 'CME1', desc: 'Capital Markets Executive' },
      ],
      venturesHeading: 'Founded & Co-Founded Ventures',
      ventures: [
        { name: 'Mala Business Valuation', emoji: '📊' },
        { name: "Yazeed Alhayyaf's CPA Office", emoji: '📈' },
        { name: 'Nabt', emoji: '🌱' },
        { name: 'AmeenCare', emoji: '❤️' },
        { name: 'Pets Hero', emoji: '🐾' },
      ],
      trusteeHeading: 'Also a Bankruptcy Trustee',
      trusteeParagraph:
        'With deep expertise spanning business valuation, financial growth, and entrepreneurship, Mr. Yazeed brings visionary leadership to Pets Hero — combining passion for innovation with world-class financial acumen.',
      stats: [
        { value: '18+', label: 'Years Experience' },
        { value: '5+', label: 'Ventures Founded' },
        { value: '4', label: 'Certifications' },
      ],
    },

    // ── FindUs ──────────────────────────────────────────────
    findUs: {
      badge: 'Location 📍',
      heading: 'Find Us 🗺️',
      subheading: "Visit our office or get in touch — we're always here to help with your pet care needs.",
      address: 'Address',
      addressLines: ['6746 Ahmad Fathi Zaghloul 2599,', 'Al Taawun Dist.', 'Riyadh, KSA'],
      phone: 'Phone',
      hours: 'Hours',
      hoursLines: ['Sun – Thu: 9:00 AM – 6:00 PM', 'Fri – Sat: Closed'],
    },

    // ── Footer ──────────────────────────────────────────────
    footer: {
      tagline:
        'Your partner for complete pet care 🐾 — connecting pet owners with services, products, and expert veterinary care in Saudi Arabia.',
      quickLinks: 'Quick Links 🦴',
      connectWithUs: 'Connect With Us ❤️',
      address: '📍 Al Taawun Dist. Riyadh, KSA',
      copyright: '🐾 © 2026 Pets Hero. All Rights Reserved. 🐾',
    },
  },

  // ═══════════════════════════════════════════════════════════
  //  ARABIC
  // ═══════════════════════════════════════════════════════════
  ar: {
    // ── Navbar ──────────────────────────────────────────────
    nav: {
      mobileApps: 'تطبيقات الجوال',
      services: 'خدماتنا',
      aboutUs: 'من نحن',
      ceoFounder: 'المؤسس والرئيس',
      switchToArabic: 'عربي',
      switchToEnglish: 'EN',
    },

    // ── Hero ────────────────────────────────────────────────
    hero: {
      phrases: [
        'بسّط رعاية حيوانك\nوضاعف الحب ❤️',
        'استشارات بيطرية احترافية 🩺',
        'منتجات حيوانات أليفة مميزة ⭐',
        'مزودو خدمات موثوقون 🤝',
      ],
      ariaLabel:
        'بيتس هيرو — بسّط رعاية حيوانك وضاعف الحب. استشارات بيطرية احترافية، منتجات مميزة، ومزودو خدمات موثوقون في المملكة العربية السعودية.',
      description:
        'في بيتس هيرو، نسعى لتقديم خدمات ومنتجات استثنائية لحيواناتك الأليفة المحبوبة. تجمع منصتنا بين ثلاثة أنواع فريدة من البائعين، يختص كل منهم بجانب مختلف من رعاية الحيوانات، لضمان تلبية كل احتياجات صديقك الفروي بأعلى مستوى من الجودة والعناية.',
      stats: [
        { value: '+3', label: 'أنواع الموردين' },
        { value: '24/7', label: 'دعم مستمر' },
        { value: '%100', label: 'رعاية موثوقة' },
      ],
      scroll: 'انتقل',
    },

    // ── Services ────────────────────────────────────────────
    services: {
      badge: '🐾 موردو بيتس هيرو 🐾',
      heading: 'خدماتنا 🦴',
      subheading: 'تواصل مع أفضل متخصصي رعاية الحيوانات الأليفة والمنتجات والأطباء — كلها في منصة واحدة.',
      cards: [
        {
          title: 'مزودو الخدمات',
          description:
            'اعتنِ بحيوانك من تجميل وإيواء وجلوس وتدريب ونقل — كل شيء في متناول يدك.',
          features: ['تجميل', 'إيواء', 'جلوس', 'تدريب', 'نقل'],
        },
        {
          title: 'بائعو المنتجات',
          description: 'منتجات حيوانات أليفة مميزة لجميع احتياجات حيوانك، بطلب سهل وتوصيل للباب.',
          features: ['جودة عالية', 'طلب سهل', 'توصيل سريع', 'تشكيلة واسعة'],
          popularLabel: '⭐ الأكثر طلباً',
        },
        {
          title: 'الأطباء',
          description: 'استشارات بيطرية متخصصة عبر الإنترنت وفي العيادة للحفاظ على صحة حيوانك.',
          features: ['استشارات إلكترونية', 'زيارات ميدانية', 'مكالمات فيديو', 'أطباء موثوقون'],
        },
      ],
    },

    // ── MobileApps ──────────────────────────────────────────
    mobileApps: {
      badge: 'حمّل الآن',
      heading: '📱 تطبيقاتنا للجوال 🐾',
      subheading: 'متاح لأصحاب الحيوانات الأليفة والبائعين — ابدأ خلال دقائق.',
      tabs: [
        {
          id: 'customer',
          label: 'تطبيق العميل',
          features: [
            {
              title: 'إشعارات ذكية',
              desc: 'إشعارات الطلبات والتطعيمات القادمة والتذكيرات وتنبيهات أعياد الميلاد والطعام.',
            },
            {
              title: 'المتجر',
              desc: 'تسوّق مستلزمات الحيوانات المميزة بأفضل الأسعار، بسهولة تامة وتوصيل سريع.',
            },
            {
              title: 'خدمات الحيوانات',
              desc: 'احجز خدمات التجميل والإيواء والجلوس والتدريب الاحترافية عند الطلب.',
            },
          ],
          description:
            'حمّل تطبيق بيتس هيرو للعملاء واحصل على كل ما يحتاجه حيوانك — من التسوق إلى الاستشارات البيطرية.',
        },
        {
          id: 'vendor',
          label: 'تطبيق البائع',
          features: [
            {
              title: 'استشارة الطبيب',
              desc: 'قدّم استشارات طبية متخصصة لمرضاك عبر الإنترنت وفي العيادة بالفيديو.',
            },
            {
              title: 'مزود الخدمة',
              desc: 'تواصل مع أصحاب الحيوانات للتجميل والجلوس والإيواء والمزيد عبر التطبيق.',
            },
            {
              title: 'المحفظة والمعاملات',
              desc: 'أدر جميع معاملاتك بأمان — منتجات أو خدمات أو استشارات — في مكان واحد.',
            },
          ],
          description:
            'انضم إلى بيتس هيرو كبائع أو طبيب أو مزود خدمة وطوّر عملك بالتواصل مع آلاف أصحاب الحيوانات.',
        },
      ],
      googlePlay: 'Google Play',
      appStore: 'App Store',
      happyPets: 'آلاف الحيوانات السعيدة',
    },

    // ── CEO ─────────────────────────────────────────────────
    ceo: {
      badge: '👔 القيادة 🐾',
      heading: 'المؤسس والرئيس التنفيذي 🌟',
      name: 'م. يزيد',
      title: 'المؤسس والرئيس التنفيذي',
      location: 'الرياض، المملكة العربية السعودية',
      quote:
        'مدير مالي استراتيجي وموجّه نحو النتائج بخبرة قيادية تمتد لأكثر من 18 عاماً في مختلف الأعمال. متمكن من بناء فرق عالية الأداء وتحقيق النمو المالي. يشغل حالياً منصب رئيس لجنة المراجعة وعضو مجلس إدارة في شركات مدرجة وغير مدرجة.',
      credentials: [
        { label: 'CPA', desc: 'محاسب قانوني معتمد' },
        { label: 'SOCPA', desc: 'الهيئة السعودية للمحاسبين القانونيين' },
        { label: 'ASA', desc: 'مقيّم أول معتمد' },
        { label: 'CME1', desc: 'تنفيذي أسواق رأس المال' },
      ],
      venturesHeading: 'المشاريع التي أسسها أو شارك في تأسيسها',
      ventures: [
        { name: 'مالا لتقييم الأعمال', emoji: '📊' },
        { name: 'مكتب يزيد الحياف للمحاسبة', emoji: '📈' },
        { name: 'نبت', emoji: '🌱' },
        { name: 'أمين كير', emoji: '❤️' },
        { name: 'بيتس هيرو', emoji: '🐾' },
      ],
      trusteeHeading: 'أمين إفلاس معتمد',
      trusteeParagraph:
        'بخبرة عميقة في تقييم الأعمال والنمو المالي وريادة الأعمال، يقود م. يزيد بيتس هيرو برؤية ثاقبة — جامعاً بين شغف الابتكار والخبرة المالية العالمية.',
      stats: [
        { value: '+18', label: 'سنوات خبرة' },
        { value: '+5', label: 'مشاريع مؤسَّسة' },
        { value: '4', label: 'شهادات مهنية' },
      ],
    },

    // ── FindUs ──────────────────────────────────────────────
    findUs: {
      badge: 'الموقع 📍',
      heading: 'موقعنا 🗺️',
      subheading: 'زر مكتبنا أو تواصل معنا — نحن دائماً هنا لمساعدتك في احتياجات رعاية حيوانك.',
      address: 'العنوان',
      addressLines: ['6746 أحمد فتحي زغلول 2599،', 'حي التعاون،', 'الرياض، المملكة العربية السعودية'],
      phone: 'الهاتف',
      hours: 'أوقات العمل',
      hoursLines: ['الأحد – الخميس: 9:00 ص – 6:00 م', 'الجمعة – السبت: مغلق'],
    },

    // ── Footer ──────────────────────────────────────────────
    footer: {
      tagline:
        'شريكك لرعاية حيوانك الأليف 🐾 — نربطك بالخدمات والمنتجات والرعاية البيطرية المتخصصة في المملكة العربية السعودية.',
      quickLinks: 'روابط سريعة 🦴',
      connectWithUs: 'تواصل معنا ❤️',
      address: '📍 حي التعاون، الرياض، المملكة العربية السعودية',
      copyright: '🐾 © 2026 بيتس هيرو. جميع الحقوق محفوظة. 🐾',
    },
  },
};
