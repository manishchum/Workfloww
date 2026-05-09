import * as React from "react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden flex items-center justify-center bg-transparent",
        className
      )}
    >
      <img
        src="/images/logo.png"
        alt="Lucid logo"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}
