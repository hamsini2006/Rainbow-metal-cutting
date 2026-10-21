import React from 'react';
import { Scissors, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SPECIAL_CUTTING_GALLERY } from '../data/companyData';

interface SpecialCuttingGalleryProps {
  onDiscussCustomOrder: () => void;
}

export const SpecialCuttingGallery: React.FC<SpecialCuttingGalleryProps> = ({
  onDiscussCustomOrder
}) => {
  return (
    <section id="special-cutting" className="py-16 sm:py-20 bg-surface-white border-b border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-warm border border-border-light text-gold-dark mb-3">
            <span>Pamphlet Showcase: Our Special Cutting Works</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-charcoal tracking-tight">
            Special Cutting Works & Metal Profiles Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
            Inspired directly by the 'Our Special Cutting Works' page of the company brochure. We accommodate varied cross-sections, structural shapes, and custom length requirements on customer-supplied stock, subject to machine confirmation.
          </p>
        </div>

        {/* Gallery Grid (6 profile types) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIAL_CUTTING_GALLERY.map((item, idx) => (
            <div
              key={item.id}
              className="flex flex-col bg-surface-warm rounded-2xl border border-border-light hover:border-gold/60 hover:shadow-card-elevated transition-all duration-200 overflow-hidden group"
            >
              {/* Profile Graphical Representation Header */}
              <div className="relative h-44 bg-[#17191C] text-white p-5 flex flex-col justify-between overflow-hidden">
                {/* Background subtle grid */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: 'radial-gradient(#C9A227 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}
                />

                {/* Top tag */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-charcoal-card text-gold-light border border-charcoal-light">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    Example #{idx + 1}
                  </span>
                </div>

                {/* Industrial SVG Cross-Section Illustration */}
                <div className="relative z-10 flex items-center justify-center py-2">
                  <svg className="w-20 h-20 drop-shadow-md" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="#383E45" strokeWidth="1" strokeDasharray="3 2" />

                    {/* Differentiated shapes per profile */}
                    {item.id === 'solid-billets' && (
                      <circle cx="32" cy="32" r="22" fill="#292E33" stroke="#C9A227" strokeWidth="2.5" />
                    )}
                    {item.id === 'thick-wall-tubing' && (
                      <>
                        <circle cx="32" cy="32" r="22" fill="#292E33" stroke="#C9A227" strokeWidth="2.5" />
                        <circle cx="32" cy="32" r="13" fill="#17191C" stroke="#E6D28A" strokeWidth="1.5" />
                      </>
                    )}
                    {item.id === 'square-billets' && (
                      <rect x="14" y="14" width="36" height="36" rx="3" fill="#292E33" stroke="#C9A227" strokeWidth="2.5" />
                    )}
                    {item.id === 'structural-profiles' && (
                      <path
                        d="M16 16 H48 V24 H26 V40 H48 V48 H16 Z"
                        fill="#292E33"
                        stroke="#C9A227"
                        strokeWidth="2"
                      />
                    )}
                    {item.id === 'short-length-spacers' && (
                      <>
                        <rect x="12" y="24" width="40" height="16" rx="2" fill="#292E33" stroke="#C9A227" strokeWidth="2" />
                        <line x1="24" y1="20" x2="24" y2="44" stroke="#E6D28A" strokeWidth="1.5" strokeDasharray="2 2" />
                        <line x1="36" y1="20" x2="36" y2="44" stroke="#E6D28A" strokeWidth="1.5" strokeDasharray="2 2" />
                      </>
                    )}
                    {item.id === 'custom-drawings' && (
                      <polygon
                        points="18,48 18,24 34,16 48,26 48,48"
                        fill="#292E33"
                        stroke="#C9A227"
                        strokeWidth="2.5"
                      />
                    )}

                    {/* Precision cut axis line */}
                    <line x1="32" y1="2" x2="32" y2="62" stroke="#E6D28A" strokeWidth="1.2" strokeDasharray="2 2" strokeOpacity="0.7" />
                  </svg>
                </div>

                {/* Profile category label */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-gray-300">
                  <span>Profile Form</span>
                  <span className="text-gold font-bold">{item.profileType}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-heading font-bold text-base text-charcoal mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-primary/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Brochure attribution */}
                <div className="p-2.5 rounded-lg bg-surface-white border border-border-light text-[11px] text-text-muted font-mono flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark flex-shrink-0 mt-0.5" />
                  <span>{item.brochureNote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-charcoal text-white border border-charcoal-light shadow-card-elevated flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <Scissors className="w-5 h-5 text-gold" />
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                Have a Specific Metal Cutting Requirement?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Share your material, drawing, dimensions, quantity, and preferred specifications. Rainbow Metal Cutting will review the request and confirm whether it can be carried out with the available machinery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <button
              onClick={onDiscussCustomOrder}
              className="px-6 py-3.5 rounded-lg bg-metallic-gold text-charcoal font-heading font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-gold-sm transition-opacity flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Discuss a Custom Cutting Order</span>
              <ArrowRight className="w-4 h-4 text-charcoal" />
            </button>
          </div>
        </div>

        {/* Feasibility boundary disclaimer */}
        <div className="mt-6 flex items-center justify-center text-center text-xs text-text-muted gap-2">
          <ShieldAlert className="w-4 h-4 text-gold-dark flex-shrink-0" />
          <span>
            Feasibility Reminder: Rainbow Metal Cutting does not guarantee that every shape or profile can be cut. All customized orders are strictly subject to technical evaluation and mutual confirmation.
          </span>
        </div>

      </div>
    </section>
  );
};

export default SpecialCuttingGallery;
