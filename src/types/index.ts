export type MachineCategory = 'Band Saw' | 'Circular Saw';

export interface MachineInfo {
  id: string;
  name: string;
  category: MachineCategory;
  brochureSpec: string;
  brochureListing: string;
  operationMode: string;
  description: string;
  brochureReference: string;
  features: string[];
}

export interface ServiceInfo {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  detailedCopy: string;
  brochureSupportedText: string;
  features: string[];
  icon: string;
}

export interface SpecialCuttingItem {
  id: string;
  title: string;
  profileType: string;
  description: string;
  brochureNote: string;
  tag: string;
}

export interface FacilityItem {
  id: string;
  brochureTerm: 'Piece' | 'Crane' | 'Stock Pin';
  displayTitle: string;
  status: string;
  brochureNote: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tag: string;
  description: string;
}

export interface CompanyDetails {
  name: string;
  proprietor: string;
  tagline: string;
  alternativeTagline: string;
  subheadline: string;
  certification: string;
  certificationNotice: string;
  buildingArea: string;
  buildingAreaNotice: string;
  address: {
    line1: string;
    landmark: string;
    area: string;
    city: string;
    pincode: string;
    state: string;
    full: string;
  };
  phones: Array<{
    display: string;
    raw: string;
  }>;
  email: string;
  coreBusinessModel: string;
  materialNotice: string;
}

export interface QuoteFormData {
  customerName: string;
  companyName: string;
  phone: string;
  email: string;
  serviceType: 'Circular Saw Cutting' | 'Band Saw Cutting' | 'Customized Metal Cutting';
  materialType: string;
  materialDimensions: string;
  requiredFinishedDimensions: string;
  quantity: string;
  notes: string;
  additionalComments: string;
}
