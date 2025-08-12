export interface ProcessStep {
  title: string
  description: string
}

export interface Benefit {
  title: string
  description: string
}

export interface Service {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  features: string[]
  detailedFeatures: string[]
  process: ProcessStep[]
  benefits: Benefit[]
  slug: string
}

export const services: Service[] = [
  {
    id: "apartment-cleaning",
    title: "Apartment Cleaning",
    description: "Complete residential cleaning for apartments and homes throughout Netherlands",
    shortDescription: "Professional home cleaning services",
    image: "/a0a733bd1c5192ab284e22f73776654c.jpg",
    features: [
      "Deep cleaning of all rooms",
      "Kitchen and bathroom sanitization",
      "Floor cleaning and vacuuming",
      "Window cleaning (interior)",
      "Dusting and surface cleaning",
      "Trash removal",
    ],
    detailedFeatures: [
      "Complete kitchen deep clean including appliances",
      "Bathroom sanitization with hospital-grade products",
      "Bedroom and living area thorough cleaning",
      "Floor mopping, vacuuming, and carpet care",
      "Interior window cleaning and sill wiping",
      "Dusting of all surfaces, furniture, and decorations",
      "Trash removal and fresh liner placement",
      "Light fixture and ceiling fan cleaning",
    ],
    process: [
      { title: "Initial Assessment", description: "Initial walkthrough and assessment" },
      { title: "Systematic Cleaning", description: "Room-by-room systematic cleaning" },
      { title: "Quality Control", description: "Quality inspection and touch-ups" },
      { title: "Final Review", description: "Final walkthrough with client" },
    ],
    benefits: [
      { title: "More Free Time", description: "More time for family and hobbies" },
      { title: "Healthier Home", description: "Healthier living environment" },
      { title: "Professional Equipment", description: "Professional-grade equipment and products" },
      { title: "Reliable Service", description: "Consistent, reliable service" },
    ],
    slug: "apartment-cleaning",
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    description: "Professional commercial cleaning for offices and workspaces across Netherlands",
    shortDescription: "Commercial office cleaning solutions",
    image: "/74f2b34b794c6c10a6537d0d150e68c1.jpg",
    features: [
      "Daily or weekly cleaning schedules",
      "Desk and workstation sanitization",
      "Common area maintenance",
      "Restroom deep cleaning",
      "Floor care and maintenance",
      "Waste management",
    ],
    detailedFeatures: [
      "Flexible scheduling to fit business hours",
      "Complete workstation sanitization and organization",
      "Reception and common area maintenance",
      "Professional restroom cleaning and restocking",
      "Floor vacuuming, mopping, and carpet cleaning",
      "Conference room and meeting space preparation",
      "Kitchen and break room cleaning",
      "Waste removal and recycling management",
    ],
    process: [
      { title: "Needs Assessment", description: "Business needs assessment" },
      { title: "Schedule Creation", description: "Custom cleaning schedule creation" },
      { title: "Team Assignment", description: "Professional team assignment" },
      { title: "Quality Monitoring", description: "Regular quality monitoring" },
    ],
    benefits: [
      { title: "Increased Productivity", description: "Improved employee productivity" },
      { title: "Professional Image", description: "Professional business image" },
      { title: "Health Benefits", description: "Reduced sick days" },
      { title: "Cost Effective", description: "Cost-effective cleaning solution" },
    ],
    slug: "office-cleaning",
  },
  {
    id: "warehouse-cleaning",
    title: "Warehouse Cleaning",
    description: "Industrial cleaning for warehouses and storage facilities throughout Netherlands",
    shortDescription: "Industrial warehouse cleaning services",
    image: "/5e412732f374c5ba4001300320167dcb.jpg",
    features: [
      "High-ceiling cleaning",
      "Floor scrubbing and maintenance",
      "Safety compliance cleaning",
      "Equipment cleaning",
      "Loading dock maintenance",
      "Inventory area organization",
    ],
    detailedFeatures: [
      "High-reach cleaning for ceilings and fixtures",
      "Industrial floor scrubbing and sealing",
      "OSHA compliance cleaning protocols",
      "Machinery and equipment degreasing",
      "Loading dock and shipping area maintenance",
      "Inventory storage area organization and cleaning",
      "Dust control and air quality improvement",
      "Emergency spill cleanup services",
    ],
    process: [
      { title: "Safety Planning", description: "Safety assessment and planning" },
      { title: "Equipment Setup", description: "Specialized equipment deployment" },
      { title: "Area Cleaning", description: "Systematic area-by-area cleaning" },
      { title: "Documentation", description: "Compliance documentation" },
    ],
    benefits: [
      { title: "Enhanced Safety", description: "Improved workplace safety" },
      { title: "Compliance", description: "Regulatory compliance" },
      { title: "Equipment Protection", description: "Extended equipment life" },
      { title: "Organization", description: "Better inventory management" },
    ],
    slug: "warehouse-cleaning",
  },
  {
    id: "post-renovation",
    title: "Post-Renovation Cleaning",
    description: "Specialized cleaning after construction and renovation work across Netherlands",
    shortDescription: "Construction cleanup specialists",
    image: "/720efac587561e28bdeec3270ad1c4bd.jpg",
    features: [
      "Dust and debris removal",
      "Paint and adhesive cleanup",
      "Final polish and detailing",
      "Window and glass cleaning",
      "Floor restoration",
      "Air duct cleaning",
    ],
    detailedFeatures: [
      "Complete dust removal from all surfaces",
      "Paint splatter and adhesive residue removal",
      "Final detailing and polishing of fixtures",
      "Interior and exterior window cleaning",
      "Floor refinishing and protective coating",
      "HVAC system and air duct cleaning",
      "Light fixture and electrical cleaning",
      "Final inspection and touch-up cleaning",
    ],
    process: [
      { title: "Assessment", description: "Post-construction assessment" },
      { title: "Debris Removal", description: "Debris removal and disposal" },
      { title: "Deep Cleaning", description: "Deep cleaning and restoration" },
      { title: "Final Inspection", description: "Final quality inspection" },
    ],
    benefits: [
      { title: "Move-in Ready", description: "Move-in ready spaces" },
      { title: "Professional Finish", description: "Professional finishing touch" },
      { title: "Safe Environment", description: "Safe, clean environment" },
      { title: "Time Savings", description: "Time and stress savings" },
    ],
    slug: "post-renovation",
  },
  {
    id: "disinfection",
    title: "Disinfection Services",
    description: "Professional disinfection and sanitization services throughout Netherlands",
    shortDescription: "Professional sanitization services",
    image: "/333166c1a6e4ca4984919eac4f6ab96c.jpg",
    features: [
      "Hospital-grade disinfectants",
      "COVID-19 sanitization protocols",
      "Air quality improvement",
      "Surface sanitization",
      "UV-C disinfection",
      "Odor elimination",
    ],
    detailedFeatures: [
      "EPA-approved hospital-grade disinfectants",
      "COVID-19 and virus elimination protocols",
      "Air purification and quality improvement",
      "High-touch surface sanitization",
      "UV-C light disinfection technology",
      "Odor neutralization and elimination",
      "Mold and bacteria treatment",
      "Preventive sanitization programs",
    ],
    process: [
      { title: "Assessment", description: "Contamination assessment" },
      { title: "Preparation", description: "Protective equipment setup" },
      { title: "Treatment", description: "Systematic disinfection treatment" },
      { title: "Verification", description: "Air quality verification" },
    ],
    benefits: [
      { title: "Health Protection", description: "Healthier environment" },
      { title: "Disease Prevention", description: "Disease prevention" },
      { title: "Peace of Mind", description: "Peace of mind" },
      { title: "Compliance", description: "Regulatory compliance" },
    ],
    slug: "disinfection",
  },
  {
    id: "furniture-cleaning",
    title: "Furniture Cleaning",
    description: "Deep cleaning and restoration of upholstery and furniture across Netherlands",
    shortDescription: "Upholstery and furniture restoration",
    image: "/cb42427ed8900c1140db0857d71b238f.jpg",
    features: [
      "Upholstery steam cleaning",
      "Stain removal treatment",
      "Fabric protection application",
      "Leather cleaning and conditioning",
      "Mattress sanitization",
      "Carpet deep cleaning",
    ],
    detailedFeatures: [
      "Professional steam cleaning for all upholstery",
      "Advanced stain removal techniques",
      "Fabric protection and scotch guarding",
      "Leather cleaning, conditioning, and restoration",
      "Mattress deep cleaning and sanitization",
      "Carpet shampooing and deep cleaning",
      "Odor removal and deodorization",
      "Furniture restoration and repair services",
    ],
    process: [
      { title: "Material Assessment", description: "Fabric and material assessment" },
      { title: "Pre-treatment", description: "Pre-treatment of stains and spots" },
      { title: "Deep Cleaning", description: "Deep cleaning and extraction" },
      { title: "Protection", description: "Protection application and finishing" },
    ],
    benefits: [
      { title: "Longevity", description: "Extended furniture life" },
      { title: "Air Quality", description: "Improved air quality" },
      { title: "Stain Removal", description: "Stain and odor removal" },
      { title: "Restoration", description: "Professional restoration" },
    ],
    slug: "furniture-cleaning",
  },
]

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id)
}

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug)
}
