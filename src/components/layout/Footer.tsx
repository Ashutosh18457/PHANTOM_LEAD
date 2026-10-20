import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle, Mail, MapPin } from "lucide-react";
import { AGENCY_CONFIG } from "../../config/agency";
import { getWhatsAppChatUrl } from "../../utils/whatsapp";
import { AurenLogo } from "../ui/AurenLogo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101114] text-[#898B91] pt-16 pb-12 border-t border-[#22252C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#22252C]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block focus:outline-hidden">
              <AurenLogo variant="light" size="md" />
            </Link>
            <p className="text-sm text-[#A6A8AE] max-w-sm leading-relaxed">
              {AGENCY_CONFIG.TAGLINE} {AGENCY_CONFIG.SUBTITLE}
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-[#898B91]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A572]" />
                <span>{AGENCY_CONFIG.AGENCY_LOCATION}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A572]" />
                <a href={`mailto:${AGENCY_CONFIG.AGENCY_EMAIL}`} className="hover:text-white transition-colors">
                  {AGENCY_CONFIG.AGENCY_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About & Approach
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/start-project" className="text-[#C5A572] font-medium hover:text-[#D9BE91] transition-colors inline-flex items-center gap-1">
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#business-website-development" className="hover:text-white transition-colors">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link to="/services#custom-website-design" className="hover:text-white transition-colors">
                  Custom Web Design
                </Link>
              </li>
              <li>
                <Link to="/services#ecommerce-development" className="hover:text-white transition-colors">
                  E-commerce Stores
                </Link>
              </li>
              <li>
                <Link to="/services#web-application-development" className="hover:text-white transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services#landing-page-development" className="hover:text-white transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link to="/services#website-redesign" className="hover:text-white transition-colors">
                  Website Redesign
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={getWhatsAppChatUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xs bg-[#1A1C21] hover:bg-[#25D366] text-white hover:text-[#101114] transition-all duration-200 text-xs font-medium w-full border border-[#2C2E35]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-[#101114]" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`mailto:${AGENCY_CONFIG.AGENCY_EMAIL}`}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xs bg-[#1A1C21] hover:bg-[#C5A572] text-white hover:text-[#101114] transition-all duration-200 text-xs font-medium w-full border border-[#2C2E35]"
              >
                <Mail className="w-4 h-4 text-[#C5A572] group-hover:text-[#101114]" />
                <span>Email Our Team</span>
              </a>
              <p className="text-[11px] text-[#898B91] pt-1">
                Typical reply window: within 2–4 business hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#898B91]">
          <div>
            © {currentYear} {AGENCY_CONFIG.AGENCY_NAME}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#333333]">•</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
