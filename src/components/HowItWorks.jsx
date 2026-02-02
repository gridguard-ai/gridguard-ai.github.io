import { useEffect, useRef } from 'react';
import { HOW_IT_WORKS } from '../utils/constants';

/**
 * How It Works Section Component
 * 3-step process visualization with numbered steps and connectors
 * Horizontal layout on desktop, vertical on mobile
 */
function HowItWorks() {
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
      id="how-it-works"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-brown-dark" />
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-eco/10 rounded-full blur-3xl" />
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D97706 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-2 bg-eco/20 text-eco-light font-semibold text-sm rounded-full mb-4">
            Simple Process
          </span>
          <h2
            id="how-it-works-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-soft"
          >
            {HOW_IT_WORKS.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-soft/70">
            {HOW_IT_WORKS.sectionSubtitle}
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connector Line (Desktop) - Gradient through all brand colors */}
          <div className="hidden lg:block absolute top-20 left-[15%] right-[15%] h-1 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary via-eco to-brown-light" />
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {HOW_IT_WORKS.steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                isLast={index === HOW_IT_WORKS.steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Individual Step Card
 */
function StepCard({ step, index, isLast }) {
  // Cycle through colors for each step with gradient backgrounds
  const stepColors = [
    { bg: 'bg-gradient-to-br from-primary to-primary-dark', ring: 'ring-primary/30', iconColor: 'text-primary' },
    { bg: 'bg-gradient-to-br from-eco to-eco-dark', ring: 'ring-eco/30', iconColor: 'text-eco' },
    { bg: 'bg-gradient-to-br from-brown-light to-brown', ring: 'ring-brown/30', iconColor: 'text-brown-light' },
  ]
  const colors = stepColors[index] || stepColors[0]

  return (
    <div
      className="animate-on-scroll relative text-center"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Step Number Circle with glow effect */}
      <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
        <div className={`absolute inset-0 ${colors.bg} rounded-full opacity-20 blur-xl`} />
        <div className={`absolute inset-2 ${colors.bg} rounded-full opacity-30 ring-4 ${colors.ring}`} />
        <div className={`relative w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center shadow-xl`}>
          <span className="text-white font-bold text-xl">{step.number}</span>
        </div>
      </div>

      {/* Arrow Connector (Mobile) */}
      {!isLast && (
        <div className="lg:hidden flex justify-center my-4">
          <div className={`w-0.5 h-8 ${
            index === 0 ? 'bg-gradient-to-b from-primary to-eco' : 'bg-gradient-to-b from-eco to-brown-light'
          }`} />
        </div>
      )}

      {/* Step Icon */}
      <div className="mb-4">
        <StepIcon index={index} className={`w-8 h-8 mx-auto ${colors.iconColor}`} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-soft mb-3">{step.title}</h3>
      <p className="text-soft/70 leading-relaxed max-w-xs mx-auto">
        {step.description}
      </p>
    </div>
  )
}

/**
 * Step Icon Selector
 */
function StepIcon({ index, className }) {
  switch (index) {
    case 0:
      return <CollectionIcon className={className} />
    case 1:
      return <AssemblyIcon className={className} />
    case 2:
      return <InstallIcon className={className} />
    default:
      return <CollectionIcon className={className} />
  }
}

/**
 * Collection Icon (Step 1)
 */
function CollectionIcon({ className }) {
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
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>
  )
}

/**
 * Assembly Icon (Step 2)
 */
function AssemblyIcon({ className }) {
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
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )
}

/**
 * Install Icon (Step 3)
 */
function InstallIcon({ className }) {
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
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  )
}

export default HowItWorks
