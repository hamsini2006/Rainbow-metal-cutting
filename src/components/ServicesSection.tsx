import React from 'react';
import { Disc, Layers, Scissors, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
  onExploreMachinery: () => void;
  onViewSpecialCutting: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onExploreMachinery,
  onViewSpecialCutting
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Disc':
        return <Disc className="w-6 h-6 text-gold-dark" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-gold-dark" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-gold-dark" />;
      default:
        return <Disc className="w-6 h-6 text-gold-dark" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-surface-white border-b border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-warm border border-border-light text-gold-dark mb-3">
            <span>Our Service Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-charcoal tracking-tight">
            Industrial Metal Cutting Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
            Customers supply their raw metal material, and Rainbow Metal Cutting carries out the cutting operations according to agreed dimensions, shapes, and technical specifications.
          </p>
        </div>

        {/* 3 Principal Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const isCustom = service.id === 'customized-metal-cutting';
            const isBandSaw = service.id === 'band-saw-cutting';

            return (
              <div
                key={service.id}
                className={`relative flex flex-col rounded-2xl p-6 sm:p-7 border transition-all duration-200 group ${
                  isCustom
                    ? 'bg-charcoal text-white border-charcoal-light shadow-card-elevated ring-1 ring-gold/30'
                    : 'bg-surface-warm text-text-primary border-border-light hover:border-gold/60 hover:shadow-card-elevated'
                }`}
              >
                {/* Top Category Badge & Icon */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm transition-transform group-hover:scale-105 ${
                      isCustom
                        ? 'bg-charcoal-card border-charcoal-light text-gold'
                        : 'bg-surface-white border-border-light'
                    }`}
                  >
                    {getIcon(service.icon)}
                  </div>

                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full font-bold ${
                      isCustom
                        ? 'bg-gold/20 text-gold-light border border-gold/40'
                        : 'bg-surface-white text-gold-dark border border-border-light'
                    }`}
                  >
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  className={`font-heading font-bold text-xl mb-3 tracking-tight ${
                    isCustom ? 'text-white' : 'text-charcoal'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Short & Detailed Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    isCustom ? 'text-gray-300' : 'text-text-primary/80'
                  }`}
                >
                  {service.detailedCopy}
                </p>

                {/* Brochure-supported machinery mapping */}
                <div
                  className={`p-3 rounded-xl text-xs mb-5 border font-mono ${
                    isCustom
                      ? 'bg-charcoal-card/80 border-charcoal-light text-gold-light'
                      : 'bg-surface-white border-border-light text-text-muted'
                  }`}
                >
                  <span className="font-bold block mb-1 uppercase text-[9px] tracking-wider text-gold-dark">
                    Supported Machinery in Brochure:
                  </span>
                  <span>{service.brochureSupportedText}</span>
                </div>

                {/* Features list */}
                <div className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                          isCustom ? 'text-gold' : 'text-gold-dark'
                        }`}
                      />
                      <span className={isCustom ? 'text-gray-200' : 'text-text-primary/90'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="pt-4 border-t border-border-light/60 space-y-2">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className={`w-full py-2.5 px-4 rounded-lg font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                      isCustom
                        ? 'bg-metallic-gold text-charcoal shadow-gold-sm hover:opacity-95'
                        : 'bg-charcoal text-white hover:bg-charcoal-light'
                    }`}
                  >
                    <span>
                      {isCustom ? "Discuss a Custom Cutting Order" : `Enquire: ${service.title}`}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Secondary exploratory links */}
                  {isBandSaw && (
                    <button
                      onClick={onExploreMachinery}
                      className="w-full text-center text-[11px] font-medium text-text-muted hover:text-gold-dark transition-colors py-1 underline decoration-dotted"
                    >
                      View Band Saw Machine Catalogue →
                    </button>
                  )}

                  {isCustom && (
                    <button
                      onClick={onViewSpecialCutting}
                      className="w-full text-center text-[11px] font-medium text-gold-light hover:text-white transition-colors py-1 underline decoration-dotted"
                    >
                      Inspect Special Cutting Examples Gallery →
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Raw material supply disclaimer note */}
        <div className="mt-10 p-4 rounded-xl bg-surface-warm border border-border-light flex items-center justify-center text-center text-xs text-text-muted">
          <ShieldCheck className="w-4 h-4 text-gold-dark mr-2 flex-shrink-0" />
          <span>
            Reminder: Rainbow Metal Cutting does not stock raw materials. Cutting quotes and delivery schedules are confirmed per individual job feasibility upon review.
          </span>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
