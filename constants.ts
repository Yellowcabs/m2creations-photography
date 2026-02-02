
import { GalleryImage, Package, Testimonial } from './types';

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'pw1', url: '/image/017.jpg', category: 'Pre-Wedding', orientation: 'landscape', title: 'Serene Study', description: 'Early morning light on the peaks of tradition.' },
  { id: 'wd1', url: '/image/001.jpg', category: 'Wedding Day', orientation: 'landscape', title: 'The Arrival', description: 'Documentation of the grand processional.' },
  { id: 'rp1', url: '/image/018.jpg', category: 'Reception', orientation: 'landscape', title: 'Midnight Bloom', description: 'Architectural floral studies in the banquet hall.' },
  { id: 'cd1', url: '/image/02.jpg', category: 'Candid', orientation: 'portrait', title: 'Raw Breath', description: 'Unscripted vulnerability in a quiet moment.' },
  { id: 'wd2', url: '/image/011.jpg', category: 'Wedding Day', orientation: 'portrait', title: 'Petal Fall', description: 'Atmospheric ceremony frames under the golden sun.' },
  { id: 'pw2', url: '/image/010.jpg', category: 'Pre-Wedding', orientation: 'landscape', title: 'Urban Pulse', description: 'City lights and modern motion on the streets of London.' },
  { id: 'cd2', url: '/image/003.jpg', category: 'Candid', orientation: 'portrait', title: 'Quiet Prep', description: 'The calm focus before the celebration begins.' },
  { id: 'rp2', url: '/image/016.jpg', category: 'Reception', orientation: 'landscape', title: 'Electric Dance', description: 'Kinetic light and motion on the ballroom floor.' },
  { id: 'wd3', url: '/image/005.jpg', category: 'Wedding Day', orientation: 'portrait', title: 'Ethereal Veil', description: 'Translucent beauty captured in the evening glow.' },
  { id: 'wd4', url: '/image/012.jpg', category: 'Wedding Day', orientation: 'portrait', title: 'The Covenant', description: 'Exchange of promises at the high altar.' },
  { id: 'pw3', url: '/image/007.jpg', category: 'Pre-Wedding', orientation: 'portrait', title: 'Golden Hour', description: 'Intimate portrait in warm sunset light.' },
  { id: 'wd5', url: '/image/013.jpg', category: 'Wedding Day', orientation: 'portrait', title: 'Lace & Light', description: 'Detail shot of the bridal attire in soft window light.' },
  { id: 'wd6', url: '/image/009.jpg', category: 'Wedding Day', orientation: 'portrait', title: 'Archival Portrait', description: 'A timeless silhouette against architectural lines.' },
  { id: 'rp3', url: '/image/015.jpg', category: 'Reception', orientation: 'landscape', title: 'The Banquet', description: 'Bespoke decor and atmospheric reception setting.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah + James',
    date: 'Summer 2023',
    quote: "M2 Creations didn’t just take photos — they captured the soul of our day. Every time we watch our film, we’re right back there.",
    imageUrl: '/image/सफ़ेद और काला स्लीक और सरल शादी फ़ोटोग्राफ़ी वेबसाइट.webp'
  },
  {
    id: '2',
    name: 'Elena + Marcus',
    date: 'Autumn 2023',
    quote: "Elegant, professional, and incredibly gifted — worth every moment and every rupee.",
    imageUrl: '/image/Wedding Photography Photography Website in White and Black Sleek and Simple Style.webp'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'essential',
    name: 'The Essential Archive',
    price: '₹75,000',
    features: [
      '8 Hours of Continuous Coverage',
      'One Senior Photographer',
      'High-Resolution Digital Stills',
      'Online Private Gallery',
      'Basic Color Correction'
    ]
  },
  {
    id: 'signature',
    name: 'The Signature Collection',
    price: '₹1,50,000',
    features: [
      'Full Day Coverage (up to 12 Hours)',
      'Two Senior Photographers',
      'Cinematic Highlight Film (5 mins)',
      'Heirloom Fine-Art Album',
      'Complimentary Engagement Session',
      'Drone Aerial Documentation'
    ],
    isPopular: true
  },
  {
    id: 'legacy',
    name: 'The Legacy Suite',
    price: '₹2,50,000',
    features: [
      'Multi-Day Event Coverage',
      'Full Creative Team (3+ Artists)',
      'Documentary Feature Film (20 mins)',
      'Two Luxury Leather Albums',
      'Super 8mm Vintage Aesthetic',
      'All Raw Footage Provided'
    ]
  }
];

export const CONTACT_INFO = {
  phone: '+91 63831 65382',
  email: 'm2creations2802@gmail.com',
  address: 'Selva Madha Complex, 62D, Srinivasa St, Udumalaipettai, Tamil Nadu 642126, India',
  whatsapp: '6383165382',
  instagram: '@_m2_creations_'
};
