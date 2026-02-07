import { useRef, useEffect } from 'react';
import { CTA } from '../utils/constants';

/**
 * CTA Bar Component
 * Links to external feedback survey form
 */
function CTABar() {
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
  }, [])

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-brown-dark via-dark to-dark-light"
      aria-labelledby="cta-heading"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-eco/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-brown/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D97706 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="section-container relative">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          {/* Badge */}
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary-light font-semibold text-sm rounded-full mb-6">
            {CTA.badge}
          </span>

          {/* Heading */}
          <h2
            id="cta-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-soft"
          >
            {CTA.headline}
          </h2>
          <p className="mt-4 text-lg text-soft/70">{CTA.subheadline}</p>

          {/* Survey Link Button */}
          <div className="mt-8">
            <a
              href={CTA.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-lg shadow-lg shadow-primary/30 inline-flex items-center gap-3"
            >
              <SurveyIcon className="w-5 h-5" />
              {CTA.buttonText}
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Note */}
          <p className="mt-6 text-sm text-soft/50">{CTA.note}</p>
        </div>
      </div>
    </section>
  )
}

/**
 * Survey Icon
 */
function SurveyIcon({ className }) {
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
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    </svg>
  )
}

/**
 * External Link Icon
 */
function ExternalLinkIcon({ className }) {
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
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}

export default CTABar
