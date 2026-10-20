import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AGENCY_CONFIG } from "../../config/agency";
import { AurenLogo } from "../ui/AurenLogo";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    return path !== "/" && location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E8E6E1] py-3.5 shadow-xs"
          : "bg-[#F7F5F0] border-b border-[#E8E6E1]/70 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Auren Digital Wordmark & Monogram Logo */}
        <Link
          to="/"
          className="group focus:outline-hidden"
          aria-label="Auren Digital Home"
        >
          <AurenLogo size="md" variant="dark" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-200 relative py-1 text-sm tracking-wide ${
                isActive(link.path)
                  ? "text-[#101114] font-semibold"
                  : "text-[#52555F] hover:text-[#101114]"
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A572] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/start-project"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#101114] hover:bg-[#C5A572] hover:text-[#101114] transition-all duration-200 rounded-xs shadow-xs btn-magnetic"
          >
            <span>{AGENCY_CONFIG.PRIMARY_CTA}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xs text-[#101114] hover:bg-[#E8E6E1]/60 focus:outline-hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[#E8E6E1] bg-[#F7F5F0] px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`py-2 text-base font-medium px-2 rounded-xs transition-colors ${
                  isActive(link.path)
                    ? "bg-[#E8E6E1]/70 text-[#101114] font-semibold"
                    : "text-[#52555F] hover:bg-[#E8E6E1]/40 hover:text-[#101114]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#E8E6E1]">
              <Link
                to="/start-project"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#101114] hover:bg-[#C5A572] hover:text-[#101114] transition-colors rounded-xs shadow-xs"
              >
                <span>{AGENCY_CONFIG.PRIMARY_CTA}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
