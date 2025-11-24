import { Clock, MapPin, Star } from 'lucide-react';

const tours = [
  {
    id: 1,
    title: 'Pyramids of Giza & Egyptian Museum',
    location: 'Cairo',
    duration: '8 hours',
    price: 89,
    rating: 4.9,
    reviews: 342,
    image: 'https://images.pexels.com/photos/3647171/pexels-photo-3647171.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Explore the last remaining wonder of the ancient world with an expert Egyptologist guide.',
  },
  {
    id: 2,
    title: 'Nile River Cruise & Dinner',
    location: 'Cairo',
    duration: '3 hours',
    price: 65,
    rating: 4.8,
    reviews: 289,
    image: 'https://images.pexels.com/photos/11743327/pexels-photo-11743327.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Enjoy a magical evening cruise with traditional entertainment and authentic Egyptian cuisine.',
  },
  {
    id: 3,
    title: 'Luxor Temple & Valley of the Kings',
    location: 'Luxor',
    duration: '10 hours',
    price: 145,
    rating: 5.0,
    reviews: 428,
    image: 'https://images.pexels.com/photos/13246970/pexels-photo-13246970.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover the magnificent temples and royal tombs in the ancient city of Thebes.',
  },
  {
    id: 4,
    title: 'Red Sea Snorkeling Adventure',
    location: 'Hurghada',
    duration: '6 hours',
    price: 75,
    rating: 4.9,
    reviews: 256,
    image: 'https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Dive into crystal-clear waters and explore vibrant coral reefs and marine life.',
  },
  {
    id: 5,
    title: 'Alexandria Historical Tour',
    location: 'Alexandria',
    duration: '9 hours',
    price: 95,
    rating: 4.7,
    reviews: 198,
    image: 'https://images.pexels.com/photos/14659226/pexels-photo-14659226.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Visit the Bibliotheca Alexandrina, Citadel of Qaitbay, and Roman amphitheater.',
  },
  {
    id: 6,
    title: 'Abu Simbel Temples Day Trip',
    location: 'Aswan',
    duration: '12 hours',
    price: 185,
    rating: 5.0,
    reviews: 312,
    image: 'https://images.pexels.com/photos/10498654/pexels-photo-10498654.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: "Marvel at Ramses II's colossal temples carved into the mountainside.",
  },
];

export default function FeaturedTours() {
  return (
    <section id="tours" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Tours & Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked adventures led by expert local guides in small groups
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-md">
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="text-sm font-semibold text-gray-900">{tour.rating}</span>
                    <span className="text-xs text-gray-600">({tour.reviews})</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{tour.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-gray-600">From </span>
                    <span className="text-2xl font-bold text-gray-900">${tour.price}</span>
                    <span className="text-sm text-gray-600"> /person</span>
                  </div>
                  <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors border-2 border-blue-600">
            View All Tours
          </button>
        </div>
      </div>
    </section>
  );
}
