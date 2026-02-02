
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-white dark:bg-brand-dark py-20 px-6 border-t border-brand-mist/40 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
        
        {/* Brand & Privacy */}
        <div className="flex items-center gap-10">
          <button 
            onClick={() => onNavigate('home')}
            className="text-2xl font-serif tracking-tighter uppercase text-brand-crimson dark:text-brand-white group"
          >
            m2<span className="italic group-hover:text-brand-slate transition-colors">creations</span>
          </button>
          <div className="h-6 w-px bg-brand-slate/20 dark:bg-brand-mist/20 hidden md:block"></div>
          <p className="text-[10px] tracking-[0.5em] uppercase text-brand-slate dark:text-brand-mist/50 font-black hidden md:block opacity-70">
            © 2026 Privacy Policy
          </p>
        </div>

        {/* Minimal Navigation Row - High Contrast */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {['portfolio', 'photobook', 'testimonials', 'contact'].map((p) => (
            <button 
              key={p}
              onClick={() => onNavigate(p as Page)}
              className="text-[11px] tracking-[0.4em] uppercase font-black text-brand-slate dark:text-brand-mist hover:text-brand-crimson dark:hover:text-brand-crimson transition-all duration-300"
            >
              {p === 'photobook' ? 'Films' : p === 'testimonials' ? 'Stories' : p}
            </button>
          ))}
        </div>

        {/* Travel Partner & Location */}
        <div className="flex flex-col items-center md:items-end gap-3">
           <p className="text-[9px] tracking-[0.3em] uppercase text-brand-slate/30 dark:text-brand-mist/20 font-black hidden md:block">
            Udumalaipettai, TN — Global Archive
          </p>
          <a 
            href="https://www.trustyyellowcabs.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[9px] tracking-[0.2em] uppercase text-brand-slate/40 dark:text-brand-mist/30 font-black hover:text-brand-crimson transition-colors"
          >
            Travel Partner: Trusty Yellow Cabs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
