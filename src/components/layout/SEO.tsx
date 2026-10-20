import { useEffect } from "react";
import { AGENCY_CONFIG } from "../../config/agency";

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${AGENCY_CONFIG.AGENCY_NAME}`
      : `${AGENCY_CONFIG.AGENCY_NAME} — ${AGENCY_CONFIG.TAGLINE}`;
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
};
