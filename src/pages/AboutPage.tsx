import React from "react";
import { SEO } from "../components/layout/SEO";
import { AGENCY_CONFIG } from "../config/agency";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { ProcessSection } from "../components/home/ProcessSection";
import { FinalCTA } from "../components/home/FinalCTA";

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: "Clarity over Complexity",
      desc: "We prioritize straightforward architectures and unambiguous language. We never hide behind technical jargon or bloat projects with unneeded libraries."
    },
    {
      title: "Direct Builder Collaboration",
      desc: "Clients speak directly to the engineers and designers executing their project. No lost-in-translation account managers or non-technical handoffs."
    },
    {
      title: "Clean Ownership & Zero Lock-In",
      desc: "You own 100% of your source code, design assets, and production hosting accounts from day one. No proprietary agency platforms holding you hostage."
    },
    {
      title: "Relentless Focus on Performance",
      desc: "Speed is a foundational feature. We write semantic HTML, clean CSS, and modular TypeScript to guarantee rapid load times and accessible user experiences."
    }
  ];

  return (
    <div className="bg-[#F7F5F0]">
      <SEO
        title="About & Philosophy — Independent Digital Studio"
        description="Learn about Auren Digital's engineering principles, client-first communication, and approach to modern web development."
      />

      {/* Header */}
      <section className="py-16 md:py-24 border-b border-[#E8E6E1] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A572]">
              About {AGENCY_CONFIG.AGENCY_NAME}
            </span>
            <h1 className="font-['Manrope'] text-4xl sm:text-5xl font-extrabold text-[#101114] tracking-tight mt-2 mb-4">
              An independent studio dedicated to digital excellence.
            </h1>
            <p className="text-lg text-[#52555F] leading-relaxed font-normal">
              We started with a simple belief: ambitious businesses deserve high-performing, custom websites crafted with care by senior builders, without the bloated fees of traditional agencies or the fragility of template builders.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A572]">
                Our Working Principles
              </span>
              <h2 className="font-['Manrope'] text-3xl font-extrabold text-[#101114]">
                We treat your website as a critical commercial engine, not a brochure.
              </h2>
              <p className="text-sm text-[#52555F] leading-relaxed">
                In today's digital economy, first impressions form within milliseconds. If a site is slow, cluttered, or difficult to navigate on a phone, potential clients bounce directly to a competitor.
              </p>
              <p className="text-sm text-[#52555F] leading-relaxed">
                We combine thoughtful UI/UX design with production-grade engineering to deliver websites that present your services with clarity, rank effectively in search engines, and convert visitors into qualified leads through direct WhatsApp and email pipelines.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xs border border-[#E8E6E1] space-y-6 shadow-2xs">
              <h3 className="font-['Manrope'] font-bold text-lg text-[#101114]">
                What We Reject vs. What We Deliver
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xs bg-[#FFF5F5] border border-[#FFD8D8] text-[#9E2A2B]">
                  <strong>✕ We Reject:</strong> Sluggish WordPress themes, generic AI-generated copy, cookie-cutter templates, fake testimonials, and hidden maintenance fees.
                </div>
                <div className="p-3.5 rounded-xs bg-[#F0FDF4] border border-[#DCFCE7] text-[#166534]">
                  <strong>✓ We Deliver:</strong> Tailored React & TypeScript codebases, mobile-first layouts, sub-second page loads, transparent milestone pricing, and full code handover.
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="pt-8">
            <h3 className="font-['Manrope'] text-2xl font-bold text-[#101114] mb-8">
              Guiding Studio Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-xs border border-[#E8E6E1] space-y-3 shadow-2xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C5A572]"></span>
                    <h4 className="font-['Manrope'] font-bold text-lg text-[#101114]">
                      {v.title}
                    </h4>
                  </div>
                  <p className="text-sm text-[#898B91] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Why Clients Choose Auren Digital */}
      <WhyChooseUs />

      {/* 7-Step Delivery Process */}
      <ProcessSection />

      <FinalCTA />
    </div>
  );
};
