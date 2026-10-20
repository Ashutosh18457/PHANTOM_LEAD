import type { ServiceItem } from "../types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "business-website-development",
    title: "Business Website Development",
    shortDesc: "Authoritative, lightning-fast digital headquarters engineered for companies, startups, and service providers to establish credibility and capture qualified inquiries.",
    fullDesc: "We build modern, high-performing business websites tailored to your exact industry. No sluggish WordPress themes or rigid page builders. Every page is structured to present your services with clarity, communicate value in seconds, and guide visitors toward conversion.",
    iconName: "Briefcase",
    deliverables: [
      "Custom responsive design (Desktop, Tablet, Mobile)",
      "Conversion-focused hero and service architecture",
      "Lead generation forms with WhatsApp and email dispatch",
      "Core Web Vitals 95+ speed optimization",
      "Semantic HTML5 & technical SEO foundation",
      "Full source code ownership and deployment"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js"],
    idealFor: ["Startups & Founders", "B2B Companies", "Consultants & Advisory Firms", "Professional Practices"],
    timeline: "2 to 3 weeks"
  },
  {
    id: "custom-website-design",
    title: "Custom Website Design",
    shortDesc: "Art-directed visual identities, original typographic layouts, and bespoke interface aesthetics that set your brand distinctly apart from competitors.",
    fullDesc: "Your brand is unique and should never look like a prebuilt theme. We create original visual designs with intentional typography scales, refined color palettes, and deliberate whitespace that project prestige and command trust from first glance.",
    iconName: "Layout",
    deliverables: [
      "Original visual direction & moodboards",
      "High-fidelity responsive UI layouts",
      "Typography system and brand color palette",
      "Interactive clickable design prototypes",
      "Custom vector assets and brand iconography",
      "Design tokens and developer handover documentation"
    ],
    techStack: ["Figma", "Design Tokens", "Vector Prototyping"],
    idealFor: ["Ambitious Brands", "Agencies", "High-ticket Service Providers", "Founders seeking distinction"],
    timeline: "2 to 3 weeks"
  },
  {
    id: "ecommerce-development",
    title: "E-commerce Development",
    shortDesc: "Fast, frictionless online storefronts engineered with high-impact product showcases, intuitive search filters, and dependable payment checkouts.",
    fullDesc: "Modern consumers demand rapid, frictionless shopping experiences. We engineer bespoke e-commerce storefronts that emphasize tactile product photography, intuitive categorization, instant filter states, and smooth checkout journeys configured for Indian and international payment gateways.",
    iconName: "ShoppingBag",
    deliverables: [
      "Bespoke storefront UI and brand storytelling",
      "Product catalog with instant search & multi-attribute filters",
      "Slide-out cart drawer & frictionless checkout flow",
      "Payment gateway integration (Razorpay, Stripe, UPI)",
      "Automated order notifications (WhatsApp & Email)",
      "Mobile-first responsive shopping experience"
    ],
    techStack: ["React", "Next.js / Vite", "Node.js", "Razorpay / Stripe API", "Tailwind CSS"],
    idealFor: ["Direct-to-Consumer Brands", "Artisan & Specialty Roasters", "Fashion & Lifestyle", "Retailers going digital"],
    timeline: "3 to 5 weeks"
  },
  {
    id: "landing-page-development",
    title: "Landing Page Development",
    shortDesc: "Hyper-focused single-page destinations designed specifically to validate new products, support paid advertising campaigns, and maximize inbound lead capture.",
    fullDesc: "A standard homepage isn't engineered for targeted ad spend. Our high-converting landing pages eliminate distractions, spotlight a single compelling value proposition, address prospect friction points, and drive direct action through integrated WhatsApp and enquiry workflows.",
    iconName: "Target",
    deliverables: [
      "Single-minded conversion narrative & structure",
      "Subtle micro-interactions & proof showcases",
      "Instant WhatsApp click-to-chat triggers",
      "Lead capture forms with server-side validation",
      "Sub-second page load times for low ad bounce rates",
      "UTM tracking & analytics integration readiness"
    ],
    techStack: ["React", "Tailwind CSS", "Vite", "Serverless API"],
    idealFor: ["Product Launches", "Google & Meta Ad Campaigns", "Event Registrations", "High-ticket Offers"],
    timeline: "5 to 10 days"
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    shortDesc: "Tailored business portals, client dashboards, workflow management tools, and interactive web software built with robust backend architectures.",
    fullDesc: "When off-the-shelf software doesn't fit your operational workflow, we build custom web applications. From internal employee dashboards to customer booking portals and data management systems, we engineer reliable tools with clean data flow and strict security.",
    iconName: "Code2",
    deliverables: [
      "Custom UI/UX dashboard & portal layouts",
      "Role-based authentication & permissions",
      "RESTful API & third-party service integrations",
      "Database schema architecture & data validation",
      "Real-time status updates & export capabilities",
      "Comprehensive code documentation and handover"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL / MongoDB", "Tailwind CSS"],
    idealFor: ["Logistics & Supply Chain", "Healthcare Providers", "Educational Institutions", "Growing SMBs"],
    timeline: "4 to 8 weeks"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "User research, wireframing, high-fidelity interface design, and interactive design systems built to elevate your digital presence before writing code.",
    fullDesc: "Great development starts with exceptional design. We study your target customers, map clear user journeys, and craft distinctive visual designs that reject generic AI templates. Every button, typography scale, and layout decision serves an intentional business purpose.",
    iconName: "Palette",
    deliverables: [
      "User persona & customer journey mapping",
      "Low-fidelity wireframes & page architecture",
      "High-fidelity responsive UI mockups",
      "Interactive clickable prototypes",
      "Design system tokens (Typography, Color, Spacing)",
      "Developer-ready production design assets"
    ],
    techStack: ["Figma", "Design Tokens", "Responsive Prototyping"],
    idealFor: ["Early-stage Founders", "Product Teams", "Brands planning a complete visual refresh"],
    timeline: "1 to 3 weeks"
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    shortDesc: "Modernize existing websites, resolve conversion bottlenecks, eliminate technical debt, and elevate your brand image while safeguarding SEO rank.",
    fullDesc: "If your current website feels dated, loads slowly, or fails to generate inquiries, we perform a comprehensive overhaul. We audit your user drop-offs, rebuild the user journey, improve Core Web Vitals, and preserve your existing URL rankings.",
    iconName: "RefreshCw",
    deliverables: [
      "Complete UX audit & drop-off analysis",
      "Modern editorial visual redesign",
      "Performance refactoring (eliminating bloat)",
      "301 redirect map preserving search engine indexing",
      "Mobile navigation & touch experience overhaul",
      "Streamlined WhatsApp & lead capture flows"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "SEO Preservation"],
    idealFor: ["Established Businesses", "Companies with outdated WordPress sites", "Rebranding Brands"],
    timeline: "2 to 4 weeks"
  },
  {
    id: "website-maintenance-optimization",
    title: "Website Maintenance & Optimization",
    shortDesc: "Ongoing performance audits, security patches, speed enhancements, and technical troubleshooting to keep your digital asset operating at peak performance.",
    fullDesc: "A website is a critical commercial asset that requires regular care. We offer proactive maintenance partnerships covering dependency upgrades, server monitoring, speed enhancements, content revisions, and rapid resolution of unexpected bugs.",
    iconName: "ShieldCheck",
    deliverables: [
      "Regular dependency & security patch audits",
      "Continuous Core Web Vitals monitoring",
      "Automated database & site backups",
      "Priority bug resolution & support window",
      "Content updates & minor feature adjustments",
      "Monthly health & performance summaries"
    ],
    techStack: ["Node.js", "Hosting CI/CD", "Monitoring Tools", "Git"],
    idealFor: ["Existing Website Owners", "E-commerce Brands", "Businesses without an in-house tech team"],
    timeline: "Ongoing Retainer"
  }
];
