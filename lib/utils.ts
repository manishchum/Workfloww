import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Standardized spacing system for consistent layout across all pages
export const SPACING = {
  // Section padding
  sectionPaddingMobile: "2.5rem 1.25rem",
  sectionPaddingDesktop: "3rem 2rem",
  
  // Content container max-width
  maxWidth: 1100,
  
  // Vertical gaps between sections
  sectionGapMobile: "2.5rem",
  sectionGapDesktop: "4rem",
  
  // Content spacing
  contentGapMobile: "2rem",
  contentGapDesktop: "3rem",
  
  // Card/Item padding
  cardPaddingMobile: "1.75rem",
  cardPaddingDesktop: "2.5rem",
  
  // Grid gaps
  gridGapMobile: "1.5rem",
  gridGapDesktop: "2rem",
  
  // Image/Text pair spacing
  imagePairGapMobile: "2rem",
  imagePairGapDesktop: "4rem",
}

// Helper function for responsive padding
export function getResponsivePadding(isMobile: boolean) {
  return isMobile ? SPACING.sectionPaddingMobile : SPACING.sectionPaddingDesktop
}

// Helper function for responsive gap
export function getResponsiveGap(isMobile: boolean, type: "section" | "content" | "grid" | "pair" = "section") {
  if (isMobile) {
    return type === "section" ? SPACING.sectionGapMobile : 
           type === "content" ? SPACING.contentGapMobile :
           type === "grid" ? SPACING.gridGapMobile :
           SPACING.imagePairGapMobile
  }
  return type === "section" ? SPACING.sectionGapDesktop : 
         type === "content" ? SPACING.contentGapDesktop :
         type === "grid" ? SPACING.gridGapDesktop :
         SPACING.imagePairGapDesktop
}
