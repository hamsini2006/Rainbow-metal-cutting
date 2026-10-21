import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CustomerWorkflow } from './components/CustomerWorkflow';
import { CompanyOverview } from './components/CompanyOverview';
import { ServicesSection } from './components/ServicesSection';
import { MachineryCatalogue } from './components/MachineryCatalogue';
import { SpecialCuttingGallery } from './components/SpecialCuttingGallery';
import { FacilitiesSection } from './components/FacilitiesSection';
import { CompanyStrengths } from './components/CompanyStrengths';
import { QuoteForm } from './components/QuoteForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VerificationAuditModal } from './components/VerificationAuditModal';

export const App: React.FC = () => {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [selectedMachineForQuote, setSelectedMachineForQuote] = useState<string | undefined>(undefined);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);

  const scrollToQuoteForm = () => {
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMachinery = () => {
    const el = document.getElementById('machinery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSpecialCutting = () => {
    const el = document.getElementById('special-cutting');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireMachine = (machineName: string) => {
    setSelectedMachineForQuote(machineName);
    setSelectedServiceForQuote(undefined);
    scrollToQuoteForm();
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    setSelectedMachineForQuote(undefined);
    scrollToQuoteForm();
  };

  return (
    <div className="min-h-screen bg-surface-warm text-text-primary flex flex-col font-sans selection:bg-gold-light/40 selection:text-charcoal">
      {/* Sticky Navigation Bar */}
      <Navbar
        onRequestQuote={scrollToQuoteForm}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section (2-Column Desktop, Customer-Supplied Material Clarity) */}
        <HeroSection
          onRequestQuote={scrollToQuoteForm}
          onExploreMachinery={scrollToMachinery}
        />

        {/* 2. Customer Order Workflow (4-Step Process) */}
        <CustomerWorkflow
          onStartEnquiry={scrollToQuoteForm}
        />

        {/* 3. About Rainbow Metal Cutting (Factual Brochure Overview) */}
        <CompanyOverview
          onExploreServices={scrollToServices}
        />

        {/* 4. Complete Services Section (Circular Saw, Band Saw, Customized Cutting) */}
        <ServicesSection
          onSelectService={handleSelectService}
          onExploreMachinery={scrollToMachinery}
          onViewSpecialCutting={scrollToSpecialCutting}
        />

        {/* 5. Complete Machinery Catalogue (All 6 Verified Brochure Units & Functional Filters) */}
        <MachineryCatalogue
          onEnquireMachine={handleEnquireMachine}
        />

        {/* 6. Special Cutting Works Gallery (Inspired by Pamphlet's "Our Special Cutting Works") */}
        <SpecialCuttingGallery
          onDiscussCustomOrder={scrollToQuoteForm}
        />

        {/* 7. Workshop Facilities (Piece, Crane, Stock Pin & Stated 70 x 50 Sq. ft. Area) */}
        <FacilitiesSection />

        {/* 8. Why Customers Can Enquire (Factual Brochure Strengths) */}
        <CompanyStrengths
          onStartEnquiry={scrollToQuoteForm}
        />

        {/* 9. Cutting Quote & Custom-Order Enquiry Form */}
        <QuoteForm
          initialMachine={selectedMachineForQuote}
          initialService={selectedServiceForQuote}
        />

        {/* 10. Contact Information & Coordinates */}
        <ContactSection
          onRequestQuote={scrollToQuoteForm}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenAudit={() => setAuditModalOpen(true)}
        onRequestQuote={scrollToQuoteForm}
      />

      {/* Brochure Compliance & Verification Audit Modal */}
      <VerificationAuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />
    </div>
  );
};

export default App;
