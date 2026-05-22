## Context

Inferoute's landing page currently uses a flat dark design system: canvas `#0d0f0f` background everywhere, 8px-radius cards with 1px `border-line` borders, 64-96px section padding, and flat flame-red CTAs with 6px radius. The page has no atmospheric depth, no section rhythm variation, and no elevation hierarchy. All 9 sections look structurally identical.

The Vercel design system (analyzed from `awesome-design-md`) achieves premium infrastructure positioning through three core techniques: atmospheric mesh gradients, dramatic section rhythm with polarity flipping, and layered micro-shadow card elevation. We adapt these to inferoute's dark theme while preserving the existing route-green (#00d992) and flame-red (#ea2804) palette.

Constraints:
- Dark-only theme (no light mode)
- Existing design tokens must remain functional (no breaking changes to token names)
- CSS-only — no new JS dependencies
- Must work with existing Tailwind v3 setup
- All content (copy, data, section order) stays unchanged

## Goals / Non-Goals

**Goals:**
- Create atmospheric depth in the hero section with a route-green-to-flame mesh gradient
- Establish dramatic vertical rhythm through 96-192px section padding and polarity-flipped bands
- Add card elevation hierarchy using layered micro-shadows + inset hairlines
- Adopt pill-shaped CTAs for primary marketing actions
- Tighten display typography with negative tracking and sentence-case headings
- Add featured-card inversion for visual hierarchy within grids

**Non-Goals:**
- Changing any marketing copy, data, or section order
- Adding light mode or theme switching
- Replacing fonts (keeping Inter + JetBrains Mono)
- Adding animation or JavaScript-driven effects
- Redesigning the model catalog or detail pages
- Changing the header or footer layout

## Decisions

### 1. Mesh Gradient: CSS radial-gradient composition, hero-only

**Decision**: The hero mesh gradient is a CSS-only composition of 2-3 overlapping `radial-gradient` layers positioned behind hero content. Colors derived from inferoute palette: route-green at 12-15% opacity, flame-red at 10-12% opacity, and a periwinkle (#bdbbff, from Qwen's accent) at 8% for depth.

**Adaptation from Vercel**: Vercel uses cyan→blue→magenta→amber. We substitute route-green (#00d992), flame-red (#ea2804), and periwinkle (#bdbbff) to stay on-brand.

**Rationale**: CSS gradients are zero-cost (no image downloads, no JS), render instantly for LCP, and scale to any viewport. The current body already uses two radial gradients — we replace them with a more dramatic hero-specific composition and remove the body-level gradients for cleaner section separation.

### 2. Section Polarity: Alternating canvas/canvas-soft bands

**Decision**: Odd-numbered sections use `bg-canvas` (#0d0f0f), even-numbered sections use `bg-canvas-soft` (#151817). This creates Vercel-style polarity flipping adapted for dark theme.

**Current → Target**:
```
Hero         → canvas (unchanged)
Stats        → canvas-soft (currently #0c0f0f, close)
Value Props  → canvas (currently canvas)
Model Families → canvas-soft (currently #101211)
Agents       → canvas (currently canvas)
Features     → canvas-soft (currently canvas — CHANGED)
Proof        → canvas (currently canvas)
CTA          → canvas-soft (currently #111413, close)
FAQ          → canvas (currently canvas)
```

**Rationale**: Vercel flips between white (#fff) and ink (#171717). On dark theme, the contrast is subtler — canvas vs canvas-soft — but the alternation still creates perceivable section boundaries without needing border dividers. The `border-b border-line` dividers can be removed where polarity provides sufficient separation.

### 3. Section Rhythm: Three-tier padding scale

**Decision**: Adopt a three-tier vertical padding scale inspired by Vercel's 64-192px range:
- **Hero**: `py-24 lg:py-48` (96px → 192px desktop)
- **Major sections** (Stats, Model Families, Features, CTA): `py-20 lg:py-32` (80px → 128px desktop)
- **Minor sections** (Value Props, Agents, Proof, FAQ): `py-16 lg:py-24` (64px → 96px desktop)

**Current state**: Most sections use `py-16 sm:px-6 lg:py-24` uniformly.

**Rationale**: Vercel's massive whitespace (192px) between sections is the single most impactful technique for premium positioning. Our dark theme needs slightly less (128px max for major sections) to avoid looking empty, but the relative hierarchy is preserved.

### 4. Card Elevation: Layered shadow stack adapted for dark

**Decision**: Replace flat `border border-line` on cards with Vercel's shadow stack, adapted for dark surfaces:

```css
/* Vercel (light) → Inferoute (dark) adaptation */
--shadow-card:
  0 0 0 1px rgba(255, 255, 255, 0.04),   /* inset hairline */
  0 2px 2px rgba(0, 0, 0, 0.25),          /* tight shadow */
  0 8px 8px rgba(0, 0, 0, 0.15);          /* soft spread */
```

Cards get `rounded-xl` (12px radius, up from current 8px) and lose the explicit `border` class.

**Rationale**: On a dark canvas, drop shadows are barely visible. The inset hairline (white at 4% opacity) provides the crisp edge that Vercel achieves with its inset border, while the dark shadow layers add depth that's perceptible against the near-black background.

### 5. Pill CTA: 100px radius for primary marketing buttons

**Decision**: Primary hero and CTA-section buttons use `rounded-[100px]` (Vercel's pill radius). Secondary buttons and in-app buttons retain `rounded-md` (6px).

**Targets**: Hero "Start building free", Hero "Explore Models", CTA "Sign in to get your API key"

**Rationale**: The pill shape is Vercel's strongest marketing-CTA signal. It visually separates marketing actions from product UI, reinforcing the "landing page vs dashboard" context switch.

### 6. Typography: Negative tracking + sentence case periods

**Decision**: Add `tracking-[-0.02em]` to display text (3xl+), `tracking-[-0.01em]` to section headings (xl-2xl). Ensure all section headings end with a period (sentence case).

**Current**: Some headings use `tracking-[-0.01em]` or `tracking-[-0.02em]` inconsistently. Some headings lack terminal periods.

**Rationale**: Vercel's display type uses aggressive negative tracking (-0.6px to -2.4px) to tighten large headlines. The period at the end of every title ("Build and deploy on the AI Cloud.") is a Vercel brand signature that signals confidence and completeness.

### 7. Featured Card Inversion

**Decision**: Within card grids, one card per section can be marked as "featured" — it inverts to `bg-route/10` with `border-route/30` to stand out from the `bg-canvas-soft` grid.

**Application**: First model family card (DeepSeek), first feature module card (Unified Endpoint)

**Rationale**: Vercel inverts its featured pricing tier to black. On our dark theme, inverting to a lighter tint would create the same emphasis. Using route-green at 10% opacity ties the featured state to the brand color.

## Risks / Trade-offs

- **[Gradient performance]** → CSS radial-gradients are GPU-composited and zero-cost. Mitigation: test on low-end mobile (Moto G, iPhone SE) for paint performance.
- **[Subtlety of polarity flipping]** → Canvas (#0d0f0f) vs canvas-soft (#151817) is a very subtle shift on dark theme. Mitigation: acceptable — the section rhythm (padding differences) provides the primary separation signal.
- **[Shadow visibility on dark]** → Dark shadows on dark backgrounds are nearly invisible. Mitigation: the inset hairline (white at 4%) carries the visual load; shadows are supplementary depth cues.
- **[Pill CTA inconsistency]** → Only 3 buttons get pill shape; all others stay rectangular. Mitigation: clear rule — pill = marketing CTA only, rectangular = product/UI actions.
- **[Tracking changes]** → Negative tracking on some headings may cause text collision at certain sizes. Mitigation: test at all breakpoints, especially 320px where headings wrap.
