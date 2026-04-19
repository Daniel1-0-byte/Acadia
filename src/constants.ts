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
    title: 'Bistro Express',
    description: 'A clean, single-page site for local eateries focused on fast menu browsing.',
    image: 'https://picsum.photos/seed/bistro/800/600',
    features: ['Digital Menu', 'Contact Info', 'Responsive Layout'],
  },
  {
    id: 'rest-standard',
    category: 'Restaurants',
    tier: 'Standard',
    title: 'Gourmet Hub',
    description: 'Multi-page solution with online reservation and feedback system.',
    image: 'https://picsum.photos/seed/gourmet/800/600',
    features: ['Table Booking', 'Gallery', 'Customer Reviews'],
  },
  {
    id: 'rest-premium',
    category: 'Restaurants',
    tier: 'Premium',
    title: 'Dining Elite',
    description: 'Enterprise-grade platform with custom loyalty programs and full POS integration.',
    image: 'https://picsum.photos/seed/dining/800/600',
    features: ['Loyalty App', 'POS Sync', 'Advanced Analytics'],
  },
  // Groceries
  {
    id: 'groc-starter',
    category: 'Groceries',
    tier: 'Starter',
    title: 'QuickMark',
    description: 'Basic inventory listing for neighborhood grocery shops.',
    image: 'https://picsum.photos/seed/market/800/600',
    features: ['Product Search', 'Opening Hours', 'Simple Cart'],
  },
  {
    id: 'groc-premium',
    category: 'Groceries',
    tier: 'Premium',
    title: 'FreshFlow Enterprise',
    description: 'AI-driven replenishment and subscription-based delivery platform.',
    image: 'https://picsum.photos/seed/fresh/800/600',
    features: ['Auto-reorder', 'Real-time Tracking', 'Bulk Discounts'],
  },
  // Clothing
  {
    id: 'cloth-standard',
    category: 'Clothing',
    tier: 'Standard',
    title: 'Urban Stitch',
    description: 'Elegant e-commerce for emerging fashion brands.',
    image: 'https://picsum.photos/seed/fashion/800/600',
    features: ['Size Guides', 'Lookbook', 'Payment Integration'],
  },
  // Electrical
  {
    id: 'elec-premium',
    category: 'Electrical',
    tier: 'Premium',
    title: 'VoltConsult Pro',
    description: 'Client dashboard and project management portal for electrical firms.',
    image: 'https://picsum.photos/seed/tech/800/600',
    features: ['Client Portal', 'Document Signing', 'Milestone Tracking'],
  },
  // Mechanical
  {
    id: 'mech-standard',
    category: 'Mechanical',
    tier: 'Standard',
    title: 'GearWorks',
    description: 'Service scheduling and parts catalog for workshops.',
    image: 'https://picsum.photos/seed/workshop/800/600',
    features: ['Service Booking', 'Parts Inventory', 'Quotes System'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'Urban Stitch',
    quote: "Arcadia didn't just build a website; they engineered a growth engine. Our conversion rate increased by 45% within the first month of launch.",
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Operations Director',
    company: 'FreshFlow Enterprise',
    quote: "The technical precision of their architecture is unmatched. We've scaled to 10k daily orders without a single second of downtime.",
    avatar: 'https://picsum.photos/seed/marcus/100/100',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'Bistro Express',
    quote: "Professional, transparent, and incredibly fast. They understood our brand immediately and delivered a platform that feels like fine craftsmanship.",
    avatar: 'https://picsum.photos/seed/elena/100/100',
  },
];
