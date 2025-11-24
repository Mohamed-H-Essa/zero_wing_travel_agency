import { Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { tours } from '../data';

export default function FeaturedTours() {
  const { t } = useTranslation();

  return (
    <section id="tours" className="py-16 lg:py-24 bg-brand-neutral/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-primary mb-4">
            {t('featured_tours.title')}
          </h2>
          <p className="text-lg text-brand-secondary/80 max-w-2xl mx-auto">
            {t('featured_tours.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-brand-neutral/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={t(`featured_tours.items.${tour.id}.title`)}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                  <Star className="text-brand-accent fill-current" size={16} />
                  <span className="font-bold text-brand-primary">{tour.rating}</span>
                  <span className="text-brand-neutral text-sm">({tour.reviews})</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-brand-neutral mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{tour.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-brand-primary mb-2">
                  {t(`featured_tours.items.${tour.id}.title`)}
                </h3>
                <p className="text-brand-secondary/70 mb-6 line-clamp-2">
                  {t(`featured_tours.items.${tour.id}.description`)}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-brand-neutral/10">
                  <div>
                    <span className="text-sm text-brand-neutral">{t('featured_tours.from')}</span>
                    <span className="text-2xl font-bold text-brand-primary">${tour.price}</span>
                    <span className="text-sm text-brand-neutral">{t('featured_tours.per_person')}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-brand-primary font-semibold hover:text-brand-accent transition-colors group/btn">
                    <span>{t('featured_tours.view_details')}</span>
                    <ArrowRight
                      size={18}
                      className="transform group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-secondary transition-colors shadow-lg hover:shadow-xl">
            {t('featured_tours.view_all')}
          </button>
        </div>
      </div>
    </section>
  );
}
