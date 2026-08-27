import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { FIELD_NOTES } from "@/lib/content";

const THUMBNAILS = [
  "linear-gradient(135deg, #ff4757 0%, #2c3e50 100%)",
  "linear-gradient(135deg, #2c3e50 0%, #a3b1c6 100%)",
  "linear-gradient(135deg, #f1c40f 0%, #2d3436 100%)",
];

export function FieldNotes() {
  return (
    <Section id="field-notes" className="py-16 lg:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Field notes"
          title="What we learned building it"
          description="Design decisions, measurements, and the occasional retraction."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {FIELD_NOTES.map((note, index) => (
            <Card key={note.title} interactive vents className="group flex flex-col gap-5">
              <a href="#field-notes" className="flex flex-col gap-5 focus-visible:outline-none">
                <div className="relative overflow-hidden rounded-md shadow-recessed">
                  <div
                    aria-hidden
                    className="h-36 w-full grayscale transition-all duration-500 group-hover:grayscale-0"
                    style={{ backgroundImage: THUMBNAILS[index % THUMBNAILS.length] }}
                  />
                  <div
                    aria-hidden
                    className="texture-blueprint pointer-events-none absolute inset-0 opacity-10"
                  />
                  <span className="absolute left-3 top-3 -skew-x-12 bg-[rgba(255,255,255,0.6)] px-2 py-1 font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-ink backdrop-blur-sm">
                    {note.date}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-ink-muted">
                    {note.tag} · {note.readingTime}
                  </span>
                  <h3 className="text-lg font-bold leading-snug tracking-[-0.02em] emboss">
                    {note.title}
                  </h3>
                  <p className="max-w-prose leading-relaxed text-ink-muted">{note.excerpt}</p>
                </div>

                <span className="mt-auto inline-flex items-center gap-2 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-accent">
                  Read note
                  <ArrowUpRight size={16} strokeWidth={2} />
                </span>
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
