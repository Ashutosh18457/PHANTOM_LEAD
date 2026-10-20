import React from "react";
import { SEO } from "../components/layout/SEO";
import { HeroSection } from "../components/home/HeroSection";
import { TrustSection } from "../components/home/TrustSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { FeaturedWork } from "../components/home/FeaturedWork";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { ProcessSection } from "../components/home/ProcessSection";
import { ClientFeedbackSection } from "../components/home/ClientFeedbackSection";
import { FAQSection } from "../components/home/FAQSection";
import { FinalCTA } from "../components/home/FinalCTA";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="We Turn Vision Into Digital Excellence"
        description="Auren Digital designs and develops high-performing websites and digital experiences that help ambitious businesses stand out, earn trust, and grow."
      />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <FeaturedWork />
      <WhyChooseUs />
      <ProcessSection />
      <ClientFeedbackSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};
