import React from "react";
import { SEO } from "../components/layout/SEO";
import { HeroSection } from "../components/home/HeroSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { FeaturedWork } from "../components/home/FeaturedWork";
import { AgencyApproach } from "../components/home/AgencyApproach";
import { FinalCTA } from "../components/home/FinalCTA";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="We Turn Vision Into Digital Excellence"
        description="Auren Digital designs and develops premium websites that help businesses build trust, stand out, and grow."
      />
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Services Section */}
      <ServicesSection />

      {/* 3. Selected Work / Portfolio */}
      <FeaturedWork />

      {/* 4. Agency Approach */}
      <AgencyApproach />

      {/* 5. Project Inquiry Call to Action */}
      <FinalCTA />
    </div>
  );
};
