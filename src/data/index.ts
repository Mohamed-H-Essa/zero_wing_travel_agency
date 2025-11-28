import { 
  Users, Award, HeadphonesIcon, Shield, MapPin, CreditCard, 
  Facebook, Instagram, Twitter, Mail, Phone 
} from 'lucide-react';

export const navLinks = [
  { id: 'destinations', href: '#destinations', translationKey: 'nav.destinations' },
  { id: 'tours', href: '#tours', translationKey: 'nav.tours' },
  { id: 'about', href: '#about', translationKey: 'nav.about' },
  { id: 'faqs', href: '#faqs', translationKey: 'nav.faqs' },
  { id: 'contact', href: '#contact', translationKey: 'nav.contact' },
];

export const socialProofStats = [
  { id: 'reviews', value: '4.9/5', translationKey: 'social_proof.reviews' },
  { id: 'travelers', value: '15,000+', translationKey: 'social_proof.happy_travelers' },
  { id: 'experience', value: '12 Years', translationKey: 'social_proof.experience', valueKey: 'social_proof.years' },
  { id: 'security', value: '100%', translationKey: 'social_proof.secure_booking' },
];

export const tours = [
  {
    id: 'pyramids',
    price: 89,
    rating: 4.9,
    reviews: 342,
    image: 'https://images.pexels.com/photos/3647171/pexels-photo-3647171.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '8 hours',
    location: 'Cairo'
  },
  {
    id: 'nile_cruise',
    price: 65,
    rating: 4.8,
    reviews: 289,
    image: 'https://images.pexels.com/photos/11743327/pexels-photo-11743327.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '3 hours',
    location: 'Cairo'
  },
  {
    id: 'luxor',
    price: 145,
    rating: 5.0,
    reviews: 428,
    image: 'https://images.pexels.com/photos/13246970/pexels-photo-13246970.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '10 hours',
    location: 'Luxor'
  },
  {
    id: 'red_sea',
    price: 75,
    rating: 4.9,
    reviews: 256,
    image: 'https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '6 hours',
    location: 'Hurghada'
  },
  {
    id: 'alexandria',
    price: 95,
    rating: 4.7,
    reviews: 198,
    image: 'https://images.pexels.com/photos/10727962/pexels-photo-10727962.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '9 hours',
    location: 'Alexandria'
  },
  {
    id: 'abu_simbel',
    price: 185,
    rating: 5.0,
    reviews: 312,
    image: 'https://images.pexels.com/photos/10498654/pexels-photo-10498654.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '12 hours',
    location: 'Aswan'
  },
];

export const destinations = [
  {
    id: 'cairo',
    tours: 28,
    image: 'https://images.pexels.com/photos/3873677/pexels-photo-3873677.jpeg',
  },
  {
    id: 'luxor',
    tours: 18,
    image: 'https://images.pexels.com/photos/21668633/pexels-photo-21668633.jpeg',
  },
  {
    id: 'aswan',
    tours: 15,
    image: 'https://images.pexels.com/photos/15131485/pexels-photo-15131485.jpeg',
  },
  {
    id: 'hurghada',
    tours: 22,
    image: 'https://images.pexels.com/photos/13034805/pexels-photo-13034805.jpeg',
  },
  {
    id: 'alexandria',
    tours: 12,
    image: 'https://images.pexels.com/photos/10727962/pexels-photo-10727962.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'sharm',
    tours: 20,
    image: 'https://images.pexels.com/photos/914055/pexels-photo-914055.jpeg',
  },
];

export const features = [
  { id: 'small_group', icon: Users },
  { id: 'expert_guides', icon: Award },
  { id: 'support', icon: HeadphonesIcon },
  { id: 'price_guarantee', icon: Shield },
  { id: 'customizable', icon: MapPin },
  { id: 'secure_payments', icon: CreditCard },
];

export const faqs = [
  { id: 'visa' },
  { id: 'best_time' },
  { id: 'families' },
  { id: 'included' },
  { id: 'safety' },
  { id: 'cancellation' },
];

export const contactInfo = {
  phone: {
    display: '+20 123 456 7890',
    link: 'tel:+201234567890'
  },
  email: {
    display: 'info@egypttours.com',
    link: 'mailto:info@egypttours.com'
  },
  whatsapp: {
    link: 'https://wa.me/201234567890'
  },
  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#'
  }
};

export const socialLinks = [
  { id: 'facebook', icon: Facebook, href: contactInfo.social.facebook },
  { id: 'instagram', icon: Instagram, href: contactInfo.social.instagram },
  { id: 'twitter', icon: Twitter, href: contactInfo.social.twitter },
];

export const footerLinks = {
  quickLinks: [
    { id: 'destinations', href: '#destinations', translationKey: 'footer.links.destinations' },
    { id: 'tours', href: '#tours', translationKey: 'footer.links.tours' },
    { id: 'about', href: '#about', translationKey: 'footer.links.about' },
    { id: 'faqs', href: '#faqs', translationKey: 'footer.links.faqs' },
    { id: 'contact', href: '#contact', translationKey: 'footer.links.contact' },
  ],
  policies: [
    { id: 'privacy', href: '#', translationKey: 'footer.links.privacy' },
    { id: 'terms', href: '#', translationKey: 'footer.links.terms' },
    { id: 'cancellation', href: '#', translationKey: 'footer.links.cancellation' },
    { id: 'payment', href: '#', translationKey: 'footer.links.payment' },
    { id: 'insurance', href: '#', translationKey: 'footer.links.insurance' },
  ],
  contact: [
    { id: 'phone', icon: Phone, text: contactInfo.phone.display, href: contactInfo.phone.link },
    { id: 'email', icon: Mail, text: contactInfo.email.display, href: contactInfo.email.link },
  ]
};
