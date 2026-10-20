import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/layout/SEO";
import { SERVICES_DATA } from "../data/servicesData";
import { 
  Briefcase, 
  Layout,
  ShoppingBag, 
  Code2, 
  Target, 
  Palette, 
  RefreshCw,
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Users 
} from "lucide-react";
import { FinalCTA } from "../components/home/FinalCTA";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Briefcase,
  Layout,
  ShoppingBag,
  Code2,
  Target,
  Palette,
  RefreshCw,
  ShieldCheck
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0]">
      <SEO
        title="Services — Tailored Web Engineering & Digital Solutions"
        description="Comprehensive web design, full-stack application development, bespoke e-commerce storefronts, and performance optimization by Auren Digital."
      />

      {/* Page Header */}
      <section className="py-16 md:py-24 border-b border-[#E8E6E1] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A572]">
              Our Capabilities
            </span>
            <h1 className="font-['Manrope'] text-4xl sm:text-5xl font-extrabold text-[#101114] tracking-tight mt-2 mb-4">
              Disciplined engineering for brands that demand performance.
            </h1>
            <p className="text-lg text-[#52555F] leading-relaxed font-normal">
              From focused single-page conversion funnels to complex multi-tenant web applications, we engineer digital solutions with clean code, zero bloated templates, and clear business alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.iconName] || Briefcase;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white p-8 sm:p-12 rounded-xs border border-[#E8E6E1] shadow-2xs scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Left Column: Title & Overview */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xs bg-[#F7F5F0] flex items-center justify-center text-[#101114] border border-[#E8E6E1]">
                        <Icon className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-semibold text-[#898B91]">
                          CAPABILITY 0{index + 1}
                        </span>
                        <h2 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-[#101114]">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[#52555F] leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="space-y-3 pt-2 border-t border-[#E8E6E1]">
                      <div className="flex items-center gap-2 text-xs text-[#52555F]">
                        <Clock className="w-4 h-4 text-[#C5A572]" />
                        <span><strong>Typical Timeline:</strong> {service.timeline}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[#52555F]">
                        <Users className="w-4 h-4 text-[#C5A572] shrink-0 mt-0.5" />
                        <div>
                          <strong>Best Suited For:</strong> {service.idealFor.join(", ")}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/start-project?service=${service.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#101114] hover:bg-[#C5A572] hover:text-[#101114] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors btn-magnetic"
                      >
                        <span>Start a {service.title} Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Inclusions & Tech Stack */}
                  <div className="lg:col-span-7 bg-[#F7F5F0] p-6 sm:p-8 rounded-xs border border-[#E8E6E1] space-y-6">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#101114] mb-4">
                        What's Included in This Scope
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2C2E35]">
                        {service.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#C5A572] shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E8E6E1]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#898B91] mb-3">
                        Technologies & Standards
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-xs bg-white text-xs font-mono font-medium text-[#101114] border border-[#E8E6E1]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
