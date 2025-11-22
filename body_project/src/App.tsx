import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import FeaturedTours from './components/FeaturedTours';
import Destinations from './components/Destinations';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HelpWidget from './components/HelpWidget';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SocialProof />
      <FeaturedTours />
      <Destinations />
      <WhyChooseUs />
      <FAQ />
      <Footer />
      <HelpWidget />
    </div>
  );
}

export default App;
