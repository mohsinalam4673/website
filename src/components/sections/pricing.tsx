import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/cn";
import { PLANS } from "@/lib/content";

export function Pricing() {
  return (
    <Section id="pricing" className="py-16 lg:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Price list"
          title="Priced per unit, like hardware should be"
          description="No per-metric billing, no cardinality surprises. You pay for the units you rack."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              elevated={plan.featured}
              interactive
              className={cn(
                "flex flex-col gap-6 pt-12",
                plan.featured && "lg:-translate-y-3 ring-2 ring-accent/30",
              )}
            >
              {/* Punched hanging hole, as on a machined price tag */}
              <span
                aria-hidden
                className="absolute left-1/2 top-5 h-3 w-8 -translate-x-1/2 rounded-full bg-recess shadow-[inset_0_2px_4px_rgba(0,0,0,0.35)]"
              />

              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-mono text-sm font-bold uppercase tracking-[0.08em] text-ink-muted">
                  {plan.name}
                </h3>
                {plan.featured ? (
                  <span className="rounded-sm bg-accent px-2 py-1 font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-accent-ink">
                    Most racked
                  </span>
                ) : null}
              </div>

              <p className="flex items-baseline gap-1">
                <span className="font-mono text-4xl font-medium tracking-[-0.02em] emboss">
                  {plan.price}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
                  {plan.cadence}
                </span>
              </p>

              <p className="max-w-prose leading-relaxed text-ink-muted">{plan.summary}</p>

              <ul className="flex flex-col gap-3 border-t border-edge-deep/40 pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-ink">
                    <Check className="mt-0.5 shrink-0 text-accent" size={18} strokeWidth={2} />
                    {feature}
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="#cta"
                variant={plan.featured ? "primary" : "secondary"}
                size="lg"
                className="mt-auto w-full"
              >
                {plan.cta}
              </ButtonLink>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
