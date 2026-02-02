
import React, { useState } from 'react';
import { CONTACT_INFO } from '../../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello m2creations! New Inquiry:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Message: ${formData.message || 'Standard Inquiry'}

Looking forward to your reply.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedText}`, '_blank');
  };

  // Constructing a high-impact Google Maps Embed URL with a zoomed-out view (z=14)
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className="reveal pb-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-32 mb-24">
        <div className="space-y-16">
          <div>
            <span className="text-brand-crimson tracking-[0.6em] uppercase text-[9px] block mb-6 font-black">Archive Inquiry</span>
            <h2 className="text-6xl md:text-[8rem] font-serif mb-8 leading-[0.85] text-brand-dark dark:text-brand-white tracking-tighter">
              Get in <br /> 
              <span className="italic font-light text-brand-crimson/80">Touch.</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <p className="text-[8px] tracking-widest uppercase text-brand-slate/40 font-black mb-4">Instagram</p>
              <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-xl font-serif hover:text-brand-crimson transition-colors block text-brand-dark dark:text-brand-white">{CONTACT_INFO.instagram}</a>
            </div>
            <div>
              <p className="text-[8px] tracking-widest uppercase text-brand-slate/40 font-black mb-4">WhatsApp</p>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-serif hover:text-brand-crimson transition-colors block text-brand-dark dark:text-brand-white">{CONTACT_INFO.phone}</a>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-slate/5">
            <p className="text-[8px] tracking-widest uppercase text-brand-slate/40 font-black mb-4">Studio</p>
            <p className="text-sm font-serif italic text-brand-dark dark:text-brand-white opacity-60 leading-relaxed max-w-xs">
              {CONTACT_INFO.address}
            </p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[9px] uppercase tracking-[0.2em] font-black text-brand-crimson hover:underline"
            >
              Open in Google Maps
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white dark:bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-brand-dark/5 dark:border-white/5 glass shadow-2xl">
            <form onSubmit={handleWhatsAppRedirect} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[8px] uppercase tracking-widest text-brand-crimson font-black">Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-transparent border-b border-brand-slate/10 py-2 focus:border-brand-crimson outline-none text-sm font-light text-brand-dark dark:text-brand-white transition-all" 
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[8px] uppercase tracking-widest text-brand-crimson font-black">Phone</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full bg-transparent border-b border-brand-slate/10 py-2 focus:border-brand-crimson outline-none text-sm font-light text-brand-dark dark:text-brand-white transition-all" 
                    placeholder="+91"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[8px] uppercase tracking-widest text-brand-crimson font-black">Inquiry Details</label>
                <textarea 
                  rows={2} 
                  className="w-full bg-transparent border-b border-brand-slate/10 py-2 focus:border-brand-crimson outline-none text-sm font-light transition-all resize-none text-brand-dark dark:text-brand-white" 
                  placeholder="Date, location, or style..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button className="shimmer-effect group relative w-full bg-brand-crimson text-white py-4 rounded-2xl text-[10px] tracking-[0.4em] uppercase font-black overflow-hidden transition-all shadow-lg hover:bg-brand-dark active:scale-95 flex items-center justify-center gap-3">
                <span className="relative z-10">Send via WhatsApp</span>
                <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="reveal-kinetic active stagger-1">
        <div className="text-center mb-12">
          <span className="text-[8px] uppercase tracking-[0.5em] text-brand-slate/40 dark:text-brand-mist/20 font-black block mb-4">Location Archive</span>
          <h3 className="text-3xl md:text-5xl font-serif text-brand-dark dark:text-brand-white">Visit the <span className="italic font-light opacity-60">Studio.</span></h3>
        </div>
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-dark/5 dark:border-white/5 glass">
          <iframe 
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="dark:opacity-90"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[12px] md:border-[24px] border-white/5 dark:border-black/5"></div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
