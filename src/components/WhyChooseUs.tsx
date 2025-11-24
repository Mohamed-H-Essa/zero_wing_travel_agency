import { Users, Award, HeadphonesIcon, Shield, MapPin, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Small Group Tours',
    description: 'Maximum 12 travelers per tour for a personalized, intimate experience with your expert guide.',
  },
  {
    icon: Award,
    title: 'Expert Local Guides',
    description: 'Licensed Egyptologists and certified guides with deep knowledge and passion for their heritage.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock customer support throughout your journey for complete peace of mind.',
  },
  {
    icon: Shield,
    title: 'Best Price Guarantee',
    description: 'We match or beat any competitor price with our transparent, no hidden fees policy.',
  },
  {
    icon: MapPin,
    title: 'Customizable Itineraries',
    description: 'Tailor your adventure to your interests, pace, and budget with our flexible planning.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Protected transactions with flexible payment options and free cancellation up to 48 hours.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Egypt Tours
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering unforgettable experiences with exceptional service and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <feature.icon className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Start Your Egyptian Adventure?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who've explored Egypt with us. Let our experts craft your perfect journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              Plan My Trip
            </button>
            <button className="bg-blue-800 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-200 border-2 border-blue-500">
              View All Tours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
