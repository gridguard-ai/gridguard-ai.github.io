import { useState, useRef, useEffect } from 'react';
import { CTA } from '../utils/constants';

/**
 * CTA Bar Component
 * Email capture form with client-side validation
 * Shows success/error states without backend integration
 */
function CTABar() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')
  const sectionRef = useRef(null)
  const inputRef = useRef(null)

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

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate email
    if (!email.trim()) {
      setStatus('error')
      setErrorMessage('Please enter your email address.')
      inputRef.current?.focus()
      return
    }

    if (!isValidEmail(email)) {
      setStatus('error')
      setErrorMessage(CTA.errorMessage)
      inputRef.current?.focus()
      return
    }

    // Simulate API call (no backend)
    setStatus('loading')

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Success!
    setStatus('success')
    setEmail('')
  }

  // Reset form after showing success
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [status]);

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
            Early Access
          </span>

          {/* Heading */}
          <h2
            id="cta-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-soft"
          >
            {CTA.headline}
          </h2>
          <p className="mt-4 text-lg text-soft/70">{CTA.subheadline}</p>

          {/* Email Form */}
          {status === 'success' ? (
            <SuccessMessage message={CTA.successMessage} />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8"
              noValidate
            >
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="flex-1 relative">
                  <label htmlFor="email-input" className="sr-only">
                    Email address
                  </label>
                  <input
                    ref={inputRef}
                    id="email-input"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (status === 'error') setStatus('idle')
                    }}
                    placeholder={CTA.placeholder}
                    className={`w-full px-5 py-4 rounded-full bg-white/10 backdrop-blur-sm text-soft placeholder-soft/50 border-2 transition-all duration-300 focus:outline-none focus:ring-0 ${
                      status === 'error'
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/20 focus:border-primary focus:bg-white/15'
                    }`}
                    aria-invalid={status === 'error'}
                    aria-describedby={status === 'error' ? 'email-error' : undefined}
                    disabled={status === 'loading'}
                    autoComplete="email"
                  />
                  {/* Email icon */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <EmailIcon className="w-5 h-5 text-soft/40" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary px-8 py-4 text-lg shadow-lg shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <LoadingSpinner />
                      Submitting...
                    </span>
                  ) : (
                    CTA.buttonText
                  )}
                </button>
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <p
                  id="email-error"
                  className="mt-3 text-red-400 text-sm"
                  role="alert"
                >
                  {errorMessage}
                </p>
              )}

              {/* Privacy Note */}
              <p className="mt-4 text-sm text-soft/50">{CTA.privacyNote}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/**
 * Success Message Component
 */
function SuccessMessage({ message }) {
  return (
    <div className="mt-8 p-6 bg-gradient-to-r from-eco/20 to-eco/10 rounded-2xl animate-fade-in border border-eco/30">
      <div className="flex items-center justify-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-eco to-eco-dark rounded-full flex items-center justify-center shadow-lg shadow-eco/30">
          <CheckIcon className="w-6 h-6 text-white" />
        </div>
        <p className="text-lg font-medium text-soft">{message}</p>
      </div>
    </div>
  )
}

/**
 * Email Icon
 */
function EmailIcon({ className }) {
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
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

/**
 * Check Icon
 */
function CheckIcon({ className }) {
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
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

/**
 * Loading Spinner
 */
function LoadingSpinner() {
  return (
    <svg
      className="animate-spin w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export default CTABar
