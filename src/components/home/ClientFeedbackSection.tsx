import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, MessageSquare, ArrowUpRight } from "lucide-react";
import { AGENCY_CONFIG } from "../../config/agency";

export const ClientFeedbackSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F5F0] border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#C5A572] uppercase">
            Client Endorsements
          </p>
          <h2 className="font-['Manrope'] text-3xl font-extrabold text-[#101114] tracking-tight mt-1">
            Authenticity and verified feedback.
          </h2>
        </div>

        {/* Transparent Placeholder & Integrity Card */}
        <div className="bg-white p-8 sm:p-10 rounded-xs border border-[#E8E6E1] shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F7F5F0] border border-[#E8E6E1] text-[#C5A572] text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Fabricated Reviews Policy</span>
              </div>
              <h3 className="font-['Manrope'] text-xl sm:text-2xl font-bold text-[#101114]">
                We only showcase verified, post-launch feedback from active engagements.
              </h3>
              <p className="text-sm text-[#898B91] leading-relaxed max-w-2xl">
                Unlike agencies that generate fictitious 5-star testimonials with stock photos, {AGENCY_CONFIG.AGENCY_NAME} displays only authenticated customer reviews verified directly after project warranty handover.
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs text-[#52555F]">
                <span className="font-medium">Recent client or partner?</span>
                <Link
                  to="/contact"
                  className="text-[#C5A572] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Submit project feedback</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F7F5F0] p-6 rounded-xs border border-[#E8E6E1] text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-white border border-[#E8E6E1] flex items-center justify-center text-[#C5A572]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="font-bold text-sm text-[#101114]">
                Verified Reviews Space
              </div>
              <p className="text-xs text-[#898B91]">
                Authenticated testimonials will be published here upon completion of active project deliveries.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
