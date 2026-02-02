
export type Page = 'home' | 'about' | 'portfolio' | 'testimonials' | 'contact' | 'photobook';

export type PortfolioCategory = 'Pre-Wedding' | 'Wedding Day' | 'Reception' | 'Candid';

export interface GalleryImage {
  id: string;
  url: string;
  category: PortfolioCategory;
  orientation: 'landscape' | 'portrait';
  title: string;
  description: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  quote: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

/**
 * Interface for the wedding inquiry form data.
 */
export interface BookingFormData {
  name: string;
  phone: string;
  date?: string;
  message?: string;
}
