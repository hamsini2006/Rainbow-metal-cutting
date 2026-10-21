import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, FileText, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/companyData';

interface NavbarProps {
  onRequestQuote: () => void;
  onOpenAudit?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote, onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Machinery', href: '#machinery' },
    { label: 'Special Cutting', href: '#special-cutting' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top micro-bar with location, phone, and customer material notice */}
      <div className="bg-charcoal text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-charcoal-light">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-medium text-gold-light">Customer-Supplied Material Service</span>
            <span className="hidden md:inline text-text-muted">•</span>
            <span className="hidden md:inline text-gray-300">Ganapathy, Coimbatore</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
              className="flex items-center gap-1.5 text-gray-300 hover:text-gold-light transition-colors"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span className="font-semibold tracking-wide">{COMPANY_DETAILS.phones[0].display}</span>
            </a>
            {onOpenAudit && (
              <button
                onClick={onOpenAudit}
                className="hidden lg:flex items-center gap-1 text-[11px] text-gray-400 hover:text-gold transition-colors underline decoration-dotted"
                title="View brochure compliance and verification audit"
              >
                Brochure Verification
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`w-full bg-surface-white/95 backdrop-blur-md border-b transition-all duration-200 ${
          isScrolled ? 'shadow-card-elevated border-border-light py-2.5' : 'border-border-light/80 py-3.5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo link to #home */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-gold rounded-lg p-1"
            aria-label="Rainbow Metal Cutting Home"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase font-semibold tracking-wider text-text-primary hover:text-gold-dark transition-colors relative py-1 focus:outline-none focus:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onRequestQuote}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-metallic-gold text-charcoal font-heading font-bold text-xs uppercase tracking-wider hover:opacity-95 hover:shadow-gold-md transition-all active:scale-[0.98] flex items-center gap-2 border border-gold-dark/40"
            >
              <FileText className="w-4 h-4 text-charcoal" />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-surface-warm focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-white border-b border-border-light shadow-card-elevated animate-fade-in px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-text-primary hover:bg-surface-warm hover:text-gold-dark transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-text-muted" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-border-light flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 rounded-lg bg-metallic-gold text-charcoal font-heading font-bold text-xs uppercase tracking-wider shadow-gold-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-charcoal" />
              <span>Request a Cutting Quote</span>
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
              className="w-full py-2.5 rounded-lg bg-charcoal text-white font-medium text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call: {COMPANY_DETAILS.phones[0].display}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
