import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  background?: string;
  padding?: { mobile: string; desktop: string };
  borderTop?: string;
  borderBottom?: string;
  maxWidth?: number;
  id?: string;
}

/**
 * Standardized section wrapper for consistent spacing across all pages
 * Provides uniform padding, margins, and layout structure
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  background = "#fff",
  padding = { mobile: "2.5rem 1.25rem", desktop: "3rem 2rem" },
  borderTop,
  borderBottom,
  maxWidth = 1100,
  id,
}) => {
  return (
    <section
      id={id}
      style={{
        background,
        padding: padding.mobile,
        borderTop: borderTop || "none",
        borderBottom: borderBottom || "none",
      }}
    >
      <div
        style={{
          maxWidth: `${maxWidth}px`,
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          #${id} {
            padding: ${padding.desktop};
          }
        }
      `}</style>
    </section>
  );
};

export default SectionWrapper;
