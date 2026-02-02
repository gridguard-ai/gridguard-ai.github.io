import { useEffect, useRef } from 'react';
import { FEATURES } from '../utils/constants';

/**
 * Features Section Component
 * 3-column responsive grid showcasing key product features
 * Includes scroll-triggered fade-in animations
 */
function Features() {
  const sectionRef = useRef(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-soft via-white to-soft" />
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-eco/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            Why Choose Us
          </span>
          <h2
            id="features-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark"
          >
            {FEATURES.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-dark/70">{FEATURES.sectionSubtitle}</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.items.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Individual Feature Card
 */
function FeatureCard({ feature, delay }) {
  // Color mapping for feature cards with gradients
  const colorConfig = {
    primary: { 
      bg: 'bg-gradient-to-br from-primary/10 to-primary/5', 
      iconBg: 'bg-gradient-to-br from-primary to-primary-dark',
      border: 'border-primary/20 hover:border-primary/40',
      shadow: 'hover:shadow-primary/10'
    },
    brown: { 
      bg: 'bg-gradient-to-br from-brown/10 to-brown/5', 
      iconBg: 'bg-gradient-to-br from-brown-light to-brown',
      border: 'border-brown/20 hover:border-brown/40',
      shadow: 'hover:shadow-brown/10'
    },
    eco: { 
      bg: 'bg-gradient-to-br from-eco/10 to-eco/5', 
      iconBg: 'bg-gradient-to-br from-eco to-eco-dark',
      border: 'border-eco/20 hover:border-eco/40',
      shadow: 'hover:shadow-eco/10'
    },
  }
  
  const colors = colorConfig[feature.color] || colorConfig.primary

  return (
    <div
      className={`animate-on-scroll bg-white rounded-2xl p-8 border ${colors.border} transition-all duration-300 hover:shadow-xl ${colors.shadow} text-center lg:text-left group`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon with gradient background */}
      <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.iconBg} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <FeatureIcon icon={feature.icon} className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
      <p className="text-dark/70 leading-relaxed">{feature.description}</p>
    </div>
  )
}

/**
 * Feature Icon Selector
 * Returns the appropriate SVG icon based on icon name
 */
function FeatureIcon({ icon, className }) {
  switch (icon) {
    case 'lightning':
      return <LightningIcon className={className} />
    case 'plug':
      return <PlugIcon className={className} />
    case 'recycle':
      return <RecycleIcon className={className} />
    default:
      return <LightningIcon className={className} />
  }
}

/**
 * Lightning Bolt Icon
 */
function LightningIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  )
}

/**
 * Plug Icon
 */
function PlugIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    </svg>
  )
}

/**
 * Recycle Icon
 */
function RecycleIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  )
}

export default Features
