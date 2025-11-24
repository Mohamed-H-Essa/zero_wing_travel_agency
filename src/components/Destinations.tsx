import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { destinations } from '../data';

export default function Destinations() {
  const { t } = useTranslation();

  return (
    <section id="destinations" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-primary mb-4">
            {t('destinations.title')}
          </h2>
          <p className="text-lg text-brand-secondary/80 max-w-2xl mx-auto">
            {t('destinations.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0">
                <img
                  src={destination.image}
                  alt={t(`destinations.items.${destination.id}.name`)}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm text-brand-accent font-medium uppercase tracking-wider">
                  {destination.tours} {t('destinations.tours_available')}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {t(`destinations.items.${destination.id}.name`)}
                </h3>
                <p className="text-brand-neutral mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {t(`destinations.items.${destination.id}.description`)}
                </p>
                <div className="flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span>Explore</span>
                  <ArrowRight size={18} className="ml-2 text-brand-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
