"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Led } from "@/components/ui/led";
import { Container } from "@/components/ui/section";
import { BRAND, NAV_LINKS } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-chassis/90 backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-chassis shadow-card">
            <span className="h-3 w-3 rounded-sm bg-accent shadow-glow" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-[-0.03em] emboss">{BRAND.name}</span>
            <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-ink-muted">
              {BRAND.model}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <ButtonLink key={link.href} href={link.href} variant="ghost" size="sm">
              {link.label}
            </ButtonLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Led label="System operational" />
          <ButtonLink href="#cta" size="sm">
            Get a unit
          </ButtonLink>
        </div>

        <Button
          variant="secondary"
          size="sm"
          className="h-12 w-12 px-0 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </Button>
      </Container>

      {open ? (
        <div id="mobile-menu" className="animate-drawer-in border-t border-edge-light/60 md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {NAV_LINKS.map((link) => (
              <ButtonLink
                key={link.href}
                href={link.href}
                variant="ghost"
                size="md"
                className="justify-start"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </ButtonLink>
            ))}
            <ButtonLink href="#cta" size="md" onClick={() => setOpen(false)}>
              Get a unit
            </ButtonLink>
            <Led label="System operational" className="px-2 pt-2" />
          </Container>
        </div>
      ) : null}
    </header>
  );
}
