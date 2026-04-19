import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="p-10 md:p-16 border-b border-slate-100 flex flex-col md:flex-row justify-between items-end gap-8 bg-white" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4 block">Crafting Digital Architecture</span>
        <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Premium Web <br /> Development.
        </h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10">
          Acadia builds robust, scalable e-commerce solutions tailored for specialized industries that demand precision and performance.
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="#pricing"
            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold transition-all hover:bg-brand-primary flex items-center gap-2 group text-sm"
          >
            Select A Package
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#portfolio"
            className="px-8 py-4 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl font-bold hover:bg-slate-100 transition-all text-sm"
          >
            View Recent Work
          </a>
        </div>
      </motion.div>
      
      <div className="text-right hidden xl:block mb-2">
        <span className="text-8xl font-black text-slate-50 select-none">EST. 2024</span>
      </div>
    </header>
  );
}
