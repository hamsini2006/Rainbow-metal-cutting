import React, { useState } from 'react';
import { Layers, Disc, Filter, ArrowRight, Info, Eye, CheckCircle2 } from 'lucide-react';
import { VERIFIED_MACHINES } from '../data/companyData';
import { MachineInfo, MachineCategory } from '../types';
import { MachineDetailModal } from './MachineDetailModal';

interface MachineryCatalogueProps {
  onEnquireMachine: (machineName: string) => void;
}

export const MachineryCatalogue: React.FC<MachineryCatalogueProps> = ({ onEnquireMachine }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | MachineCategory>('All');
  const [inspectingMachine, setInspectingMachine] = useState<MachineInfo | null>(null);

  const filteredMachines = VERIFIED_MACHINES.filter((machine) => {
    if (activeFilter === 'All') return true;
    return machine.category === activeFilter;
  });

  return (
    <section id="machinery" className="py-16 sm:py-20 bg-surface-warm border-b border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-white border border-border-light text-gold-dark mb-3">
            <span>Verified Workshop Plant</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-charcoal tracking-tight">
            Machinery Catalogue & Stated Specifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
            All six cutting machine entries listed in the official Rainbow Metal Cutting company brochure. We operate both automatic band saws and high-speed circular saws for customer-supplied stock.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-text-muted font-medium mr-2">
            <Filter className="w-3.5 h-3.5 text-gold-dark" />
            <span>Filter Catalogue:</span>
          </div>

          <button
            onClick={() => setActiveFilter('All')}
            className={`px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
              activeFilter === 'All'
                ? 'bg-charcoal text-white shadow-sm'
                : 'bg-surface-white text-text-primary border border-border-light hover:border-gold/60'
            }`}
          >
            All Machines (6)
          </button>

          <button
            onClick={() => setActiveFilter('Band Saw')}
            className={`px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 ${
              activeFilter === 'Band Saw'
                ? 'bg-charcoal text-white shadow-sm'
                : 'bg-surface-white text-text-primary border border-border-light hover:border-gold/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-gold" />
            <span>Band Saws (3)</span>
          </button>

          <button
            onClick={() => setActiveFilter('Circular Saw')}
            className={`px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 ${
              activeFilter === 'Circular Saw'
                ? 'bg-charcoal text-white shadow-sm'
                : 'bg-surface-white text-text-primary border border-border-light hover:border-gold/60'
            }`}
          >
            <Disc className="w-3.5 h-3.5 text-gold" />
            <span>Circular Saws (3)</span>
          </button>
        </div>

        {/* Machines Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMachines.map((machine) => {
            const isBandSaw = machine.category === 'Band Saw';

            return (
              <div
                key={machine.id}
                className="flex flex-col bg-surface-white rounded-2xl border border-border-light hover:border-gold/70 hover:shadow-card-elevated transition-all duration-200 overflow-hidden group"
              >
                {/* Visual Header / Representative Machine Badge */}
                <div className="relative bg-gradient-to-br from-charcoal to-charcoal-light text-white p-5 overflow-hidden">
                  {/* Subtle saw-tooth watermark */}
                  <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
                    {isBandSaw ? (
                      <Layers className="w-32 h-32 text-gold" />
                    ) : (
                      <Disc className="w-32 h-32 text-gold" />
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-charcoal-card text-gold-light border border-charcoal-light">
                      {machine.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      Service Plant #{machine.id.slice(0, 5)}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-2 relative z-10">
                    {machine.name}
                  </h3>

                  {/* Stated Brochure Specification Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gold/20 border border-gold/40 text-gold-light text-xs font-mono font-bold relative z-10">
                    <span className="text-[9px] uppercase tracking-wider opacity-80">Brochure Spec:</span>
                    <span>{machine.brochureSpec}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Factual description */}
                  <p className="text-xs text-text-primary/90 leading-relaxed">
                    {machine.description}
                  </p>

                  {/* Feature checkmarks */}
                  <div className="space-y-1.5 pt-1">
                    {machine.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-text-muted">
                        <CheckCircle2 className="w-3 h-3 text-gold-dark flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Brochure verbatim listing note */}
                  <div className="p-2.5 rounded-lg bg-surface-warm border border-border-light text-[11px] text-text-muted font-mono">
                    <span className="block font-bold text-charcoal text-[10px] uppercase">
                      Brochure Print:
                    </span>
                    <span className="text-text-primary">"{machine.brochureListing}"</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-border-light flex items-center gap-2">
                    <button
                      onClick={() => setInspectingMachine(machine)}
                      className="px-3 py-2 rounded-lg bg-surface-warm text-charcoal hover:bg-surface-white border border-border-light text-xs font-semibold flex items-center gap-1 transition-colors"
                      title="Inspect brochure details"
                    >
                      <Eye className="w-3.5 h-3.5 text-gold-dark" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onEnquireMachine(machine.name)}
                      className="flex-1 py-2 px-3 rounded-lg bg-metallic-gold text-charcoal font-heading font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-gold-sm transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Enquire For This Machine</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Machinery Notice Footnote */}
        <div className="mt-12 p-4 rounded-xl bg-surface-white border border-border-light text-center text-xs text-text-muted max-w-2xl mx-auto flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-gold-dark flex-shrink-0" />
          <span>
            <strong>Service Machinery Catalogue:</strong> These entries describe workshop machinery used for cutting customer-supplied materials. None of these machines are for sale.
          </span>
        </div>

      </div>

      {/* Detail inspection modal */}
      <MachineDetailModal
        machine={inspectingMachine}
        onClose={() => setInspectingMachine(null)}
        onEnquire={onEnquireMachine}
      />
    </section>
  );
};

export default MachineryCatalogue;
