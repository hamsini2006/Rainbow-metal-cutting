import React from 'react';
import { PackageCheck, Boxes, Warehouse, Building2, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { VERIFIED_FACILITIES, COMPANY_DETAILS } from '../data/companyData';

export const FacilitiesSection: React.FC = () => {
  const getFacilityIcon = (term: string) => {
    switch (term) {
      case 'Piece':
        return <PackageCheck className="w-6 h-6 text-gold" />;
      case 'Crane':
        return <Boxes className="w-6 h-6 text-gold" />;
      case 'Stock Pin':
        return <Warehouse className="w-6 h-6 text-gold" />;
      default:
        return <PackageCheck className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section id="facilities" className="py-16 sm:py-20 bg-surface-warm border-b border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-white border border-border-light text-gold-dark mb-3">
            <span>Pamphlet Showcase: Our Facilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-charcoal tracking-tight">
            Workshop & Material Handling Facilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
            The infrastructure supporting raw metal intake, safe overhead loading, batch grouping, and organized cutting workflows at our Ganapathy, Coimbatore workshop.
          </p>
        </div>

        {/* 3 Verified Facility Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {VERIFIED_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="flex flex-col bg-surface-white rounded-2xl border border-border-light hover:border-gold/60 hover:shadow-card-elevated transition-all duration-200 overflow-hidden group"
            >
              {/* Graphic Banner for each facility */}
              <div className="bg-charcoal text-white p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-charcoal-card border border-charcoal-light flex items-center justify-center">
                    {getFacilityIcon(facility.brochureTerm)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-charcoal-card text-gold-light border border-charcoal-light">
                    Brochure Verified
                  </span>
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-mono uppercase text-gray-400 block mb-1">
                    Brochure Term:
                  </span>
                  <h3 className="font-heading font-black text-2xl text-white tracking-tight">
                    "{facility.brochureTerm}"
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-base text-charcoal mb-2">
                    {facility.displayTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-text-primary/90 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Verbatim Brochure Citation */}
                <div className="p-3 rounded-xl bg-surface-warm border border-border-light text-[11px] font-mono text-text-muted flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-charcoal block">Brochure Citation:</span>
                    <span>{facility.brochureNote}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Building Area & Workshop Staging Banner */}
        <div className="bg-surface-white rounded-2xl border border-border-light p-6 sm:p-8 shadow-card-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

            {/* Left 8 cols: Building details */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-gold-dark" />
                <h3 className="font-heading font-bold text-lg text-charcoal">
                  Stated Workshop Building Area: {COMPANY_DETAILS.buildingArea}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-text-primary/80 leading-relaxed">
                The printed company brochure states a building dimension of <strong>70 × 50 Sq. ft.</strong> for the Ganapathy workshop, encompassing the machine cutting bays, overhead crane travel span, and customer stock pin staging zones.
              </p>
              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Brochure Note:</strong> {COMPANY_DETAILS.buildingAreaNotice} We do not silently convert or invent additional building measurements.
                </span>
              </div>
            </div>

            {/* Right 4 cols: Factual Facility Parameters */}
            <div className="lg:col-span-4 bg-surface-warm rounded-xl p-4 border border-border-light text-xs font-mono space-y-2">
              <span className="text-[10px] uppercase font-bold text-text-muted block">
                BROCHURE-STATED FACILITY DATA
              </span>
              <div className="flex justify-between py-1 border-b border-border-light/60">
                <span className="text-text-muted">Building Dimension:</span>
                <span className="font-bold text-charcoal">{COMPANY_DETAILS.buildingArea}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border-light/60">
                <span className="text-text-muted">Overhead Crane:</span>
                <span className="font-bold text-charcoal">Pictured in Brochure</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border-light/60">
                <span className="text-text-muted">Stock Pin Staging:</span>
                <span className="font-bold text-charcoal">Pictured in Brochure</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-text-muted">Piece Organization:</span>
                <span className="font-bold text-charcoal">Listed in Brochure</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FacilitiesSection;
