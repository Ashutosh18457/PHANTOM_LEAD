import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppChatUrl } from "../../utils/whatsapp";

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip hint (dismissible) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#171717] text-white text-xs px-3.5 py-2 rounded-md shadow-lg border border-[#333333] animate-fadeIn">
          <span>Need a quick quote? Chat directly</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#888888] hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Circle Button */}
      <a
        href={getWhatsAppChatUrl("Hi Phantom Digital, I'd like to discuss a new website project.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]"></span>
        </span>
        <MessageCircle className="w-7 h-7 text-white fill-white/10" />
      </a>
    </div>
  );
};
