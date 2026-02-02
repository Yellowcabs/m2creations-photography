
import React, { useState, useEffect } from 'react';

interface Film {
  id: string;
  videoId: string;
  platform: 'youtube' | 'instagram';
  title: string;
  location: string;
  category: string;
  thumbnail: string;
  duration: string;
  description: string;
  buttonLabel: string;
  orientation?: 'landscape' | 'portrait'; // new optional property
}

const FILMS: Film[] = [
  {
    id: 'reel-01',
    videoId: '-rl6uM7r9ik',
    platform: 'youtube',
    title: 'Golden Threads',
    location: '',
    category: 'Signature Film',
    duration: '',
    description: 'Every frame a narrative, every movement a memory — love woven into cinematic light.',
    thumbnail: 'https://img.youtube.com/vi/-rl6uM7r9ik/maxresdefault.jpg',
    buttonLabel: 'View the Film'
  },

 {
    id: 'reel-06',
    videoId: 'JF7dubA2_VE',
    platform: 'youtube',
    title: 'Timeless Reverie (Portrait)',
    location: '',
    category: 'Documentary Feature',
    duration: '',
    description: 'Dreamlike, emotional, and cinematic — capturing love in its purest form.',
    thumbnail: 'https://img.youtube.com/vi/JF7dubA2_VE/maxresdefault.jpg',
    buttonLabel: 'View Film',
    orientation: 'portrait'
  },

  
  {
    id: 'reel-02',
    videoId: 'Z46guZUmjWg',
    platform: 'youtube',
    title: 'Ever After',
    location: '',
    category: 'Wedding Highlight',
    duration: '',
    description: 'Love, captured with heart and artistry — timeless, cinematic, unforgettable.',
    thumbnail: 'https://img.youtube.com/vi/Z46guZUmjWg/maxresdefault.jpg',
    buttonLabel: 'View the Film'
  },
  {
    id: 'reel-03',
    videoId: 'aHc-DLhLKhw',
    platform: 'youtube',
    title: 'Fleeting Light',
    location: '',
    category: 'Cinematic Highlight',
    duration: '',
    description: 'Capturing moments that pass too quickly, yet live forever in cinematic memory.',
    thumbnail: 'https://img.youtube.com/vi/aHc-DLhLKhw/maxresdefault.jpg',
    buttonLabel: 'Watch the Film'
  },

 {
    id: 'reel-05',
    videoId: 'sQhOtr0KPto',
    platform: 'youtube',
    title: 'Timeless Reverie (Portrait)',
    location: '',
    category: 'Documentary Feature',
    duration: '',
    description: 'Dreamlike, emotional, and cinematic — capturing love in its purest form.',
    thumbnail: 'https://img.youtube.com/vi/sQhOtr0KPto/maxresdefault.jpg',
    buttonLabel: 'View Film',
    orientation: 'portrait'
  },

  {
    id: 'reel-04',
    videoId: 's9hga13l9-w',
    platform: 'youtube',
    title: 'Timeless Reverie',
    location: '',
    category: 'Documentary Feature',
    duration: '',
    description: 'Dreamlike, emotional, and cinematic — capturing love in its purest form.',
    thumbnail: 'https://img.youtube.com/vi/s9hga13l9-w/maxresdefault.jpg',
    buttonLabel: 'View Film'
  },

  

 

];

const WeddingFilms: React.FC = () => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.narrative-block').forEach(block => observer.observe(block));
    return () => observer.disconnect();
  }, []);

  const getEmbedUrl = (film: Film) => {
    if (film.platform === 'instagram') {
      return `https://www.instagram.com/reel/${film.videoId}/embed/`;
    }
    return `https://www.youtube.com/embed/${film.videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1&color=white&vq=hd1080`;
  };

  return (
    <div className="min-h-screen bg-[] text-[#1A1A1A] selection:bg-brand-violet/10 overflow-x-hidden font-sans pb-32">
      
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] grain-overlay"></div>

      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <div className="relative z-10 animate-reveal-up">
          <span className="text-[10px] tracking-[1.5em] uppercase font-bold text-gray-400 mb-8 block">Motion Archive</span>
          <h1 className="text-[8vw] font-serif leading-none tracking-tighter mb-8 text-brand-dark">
            Emotion in <span className="italic font-light text-brand-crimson/60">Every Frame</span>
          </h1>
          <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 max-w-sm mx-auto font-light leading-relaxed">
            Turning the energy of love <br /> into timeless memories.
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-20 py-20">
        <div className="space-y-[30vh]">
          {FILMS.map((film, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={film.id} 
                className={`narrative-block flex flex-col lg:flex-row items-center gap-12 lg:gap-24 transition-all duration-[1.5s] ease-out opacity-0 translate-y-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-[55%]">
                  <div
  className={`group cursor-pointer relative overflow-hidden bg-white shadow-2xl rounded-sm transition-all duration-700 ${
    film.orientation === 'portrait'
      ? 'aspect-[9/16] max-w-[360px] mx-auto'
      : 'aspect-video'
  }`}
  onClick={() => setSelectedFilm(film)}
>

                    <img 
                      src={film.thumbnail} 
                      alt={film.title}
                      className="w-full h-full object-cover transition-all duration-[2s] scale-110 group-hover:scale-100"
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-md">
                         <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent translate-x-1"></div>
                      </div>
                    </div>

                    <div className="absolute top-4 left-4">
                       <span className="text-[7px] font-mono tracking-widest text-white/70 bg-black/40 px-2 py-1 uppercase backdrop-blur-md">
                         {film.duration} // {film.platform.toUpperCase()}
                       </span>
                    </div>
                  </div>
                </div>

                <div className={`w-full lg:w-[45%] space-y-6 ${!isEven ? 'lg:text-right' : ''}`}>
                  <div className="flex flex-col gap-3">
                    <span className="text-[9px] font-mono text-brand-crimson tracking-tighter">M2 Creations</span>
                    <h3 className="text-4xl md:text-6xl font-serif italic mb-2 leading-tight text-gray-800">{film.title}</h3>
                    {film.location && (
                      <p className="text-[8px] tracking-[0.5em] uppercase text-gray-400 font-bold">
                        {film.location}
                      </p>
                    )}
                    <p className="text-sm text-gray-400 font-light leading-relaxed max-w-md ml-auto mr-auto lg:mr-0 lg:ml-0">
                      {film.description}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedFilm(film)}
                    className="text-[9px] tracking-[0.8em] uppercase font-bold text-gray-800 border-b border-gray-200 pb-2 hover:text-brand-crimson hover:border-brand-crimson transition-all"
                  >
                    {film.buttonLabel}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selectedFilm && (
        <div 
          className="fixed inset-0 z-[2000] bg-white/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-500"
          onClick={() => setSelectedFilm(null)}
        >
          <button className="absolute top-10 right-10 group flex items-center gap-4 z-[2010]">
             <span className="text-[8px] tracking-[1.5em] uppercase font-bold text-gray-300 group-hover:text-black transition-colors">Close</span>
             <div className="w-10 h-10 border border-black/5 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all transform group-hover:rotate-90">
               <span className="text-sm">✕</span>
             </div>
          </button>
          
          <div
  className={`bg-black shadow-3xl relative overflow-hidden rounded-sm ${
    selectedFilm.orientation === 'portrait'
      ? 'w-[360px] aspect-[9/16]'
      : 'w-full max-w-6xl aspect-video'
  }`}
  onClick={e => e.stopPropagation()}
>

  

             <iframe 
                width="100%" 
                height="100%" 
                src={getEmbedUrl(selectedFilm)}
                title={selectedFilm.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
             ></iframe>
          </div>
        </div>
      )}

      <style>{`
        .grain-overlay { background-image: url("https://grainy-gradients.vercel.app/noise.svg"); }
        @keyframes reveal-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-reveal-up { animation: reveal-up 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .narrative-block.is-visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  );
};

export default WeddingFilms;
