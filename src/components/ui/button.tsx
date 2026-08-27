import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex select-none items-center justify-center gap-2 font-sans font-bold uppercase tracking-[0.05em] " +
  "transition-all duration-150 ease-mechanical focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-chassis " +
  "active:translate-y-[2px] active:shadow-pressed disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-ink border border-white/20 " +
    "shadow-[4px_4px_8px_rgba(166,50,60,0.4),-4px_-4px_8px_rgba(255,100,110,0.4)] " +
    "hover:brightness-110 active:border-transparent",
  secondary:
    "bg-chassis text-ink shadow-card hover:text-accent active:border-transparent",
  ghost: "bg-transparent text-ink-muted hover:bg-recess hover:text-ink hover:shadow-recessed",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-12 rounded-md px-4 text-xs",
  md: "min-h-12 rounded-lg px-6 text-sm",
  lg: "min-h-14 rounded-xl px-8 text-base",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, variants[variant], sizes[size], className);
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  );
});

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { variant = "primary", size = "md", className, ...props },
  ref,
) {
  return <a ref={ref} className={buttonClasses(variant, size, className)} {...props} />;
});
