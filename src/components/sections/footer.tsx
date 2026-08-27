import { Globe, Mail, Rss } from "lucide-react";
import { Led } from "@/components/ui/led";
import { Container, Section } from "@/components/ui/section";
import { BRAND, NAV_LINKS } from "@/lib/content";

const COLUMNS = [
  { heading: "Product", links: ["KTL-9 unit", "Probe bays", "Console", "Changelog"] },
  { heading: "Company", links: ["About", "Fabrication", "Careers", "Press kit"] },
  { heading: "Support", links: ["Install guide", "Spec sheets", "Status", "Contact"] },
] as const;

const SOCIALS = [
  { icon: Rss, label: "Field notes feed" },
  { icon: Mail, label: "Email the team" },
  { icon: Globe, label: "Community" },
] as const;

export function Footer() {
  return (
    <Section className="pb-12 pt-8">
      <Container>
        <div className="screws rounded-xl bg-chassis p-8 shadow-card sm:p-10">
          <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-chassis shadow-card">
                  <span className="h-3 w-3 rounded-sm bg-accent shadow-glow" />
                </span>
                <span className="text-lg font-extrabold tracking-[-0.03em] emboss">{BRAND.name}</span>
              </span>
              <p className="max-w-prose text-base leading-relaxed text-ink-muted">{BRAND.tagline}</p>
              <Led label="All systems nominal" />
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {COLUMNS.map((column) => (
                <div key={column.heading} className="flex flex-col gap-3">
                  <h3 className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-ink-muted">
                    {column.heading}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#top"
                          className="text-sm text-ink transition-colors duration-200 hover:text-accent"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-edge-deep/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.08em] text-ink-muted">
              © {new Date().getFullYear()} {BRAND.name} Instruments · Assembled in Rotterdam
            </p>
            <nav className="flex items-center gap-3" aria-label="Elsewhere">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href="#top"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-chassis text-ink-muted shadow-card transition-all duration-200 ease-mechanical hover:text-accent active:translate-y-[2px] active:shadow-pressed"
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </nav>
            <div className="hidden gap-1 sm:flex" aria-hidden>
              {NAV_LINKS.map((link) => (
                <span
                  key={link.href}
                  className="h-6 w-1 rounded-full bg-recess shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
