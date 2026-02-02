import { useEffect, useRef } from 'react';
import { SPECS } from '../utils/constants';

/**
 * Specs Section Component
 * Technical specifications displayed in a responsive grid
 */
function Specs() {
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

    return () => observer.disconnect()
  }, []);

  return (
    <section
      id="specs"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      aria-labelledby="specs-heading"
    >
      {/* Background with warm gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-soft via-soft-dark/50 to-primary/5" />
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-[300px] h-[600px] bg-gradient-to-r from-brown/5 to-transparent" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-eco/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#78350F 1px, transparent 1px), linear-gradient(90deg, #78350F 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-2 bg-brown/10 text-brown font-semibold text-sm rounded-full mb-4">
            Technical Details
          </span>
          <h2
            id="specs-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark"
          >
            {SPECS.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-dark/70">{SPECS.sectionSubtitle}</p>
        </div>

        {/* Specs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECS.items.map((spec, index) => (
            <SpecCard key={spec.id} spec={spec} delay={index * 75} />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Individual Spec Card
 */
function SpecCard({ spec, delay }) {
  // Color mapping for spec cards with full styling
  const colorConfig = {
    primary: { 
      iconBg: 'bg-gradient-to-br from-primary to-primary-dark',
      border: 'border-primary/20 hover:border-primary/40',
      accent: 'text-primary',
      shadow: 'shadow-primary/5 hover:shadow-primary/15'
    },
    brown: { 
      iconBg: 'bg-gradient-to-br from-brown-light to-brown',
      border: 'border-brown/20 hover:border-brown/40',
      accent: 'text-brown',
      shadow: 'shadow-brown/5 hover:shadow-brown/15'
    },
    eco: { 
      iconBg: 'bg-gradient-to-br from-eco to-eco-dark',
      border: 'border-eco/20 hover:border-eco/40',
      accent: 'text-eco',
      shadow: 'shadow-eco/5 hover:shadow-eco/15'
    },
  }
  
  const colors = colorConfig[spec.color] || colorConfig.primary

  return (
    <div
      className={`animate-on-scroll bg-white/80 backdrop-blur-sm rounded-2xl p-6 border ${colors.border} transition-all duration-300 hover:shadow-xl ${colors.shadow} group`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        {/* Icon with gradient */}
        <div className={`flex-shrink-0 w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <SpecIcon icon={spec.icon} className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-dark/60 mb-1">{spec.label}</p>
          <p className={`text-2xl font-bold ${colors.accent}`}>{spec.value}</p>
          <p className="text-sm text-dark/70 mt-1">{spec.description}</p>
        </div>
      </div>
    </div>
  )
}

/**
 * Spec Icon Selector
 */
function SpecIcon({ icon, className }) {
  switch (icon) {
    case 'battery':
      return <BatteryIcon className={className} />
    case 'outlet':
      return <OutletIcon className={className} />
    case 'power':
      return <PowerIcon className={className} />
    case 'shield':
      return <ShieldIcon className={className} />
    case 'dimensions':
      return <DimensionsIcon className={className} />
    case 'warranty':
      return <WarrantyIcon className={className} />
    default:
      return <BatteryIcon className={className} />
  }
}

/**
 * Battery Icon
 */
function BatteryIcon({ className }) {
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
        d="M4 8h14a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 11v2"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 11v2M10 11v2M14 11v2"
      />
    </svg>
  )
}

/**
 * Outlet Icon
 */
function OutletIcon({ className }) {
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
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  )
}

/**
 * Power Icon
 */
function PowerIcon({ className }) {
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
 * Shield Icon
 */
function ShieldIcon({ className }) {
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
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  )
}

/**
 * Dimensions Icon
 */
function DimensionsIcon({ className }) {
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
        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
      />
    </svg>
  )
}

/**
 * Warranty Icon
 */
function WarrantyIcon({ className }) {
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
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  )
}

export default Specs
