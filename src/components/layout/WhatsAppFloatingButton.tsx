import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppChatUrl } from "../../utils/whatsapp";
import { AGENCY_CONFIG } from "../../config/agency";

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={getWhatsAppChatUrl(`Hi ${AGENCY_CONFIG.AGENCY_NAME}, I'd like to discuss a new website project.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Auren Digital on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-[#101114] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white border border-[#25D366]"></span>
        </span>
        <MessageCircle className="w-6 h-6 text-[#101114] fill-[#101114]" />
      </a>
    </div>
  );
};
