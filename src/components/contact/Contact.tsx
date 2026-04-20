import { motion } from 'motion/react';
import { Send, Mail, MapPin, MessageSquare, AlertCircle } from 'lucide-react';
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedFirmName, setSubmittedFirmName] = useState('');

  const [formData, setFormData] = useState({
    firmName: '',
    email: '',
    inquiryType: 'E-commerce Solution',
    description: ''
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firmName.trim()) {
      newErrors.firmName = 'Firm name is required';
    } else if (formData.firmName.length > 100) {
      newErrors.firmName = 'Firm name must be under 100 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Please provide a bit more detail (min 10 characters)';
    } else if (formData.description.length > 2000) {
      newErrors.description = 'Description must be under 2000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      
      setSubmittedFirmName(formData.firmName);
      setStatus('success');
      setFormData({
        firmName: '',
        email: '',
        inquiryType: 'E-commerce Solution',
        description: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Firestore Error:', error);
      setStatus('error');
      setErrorMessage('Transmission failure. Please verify your connection and try again.');
    }
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
              <div className="w-10 h-10 rounded-lg bg-brand-primary-light flex items-center justify-center shrink-0">
                <Mail size={18} className="text-brand-primary" />
              </div>
              <div className="text-xs font-bold text-slate-900 tracking-wide uppercase">partnerships@acadia.dev</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-primary-light flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-brand-primary" />
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
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20">
                <Send size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Thank you, {submittedFirmName}!</h4>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">Your request has been successfully transmitted. We'll review your project details and respond within 24 hours.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-brand-primary hover:underline text-xs font-bold uppercase tracking-widest"
              >
                Send New Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-xs font-medium mb-4">
                  <AlertCircle size={16} />
                  {errorMessage}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Firm Name</label>
                  <input 
                    type="text" 
                    value={formData.firmName}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, firmName: e.target.value }));
                      if (errors.firmName) setErrors(prev => ({ ...prev, firmName: '' }));
                    }}
                    className={`w-full bg-white border ${errors.firmName ? 'border-red-400' : 'border-slate-200'} rounded-xl px-5 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-primary transition-colors`}
                    placeholder="Acme Corp"
                  />
                  {errors.firmName && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider pl-1">{errors.firmName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, email: e.target.value }));
                      if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                    }}
                    className={`w-full bg-white border ${errors.email ? 'border-red-400' : 'border-slate-200'} rounded-xl px-5 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-primary transition-colors`}
                    placeholder="jane@acme.com"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider pl-1">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Inquiry Type</label>
                <select 
                  value={formData.inquiryType}
                  onChange={(e) => setFormData(prev => ({ ...prev, inquiryType: e.target.value }))}
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-primary transition-colors appearance-none cursor-pointer"
                >
                  <option>E-commerce Solution</option>
                  <option>Platform Optimization</option>
                  <option>Digital Strategy</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Description</label>
                <textarea 
                  rows={4}
                  value={formData.description}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, description: e.target.value }));
                    if (errors.description) setErrors(prev => ({ ...prev, description: '' }));
                  }}
                  className={`w-full bg-white border ${errors.description ? 'border-red-400' : 'border-slate-200'} rounded-xl px-5 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-primary transition-colors`}
                  placeholder="Tell us about your mission..."
                />
                {errors.description && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider pl-1">{errors.description}</p>}
              </div>
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-slate-900 hover:bg-brand-primary text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50 flex items-center justify-center gap-3 mt-4"
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
