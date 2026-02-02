
import React, { useState, useRef, useEffect } from 'react';
import { getWeddingAdvice } from '../geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your m2creations concierge. How can I help you plan your dream wedding photography?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getWeddingAdvice(input);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-32 md:bottom-8 left-6 z-[100]">
      {isOpen ? (
        <div className="bg-brand-white dark:bg-brand-dark rounded-2xl shadow-2xl w-[320px] md:w-[380px] h-[500px] flex flex-col border border-brand-mist dark:border-white/5 overflow-hidden animate-in slide-in-from-bottom-5 glass">
          <div className="bg-brand-crimson p-4 flex justify-between items-center">
            <h3 className="text-white font-serif tracking-wide">Planning Concierge</h3>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-mist/20 dark:bg-brand-dark/40">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-brand-crimson text-white rounded-tr-none' : 'bg-white dark:bg-brand-slate border border-brand-mist/30 dark:border-white/5 text-brand-dark dark:text-brand-white rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-brand-slate border border-brand-mist/30 dark:border-white/5 p-3 rounded-2xl rounded-tl-none flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-brand-crimson/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-brand-crimson/40 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-brand-crimson/40 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-brand-mist/30 dark:border-white/10 bg-white dark:bg-brand-dark/80 backdrop-blur-md">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about timeline or styles..."
                className="flex-1 border border-brand-mist/50 dark:border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-crimson bg-transparent text-brand-dark dark:text-brand-white"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brand-crimson text-white p-2 rounded-full hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-crimson text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center space-x-2 border border-brand-crimson/20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          <span className="hidden md:inline font-serif text-sm">Concierge</span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
