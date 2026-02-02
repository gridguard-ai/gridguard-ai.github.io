import { useState, useEffect } from 'react';
import { BRAND, NAV_LINKS, IMAGES } from '../utils/constants';

/**
 * Header Component
 * Sticky navigation with logo, nav links, and mobile hamburger menu
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if hero has background image (for light/dark text)
  const hasHeroBg = !!IMAGES.heroBg;
  const useLightText = hasHeroBg && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : hasHeroBg
          ? 'bg-transparent'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className={`flex items-center gap-2 font-bold text-xl md:text-2xl transition-colors ${
              useLightText ? 'text-white hover:text-primary-light' : 'text-dark hover:text-primary'
            }`}
          >
            <LogoIcon isLight={useLightText} />
            <span className="font-display">{BRAND.name}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`font-medium transition-colors ${
                  useLightText ? 'text-white/90 hover:text-primary-light' : 'text-dark/80 hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#cta" className="btn-primary text-sm px-5 py-2.5">
              Get Notified
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              useLightText ? 'text-white' : 'text-dark'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40">
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-dark text-lg font-medium py-3 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#cta" className="btn-primary text-center mt-4" onClick={() => setIsMenuOpen(false)}>
                Get Notified
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function LogoIcon({ isLight }) {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="8" width="20" height="16" rx="2" fill={isLight ? '#F59E0B' : '#78350F'} />
      <rect x="24" y="12" width="4" height="8" rx="1" fill={isLight ? '#FBBF24' : '#D97706'} />
      <path d="M15 12L11 17H14L13 20L17 15H14L15 12Z" fill={isLight ? '#FFF' : '#059669'} />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default Header;
