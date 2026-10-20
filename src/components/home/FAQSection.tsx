import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "../../data/faqData";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-b border-[#E8E6E1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F5F0] border border-[#E8E6E1] text-xs font-semibold text-[#C5A572] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TRANSPARENCY FIRST</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#101114] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#898B91] mt-2">
            Clear, honest answers about our pricing, timelines, technology, and working process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#E8E6E1] rounded-xs bg-[#F7F5F0] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-4 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-hidden hover:bg-[#EFECE6]/60 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Manrope'] font-bold text-sm sm:text-base text-[#101114]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#898B91] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#C5A572]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-[#52555F] leading-relaxed border-t border-[#E8E6E1]/60 bg-white animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
