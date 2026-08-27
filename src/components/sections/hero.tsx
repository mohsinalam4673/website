"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";
import { DeviceMockup } from "@/components/device-mockup";
import { ButtonLink } from "@/components/ui/button";
import { Led } from "@/components/ui/led";
import { Container, Section } from "@/components/ui/section";
import { slideUp, stagger } from "@/lib/motion";
import { BRAND } from "@/lib/content";

export function Hero() {
  return (
    <Section id="top" className="relative overflow-hidden pb-20 pt-12 lg:pb-28 lg:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_12%_-10%,rgba(255,255,255,0.85),transparent)]"
      />
      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid items-center gap-14 lg:grid-cols-[3fr_2fr] lg:gap-16"
        >
          <div className="flex flex-col items-start gap-7">
            <motion.span variants={slideUp} className="inline-flex rounded-full bg-chassis px-4 py-2 shadow-card">
              <Led label={`${BRAND.model} · shipping now`} />
            </motion.span>

            <motion.h1
              variants={slideUp}
              className="max-w-[15ch] text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] emboss sm:text-6xl lg:text-7xl"
            >
              Infrastructure you can put your hand on.
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="max-w-prose text-lg leading-relaxed text-ink-muted"
            >
              {BRAND.name} is a rack-mounted telemetry unit with its own uplink, its own clock, and
              alert thresholds you set with a dial. When the platform goes quiet, the panel keeps
              talking.
            </motion.p>

            <motion.div variants={slideUp} className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <ButtonLink href="#pricing" size="lg" className="w-full sm:w-auto">
                Order the {BRAND.model}
                <ArrowRight size={18} strokeWidth={2} />
              </ButtonLink>
              <ButtonLink href="#process" variant="secondary" size="lg" className="w-full sm:w-auto">
                <Wrench size={18} strokeWidth={1.5} />
                See the install
              </ButtonLink>
            </motion.div>

            <motion.dl
              variants={slideUp}
              className="mt-2 grid w-full grid-cols-2 gap-3 sm:max-w-md"
            >
              {[
                { term: "Rack space", detail: "1U / 430mm" },
                { term: "Warranty", detail: "5 years, parts" },
              ].map((spec) => (
                <div key={spec.term} className="rounded-md bg-recess px-4 py-3 shadow-recessed">
                  <dt className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-ink-muted">
                    {spec.term}
                  </dt>
                  <dd className="font-mono text-sm font-medium text-ink">{spec.detail}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div variants={slideUp}>
            <DeviceMockup />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
