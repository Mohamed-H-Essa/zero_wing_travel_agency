import { motion, useScroll, useTransform } from 'framer-motion';

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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen min-h-screen w-full overflow-hidden bg-brand-primary">
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <img
          src={backgroundImageUrl}
          alt="Hero Background"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/40 to-transparent" />

      <div className="relative h-full flex items-center justify-center px-6 lg:justify-start lg:px-16 xl:px-24">
        <div className="max-w-[800px] text-center lg:text-left">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.2em] text-white font-semibold mb-4 lg:mb-6 drop-shadow-lg"
          >
            {overline}
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 lg:mb-10 drop-shadow-lg"
          >
            {title}
          </motion.h1>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCtaClick}
            className="inline-block px-10 py-5 bg-brand-accent text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-brand-primary hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-accent/30"
          >
            {ctaLabel}
          </motion.button>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <svg
          className="w-8 h-8 text-white/80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}
