import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../../constants';

export default function Services() {
  return (
    <section id="services" className="p-10 md:p-16 bg-white">
      <div className="mb-16">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Core Capabilities</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Sector-Specific <br /> Expertise.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => {
          const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-primary/30 transition-all hover:bg-white hover:shadow-xl hover:shadow-brand-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-primary-light flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                <IconComponent className="w-6 h-6 text-brand-primary group-hover:text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
