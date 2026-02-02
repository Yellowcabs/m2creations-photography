
import React from 'react';
import { PACKAGES } from '../../constants';
import { Page } from '../../types';

interface PackagesProps {
  onNavigate?: (page: Page) => void;
}

const Packages: React.FC<PackagesProps> = ({ onNavigate }) => {
  return (
    <div className="reveal py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-32">
        <span className="text-accent tracking-ultra-wide uppercase text-[10px] block mb-6 font-bold">Investment & Value</span>
        <h2 className="text-5xl md:text-8xl font-serif mb-12">The <span className="italic font-light">Collections</span></h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light text-sm leading-loose">
          Our collections are designed to be heirloom investments. We provide a tailored experience 
          from the initial consultation to the delivery of your bespoke fine-art album.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-0 border border-gray-100 dark:border-white/10">
        {PACKAGES.map((pkg, idx) => (
          <div 
            key={pkg.id} 
            className={`flex flex-col p-16 bg-transparent transition-all duration-500 hover:bg-white dark:hover:bg-white/5 border-l first:border-l-0 border-gray-100 dark:border-white/10 ${
              pkg.isPopular ? 'relative overflow-hidden' : ''
            }`}
          >
            {pkg.isPopular && (
              <div className="absolute top-0 right-0 p-12 overflow-hidden pointer-events-none">
                 <span className="text-[9px] tracking-ultra-wide uppercase font-bold text-accent opacity-30 rotate-45 block transform translate-x-4 -translate-y-4">Signature Selection</span>
              </div>
            )}
            
            <span className="text-accent text-[10px] tracking-widest font-bold mb-10 block">COLLECTION 0{idx + 1}</span>
            <h3 className="text-3xl font-serif mb-4">{pkg.name}</h3>
            <div className="text-xl font-light text-gray-400 mb-12 italic">Starts at {pkg.price}</div>
            
            <ul className="space-y-6 mb-20 flex-1">
              {pkg.features.map((feat, i) => (
                <li key={i} className="flex items-start text-[11px] tracking-widest uppercase font-light text-gray-500 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-accent/30 rounded-full mr-4 mt-1 shrink-0"></span>
                  {feat}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => onNavigate?.('contact')}
              className={`group relative w-full py-6 text-[10px] tracking-ultra-wide uppercase font-bold transition-all border ${
                pkg.isPopular ? 'bg-primary text-white border-primary dark:bg-accent dark:border-accent' : 'border-gray-200 dark:border-white/20 text-primary dark:text-white hover:border-accent hover:text-accent'
              }`}
            >
              <span className="relative z-10">Request Dossier</span>
              {pkg.isPopular && (
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10"></div>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
