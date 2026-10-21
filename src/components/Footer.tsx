import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck, FileCheck } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/companyData';

interface FooterProps {
  onOpenAudit: () => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit, onRequestQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-white border-t border-charcoal-light relative">
      {/* Top micro-banner */}
      <div className="border-b border-charcoal-light py-4 px-4 bg-charcoal-card">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-gray-300">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Customer-Supplied Material Service • Ganapathy, Coimbatore</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAudit}
              className="text-gold-light hover:text-white transition-colors underline decoration-dotted flex items-center gap-1.5"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Brochure Verification Audit</span>
            </button>
            <span className="text-gray-600">•</span>
            <button
              onClick={onRequestQuote}
              className="text-gold font-semibold hover:text-white transition-colors"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Col 1: Brand & Factual Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="dark" />

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Rainbow Metal Cutting provides circular saw, band saw, and customized metal-cutting job work in Ganapathy, Coimbatore. Customers supply their metal material, and we carry out the required cutting work based on agreed specifications and available machine capabilities.
            </p>

            <div className="pt-2 text-xs text-gray-400 font-mono space-y-1">
              <div>Proprietor: <span className="text-white font-semibold">{COMPANY_DETAILS.proprietor}</span></div>
              <div>Quality: <span className="text-gold-light">{COMPANY_DETAILS.certification}</span></div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-gold-light">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Machinery', href: '#machinery' },
                { label: 'Special Cutting', href: '#special-cutting' },
                { label: 'Facilities', href: '#facilities' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-gold transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-gold-light">
              Cutting Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="text-gray-400 hover:text-gold transition-colors block py-0.5"
                >
                  Circular Saw Cutting
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="text-gray-400 hover:text-gold transition-colors block py-0.5"
                >
                  Band Saw Cutting
                </a>
              </li>
              <li>
                <a
                  href="#special-cutting"
                  onClick={(e) => handleLinkClick(e, '#special-cutting')}
                  className="text-gray-400 hover:text-gold transition-colors block py-0.5"
                >
                  Special Cutting Works
                </a>
              </li>
              <li>
                <a
                  href="#workflow"
                  onClick={(e) => handleLinkClick(e, '#workflow')}
                  className="text-gray-400 hover:text-gold transition-colors block py-0.5"
                >
                  How Service Works
                </a>
              </li>
              <li>
                <a
                  href="#quote-form"
                  onClick={(e) => handleLinkClick(e, '#quote-form')}
                  className="text-gray-400 hover:text-gold transition-colors block py-0.5"
                >
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Workshop Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-gold-light">
              Workshop Contact
            </h4>
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  No. 92-A, Sanganur Road, Opp. Aswarya Bakery, Ganapathy, Coimbatore – 641006.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <div className="space-x-2">
                  <a href={`tel:${COMPANY_DETAILS.phones[0].raw}`} className="hover:text-white transition-colors">
                    {COMPANY_DETAILS.phones[0].display}
                  </a>
                  <span>/</span>
                  <a href={`tel:${COMPANY_DETAILS.phones[1].raw}`} className="hover:text-white transition-colors">
                    {COMPANY_DETAILS.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="w-full py-2 px-3 rounded-lg bg-charcoal-card border border-charcoal-light hover:border-gold/60 text-xs font-semibold text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-2"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-gold" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-charcoal-light flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} {COMPANY_DETAILS.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Ganapathy, Coimbatore, Tamil Nadu, India</span>
            <span>•</span>
            <span>Customer-Supplied Metal Job Work</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
