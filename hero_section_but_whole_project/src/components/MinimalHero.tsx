interface MinimalHeroProps {
  overline: string;
  title: string;
  ctaLabel: string;
  backgroundImageUrl: string;
  onCtaClick?: () => void;
}

export default function MinimalHero({
  overline,
  title,
  ctaLabel,
  backgroundImageUrl,
  onCtaClick,
}: MinimalHeroProps) {
  return (
    <section className="relative h-screen min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-subtle-zoom"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="relative h-full flex items-center justify-center px-6 lg:justify-start lg:px-16 xl:px-24">
        <div className="max-w-[600px] text-center lg:text-left animate-fade-in-up">
          <p className="text-xs uppercase tracking-widest text-white/90 font-medium mb-4 lg:mb-6">
            {overline}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 lg:mb-10">
            {title}
          </h1>

          <button
            onClick={onCtaClick}
            className="inline-block px-8 py-4 bg-[#FF8A3D] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#E67A2D] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FF8A3D]/50"
          >
            {ctaLabel}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
