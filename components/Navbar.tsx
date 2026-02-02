
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, isDarkMode, toggleTheme }) => {
  const navItems: { label: string; value: Page; icon: React.ReactNode }[] = [
    { 
      label: 'Home', 
      value: 'home',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    { 
      label: 'Portfolio', 
      value: 'portfolio',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    },
    { 
      label: 'Films', 
      value: 'photobook',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    },
    { 
      label: 'Stories', 
      value: 'testimonials',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    },
    { 
      label: 'Contact', 
      value: 'contact',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
  ];

  return (
    <>
      <nav className="pill-nav glass shadow-xl flex items-center justify-between border-white/20 dark:border-white/5 transition-all w-[90%] md:w-[92%] lg:w-[95%] max-w-6xl">
        <button 
          onClick={() => onNavigate('home')} 
          className="px-3 md:px-6 py-1.5 md:py-3 text-sm md:text-xl font-extrabold tracking-tighter text-brand-crimson dark:text-brand-white uppercase"
        >
          m2creations
        </button>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`px-6 py-3 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all ${
                currentPage === item.value 
                  ? 'bg-brand-crimson text-white shadow-lg shadow-brand-crimson/20' 
                  : 'text-brand-slate hover:bg-brand-mist/50 dark:hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          onClick={toggleTheme} 
          className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-brand-mist/50 dark:hover:bg-white/5 transition-colors"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] z-[1000] animate-in slide-in-from-bottom-10">
        <div className="glass bg-white/80 dark:bg-black/80 backdrop-blur-2xl border border-white/20 dark:border-white/5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] px-4 py-3 flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = currentPage === item.value;
            return (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className="relative flex flex-col items-center gap-1 py-1 group outline-none"
              >
                <div className={`transition-all duration-500 transform ${isActive ? 'scale-110 text-brand-crimson -translate-y-1' : 'text-brand-slate group-active:scale-90 opacity-60'}`}>
                  {item.icon}
                </div>
                <span className={`text-[8px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${isActive ? 'text-brand-crimson opacity-100' : 'text-brand-slate opacity-40'}`}>
                  {item.label}
                </span>
                
                {isActive && (
                  <div className="absolute -bottom-1 w-1 h-1 bg-brand-crimson rounded-full shadow-[0_0_10px_rgba(213,72,104,0.5)]"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
