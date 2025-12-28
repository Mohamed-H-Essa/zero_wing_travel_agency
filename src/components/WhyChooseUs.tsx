import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { features, contactInfo } from '../data';

export default function WhyChooseUs() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';

  return (
    <section id="about" className="py-16 lg:py-24 bg-brand-neutral/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-primary mb-4">
            {t('why_choose_us.title')}
          </h2>
          <p className="text-lg text-brand-secondary/80 max-w-2xl mx-auto">
            {t('why_choose_us.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-brand-neutral/10"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-5">
                <feature.icon className="text-brand-primary" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-primary mb-3">
                {feature.content[lang].title}
              </h3>
              <p className="text-brand-secondary/70 leading-relaxed">
                {feature.content[lang].description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-brand-primary rounded-2xl p-8 lg:p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
            {t('why_choose_us.cta_title')}
          </h3>
          <p className="text-lg text-brand-neutral/80 mb-8 max-w-2xl mx-auto">
            {t('why_choose_us.cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={contactInfo.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t('nav.book_now')}
            </a>
            {/* <button className="bg-transparent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 border-2 border-brand-accent">
              {t('why_choose_us.view_all')}
            </button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
