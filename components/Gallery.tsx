
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  // Categories updated to match PortfolioCategory type and actual constants.ts data
  const categories = ['All', 'Pre-Wedding', 'Wedding Day', 'Reception', 'Candid'];

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">The Portfolio</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border text-sm transition-all tracking-widest uppercase ${
                  filter === cat ? 'bg-primary text-white border-primary' : 'border-gray-200 text-gray-500 hover:border-accent hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img) => (
            <div key={img.id} className="break-inside-avoid overflow-hidden rounded-sm group relative cursor-pointer">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="text-center">
                  <p className="text-accent text-xs tracking-widest uppercase mb-2">{img.category}</p>
                  <h3 className="text-white text-xl font-serif">{img.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
