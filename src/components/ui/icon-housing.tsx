import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/** Icons are never left floating: each sits in a moulded circular housing. */
export function IconHousing({
  icon: Icon,
  className,
  size = 28,
}: {
  icon: LucideIcon;
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-chassis shadow-floating",
        "transition-transform duration-200 ease-mechanical group-hover:rotate-12 group-hover:scale-110",
        className,
      )}
    >
      <Icon className="text-accent" strokeWidth={1.5} size={size} />
    </span>
  );
}
