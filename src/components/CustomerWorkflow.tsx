import React from 'react';
import { Truck, FileSpreadsheet, CheckCircle2, Scissors, ArrowRight, AlertCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';

interface CustomerWorkflowProps {
  onStartEnquiry: () => void;
}

export const CustomerWorkflow: React.FC<CustomerWorkflowProps> = ({ onStartEnquiry }) => {
  const stepIcons = [
    <Truck className="w-6 h-6 text-gold-dark" key="truck" />,
    <FileSpreadsheet className="w-6 h-6 text-gold-dark" key="file" />,
    <CheckCircle2 className="w-6 h-6 text-gold-dark" key="check" />,
    <Scissors className="w-6 h-6 text-gold-dark" key="cut" />
  ];

  return (
    <section id="workflow" className="py-16 sm:py-20 bg-surface-white border-b border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-warm border border-border-light text-gold-dark mb-3">
            <span>Customer-Supplied Material Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-charcoal tracking-tight">
            How Our Metal Cutting Service Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
            Our business model is built entirely around customer-supplied stock. You provide the metal; we perform the required cuts to your agreed dimensions using our circular and band saw machinery.
          </p>
        </div>

        {/* 4 Connected Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          {/* Desktop Connection Line across cards */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-8 left-12 right-12 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 z-0 pointer-events-none" />

          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative z-10 flex flex-col bg-surface-warm rounded-2xl p-6 border border-border-light hover:border-gold/60 hover:shadow-card-elevated transition-all duration-200 group"
            >
              {/* Step indicator header */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-2xl font-black text-gold-dark tracking-tight">
                  {step.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-surface-white border border-border-light flex items-center justify-center group-hover:scale-105 group-hover:border-gold/40 shadow-sm transition-transform">
                  {stepIcons[idx]}
                </div>
              </div>

              {/* Step Tag */}
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1.5 font-bold">
                {step.tag}
              </span>

              {/* Step Title */}
              <h3 className="font-heading font-bold text-base sm:text-lg text-charcoal mb-2.5 leading-snug">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-text-primary/80 leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Step Footer Accent */}
              <div className="mt-4 pt-3 border-t border-border-light/60 flex items-center justify-between text-[11px] font-medium text-text-muted">
                <span>Phase {step.step} of 04</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              </div>
            </div>
          ))}
        </div>

        {/* Important Boundary & Feasibility Clarification Notice */}
        <div className="mt-10 p-5 rounded-xl bg-charcoal text-white border border-charcoal-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-card-soft">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-gray-300">
              <span className="font-bold text-white block mb-0.5">
                Technical Feasibility & Confirmation Rule:
              </span>
              Acceptance of any cutting job strictly depends on material type, section dimensions, available machine capabilities, and mutual agreement between customer and Rainbow Metal Cutting.
            </div>
          </div>

          <button
            onClick={onStartEnquiry}
            className="flex-shrink-0 px-4 py-2 rounded-lg bg-metallic-gold text-charcoal font-heading font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center gap-1.5 whitespace-nowrap self-stretch sm:self-auto justify-center"
          >
            <span>Start Your Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CustomerWorkflow;
