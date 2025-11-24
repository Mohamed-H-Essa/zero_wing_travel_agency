import { Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { tours } from '../data';

export default function FeaturedTours() {
  const { t } = useTranslation();

  return (
    <section id="tours" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-4">
            {t('featured_tours.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('featured_tours.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={t(`featured_tours.items.${tour.id}.title`)}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="text-brand-gold fill-current" size={16} />
                  <span className="font-bold text-gray-900">{tour.rating}</span>
                  <span className="text-gray-500 text-sm">({tour.reviews})</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{tour.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-brand-dark mb-2">
                  {t(`featured_tours.items.${tour.id}.title`)}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {t(`featured_tours.items.${tour.id}.description`)}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-gray-500">{t('featured_tours.from')}</span>
                    <span className="text-2xl font-bold text-brand-dark">${tour.price}</span>
                    <span className="text-sm text-gray-500">{t('featured_tours.per_person')}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-brand-dark font-semibold hover:text-brand-gold transition-colors group/btn">
                    <span>{t('featured_tours.view_details')}</span>
                    <ArrowRight
                      size={18}
                      className="transform group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-dark text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-gray transition-colors shadow-lg hover:shadow-xl">
            {t('featured_tours.view_all')}
          </button>
        </div>
      </div>
    </section>
  );
}
