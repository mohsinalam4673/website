import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { TESTIMONIALS } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Testimonials() {
  return (
    <Section className="py-16 lg:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Field reports"
          title="Pinned up by the people on call"
          description="Three notes from teams running the KTL-9 in production racks."
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((item) => (
            <Card
              key={item.name}
              interactive
              screws={false}
              className={cn("flex flex-col gap-6 pt-12", item.tilt)}
            >
              {/* Push pin */}
              <span
                aria-hidden
                className="absolute left-1/2 top-4 h-5 w-5 -translate-x-1/2 rounded-full bg-accent shadow-[0_3px_6px_rgba(0,0,0,0.35),inset_-1px_-1px_2px_rgba(0,0,0,0.3),inset_2px_2px_3px_rgba(255,255,255,0.6)]"
              />

              <span
                aria-hidden
                className="absolute right-4 top-8 -skew-x-12 bg-[rgba(255,230,0,0.3)] px-3 py-1 font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-ink-muted backdrop-blur-sm"
              >
                {item.tape}
              </span>

              <Quote className="text-accent" size={24} strokeWidth={1.5} />
              <blockquote className="max-w-prose text-base leading-relaxed text-ink">
                {item.quote}
              </blockquote>
              <footer className="mt-auto flex items-center gap-3 border-t border-edge-deep/40 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-recess font-mono text-xs font-bold text-ink-muted shadow-recessed">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-ink">{item.name}</span>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.08em] text-ink-muted">
                    {item.role}
                  </span>
                </span>
              </footer>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
