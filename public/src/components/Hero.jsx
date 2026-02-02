import { useState, useEffect } from 'react';
import { HERO, IMAGES } from '../utils/constants';

/**
 * Hero Section Component
 * Full-width hero with background image covering entire section
 */
function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const hasBackgroundImage = !!IMAGES.heroBg;

  // Rotate through words every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % HERO.rotatingWords.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = HERO.rotatingWords[currentWordIndex];

  return (
    <section className="relative w-full min-h-screen overflow-hidden z-0">
      {/* Background Image - Full Coverage */}
      {hasBackgroundImage && (
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${IMAGES.heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>
      )}

      {/* Fallback gradient background when no image */}
      {!hasBackgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-soft via-white to-soft">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-eco/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${
              hasBackgroundImage ? 'text-white' : 'text-dark'
            }`}>
              {HERO.headline}
              <span
                className={`block transition-all duration-300 ${
                  isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
                style={{ color: currentItem.color }}
              >
                {currentItem.word}.
              </span>
            </h1>

            <p className={`mt-6 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 ${
              hasBackgroundImage ? 'text-white/85' : 'text-dark/70'
            }`}>
              {HERO.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={HERO.ctaHref}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 transition-all"
              >
                {HERO.ctaText}
                <ArrowIcon className="ml-2 w-5 h-5" />
              </a>
              <a
                href={HERO.secondaryCtaHref}
                className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 transition-all ${
                  hasBackgroundImage
                    ? 'border-white/40 text-white hover:bg-white/10 hover:border-white/60'
                    : 'border-dark/30 text-dark hover:bg-dark hover:text-white'
                }`}
              >
                {HERO.secondaryCtaText}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              <Badge icon={<BoltIcon />} text="Plug & Play" color="primary" isDark={hasBackgroundImage} />
              <Badge icon={<LeafIcon />} text="Eco-Friendly" color="eco" isDark={hasBackgroundImage} />
              <Badge icon={<ShieldIcon />} text="5-Year Warranty" color="amber" isDark={hasBackgroundImage} />
            </div>
          </div>

          {/* Product Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind product */}
              <div className={`absolute inset-0 rounded-full blur-3xl scale-110 ${
                hasBackgroundImage ? 'bg-primary/20' : 'bg-primary/10'
              }`} />
              
              <img
                src={IMAGES.heroProduct}
                alt="GridGuard home battery unit"
                className="relative z-10 w-full max-w-md drop-shadow-2xl"
                width="400"
                height="320"
              />

              {/* Floating Badge - Eco */}
              <div className={`absolute -bottom-2 -right-2 md:bottom-4 md:right-0 rounded-2xl p-4 shadow-xl ${
                hasBackgroundImage ? 'bg-black/60 backdrop-blur-md border border-white/10' : 'bg-white border border-gray-100'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-eco to-eco-dark rounded-full flex items-center justify-center">
                    <RecycleIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${hasBackgroundImage ? 'text-white' : 'text-dark'}`}>Eco-Friendly</p>
                    <p className="text-xs text-eco">Recycled Cells</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Power */}
              <div className={`absolute -top-2 -left-2 md:top-4 md:left-0 rounded-2xl p-4 shadow-xl ${
                hasBackgroundImage ? 'bg-black/60 backdrop-blur-md border border-white/10' : 'bg-white border border-gray-100'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                    <BoltIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${hasBackgroundImage ? 'text-white' : 'text-dark'}`}>2 kWh</p>
                    <p className="text-xs text-primary">Per Module</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text, color, isDark }) {
  const colors = {
    primary: isDark ? 'bg-primary/25 text-primary-light' : 'bg-primary/10 text-primary',
    eco: isDark ? 'bg-eco/25 text-eco-light' : 'bg-eco/10 text-eco',
    amber: isDark ? 'bg-amber-500/25 text-amber-300' : 'bg-amber-500/10 text-amber-600',
  };

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${colors[color]} ${isDark ? 'backdrop-blur-sm' : ''}`}>
      <span className="w-4 h-4">{icon}</span>
      <span className={isDark ? 'text-white/90' : ''}>{text}</span>
    </div>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function BoltIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function LeafIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function ShieldIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function RecycleIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

export default Hero;
