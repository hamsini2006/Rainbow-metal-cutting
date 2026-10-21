import React from 'react';
import { X, Layers, Disc, CheckCircle2, FileText, ShieldAlert, Cpu } from 'lucide-react';
import { MachineInfo } from '../types';

interface MachineDetailModalProps {
  machine: MachineInfo | null;
  onClose: () => void;
  onEnquire: (machineName: string) => void;
}

export const MachineDetailModal: React.FC<MachineDetailModalProps> = ({
  machine,
  onClose,
  onEnquire
}) => {
  if (!machine) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-machine-title"
    >
      <div
        className="relative w-full max-w-2xl bg-surface-white rounded-2xl shadow-2xl border border-border-light overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-light bg-surface-warm">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-charcoal text-gold">
              {machine.category === 'Band Saw' ? (
                <Layers className="w-5 h-5" />
              ) : (
                <Disc className="w-5 h-5" />
              )}
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-dark font-bold block">
                {machine.category} • Workshop Cutting Unit
              </span>
              <h3 id="modal-machine-title" className="font-heading font-bold text-lg text-charcoal">
                {machine.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-text-muted hover:text-charcoal hover:bg-surface-white transition-colors"
            aria-label="Close machine details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">

          {/* Stated Brochure Specification Highlight */}
          <div className="p-4 rounded-xl bg-charcoal text-white border border-charcoal-light flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                Stated Specification in Brochure:
              </span>
              <span className="font-heading font-bold text-xl text-gold-light">
                {machine.brochureSpec}
              </span>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-charcoal-card text-gray-300 border border-charcoal-light">
              {machine.operationMode}
            </span>
          </div>

          {/* Representative Visual Placeholder with Clear Attribution */}
          <div className="relative rounded-xl bg-surface-warm border border-border-light p-6 text-center overflow-hidden">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-surface-white border border-border-light flex items-center justify-center text-gold-dark mb-3 shadow-sm">
              <Cpu className="w-8 h-8" />
            </div>
            <p className="font-heading font-bold text-charcoal text-sm">
              {machine.name}
            </p>
            <p className="text-xs text-text-muted mt-1 max-w-md mx-auto">
              Original machine photograph in printed company brochure. Genuine workshop photos can be swapped seamlessly in production.
            </p>
            <span className="inline-block mt-2 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-surface-white border border-border-light text-text-muted">
              Representative Service Asset
            </span>
          </div>

          {/* Factual Description */}
          <div>
            <h4 className="font-heading font-bold text-charcoal mb-1.5 text-xs uppercase tracking-wider">
              Operational Overview
            </h4>
            <p className="text-xs sm:text-sm text-text-primary/90 leading-relaxed">
              {machine.description}
            </p>
          </div>

          {/* Brochure Reference Verification */}
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">Brochure Citation:</span>
              <p className="text-amber-900 leading-relaxed font-mono text-[11px]">
                {machine.brochureReference}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-heading font-bold text-charcoal mb-2 text-xs uppercase tracking-wider">
              Service Attributes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {machine.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-surface-warm border border-border-light">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark flex-shrink-0" />
                  <span className="text-text-primary">{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 border-t border-border-light bg-surface-warm flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-text-muted">
            Service listing only. Rainbow Metal Cutting does not sell machinery.
          </span>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-lg text-xs font-semibold text-text-muted hover:text-charcoal hover:bg-surface-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire(machine.name);
              }}
              className="w-1/2 sm:w-auto px-5 py-2 rounded-lg bg-metallic-gold text-charcoal font-heading font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-gold-sm transition-opacity flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Enquire For This Machine</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MachineDetailModal;
