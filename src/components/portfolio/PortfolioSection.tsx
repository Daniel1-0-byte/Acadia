import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO } from '../../constants';
import { Category, Tier } from '../../types';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [activeTier, setActiveTier] = useState<Tier | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'Restaurants', 'Groceries', 'Electrical', 'Mechanical', 'Clothing'];
  const tiers: (Tier | 'All')[] = ['All', 'Starter', 'Standard', 'Premium'];

  const filteredItems = useMemo(() => {
    return PORTFOLIO.filter(item => {
      const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
      const tierMatch = activeTier === 'All' || item.tier === activeTier;
      return categoryMatch && tierMatch;
    });
  }, [activeCategory, activeTier]);

  return (
    <section id="portfolio" className="p-10 md:p-16 bg-white overflow-hidden border-t border-slate-50">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Portfolios</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Design Options.</h3>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-all border ${
                  activeCategory === cat 
                    ? 'bg-slate-900 border-slate-900 text-white' 
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {tiers.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTier(t)}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-all border ${
                  activeTier === t 
                    ? 'bg-brand-indigo border-brand-indigo text-white shadow-lg shadow-indigo-500/20' 
                    : 'bg-white border-slate-200 text-slate-400 hover:border-indigo-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-200 transition-all hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-1 rounded bg-indigo-50 text-brand-indigo text-[9px] uppercase font-bold tracking-widest">
                    {item.tier}
                  </span>
                  <span className="text-slate-300 text-[10px] uppercase font-bold tracking-widest">{item.category}</span>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm font-light mb-6 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-2 border-t border-slate-50 pt-6">
                  {item.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-600">
                      <ChevronRight className="w-3 h-3 text-brand-indigo" />
                      {f}
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full py-3 bg-slate-50 group-hover:bg-brand-indigo text-slate-900 group-hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
                  Explore Case Study
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filteredItems.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center bg-slate-50 rounded-3xl mt-8">
          <p className="text-lg text-slate-400 font-light mb-4 italic">No matching architectural designs found.</p>
          <button 
            onClick={() => { setActiveCategory('All'); setActiveTier('All'); }}
            className="text-brand-indigo hover:underline font-bold text-sm tracking-wide"
          >
            Clear All Selection
          </button>
        </div>
      )}
    </section>
  );
}
