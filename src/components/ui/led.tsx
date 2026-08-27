import { cn } from "@/lib/cn";

type LedTone = "online" | "alert" | "warning";

const tones: Record<LedTone, { dot: string; glow: string }> = {
  online: { dot: "bg-[#22c55e]", glow: "0 0 10px 2px rgba(34,197,94,0.7)" },
  alert: { dot: "bg-accent", glow: "var(--shadow-glow)" },
  warning: { dot: "bg-[#f1c40f]", glow: "0 0 10px 2px rgba(241,196,15,0.7)" },
};

export interface LedProps {
  tone?: LedTone;
  label?: string;
  className?: string;
  labelClassName?: string;
}

export function Led({ tone = "online", label, className, labelClassName }: LedProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden
        className={cn("h-2.5 w-2.5 shrink-0 animate-pulse rounded-full", tones[tone].dot)}
        style={{ boxShadow: tones[tone].glow }}
      />
      {label ? (
        <span
          className={cn(
            "font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-ink-muted",
            labelClassName,
          )}
        >
          {label}
        </span>
      ) : null}
    </span>
  );
}
