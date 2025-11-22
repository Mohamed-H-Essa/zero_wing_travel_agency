export default function Hero() {
  return (
    <section className="pt-16 lg:pt-20">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-dashed border-blue-300 rounded-lg mx-4 my-8 p-12 lg:p-24">
        <div className="text-center space-y-4">
          <div className="inline-block px-6 py-3 bg-white rounded-lg shadow-sm">
            <p className="text-2xl font-bold text-blue-600">🏛️ YOUR HERO SECTION GOES HERE</p>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Replace this placeholder with your custom hero design including your headline, subtext, search form, and stunning imagery.
          </p>
          <div className="pt-4 text-sm text-gray-500">
            Recommended height: 500-700px
          </div>
        </div>
      </div>
    </section>
  );
}
