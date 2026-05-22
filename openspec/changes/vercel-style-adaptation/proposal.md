## Why

Inferoute's current landing page uses a uniform visual language — same card shape, same padding, same flat dark surface across every section. While functional, it reads as a "developer docs page" rather than "premium infrastructure product." Vercel's design system solves this exact problem for a similar audience (API/platform developers) using three techniques: atmospheric gradient depth, dramatic section rhythm with polarity flipping, and crisp card elevation — all without sacrificing the technical credibility that developer audiences demand. Adopting these patterns (adapted to inferoute's dark theme and green/red palette) will elevate perceived quality, increase dwell time, and better position the product against competitors like OpenRouter and Together AI.

## What Changes

- **Atmospheric mesh gradient** in the hero section: a route-green-to-flame-red gradient mesh adapted from Vercel's cyan-magenta-amber pattern, rendered as a CSS-only background layer behind the hero content
- **Section polarity flipping**: alternating between canvas (#0d0f0f) and canvas-soft (#151817) band backgrounds across the page to create depth between sections (currently all sections share the same background)
- **Dramatic section rhythm**: increase vertical section padding from the current 64-96px range to 96-192px, with hero at 192px, major sections at 128px, and minor sections at 96px
- **Layered card elevation**: replace flat card borders with Vercel's micro-shadow stack (2-3 layered rgba shadows) plus inset 1px hairline ring, adapted for dark surfaces
- **Pill CTA buttons**: increase CTA border-radius from 6px to ~100px pill shape for primary actions (Start free, Get API key), matching Vercel's 100px marketing CTA
- **Featured card inversion**: highlighted cards (e.g., featured model family, featured pricing tier) invert to a contrasting surface color to stand out from the grid
- **Typography tightening**: adopt negative letter-spacing on display headings (-0.5px to -2px), increase display font weight from 400 to 500-600, ensure all titles end with a period (sentence case)
- **Crisp card geometry**: increase card border-radius from 8px to 12px for marketing cards, add Vercel-style inset hairline borders

## Capabilities

### New Capabilities
- `vercel-surface-system`: Surface polarity flipping, atmospheric mesh gradient, and section band rhythm — the three core Vercel visual techniques adapted for inferoute's dark canvas
- `vercel-card-elevation`: Layered micro-shadow stack, inset hairline borders, pill CTA shape, and featured-card inversion — Vercel's component-level visual treatments

### Modified Capabilities
(none — no existing specs)

## Impact

- **Files changed**: `app/globals.css` (gradient, shadows, surface tokens), `tailwind.config.ts` (new shadow/radius tokens), all `components/landing/*.tsx` (padding, radius, surface classes), `app/page.tsx` (section band ordering)
- **New files**: `app/globals.css` additions only (CSS custom properties for gradient mesh and shadow stack)
- **Dependencies**: None — all CSS-only, using existing Tailwind utilities
- **Breaking changes**: None — purely visual CSS/class changes, no structural or content changes
- **Risk**: Medium — visual changes affect every section; requires careful breakpoint testing to avoid CLS or readability regression on dark backgrounds
