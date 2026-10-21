import React from 'react';
import { Phone, Mail, MapPin, Award, User, Clock, ExternalLink, ShieldAlert } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface ContactSectionProps {
  onRequestQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestQuote }) => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-surface-white border-b border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-warm border border-border-light text-gold-dark mb-3">
            <span>Direct Communications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-charcoal tracking-tight">
            Contact Rainbow Metal Cutting
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
            Reach out directly to discuss job requirements, confirm machine availability, or arrange material delivery to our Ganapathy workshop in Coimbatore.
          </p>
        </div>

        {/* 2-Column Contact Info & Workshop Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Contact Channels (7 cols) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-surface-warm border border-border-light hover:border-gold/60 transition-all">
                <div className="w-10 h-10 rounded-xl bg-surface-white border border-border-light flex items-center justify-center text-gold-dark mb-4 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block mb-1">
                  Click-to-Call Phone Numbers
                </span>
                <div className="space-y-1.5">
                  {COMPANY_DETAILS.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.raw}`}
                      className="block text-base font-heading font-bold text-charcoal hover:text-gold-dark transition-colors"
                    >
                      +91 {phone.display}
                    </a>
                  ))}
                </div>
                <span className="inline-block mt-3 text-[11px] text-text-muted">
                  Direct contact for quotes & job updates
                </span>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-surface-warm border border-border-light hover:border-gold/60 transition-all">
                <div className="w-10 h-10 rounded-xl bg-surface-white border border-border-light flex items-center justify-center text-gold-dark mb-4 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block mb-1">
                  Official Email Address
                </span>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="block text-sm font-mono font-bold text-charcoal hover:text-gold-dark transition-colors break-all"
                >
                  {COMPANY_DETAILS.email}
                </a>
                <span className="inline-block mt-3 text-[11px] text-text-muted">
                  Send engineering drawings & specs
                </span>
              </div>

            </div>

            {/* Address & Workshop Location Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-warm border border-border-light space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-surface-white border border-border-light flex items-center justify-center text-gold-dark flex-shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block mb-1">
                    Workshop Postal Address
                  </span>
                  <h3 className="font-heading font-bold text-lg text-charcoal mb-1">
                    {COMPANY_DETAILS.name}
                  </h3>
                  <address className="not-italic text-xs sm:text-sm text-text-primary/90 leading-relaxed font-sans">
                    {COMPANY_DETAILS.address.line1},<br />
                    <span className="font-semibold text-charcoal">{COMPANY_DETAILS.address.landmark}</span>,<br />
                    {COMPANY_DETAILS.address.area}, {COMPANY_DETAILS.address.city} – {COMPANY_DETAILS.address.pincode},<br />
                    {COMPANY_DETAILS.address.state}.
                  </address>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sanganur+Road+Ganapathy+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-white border border-border-light text-xs font-semibold text-charcoal hover:border-gold/60 hover:text-gold-dark transition-colors shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-dark" />
                  <span>View Sanganur Road Area on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-text-muted" />
                </a>

                <button
                  onClick={onRequestQuote}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-metallic-gold text-charcoal font-heading font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-gold-sm transition-opacity"
                >
                  <span>Request a Quote Online</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Proprietor & Brochure Verification Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">

            {/* Leadership & Registration Box */}
            <div className="p-6 rounded-2xl bg-charcoal text-white border border-charcoal-light shadow-card-elevated space-y-4">
              <h3 className="font-heading font-bold text-base text-white flex items-center justify-between">
                <span>Brochure Leadership & Certification</span>
                <span className="text-[10px] font-mono text-gold-light bg-charcoal-card px-2.5 py-1 rounded">
                  Printed in Brochure
                </span>
              </h3>

              <div className="p-3.5 rounded-xl bg-charcoal-card border border-charcoal-light flex items-start gap-3">
                <User className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                    Proprietor Printed in Brochure:
                  </span>
                  <span className="font-heading font-bold text-white text-base">
                    {COMPANY_DETAILS.proprietor}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-charcoal-card border border-charcoal-light flex items-start gap-3">
                <Award className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                    Quality Management Claim:
                  </span>
                  <span className="font-semibold text-gold-light text-sm block">
                    {COMPANY_DETAILS.certification}
                  </span>
                  <span className="text-[10px] text-gray-400 block mt-0.5">
                    Brochure-stated claim (company provided)
                  </span>
                </div>
              </div>

              {/* Working Hours / Coordination Notice */}
              <div className="p-3.5 rounded-xl bg-charcoal-card border border-charcoal-light flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                    Operational Coordination:
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Prior coordination by telephone is recommended before dispatching heavy metal stock to ensure overhead crane and stock pin staging availability.
                  </p>
                </div>
              </div>

              {/* Tax / GSTIN Integrity Note */}
              <div className="p-3 rounded-lg bg-charcoal border border-charcoal-light text-[11px] font-mono text-gray-400 flex items-start gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Tax Details:</strong> GSTIN and commercial invoice credentials are provided directly upon quotation confirmation. Unverified tax identifiers are not published.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
