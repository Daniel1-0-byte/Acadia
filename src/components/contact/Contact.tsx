import { motion } from 'motion/react';
import { Send, Mail, MapPin, MessageSquare } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="p-10 md:p-16 bg-white border-t border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Connect</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">
            Let's Scale Your <br /> Vision Together.
          </h3>
          
          <p className="text-sm text-slate-500 font-light mb-12 max-w-md leading-relaxed">
            Ready to lead your industry? Reach out for a consultation or a custom quote 
            for your next digital venture.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-brand-indigo" />
              </div>
              <div className="text-xs font-bold text-slate-900 tracking-wide uppercase">partnerships@arcadia.dev</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-brand-indigo" />
              </div>
              <div className="text-xs font-bold text-slate-900 tracking-wide uppercase">Creative Labs, Silicon Valley, CA</div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200 relative overflow-hidden"
        >
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
                <Send size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Request Transmitted</h4>
              <p className="text-slate-500 text-sm">We'll review your project details and respond within 24 hours.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-brand-indigo hover:underline text-xs font-bold uppercase tracking-widest"
              >
                Send New Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Firm Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-indigo transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-indigo transition-colors"
                    placeholder="jane@acme.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Inquiry Type</label>
                <select 
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-indigo transition-colors appearance-none cursor-pointer"
                >
                  <option>E-commerce Solution</option>
                  <option>Platform Optimization</option>
                  <option>Digital Strategy</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Description</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-indigo transition-colors"
                  placeholder="Tell us about your mission..."
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-slate-900 hover:bg-brand-indigo text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50 flex items-center justify-center gap-3 mt-4"
              >
                {status === 'sending' ? 'Transmitting...' : 'Submit Request'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
