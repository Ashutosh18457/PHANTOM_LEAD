import React from "react";
import { Compass, Sparkles, Code2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AgencyApproach: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: "Strategy Before Code",
      description: "We analyze your audience and commercial objectives first. Every page layout, headline, and call to action serves a defined business purpose."
    },
    {
      icon: Sparkles,
      title: "Restrained Craftsmanship",
      description: "We reject generic templates and decorative clutter. Our designs feature strong typography, generous whitespace, and a refined luxury aesthetic."
    },
    {
      icon: Code2,
      title: "Clean Modern Engineering",
      description: "Built with modern React and TypeScript for sub-second speeds, flawless mobile responsiveness, and 100% complete code ownership."
    }
  ];

  const milestones = [
    { number: "01", label: "Discovery", desc: "Scope & architecture definition" },
    { number: "02", label: "Design", desc: "Bespoke high-fidelity interface" },
    { number: "03", label: "Development", desc: "Clean code & API integrations" },
    { number: "04", label: "Launch", desc: "Rigorous QA & production deploy" }
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#C5A572] uppercase mb-2">
            Our Approach
          </p>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#101114] tracking-tight">
            Thoughtful digital products built for genuine business impact.
          </h2>
          <p className="text-sm sm:text-base text-[#52555F] leading-relaxed mt-3">
            We operate as a disciplined digital partner. By combining bespoke UI/UX design with modern engineering, we build websites that earn client trust and generate qualified inquiries.
          </p>
        </div>

        {/* 3 Core Approach Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-xs bg-[#F7F5F0] border border-[#E8E6E1] hover:border-[#C5A572]/60 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xs bg-white border border-[#E8E6E1] flex items-center justify-center text-[#101114]">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="font-['Manrope'] font-bold text-lg text-[#101114]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#898B91] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Streamlined Delivery Flow Bar */}
        <div className="pt-10 border-t border-[#E8E6E1]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#101114]">
              Structured Delivery Roadmap
            </h3>
            <Link
              to="/about"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#C5A572] hover:underline"
            >
              <span>Learn more about our methodology</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {milestones.map((m) => (
              <div
                key={m.number}
                className="p-4 rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] space-y-1"
              >
                <span className="font-mono text-xs font-bold text-[#C5A572]">
                  {m.number}
                </span>
                <p className="font-bold text-sm text-[#101114]">{m.label}</p>
                <p className="text-[11px] text-[#898B91]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
