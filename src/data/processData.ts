import type { ProcessStep } from "../types";

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: "01",
    number: "01",
    title: "Discovery & Alignment",
    tagline: "Understanding your business, audience & metrics",
    description: "We begin with a focused conversation to understand your business model, target clientele, competitor landscape, and concrete project requirements. We identify what will truly drive conversions for your business rather than guessing.",
    deliverables: ["Project brief & goals", "Audience analysis", "Feature priority matrix", "Timeline estimate"]
  },
  {
    step: "02",
    number: "02",
    title: "Strategy & Information Architecture",
    tagline: "Planning the user journey before touching design",
    description: "Before writing any visual layout, we map out the complete sitemap, page hierarchy, and user conversion funnels. We ensure every page has a single, unambiguous objective that guides visitors towards making contact.",
    deliverables: ["Complete sitemap", "Low-fidelity wireframe flows", "Content outline", "Technical stack selection"]
  },
  {
    step: "03",
    number: "03",
    title: "Bespoke Visual Design",
    tagline: "Editorial aesthetics tailored to your brand identity",
    description: "We craft an original, art-directed visual identity for your website. Typography scales, restrained color palettes, high-craft whitespace, and realistic interactive prototypes give you a true sense of the finished product.",
    deliverables: ["High-fidelity Figma mockups", "Interactive click-through prototype", "Design token guidelines", "Desktop & mobile preview states"]
  },
  {
    step: "04",
    number: "04",
    title: "Clean Modern Development",
    tagline: "Semantic code, lightning-fast loading, zero bloat",
    description: "We write clean, maintainable, modern code using React, TypeScript, and optimized backend APIs. We integrate contact forms, WhatsApp actions, payment gateways, and databases with thorough error handling and responsive testing across all viewports.",
    deliverables: ["Production-ready frontend code", "Backend API & notification endpoints", "Cross-browser & mobile testing", "Core Web Vitals 90+ score"]
  },
  {
    step: "05",
    number: "05",
    title: "Launch, Handover & Support",
    tagline: "Smooth deployment and dependable post-launch warranty",
    description: "We deploy your project to high-speed hosting (Vercel, AWS, or your preferred server), set up custom domains and SSL, configure DNS records, and provide a comprehensive walkthrough. Every build includes a post-launch warranty.",
    deliverables: ["Production DNS & SSL deployment", "Full source code handover", "14–30 day warranty coverage", "Optional monthly maintenance"]
  }
];
