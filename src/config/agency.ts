/**
 * AUREN DIGITAL — CENTRAL BRAND & INTEGRATION CONFIGURATION
 * Single source of truth for branding, contact parameters, WhatsApp integration,
 * services, and proposal workflows.
 */

export const AGENCY_CONFIG = {
  // Brand Identity
  AGENCY_NAME: "Auren Digital",
  TAGLINE: "We Turn Vision Into Digital Excellence.",
  HERO_HEADLINE: "Your Vision. Our Digital Craft.",
  SUBTITLE: "We design and develop high-performing websites and digital experiences that help ambitious businesses stand out, earn trust, and grow.",
  
  PRIMARY_CTA: "Start Your Project",
  SECONDARY_CTA: "Explore Our Work",

  // Contact & Integrations
  // Stored in international format (e.g., 917066593251)
  AGENCY_WHATSAPP_NUMBER: "917066593251", 
  AGENCY_WHATSAPP_DISPLAY: "+91 70665 93251",
  AGENCY_EMAIL: "hello@aurendigital.com",
  AGENCY_LOCATION: "Bengaluru & Mumbai (Serving Clients Globally)",
  AGENCY_WORKING_HOURS: "Mon – Sat: 9:30 AM – 7:30 PM IST",
  AGENCY_WEBSITE_URL: "https://aurendigital.com",
  
  // Social Profiles
  SOCIAL_LINKS: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },

  // Studio Engineering Benchmarks (Verified, transparent)
  AGENCY_HIGHLIGHTS: [
    { label: "Turnaround Window", value: "2–4 wks" },
    { label: "Core Web Vitals Target", value: "95+" },
    { label: "Senior Builder Access", value: "100%" },
    { label: "Code Ownership & Handover", value: "Full" },
  ],

  // 7-Step Project & Proposal Workflow
  PROJECT_WORKFLOW: [
    {
      step: "01",
      title: "Share Your Requirements",
      description: "Submit your project goals, preferred features, and timeline through our structured inquiry form or direct WhatsApp chat."
    },
    {
      step: "02",
      title: "Initial Discussion",
      description: "We connect to clarify your commercial objectives, audience expectations, and technical requirements."
    },
    {
      step: "03",
      title: "Project Scope & Proposal",
      description: "Receive a transparent, itemized proposal detailing deliverables, milestone schedules, and clear terms."
    },
    {
      step: "04",
      title: "Design & Development",
      description: "We craft an original visual direction, followed by clean, semantic frontend and backend code built for performance."
    },
    {
      step: "05",
      title: "Review & Revisions",
      description: "Explore the live staging build, test interactions across your devices, and request iterative refinements."
    },
    {
      step: "06",
      title: "Testing & Launch",
      description: "Rigorous cross-browser QA, mobile responsiveness verification, domain configuration, and smooth production launch."
    },
    {
      step: "07",
      title: "Optional Maintenance",
      description: "Ongoing security patches, performance monitoring, content updates, and post-launch technical warranty."
    }
  ],

  // Indicative Budget Inquiry Ranges
  BUDGET_RANGES: [
    { id: "tier_1", label: "₹15,000 – ₹30,000", note: "Standard starter business site or high-converting landing page" },
    { id: "tier_2", label: "₹30,000 – ₹60,000", note: "Custom multi-page business website with CMS and lead flows" },
    { id: "tier_3", label: "₹60,000 – ₹1,20,000", note: "Bespoke e-commerce storefront or custom web application" },
    { id: "tier_4", label: "₹1,20,000+", note: "Complex enterprise portals, custom SaaS tooling, advanced APIs" },
    { id: "tier_custom", label: "Let's Discuss Your Requirements", note: "Request a custom scope and proposal tailored to your needs" }
  ],

  // 8 Core Services
  PROJECT_CATEGORIES: [
    { id: "business_website", label: "Business Website Development", desc: "Authoritative, fast websites for companies, startups, and service providers" },
    { id: "custom_design", label: "Custom Website Design", desc: "Bespoke visual identities, original layouts, and art-directed digital presence" },
    { id: "ecommerce", label: "E-commerce Development", desc: "High-converting online stores, product catalogs, and frictionless checkout" },
    { id: "landing_page", label: "Landing Page Development", desc: "Conversion-optimized landing pages for products, ad campaigns, and lead capture" },
    { id: "web_application", label: "Web Application Development", desc: "Tailored business portals, client dashboards, and custom web software" },
    { id: "ui_ux_design", label: "UI/UX Design", desc: "User research, wireframing, high-fidelity design systems, and prototypes" },
    { id: "website_redesign", label: "Website Redesign", desc: "Modernize outdated sites, resolve speed bottlenecks, and improve conversions" },
    { id: "maintenance_optimization", label: "Website Maintenance & Optimization", desc: "Security updates, performance tuning, bug fixes, and ongoing technical support" }
  ],

  // Selectable Features for Form
  PROJECT_FEATURES: [
    { id: "contact_form", label: "Contact & Lead Form" },
    { id: "whatsapp_integration", label: "WhatsApp Click-to-Chat Integration" },
    { id: "email_notifications", label: "Automated Email Notifications" },
    { id: "payment_gateway", label: "Payment Gateway Integration (Razorpay/Stripe/UPI)" },
    { id: "user_auth", label: "User Authentication & Client Accounts" },
    { id: "admin_dashboard", label: "Admin Management Dashboard" },
    { id: "cms", label: "Content Management System (CMS)" },
    { id: "booking_system", label: "Appointment & Booking System" },
    { id: "product_catalogue", label: "Product Catalogue with Search & Filters" },
    { id: "ecommerce_checkout", label: "Shopping Cart & Instant Checkout" },
    { id: "api_integration", label: "Third-party API & CRM Integration" },
    { id: "seo_optimization", label: "Technical SEO & Core Web Vitals 95+" }
  ],

  // Delivery Timelines
  TIMELINE_OPTIONS: [
    { id: "urgent", label: "Urgent (Within 1–2 weeks)" },
    { id: "standard", label: "Standard (2–4 weeks)" },
    { id: "flexible", label: "Flexible (1–2 months)" },
    { id: "planning", label: "Just exploring & planning" }
  ]
};
