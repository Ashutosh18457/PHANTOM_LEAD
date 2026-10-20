import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, ShieldCheck } from "lucide-react";
import { AGENCY_CONFIG } from "../../config/agency";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Conversion Messaging */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFECE6] border border-[#E0DCCE] text-xs font-semibold tracking-wide text-[#2C2E35]">
              <span className="w-2 h-2 rounded-full bg-[#C5A572]"></span>
              <span>{AGENCY_CONFIG.TAGLINE}</span>
              <span className="text-[#898B91]">•</span>
              <span className="text-[#898B91] font-normal">STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Manrope'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#101114] tracking-tight leading-[1.14]">
              Your Vision. <br className="hidden sm:inline" />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#101114]">Our Digital Craft.</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-[#C5A572]/25 -z-0"></span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#52555F] leading-relaxed max-w-xl font-normal">
              {AGENCY_CONFIG.SUBTITLE}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/start-project"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#101114] hover:bg-[#C5A572] hover:text-[#101114] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-xs shadow-md btn-magnetic"
              >
                <span>{AGENCY_CONFIG.PRIMARY_CTA}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#EFECE6] border border-[#D5D2CB] text-[#101114] text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-xs shadow-2xs btn-magnetic"
              >
                <span>{AGENCY_CONFIG.SECONDARY_CTA}</span>
                <ArrowRight className="w-4 h-4 text-[#898B91]" />
              </Link>
            </div>

            {/* Value Highlights Pill Bar */}
            <div className="pt-6 border-t border-[#E8E6E1] grid grid-cols-2 sm:grid-cols-4 gap-4">
              {AGENCY_CONFIG.AGENCY_HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-['Manrope'] text-xl font-bold text-[#101114]">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#898B91] font-medium leading-tight">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-Craft Desktop Browser Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle Decorative Luxury Underlay */}
              <div className="absolute -inset-2 bg-linear-to-tr from-[#EFECE6] to-[#E8E6E1] rounded-xl -rotate-1 opacity-70"></div>
              
              {/* Browser Frame Window */}
              <div className="relative rounded-lg bg-white border border-[#D5D2CB] shadow-xl overflow-hidden">
                {/* Safari Browser Window Chrome */}
                <div className="bg-[#EFECE6] px-4 py-2.5 border-b border-[#E0DCCE] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 border border-[#1AAB29]"></span>
                  </div>
                  <div className="bg-white/80 px-4 py-0.5 rounded text-[11px] font-mono text-[#898B91] border border-[#D5D2CB]/60 truncate max-w-[200px]">
                    aurendigital.com/preview
                  </div>
                  <div className="w-10"></div>
                </div>

                {/* Live Image Asset inside Browser */}
                <div className="relative aspect-16/10 sm:aspect-4/3 bg-[#F7F5F0] overflow-hidden group">
                  <img
                    src="/images/hero-showcase.jpg"
                    alt="Editorial web design showcase by Auren Digital"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                    loading="eager"
                  />
                  
                  {/* Floating Live Badge */}
                  <div className="absolute bottom-3 left-3 bg-[#101114]/90 backdrop-blur-xs text-white text-[11px] font-medium px-3 py-1.5 rounded-xs shadow-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C5A572] animate-pulse"></span>
                    <span>Editorial Case Preview</span>
                  </div>
                </div>

                {/* Card Caption / Proof Bar */}
                <div className="p-4 bg-white border-t border-[#E8E6E1] flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-[#101114]">Human-Crafted Digital Presence</p>
                    <p className="text-[#898B91] text-[11px]">Bespoke Architecture • Zero Templates</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#C5A572] font-semibold text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Code</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
