import React from "react";

interface AurenLogoProps {
  variant?: "dark" | "light";
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const AurenLogo: React.FC<AurenLogoProps> = ({
  variant = "dark",
  showWordmark = true,
  size = "md",
  className = ""
}) => {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: { icon: "w-7 h-7", title: "text-base tracking-[0.06em]", sub: "text-[8px] tracking-[0.24em]" },
    md: { icon: "w-8.5 h-8.5", title: "text-lg tracking-[0.08em]", sub: "text-[9px] tracking-[0.28em]" },
    lg: { icon: "w-11 h-11", title: "text-2xl tracking-[0.08em]", sub: "text-[11px] tracking-[0.3em]" }
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric A Monogram - Gateway & Craftsmanship motif */}
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses.icon} shrink-0 transition-transform duration-200 group-hover:scale-103`}
        aria-hidden="true"
      >
        {/* Monogram Background Block */}
        <rect
          width="44"
          height="44"
          rx="4"
          fill={isLight ? "#1A1C21" : "#101114"}
          stroke={isLight ? "#2C2E35" : "#22252C"}
          strokeWidth="1"
        />
        
        {/* Architectural / Geometric 'A' Apex & Gateway */}
        <path
          d="M22 8L33 34H26.8L22 21.6L17.2 34H11L22 8Z"
          fill={isLight ? "#F7F5F0" : "#F7F5F0"}
        />
        
        {/* Champagne Gold Horizontal Craft Bar / Gateway Beam */}
        <path
          d="M15.5 25.5H28.5V28H15.5V25.5Z"
          fill="#C5A572"
        />

        {/* Small Precision Craft Accent Dot */}
        <circle cx="22" cy="15" r="1.5" fill="#C5A572" />
      </svg>

      {/* Elegant Typographic Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-['Manrope'] font-extrabold ${sizeClasses.title} ${
              isLight ? "text-white" : "text-[#101114]"
            }`}
          >
            AUREN
          </span>
          <span
            className={`font-mono font-semibold uppercase mt-0.5 ${sizeClasses.sub} ${
              isLight ? "text-[#C5A572]" : "text-[#898B91]"
            }`}
          >
            DIGITAL
          </span>
        </div>
      )}
    </div>
  );
};
