import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/layout/SEO";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import type { PortfolioItem } from "../types";
import { FinalCTA } from "../components/home/FinalCTA";

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCase, setSelectedCase] = useState<PortfolioItem | null>(null);

  const filterCategories = [
    { id: "all", label: "All Projects" },
    { id: "Specialty Food & Beverage", label: "E-commerce & Food" },
    { id: "Healthcare & Telehealth", label: "Healthcare & Portals" },
    { id: "Luxury Hospitality & Travel", label: "Hospitality & Resort" },
    { id: "Corporate & Financial Services", label: "Corporate & Advisory" },
    { id: "Architecture & Industrial Design", label: "Studio & Design" }
  ];

  const filteredProjects = activeFilter === "all"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.industry === activeFilter);

  return (
    <div className="bg-[#F7F5F0]">
      <SEO
        title="Selected Work & Digital Architecture — Portfolio"
        description="Explore our curated portfolio of bespoke web development, e-commerce storefronts, and tailored web applications by Auren Digital."
      />

      {/* Header */}
      <section className="py-16 md:py-24 border-b border-[#E8E6E1] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F7F5F0] border border-[#E8E6E1] text-[11px] font-semibold text-[#898B91] uppercase tracking-wider mb-2">
              <span>Our Portfolio</span>
              <span>•</span>
              <span className="text-[#C5A572]">Verified Concept Architecture</span>
            </div>
            <h1 className="font-['Manrope'] text-4xl sm:text-5xl font-extrabold text-[#101114] tracking-tight mt-2 mb-4">
              Selected works, design systems, and digital architectures.
            </h1>
            <p className="text-lg text-[#52555F] leading-relaxed font-normal">
              Every project represents a deliberate technical solution built from first principles. We do not invent client statistics or fictional credentials; all works below are clearly marked concept architectures engineered to demonstrate real production standards.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-[#E8E6E1]">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xs text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeFilter === cat.id
                    ? "bg-[#101114] text-white shadow-xs"
                    : "bg-[#F7F5F0] text-[#52555F] hover:bg-[#EFECE6] border border-[#E8E6E1]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xs border border-[#E8E6E1] overflow-hidden flex flex-col justify-between group hover:border-[#C5A572]/60 transition-all duration-300 shadow-2xs hover:shadow-md"
              >
                <div>
                  {/* Browser Window Header */}
                  <div className="bg-[#EFECE6] px-4 py-2.5 border-b border-[#E0DCCE] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80"></span>
                    </div>
                    <span className="text-[11px] font-mono text-[#898B91]">
                      {project.title.toLowerCase().replace(/\s+/g, "")}.com
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#C5A572]">
                      Concept
                    </span>
                  </div>

                  {/* Desktop Preview */}
                  <div className="relative aspect-16/10 bg-[#EFECE6] overflow-hidden">
                    <img
                      src={project.desktopPreview}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A572]">
                        {project.industry} • {project.projectType}
                      </span>
                      <h3 className="font-['Manrope'] text-2xl font-bold text-[#101114] mt-1 group-hover:text-[#C5A572] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#52555F] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-[#F0EEE9]">
                      {project.metricsOrHighlights.map((m, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#52555F]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A572] shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-[#F7F5F0] text-[#52555F] border border-[#E8E6E1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-4 bg-[#F7F5F0] border-t border-[#E8E6E1] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedCase(project)}
                    className="text-xs font-bold uppercase tracking-wider text-[#101114] hover:text-[#C5A572] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Read Architecture Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    to={`/start-project?ref=${project.id}`}
                    className="text-xs font-semibold text-[#C5A572] hover:underline"
                  >
                    Inquire Similar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-xs border border-[#E8E6E1] p-4 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedCase(null)}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 rounded-xs text-[#898B91] hover:text-[#101114] hover:bg-[#F7F5F0] transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A572]">
                  {selectedCase.industry} • Concept Project
                </span>
                <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-[#101114] mt-1">
                  {selectedCase.title}
                </h3>
              </div>

              <div className="rounded-xs overflow-hidden border border-[#E8E6E1]">
                <img
                  src={selectedCase.desktopPreview}
                  alt={selectedCase.title}
                  className="w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2 bg-[#F7F5F0] p-4 rounded-xs border border-[#E8E6E1]">
                  <h4 className="font-bold text-[#101114]">The Challenge</h4>
                  <p className="text-[#52555F] text-xs leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div className="space-y-2 bg-[#F7F5F0] p-4 rounded-xs border border-[#E8E6E1]">
                  <h4 className="font-bold text-[#101114]">The Solution</h4>
                  <p className="text-[#52555F] text-xs leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#101114]">
                  Key Deliverables & Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#52555F]">
                  {selectedCase.metricsOrHighlights.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572]"></span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E6E1] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#898B91]">
                  Ready to build a website of this caliber for your business?
                </div>
                <Link
                  to={`/start-project?ref=${selectedCase.id}`}
                  onClick={() => setSelectedCase(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#101114] hover:bg-[#C5A572] hover:text-[#101114] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <span>Start Similar Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <FinalCTA />
    </div>
  );
};
