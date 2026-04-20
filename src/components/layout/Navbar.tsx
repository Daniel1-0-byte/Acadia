import { motion } from 'motion/react';
import { LayoutGrid, Target, Shield, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navGroups = [
    {
      title: 'Company',
      links: [
        { name: 'Overview', href: '#hero', icon: LayoutGrid },
        { name: 'Our Mission', href: '#about', icon: Target },
        { name: 'Portfolio', href: '#portfolio' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise E-Com', href: '#services' },
        { name: 'Service Packages', href: '#pricing' },
        { name: 'UX/UI Design', href: '#services' },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg md:hidden"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside className={`
        fixed top-0 left-0 h-screen w-72 bg-brand-sidebar text-white flex flex-col p-8 border-r border-slate-800 z-40
        transition-transform duration-300 md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center font-bold text-lg">A</div>
            <h1 className="text-2xl font-bold tracking-tight uppercase">Acadia</h1>
          </div>
          <p className="text-slate-400 text-[10px] font-mono tracking-wider">DIGITAL ARCHITECTURE STUDIO</p>
        </div>

        <nav className="flex-1 space-y-8 overflow-y-auto">
          {navGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h2 className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">{group.title}</h2>
              <ul className="space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      {link.icon && <span className="w-1.5 h-1.5 rounded-full bg-brand-primary group-hover:scale-125 transition-transform"></span>}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-slate-800">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Our Mission</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-light">
            Architecting high-performance digital systems that turn ambitious visions into scalable realities.
          </p>
          <a 
            href="#contact" 
            className="mt-6 flex items-center justify-center gap-2 w-full py-2 bg-brand-primary hover:bg-brand-primary-dark text-white rounded-lg text-xs font-bold transition-all"
          >
            <Mail size={14} />
            Connect With Us
          </a>
        </div>
      </aside>
    </>
  );
}
