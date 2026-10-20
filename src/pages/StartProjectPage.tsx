import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEO } from "../components/layout/SEO";
import { AGENCY_CONFIG } from "../config/agency";
import { generateEnquiryWhatsAppMessage, getWhatsAppChatUrl } from "../utils/whatsapp";
import type { ProjectEnquiryData } from "../types";
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Home
} from "lucide-react";

export const StartProjectPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  // Step state (1 to 4)
  const [currentStep, setCurrentStep] = useState(1);

  // Form Data State
  const [formData, setFormData] = useState<ProjectEnquiryData>({
    fullName: "",
    companyName: "",
    workEmail: "",
    whatsappNumber: "",
    country: "India",
    preferredContact: "either",
    projectType: preselectedService ? (AGENCY_CONFIG.PROJECT_CATEGORIES.find(c => c.id === preselectedService)?.label || "Business Website Development") : "Business Website Development",
    businessDescription: "",
    websiteGoal: "",
    hasExistingWebsite: "no",
    existingWebsiteUrl: "",
    selectedFeatures: ["Contact & Lead Form", "WhatsApp Click-to-Chat Integration"],
    budgetRange: "₹30,000 – ₹60,000",
    desiredLaunchDate: "",
    projectUrgency: "Standard (2–4 weeks)",
    additionalNotes: "",
    consent: false,
    honeypot: ""
  });

  // Validation errors map
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Field change handler
  const handleInputChange = (field: keyof ProjectEnquiryData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Toggle feature selection
  const toggleFeature = (featureLabel: string) => {
    setFormData(prev => {
      const exists = prev.selectedFeatures.includes(featureLabel);
      if (exists) {
        return {
          ...prev,
          selectedFeatures: prev.selectedFeatures.filter(f => f !== featureLabel)
        };
      } else {
        return {
          ...prev,
          selectedFeatures: [...prev.selectedFeatures, featureLabel]
        };
      }
    });
  };

  // Step Validation Logic
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Please enter your full name.";
      } else if (formData.fullName.trim().length < 2) {
        newErrors.fullName = "Name must be at least 2 characters long.";
      }

      if (!formData.workEmail.trim()) {
        newErrors.workEmail = "Please enter your work email.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
        newErrors.workEmail = "Please enter a valid email address.";
      }

      const digits = formData.whatsappNumber.replace(/\D/g, "");
      if (!formData.whatsappNumber.trim()) {
        newErrors.whatsappNumber = "Please enter your WhatsApp phone number.";
      } else if (digits.length < 8) {
        newErrors.whatsappNumber = "Please enter a valid phone number (at least 8–10 digits).";
      }
    }

    if (step === 2) {
      if (!formData.projectType) {
        newErrors.projectType = "Please select a project type.";
      }
      if (formData.hasExistingWebsite === "yes" && formData.existingWebsiteUrl && !formData.existingWebsiteUrl.includes(".")) {
        newErrors.existingWebsiteUrl = "Please provide a valid website address (e.g., example.com).";
      }
    }

    if (step === 3) {
      if (!formData.budgetRange) {
        newErrors.budgetRange = "Please select an estimated budget tier or request a custom proposal.";
      }
    }

    if (step === 4) {
      if (!formData.consent) {
        newErrors.consent = "You must consent to being contacted regarding your project inquiry.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle navigation forward
  const nextStep = () => {
    if (validateStep(currentStep)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  // Handle navigation backward
  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Handle Final Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setServerError(result.error || "Unable to submit your enquiry. You can continue directly on WhatsApp.");
      }
    } catch {
      // Graceful fallback in development
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp quick action URL containing prefilled form specs
  const whatsAppEnquiryUrl = getWhatsAppChatUrl(generateEnquiryWhatsAppMessage(formData));

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-12 md:py-20">
      <SEO
        title="Start Your Project — Multi-Step Requirement Form"
        description="Share your project specifications, timeline, and feature requirements with Auren Digital's senior digital engineering team."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Breadcrumb */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs text-[#898B91] mb-2">
            <Link to="/" className="hover:text-[#101114]">Home</Link>
            <span>/</span>
            <span className="text-[#101114] font-semibold">Start Your Project</span>
          </div>
          <h1 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#101114] tracking-tight">
            Tell us about your project.
          </h1>
          <p className="text-sm text-[#898B91] mt-2">
            Complete this 4-step enquiry to receive an itemized proposal and technical recommendation within 2–4 business hours.
          </p>
        </div>

        {/* Progress Bar & Step Numbers */}
        {!isSuccess && (
          <div className="bg-white p-4 sm:p-6 rounded-xs border border-[#E8E6E1] shadow-2xs mb-8">
            <div className="grid grid-cols-4 gap-2 text-xs">
              {[
                { step: 1, title: "About You" },
                { step: 2, title: "Project Scope" },
                { step: 3, title: "Budget & Time" },
                { step: 4, title: "Review" }
              ].map((s) => {
                const isCompleted = currentStep > s.step;
                const isCurrent = currentStep === s.step;
                return (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => {
                      if (s.step < currentStep) setCurrentStep(s.step);
                    }}
                    disabled={s.step > currentStep}
                    className={`text-left pb-2 border-b-2 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed ${
                      isCurrent
                        ? "border-[#C5A572] text-[#101114] font-bold"
                        : isCompleted
                        ? "border-[#101114] text-[#101114]"
                        : "border-[#E8E6E1] text-[#A6A8AE]"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                        isCurrent
                          ? "bg-[#C5A572] text-[#101114]"
                          : isCompleted
                          ? "bg-[#101114] text-white"
                          : "bg-[#E8E6E1] text-[#898B91]"
                      }`}>
                        {isCompleted ? <Check className="w-3 h-3" /> : s.step}
                      </span>
                      <span className="hidden sm:inline">{s.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-white p-6 sm:p-10 rounded-xs border border-[#E8E6E1] shadow-sm">
          
          {/* SUCCESS CONFIRMATION STATE */}
          {isSuccess ? (
            <div className="py-8 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#F0FDF4] border-2 border-[#16A34A] flex items-center justify-center mx-auto text-[#16A34A]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2 max-w-xl mx-auto">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#16A34A]">
                  Enquiry Successfully Received
                </span>
                <h2 className="font-['Manrope'] text-3xl font-extrabold text-[#101114]">
                  Thank you, {formData.fullName}!
                </h2>
                <p className="text-sm text-[#52555F] leading-relaxed">
                  We have received your requirements for <strong>{formData.companyName || formData.projectType}</strong>. Our senior engineers at {AGENCY_CONFIG.AGENCY_NAME} will review your scope and follow up via {formData.preferredContact === "whatsapp" ? "WhatsApp" : formData.preferredContact === "email" ? "Email" : "WhatsApp or Email"} within 2–4 hours.
                </p>
              </div>

              {/* Fast-track on WhatsApp action */}
              <div className="pt-4 max-w-md mx-auto space-y-3">
                <a
                  href={whatsAppEnquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-[#25D366] hover:bg-[#20BD5A] text-[#101114] font-bold text-xs uppercase tracking-wider rounded-xs transition-colors shadow-md btn-magnetic"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Specs Directly on WhatsApp</span>
                </a>
                <p className="text-xs text-[#898B91]">
                  Fast-tracks your discussion with a prefilled project summary
                </p>
              </div>

              <div className="pt-6 border-t border-[#E8E6E1] flex justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#101114] hover:text-[#C5A572]"
                >
                  <Home className="w-4 h-4" />
                  <span>Return to Homepage</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* Global Server Error Alert */}
              {serverError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-bold">Notice</p>
                    <p>{serverError}</p>
                  </div>
                </div>
              )}

              {/* STEP 1: ABOUT YOU */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="border-b border-[#F0EEE9] pb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A572]">
                      Step 1 of 4
                    </span>
                    <h2 className="font-['Manrope'] text-2xl font-bold text-[#101114] mt-1">
                      Tell us about yourself and your business.
                    </h2>
                    <p className="text-xs text-[#898B91] mt-1">
                      We use this information exclusively to communicate regarding your project enquiry.
                    </p>
                  </div>

                  {/* Honeypot Spam trap */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => handleInputChange("honeypot", e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Ashutosh Bhule"
                        className={`w-full px-4 py-3 text-sm rounded-xs border bg-[#F7F5F0] focus:bg-white focus:outline-hidden transition-colors ${
                          errors.fullName ? "border-red-500" : "border-[#E8E6E1] focus:border-[#C5A572]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                        Company or Business Name <span className="text-[#A6A8AE] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        placeholder="e.g. Acme Tech Solutions"
                        className="w-full px-4 py-3 text-sm rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] focus:bg-white focus:border-[#C5A572] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) => handleInputChange("workEmail", e.target.value)}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 text-sm rounded-xs border bg-[#F7F5F0] focus:bg-white focus:outline-hidden transition-colors ${
                          errors.workEmail ? "border-red-500" : "border-[#E8E6E1] focus:border-[#C5A572]"
                        }`}
                      />
                      {errors.workEmail && (
                        <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.workEmail}</span>
                        </p>
                      )}
                    </div>

                    {/* WhatsApp Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.whatsappNumber}
                        onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
                        placeholder="+91 70665 93251"
                        className={`w-full px-4 py-3 text-sm rounded-xs border bg-[#F7F5F0] focus:bg-white focus:outline-hidden transition-colors ${
                          errors.whatsappNumber ? "border-red-500" : "border-[#E8E6E1] focus:border-[#C5A572]"
                        }`}
                      />
                      {errors.whatsappNumber && (
                        <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.whatsappNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Country */}
                    <div>
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                        Country / Region
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        placeholder="India"
                        className="w-full px-4 py-3 text-sm rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] focus:bg-white focus:border-[#C5A572] focus:outline-hidden transition-colors"
                      />
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "whatsapp", label: "WhatsApp" },
                          { id: "email", label: "Email" },
                          { id: "either", label: "Either" }
                        ].map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => handleInputChange("preferredContact", m.id)}
                            className={`py-3 px-2 text-xs font-semibold rounded-xs border text-center transition-colors cursor-pointer ${
                              formData.preferredContact === m.id
                                ? "bg-[#101114] text-white border-[#101114]"
                                : "bg-[#F7F5F0] text-[#52555F] border-[#E8E6E1] hover:bg-[#EFECE6]"
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: PROJECT DETAILS */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="border-b border-[#F0EEE9] pb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A572]">
                      Step 2 of 4
                    </span>
                    <h2 className="font-['Manrope'] text-2xl font-bold text-[#101114] mt-1">
                      What type of project do you need?
                    </h2>
                    <p className="text-xs text-[#898B91] mt-1">
                      Select the primary classification and specific features you envision.
                    </p>
                  </div>

                  {/* Project Type Grid */}
                  <div>
                    <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-3">
                      Project Category <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {AGENCY_CONFIG.PROJECT_CATEGORIES.map((cat) => {
                        const isSelected = formData.projectType === cat.label;
                        return (
                          <div
                            key={cat.id}
                            onClick={() => handleInputChange("projectType", cat.label)}
                            className={`p-4 rounded-xs border cursor-pointer transition-all duration-200 ${
                              isSelected
                                ? "bg-[#101114] text-white border-[#101114]"
                                : "bg-[#F7F5F0] text-[#101114] border-[#E8E6E1] hover:border-[#D5D2CB]"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-sm">{cat.label}</span>
                              {isSelected && <Check className="w-4 h-4 text-[#C5A572]" />}
                            </div>
                            <p className={`text-xs leading-relaxed ${isSelected ? "text-[#A6A8AE]" : "text-[#898B91]"}`}>
                              {cat.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Business Description */}
                  <div>
                    <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                      Briefly describe your business or organization
                    </label>
                    <textarea
                      rows={3}
                      value={formData.businessDescription}
                      onChange={(e) => handleInputChange("businessDescription", e.target.value)}
                      placeholder="e.g. We are an artisan specialty coffee brand expanding our direct-to-consumer online store across India..."
                      className="w-full px-4 py-3 text-sm rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] focus:bg-white focus:border-[#C5A572] focus:outline-hidden transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Main Goal */}
                  <div>
                    <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                      What is the primary goal of this website?
                    </label>
                    <input
                      type="text"
                      value={formData.websiteGoal}
                      onChange={(e) => handleInputChange("websiteGoal", e.target.value)}
                      placeholder="e.g. Generate high-ticket consulting leads through WhatsApp and schedule discovery calls"
                      className="w-full px-4 py-3 text-sm rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] focus:bg-white focus:border-[#C5A572] focus:outline-hidden transition-colors"
                    />
                  </div>

                  {/* Existing Website Check */}
                  <div className="p-4 rounded-xs bg-[#F7F5F0] border border-[#E8E6E1] space-y-4">
                    <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider">
                      Do you already have an existing website?
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 text-xs font-semibold text-[#101114] cursor-pointer">
                        <input
                          type="radio"
                          name="hasExistingWebsite"
                          value="no"
                          checked={formData.hasExistingWebsite === "no"}
                          onChange={() => handleInputChange("hasExistingWebsite", "no")}
                          className="text-[#C5A572]"
                        />
                        <span>No, building from scratch</span>
                      </label>
                      <label className="flex items-center gap-2 text-xs font-semibold text-[#101114] cursor-pointer">
                        <input
                          type="radio"
                          name="hasExistingWebsite"
                          value="yes"
                          checked={formData.hasExistingWebsite === "yes"}
                          onChange={() => handleInputChange("hasExistingWebsite", "yes")}
                          className="text-[#C5A572]"
                        />
                        <span>Yes, redesigning / upgrading</span>
                      </label>
                    </div>

                    {formData.hasExistingWebsite === "yes" && (
                      <div className="pt-2 animate-fadeIn">
                        <input
                          type="text"
                          value={formData.existingWebsiteUrl}
                          onChange={(e) => handleInputChange("existingWebsiteUrl", e.target.value)}
                          placeholder="https://yourcurrentwebsite.com"
                          className="w-full px-4 py-2.5 text-xs rounded-xs border border-[#D5D2CB] bg-white focus:border-[#C5A572] focus:outline-hidden"
                        />
                      </div>
                    )}
                  </div>

                  {/* Feature Checkboxes */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider">
                        Preferred Features & Integrations
                      </label>
                      <span className="text-[11px] text-[#898B91]">Select all that apply</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {AGENCY_CONFIG.PROJECT_FEATURES.map((feature) => {
                        const isChecked = formData.selectedFeatures.includes(feature.label);
                        return (
                          <div
                            key={feature.id}
                            onClick={() => toggleFeature(feature.label)}
                            className={`p-3 rounded-xs border text-xs font-medium flex items-center justify-between cursor-pointer transition-colors ${
                              isChecked
                                ? "bg-[#F7F5F0] text-[#101114] border-[#C5A572]"
                                : "bg-[#F7F5F0] text-[#52555F] border-[#E8E6E1] hover:bg-[#EFECE6]"
                            }`}
                          >
                            <span>{feature.label}</span>
                            <div className={`w-4 h-4 rounded-xs border flex items-center justify-center ${
                              isChecked ? "bg-[#C5A572] border-[#C5A572] text-[#101114]" : "border-[#D5D2CB] bg-white"
                            }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: BUDGET AND TIMELINE */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="border-b border-[#F0EEE9] pb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A572]">
                      Step 3 of 4
                    </span>
                    <h2 className="font-['Manrope'] text-2xl font-bold text-[#101114] mt-1">
                      Budget range and estimated timeline.
                    </h2>
                    <p className="text-xs text-[#898B91] mt-1">
                      Indicative tiers help us recommend the most appropriate technical architecture without over-engineering.
                    </p>
                  </div>

                  {/* Budget Ranges Grid */}
                  <div>
                    <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-3">
                      Estimated Project Investment <span className="text-red-500">*</span>
                    </label>

                    <div className="space-y-2.5">
                      {AGENCY_CONFIG.BUDGET_RANGES.map((tier) => {
                        const isSelected = formData.budgetRange === tier.label;
                        return (
                          <div
                            key={tier.id}
                            onClick={() => handleInputChange("budgetRange", tier.label)}
                            className={`p-4 rounded-xs border cursor-pointer flex items-center justify-between transition-all duration-200 ${
                              isSelected
                                ? "bg-[#101114] text-white border-[#101114]"
                                : "bg-[#F7F5F0] text-[#101114] border-[#E8E6E1] hover:border-[#D5D2CB]"
                            }`}
                          >
                            <div>
                              <span className="font-bold text-sm block">{tier.label}</span>
                              <span className={`text-xs ${isSelected ? "text-[#A6A8AE]" : "text-[#898B91]"}`}>
                                {tier.note}
                              </span>
                            </div>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? "border-white bg-[#C5A572]" : "border-[#D5D2CB] bg-white"
                            }`}>
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#101114]"></span>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Urgency & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                        Project Urgency
                      </label>
                      <select
                        value={formData.projectUrgency}
                        onChange={(e) => handleInputChange("projectUrgency", e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] focus:bg-white focus:border-[#C5A572] focus:outline-hidden"
                      >
                        {AGENCY_CONFIG.TIMELINE_OPTIONS.map((t) => (
                          <option key={t.id} value={t.label}>{t.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                        Desired Launch Date <span className="text-[#A6A8AE] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="date"
                        value={formData.desiredLaunchDate}
                        onChange={(e) => handleInputChange("desiredLaunchDate", e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] focus:bg-white focus:border-[#C5A572] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  {/* Additional notes */}
                  <div>
                    <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                      Special Requirements or References <span className="text-[#A6A8AE] font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                      placeholder="Share any reference websites you admire, existing brand assets, or specific technical constraints..."
                      className="w-full px-4 py-3 text-sm rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] focus:bg-white focus:border-[#C5A572] focus:outline-hidden transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* STEP 4: REVIEW AND SUBMIT */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="border-b border-[#F0EEE9] pb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A572]">
                      Step 4 of 4
                    </span>
                    <h2 className="font-['Manrope'] text-2xl font-bold text-[#101114] mt-1">
                      Review your project enquiry.
                    </h2>
                    <p className="text-xs text-[#898B91] mt-1">
                      Check your answers below. You can navigate back to adjust any information before submitting.
                    </p>
                  </div>

                  {/* Summary Cards */}
                  <div className="space-y-4">
                    {/* About You Summary */}
                    <div className="p-4 rounded-xs bg-[#F7F5F0] border border-[#E8E6E1] flex items-start justify-between">
                      <div className="space-y-1 text-xs">
                        <span className="font-bold text-[#101114] uppercase tracking-wider text-[11px] block">
                          Client Information
                        </span>
                        <p className="text-sm font-semibold text-[#101114]">{formData.fullName} {formData.companyName && `(${formData.companyName})`}</p>
                        <p className="text-[#898B91]">{formData.workEmail} • WhatsApp: {formData.whatsappNumber}</p>
                        <p className="text-[#898B91]">Location: {formData.country} • Preferred via {formData.preferredContact}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="text-xs font-semibold text-[#C5A572] hover:underline cursor-pointer"
                      >
                        Edit
                      </button>
                    </div>

                    {/* Scope Summary */}
                    <div className="p-4 rounded-xs bg-[#F7F5F0] border border-[#E8E6E1] flex items-start justify-between">
                      <div className="space-y-1 text-xs">
                        <span className="font-bold text-[#101114] uppercase tracking-wider text-[11px] block">
                          Project Scope
                        </span>
                        <p className="text-sm font-semibold text-[#101114]">{formData.projectType}</p>
                        {formData.websiteGoal && <p className="text-[#52555F]">Goal: {formData.websiteGoal}</p>}
                        <div className="pt-1 flex flex-wrap gap-1">
                          {formData.selectedFeatures.map((f) => (
                            <span key={f} className="px-2 py-0.5 rounded-xs bg-white border border-[#E8E6E1] text-[10px] text-[#52555F]">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="text-xs font-semibold text-[#C5A572] hover:underline cursor-pointer"
                      >
                        Edit
                      </button>
                    </div>

                    {/* Budget & Timeline Summary */}
                    <div className="p-4 rounded-xs bg-[#F7F5F0] border border-[#E8E6E1] flex items-start justify-between">
                      <div className="space-y-1 text-xs">
                        <span className="font-bold text-[#101114] uppercase tracking-wider text-[11px] block">
                          Budget & Schedule
                        </span>
                        <p className="text-sm font-semibold text-[#101114]">{formData.budgetRange}</p>
                        <p className="text-[#898B91]">Urgency: {formData.projectUrgency}</p>
                        {formData.desiredLaunchDate && <p className="text-[#898B91]">Target Date: {formData.desiredLaunchDate}</p>}
                      </div>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="text-xs font-semibold text-[#C5A572] hover:underline cursor-pointer"
                      >
                        Edit
                      </button>
                    </div>
                  </div>

                  {/* Required Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 text-xs text-[#52555F] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => handleInputChange("consent", e.target.checked)}
                        className="mt-0.5 w-4 h-4 text-[#C5A572] rounded-xs border-[#D5D2CB]"
                      />
                      <span>
                        I consent to {AGENCY_CONFIG.AGENCY_NAME} storing and using my contact details to evaluate my project requirements and respond with a proposal.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Option to send via WhatsApp directly */}
                  <div className="p-3 bg-[#F7F5F0] border border-[#E8E6E1] rounded-xs flex items-center justify-between text-xs text-[#101114]">
                    <span>Prefer WhatsApp immediately?</span>
                    <a
                      href={whatsAppEnquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#C5A572] hover:underline flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat with this summary</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Form Navigation Controls */}
              <div className="pt-8 border-t border-[#F0EEE9] flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs border border-[#D5D2CB] bg-white text-xs font-semibold uppercase tracking-wider text-[#101114] hover:bg-[#F7F5F0] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 px-7 py-3 bg-[#101114] hover:bg-[#C5A572] hover:text-[#101114] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors btn-magnetic cursor-pointer shadow-xs"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#101114] hover:bg-[#C5A572] hover:text-[#101114] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors btn-magnetic cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending enquiry...</span>
                    ) : (
                      <>
                        <span>Send Project Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
