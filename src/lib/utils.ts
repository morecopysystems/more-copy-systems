import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SITE } from "@/data/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Pre-filled WhatsApp enquiry. Every product and service CTA on the site routes
 * through this so the customer never has to explain what they were looking at.
 */
export function enquiryHref(subject: string) {
  const text = `Hi More Copy Systems, I'd like to enquire about: ${subject}`;
  return `${SITE.whatsapp.href}?text=${encodeURIComponent(text)}`;
}
