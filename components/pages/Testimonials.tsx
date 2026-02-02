
import React from 'react';
import { TESTIMONIALS } from '../../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="fade-in py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-serif mb-6 text-brand-dark dark:text-brand-white">Love Stories</h2>
        <p className="text-brand-crimson tracking-[0.4em] uppercase text-xs font-bold">Kind words from our dear couples</p>
      </div>

      <div className="space-y-32">
        {TESTIMONIALS.map((t, i) => (
          <div key={t.id} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 reveal-kinetic active`}>
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <img 
                  src={t.imageUrl} 
                  alt="Testimonial visual" 
                  className="w-full aspect-[4/5] object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm" 
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-crimson/5 -z-10 hidden md:block"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <svg className="w-12 h-12 text-brand-crimson/20 mb-8 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed text-brand-dark dark:text-brand-white">
                "{t.quote}"
              </p>
              {/* Lines removed: Sarah + James, Summer 2023, Elena + Marcus, Autumn 2023 */}
              <div className="w-12 h-0.5 bg-brand-crimson/30 mx-auto md:mx-0"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
