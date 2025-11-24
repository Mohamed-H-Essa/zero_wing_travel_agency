import { useTranslation } from 'react-i18next';
import { socialProofStats } from '../data';

export default function SocialProof() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {socialProofStats.map((stat) => (
            <div key={stat.id}>
              <p className="text-3xl font-bold text-brand-dark">
                {stat.valueKey ? t(stat.valueKey) : stat.value}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {t(stat.translationKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
