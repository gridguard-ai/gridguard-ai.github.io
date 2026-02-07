/**
 * GridGuard Landing Page Constants
 * Centralized configuration for all product text, images, and settings.
 */

// ========================================
// Brand & Product Info
// ========================================
export const BRAND = {
  name: 'GridGuard',
  tagline: 'Keep essential power on — smarter, greener backup for your home.',
  description: 'We repurpose recycled Li-ion cells into modular home battery packs that plug into any wall outlet and power essential devices during outages.',
  year: new Date().getFullYear(),
};

// ========================================
// Images Configuration
// ========================================
export const IMAGES = {
  heroProduct: '/assets/placeholder-product.svg',
  heroBg: '/assets/newyorkoutage_enchanced.jpg',
};

// ========================================
// Navigation Links
// ========================================
export const NAV_LINKS = [
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
  { id: 'specs', label: 'Specs', href: '#specs' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
];

// ========================================
// Hero Section
// ========================================
export const HERO = {
  headline: 'Make your home',
  rotatingWords: [
    { word: 'smarter', color: '#F59E0B' },
    { word: 'greener', color: '#34D399' },
    { word: 'safer', color: '#FBBF24' },
  ],
  description: 'We repurpose recycled Li-ion cells into modular home battery packs that plug into any wall outlet and power essential devices during outages.',
  ctaText: 'Get Notified',
  ctaHref: '#cta',
  secondaryCtaText: 'Learn More',
  secondaryCtaHref: '#features',
};

// ========================================
// Features Section
// ========================================
export const FEATURES = {
  sectionTitle: 'Why GridGuard?',
  sectionSubtitle: 'Simple, sustainable backup power that just works.',
  items: [
    {
      id: 'backup-automation',
      title: 'Automatic Backup',
      description: 'Seamless switchover during outages. Your essentials stay powered without lifting a finger.',
      icon: 'lightning',
      color: 'primary',
    },
    {
      id: 'plug-and-play',
      title: 'Plug & Play',
      description: 'No electrician needed. Simply plug into any standard outlet and you\'re protected.',
      icon: 'plug',
      color: 'brown',
    },
    {
      id: 'sustainable',
      title: 'Recycled Cells',
      description: 'Built from tested, repurposed Li-ion cells. Great for the planet, great for your wallet.',
      icon: 'recycle',
      color: 'eco',
    },
  ],
};

// ========================================
// How It Works Section
// ========================================
export const HOW_IT_WORKS = {
  sectionTitle: 'How It Works',
  sectionSubtitle: 'From recycled cells to reliable power in three simple steps.',
  steps: [
    {
      id: 'step-1',
      number: '01',
      title: 'Collection & Testing',
      description: 'We source retired battery cells from EVs and electronics, rigorously testing each one for safety and capacity.',
    },
    {
      id: 'step-2',
      number: '02',
      title: 'Assembly & BMS',
      description: 'Qualified cells are assembled into modules with a smart Battery Management System for optimal performance and safety.',
    },
    {
      id: 'step-3',
      number: '03',
      title: 'Install & Auto Backup',
      description: 'Plug in your GridGuard unit. It charges from the grid and automatically powers your essentials during outages.',
    },
  ],
};

// ========================================
// Specifications Section
// ========================================
export const SPECS = {
  sectionTitle: 'Technical Specifications',
  sectionSubtitle: 'Built for reliability, designed for your home.',
  items: [
    { id: 'capacity', label: 'Battery Capacity', value: '2 kWh', description: 'Per module, expandable up to 10 kWh', icon: 'battery', color: 'primary' },
    { id: 'output', label: 'Output', value: '120V AC', description: 'Standard household outlet + 2x USB-A, 1x USB-C', icon: 'outlet', color: 'primary' },
    { id: 'power', label: 'Continuous Power', value: '1,500W', description: 'Peak 2,000W for motor startup', icon: 'power', color: 'eco' },
    { id: 'safety', label: 'Safety Certified', value: 'UL Listed', description: 'FCC, CE certified. Built-in overcharge protection', icon: 'shield', color: 'brown' },
    { id: 'dimensions', label: 'Dimensions', value: '15" × 10" × 8"', description: 'Compact footprint, ~35 lbs per module', icon: 'dimensions', color: 'eco' },
    { id: 'warranty', label: 'Warranty', value: '5 Years', description: 'Full replacement warranty included', icon: 'warranty', color: 'brown' },
  ],
};

// ========================================
// FAQ Section
// ========================================
export const FAQ = {
  sectionTitle: 'Frequently Asked Questions',
  sectionSubtitle: 'Everything you need to know about GridGuard.',
  items: [
    { id: 'faq-1', question: 'How long will GridGuard power my home during an outage?', answer: 'A single 2 kWh module can power essential devices (router, phone chargers, LED lights, small fridge) for 8-12 hours depending on usage. You can stack multiple modules for extended runtime.' },
    { id: 'faq-2', question: 'Is it safe to use recycled battery cells?', answer: 'Absolutely. Every cell undergoes rigorous testing for capacity, internal resistance, and safety before being approved for use. Our Battery Management System continuously monitors each cell and provides multi-layer protection.' },
    { id: 'faq-3', question: 'Do I need an electrician to install GridGuard?', answer: 'No! GridGuard is truly plug-and-play. Simply plug it into any standard 120V outlet. For whole-home backup integration, we recommend professional installation.' },
    { id: 'faq-4', question: 'How does the automatic backup work?', answer: 'GridGuard continuously monitors your power connection. When it detects an outage, it switches to battery power in milliseconds — so fast that sensitive electronics won\'t even notice the transition.' },
    { id: 'faq-5', question: 'Can I expand my GridGuard system later?', answer: 'Yes! GridGuard is modular by design. Start with one unit and add more modules as your needs grow. Each module connects seamlessly for increased capacity.' },
  ],
};

// ========================================
// CTA Section
// ========================================
export const CTA = {
  badge: 'Quick Feedback',
  headline: 'Help Shape GridGuard',
  subheadline: 'Take our quick survey and help us build the backup power solution you need.',
  buttonText: 'Take the Survey',
  formUrl: 'https://forms.fillout.com/t/cZ91LeNhM8us',
  note: 'Takes less than 2 minutes. Your feedback helps us build a better product.',
};

// ========================================
// Footer
// ========================================
export const FOOTER = {
  description: 'Sustainable backup power for modern homes. Built from recycled batteries, designed for reliability.',
  links: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  socialLinks: [
    { label: 'Twitter', href: '#', icon: 'twitter' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
  ],
};
