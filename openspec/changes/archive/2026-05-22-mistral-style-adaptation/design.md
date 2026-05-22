## Context

Adopting Mistral's "AI lab notebook × print magazine" aesthetic. The key insight: Mistral's accent orange (#ea2804) is identical to inferoute's flame color, making this adaptation natural.

## Goals / Non-Goals

**Goals:**
- Convert to warm cream light theme
- Massive editorial hero typography
- One-orange-per-viewport accent rule
- Pill buttons, white cards on cream, section rhythm cycling cream→orange→dark

**Non-Goals:**
- Adding new fonts (keeping Inter + JetBrains Mono as substitutes)
- Changing content or section order
- Adding new routes or pages

## Decisions

### 1. Color Token Remapping

| Token | Old (dark) | New (Mistral light) |
|---|---|---|
| `canvas` | #0d0f0f | #f9f7f3 |
| `canvas-soft` | #151817 | #f3f0e8 |
| `canvas-raised` | #1c201f | #ffffff |
| `line` | #303836 | rgba(32,32,32,0.12) |
| `ink` | #f5f7f5 | #202020 |
| `muted` | #a8b2ad | #575757 |
| `muted-dark` | #717b76 | #8d8d8d |
| `route` | #00d992 | #2b9a66 (darker green for contrast on cream) |
| `flame` | #ea2804 | #ea2804 (unchanged — matches Mistral accent) |

### 2. Typography Scale

Hero headline: 7xl (72px) → clamp to ~96px on wide screens, weight 600, tracking -3px.
Section headings: 5xl-6xl, weight 600, tight tracking.
Body: unchanged.

### 3. Component Rules

- Buttons: pill (9999px), 44px height, primary is flame orange, secondary is dark (#202020) or outlined
- Cards: white bg, 16px radius, no shadow (flat with hairline border)
- Code blocks: dark bg (#202020) with #000000 header bar
- Navigation: 60px, cream bg, hairline bottom

### 4. Section Pattern

Sections cycle: cream canvas → dark code-story band → full-bleed orange CTA.
96px vertical padding between sections, 160px for hero.

## Risks / Trade-offs

- **[Contrast on cream]** → Route green (#00d992) may not meet WCAG on cream. Mitigation: darken to #2b9a66 for text/icons.
- **[Font substitution]** → Inter for editorial display loses some character. Mitigation: tight tracking + large size compensates.
- **[Provider logos]** → Some SVG logos designed for dark backgrounds. Mitigation: test and adjust if needed.
