import { AGENCY_CONFIG } from "../config/agency";
import type { ProjectEnquiryData } from "../types";

/**
 * Builds the official WhatsApp click-to-chat URL
 * URL format: https://wa.me/INTERNATIONAL_NUMBER?text=ENCODED_MESSAGE
 */
export function getWhatsAppChatUrl(customMessage?: string): string {
  let number = AGENCY_CONFIG.AGENCY_WHATSAPP_NUMBER.replace(/\D/g, "");
  if (number.length === 10) {
    number = `91${number}`;
  }
  const defaultMessage = `Hi ${AGENCY_CONFIG.AGENCY_NAME}, I visited your website and would like to discuss a website development project.`;
  const message = customMessage || defaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats a project enquiry into a concise, readable WhatsApp summary message.
 * Never includes passwords or sensitive data.
 */
export function generateEnquiryWhatsAppMessage(data: Partial<ProjectEnquiryData>): string {
  const lines: string[] = [];
  lines.push(`👋 Hello ${AGENCY_CONFIG.AGENCY_NAME}, I've submitted a project enquiry with the following details:`);
  lines.push("");
  if (data.fullName) lines.push(`*Name:* ${data.fullName}`);
  if (data.companyName) lines.push(`*Company:* ${data.companyName}`);
  if (data.projectType) lines.push(`*Project Type:* ${data.projectType}`);
  if (data.budgetRange) lines.push(`*Budget Tier:* ${data.budgetRange}`);
  if (data.projectUrgency) lines.push(`*Timeline:* ${data.projectUrgency}`);
  
  if (data.selectedFeatures && data.selectedFeatures.length > 0) {
    lines.push(`*Key Features:* ${data.selectedFeatures.slice(0, 4).join(", ")}${data.selectedFeatures.length > 4 ? ` (+${data.selectedFeatures.length - 4} more)` : ""}`);
  }

  if (data.websiteGoal) {
    const goalSummary = data.websiteGoal.length > 100 ? `${data.websiteGoal.substring(0, 97)}...` : data.websiteGoal;
    lines.push(`*Primary Goal:* ${goalSummary}`);
  }

  lines.push("");
  lines.push(`Looking forward to discussing next steps with your team!`);

  return lines.join("\n");
}

/**
 * Opens WhatsApp in a new browser tab safely
 */
export function openWhatsAppDirect(message?: string): void {
  const url = getWhatsAppChatUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
