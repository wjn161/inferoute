## 1. Design Tokens & Global Styles

- [x] 1.1 Add `--shadow-card` CSS custom property in `globals.css` with the three-layer shadow stack: inset hairline (rgba(255,255,255,0.04)), tight shadow (0 2px 2px rgba(0,0,0,0.25)), soft spread (0 8px 8px rgba(0,0,0,0.15))
- [x] 1.2 Add `shadow-card` utility to `tailwind.config.ts` extending `boxShadow`
- [x] 1.3 Remove the current `body` radial-gradient background from `globals.css` (hero will have its own gradient)
- [x] 1.4 Add `.hero-mesh-gradient` CSS class in `globals.css` with 3 overlapping radial-gradients: route-green (#00d992, 14% opacity), flame-red (#ea2804, 11% opacity), periwinkle (#bdbbff, 8% opacity)

## 2. Hero Section — Mesh Gradient & Typography

- [x] 2.1 Add `hero-mesh-gradient` class to the hero section's background layer in `hero-section.tsx`
- [x] 2.2 Update hero h1 tracking from `tracking-[-0.02em]` (verify current value, ensure -0.02em)
- [x] 2.3 Update hero section vertical padding to `py-24 lg:py-48` (192px desktop)
- [x] 2.4 Ensure hero h1 text ends with a period (sentence case)

## 3. Section Polarity Flipping

- [x] 3.1 Set Hero section to `bg-canvas` (confirm current)
- [x] 3.2 Set Stats section to `bg-canvas-soft` (currently `bg-[#0c0f0f]`, change to token)
- [x] 3.3 Set Value Props section to `bg-canvas` (confirm current)
- [x] 3.4 Set Model Families section to `bg-canvas-soft` (currently `bg-[#101211]`, change to token)
- [x] 3.5 Set Agents section to `bg-canvas` (confirm current)
- [x] 3.6 Set Features section to `bg-canvas-soft` (currently `bg-canvas` — CHANGE)
- [x] 3.7 Set Proof section to `bg-canvas` (confirm current)
- [x] 3.8 Set CTA section to `bg-canvas-soft` (currently `bg-[#111413]`, change to token)
- [x] 3.9 Set FAQ section to `bg-canvas` (confirm current)
- [x] 3.10 Evaluate removing `border-b border-line` between polarity-flipped sections where visual separation is sufficient

## 4. Section Padding Scale

- [x] 4.1 Update Stats section padding to `py-20 lg:py-32` (major section)
- [x] 4.2 Update Model Families section padding to `py-20 lg:py-32` (major section)
- [x] 4.3 Update Features section padding to `py-20 lg:py-32` (major section)
- [x] 4.4 Update CTA section padding to `py-20 lg:py-32` (major section)
- [x] 4.5 Update Value Props section padding to `py-16 lg:py-24` (minor section — verify current)
- [x] 4.6 Update Agents section padding to `py-16 lg:py-24` (minor section — verify current)
- [x] 4.7 Update Proof section padding to `py-16 lg:py-24` (minor section — verify current)
- [x] 4.8 Update FAQ section padding to `py-16 lg:py-24` (minor section — verify current)

## 5. Card Elevation & Radius

- [x] 5.1 Replace `border border-line bg-canvas-soft` with `shadow-card bg-canvas-soft rounded-xl` on value prop cards in `value-props-section.tsx`
- [x] 5.2 Replace card styling on model family cards in `model-families-section.tsx` — add `shadow-card`, change to `rounded-xl`
- [x] 5.3 Replace card styling on agent cards in `agents-section.tsx` — add `shadow-card`, change to `rounded-xl`
- [x] 5.4 Replace card styling on feature module cards in `features-section.tsx` — add `shadow-card`, change to `rounded-xl`
- [x] 5.5 Replace card styling on FAQ cards in `faq-section.tsx` — add `shadow-card`, change to `rounded-xl`
- [x] 5.6 Replace card styling on proof badges in `proof-section.tsx` — add `shadow-card`, change to `rounded-xl`
- [x] 5.7 Replace card styling on stats cards in `stats-section.tsx` — add `shadow-card`, change to `rounded-xl`

## 6. Pill CTA Buttons

- [x] 6.1 Change hero "Start building free" button from `rounded-md` to `rounded-[100px]` in `hero-section.tsx`
- [x] 6.2 Change hero "Explore Models" button from `rounded-md` to `rounded-[100px]` in `hero-section.tsx`
- [x] 6.3 Change CTA section "Sign in to get your API key" button from `rounded-md` to `rounded-[100px]` in `cta-section.tsx`
- [x] 6.4 Verify header "Get API key" and "Start free" buttons retain `rounded-md` (not pill)

## 7. Typography Tightening

- [x] 7.1 Add `tracking-[-0.015em]` to all section h2 headings (text-3xl to text-5xl) across all landing components
- [x] 7.2 Ensure all section headings end with a period — audit and update any that don't
- [x] 7.3 Verify hero h1 uses `tracking-[-0.02em]`

## 8. Featured Card Inversion

- [x] 8.1 Add featured styling to DeepSeek card (first card) in `model-families-section.tsx`: `bg-route/10 border-route/30` instead of standard card styling
- [x] 8.2 Add featured styling to Unified Endpoint card (first card) in `features-section.tsx`: `bg-route/10 border-route/30` instead of standard card styling

## 9. Build Verification

- [x] 9.1 Run `pnpm typecheck` — zero errors
- [x] 9.2 Run `pnpm build` — production build succeeds
- [x] 9.3 Run `pnpm lint` — zero warnings
- [x] 9.4 Visual check at breakpoints: 320px, 768px, 1024px, 1280px, 1440px — verify no CLS, readability maintained on dark backgrounds
- [x] 9.5 Verify mesh gradient renders correctly in hero and doesn't bleed into other sections
- [x] 9.6 Verify polarity flipping is visually perceptible between adjacent sections
