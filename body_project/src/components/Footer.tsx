import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard, Shield, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold text-white">Egypt Tours</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Creating unforgettable Egyptian adventures since 2012. Your trusted partner for authentic cultural experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#destinations" className="hover:text-blue-400 transition-colors">Destinations</a></li>
              <li><a href="#tours" className="hover:text-blue-400 transition-colors">Tours & Packages</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#faqs" className="hover:text-blue-400 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Payment Methods</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Travel Insurance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 mt-1" size={18} />
                <span>123 Tahrir Square, Cairo, Egypt</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="flex-shrink-0" size={18} />
                <a href="tel:+201234567890" className="hover:text-blue-400 transition-colors">
                  +20 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="flex-shrink-0" size={18} />
                <a href="mailto:info@egypttours.com" className="hover:text-blue-400 transition-colors">
                  info@egypttours.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield size={18} />
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard size={18} />
                <span>Safe Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={18} />
                <span>Licensed Guides</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 Egypt Tours. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
