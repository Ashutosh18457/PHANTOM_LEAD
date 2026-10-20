import React from "react";
import { SEO } from "../components/layout/SEO";
import { AGENCY_CONFIG } from "../config/agency";

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] py-16 md:py-24">
      <SEO
        title="Terms of Service — Client Engagement & Milestones"
        description="Our standard agency terms of service covering project milestones, deliverables, warranty, and code handover by Auren Digital."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-xs border border-[#E8E6E1] shadow-2xs">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A572]">
          Client Standards
        </span>
        <h1 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#101114] mt-1 mb-8">
          Terms of Service
        </h1>

        <div className="space-y-6 text-sm text-[#525252] leading-relaxed">
          <p>
            These Terms of Service govern the professional engagement between <strong>{AGENCY_CONFIG.AGENCY_NAME}</strong> and clients commissioning custom web design, software development, e-commerce storefronts, and maintenance services.
          </p>

          <h3 className="font-['Manrope'] font-bold text-lg text-[#171717] pt-2">
            1. Scope of Work & Proposals
          </h3>
          <p>
            All development work is governed by an individual Statement of Work (SOW) or proposal outlining specific deliverables, target milestones, and agreed technical integrations. Any feature requests outside the agreed scope will be evaluated under a separate change request.
          </p>

          <h3 className="font-['Manrope'] font-bold text-lg text-[#171717] pt-2">
            2. Payment Milestones
          </h3>
          <p>
            Standard projects follow a milestone-based payment structure (typically 40% discovery deposit, 30% development milestone approval, and 30% upon final production sign-off and deployment). Source code and production DNS records are handed over upon settlement of the final milestone.
          </p>

          <h3 className="font-['Manrope'] font-bold text-lg text-[#171717] pt-2">
            3. Client Intellectual Property & Code Ownership
          </h3>
          <p>
            Upon receipt of full payment, the client receives 100% full ownership of all custom frontend and backend code, graphics, and content authored specifically for the engagement. We do not impose proprietary vendor lock-in.
          </p>

          <h3 className="font-['Manrope'] font-bold text-lg text-[#171717] pt-2">
            4. Post-Launch Warranty
          </h3>
          <p>
            Every custom build delivered by {AGENCY_CONFIG.AGENCY_NAME} includes a standard 14 to 30-day post-launch warranty period during which any technical defects, responsive layout bugs, or functional errors within the original scope will be rectified at zero additional cost.
          </p>

          <h3 className="font-['Manrope'] font-bold text-lg text-[#171717] pt-2">
            5. Ongoing Retainers & Third-Party Services
          </h3>
          <p>
            Clients are responsible for their third-party operational accounts (such as domain registration fees, hosting plans, payment gateway processing percentages, and SMS/WhatsApp API usage fees). We assist in configuring these accounts directly under the client's ownership.
          </p>

          <div className="pt-6 border-t border-[#E7E5E0] text-xs text-[#737373]">
            Last updated: October 2026. For questions regarding contract terms, please contact {AGENCY_CONFIG.AGENCY_EMAIL}.
          </div>
        </div>
      </div>
    </div>
  );
};
