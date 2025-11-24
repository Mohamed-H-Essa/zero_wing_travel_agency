import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-white/90 hover:text-brand-accent transition-colors"
      aria-label="Switch Language"
    >
      <Globe size={18} />
      <span className="text-sm font-medium uppercase">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
    </button>
  );
}
