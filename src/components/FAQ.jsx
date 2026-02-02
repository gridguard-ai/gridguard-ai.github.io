import { useState, useCallback, useRef, useEffect } from 'react';
import { FAQ as FAQ_DATA } from '../utils/constants';

/**
 * FAQ Section Component
 * Accessible accordion with ARIA attributes and keyboard navigation
 * Supports Enter/Space to toggle, up/down arrows to navigate
 */
function FAQ() {
  const [openItems, setOpenItems] = useState(new Set())
  const sectionRef = useRef(null)
  const buttonRefs = useRef([])

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

  // Toggle accordion item
  const toggleItem = useCallback((itemId) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(itemId)) {
        next.delete(itemId)
      } else {
        next.add(itemId)
      }
      return next
    })
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e, itemId, index) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault()
          toggleItem(itemId)
          break
        case 'ArrowDown':
          e.preventDefault()
          if (index < FAQ_DATA.items.length - 1) {
            buttonRefs.current[index + 1]?.focus()
          }
          break
        case 'ArrowUp':
          e.preventDefault()
          if (index > 0) {
            buttonRefs.current[index - 1]?.focus()
          }
          break
        case 'Home':
          e.preventDefault()
          buttonRefs.current[0]?.focus()
          break
        case 'End':
          e.preventDefault()
          buttonRefs.current[FAQ_DATA.items.length - 1]?.focus()
          break
        default:
          break
      }
    },
    [toggleItem]
  );

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-soft to-white" />
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-eco/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-2 bg-eco/10 text-eco font-semibold text-sm rounded-full mb-4">
            Common Questions
          </span>
          <h2
            id="faq-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark"
          >
            {FAQ_DATA.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-dark/70">{FAQ_DATA.sectionSubtitle}</p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4" role="list">
          {FAQ_DATA.items.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id, index)}
              buttonRef={(el) => (buttonRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Individual Accordion Item
 * Fully accessible with ARIA attributes
 */
function AccordionItem({ item, index, isOpen, onToggle, onKeyDown, buttonRef }) {
  const contentId = `faq-content-${item.id}`
  const buttonId = `faq-button-${item.id}`
  
  // Alternate colors for visual interest
  const colors = [
    { border: 'border-primary/20', hoverBorder: 'hover:border-primary/40', icon: 'text-primary', bg: 'bg-primary/5' },
    { border: 'border-eco/20', hoverBorder: 'hover:border-eco/40', icon: 'text-eco', bg: 'bg-eco/5' },
    { border: 'border-brown/20', hoverBorder: 'hover:border-brown/40', icon: 'text-brown', bg: 'bg-brown/5' },
  ]
  const color = colors[index % 3]

  return (
    <div
      className={`animate-on-scroll border-2 ${color.border} ${color.hoverBorder} rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-lg' : 'shadow-sm'}`}
      style={{ transitionDelay: `${index * 50}ms` }}
      role="listitem"
    >
      {/* Accordion Header/Button */}
      <button
        ref={buttonRef}
        id={buttonId}
        className={`w-full flex items-center justify-between p-5 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset ${
          isOpen ? color.bg : 'bg-white hover:bg-soft/50'
        }`}
        onClick={onToggle}
        onKeyDown={onKeyDown}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="text-lg font-semibold text-dark pr-4">{item.question}</span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? `${color.bg} rotate-180` : 'bg-soft'
          }`}
          aria-hidden="true"
        >
          <ChevronDownIcon className={`w-5 h-5 ${color.icon}`} />
        </span>
      </button>

      {/* Accordion Content */}
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-5 pt-0 text-dark/70 leading-relaxed border-t border-soft-dark/20">
          {item.answer}
        </div>
      </div>
    </div>
  )
}

/**
 * Chevron Down Icon
 */
function ChevronDownIcon({ className }) {
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
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )
}

export default FAQ
