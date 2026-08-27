import { Container, Section, SectionHeading } from "@/components/ui/section";
import { BENEFITS } from "@/lib/content";

export function Benefits() {
  return (
    <Section className="py-16 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-dark-slate px-6 py-14 shadow-floating sm:px-12">
          <div
            aria-hidden
            className="texture-carbon pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
          />
          {/* Radar sweep, anchored off-panel so only the arc reads */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] animate-sweep rounded-full opacity-30"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(255,71,87,0) 0deg, rgba(255,71,87,0) 300deg, rgba(255,71,87,0.55) 360deg)",
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-center">
            <SectionHeading
              onDark
              align="left"
              eyebrow="Why it matters"
              title="Alerts that arrive before the dashboard does"
              description="The unit is the source of truth, not a mirror of one. That changes what an on-call shift feels like."
            />

            <ul className="grid gap-6">
              {BENEFITS.map((benefit) => (
                <li key={benefit.title} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                    <benefit.icon className="text-accent" size={24} strokeWidth={1.5} />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-bold tracking-[-0.02em] text-white">{benefit.title}</h3>
                    <p className="max-w-prose leading-relaxed text-[#a8b2d1]">{benefit.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
