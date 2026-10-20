export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  techStack: string[];
  idealFor: string[];
  timeline: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  clientType: string;
  industry: string;
  projectType: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  desktopPreview: string;
  mobilePreview?: string;
  technologies: string[];
  isConcept: boolean;
  metricsOrHighlights: string[];
  liveDemoUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ProjectEnquiryData {
  // Step 1: About You
  fullName: string;
  companyName: string;
  workEmail: string;
  whatsappNumber: string;
  country: string;
  preferredContact: "whatsapp" | "email" | "either";

  // Step 2: Project Details
  projectType: string;
  businessDescription: string;
  websiteGoal: string;
  hasExistingWebsite: "yes" | "no";
  existingWebsiteUrl?: string;
  selectedFeatures: string[];

  // Step 3: Budget and Timeline
  budgetRange: string;
  desiredLaunchDate: string;
  projectUrgency: string;
  additionalNotes: string;

  // Step 4: Consent & Metadata
  consent: boolean;
  honeypot?: string; // Anti-spam trap
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot?: string;
}
