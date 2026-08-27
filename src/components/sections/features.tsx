import { Card } from "@/components/ui/card";
import { IconHousing } from "@/components/ui/icon-housing";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { FEATURES } from "@/lib/content";

export function Features() {
  return (
    <Section id="features" className="py-16 lg:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Modules"
          title="Six things the unit does that software alone cannot"
          description="Each bay is a discrete module with its own firmware, its own LED, and its own failure mode. Nothing is shared except the power rail."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.code} interactive vents className="group flex flex-col gap-5">
              <IconHousing icon={feature.icon} />
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-ink-muted">
                  {feature.code}
                </span>
                <h3 className="text-xl font-bold tracking-[-0.02em] emboss">{feature.title}</h3>
                <p className="max-w-prose text-base leading-relaxed text-ink-muted">{feature.body}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
