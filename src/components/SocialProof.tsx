import { Star, Users, Award, Shield } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Star className="text-yellow-500 fill-yellow-500" size={24} />
              <Star className="text-yellow-500 fill-yellow-500" size={24} />
              <Star className="text-yellow-500 fill-yellow-500" size={24} />
              <Star className="text-yellow-500 fill-yellow-500" size={24} />
              <Star className="text-yellow-500 fill-yellow-500" size={24} />
            </div>
            <p className="text-2xl font-bold text-gray-900">4.9/5</p>
            <p className="text-sm text-gray-600 mt-1">2,450+ Reviews</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="text-blue-600" size={32} />
            </div>
            <p className="text-2xl font-bold text-gray-900">15,000+</p>
            <p className="text-sm text-gray-600 mt-1">Happy Travelers</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Award className="text-blue-600" size={32} />
            </div>
            <p className="text-2xl font-bold text-gray-900">12 Years</p>
            <p className="text-sm text-gray-600 mt-1">Experience</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Shield className="text-blue-600" size={32} />
            </div>
            <p className="text-2xl font-bold text-gray-900">100%</p>
            <p className="text-sm text-gray-600 mt-1">Secure Booking</p>
          </div>
        </div>
      </div>
    </section>
  );
}
