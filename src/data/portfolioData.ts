import type { PortfolioItem } from "../types";

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "foundry-coffee",
    title: "Foundry Coffee Roasters",
    clientType: "Artisan Roastery & Specialty Café",
    industry: "Specialty Food & Beverage",
    projectType: "E-commerce & Brand Showcase",
    shortDescription: "A minimalist, warm-editorial digital storefront engineered for a boutique specialty roastery, featuring small-batch bean subscriptions and brewing guides.",
    challenge: "Boutique coffee brands often rely on generic Shopify themes that feel clinical and lack the tactile warmth of physical roasteries, resulting in high bounce rates among craft coffee enthusiasts.",
    solution: "We designed an editorial, typography-forward storefront with warm off-white tones, artisanal ceramic packaging photography, single-click subscription checkout, and a seamless mobile cart.",
    desktopPreview: "/images/project-coffee.jpg",
    mobilePreview: "/images/project-coffee.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Razorpay Integration", "Framer Motion"],
    isConcept: true,
    metricsOrHighlights: [
      "Sub-800ms initial page load",
      "Streamlined 2-step subscription checkout",
      "Integrated grind-size selector & roast profile tags"
    ]
  },
  {
    id: "serene-clinical",
    title: "Serene Clinical & Diagnostic",
    clientType: "Modern Wellness & Medical Practice",
    industry: "Healthcare & Telehealth",
    projectType: "Appointment Booking Web App",
    shortDescription: "An accessible, calming patient portal and appointment scheduling web application designed to eliminate booking friction and automate patient intake.",
    challenge: "Traditional healthcare portals are notoriously confusing, crowded with medical jargon, and difficult to navigate on mobile devices, causing high telephone drop-off rates.",
    solution: "Engineered an ultra-clean, patient-centric booking interface with intuitive calendar selection, doctor credential transparency, instant SMS/WhatsApp booking confirmations, and strict accessibility standards.",
    desktopPreview: "/images/project-health.jpg",
    mobilePreview: "/images/project-health.jpg",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "WhatsApp API"],
    isConcept: true,
    metricsOrHighlights: [
      "Zero-confusion 3-click booking flow",
      "WCAG 2.1 AA accessibility compliant",
      "Automated WhatsApp appointment reminder integration"
    ]
  },
  {
    id: "amanayara-resort",
    title: "Amanayara Sanctuary & Resort",
    clientType: "Boutique Architectural Retreat",
    industry: "Luxury Hospitality & Travel",
    projectType: "Immersive Hospitality Website",
    shortDescription: "An editorial, high-end hospitality destination with architectural photography, suite availability checking, and bespoke guest experience curation.",
    challenge: "Luxury travelers expect an immediate sense of tranquility and exclusivity. Rigid OTA booking widgets frequently break the visual atmosphere of luxury properties.",
    solution: "Crafted a spacious, travertine-inspired aesthetic with full-bleed architectural imagery, subtle date-range booking widgets, direct inquiry triggers, and multilingual support readiness.",
    desktopPreview: "/images/project-resort.jpg",
    mobilePreview: "/images/project-resort.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Media"],
    isConcept: true,
    metricsOrHighlights: [
      "Custom travertine & warm sand visual aesthetic",
      "Direct commission-free suite booking flow",
      "Interactive property experience & culinary showcase"
    ]
  },
  {
    id: "luna-studio",
    title: "Luna Studio Collective",
    clientType: "Independent Architecture & Design Practice",
    industry: "Architecture & Industrial Design",
    projectType: "Portfolio & Editorial Archive",
    shortDescription: "A minimalist digital archive showcasing award-winning spatial design, monolithic structures, and bespoke interior projects.",
    challenge: "Design studios require an online portfolio that lets physical photography breathe without clunky navigational chrome or distracted visual gimmicks.",
    solution: "Constructed an asymmetric editorial grid with clean monochrome lines, museum-grade typography, smooth page transitions, and detailed project specification drawers.",
    desktopPreview: "/images/hero-showcase.jpg",
    mobilePreview: "/images/hero-showcase.jpg",
    technologies: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    isConcept: true,
    metricsOrHighlights: [
      "Asymmetric editorial layout",
      "Zero layout shift (CLS: 0.00)",
      "High-density responsive project viewer"
    ]
  },
  {
    id: "vanguard-advisory",
    title: "Vanguard Strategic Partners",
    clientType: "Boutique M&A & Financial Advisory",
    industry: "Corporate & Financial Services",
    projectType: "Corporate Authority Website",
    shortDescription: "A commanding, high-trust corporate web presence for institutional transaction advisors, private equity partners, and corporate executives.",
    challenge: "Institutional advisory firms must project unshakeable stability, regulatory compliance, and confidential transaction capabilities without appearing outdated.",
    solution: "Designed a clean, dark-accented executive layout highlighting verified deal volume, sector expertise, partner biographies, and encrypted consultation scheduling.",
    desktopPreview: "/images/hero-showcase.jpg",
    mobilePreview: "/images/hero-showcase.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    isConcept: true,
    metricsOrHighlights: [
      "Corporate trust-first typography & layout",
      "Encrypted advisory enquiry pipeline",
      "Mobile-optimized deal tombstones & case studies"
    ]
  },
  {
    id: "kroma-devtools",
    title: "Kroma Systems & Tooling",
    clientType: "Developer Infrastructure SaaS",
    industry: "Software & Technology",
    projectType: "SaaS Product Landing Page",
    shortDescription: "A razor-sharp developer tool landing page with interactive code playground previews, real-time benchmark tabs, and quick CLI installation snippets.",
    challenge: "Developers quickly bounce from fluffy marketing landing pages with buzzwords and fake graphics. They demand immediate technical proof and code samples.",
    solution: "Built a dark/light hybrid technical landing page spotlighting real syntax benchmarks, copyable bash commands, architectural diagrams, and direct GitHub documentation links.",
    desktopPreview: "/images/project-health.jpg",
    mobilePreview: "/images/project-health.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    isConcept: true,
    metricsOrHighlights: [
      "Interactive code syntax switcher",
      "100/100 Google Lighthouse performance score",
      "Clean documentation search integration"
    ]
  }
];
