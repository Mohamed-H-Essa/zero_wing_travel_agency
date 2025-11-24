import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { faqs } from '../data';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-primary mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-brand-secondary/80">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-brand-neutral/5 rounded-xl overflow-hidden border border-brand-neutral/20 hover:border-brand-accent/50 transition-colors"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-brand-neutral/10 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-brand-primary pr-8">
                  {t(`faq.items.${faq.id}.question`)}
                </span>
                <ChevronDown
                  className={`text-brand-primary flex-shrink-0 transition-transform duration-300 ${
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
                <p className="px-6 pb-5 text-brand-secondary/70 leading-relaxed">
                  {t(`faq.items.${faq.id}.answer`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="contact" 
          className="bg-brand-neutral/10 rounded-xl p-8 text-center border-2 border-brand-neutral/20"
        >
          <MessageCircle className="mx-auto text-brand-primary mb-4" size={40} />
          <h3 className="text-xl font-serif font-bold text-brand-primary mb-2">{t('faq.still_questions')}</h3>
          <p className="text-brand-secondary/70 mb-6">
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
              className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-secondary transition-colors"
            >
              {t('faq.email')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
