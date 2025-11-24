import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher';
import { navLinks } from '../data';

export default function Header() {
  const { t } = useTranslation();
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
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {t(link.translationKey)}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="tel:+201234567890" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone size={18} />
              <span className="font-medium">+20 123 456 7890</span>
            </a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t('nav.book_now')}
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-50 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.translationKey)}
              </a>
            ))}
            <div className="pt-4 space-y-4">
              <a href="tel:+201234567890" className="flex items-center space-x-2 text-gray-700">
                <Phone size={18} />
                <span className="font-medium">+20 123 456 7890</span>
              </a>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t('nav.book_now')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
