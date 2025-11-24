import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { faqs } from '../data';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {t(`faq.items.${faq.id}.question`)}
                </span>
                <ChevronDown
                  className={`text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {t(`faq.items.${faq.id}.answer`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div id="contact" className="bg-blue-50 rounded-xl p-8 text-center border-2 border-blue-100">
          <MessageCircle className="mx-auto text-blue-600 mb-4" size={40} />
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t('faq.still_questions')}</h3>
          <p className="text-gray-600 mb-6">
            {t('faq.contact_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>{t('faq.whatsapp')}</span>
            </a>
            <a
              href="mailto:info@egypttours.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('faq.email')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
