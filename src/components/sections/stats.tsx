import { Container, Section } from "@/components/ui/section";
import { STATS } from "@/lib/content";

export function Stats() {
  return (
    <Section className="py-4">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-dark-chassis px-6 py-10 shadow-floating sm:px-10">
          <div
            aria-hidden
            className="texture-carbon pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
          />
          <dl className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <dt className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-[#a8b2d1]">
                  {stat.label}
                </dt>
                <dd className="font-mono text-3xl font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
