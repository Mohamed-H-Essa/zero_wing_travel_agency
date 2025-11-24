import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher';
import { navLinks } from '../data';
import logo from '../assets/logo_without_bg.png';

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
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Zero Wing Logo" className="h-10 w-auto" />
            <span className="text-xl font-serif font-bold text-brand-dark">Zero Wing</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-brand-gray hover:text-brand-gold transition-colors font-medium"
              >
                {t(link.translationKey)}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="tel:+201234567890" className="flex items-center space-x-2 text-brand-gray hover:text-brand-gold transition-colors">
              <Phone size={18} />
              <span className="font-medium">+20 123 456 7890</span>
            </a>
            <button className="bg-brand-dark text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-brand-gray transition-colors">
              {t('nav.book_now')}
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-gray hover:text-brand-gold transition-colors"
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
                className="block py-3 text-brand-gray hover:text-brand-gold font-medium border-b border-gray-50 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.translationKey)}
              </a>
            ))}
            <div className="pt-4 space-y-4">
              <a href="tel:+201234567890" className="flex items-center space-x-2 text-brand-gray">
                <Phone size={18} />
                <span className="font-medium">+20 123 456 7890</span>
              </a>
              <button className="w-full bg-brand-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-gray transition-colors">
                {t('nav.book_now')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
