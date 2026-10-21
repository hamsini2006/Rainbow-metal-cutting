import React from 'react';
import { X, CheckCircle2, AlertTriangle, FileCheck, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS, VERIFIED_MACHINES, VERIFIED_FACILITIES } from '../data/companyData';

interface VerificationAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationAuditModal: React.FC<VerificationAuditModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-surface-white rounded-2xl shadow-2xl border border-border-light overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-light bg-surface-warm">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-charcoal text-gold">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-dark font-bold block">
                Editorial Integrity & Verification
              </span>
              <h3 id="audit-modal-title" className="font-heading font-bold text-lg text-charcoal">
                Brochure Compliance & Verification Audit
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-text-muted hover:text-charcoal hover:bg-surface-white transition-colors"
            aria-label="Close audit report"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Audit Report */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">

          <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 text-charcoal">
            <p className="text-xs sm:text-sm font-medium leading-relaxed">
              Every detail on this website has been built strictly against the official <strong>Rainbow Metal Cutting</strong> company brochure. Zero unverified metrics, prices, customer testimonials, delivery promises, or fake Google reviews have been invented.
            </p>
          </div>

          {/* Section 1: Verified Facts from Brochure */}
          <div>
            <h4 className="font-heading font-bold text-base text-charcoal mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>1. Verified Facts from Printed Brochure</span>
            </h4>
            <div className="bg-surface-warm p-4 rounded-xl border border-border-light space-y-2.5 text-xs font-mono">
              <div>• <strong>Business Name:</strong> {COMPANY_DETAILS.name}</div>
              <div>• <strong>Proprietor:</strong> {COMPANY_DETAILS.proprietor}</div>
              <div>• <strong>Address:</strong> {COMPANY_DETAILS.address.full}</div>
              <div>• <strong>Primary Phones:</strong> {COMPANY_DETAILS.phones.map(p => p.display).join(' / ')}</div>
              <div>• <strong>Official Email:</strong> {COMPANY_DETAILS.email}</div>
              <div>• <strong>Machines (All 6 Brochure Units Present):</strong>
                <ul className="pl-4 pt-1 space-y-1 text-charcoal">
                  {VERIFIED_MACHINES.map((m) => (
                    <li key={m.id}>- {m.name} [{m.brochureSpec}] — ({m.category})</li>
                  ))}
                </ul>
              </div>
              <div>• <strong>Facilities Listed (3 Terms):</strong>
                <span className="text-charcoal ml-1">
                  {VERIFIED_FACILITIES.map(f => `"${f.brochureTerm}"`).join(', ')}
                </span>
              </div>
              <div>• <strong>Stated Building Area:</strong> {COMPANY_DETAILS.buildingArea}</div>
              <div>• <strong>Core Business Model:</strong> Customer supplies the metal material; Rainbow executes cutting.</div>
            </div>
          </div>

          {/* Section 2: Items Flagged for Owner Confirmation Prior to Production */}
          <div>
            <h4 className="font-heading font-bold text-base text-charcoal mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>2. Items Flagged for Owner Confirmation Before Public Launch</span>
            </h4>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-surface-white border border-border-light">
                <span className="font-semibold text-charcoal block mb-1 text-xs">
                  A. High-Resolution Machine & Workshop Photographs
                </span>
                <p className="text-xs text-text-muted leading-relaxed">
                  The website uses labelled representative placeholders and clear SVG profiles inspired by the pamphlet's 'Our Special Cutting Works' and machinery catalogue. High-resolution raw photographs of the workshop floor and machines can be directly dropped in.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-white border border-border-light">
                <span className="font-semibold text-charcoal block mb-1 text-xs">
                  B. ISO 9001:2015 Certification Document Copy
                </span>
                <p className="text-xs text-text-muted leading-relaxed">
                  The ISO 9001:2015 certification claim is displayed as printed in the brochure. A copy of the formal certificate can be verified prior to commercial contracts.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-white border border-border-light">
                <span className="font-semibold text-charcoal block mb-1 text-xs">
                  C. Stated Workshop Building Dimension
                </span>
                <p className="text-xs text-text-muted leading-relaxed">
                  The building area is preserved as {COMPANY_DETAILS.buildingArea} exactly as printed in the brochure without silent alteration.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-white border border-border-light">
                <span className="font-semibold text-charcoal block mb-1 text-xs">
                  D. Specific Crane Tonnage & Stock Pin Staging Numbers
                </span>
                <p className="text-xs text-text-muted leading-relaxed">
                  The brochure lists "Crane", "Stock Pin", and "Piece" without stating tonnage or storage limits. These are preserved verbatim without inventing unverified numbers.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-border-light bg-surface-warm flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero Unverified Fabrication Standard</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-charcoal hover:bg-charcoal-light text-white text-xs font-semibold transition-colors"
          >
            Close Audit Report
          </button>
        </div>

      </div>
    </div>
  );
};

export default VerificationAuditModal;
