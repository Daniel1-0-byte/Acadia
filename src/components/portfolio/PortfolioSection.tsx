import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO } from '../../constants';
import { Category, Tier, PortfolioItem } from '../../types';
import { ChevronRight, ArrowUpRight, X, ExternalLink, Smartphone, Monitor, Globe, LayoutTemplate } from 'lucide-react';
import TemplateViewer from './TemplateViewer';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [activeTier, setActiveTier] = useState<Tier | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [viewMode, setViewMode] = useState<'specs' | 'template'>('specs');

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

                <button 
                  onClick={() => setSelectedProject(item)}
                  className="mt-8 w-full py-3 bg-slate-50 group-hover:bg-brand-indigo text-slate-900 group-hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
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

      {/* Project Preview Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-xl p-4 md:p-10 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="bg-white w-full max-w-6xl rounded-[3rem] shadow-2xl overflow-hidden relative min-h-[80vh] flex flex-col"
            >
              <button 
                onClick={() => { setSelectedProject(null); setViewMode('specs'); }}
                className="absolute top-8 right-8 z-[120] w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
              >
                <X size={20} />
              </button>

              <AnimatePresence mode="wait">
                {viewMode === 'specs' ? (
                  <motion.div 
                    key="specs"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col lg:flex-row h-full flex-1"
                  >
                    {/* Visual Preview Side */}
                    <div className="flex-1 bg-white p-0 overflow-y-auto flex flex-col">
                    {/* Immersive Visual Header */}
                    <div className="relative h-[400px] bg-slate-900 overflow-hidden group/hero shrink-0">
                      <img 
                        src={selectedProject.image} 
                        alt="Immersive Preview" 
                        className="w-full h-full object-cover opacity-60 group-hover/hero:scale-110 transition-transform duration-[3000ms]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-12">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <span className="text-[10px] font-bold text-brand-indigo uppercase tracking-[0.4em] mb-3 block">Digital Architecture Preview</span>
                          <h5 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-none uppercase">
                            {selectedProject.title}
                          </h5>
                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <Globe size={14} className="text-slate-400" />
                              <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest">Live Experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Monitor size={14} className="text-slate-400" />
                              <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest">Optimized Core</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    <div className="p-8 md:p-12">
                      {/* Visual Aesthetic Summary */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div>
                          <h6 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Atmosphere & Mood</h6>
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0">
                                  <Monitor className="w-5 h-5 text-brand-indigo" />
                               </div>
                               <div>
                                  <div className="text-xs font-bold text-slate-900 uppercase">Fluid Layout</div>
                                  <p className="text-[11px] text-slate-400">Adaptive grids that shift seamlessly across breakpoints.</p>
                               </div>
                            </div>
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0">
                                  <Globe className="w-5 h-5 text-brand-indigo" />
                               </div>
                               <div>
                                  <div className="text-xs font-bold text-slate-900 uppercase">Micro-Interactions</div>
                                  <p className="text-[11px] text-slate-400">Thoughtful animations that guide user attention.</p>
                               </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Crafted Elements</h6>
                          <div className="flex gap-4 items-end">
                             <div className="space-y-2">
                                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Palette</div>
                                <div className="flex gap-2">
                                   <div className="w-10 h-10 rounded-lg bg-orange-900 border border-white/10 shadow-lg" style={{ backgroundColor: selectedProject.category === 'Restaurants' ? '#7c2d12' : '#0f172a' }}></div>
                                   <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200"></div>
                                   <div className="w-10 h-10 rounded-lg bg-brand-indigo shadow-lg shadow-indigo-500/20"></div>
                                </div>
                             </div>
                             <div className="ml-auto text-right">
                                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-2">Typography</div>
                                <div className="text-2xl font-black text-slate-900 tracking-tighter leading-none italic uppercase">Inter / JB Mono</div>
                             </div>
                          </div>
                        </div>
                      </div>

                      {/* Technical Specification Section (Moved Down) */}
                      <div className="border-t border-slate-100 pt-16">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                               <h5 className="text-2xl font-extrabold text-slate-900 tracking-tight">Technical Specification</h5>
                               <p className="text-sm text-slate-500 font-light leading-relaxed">
                                  Optimized for the {selectedProject.category} market, this platform utilizes high-concurrency architecture 
                                  to manage peak traffic surges while maintaining aesthetic integrity.
                               </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                               <div className="p-6 bg-slate-900 rounded-3xl text-white shadow-2xl shadow-slate-900/20">
                                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Performance</div>
                                  <div className="text-3xl font-black text-brand-indigo tracking-tight">99%</div>
                               </div>
                               <div className="p-6 bg-indigo-50 rounded-3xl">
                                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Stability</div>
                                  <div className="text-3xl font-black text-brand-indigo tracking-tight">99.9</div>
                               </div>
                            </div>
                         </div>
                      </div>
                    </div>
                  </div>

                {/* Project Details Side */}
                <div className="w-full lg:w-[400px] p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="px-3 py-1 bg-indigo-50 text-brand-indigo text-[10px] font-bold rounded-full uppercase tracking-widest">
                        {selectedProject.tier} Edition
                      </span>
                    </div>
                    <h4 className="text-4xl font-extrabold text-slate-900 tracking-tighter mb-4 leading-none">{selectedProject.title}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
                       Designed for market leaders in the {selectedProject.category} sector. {selectedProject.description}
                    </p>

                    <div className="space-y-6 border-t border-slate-100 pt-8">
                       <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Integrated Features</h5>
                       <ul className="grid grid-cols-1 gap-4">
                          {selectedProject.features.map(f => (
                            <li key={f} className="flex items-start gap-3">
                               <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                  <ChevronRight className="w-3 h-3 text-brand-indigo" />
                               </div>
                               <span className="text-xs text-slate-600 font-medium">{f}</span>
                            </li>
                          ))}
                       </ul>
                    </div>
                  </div>

                  <div className="mt-12 space-y-3">
                     <a 
                      href="#contact" 
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-5 bg-brand-indigo text-white rounded-2xl flex items-center justify-center gap-3 font-bold text-sm shadow-xl shadow-indigo-500/20 hover:bg-indigo-700 transition-all"
                    >
                       Engineer This For Me
                       <ArrowUpRight size={18} />
                     </a>
                     <button 
                       onClick={() => setViewMode('template')}
                       className="w-full py-4 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center gap-3 font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all border border-slate-200"
                     >
                        <LayoutTemplate size={16} />
                        View Interactive Template
                     </button>
                     <button 
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-4 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 hover:bg-slate-100 rounded-2xl font-bold text-xs uppercase tracking-widest"
                    >
                       Return to Gallery
                     </button>
                     <div className="flex items-center justify-center gap-6 text-slate-300 pt-4">
                        <Monitor size={14} />
                        <Smartphone size={14} />
                        <Globe size={14} />
                     </div>
                  </div>
                </div>
              </motion.div>
                ) : (
                  <motion.div
                    key="template"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex-1 relative"
                  >
                    <TemplateViewer 
                      item={selectedProject} 
                      onExit={() => setViewMode('specs')}
                      onSelect={() => { setSelectedProject(null); setViewMode('specs'); window.location.hash = 'contact'; }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
