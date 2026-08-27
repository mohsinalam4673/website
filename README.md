# website

Marketing site for **KONTROL** (placeholder brand), built as a single Next.js App Router page in the
**Industrial Skeuomorphism** design system: a light-only chassis palette, neumorphic dual shadows
driven by a fixed top-left light source, and manufacturing details (screw heads, vent slots, LEDs,
push pins, punched tags) as first-class components.

## Stack

- Next.js 14 (App Router, TypeScript, `src/` dir)
- Tailwind CSS 3 — design tokens exposed as CSS variables in `src/app/globals.css` and mapped to
  theme keys in `tailwind.config.ts`
- framer-motion for the hero entrance, lucide-react for iconography
- Inter (UI) + JetBrains Mono (numerics, labels, inputs) via `next/font/google`

## Layout

```
src/app/globals.css          tokens (--chassis, --shadow-card, …) + texture utilities
tailwind.config.ts           token → utility mapping (colors, shadows, radii, easing)
src/components/ui/           primitives: Button, Card, Input, Led, LabelPlate, IconHousing, Section
src/components/device-mockup.tsx  the KTL-9 chassis, built entirely in CSS
src/components/sections/     page sections
src/lib/content.ts           placeholder copy and data
```

Styling rule of thumb: reach for a token utility (`shadow-card`, `bg-chassis`, `ease-mechanical`)
rather than a one-off arbitrary value, and add new depth levels to `globals.css` so every surface
stays lit from the same direction.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```
