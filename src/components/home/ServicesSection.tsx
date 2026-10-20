import React from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Layout,
  ShoppingBag, 
  Code2, 
  Target, 
  Palette, 
  RefreshCw,
  ShieldCheck, 
  ArrowRight,
  ArrowUpRight 
} from "lucide-react";
import { SERVICES_DATA } from "../../data/servicesData";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Briefcase,
  Layout,
  ShoppingBag,
  Code2,
  Target,
  Palette,
  RefreshCw,
  ShieldCheck
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F5F0] border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-[#C5A572] uppercase">
              Core Capabilities
            </p>
            <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#101114] tracking-tight mt-1">
              End-to-end digital solutions built for conversion and scale.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#101114] hover:text-[#C5A572] transition-colors"
          >
            <span>View Full Service Scope</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.iconName] || Briefcase;
            return (
              <div
                key={service.id}
                className="bg-white p-7 rounded-xs border border-[#E8E6E1] hover:border-[#C5A572] transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-md"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#F0EEE9]">
                    <div className="w-11 h-11 rounded-xs bg-[#F7F5F0] group-hover:bg-[#101114] transition-colors duration-200 flex items-center justify-center text-[#101114] group-hover:text-[#C5A572]">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#A6A8AE]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-['Manrope'] text-lg font-bold text-[#101114] mb-2.5 group-hover:text-[#C5A572] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#898B91] leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[11px] text-[#52555F]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572]"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3.5 border-t border-[#F0EEE9] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#898B91]">
                    {service.timeline}
                  </span>
                  <Link
                    to={`/start-project?service=${service.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#101114] group-hover:text-[#C5A572] transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
