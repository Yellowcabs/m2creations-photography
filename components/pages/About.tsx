
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="reveal pb-40 px-6 max-w-screen-2xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-start">
        {/* Left Column: Vertical Statement */}
        <div className="lg:col-span-1 hidden lg:block pt-32">
          <p className="rotate-180 text-[11px] tracking-[1em] uppercase text-accent font-black [writing-mode:vertical-lr] opacity-30">
            Fine Art Photography — Est. 2012
          </p>
        </div>

        {/* Middle Column: Imagery */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[3/4] overflow-hidden grayscale relative group shadow-3xl rounded-[2rem]">
            <img 
              src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1200" 
              alt="m2creations Creative Director" 
              className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110"
            />
            <div className="absolute inset-0 border-[30px] border-white/10 pointer-events-none"></div>
          </div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-accent/5 -z-10 hidden md:block rounded-full"></div>
        </div>
        
        {/* Right Column: Content */}
        <div className="lg:col-span-6 lg:pl-16 xl:pl-24 space-y-20 pt-12">
          <header>
            <span className="text-brand-crimson tracking-[0.6em] uppercase text-[10px] block mb-10 font-black">The Visionary</span>
            <h2 className="text-6xl md:text-[7rem] xl:text-[9rem] font-serif leading-[0.85] tracking-tighter text-brand-dark dark:text-brand-white">
              The Art <br /> 
              <span className="italic font-light text-brand-crimson/80">Director.</span>
            </h2>
          </header>
          
          <p className="text-3xl xl:text-4xl font-serif italic text-brand-dark dark:text-brand-mist/90 leading-snug border-l-[6px] border-brand-crimson/20 pl-16">
            "We don't just 'take' photos. We craft visual legacies for the discerning romantic."
          </p>
          
          <div className="space-y-10 text-base md:text-lg text-brand-dark/60 dark:text-brand-white/50 font-light leading-relaxed max-w-xl">
            <p>
              With a background in European fashion editorial, m2creations brings a meticulous attention to detail and a high-fashion sensibility to every wedding documented under our banner.
            </p>
            <p>
              m2creations was founded on the belief that wedding photography should transcend documentation. It should be an art form that captures the essence of a couple’s unique connection through a sophisticated, cinematic lens.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-y-16 pt-16 border-t border-brand-slate/10 dark:border-white/10">
            <div>
              <p className="text-5xl xl:text-6xl font-serif text-brand-crimson mb-6">400+</p>
              <p className="text-[10px] tracking-[0.4em] uppercase text-brand-slate/40 font-black">Stories Preserved</p>
            </div>
            <div>
              <p className="text-5xl xl:text-6xl font-serif text-brand-crimson mb-6">15</p>
              <p className="text-[10px] tracking-[0.4em] uppercase text-brand-slate/40 font-black">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
