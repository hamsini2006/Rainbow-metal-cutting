import React from 'react';
import { ArrowRight, Disc, Layers, ShieldCheck, MapPin, CheckCircle2, Sliders } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeroSectionProps {
  onRequestQuote: () => void;
  onExploreMachinery: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestQuote,
  onExploreMachinery,
}) => {
  return (
    <section id="home" className="relative bg-surface-warm pt-8 pb-16 sm:pt-12 sm:pb-24 border-b border-border-light overflow-hidden">
      {/* Subtle background industrial grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#17191C 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      {/* Decorative top-right gold accent glow */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold-light/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Core Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Badges row: Location & Business Model */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface-white border border-border-light text-charcoal shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-gold-dark" />
                <span>Ganapathy, Coimbatore</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-charcoal text-white border border-charcoal-light shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Customer-Supplied Material Service</span>
              </span>
            </div>

            {/* Primary Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black font-heading text-charcoal tracking-tight leading-[1.12]">
                Your Metal. <br className="hidden sm:inline" />
                Your Specifications. <br />
                <span className="text-metallic-gold">Our Cutting Expertise.</span>
              </h1>
              <p className="text-xs uppercase font-bold tracking-widest text-gold-dark pt-1">
                Precision Metal-Cutting Job Work • Coimbatore, Tamil Nadu
              </p>
            </div>

            {/* Supporting Copy - Exact prompt specification */}
            <p className="text-base sm:text-lg text-text-primary/90 leading-relaxed max-w-2xl">
              Rainbow Metal Cutting provides circular saw, band saw, and customized metal-cutting services in Ganapathy, Coimbatore. Customers supply their metal material, and we carry out the required cutting work based on the agreed specifications and available machine capabilities.
            </p>

            {/* Important Business Model Clarity Box */}
            <div className="p-4 rounded-xl bg-surface-white border-l-4 border-gold border border-border-light shadow-card-soft">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-gold/10 text-gold-dark mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark" />
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-text-primary">
                  <p className="font-bold text-charcoal">
                    Job-Work Cutting Model (Customer Supplies the Metal)
                  </p>
                  <p className="text-text-muted text-xs leading-relaxed">
                    We do not sell raw metals or finished stock. You provide the bars, billets, or pipes to our workshop, and our team executes the required cuts to your agreed dimensions.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onRequestQuote}
                className="px-6 py-3.5 rounded-lg bg-metallic-gold text-charcoal font-heading font-bold text-sm uppercase tracking-wider hover:opacity-95 hover:shadow-gold-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 border border-gold-dark/40"
              >
                <span>Request a Cutting Quote</span>
                <ArrowRight className="w-4 h-4 text-charcoal" />
              </button>

              <button
                onClick={onExploreMachinery}
                className="px-6 py-3.5 rounded-lg bg-surface-white text-charcoal font-heading font-semibold text-sm uppercase tracking-wider hover:bg-surface-warm border border-border-light hover:border-gold/60 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Sliders className="w-4 h-4 text-gold-dark" />
                <span>Explore Our Machinery</span>
              </button>
            </div>

            {/* Machine Quick Capabilities Tagline */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-muted">
              <span className="flex items-center gap-1.5 font-medium">
                <Layers className="w-3.5 h-3.5 text-gold-dark" />
                <span>Band Saw Cutting: COSEN (320 & 250 mm) & LAXSON</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Disc className="w-3.5 h-3.5 text-gold-dark" />
                <span>Circular Saw Cutting: 110 mm, 75 mm & 100 mm</span>
              </span>
            </div>

          </div>

          {/* Right Column: Industrial Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Decorative gold backdrop border */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-gold-dark via-gold-light to-gold opacity-30 blur-sm" />

              {/* Main Industrial Display Card */}
              <div className="relative rounded-2xl bg-charcoal text-white p-6 sm:p-7 shadow-2xl border border-charcoal-light overflow-hidden">

                {/* Subtle blade shimmer line */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

                {/* Card Top: Machine Status Header */}
                <div className="flex items-center justify-between pb-5 border-b border-charcoal-light">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-mono text-xs text-gold-light uppercase tracking-wider">
                      Industrial Cutting Workshop
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 bg-charcoal-light px-2.5 py-1 rounded">
                    Sanganur Rd, Ganapathy
                  </span>
                </div>

                {/* Graphic Illustration of Precision Metal Cutting */}
                <div className="py-6">
                  <div className="relative bg-[#111315] rounded-xl p-5 border border-charcoal-light/70 overflow-hidden">
                    {/* Billet stock representation */}
                    <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-3">
                      <span>CLIENT MATERIAL INFLOW</span>
                      <span className="text-gold">CUTTING BED #1</span>
                    </div>

                    {/* Industrial cutting graphic */}
                    <div className="relative h-32 bg-[#1a1d21] rounded-lg border border-charcoal-light flex items-center justify-center overflow-hidden">
                      {/* Metal billet */}
                      <div className="absolute h-14 w-4/5 rounded bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 shadow-inner flex items-center justify-between px-4">
                        <span className="font-mono text-[10px] text-charcoal font-bold tracking-tight">
                          Customer Steel Stock
                        </span>
                        <span className="font-mono text-[9px] text-charcoal/70">
                          Pre-Cut Axis
                        </span>
                      </div>

                      {/* Active Cutting Saw Blade Representation */}
                      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gold shadow-[0_0_12px_#E6D28A] z-10 flex flex-col justify-between items-center py-1">
                        <div className="w-3 h-3 rounded-full bg-gold animate-bounce" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white shadow" />
                      </div>

                      {/* Dimension caliper overlay */}
                      <div className="absolute bottom-2 left-6 right-6 flex items-center justify-between text-[10px] font-mono text-gold-light/90 z-20">
                        <span>← Customer Length</span>
                        <span className="bg-charcoal/80 px-2 py-0.5 rounded border border-gold/30">
                          Precision Cut Face
                        </span>
                        <span>Tolerance Cut →</span>
                      </div>
                    </div>

                    {/* Operational parameters */}
                    <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] font-mono">
                      <div className="p-2 rounded bg-charcoal-card border border-charcoal-light">
                        <span className="text-gray-400 block text-[9px]">CUTTING SYSTEMS</span>
                        <span className="text-white font-semibold">Band Saw & Circular Saw</span>
                      </div>
                      <div className="p-2 rounded bg-charcoal-card border border-charcoal-light">
                        <span className="text-gray-400 block text-[9px]">MATERIAL LOGISTICS</span>
                        <span className="text-gold font-semibold">Customer Arranges Stock</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Verified Highlights */}
                <div className="pt-2 border-t border-charcoal-light grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded bg-charcoal-card">
                    <span className="block font-heading font-bold text-white text-base text-gold">6</span>
                    <span className="text-[10px] text-gray-400 uppercase">Brochure Units</span>
                  </div>
                  <div className="p-2 rounded bg-charcoal-card">
                    <span className="block font-heading font-bold text-white text-base text-gold">320 mm</span>
                    <span className="text-[10px] text-gray-400 uppercase">Max Band Spec</span>
                  </div>
                  <div className="p-2 rounded bg-charcoal-card">
                    <span className="block font-heading font-bold text-white text-base text-gold">Crane</span>
                    <span className="text-[10px] text-gray-400 uppercase">Handling Bay</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
