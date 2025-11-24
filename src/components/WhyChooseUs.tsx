import { useTranslation } from 'react-i18next';
import { features } from '../data';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('why_choose_us.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('why_choose_us.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <feature.icon className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t(`why_choose_us.items.${feature.id}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`why_choose_us.items.${feature.id}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('why_choose_us.cta_title')}
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('why_choose_us.cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              {t('why_choose_us.plan_trip')}
            </button>
            <button className="bg-blue-800 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-200 border-2 border-blue-500">
              {t('why_choose_us.view_all')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
