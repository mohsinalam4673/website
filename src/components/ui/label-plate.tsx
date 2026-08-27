import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Stamped metadata plate: monospace, uppercase, machined into the chassis. */
export function LabelPlate({
  children,
  recessed = false,
  className,
}: {
  children: ReactNode;
  recessed?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-sm px-3 py-1.5",
        "font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-ink-muted",
        recessed ? "bg-recess shadow-recessed" : "bg-chassis shadow-card",
        className,
      )}
    >
      {children}
    </span>
  );
}
