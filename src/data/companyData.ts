import { CompanyDetails, MachineInfo, ServiceInfo, FacilityItem, ProcessStep, SpecialCuttingItem } from '../types';

export const COMPANY_DETAILS: CompanyDetails = {
  name: "Rainbow Metal Cutting",
  proprietor: "P. Manoharan B.A.",
  tagline: "Your Metal. Your Specifications. Our Cutting Expertise.",
  alternativeTagline: "Precision Metal Cutting, Made to Your Requirements.",
  subheadline: "Rainbow Metal Cutting provides circular saw, band saw, and customized metal-cutting services in Ganapathy, Coimbatore. Customers supply their metal material, and we carry out the required cutting work based on the agreed specifications and available machine capabilities.",
  certification: "ISO 9001:2015 Certified Company",
  certificationNotice: "Company-provided certification claim stated in the brochure. Flagged for verification prior to production publication.",
  buildingArea: "70 × 50 Sq. ft.",
  buildingAreaNotice: "Brochure-stated workshop dimension. Preserved verbatim and flagged for verification prior to production publication.",
  address: {
    line1: "No. 92-A, Sanganur Road",
    landmark: "Opposite Aswarya Bakery",
    area: "Ganapathy",
    city: "Coimbatore",
    pincode: "641006",
    state: "Tamil Nadu, India",
    full: "No. 92-A, Sanganur Road, Opposite Aswarya Bakery, Ganapathy, Coimbatore – 641006, Tamil Nadu, India."
  },
  phones: [
    { display: "99449 27389", raw: "+919944927389" },
    { display: "99575 56243", raw: "+919957556243" }
  ],
  email: "rainbowmetalcutting@gmail.com",
  coreBusinessModel: "The customer supplies the metal material. Rainbow Metal Cutting performs the required cutting work according to the customer's requested dimensions, drawings, shapes, and order specifications, subject to machine capabilities and confirmation by the company.",
  materialNotice: "Important: We do not sell raw metal stock or manufactured finished products. Customers arrange and deliver their own metal material to our Ganapathy facility."
};

export const VERIFIED_MACHINES: MachineInfo[] = [
  {
    id: "cosen-320",
    name: "COSEN Fully Automatic",
    category: "Band Saw",
    brochureSpec: "320 mm",
    brochureListing: "COSEN Fully Automatic — 320 mm",
    operationMode: "Fully Automatic Band Saw",
    description: "High-capacity horizontal band saw for precision production cutting of heavy solid billets, thick-walled pipes, and structural metal sections supplied by clients.",
    brochureReference: "Printed as 'COSEN Fully Automatic' with specification '320 mm' in the company brochure.",
    features: [
      "Stated Brochure Spec: 320 mm",
      "Fully Automatic continuous blade cutting",
      "Ideal for heavy client-provided bars and pipes",
      "Minimal kerf waste on deep cuts"
    ]
  },
  {
    id: "cosen-250",
    name: "COSEN Fully Automatic",
    category: "Band Saw",
    brochureSpec: "250 mm",
    brochureListing: "COSEN Fully Automatic — 250 mm",
    operationMode: "Fully Automatic Band Saw",
    description: "Precision fully automatic band saw system configured for repetitive batch cuts on client-supplied bars, shafts, and medium-diameter metal profiles.",
    brochureReference: "Printed as 'COSEN Fully Automatic' with specification '250 mm' in the company brochure.",
    features: [
      "Stated Brochure Spec: 250 mm",
      "Fully Automatic cycle operation",
      "High squareness and perpendicular cut face",
      "Suited for production batch slicing"
    ]
  },
  {
    id: "laxson-bandsaw",
    name: "LAXSON Band Saw Cutting Machine",
    category: "Band Saw",
    brochureSpec: "Brochure lists model name; capacity confirmed per job",
    brochureListing: "LAXSON Band Saw Cutting Machine",
    operationMode: "Band Saw Cutting",
    description: "Robust industrial band saw unit for sectioning diverse metal shapes, tubes, and alloy bars provided by the customer.",
    brochureReference: "Printed as 'LAXSON Band Saw Cutting Machine' in the company brochure. (No specific numerical capacity is printed; unverified figures are strictly omitted).",
    features: [
      "Band Saw Cutting Category",
      "Versatile sectioning for structural profiles",
      "Rigid clamping for client-supplied materials",
      "Job suitability confirmed upon drawing review"
    ]
  },
  {
    id: "circular-110",
    name: "Circular Saw Machine",
    category: "Circular Saw",
    brochureSpec: "Dia. 110 mm",
    brochureListing: "Circular Saw Machine — Dia. 110 mm",
    operationMode: "Circular Saw Parting",
    description: "High-speed circular blade cutting station calibrated for rapid, burr-free parting of metal rods, bars, and profiles up to the printed Dia. 110 mm specification.",
    brochureReference: "Printed as 'Circular Saw Machine' with specification 'Dia. 110 mm' in the company brochure.",
    features: [
      "Stated Brochure Spec: Dia. 110 mm",
      "High-speed circular saw blade",
      "Clean perpendicular edge finish",
      "Fast turnarounds for customer-provided stock"
    ]
  },
  {
    id: "mega-75",
    name: "MEGA Circular Saw",
    category: "Circular Saw",
    brochureSpec: "75 mm",
    brochureListing: "MEGA Circular Saw — 75 mm",
    operationMode: "Circular Saw Parting",
    description: "Compact precision circular saw station dedicated to swift, accurate parting of smaller diameter metal rods, shafts, and profiles.",
    brochureReference: "Printed as 'MEGA Circular Saw' with specification '75 mm' in the company brochure.",
    features: [
      "Stated Brochure Spec: 75 mm",
      "High blade speed with clean end-faces",
      "Ideal for repeated piece cutting",
      "Burr-minimizing cut cycle"
    ]
  },
  {
    id: "mfcg-100",
    name: "MFCG Circular Saw",
    category: "Circular Saw",
    brochureSpec: "100 mm",
    brochureListing: "MFCG Circular Saw — 100 mm",
    operationMode: "Circular Saw Parting",
    description: "Medium-range industrial circular saw delivering high-throughput parting and consistent cut lengths on customer-supplied raw metal sections.",
    brochureReference: "Printed as 'MFCG Circular Saw' with specification '100 mm' in the company brochure.",
    features: [
      "Stated Brochure Spec: 100 mm",
      "Industrial-grade circular cut station",
      "Consistent length repetition across batches",
      "Smooth cut surface ready for subsequent machining"
    ]
  }
];

export const SERVICES_DATA: ServiceInfo[] = [
  {
    id: "circular-saw-cutting",
    title: "Circular Saw Cutting",
    category: "High-Speed & Burr-Free",
    shortDesc: "Fast, perpendicular cutting of client-supplied rods, pipes, and metal sections using our verified circular saw machinery.",
    detailedCopy: "Customers can enquire about cutting their supplied metal material using Rainbow Metal Cutting's circular saw machinery. We utilize the Circular Saw Machine (Dia. 110 mm), MEGA Circular Saw (75 mm), and MFCG Circular Saw (100 mm) stations for clean, burr-minimized end-faces.",
    brochureSupportedText: "Directly supported by 3 brochure circular saw units: Circular Saw Machine (Dia. 110 mm), MEGA (75 mm), and MFCG (100 mm).",
    features: [
      "Customer provides the raw material to be cut",
      "Burr-free, smooth cut end-faces",
      "High dimensional repeatability for production runs",
      "Calibrated circular saw blades suited for round & profile stock"
    ],
    icon: "Disc"
  },
  {
    id: "band-saw-cutting",
    title: "Band Saw Cutting",
    category: "Heavy & Structural Sections",
    shortDesc: "Deep-section and billet cutting of client-supplied heavy bars, solid blocks, and thick pipes using fully automatic band saws.",
    detailedCopy: "Rainbow Metal Cutting offers band saw cutting using its listed band saw machinery, including the COSEN Fully Automatic (320 mm), COSEN Fully Automatic (250 mm), and LAXSON Band Saw Cutting Machine. Ideal for cutting large billets and alloy stock with minimal kerf waste.",
    brochureSupportedText: "Directly supported by 3 brochure band saw units: COSEN Fully Automatic (320 mm & 250 mm) and LAXSON Band Saw.",
    features: [
      "Customer arranges and supplies the metal material",
      "Handles thick cylindrical billets, blocks, and pipes",
      "Automatic material feeding on COSEN units",
      "Continuous band blade designed for heavy industrial sectioning"
    ],
    icon: "Layers"
  },
  {
    id: "customized-metal-cutting",
    title: "Customized Metal Cutting",
    category: "Our Special Cutting Works",
    shortDesc: "Custom cut lengths, section profiles, and batch orders carried out according to client-supplied drawings and specifications.",
    detailedCopy: "Have a specific cutting requirement? Share your material, drawing, dimensions, quantity, and preferred specifications. Rainbow Metal Cutting will review the request and confirm whether it can be carried out with the available machinery. All custom cutting jobs are subject to machine capabilities and agreement.",
    brochureSupportedText: "Inspired by the pamphlet section 'Our Special Cutting Works' featuring varied sections, shapes, and cut forms.",
    features: [
      "Customer supplies the drawing, dimensions & metal stock",
      "Feasibility confirmed by company before job acceptance",
      "Handles custom lengths, angles, and tailored profiles",
      "Direct technical consultation on machine fit"
    ],
    icon: "Scissors"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Customer Provides the Material",
    tag: "MATERIAL SUPPLY",
    description: "The customer arranges and supplies the metal material to be cut. You transport your raw bars, pipes, or billets directly to our Ganapathy, Coimbatore facility."
  },
  {
    step: "02",
    title: "Share Cutting Requirements",
    tag: "SPECIFICATIONS & DRAWINGS",
    description: "The customer communicates the required dimensions, cutting shape, engineering drawing, quantity, and other relevant technical specifications."
  },
  {
    step: "03",
    title: "Confirm Feasibility & Quotation",
    tag: "TECHNICAL REVIEW",
    description: "Rainbow Metal Cutting reviews the request, checks whether the required work is feasible with our available machinery, and confirms the quotation and job schedule."
  },
  {
    step: "04",
    title: "Cutting Work Execution",
    tag: "PRECISION EXECUTION",
    description: "The company performs the agreed cutting operation on the supplied material according to the confirmed requirements, ready for collection as agreed."
  }
];

export const VERIFIED_FACILITIES: FacilityItem[] = [
  {
    id: "piece",
    brochureTerm: "Piece",
    displayTitle: "Piece Handling & Batch Organisation",
    status: "Verified in Brochure",
    brochureNote: "Preserved exactly as printed in the 'Our Facilities' brochure page.",
    description: "Structured workflow for receiving, inspecting, and organizing individual customer pieces and batch lots through each cutting station.",
    icon: "PackageCheck"
  },
  {
    id: "crane",
    brochureTerm: "Crane",
    displayTitle: "Overhead Crane Material Handling",
    status: "Verified in Brochure",
    brochureNote: "Preserved exactly as pictured in the 'Our Facilities' brochure page.",
    description: "Overhead lifting and mechanical crane system to safely unload, maneuver, and position heavy client-supplied raw metal bundles, pipes, and billets onto machine beds.",
    icon: "Boxes"
  },
  {
    id: "stock-pin",
    brochureTerm: "Stock Pin",
    displayTitle: "Stock Pin Staging & Storage System",
    status: "Verified in Brochure",
    brochureNote: "Preserved exactly as printed in the 'Our Facilities' brochure page.",
    description: "Designated floor-mounted stock pin staging infrastructure to firmly secure and segregate incoming customer metal batches, preventing lot mixing.",
    icon: "Warehouse"
  }
];

export const SPECIAL_CUTTING_GALLERY: SpecialCuttingItem[] = [
  {
    id: "solid-billets",
    title: "Solid Cylindrical Billets & Shafts",
    profileType: "Round Stock",
    description: "Perpendicular end-face cuts across customer-provided round solid bars and shafts with clean parting.",
    brochureNote: "Inspired by circular cross-section examples in 'Our Special Cutting Works'.",
    tag: "Round Sections"
  },
  {
    id: "thick-wall-tubing",
    title: "Hollow Pipes & Heavy Wall Tubing",
    profileType: "Tubular Stock",
    description: "Clean right-angle sectioning of client-supplied round metal tubes and thick pipes without wall distortion.",
    brochureNote: "Inspired by tubular profile cuts shown in brochure works.",
    tag: "Hollow Sections"
  },
  {
    id: "square-billets",
    title: "Square Blocks & Structural Billets",
    profileType: "Square / Rectangular",
    description: "Precision-guided band saw parting of client-delivered square blocks and rectangular metal sections.",
    brochureNote: "Inspired by rectilinear metal forms in 'Our Special Cutting Works'.",
    tag: "Square & Rectangular"
  },
  {
    id: "structural-profiles",
    title: "Industrial Channels & Angle Profiles",
    profileType: "Structural Sections",
    description: "Securely clamped cutting of client-supplied structural profiles to requested drawing lengths.",
    brochureNote: "Inspired by structural metal cuts in brochure.",
    tag: "Profile Cuts"
  },
  {
    id: "short-length-spacers",
    title: "Repeat Batch Spacers & Rings",
    profileType: "Repetitive Slicing",
    description: "High-consistency repetitive length cutting of customer stock for manufacturing components.",
    brochureNote: "Inspired by batch parted slices in brochure gallery.",
    tag: "Batch Slicing"
  },
  {
    id: "custom-drawings",
    title: "Custom Drawing-Based Cut Blanks",
    profileType: "Custom Specification",
    description: "Cut segments prepared according to customer-supplied technical drawings, subject to machine confirmation.",
    brochureNote: "Tailored job-work orders reviewed by machine operators.",
    tag: "Tailored Orders"
  }
];

export const COMPANY_STRENGTHS = [
  {
    title: "Six Brochure-Listed Cutting Machines",
    description: "Equipped with automatic COSEN (320 mm & 250 mm), LAXSON, and precision circular saws (110 mm, 75 mm, 100 mm) to handle varied section sizes.",
    icon: "Cpu"
  },
  {
    title: "Customer-Supplied Material Focus",
    description: "Transparent job-work service: you provide the metal stock, avoiding unnecessary material markups and retaining full control of your metal grades.",
    icon: "ShieldCheck"
  },
  {
    title: "Overhead Crane & Stock Pin Facilities",
    description: "Dedicated workshop material handling infrastructure pictured in the brochure for safe unloading, loading, and staging of heavy metal bundles.",
    icon: "Anchor"
  },
  {
    title: "Ganapathy, Coimbatore Location",
    description: "Centrally positioned in Coimbatore's premier industrial hub on Sanganur Road, accessible for delivery and collection of industrial metal stock.",
    icon: "MapPin"
  },
  {
    title: "Customized Cutting Reviews",
    description: "Direct technical evaluation of your drawings and dimensions before job acceptance so you have certainty on feasibility and schedule.",
    icon: "ClipboardCheck"
  },
  {
    title: "Brochure-Verified Operations",
    description: "Led by proprietor P. Manoharan B.A., operating under established ISO 9001:2015 certification claims with verified brochure standards.",
    icon: "Award"
  }
];
