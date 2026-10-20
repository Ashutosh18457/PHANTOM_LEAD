import React from "react";
import { AGENCY_CONFIG } from "../../config/agency";


export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#C5A572] uppercase">
            Working Process
          </p>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#101114] tracking-tight mt-1">
            A structured workflow from requirement to launch.
          </h2>
          <p className="text-sm text-[#898B91] mt-3">
            Predictable, transparent, and collaborative. We guide each phase with clear milestone approvals so you remain in total control.
          </p>
        </div>

        {/* 7-Step Process Workflow List */}
        <div className="relative">
          {/* Subtle guide line */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[23px] w-[1px] bg-[#E8E6E1]"></div>

          <div className="space-y-6">
            {AGENCY_CONFIG.PROJECT_WORKFLOW.map((item) => (
              <div
                key={item.step}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group"
              >
                {/* Step Indicator */}
                <div className="lg:col-span-1 flex items-center gap-3 lg:block">
                  <div className="w-12 h-12 rounded-xs bg-[#101114] text-white flex items-center justify-center font-mono font-bold text-sm tracking-wider group-hover:bg-[#C5A572] group-hover:text-[#101114] transition-colors relative z-10 shadow-xs border border-[#22252C]">
                    {item.step}
                  </div>
                  <span className="lg:hidden text-xs font-semibold uppercase tracking-wider text-[#898B91]">
                    Phase {item.step}
                  </span>
                </div>

                {/* Main Content Card */}
                <div className="lg:col-span-11 bg-[#F7F5F0] p-6 sm:p-7 rounded-xs border border-[#E8E6E1] hover:border-[#D5D2CB] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-['Manrope'] text-lg sm:text-xl font-bold text-[#101114]">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium text-[#C5A572] font-mono">
                      Milestone {item.step}
                    </span>
                  </div>

                  <p className="text-sm text-[#52555F] leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
