import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need a visa to visit Egypt?',
    answer: 'Most visitors can obtain a visa on arrival at Egyptian airports for $25 USD. Alternatively, you can apply for an e-visa online before your trip. We provide detailed visa information and assistance with your booking.',
  },
  {
    question: 'What is the best time to visit Egypt?',
    answer: 'The ideal time is October to April when temperatures are mild (15-25°C). Summer months (May-September) can be very hot, especially in Upper Egypt. We operate year-round and can recommend the best times for specific destinations.',
  },
  {
    question: 'Are your tours suitable for families with children?',
    answer: 'Absolutely! Many of our tours are family-friendly. We can customize itineraries to suit children of all ages, with engaging activities and comfortable pacing. Our guides are experienced in making history come alive for young travelers.',
  },
  {
    question: 'What is included in the tour price?',
    answer: 'Our tour prices include expert guides, entrance fees, transportation, and specified meals. International flights, personal expenses, tips, and optional activities are not included. Full details are provided on each tour page.',
  },
  {
    question: 'Is Egypt safe for tourists?',
    answer: 'Yes, Egypt is safe for tourists. We work with trusted local partners, follow security protocols, and monitor destinations closely. Our guides are trained in safety procedures and tourist areas have strong security presence.',
  },
  {
    question: "What's your cancellation policy?",
    answer: 'Free cancellation up to 48 hours before your tour for a full refund. Cancellations within 48 hours are subject to a 50% charge. We recommend travel insurance for added protection. Full terms are available during booking.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about traveling to Egypt with us
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
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
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="contact" className="bg-blue-50 rounded-xl p-8 text-center border-2 border-blue-100">
          <MessageCircle className="mx-auto text-blue-600 mb-4" size={40} />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our travel specialists are here to help plan your perfect Egyptian adventure
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="mailto:info@egypttours.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
