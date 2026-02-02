
import React from 'react';
import { Page } from '../../types';
import BookingForm from '../BookingForm';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Refined Hero: Compact, Atmospheric & Impactful */}
      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-kinetic active">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-crimson/10 text-brand-crimson text-[9px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1 h-1 bg-brand-crimson rounded-full animate-pulse"></span>
              m2creations - Photography
            </div>
            <h1 className="text-5xl md:text-[5.5rem] font-serif leading-[0.9] mb-8 text-brand-dark dark:text-brand-white tracking-tighter">
              M2 Creations <br />
              Framing <br />
              Love. <br />
              <span className="italic text-brand-crimson/80 font-light">Preserving Forever.</span>
            </h1>
            <p className="text-sm md:text-base text-brand-dark/60 dark:text-brand-white/60 font-light leading-relaxed mb-10 max-w-sm">
              M2 Creations captures more than moments — we capture meaning. A fusion of cinematic motion and intimate documentary stills designed for generations.
            </p>
            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => onNavigate('portfolio')}
                className="shimmer-effect group relative bg-brand-crimson text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-500 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Explore Archive</span>
                <svg className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button 
                onClick={scrollToBooking}
                className="group relative px-10 py-5 rounded-full font-bold text-brand-dark dark:text-brand-white border border-brand-slate/10 dark:border-white/10 hover:bg-brand-slate/5 dark:hover:bg-white/5 hover:scale-105 transition-all duration-500 text-[10px] uppercase tracking-[0.2em] active:scale-95"
              >
                <span className="relative z-10">Book Enquiry</span>
                <div className="absolute inset-0 bg-brand-crimson/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </button>
            </div>
          </div>

          <div className="relative group perspective-1000">
            <div className="reveal-img-m2 active relative z-10">
              <img 
                src="/image/Gray and White Elegant Photography Service Instagram Post.webp" 
                className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(213,72,104,0.15)] grayscale hover:grayscale-0 transition-all duration-1000" 
                alt="m2creations Cinematic Frame"
              />
            </div>
            
            {/* Minimal Detail Overlay */}
            <div className="absolute -bottom-10 -left-6 glass p-8 rounded-4xl shadow-2xl z-20 max-w-[220px] reveal-kinetic active stagger-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-brand-crimson rounded-full"></div>
                <p className="text-[7px] font-mono uppercase tracking-widest text-brand-crimson">Availability</p>
              </div>
              <p className="text-xs font-serif italic text-brand-dark dark:text-brand-white leading-tight">M2 Creations — Capturing love across five continents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* High Visibility Booking Section */}
      <section className="reveal-kinetic active stagger-1 mb-20 bg-brand-mist/10 dark:bg-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
           <span className="text-[9px] uppercase tracking-[0.6em] text-brand-crimson font-black mb-4 block">Official Reservation</span>
           <h2 className="text-4xl md:text-6xl font-serif text-brand-dark dark:text-brand-white">Start Your <span className="italic font-light opacity-60">Archive.</span></h2>
        </div>
        <BookingForm />
      </section>

      {/* Feature Icon Grid: Poetic Headlines */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Moments That Speak.', meta: 'Archive 01' },
            { label: 'Love, Framed Forever.', meta: 'Archive 02' },
            { label: 'Stories Told in Light.', meta: 'Archive 03' },
            { label: 'Emotion in Every Frame.', meta: 'Archive 04' }
          ].map((item, idx) => (
            <div key={idx} className="reveal-kinetic stagger-1 border border-brand-slate/10 dark:border-white/5 p-8 rounded-3xl hover:bg-brand-crimson hover:text-white transition-all duration-500 group cursor-pointer hover:-translate-y-2">
              <p className="text-[8px] font-mono uppercase tracking-widest text-brand-crimson group-hover:text-white/60 mb-2">{item.meta}</p>
              <h4 className="text-lg font-serif italic leading-snug">{item.label}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
