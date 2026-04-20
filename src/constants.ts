import { PortfolioItem, Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    title: 'Custom Web Development',
    description: 'Bespoke high-performance websites tailored to your unique business needs and scalable growth.',
    icon: 'Code2',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete digital storefronts with secure payment integration and seamless inventory management.',
    icon: 'ShoppingCart',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric design focused on conversion, accessibility, and breathtaking visual aesthetics.',
    icon: 'Palette',
  },
  {
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems to improve efficiency and competitiveness in a digital-first world.',
    icon: 'Zap',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  // Restaurants
  {
    id: 'rest-starter',
    category: 'Restaurants',
    tier: 'Starter',
    title: 'Asanka Delight',
    description: 'A clean, single-page site for local eateries focused on fast menu browsing.',
    image: '/assets/rest-starter.svg',
    features: ['Digital Menu', 'Contact Info', 'Responsive Layout'],
  },
  {
    id: 'rest-standard',
    category: 'Restaurants',
    tier: 'Standard',
    title: 'Oseikrom Kitchen',
    description: 'Multi-page solution with online reservation and feedback system.',
    image: '/assets/rest-standard.svg',
    features: ['Table Booking', 'Gallery', 'Customer Reviews'],
  },
  {
    id: 'rest-premium',
    category: 'Restaurants',
    tier: 'Premium',
    title: 'Abeade Premium',
    description: 'Enterprise-grade platform with custom loyalty programs and full POS integration.',
    image: '/assets/rest-premium.svg',
    features: ['Loyalty App', 'POS Sync', 'Advanced Analytics'],
  },
  // Groceries
  {
    id: 'groc-starter',
    category: 'Groceries',
    tier: 'Starter',
    title: 'Makola Express',
    description: 'Basic inventory listing for neighborhood grocery shops.',
    image: '/assets/groc-starter.svg',
    features: ['Product Search', 'Opening Hours', 'Simple Cart'],
  },
  {
    id: 'groc-premium',
    category: 'Groceries',
    tier: 'Premium',
    title: 'AgroMind Ghana',
    description: 'AI-driven replenishment and subscription-based delivery platform.',
    image: '/assets/groc-premium.svg',
    features: ['Auto-reorder', 'Real-time Tracking', 'Bulk Discounts'],
  },
  // Clothing
  {
    id: 'cloth-standard',
    category: 'Clothing',
    tier: 'Standard',
    title: 'Kente Heritage',
    description: 'Elegant e-commerce for emerging fashion brands.',
    image: '/assets/cloth.svg',
    features: ['Size Guides', 'Lookbook', 'Payment Integration'],
  },
  // Electrical
  {
    id: 'elec-premium',
    category: 'Electrical',
    tier: 'Premium',
    title: 'Akosombo Grid Solutions',
    description: 'Client dashboard and project management portal for electrical firms.',
    image: '/assets/elec.svg',
    features: ['Client Portal', 'Document Signing', 'Milestone Tracking'],
  },
  // Mechanical
  {
    id: 'mech-standard',
    category: 'Mechanical',
    tier: 'Standard',
    title: 'GearMaster Takoradi',
    description: 'Service scheduling and parts catalog for workshops.',
    image: '/assets/mech.svg',
    features: ['Service Booking', 'Parts Inventory', 'Quotes System'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ama Serwaa',
    role: 'CEO',
    company: 'Kente Heritage',
    quote: "Acadia didn't just build a website; they engineered a growth engine. Our conversion rate increased by 45% within the first month of launch.",
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '2',
    name: 'Kwame Boakye',
    role: 'Operations Director',
    company: 'AgroMind Ghana',
    quote: "The technical precision of their architecture is unmatched. We've scaled to 10k daily orders without a single second of downtime.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '3',
    name: 'Akosua Antwi',
    role: 'Founder',
    company: 'Asanka Delight',
    quote: "Professional, transparent, and incredibly fast. They understood our brand immediately and delivered a platform that feels like fine craftsmanship.",
    avatar: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?auto=format&fit=crop&q=80&w=200&h=200',
  },
];
