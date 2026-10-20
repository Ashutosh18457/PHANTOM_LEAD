import React from "react";
import { 
  MessageSquareCheck, 
  FileCheck, 
  Smartphone, 
  Sparkles, 
  Zap, 
  Kanban, 
  ShieldCheck 
} from "lucide-react";
import { WHY_CHOOSE_US_DATA } from "../../data/whyChooseUsData";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  MessageSquareCheck,
  FileCheck,
  Smartphone,
  Sparkles,
  Zap,
  Kanban,
  ShieldCheck
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F5F0] border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#C5A572] uppercase">
            Why Auren Digital
          </p>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#101114] tracking-tight mt-1">
            Built for reliability, speed, and long-term partnership.
          </h2>
          <p className="text-sm text-[#898B91] mt-3">
            We don't make exaggerated claims or promise overnight miracles. We deliver disciplined engineering, transparent collaboration, and human craftsmanship.
          </p>
        </div>

        {/* Editorial Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_DATA.map((item) => {
            const Icon = iconMap[item.iconName] || MessageSquareCheck;
            return (
              <div
                key={item.id}
                className="bg-white p-7 rounded-xs border border-[#E8E6E1] hover:border-[#C5A572]/70 transition-all duration-200 space-y-4 group shadow-2xs hover:shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xs bg-[#F7F5F0] group-hover:bg-[#101114] transition-colors flex items-center justify-center text-[#101114] group-hover:text-[#C5A572]">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#A6A8AE]">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-['Manrope'] font-bold text-lg text-[#101114] group-hover:text-[#C5A572] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#898B91] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
