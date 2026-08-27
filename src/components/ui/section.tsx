import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { LabelPlate } from "@/components/ui/label-plate";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-container px-6 lg:px-12", className)}>{children}</div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <LabelPlate
        className={onDark ? "bg-white/5 text-[#a8b2d1] shadow-none ring-1 ring-white/10" : undefined}
      >
        {eyebrow}
      </LabelPlate>
      <h2
        className={cn(
          "text-3xl font-bold tracking-[-0.03em] sm:text-4xl",
          onDark ? "text-white drop-shadow-md" : "text-ink emboss",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-prose text-base leading-relaxed sm:text-lg",
            onDark ? "text-[#a8b2d1]" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
