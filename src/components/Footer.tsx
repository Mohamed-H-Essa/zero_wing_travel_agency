import { useTranslation } from 'react-i18next';
import { footerLinks, socialLinks } from '../data';
import logo from '../assets/logo_with_bg_but_rounded.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-brand-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Zero Wing Logo" className="h-12 w-12 rounded-full" />
              <span className="text-xl font-serif font-bold text-white">Zero Wing</span>
            </div>
            <p className="text-brand-neutral mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.id} href={link.href} target='_blank' className="hover:text-brand-accent transition-colors">
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif font-semibold mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-brand-accent transition-colors">
                    {t(link.translationKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-semibold mb-4">{t('footer.policies')}</h3>
            <ul className="space-y-2">
              {footerLinks.policies.map((link) => (
                <li key={link.id}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="hover:text-brand-accent transition-colors">
                      {t(link.translationKey)}
                    </Link>
                  ) : (
                    <a href={link.href} className="hover:text-brand-accent transition-colors">
                      {t(link.translationKey)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-semibold mb-4">{t('footer.contact_us')}</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => (
                <li key={item.id} className="flex items-center space-x-3">
                  <item.icon className="flex-shrink-0" size={18} />
                  {item.href ? (
                    <a href={item.href} className="hover:text-brand-accent transition-colors">
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

        <div className="border-t border-brand-secondary pt-8">
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
            <p className="text-sm text-brand-neutral">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
