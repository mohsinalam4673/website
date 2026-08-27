import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          "h-14 w-full rounded-md border-none bg-chassis px-6 font-mono text-sm text-ink shadow-recessed",
          "placeholder:text-ink-muted/50 focus-visible:outline-none",
          "focus-visible:shadow-[var(--shadow-recessed),0_0_0_2px_var(--accent)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
