import React from 'react';
import { Award, Building2, User, MapPin, Disc, Layers, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface CompanyOverviewProps {
  onExploreServices: () => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({ onExploreServices }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-surface-warm border-b border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-white border border-border-light text-gold-dark mb-3">
            <span>About Rainbow Metal Cutting</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-charcoal tracking-tight">
            Factual Company Overview & Workshop Profile
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
            Operating from Sanganur Road, Ganapathy, Coimbatore, Rainbow Metal Cutting delivers specialized circular saw, band saw, and customized metal-cutting job work on customer-provided stock.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Factual Business Profile (7 cols) */}
          <div className="lg:col-span-7 space-y-6">

            <div className="bg-surface-white rounded-2xl p-6 sm:p-7 border border-border-light shadow-card-soft space-y-4">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-charcoal">
                Dedicated Job-Work Metal Cutting in Coimbatore
              </h3>

              <p className="text-sm text-text-primary/90 leading-relaxed">
                Rainbow Metal Cutting is a specialized industrial service workshop located opposite Aswarya Bakery on Sanganur Road, Ganapathy, Coimbatore. The company’s core business focus is executing precision cutting operations on customer-supplied raw metals, solid billets, rods, profiles, and structural pipes.
              </p>

              <p className="text-sm text-text-primary/90 leading-relaxed">
                Rather than acting as a metal stockist or merchant, Rainbow Metal Cutting provides direct machine capacity. Clients bring their own material and supply required cutting lengths, drawings, or shape tolerances. We review machine capabilities, agree on technical parameters, and execute the cuts using our listed circular and band saw units.
              </p>

              {/* Factual Brochure Details Grid */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-surface-warm border border-border-light flex items-start gap-3">
                  <User className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="text-text-muted uppercase text-[10px] font-bold block">Proprietor</span>
                    <span className="font-semibold text-charcoal text-sm">{COMPANY_DETAILS.proprietor}</span>
                    <span className="text-text-muted text-[11px] block">As printed in brochure</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-warm border border-border-light flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="text-text-muted uppercase text-[10px] font-bold block">Industrial Location</span>
                    <span className="font-semibold text-charcoal text-sm">Ganapathy, Coimbatore</span>
                    <span className="text-text-muted text-[11px] block">No. 92-A, Sanganur Road</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-warm border border-border-light flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="text-text-muted uppercase text-[10px] font-bold block">Stated Building Area</span>
                    <span className="font-semibold text-charcoal text-sm">{COMPANY_DETAILS.buildingArea}</span>
                    <span className="text-amber-700 text-[10px] font-medium block">Brochure-stated figure*</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-warm border border-border-light flex items-start gap-3">
                  <Award className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="text-text-muted uppercase text-[10px] font-bold block">Certification Claim</span>
                    <span className="font-semibold text-charcoal text-sm">{COMPANY_DETAILS.certification}</span>
                    <span className="text-amber-700 text-[10px] font-medium block">Brochure claim*</span>
                  </div>
                </div>
              </div>

              {/* Integrity & Verification Note */}
              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Brochure Verification Policy:</strong> All business data above is reproduced strictly from printed company materials. The stated building area ({COMPANY_DETAILS.buildingArea}) and ISO certification are company-provided claims flagged for customer verification prior to formal contracts.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Workshop Capabilities Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">

            {/* Core Cutting Categories Card */}
            <div className="bg-charcoal text-white rounded-2xl p-6 sm:p-7 border border-charcoal-light shadow-card-elevated space-y-5">
              <h3 className="font-heading font-bold text-lg text-white flex items-center justify-between">
                <span>Workshop Cutting Machinery</span>
                <span className="text-xs font-mono text-gold-light bg-charcoal-card px-2.5 py-1 rounded">
                  6 Brochure Units
                </span>
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="p-3 rounded-xl bg-charcoal-card border border-charcoal-light flex items-start gap-3">
                  <Layers className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Band Saw Cutting Machinery</span>
                    <p className="text-gray-300">
                      Features COSEN Fully Automatic (320 mm & 250 mm) and LAXSON Band Saw machines for solid bars, pipes, and heavy sections.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-charcoal-card border border-charcoal-light flex items-start gap-3">
                  <Disc className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Circular Saw Cutting Machinery</span>
                    <p className="text-gray-300">
                      Features Circular Saw Machine (Dia. 110 mm), MEGA (75 mm), and MFCG (100 mm) stations for rapid, burr-free perpendicular parting.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-charcoal-card border border-charcoal-light flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Material Handling Infrastructure</span>
                    <p className="text-gray-300">
                      Equipped with overhead Crane facility, Stock Pin staging bays, and systematic Piece handling pictured in brochure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onExploreServices}
                  className="w-full py-2.5 rounded-lg bg-metallic-gold text-charcoal font-heading font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity"
                >
                  View Services & Machine Capabilities
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyOverview;
