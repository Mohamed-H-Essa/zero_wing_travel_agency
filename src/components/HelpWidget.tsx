import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HelpWidget() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 hover:shadow-xl"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-green-500 text-white p-4">
            <h3 className="font-semibold text-lg">{t('help_widget.title')}</h3>
            <p className="text-sm text-green-100">{t('help_widget.subtitle')}</p>
          </div>

          <div className="p-6 space-y-4">
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center"
            >
              {t('help_widget.whatsapp')}
            </a>

            <a
              href="mailto:info@egypttours.com"
              className="block w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              {t('help_widget.email')}
            </a>

            <a
              href="tel:+201234567890"
              className="block w-full bg-gray-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
            >
              {t('help_widget.call')}
            </a>

            <p className="text-sm text-gray-600 text-center pt-2">
              {t('help_widget.availability')}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
