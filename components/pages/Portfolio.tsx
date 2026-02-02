
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../../constants';

const Portfolio: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen  dark:bg-brand-dark text-brand-dark dark:text-brand-mist selection:bg-brand-crimson/10 pb-40">
      
      {/* Refined Minimal Header */}
      <section className="pb-24 px-6 max-w-screen-2xl mx-auto text-center reveal-kinetic active">
        <h1 className="text-5xl md:text-[8rem] xl:text-[10rem] font-serif leading-none tracking-tighter text-brand-dark dark:text-brand-white mb-6">
          The <span className="italic font-light opacity-30">Portfolio</span>
        </h1>
        <p className="text-[10px] tracking-[0.6em] uppercase text-brand-slate/40 dark:text-brand-mist/30 font-black">
          Emotion in Every Frame
        </p>
      </section>

      {/* Pure Visual Grid (Expanded for Desktop) */}
      <section className="max-w-[1800px] mx-auto px-4 md:px-8 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6 grid-flow-dense">
          {GALLERY_IMAGES.map((img, idx) => {
            const isLandscape = img.orientation === 'landscape';
            
            return (
              <div 
                key={img.id} 
                className={`reveal-kinetic active group cursor-pointer relative overflow-hidden bg-brand-mist/5 dark:bg-white/5 rounded-[2px] transition-all duration-700
                  ${isLandscape ? 'col-span-2 aspect-[16/9]' : 'col-span-1 aspect-[3/4]'}
                `}
                style={{ animationDelay: `${(idx % 10) * 40}ms` }}
                onClick={() => setSelectedImg(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-[6s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Subtle Hover Dimming - No Text */}
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-all duration-700"></div>
                
                {/* Minimal Structural Detail */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/5 transition-colors pointer-events-none"></div>
              </div>
            );
          })}
        </div>
        
        {/* Compact Booking Trigger */}
        <div className="mt-40 text-center reveal-kinetic active">
          <div className="w-16 h-px bg-brand-crimson/20 mx-auto mb-10"></div>
          <p className="text-sm font-serif italic text-brand-slate/50 mb-12 max-w-sm mx-auto leading-relaxed">
            Preserving your legacy through a timeless, curated lens. Every frame is a narrative waiting to be told.
          </p>
          <button 
            onClick={() => window.location.hash = 'contact'}
            className="group relative inline-flex items-center justify-center text-[10px] tracking-[0.4em] uppercase font-black text-brand-white bg-brand-crimson px-12 py-6 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl hover:shadow-brand-crimson/30"
          >
            <span className="relative z-10 flex items-center gap-4">
              Inquire Now
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-brand-dark -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
          </button>
        </div>
      </section>

      {/* Minimal Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[2000] bg-brand-white/98 dark:bg-brand-dark/98 backdrop-blur-3xl flex flex-col items-center justify-center p-6 md:p-16 animate-in fade-in zoom-in-95 duration-500"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 group p-6 z-[2010]">
             <div className="w-12 h-12 border border-brand-crimson/20 rounded-full flex items-center justify-center group-hover:bg-brand-crimson group-hover:text-white transition-all transform group-hover:rotate-90">
               <span className="text-lg">✕</span>
             </div>
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <img 
              src={selectedImg} 
              className="max-w-full max-h-full object-contain shadow-3xl pointer-events-auto rounded-[1px]" 
              alt="Archive Frame" 
            />
          </div>
        </div>
      )}

      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #566178; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #D54868; }
      `}</style>
    </div>
  );
};

export default Portfolio;
