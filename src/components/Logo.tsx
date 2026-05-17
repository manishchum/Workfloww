import * as React from "react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo.png"
      alt="Lucid logo"
      className={cn(
        "object-contain",
        className
      )}
      loading="lazy"
    />
  );
}
