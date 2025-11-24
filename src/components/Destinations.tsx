import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Cairo',
    description: 'Ancient pyramids & vibrant culture',
    tours: 28,
    image: 'https://images.pexels.com/photos/3252924/pexels-photo-3252924.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Luxor',
    description: 'Valley of the Kings & temples',
    tours: 18,
    image: 'https://images.pexels.com/photos/17361683/pexels-photo-17361683/free-photo-of-view-of-the-luxor-temple-in-egypt.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Aswan',
    description: 'Nubian culture & Nile beauty',
    tours: 15,
    image: 'https://images.pexels.com/photos/17361670/pexels-photo-17361670/free-photo-of-temple-of-philae-in-aswan-egypt.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'Hurghada',
    description: 'Red Sea diving & beaches',
    tours: 22,
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    name: 'Alexandria',
    description: 'Mediterranean charm & history',
    tours: 12,
    image: 'https://images.pexels.com/photos/10727962/pexels-photo-10727962.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    name: 'Sharm El Sheikh',
    description: 'Resort paradise & coral reefs',
    tours: 20,
    image: 'https://images.pexels.com/photos/15849619/pexels-photo-15849619/free-photo-of-tropical-beach-in-sharm-el-sheikh-in-egypt.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Egypt's Treasures
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From ancient wonders to pristine beaches, discover the best destinations Egypt has to offer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-72">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-200 mb-3">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{destination.tours} tours available</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
