import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="p-10 md:p-16 bg-slate-50 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">The Studio</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              Engineering Digital <br /> Experiences with <br /> Craftsmanship.
            </h3>
            
            <div className="space-y-6 text-sm text-slate-500 font-light leading-relaxed">
              <p>
                Arcadia exists at the intersection of high-technology and artisanal digital craft. We believe 
                that the architecture of an e-commerce platform should be as robust as a modern skyscraper 
                yet as finely detailed as a bespoke timepiece.
              </p>
              <p>
                Our team brings transparency and scalability to every project, ensuring that your 
                business isn't just online, but truly optimized for the global market.
              </p>
            </div>

            <div className="mt-12 space-y-6 border-t border-slate-200 pt-12">
              <div className="flex gap-4">
                <div className="text-brand-indigo font-bold text-lg">01</div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">Transparency</div>
                  <p className="text-[11px] text-slate-400">Open code, honest pricing, and clear milestones.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-brand-indigo font-bold text-lg">02</div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">Scalability</div>
                  <p className="text-[11px] text-slate-400">Engineered to support growth from small shop to enterprise.</p>
                </div>
              </div>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl shadow-slate-200 overflow-hidden">
               <img 
                src="https://picsum.photos/seed/arch-new/1200/800" 
                alt="Architecture" 
                className="rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-1000 w-full hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-10 -left-10 p-10 bg-slate-900 rounded-3xl text-white shadow-2xl hidden md:block">
              <div className="text-4xl font-extrabold mb-1 font-mono tracking-tighter">100%</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Built In-House</div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
