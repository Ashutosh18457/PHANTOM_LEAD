export interface Differentiator {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export const WHY_CHOOSE_US_DATA: Differentiator[] = [
  {
    id: "direct-comm",
    number: "01",
    title: "Direct Communication with the Builders",
    description: "You deal directly with the senior designers and developers building your project, not layers of account executives, non-technical project managers, or outsourced junior contractors.",
    iconName: "MessageSquareCheck"
  },
  {
    id: "clear-scope",
    number: "02",
    title: "Clear, Transparent Project Scopes",
    description: "Every proposal itemizes deliverables, timeline milestones, and exact inclusions. No hidden fees, surprise scope-creep invoices, or ambiguous technical commitments.",
    iconName: "FileCheck"
  },
  {
    id: "mobile-first",
    number: "03",
    title: "Uncompromising Mobile-First Engineering",
    description: "We don't merely shrink desktop designs down for phones. We architect every layout, touch target, and interaction specifically for comfortable thumb-driven mobile usage.",
    iconName: "Smartphone"
  },
  {
    id: "thoughtful-design",
    number: "04",
    title: "Art-Directed, Intentional Visuals",
    description: "We reject generic AI gradients, cookie-cutter templates, and clunky site builders. Your site receives custom typography, deliberate whitespace, and a refined identity.",
    iconName: "Sparkles"
  },
  {
    id: "performance",
    number: "05",
    title: "Performance-Conscious Implementation",
    description: "Fast websites rank higher, engage visitors better, and convert more prospects. We target sub-second load times and 90+ Core Web Vitals across every build.",
    iconName: "Zap"
  },
  {
    id: "structured-delivery",
    number: "06",
    title: "Structured, Predictable Milestones",
    description: "From discovery kickoff to final DNS propagation, our five-phase roadmap keeps you informed with staging previews and scheduled progress check-ins at every milestone.",
    iconName: "Kanban"
  },
  {
    id: "post-launch",
    number: "07",
    title: "Post-Launch Warranty & Support",
    description: "We stand behind our code. Every delivered project includes a complimentary warranty window for adjustments and bug fixes, with long-term maintenance retainers available.",
    iconName: "ShieldCheck"
  }
];
