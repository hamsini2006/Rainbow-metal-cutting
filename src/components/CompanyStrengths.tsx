import React from 'react';
import { Cpu, ShieldCheck, Anchor, MapPin, ClipboardCheck, Award, ArrowRight } from 'lucide-react';
import { COMPANY_STRENGTHS } from '../data/companyData';

interface CompanyStrengthsProps {
  onStartEnquiry: () => void;
}

export const CompanyStrengths: React.FC<CompanyStrengthsProps> = ({ onStartEnquiry }) => {
  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-gold-dark" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-gold-dark" />;
      case 'Anchor':
        return <Anchor className="w-5 h-5 text-gold-dark" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-gold-dark" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 text-gold-dark" />;
      case 'Award':
        return <Award className="w-5 h-5 text-gold-dark" />;
      default:
        return <Cpu className="w-5 h-5 text-gold-dark" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-surface-white border-b border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-warm border border-border-light text-gold-dark mb-3">
            <span>Factual Service Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-charcoal tracking-tight">
            Why Customers Enquire with Rainbow Metal Cutting
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
            Our practical advantages are rooted strictly in confirmed workshop capabilities, dedicated machinery, and transparent customer-supplied material job work.
          </p>
        </div>

        {/* 6 Factual Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_STRENGTHS.map((strength, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-warm border border-border-light hover:border-gold/60 hover:shadow-card-elevated transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-surface-white border border-border-light flex items-center justify-center mb-4 shadow-sm">
                  {getStrengthIcon(strength.icon)}
                </div>

                <h3 className="font-heading font-bold text-base text-charcoal mb-2">
                  {strength.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-primary/80 leading-relaxed">
                  {strength.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border-light/60 flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span>Verified Factor #{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-surface-warm border border-border-light flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-base text-charcoal">
              Ready to verify cutting feasibility for your metal stock?
            </h4>
            <p className="text-xs text-text-muted">
              Share your drawing, material grade, and cut dimensions for an immediate review by our workshop team.
            </p>
          </div>

          <button
            onClick={onStartEnquiry}
            className="px-5 py-2.5 rounded-lg bg-metallic-gold text-charcoal font-heading font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-gold-sm transition-opacity flex items-center gap-2 whitespace-nowrap"
          >
            <span>Submit Cutting Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CompanyStrengths;
