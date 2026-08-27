import { Container, Section, SectionHeading } from "@/components/ui/section";
import { STEPS } from "@/lib/content";

export function Process() {
  return (
    <Section id="process" className="py-16 lg:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Commissioning"
          title="Racked and reporting inside twenty minutes"
          description="No agent rollout, no sidecar, no maintenance window. The install is four steps and a screwdriver."
        />

        <div className="relative">
          {/* Cylindrical bus bar linking the step nodes */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-3 rounded-full bg-recess shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)] md:block"
          />

          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {STEPS.map((step) => (
              <li key={step.index} className="flex flex-col items-start gap-4 md:items-center md:text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-chassis font-mono text-sm font-bold text-accent shadow-floating">
                  {step.index}
                </span>
                <h3 className="text-lg font-bold tracking-[-0.02em] emboss">{step.title}</h3>
                <p className="max-w-prose text-base leading-relaxed text-ink-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
