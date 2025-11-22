import MinimalHero from './components/MinimalHero';

function App() {
  const handleCtaClick = () => {
    console.log('Plan my trip clicked');
  };

  return (
    <div className="min-h-screen">
      <MinimalHero
        overline="EGYPT - TAILOR‑MADE JOURNEYS"
        title="Unforgettable trips, crafted just for you."
        ctaLabel="Plan my trip"
        backgroundImageUrl="./egypt_bg.jpg"
        onCtaClick={handleCtaClick}
      />
    </div>
  );
}

export default App;
