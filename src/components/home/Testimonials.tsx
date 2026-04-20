import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

export default function Testimonials() {
  return (
    <section className="p-10 md:p-16 bg-white border-t border-slate-50">
      <div className="mb-16">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Voice of the Partners</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Trust & Credibility.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
          >
            <div>
              <div className="mb-8">
                <Quote className="w-8 h-8 text-brand-primary-light group-hover:text-brand-primary transition-colors" />
              </div>
              <p className="text-slate-600 italic font-light leading-relaxed mb-10 text-sm md:text-base">
                "{testimonial.quote}"
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-slate-200 pt-8">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-2xl object-cover border border-slate-100 shadow-sm"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=0F172A&color=fff&bold=true&rounded=true`;
                }}
              />
              <div>
                <div className="text-sm font-bold text-slate-900">{testimonial.name}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                   {testimonial.role} <span className="text-brand-primary">•</span> {testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 pt-16 border-t border-slate-100">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           {['Global Logistics', 'Nexus Retail', 'Vector Labs', 'Pulse Tech', 'Titan Metal'].map(brand => (
             <span key={brand} className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter select-none">{brand}</span>
           ))}
        </div>
      </div>
    </section>
  );
}
