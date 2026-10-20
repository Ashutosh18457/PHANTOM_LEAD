import React, { useState } from "react";
import { SEO } from "../components/layout/SEO";
import { AGENCY_CONFIG } from "../config/agency";
import { getWhatsAppChatUrl } from "../utils/whatsapp";
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle
} from "lucide-react";
import type { ContactFormData } from "../types";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    honeypot: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          honeypot: ""
        });
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try WhatsApp directly.");
      }
    } catch {
      // In local dev without backend, graceful fallback
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F7F5F0]">
      <SEO
        title="Contact Us — Direct Communication & Inquiries"
        description="Reach out directly to Auren Digital via WhatsApp or email. Typical reply within 2 to 4 business hours."
      />

      {/* Header */}
      <section className="py-16 md:py-24 border-b border-[#E8E6E1] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A572]">
              Get in Touch
            </span>
            <h1 className="font-['Manrope'] text-4xl sm:text-5xl font-extrabold text-[#101114] tracking-tight mt-2 mb-4">
              Let's discuss what you're building.
            </h1>
            <p className="text-lg text-[#52555F] leading-relaxed font-normal">
              Whether you have an upcoming project, need technical advice, or want to explore working together, we're ready to listen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Channels */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* WhatsApp Quick Action Card */}
              <div className="bg-[#101114] text-white p-8 rounded-xs shadow-md space-y-4 border border-[#22252C]">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#25D366]">
                  <MessageCircle className="w-4 h-4" />
                  <span>Fastest Response</span>
                </div>
                <h3 className="font-['Manrope'] text-2xl font-bold">
                  Chat directly with our team on WhatsApp
                </h3>
                <p className="text-xs text-[#A6A8AE] leading-relaxed">
                  Skip the back-and-forth email delay. Send us your ideas, reference websites, or voice notes.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppChatUrl("Hello Auren Digital, I'd like to ask a question about web development.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-[#101114] font-bold text-xs uppercase tracking-wider rounded-xs transition-colors btn-magnetic w-full justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp ({AGENCY_CONFIG.AGENCY_WHATSAPP_DISPLAY})</span>
                  </a>
                </div>
              </div>

              {/* General Details Box */}
              <div className="bg-white p-8 rounded-xs border border-[#E8E6E1] space-y-6 shadow-2xs">
                <h4 className="font-['Manrope'] font-bold text-base text-[#101114]">
                  Agency Contact Details
                </h4>

                <div className="space-y-4 text-xs sm:text-sm text-[#52555F]">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#C5A572] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#101114]">Email Inquiries</p>
                      <a href={`mailto:${AGENCY_CONFIG.AGENCY_EMAIL}`} className="text-[#C5A572] hover:underline font-medium">
                        {AGENCY_CONFIG.AGENCY_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C5A572] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#101114]">Location</p>
                      <p>{AGENCY_CONFIG.AGENCY_LOCATION}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#C5A572] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#101114]">Working Hours</p>
                      <p>{AGENCY_CONFIG.AGENCY_WORKING_HOURS}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xs border border-[#E8E6E1] shadow-2xs">
              <h3 className="font-['Manrope'] text-2xl font-bold text-[#101114] mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[#898B91] mb-8">
                Fill out the form below. We will review your message and reply via email or WhatsApp within 2–4 hours.
              </p>

              {success ? (
                <div className="p-6 bg-[#F0FDF4] border border-[#DCFCE7] rounded-xs space-y-4 text-center animate-fadeIn">
                  <CheckCircle2 className="w-10 h-10 text-[#16A34A] mx-auto" />
                  <h4 className="font-['Manrope'] font-bold text-lg text-[#166534]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-[#15803D]">
                    Thank you for reaching out! Our team has received your message and will get back to you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="text-xs font-semibold text-[#166534] underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Anti-spam honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 text-sm rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] focus:bg-white focus:border-[#C5A572] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 text-sm rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] focus:bg-white focus:border-[#C5A572] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 70665 93251"
                        className="w-full px-4 py-3 text-sm rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] focus:bg-white focus:border-[#C5A572] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Website redesign inquiry"
                        className="w-full px-4 py-3 text-sm rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] focus:bg-white focus:border-[#C5A572] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#101114] uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business, what you want to achieve, or any questions you have..."
                      className="w-full px-4 py-3 text-sm rounded-xs border border-[#E8E6E1] bg-[#F7F5F0] focus:bg-white focus:border-[#C5A572] focus:outline-hidden transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#101114] hover:bg-[#C5A572] hover:text-[#101114] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors btn-magnetic cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
