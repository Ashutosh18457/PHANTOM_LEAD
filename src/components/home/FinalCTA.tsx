import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { AGENCY_CONFIG } from "../../config/agency";
import { getWhatsAppChatUrl } from "../../utils/whatsapp";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#101114] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1C21] border border-[#2C2E35] text-xs font-semibold tracking-wider text-[#A6A8AE] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#C5A572]"></span>
          <span>{AGENCY_CONFIG.TAGLINE}</span>
        </div>

        <h2 className="font-['Manrope'] text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Have a project in mind?
        </h2>

        <p className="text-base sm:text-lg text-[#A6A8AE] max-w-2xl mx-auto leading-relaxed">
          Tell us what you're building. We'll review your requirements, prepare an itemized scope, and discuss the right technical approach for your business.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/start-project"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C5A572] hover:bg-[#B3925F] text-[#101114] text-xs font-bold tracking-wider uppercase transition-all duration-200 rounded-xs shadow-lg btn-magnetic"
          >
            <span>{AGENCY_CONFIG.PRIMARY_CTA}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={getWhatsAppChatUrl("Hi Auren Digital, I'd like to discuss a project enquiry with your team.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1A1C21] hover:bg-[#25D366] text-white hover:text-[#101114] border border-[#2C2E35] text-xs font-bold tracking-wider uppercase transition-all duration-200 rounded-xs btn-magnetic"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <p className="text-xs text-[#898B91] pt-4">
          No automated cold pitches. Direct technical consultation from senior builders.
        </p>

      </div>
    </section>
  );
};
