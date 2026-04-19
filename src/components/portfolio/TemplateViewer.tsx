import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Layout, Shield, Home, Mail, Globe, Cpu, Zap, CreditCard } from 'lucide-react';
import { PortfolioItem } from '../../types';

interface TemplateViewerProps {
  item: PortfolioItem;
  onExit: () => void;
  onSelect: () => void;
}

export default function TemplateViewer({ item, onExit, onSelect }: TemplateViewerProps) {
  const isStarter = item.tier === 'Starter';
  const isStandard = item.tier === 'Standard';
  const isPremium = item.tier === 'Premium';

  return (
    <div className="absolute inset-0 bg-white z-[110] flex flex-col">
      {/* Simulation Header */}
      <div className="h-14 bg-slate-900 flex items-center justify-between px-6 shrink-0 shadow-2xl z-20">
        <div className="flex items-center gap-4">
          <button 
            onClick={onExit}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            Back to Specs
          </button>
          <div className="h-4 w-[1px] bg-slate-800 mx-2" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Live Experience Simulation</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
           <div className="px-3 py-1 rounded bg-slate-800 text-slate-400 text-[10px] font-mono uppercase">
             Tier: <span className="text-brand-primary font-bold">{item.tier}</span>
           </div>
           <button 
            onClick={onSelect}
            className="bg-brand-primary hover:bg-brand-primary-dark text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-lg shadow-brand-primary/20"
           >
             Inquire
           </button>
        </div>
      </div>

      {/* Simulated Website Frame */}
      <div className="flex-1 overflow-y-auto bg-slate-50 relative custom-scrollbar">
        {/* Simulated Site Nav */}
        <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xs italic">
              {item.title.charAt(0)}
            </div>
            <span className="font-bold text-slate-900 tracking-tighter uppercase">{item.title}</span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <span className="text-brand-primary">Home</span>
              {(isStandard || isPremium) && <span>Services</span>}
              {(isStandard || isPremium) && <span>About</span>}
              {isPremium && <span>Products</span>}
            </div>
            <div className="flex items-center gap-4 text-slate-900">
               {isPremium && <ShoppingCart size={18} className="cursor-pointer hover:text-brand-primary transition-colors" />}
               <Mail size={18} className="cursor-pointer hover:text-brand-primary transition-colors" />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="p-8 md:p-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em] mb-4 block">Selected Design: {item.category}</span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8 uppercase italic underline decoration-slate-200 underline-offset-8">
               Modern Solutions <br /> For {item.category}
            </h1>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto mb-10">
               {item.description} Built with performance as a priority and aesthetic as an absolute.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-slate-900/10">
                 Explore Now
               </button>
               {isStarter && (
                 <p className="w-full mt-6 text-[10px] text-slate-400 font-mono italic">
                   Note: Starter pack provides high-conversion landing page architecture.
                 </p>
               )}
            </div>
          </motion.div>
        </div>

        {/* Featured Visual Grid */}
        <div className="px-8 md:px-20 pb-20">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden relative group">
                <img src={item.image} alt="Feature 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Visual Strategy</div>
                  <div className="text-xl font-bold tracking-tight">Immersive Branding</div>
                </div>
              </div>
              
              {/* Conditional Tier Features */}
              {(isStandard || isPremium) ? (
                <>
                  <div className="aspect-square bg-white rounded-3xl p-10 flex flex-col justify-center border border-slate-100 hover:shadow-2xl transition-shadow group">
                    <Layout className="w-10 h-10 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold tracking-tighter mb-4 text-slate-900">Service Architecture</h3>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">Dynamic service listings with dedicated sub-pages for each category.</p>
                  </div>
                  <div className="aspect-square bg-brand-primary-light rounded-3xl p-10 flex flex-col border border-brand-primary-light group">
                    <Shield className="w-10 h-10 text-brand-primary mb-6 group-hover:rotate-12 transition-transform" />
                    <div className="mt-auto">
                       <h3 className="text-2xl font-bold tracking-tighter mb-2 text-slate-900 italic">Enterprise Security</h3>
                       <p className="text-sm text-brand-primary font-medium uppercase tracking-widest text-[9px]">Included in Standard Pack</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="col-span-1 md:col-span-2 aspect-[2/1] md:aspect-auto bg-slate-100 rounded-3xl flex items-center justify-center p-12 border border-dashed border-slate-300">
                  <p className="text-slate-400 uppercase tracking-widest text-xs font-bold italic">Upgrade to Standard for expanded pages & sections</p>
                </div>
              )}
           </div>

           {/* Premium Exclusive Simulation */}
           {isPremium && (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mt-20 p-12 md:p-20 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative"
             >
                <div className="absolute top-0 right-0 p-12 opacity-10">
                   <Zap className="w-64 h-64 text-brand-primary" />
                </div>
                
                <div className="max-w-2xl relative z-10">
                   <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em] mb-6 block font-mono">Premium Elite Features</span>
                   <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none uppercase">Full E-Commerce <br /> & Automations.</h2>
                   
                   <div className="grid grid-cols-2 gap-8 mb-12">
                      <div className="space-y-2">
                         <CreditCard className="w-8 h-8 text-brand-primary" />
                         <div className="text-sm font-bold">Smart Checkout</div>
                         <p className="text-xs text-slate-400 leading-relaxed font-light">Integrated payment processors with 1-click buy sequences.</p>
                      </div>
                      <div className="space-y-2">
                         <Cpu className="w-8 h-8 text-brand-primary" />
                         <div className="text-sm font-bold">Stock Automations</div>
                         <p className="text-xs text-slate-400 leading-relaxed font-light">Real-time inventory sync across all your digital channels.</p>
                      </div>
                   </div>

                   <button className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-slate-900 transition-colors">
                     View Merchant Dashboard
                   </button>
                </div>
             </motion.div>
           )}

           {/* Landing Elements for all */}
           <div className="mt-20 border-t border-slate-100 pt-20 flex flex-col md:flex-row justify-between items-center gap-8 bg-white p-12 rounded-[2rem] shadow-sm">
             <div>
                <h4 className="text-3xl font-black text-slate-900 tracking-tighter mb-2 uppercase">Ready to go live?</h4>
                <p className="text-sm text-slate-400 font-light">Host your {item.category} presence on our ultra-fast architecture.</p>
             </div>
             <div className="flex gap-4">
                <Globe className="text-slate-200" size={32} />
                <Home className="text-slate-200" size={32} />
                <Zap className="text-brand-primary" size={32} />
             </div>
           </div>
        </div>

        {/* Simulated Site Footer */}
        <footer className="bg-white border-t border-slate-100 px-8 py-20">
           <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
              <div className="space-y-6">
                 <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white font-bold text-[10px]">
                       {item.title.charAt(0)}
                    </div>
                    <span className="font-bold text-slate-900 text-xs tracking-widest uppercase">{item.title}</span>
                 </div>
                 <p className="text-xs text-slate-400 font-light max-w-xs">{item.description}</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                 <div className="space-y-4">
                    <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Connect</div>
                    <div className="flex flex-col gap-2 text-xs text-slate-400">
                       <span>LinkedIn</span>
                       <span>X (Twitter)</span>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Legal</div>
                    <div className="flex flex-col gap-2 text-xs text-slate-400">
                       <span>Privacy</span>
                       <span>Terms</span>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="mt-20 text-center border-t border-slate-50 pt-8">
              <p className="text-[10px] text-slate-300 font-mono tracking-widest uppercase">
                Simulated Architecture by Acadia Studio &copy; 2026
              </p>
           </div>
        </footer>
      </div>
    </div>
  );
}
