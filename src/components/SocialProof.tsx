import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { socialProofStats } from '../data';

export default function SocialProof() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-12 border-b border-brand-neutral/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {socialProofStats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-3xl font-bold text-brand-primary">
                {stat.valueKey ? t(stat.valueKey) : stat.value}
              </p>
              <p className="text-sm text-brand-secondary/70 mt-1 font-medium">
                {t(stat.translationKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
