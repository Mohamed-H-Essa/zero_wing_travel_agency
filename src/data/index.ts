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
    image: 'https://images.pexels.com/photos/14659226/pexels-photo-14659226.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/3252924/pexels-photo-3252924.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'luxor',
    tours: 18,
    image: 'https://images.pexels.com/photos/17361683/pexels-photo-17361683/free-photo-of-view-of-the-luxor-temple-in-egypt.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'aswan',
    tours: 15,
    image: 'https://images.pexels.com/photos/17361670/pexels-photo-17361670/free-photo-of-temple-of-philae-in-aswan-egypt.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'hurghada',
    tours: 22,
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'alexandria',
    tours: 12,
    image: 'https://images.pexels.com/photos/10727962/pexels-photo-10727962.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'sharm',
    tours: 20,
    image: 'https://images.pexels.com/photos/15849619/pexels-photo-15849619/free-photo-of-tropical-beach-in-sharm-el-sheikh-in-egypt.jpeg?auto=compress&cs=tinysrgb&w=800',
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

export const socialLinks = [
  { id: 'facebook', icon: Facebook, href: '#' },
  { id: 'instagram', icon: Instagram, href: '#' },
  { id: 'twitter', icon: Twitter, href: '#' },
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
    { id: 'address', icon: MapPin, text: '123 Tahrir Square, Cairo, Egypt', href: null },
    { id: 'phone', icon: Phone, text: '+20 123 456 7890', href: 'tel:+201234567890' },
    { id: 'email', icon: Mail, text: 'info@egypttours.com', href: 'mailto:info@egypttours.com' },
  ]
};
