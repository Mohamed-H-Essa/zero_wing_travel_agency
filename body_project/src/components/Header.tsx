import { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Egypt Tours</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Destinations
            </a>
            <a href="#tours" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Tours
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
            <a href="#faqs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              FAQs
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Globe size={18} />
              <span className="text-sm font-medium">EN</span>
            </button>
            <a href="tel:+201234567890" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone size={18} />
            </a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md">
              Book Now
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <a href="#destinations" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              Destinations
            </a>
            <a href="#tours" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              Tours
            </a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              About
            </a>
            <a href="#faqs" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              FAQs
            </a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
            <div className="flex items-center space-x-4 pt-2">
              <button className="flex items-center space-x-2 text-gray-700">
                <Globe size={18} />
                <span className="text-sm font-medium">EN</span>
              </button>
              <a href="tel:+201234567890" className="flex items-center space-x-2 text-gray-700">
                <Phone size={18} />
              </a>
            </div>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4">
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
