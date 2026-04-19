import { Orbit, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-500 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-10 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-slate-900">
              <Orbit className="w-8 h-8 text-brand-primary" />
              <span className="text-2xl font-bold tracking-tighter uppercase">ACADIA</span>
            </div>
            <p className="text-sm max-w-md leading-relaxed font-light">
              Forging the future of digital commerce. We engineer robust, scalable e-commerce ecosystems that bridge the gap between craftsmanship and high-technology.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 tracking-widest uppercase text-[10px]">Solutions</h4>
            <ul className="space-y-4 text-xs font-medium">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Enterprise E-Com</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Sector Consulting</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">UX/UI Strategy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Custom Plugins</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 tracking-widest uppercase text-[10px]">Connect</h4>
            <ul className="space-y-4 text-xs font-medium">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>hello@acadia.dev</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>+1 (555) 012-3456</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Acadia Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-primary transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-brand-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-brand-primary transition-colors"><Github className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
