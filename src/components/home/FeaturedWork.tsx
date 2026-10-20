import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, X, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import type { PortfolioItem } from "../../types";

export const FeaturedWork: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<PortfolioItem | null>(null);

  // Show first 3 high-impact projects on homepage
  const featured = PORTFOLIO_DATA.slice(0, 3);

  return (
    <section className="py-20 bg-white border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F7F5F0] border border-[#E8E6E1] text-[11px] font-semibold text-[#898B91] uppercase tracking-wider mb-2">
              <span>Selected Portfolio</span>
              <span>•</span>
              <span className="text-[#C5A572]">Concept Showcases</span>
            </div>
            <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#101114] tracking-tight">
              Thoughtful craftsmanship. Built for real business conversions.
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#101114] hover:text-[#C5A572] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {featured.map((project, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10 rounded-xs bg-[#F7F5F0] border border-[#E8E6E1] hover:border-[#D5D2CB] transition-all duration-300 shadow-2xs"
              >
                {/* Visual Preview */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="rounded-md bg-white border border-[#D5D2CB] overflow-hidden shadow-md group">
                    {/* Browser Chrome Header */}
                    <div className="bg-[#EFECE6] px-3.5 py-2 border-b border-[#E0DCCE] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80"></span>
                      </div>
                      <div className="text-[11px] font-mono text-[#898B91] bg-white/70 px-3 py-0.5 rounded border border-[#E0DCCE] truncate max-w-[220px]">
                        {project.title.toLowerCase().replace(/\s+/g, "")}.com
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#898B91] font-semibold">
                        Preview
                      </span>
                    </div>

                    {/* Image Viewer */}
                    <div className="relative aspect-16/10 bg-[#EFECE6] overflow-hidden">
                      <img
                        src={project.desktopPreview}
                        alt={`${project.title} website preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                        loading="lazy"
                      />
                      {project.isConcept && (
                        <div className="absolute top-3 right-3 bg-[#101114]/85 backdrop-blur-xs text-white text-[10px] uppercase font-semibold px-2.5 py-1 rounded-xs tracking-wider border border-white/10">
                          Concept Exploration
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content & Metadata */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A572]">
                      {project.industry} • {project.projectType}
                    </span>
                    <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-[#101114] tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#52555F] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Highlights / Metrics */}
                  <div className="space-y-2 pt-2 border-t border-[#E8E6E1]">
                    {project.metricsOrHighlights.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs text-[#2C2E35]">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-xs bg-white text-[#52555F] border border-[#E8E6E1]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Case Study Modal Trigger */}
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101114] hover:text-[#C5A572] transition-colors group cursor-pointer"
                    >
                      <span>Read Case Architecture</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-xs border border-[#E8E6E1] p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xs text-[#898B91] hover:text-[#101114] hover:bg-[#F7F5F0] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A572]">
                  {activeModalProject.industry} • Concept Case Study
                </span>
                <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-[#101114] mt-1">
                  {activeModalProject.title}
                </h3>
              </div>

              {/* Big Preview */}
              <div className="rounded-xs overflow-hidden border border-[#E8E6E1]">
                <img
                  src={activeModalProject.desktopPreview}
                  alt={activeModalProject.title}
                  className="w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2 bg-[#F7F5F0] p-4 rounded-xs border border-[#E8E6E1]">
                  <h4 className="font-bold text-[#101114]">The Challenge</h4>
                  <p className="text-[#52555F] text-xs leading-relaxed">
                    {activeModalProject.challenge}
                  </p>
                </div>

                <div className="space-y-2 bg-[#F7F5F0] p-4 rounded-xs border border-[#E8E6E1]">
                  <h4 className="font-bold text-[#101114]">The Solution</h4>
                  <p className="text-[#52555F] text-xs leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#101114]">
                  Key Technical Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#52555F]">
                  {activeModalProject.metricsOrHighlights.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572]"></span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E6E1] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#898B91]">
                  Have a similar project in mind? Let's discuss scope.
                </div>
                <Link
                  to={`/start-project?ref=${activeModalProject.id}`}
                  onClick={() => setActiveModalProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#101114] hover:bg-[#C5A572] hover:text-[#101114] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <span>Start Similar Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
