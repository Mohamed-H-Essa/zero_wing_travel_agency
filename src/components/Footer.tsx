import { useTranslation } from 'react-i18next';
import { footerLinks, socialLinks } from '../data';

export default function Footer() {
  const { t } = useTranslation();
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
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.id} href={link.href} className="hover:text-blue-400 transition-colors">
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {t(link.translationKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.policies')}</h3>
            <ul className="space-y-2">
              {footerLinks.policies.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {t(link.translationKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact_us')}</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => (
                <li key={item.id} className="flex items-center space-x-3">
                  <item.icon className="flex-shrink-0" size={18} />
                  {item.href ? (
                    <a href={item.href} className="hover:text-blue-400 transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{t('footer.secure_booking')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{t('footer.safe_payment')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{t('footer.licensed_guides')}</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
