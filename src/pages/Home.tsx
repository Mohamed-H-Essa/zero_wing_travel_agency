import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import heroImage from '../assets/hero.jpg';
import MinimalHero from '../components/MinimalHero';
import SocialProof from '../components/SocialProof';
import FeaturedTours from '../components/FeaturedTours';
import Destinations from '../components/Destinations';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import HelpWidget from '../components/HelpWidget';

export default function Home() {
  const { t } = useTranslation();

  const handleCtaClick = () => {
    // Scroll to the tours section or handle the CTA action
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MinimalHero
        overline={t('hero.overline')}
        title={t('hero.title')}
        ctaLabel={t('hero.cta')}
        backgroundImageUrl={heroImage}
        onCtaClick={handleCtaClick}
      />
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
