import React from "react";
import { Compass, Users, Code, Smartphone, Gauge, MessageCircle } from "lucide-react";

export const TrustSection: React.FC = () => {
  const principles = [
    {
      icon: Compass,
      title: "Strategy before design",
      desc: "We diagnose your conversion bottlenecks and customer journey before touching a layout tool."
    },
    {
      icon: Users,
      title: "Built around real users",
      desc: "Every interaction is engineered for the genuine humans making purchasing decisions on your site."
    },
    {
      icon: Code,
      title: "Clean, maintainable code",
      desc: "Production TypeScript and semantic markup. Zero fragile builders or proprietary lock-in."
    },
    {
      icon: Smartphone,
      title: "Mobile-first experiences",
      desc: "Tested rigorously across small screens to desktop. Fast, tactile, and natural to navigate."
    },
    {
      icon: Gauge,
      title: "Performance & usability",
      desc: "Sub-second load times that keep bounce rates minimal and boost organic search ranking."
    },
    {
      icon: MessageCircle,
      title: "Transparent communication",
      desc: "Clear timelines, direct founder communication, and weekly staging milestone reviews."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#C5A572] uppercase">
            Our Foundation
          </p>
          <h2 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-[#101114] tracking-tight mt-1">
            Engineered for genuine business outcomes, not aesthetic vanity.
          </h2>
        </div>

        {/* 6-Pillar Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xs bg-[#F7F5F0] border border-[#E8E6E1] hover:border-[#C5A572]/60 transition-colors duration-200 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xs bg-white border border-[#E8E6E1] flex items-center justify-center text-[#101114] group-hover:text-[#C5A572] group-hover:border-[#C5A572] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-['Manrope'] font-bold text-base text-[#101114]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#898B91] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
