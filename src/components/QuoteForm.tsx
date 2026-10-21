import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw, FileText, ShieldCheck, Info } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteFormProps {
  initialMachine?: string;
  initialService?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialMachine,
  initialService
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    customerName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceType: 'Circular Saw Cutting',
    materialType: '',
    materialDimensions: '',
    requiredFinishedDimensions: '',
    quantity: '',
    notes: '',
    additionalComments: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);

  // Synchronize initialMachine or initialService when props change
  useEffect(() => {
    if (initialService) {
      if (initialService.includes('Band')) {
        setFormData(prev => ({ ...prev, serviceType: 'Band Saw Cutting' }));
      } else if (initialService.includes('Custom')) {
        setFormData(prev => ({ ...prev, serviceType: 'Customized Metal Cutting' }));
      } else {
        setFormData(prev => ({ ...prev, serviceType: 'Circular Saw Cutting' }));
      }
    } else if (initialMachine) {
      if (initialMachine.toLowerCase().includes('cosen') || initialMachine.toLowerCase().includes('laxson')) {
        setFormData(prev => ({
          ...prev,
          serviceType: 'Band Saw Cutting',
          notes: `Enquiry specifically for machine: ${initialMachine}`
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          serviceType: 'Circular Saw Cutting',
          notes: `Enquiry specifically for machine: ${initialMachine}`
        }));
      }
    }
  }, [initialMachine, initialService]);

  // Validation function
  const validate = (data: QuoteFormData) => {
    const errs: Record<string, string> = {};

    if (!data.customerName.trim()) {
      errs.customerName = 'Customer name is required.';
    }

    if (!data.phone.trim()) {
      errs.phone = 'Phone number is required for quote confirmation.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(data.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (8–15 digits).';
    }

    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!data.requiredFinishedDimensions.trim()) {
      errs.requiredFinishedDimensions = 'Required finished dimensions or cut lengths are required.';
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({
      customerName: true,
      phone: true,
      requiredFinishedDimensions: true
    });

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate frontend submission feedback
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmittedData({ ...formData });
      }, 700);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      customerName: '',
      companyName: '',
      phone: '',
      email: '',
      serviceType: 'Circular Saw Cutting',
      materialType: '',
      materialDimensions: '',
      requiredFinishedDimensions: '',
      quantity: '',
      notes: '',
      additionalComments: ''
    });
    setTouched({});
    setErrors({});
  };

  return (
    <section id="quote-form" className="py-16 sm:py-20 bg-surface-warm border-b border-border-light relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-white border border-border-light text-gold-dark mb-3">
            <span>Customer Cutting Enquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-charcoal tracking-tight">
            Request a Cutting Quote
          </h2>
          <p className="mt-2 text-sm text-text-muted max-w-2xl mx-auto">
            Bring your metal material to our Ganapathy workshop. Fill out your required cut dimensions below to request a feasibility review and quote.
          </p>
        </div>

        {/* Core Mandatory Explanatory Message from Prompt */}
        <div className="p-4 sm:p-5 rounded-2xl bg-surface-white border-l-4 border-gold border border-border-light shadow-card-soft mb-8">
          <div className="flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-text-primary leading-relaxed">
              <span className="font-bold text-charcoal block mb-0.5">
                Notice on Feasibility & Quotations:
              </span>
              Please provide the metal material and cutting specifications you would like us to review. We will need to confirm job feasibility and quotation details before the work is accepted.
            </div>
          </div>
        </div>

        {/* Form Card or Success Feedback State */}
        <div className="bg-surface-white rounded-2xl border border-border-light p-6 sm:p-10 shadow-card-elevated">
          {submittedData ? (
            /* Transparent Demo Submission State */
            <div className="space-y-6 text-center py-4 animate-fade-in">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="font-heading font-bold text-2xl text-charcoal">
                  Cutting Enquiry Form Validated
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Thank you, <strong>{submittedData.customerName}</strong>. Your cutting specifications have been verified against client-side requirements.
                </p>
              </div>

              {/* Transparent Frontend-Only Architecture Disclosure */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-left text-xs text-amber-950 space-y-2 max-w-xl mx-auto font-mono">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <Info className="w-4 h-4 text-amber-700" />
                  <span>Frontend-Only Integration Architecture Notice:</span>
                </div>
                <p className="text-[11px] leading-relaxed text-amber-900">
                  This website is currently running in static frontend mode. No personal details have been stored in a database or browser storage. To deliver enquiries to the company inbox (<code>rainbowmetalcutting@gmail.com</code>) or SMS gateway in production, integrate a serverless webhook (e.g., AWS SES, Resend, or EmailJS) at <code>src/components/QuoteForm.tsx:105</code>.
                </p>
              </div>

              {/* Summary of Submitted Request */}
              <div className="p-4 rounded-xl bg-surface-warm border border-border-light text-left text-xs space-y-1.5 max-w-xl mx-auto">
                <div className="font-bold text-charcoal mb-2 uppercase text-[10px] tracking-wider">
                  Enquiry Summary Captured:
                </div>
                <div className="flex justify-between py-1 border-b border-border-light/60">
                  <span className="text-text-muted">Customer Name:</span>
                  <span className="font-semibold text-charcoal">{submittedData.customerName}</span>
                </div>
                {submittedData.companyName && (
                  <div className="flex justify-between py-1 border-b border-border-light/60">
                    <span className="text-text-muted">Company Name:</span>
                    <span className="font-semibold text-charcoal">{submittedData.companyName}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-border-light/60">
                  <span className="text-text-muted">Phone Number:</span>
                  <span className="font-semibold text-charcoal">{submittedData.phone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border-light/60">
                  <span className="text-text-muted">Selected Service:</span>
                  <span className="font-semibold text-gold-dark">{submittedData.serviceType}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-text-muted">Finished Dimensions:</span>
                  <span className="font-semibold text-charcoal">{submittedData.requiredFinishedDimensions}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-surface-warm text-charcoal hover:bg-surface-white border border-border-light text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Submit Another Enquiry</span>
                </button>

                <a
                  href={`tel:${submittedData.phone}`}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-metallic-gold text-charcoal font-heading font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-gold-sm transition-opacity flex items-center justify-center gap-1.5"
                >
                  <span>Call Us For Quick Feasibility Check</span>
                </a>
              </div>
            </div>
          ) : (
            /* Interactive Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">

              {/* Section 1: Contact Details */}
              <div>
                <h3 className="font-heading font-bold text-base text-charcoal mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-dark font-mono text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  <span>Contact Information</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Customer Name */}
                  <div>
                    <label htmlFor="customerName" className="block text-xs font-semibold text-charcoal mb-1">
                      Customer Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="customerName"
                      name="customerName"
                      type="text"
                      value={formData.customerName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. R. Sundaram"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-surface-warm border focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                        errors.customerName && touched.customerName
                          ? 'border-rose-400 bg-rose-50/30'
                          : 'border-border-light focus:border-gold'
                      }`}
                      aria-required="true"
                    />
                    {errors.customerName && touched.customerName && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.customerName}</span>
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-xs font-semibold text-charcoal mb-1">
                      Company / Workshop Name <span className="text-text-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Lakshmi Engineering Works"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-surface-warm border border-border-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-charcoal mb-1">
                      Phone Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. 98765 43210"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-surface-warm border focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                        errors.phone && touched.phone
                          ? 'border-rose-400 bg-rose-50/30'
                          : 'border-border-light focus:border-gold'
                      }`}
                      aria-required="true"
                    />
                    {errors.phone && touched.phone && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-charcoal mb-1">
                      Email Address <span className="text-text-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. sundaram@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-surface-warm border focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                        errors.email && touched.email
                          ? 'border-rose-400 bg-rose-50/30'
                          : 'border-border-light focus:border-gold'
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 2: Cutting Requirements */}
              <div className="pt-4 border-t border-border-light">
                <h3 className="font-heading font-bold text-base text-charcoal mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-dark font-mono text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <span>Cutting Job Requirements</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Type */}
                  <div className="sm:col-span-2">
                    <label htmlFor="serviceType" className="block text-xs font-semibold text-charcoal mb-1">
                      Service Type Required <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-surface-warm border border-border-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors font-medium text-charcoal"
                    >
                      <option value="Circular Saw Cutting">Circular Saw Cutting (Fast, burr-free perpendicular parting)</option>
                      <option value="Band Saw Cutting">Band Saw Cutting (Heavy billets, solid bars, thick pipes)</option>
                      <option value="Customized Metal Cutting">Customized Metal Cutting (Special shapes, tailored profiles)</option>
                    </select>
                  </div>

                  {/* Material Type */}
                  <div>
                    <label htmlFor="materialType" className="block text-xs font-semibold text-charcoal mb-1">
                      Material Type Provided <span className="text-text-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      id="materialType"
                      name="materialType"
                      type="text"
                      value={formData.materialType}
                      onChange={handleChange}
                      placeholder="e.g. Mild Steel, EN8, SS304, Aluminum"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-surface-warm border border-border-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Material Dimensions */}
                  <div>
                    <label htmlFor="materialDimensions" className="block text-xs font-semibold text-charcoal mb-1">
                      Inbound Material Size <span className="text-text-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      id="materialDimensions"
                      name="materialDimensions"
                      type="text"
                      value={formData.materialDimensions}
                      onChange={handleChange}
                      placeholder="e.g. 150 mm dia round bar, 3-meter length"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-surface-warm border border-border-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Required Finished Dimensions (Required) */}
                  <div className="sm:col-span-2">
                    <label htmlFor="requiredFinishedDimensions" className="block text-xs font-semibold text-charcoal mb-1">
                      Required Finished Cut Length / Dimensions <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="requiredFinishedDimensions"
                      name="requiredFinishedDimensions"
                      type="text"
                      value={formData.requiredFinishedDimensions}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. 50 mm piece cut length, cut face squareness required"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-surface-warm border focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                        errors.requiredFinishedDimensions && touched.requiredFinishedDimensions
                          ? 'border-rose-400 bg-rose-50/30'
                          : 'border-border-light focus:border-gold'
                      }`}
                      aria-required="true"
                    />
                    {errors.requiredFinishedDimensions && touched.requiredFinishedDimensions && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.requiredFinishedDimensions}</span>
                      </p>
                    )}
                  </div>

                  {/* Quantity */}
                  <div>
                    <label htmlFor="quantity" className="block text-xs font-semibold text-charcoal mb-1">
                      Quantity of Cuts / Pieces <span className="text-text-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 100 pcs or 1 batch"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-surface-warm border border-border-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Drawing or specification notes */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-semibold text-charcoal mb-1">
                      Drawing / Specification Notes <span className="text-text-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      id="notes"
                      name="notes"
                      type="text"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Reference drawing #A-102 or specific tolerance note"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-surface-warm border border-border-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Additional Comments */}
                  <div className="sm:col-span-2">
                    <label htmlFor="additionalComments" className="block text-xs font-semibold text-charcoal mb-1">
                      Additional Comments or Instructions <span className="text-text-muted font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="additionalComments"
                      name="additionalComments"
                      rows={3}
                      value={formData.additionalComments}
                      onChange={handleChange}
                      placeholder="Any specific batch packaging, unloading requirements, or preferred delivery timing notes..."
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-surface-warm border border-border-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors resize-y"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-text-muted text-center sm:text-left">
                  We verify machine fit and schedule before job acceptance. No raw material is sold.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-metallic-gold text-charcoal font-heading font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-gold-sm transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-charcoal" />
                      <span>Validating Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-charcoal" />
                      <span>Submit Cutting Enquiry</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default QuoteForm;
