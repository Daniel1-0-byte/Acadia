import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const PACKS = [
  {
    name: 'Starter Pack',
    price: '$1,499',
    description: 'Perfect for small local businesses looking to establish a digital presence.',
    features: [
      'Custom Landing Page',
      'Mobile Responsive',
      'Standard Contact Form',
      'Basic SEO Setup',
    ],
    popular: false,
    delay: 0,
  },
  {
    name: 'Standard Pack',
    price: '$3,999',
    description: 'Comprehensive solution for growing shops needing e-commerce features.',
    features: [
      'Full E-commerce Engine',
      'SEO Optimization',
      'Sector-specific plugins',
      'Inventory Management',
    ],
    popular: true,
    delay: 0.1,
  },
  {
    name: 'Premium Pack',
    price: '$8,500+',
    description: 'Bespoke enterprise platforms with advanced custom integrations.',
    features: [
      'Custom API Integrations',
      'Advanced Data Security',
      'Dedicated Support Lead',
      'Performance Optimization'
    ],
    popular: false,
    delay: 0.2,
  }
];

export default function PricingTiers() {
  return (
    <section className="p-10 md:p-16 bg-white border-t border-slate-50">
      <div className="mb-16">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Investment</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Service Packages.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PACKS.map((pack) => (
          <motion.div
            key={pack.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: pack.delay }}
            viewport={{ once: true }}
            className={`relative p-10 rounded-[2rem] border transition-all ${
              pack.popular 
                ? 'bg-indigo-50 border-indigo-200 shadow-xl shadow-indigo-500/5' 
                : 'bg-white border-slate-100 hover:border-slate-300'
            }`}
          >
            {pack.popular && (
              <div className="absolute -top-3 right-6 px-3 py-1 bg-brand-indigo text-white text-[9px] font-bold rounded-full tracking-widest uppercase">
                Popular
              </div>
            )}

            <div className="mb-8">
              <h4 className="text-sm font-bold text-brand-indigo uppercase tracking-widest mb-2">{pack.name}</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{pack.price}</span>
                <span className="text-xs text-slate-400 font-medium">/ project</span>
              </div>
              <p className="mt-4 text-xs text-slate-500 font-light leading-relaxed">
                {pack.description}
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {pack.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${pack.popular ? 'bg-white' : 'bg-slate-50'}`}>
                    <Check className="w-3 h-3 text-brand-indigo" />
                  </div>
                  <span className="text-xs text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
              pack.popular 
                ? 'bg-brand-indigo text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}>
              Select {pack.name.split(' ')[0]}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
