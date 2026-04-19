export type Category = 'Restaurants' | 'Groceries' | 'Electrical' | 'Mechanical' | 'Clothing';
export type Tier = 'Starter' | 'Standard' | 'Premium';

export interface PortfolioItem {
  id: string;
  category: Category;
  tier: Tier;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}
