import React from "react";
import { SEO } from "../components/layout/SEO";
import { AGENCY_CONFIG } from "../config/agency";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] py-16 md:py-24">
      <SEO
        title="Privacy Policy — Data Handling & Client Confidentiality"
        description="Our privacy policy outlining how customer information, project briefs, and contact data are processed and protected by Auren Digital."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-xs border border-[#E8E6E1] shadow-2xs">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A572]">
          Legal Documentation
        </span>
        <h1 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#101114] mt-1 mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm text-[#525252] leading-relaxed">
          <p>
            At <strong>{AGENCY_CONFIG.AGENCY_NAME}</strong>, we take the privacy and confidentiality of our prospective and active clients seriously. This policy explains what information we collect, how it is handled, and your rights.
          </p>

          <h3 className="font-['Manrope'] font-bold text-lg text-[#171717] pt-2">
            1. Information We Collect
          </h3>
          <p>
            When you complete our Project Requirement Form or contact us, we collect details including your name, company name, work email address, WhatsApp telephone number, project specifications, and budget preferences.
          </p>

          <h3 className="font-['Manrope'] font-bold text-lg text-[#171717] pt-2">
            2. Purpose of Data Processing
          </h3>
          <p>
            We process your information solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Evaluate project scope and prepare accurate itemized proposals.</li>
            <li>Communicate directly regarding your project milestones and inquiries.</li>
            <li>Coordinate development and post-launch maintenance.</li>
          </ul>

          <h3 className="font-['Manrope'] font-bold text-lg text-[#171717] pt-2">
            3. Data Sharing & Third Parties
          </h3>
          <p>
            We never sell, rent, or trade your personal or business data to advertisers or third-party marketers. Data is only transferred through secure channels (such as our transactional email provider and official WhatsApp communication protocols).
          </p>

          <h3 className="font-['Manrope'] font-bold text-lg text-[#171717] pt-2">
            4. Project Confidentiality (NDA)
          </h3>
          <p>
            We respect the proprietary nature of early-stage startups and proprietary enterprise systems. If your project involves confidential business concepts, we are pleased to sign a mutual Non-Disclosure Agreement (NDA) prior to receiving proprietary documents.
          </p>

          <h3 className="font-['Manrope'] font-bold text-lg text-[#171717] pt-2">
            5. Contact Information
          </h3>
          <p>
            For privacy inquiries or requests to delete your submitted contact records, please email us directly at{" "}
            <a href={`mailto:${AGENCY_CONFIG.AGENCY_EMAIL}`} className="text-[#3157E8] underline font-medium">
              {AGENCY_CONFIG.AGENCY_EMAIL}
            </a>.
          </p>

          <div className="pt-6 border-t border-[#E7E5E0] text-xs text-[#737373]">
            Last updated: October 2026. This policy applies to all operations of {AGENCY_CONFIG.AGENCY_NAME}.
          </div>
        </div>
      </div>
    </div>
  );
};
