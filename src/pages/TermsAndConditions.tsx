import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  const { t } = useTranslation();
  const sections = t('terms_page.sections', { returnObjects: true }) as Array<{ title: string; content: string }>;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-6">
          {t('terms_page.title')}
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          {t('terms_page.intro')}
        </p>
        
        <div className="space-y-8">
          {sections && sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link to="/" className="text-brand-accent hover:text-brand-primary font-medium transition-colors">
            &larr; {t('nav.back_to_home') || 'Back to Home'}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
