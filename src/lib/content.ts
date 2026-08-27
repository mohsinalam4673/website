import {
  Activity,
  Bell,
  Boxes,
  Gauge,
  Plug,
  Radio,
  ShieldCheck,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

export const BRAND = {
  name: "KONTROL",
  model: "KTL-9",
  tagline: "Telemetry hardware for people who distrust dashboards.",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Field notes", href: "#field-notes" },
] as const;

export interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
  code: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Gauge,
    title: "Sub-second sampling",
    body: "Every probe reports at 500ms without batching, so a spike never hides between two data points.",
    code: "MOD-01",
  },
  {
    icon: ShieldCheck,
    title: "Sealed audit trail",
    body: "Readings are signed at the edge and written append-only. Nothing gets rewritten after the fact.",
    code: "MOD-02",
  },
  {
    icon: Radio,
    title: "Out-of-band uplink",
    body: "An LTE fallback keeps the unit reporting even when the network it monitors is the thing that failed.",
    code: "MOD-03",
  },
  {
    icon: SlidersHorizontal,
    title: "Physical thresholds",
    body: "Set alert bands on the front panel dials. No YAML, no deploy, no waiting on a config rollout.",
    code: "MOD-04",
  },
  {
    icon: Boxes,
    title: "Modular bays",
    body: "Four hot-swap slots take power, thermal, network, or custom probes. Swap under load.",
    code: "MOD-05",
  },
  {
    icon: Plug,
    title: "Open protocol",
    body: "Ships with OpenMetrics, OTLP, and a plain TCP line format for whatever you already run.",
    code: "MOD-06",
  },
];

export const STATS = [
  { value: "99.995%", label: "Uplink availability" },
  { value: "500ms", label: "Sample interval" },
  { value: "18mo", label: "Battery reserve" },
  { value: "4,200+", label: "Units in the field" },
] as const;

export const STEPS = [
  {
    index: "01",
    title: "Rack it",
    body: "One rack unit, two screws, one power lead. The unit self-tests and lights its panel when ready.",
  },
  {
    index: "02",
    title: "Wire the probes",
    body: "Snap probes into the bays. Each one is keyed, so it can only go into a slot it works with.",
  },
  {
    index: "03",
    title: "Set the bands",
    body: "Dial your warning and critical thresholds on the front panel. The LEDs confirm the range.",
  },
  {
    index: "04",
    title: "Watch it run",
    body: "Stream to your own collector, or use the KONTROL console. Both read the same signed feed.",
  },
] as const;

export interface Benefit {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const BENEFITS: Benefit[] = [
  {
    icon: Activity,
    title: "You see the incident first",
    body: "Threshold breaches page from the unit itself, not from a pipeline three hops downstream.",
  },
  {
    icon: Bell,
    title: "Fewer false pages",
    body: "Hardware debounce and hysteresis bands cut alert noise by roughly two thirds in the first month.",
  },
  {
    icon: ShieldCheck,
    title: "An audit you can hand over",
    body: "Signed, append-only history exports straight into compliance review without manual reconciliation.",
  },
];

export const PLANS = [
  {
    name: "Bench",
    price: "$0",
    cadence: "/ forever",
    summary: "One unit, one probe bay, community support.",
    features: ["1 unit", "1 probe bay", "7-day retention", "Community forum"],
    featured: false,
    cta: "Start on bench",
  },
  {
    name: "Rack",
    price: "$180",
    cadence: "/ unit / mo",
    summary: "The standard fit for a production rack.",
    features: [
      "Unlimited probe bays",
      "LTE out-of-band uplink",
      "13-month retention",
      "Signed audit export",
      "Next-day replacement",
    ],
    featured: true,
    cta: "Order a rack unit",
  },
  {
    name: "Facility",
    price: "Talk to us",
    cadence: "",
    summary: "Fleet deployment across sites, with on-site commissioning.",
    features: [
      "Everything in Rack",
      "Fleet provisioning API",
      "On-site commissioning",
      "Custom probe fabrication",
      "24/7 escalation line",
    ],
    featured: false,
    cta: "Book a survey",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We stopped arguing about whether the graph was lagging. The panel and the console agree, so the incident call is about the fix instead of the data.",
    name: "Priya Raghunathan",
    role: "SRE Lead, Northbank Clearing",
    tape: "INCIDENT #4471",
    tilt: "-rotate-1",
  },
  {
    quote:
      "Setting thresholds on a dial sounds like a gimmick until a new engineer changes one at 3am without opening a pull request.",
    name: "Tomas Weber",
    role: "Head of Platform, Kilnworks",
    tape: "SHIFT LOG 02",
    tilt: "rotate-1",
  },
  {
    quote:
      "The out-of-band uplink paid for the whole fleet the first time our core switch went down and the unit still paged us.",
    name: "Dana Okonjo",
    role: "Infrastructure Director, Vessel Health",
    tape: "POST-MORTEM",
    tilt: "-rotate-[0.5deg]",
  },
] as const;

export const FIELD_NOTES = [
  {
    title: "Why we put the alert thresholds back on a dial",
    excerpt:
      "Config-as-code is right for almost everything. Here is the narrow case where a physical control beats it.",
    date: "2026-08-14",
    readingTime: "6 MIN",
    tag: "DESIGN",
  },
  {
    title: "Debouncing in hardware: a field study of 4,200 units",
    excerpt:
      "What twelve months of alert data says about hysteresis bands, flapping probes, and on-call fatigue.",
    date: "2026-07-29",
    readingTime: "11 MIN",
    tag: "RESEARCH",
  },
  {
    title: "Signing telemetry at the edge without wrecking throughput",
    excerpt:
      "The cryptography is the easy part. Keeping the write path append-only under load is where it gets interesting.",
    date: "2026-07-02",
    readingTime: "9 MIN",
    tag: "ENGINEERING",
  },
] as const;
