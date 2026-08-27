"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Led } from "@/components/ui/led";
import { Container, Section } from "@/components/ui/section";

export function Cta() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="cta" className="py-16 lg:py-24">
      <Container>
        <div className="screws relative overflow-hidden rounded-2xl bg-chassis px-6 py-14 shadow-floating sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_20rem_at_15%_0%,rgba(255,255,255,0.9),transparent)]"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-7 text-center">
            <Led label="Build slot open · Q4" />
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] emboss sm:text-5xl">
              Put one in the rack this quarter
            </h2>
            <p className="max-w-prose text-lg leading-relaxed text-ink-muted">
              Leave an address and we will send the spec sheet, the install guide, and a loaner unit
              for a two-week trial.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-4 sm:flex-row"
              aria-label="Request a loaner unit"
            >
              <label htmlFor="work-email" className="sr-only">
                Work email
              </label>
              <Input
                id="work-email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="sm:flex-1"
              />
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Request unit
                <ArrowRight size={18} strokeWidth={2} />
              </Button>
            </form>

            <p
              role="status"
              className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-ink-muted"
            >
              {submitted ? "Request logged · we reply within one business day" : "No sales sequence. One reply, from an engineer."}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
