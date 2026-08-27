import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Level +2 elevation instead of the default Level +1. */
  elevated?: boolean;
  /** Lift the panel off the chassis on hover. */
  interactive?: boolean;
  /** Countersunk screw heads, 12px in from each corner. */
  screws?: boolean;
  /** Recessed ventilation slots in the top-right corner. */
  vents?: boolean;
}

export function Card({
  elevated = false,
  interactive = false,
  screws = true,
  vents = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg bg-chassis p-6 transition-all duration-300 ease-mechanical sm:p-8",
        elevated ? "shadow-floating" : "shadow-card",
        interactive && "hover:-translate-y-1 hover:shadow-floating",
        screws && "screws",
        className,
      )}
      {...props}
    >
      {vents ? <Vents className="absolute right-6 top-6" /> : null}
      {children}
    </div>
  );
}

export function Vents({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex gap-1", className)}>
      {[0, 1, 2].map((slot) => (
        <span
          key={slot}
          className="h-6 w-1 rounded-full bg-recess shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]"
        />
      ))}
    </div>
  );
}
